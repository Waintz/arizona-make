import { prisma } from "../../../../database/db";
import { EntityType, ListingStatus, Prisma } from "../../generated";
import {
  CreateListingDTO,
  DealActionType,
  ReportDTO,
} from "../../schemas/marketplace.schema";
import { BaseDealAction } from "./actions/base.action";
import { CancelEarlyAction } from "./actions/cancel-early.action";
import { CancelWithPenaltyAction } from "./actions/cancel-with-penalty.action";
import { CancelAction } from "./actions/cancel.action";
import { ConfirmContactAction } from "./actions/confirm-contact.action";
import { ConfirmDealAction } from "./actions/confirm-deal.action";
import { ReportAction } from "./actions/report.action";

const ACTION_HANDLERS: Record<DealActionType, BaseDealAction> = {
  [DealActionType.CONFIRM_CONTACT]: new ConfirmContactAction(),
  [DealActionType.CONFIRM_DEAL]: new ConfirmDealAction(),
  [DealActionType.CANCEL]: new CancelAction(),
  [DealActionType.REPORT]: new ReportAction(),
  [DealActionType.CANCEL_WITH_PENALTY]: new CancelWithPenaltyAction(),
  [DealActionType.CANCEL_EARLY]: new CancelEarlyAction(),
};

export class MarketplaceService {
  async createListing(sellerId: number, data: CreateListingDTO) {
    return await prisma.$transaction(async (tx) => {
      const item = await tx.marketplaceItem.create({
        data: {
          entity_type: data.entity_type,
          title: data.title,
          price: data.price,
          server: data.server,
          description: data.description,
          seller_id: sellerId,
        },
      });

      switch (data.entity_type) {
        case "CAR":
          await tx.carListing.create({
            data: { ...data.car_details, item_id: item.id },
          });
          break;

        case "HOUSE":
          await tx.houseListing.create({
            data: { ...data.house_details, item_id: item.id },
          });
          break;

        default:
          const _exhaustiveCheck: never = data;
          return _exhaustiveCheck;
      }

      return tx.marketplaceItem.findUnique({
        where: { id: item.id },
        include: {
          car_details: true,
          house_details: true,
        },
      });
    });
  }

  private async updateStatusItem(
    tx: Prisma.TransactionClient,
    itemId: number,
    status: ListingStatus
  ) {
    await tx.marketplaceItem.update({
      where: {
        id: itemId,
      },
      data: { status },
    });
  }

  private async getItem(tx: Prisma.TransactionClient, itemId: number) {
    return await tx.marketplaceItem.findUnique({
      where: { id: itemId },
      include: { seller: true },
    });
  }

  async createDeal(buyerId: number, itemId: number) {
    return await prisma.$transaction(async (tx) => {
      const item = await this.getItem(tx, itemId);

      if (!item) {
        throw { status: 404, message: "Объявление не найдено" };
      }

      if (item.status !== "FOR_SALE") {
        throw {
          status: 400,
          message: "Автомобиль уже забронирован или продан",
        };
      }

      if (item.seller_id === buyerId) {
        throw {
          status: 400,
          message: "Вы не можете купить собственный автомобиль",
        };
      }

      const now = new Date();

      const deal = await tx.marketplaceDeal.create({
        data: {
          item_id: item.id,
          buyer_id: buyerId,
          status: "PENDING",

          buyer_contact_deadline: new Date(now.getTime() + 60 * 60 * 1000),

          seller_action_deadline: new Date(now.getTime() + 24 * 60 * 60 * 1000),
        },
      });

      await this.updateStatusItem(tx, itemId, "TRADING");

      return deal;
    });
  }

  async dealAction(
    dealId: number,
    userId: number,
    type: DealActionType,
    report?: ReportDTO
  ) {
    return prisma.$transaction(async (tx) => {
      const deal = await tx.marketplaceDeal.findUnique({
        where: { id: dealId },
        include: { item: true },
      });
      if (!deal) throw { status: 404, message: "Сделка не найдена" };

      const user = await tx.user.findUnique({
        where: { id: userId },
      });

      if (!user) throw { status: 401, message: "Пользователь не найден" };

      const handler = ACTION_HANDLERS[type];
      if (!handler) throw { status: 400, message: "Неизвестное действие" };

      const isBuyer = deal.buyer_id === user.id;
      const isSeller = deal.item.seller_id === user.id;

      await handler.execute({ tx, deal, user, isBuyer, isSeller, report });

      return { success: true };
    });
  }

