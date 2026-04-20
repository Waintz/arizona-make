import { NextFunction, Request, Response } from "express";
import {
  BuyItemDTO,
  CreateListingDTO,
  DealActionType,
  DealsActionRequest,
  GetFeedDTO,
  GetMyItemsDTO,
  UpdateItemDTO,
} from "../schemas/marketplace.schema";
import { MarketplaceService } from "../services/marketplace/marketplace.service";
import { EntityType } from "../generated";

const marketplaceService = new MarketplaceService();

export const marketplaceController = {
  async createListing(
    req: Request<{}, {}, CreateListingDTO>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const sellerId = Number(req.user?.sub);

      if (!sellerId) {
        throw { status: 401, message: "Пользователь не идентифицирован" };
      }

      const listing = await marketplaceService.createListing(
        sellerId,
        req.body
      );

      res.status(201).json(listing);
    } catch (error) {
      next(error);
    }
  },

  async buyItem(
    req: Request<{}, {}, BuyItemDTO>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const buyerId = Number(req.user?.sub);
      const { itemId } = req.body;

      if (!buyerId) {
        throw { status: 401, message: "Пользователь не идентифицирован" };
      }

      const result = await marketplaceService.createDeal(buyerId, itemId);

      res.status(201).json({
        message: "Сделка создана",
        deal: result,
      });
    } catch (error) {
      next(error);
    }
  },

  async getFeed(req: Request, res: Response, next: NextFunction) {
    try {
      const { limit, server, type, search, minPrice, maxPrice, sort } =
        req.query as unknown as GetFeedDTO["query"];

      const items = await marketplaceService.getDiscoveryFeed(server, limit, {
        type,
        search,
        minPrice,
        maxPrice,
        sort,
      });

      res.status(200).json(items);
    } catch (e) {
      next(e);
    }
  },

  async getMyItems(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.sub;

      if (!userId) {
        throw { status: 401, message: "Пользователь не идентифицирован" };
      }

      const { limit, status } =
        req.query as unknown as GetMyItemsDTO["query"];

      const items = await marketplaceService.getMyListings(
        Number(userId),
        limit,
        status
      );

      res.status(200).json(items);
    } catch (e) {
      next(e);
    }
  },

  async updateItem(req: Request, res: Response, next: NextFunction) {
    try {
      const userId = req.user?.sub;

      if (!userId) {
        throw { status: 401, message: "Пользователь не идентифицирован" };
      }

      const { id } = req.params as unknown as UpdateItemDTO["params"];
      const { description, price, status } =
        req.body as unknown as UpdateItemDTO["body"];

      const updatedItem = await marketplaceService.updateMyItem(
        parseInt(userId),
        Number(id),
        {
          description,
          price,
          status,
        }
      );

      res.status(200).json(updatedItem);
    } catch (e) {
      next(e);
    }
  },

  async dealAction(
    req: Request<{ id: string }, {}, DealsActionRequest["body"]>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { id: dealId } = req.params;
      const data = req.body;

      const result = await marketplaceService.dealAction(
        Number(dealId),
        data.telegramId,
        data.type,
        data.type === DealActionType.REPORT ? data.report : undefined
      );

      res.status(200).json({
        message: "Успешно выполнено",
      });
    } catch (e) {
      next(e);
    }
  },
};
