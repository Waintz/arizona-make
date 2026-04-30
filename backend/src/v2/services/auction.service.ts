import { prisma } from "../../../database/db";
import { Prisma, SlotType } from "../generated";
import { auctionQueue } from "../modules/auction/queues/auction.queue";
import { CreateAuctionDTO } from "../schemas/auction.schema";
import { logger } from "../utils/logger";
import { AuctionEmitter } from "../modules/auction/sockets/auction.socket";

type SlotInput = {
  number: number;
  type: SlotType;
  auction_id: number;
};

export const auctionService = {
  async createAuction(
    tx: Prisma.TransactionClient,
    options: CreateAuctionDTO["body"],
  ) {
    const auction = await tx.auction.create({
      data: {
        title: options.title,
        target_type: options.targetType,
        target_id: options.targetId,
        status: "CREATED",
        start_at: options.startAt,
        end_at: options.endAt,
        min_bid_step: options.minBidStep ?? 5,
      },
    });

    const slots: SlotInput[] = [];
    let n = 1;

    for (let i = 0; i < options.openSlots; i++) {
      slots.push({ auction_id: auction.id, number: n++, type: "OPEN" });
    }

    for (let i = 0; i < options.closedSlots; i++) {
      slots.push({ auction_id: auction.id, number: n++, type: "CLOSED" });
    }

    if (options.hasLuckySlot) {
      slots.push({ auction_id: auction.id, number: n, type: "LUCKY" });
    }

    await tx.auctionSlot.createMany({ data: slots });

    const startDelay = Math.max(0, options.startAt.getTime() - Date.now());
    await auctionQueue.add(
      "open-auction",
      { auctionId: auction.id },
      { delay: startDelay, jobId: `auction_${auction.id}_open` },
    );

    const endDelay = Math.max(0, options.endAt.getTime() - Date.now());
    await auctionQueue.add(
      "close-auction",
      { auctionId: auction.id },
      { delay: endDelay, jobId: `auction_${auction.id}_close` },
    );

    return auction;
  },

  async placeBid(
    userId: number,
    auctionId: number,
    slotNumber: number,
    amount: number,
  ) {
    return prisma.$transaction(async (tx) => {
      const auction = await tx.auction.findUnique({
        where: { id: auctionId },
        select: {
          id: true,
          start_at: true,
          end_at: true,
          min_bid_step: true,
        },
      });

      if (!auction) throw "Auction not found";

      const now = Date.now();
      if (now < auction.start_at.getTime() || now > auction.end_at.getTime()) {
        throw new Error("Auction not active");
      }

      const slot = await tx.auctionSlot.findFirst({
        where: { auction_id: auctionId, number: slotNumber },
      });

      if (!slot) throw "Slot not found";

      if (slot.type === "LUCKY") {
        throw "Invalid slot";
      }

      if (slot.type === "CLOSED") {
        const already = await tx.auctionBid.findFirst({
          where: {
            auction_id: auctionId,
            user_id: userId,
            slot_number: slotNumber,
          },
        });

        if (already) {
          throw "You already placed sealed bid here";
        }

        const user = await tx.user.findUnique({
          where: { id: userId },
          select: { points: true },
        });

        if (!user || user.points < amount) {
          throw "Not enough points";
        }

        await tx.user.update({
          where: { id: userId },
          data: { points: { decrement: amount } },
        });

        const bid = await tx.auctionBid.create({
          data: {
            auction_id: auctionId,
            user_id: userId,
            slot_number: slotNumber,
            amount,
            is_active: true,
          },
        });

        AuctionEmitter.bidUpdate(auctionId, {
          slot: slotNumber,
          amount: undefined,
          userId,
        });

        return bid;
      }

      const minRequired =
        slot.current_bid === 0
          ? auction.min_bid_step
          : slot.current_bid + auction.min_bid_step;

      if (amount < minRequired) {
        throw `Min bid: ${minRequired}`;
      }

      const user = await tx.user.findUnique({
        where: { id: userId },
        select: { points: true },
      });

      if (!user || user.points < amount) {
        throw "Not enough points";
      }

      const updated = await tx.auctionSlot.updateMany({
        where: {
          id: slot.id,
          current_bid: slot.current_bid,
        },
        data: {
          current_bid: amount,
          winner_id: userId,
        },
      });

      if (updated.count === 0) {
        throw "Bid already overtaken";
      }

      await tx.user.update({
        where: { id: userId },
        data: { points: { decrement: amount } },
      });

      await tx.auctionBid.create({
        data: {
          auction_id: auctionId,
          user_id: userId,
          slot_number: slotNumber,
          amount,
          is_active: true,
        },
      });

      AuctionEmitter.bidUpdate(auctionId, {
        slot: slotNumber,
        amount,
        userId,
      });

      const secondsLeft = (auction.end_at.getTime() - now) / 1000;

      if (secondsLeft <= 30) {
        const newEnd = new Date(auction.end_at.getTime() + 30_000);

        await tx.auction.update({
          where: { id: auctionId },
          data: { end_at: newEnd },
        });

        AuctionEmitter.extend(auctionId, newEnd);
      }

      return true;
    });
  },

  async finalizeAuction(auctionId: number) {
    return prisma.$transaction(async (tx) => {
      const auction = await tx.auction.findUnique({
        where: { id: auctionId },
      });

      if (!auction) throw "Auction not found";

      const topBids = await tx.$queryRaw<
        Array<{ slot_number: number; user_id: number; amount: number }>
      >`
        SELECT DISTINCT ON ("slot_number")
          "slot_number",
          "user_id",
          "amount"
        FROM "AuctionBid"
        WHERE "auction_id" = ${auctionId}
        ORDER BY "slot_number", "amount" DESC
      `;

      const winners = topBids.map((b) => b.user_id);

      for (const b of topBids) {
        await tx.auctionSlot.updateMany({
          where: {
            auction_id: auctionId,
            number: b.slot_number,
          },
          data: {
            winner_id: b.user_id,
            current_bid: b.amount,
          },
        });
      }

      if (winners.length > 0) {
        switch (auction.target_type) {
          case "RACE": {
            if (!auction.target_id) throw "У RACE нет target_id";

            const gameAccounts = await tx.gameAccount.findMany({
              where: {
                user_id: { in: winners },
                is_main: true,
              },
              select: { id: true, user_id: true },
            });

            const accountMap = gameAccounts.reduce(
              (acc, curr) => {
                acc[curr.user_id] = curr.id;
                return acc;
              },
              {} as Record<number, number>,
            );

            const participantsData = winners
              .filter((userId) => accountMap[userId])
              .map((userId) => ({
                race_id: auction.target_id as number,
                user_id: userId,
                game_account_id: accountMap[userId],
              }));

            if (participantsData.length > 0) {
              await tx.raceParticipant.createMany({
                data: participantsData,
                skipDuplicates: true,
              });
            } else {
              logger.warn(
                `[Auction] ⚠️ Ни у одного победителя аукциона #${auctionId} нет игрового аккаунта!`,
              );
            }
            break;
          }
          case "PROPERTY": {
            break;
          }
        }
      }

      await tx.auction.update({
        where: { id: auctionId },
        data: { status: "FINISHED" },
      });

      AuctionEmitter.finish(auctionId, winners);

      return { winners };
    });
  },
};