  async getDiscoveryFeed(
    server: number | string,
    limit: number | string = 20,
    filters: {
      type?: "CAR" | "HOUSE" | "BUSINESS";
      search?: string;
      minPrice?: bigint | string;
      maxPrice?: bigint | string;
      sort?: "price_asc" | "price_desc" | "newest";
    }
  ) {
    const now = new Date();

    let safeServer = parseInt(String(server), 10);
    if (isNaN(safeServer)) safeServer = 14;

    const safeLimit = Number(limit) || 20;

    const serverFilter =
      safeServer === -1
        ? Prisma.empty
        : Prisma.sql`AND i.server = ${safeServer}::integer`;

    const typeFilter = filters.type
      ? Prisma.sql`AND i.entity_type::text = ${filters.type}`
      : Prisma.empty;

    let searchFilter = Prisma.empty;
    if (filters.search) {
      const searchNum = parseInt(filters.search, 10);
      if (!isNaN(searchNum)) {
        searchFilter = Prisma.sql`AND (
        i.title ILIKE ${"%" + filters.search + "%"}
        OR h.house_number = ${searchNum}::integer
        OR c.model_id = ${searchNum}::integer
      )`;
      } else {
        searchFilter = Prisma.sql`AND (i.title ILIKE ${
          "%" + filters.search + "%"
        })`;
      }
    }

    const priceFilter = Prisma.sql`
    ${
      filters.minPrice
        ? Prisma.sql`AND i.price >= ${filters.minPrice}::bigint`
        : Prisma.empty
    }
    ${
      filters.maxPrice
        ? Prisma.sql`AND i.price <= ${filters.maxPrice}::bigint`
        : Prisma.empty
    }
  `;

    let orderBy = Prisma.sql`ORDER BY (CASE WHEN is_boosted = true AND boost_until > ${now} THEN 1 ELSE 0 END) DESC, reputation DESC, RANDOM()`;

    if (filters.sort === "price_asc") orderBy = Prisma.sql`ORDER BY price ASC`;
    if (filters.sort === "price_desc")
      orderBy = Prisma.sql`ORDER BY price DESC`;
    if (filters.sort === "newest")
      orderBy = Prisma.sql`ORDER BY created_at DESC`;

    return await prisma.$queryRaw`
    WITH RankedItems AS (
      SELECT 
        i.*, u.reputation, u.username as seller_name,
        c.model_id, c.rarity,
        h.house_number, h.location as house_location,
        ROW_NUMBER() OVER(
          PARTITION BY i.seller_id 
          ORDER BY (CASE WHEN i.is_boosted = true AND i.boost_until > ${now} THEN 1 ELSE 0 END) DESC, i.created_at DESC
        ) as user_item_rank
      FROM "marketplace_items" i
      JOIN "User" u ON i.seller_id = u.id
      LEFT JOIN "car_listings_details" c ON i.id = c.item_id
      LEFT JOIN "house_listings_details" h ON i.id = h.item_id
      WHERE i.status = 'FOR_SALE'
      ${serverFilter}
      ${typeFilter}
      ${searchFilter}
      ${priceFilter}
    )
    SELECT * FROM RankedItems
    WHERE user_item_rank <= 3
    ${orderBy}
    LIMIT ${safeLimit}::integer
  `;
  }

  async getMyListings(
    userId: number,
    limit: number = 20,
    status?: ListingStatus | false
  ) {
    return await prisma.marketplaceItem.findMany({
      where: {
        seller_id: userId,
        ...(status ? { status: status } : {}),
      },
      orderBy: {
        created_at: "desc",
      },
      take: limit,
      include: {
        car_details: true,
        house_details: true,
      },
    });
  }

  async updateMyItem(
    userId: number,
    itemId: number,
    data: { description?: string; price?: bigint; status?: ListingStatus }
  ) {
    const item = await prisma.marketplaceItem.findUnique({
      where: { id: itemId },
    });

    if (!item) {
      throw new Error("Товар не найден");
    }

    if (item.seller_id !== userId) {
      throw new Error("У вас нет прав на редактирование этого лота");
    }

    if (
      item?.status &&
      (item.status === "SOLD" ||
        item.status === "TRADING" ||
        item.status === "EXPIRED")
    ) {
      throw new Error("Нельзя редактировать уже проданный лот");
    }

    return await prisma.marketplaceItem.update({
      where: { id: itemId },
      data: {
        ...(data.description !== undefined && {
          description: data.description,
        }),
        ...(data.price !== undefined && { price: data.price }),
        ...(data.status !== undefined && {
          status: data.status as ListingStatus,
        }),
      },
    });
  }
}
