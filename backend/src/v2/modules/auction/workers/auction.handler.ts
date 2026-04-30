import { prisma } from "../../../../../database/db";
import { Prisma } from "../../../generated";
import { auctionService } from "../../../services/auction.service";
import { logger } from "../../../utils/logger";

export const auctionHandlers = {
  async openAuction({ auctionId }: { auctionId: number }) {
    logger.info({ auctionId }, "Auction opened");
    const auction = await prisma.auction.findUnique({
      where: { id: auctionId },
    });

    if (!auction) {
      logger.warn({ auctionId }, "Auction not found");
      return;
    }

    if (auction.status !== "CREATED") return;

    await prisma.auction.update({
      where: { id: auction.id },
      data: { status: "OPEN" },
    });
  },

  async closeAuction({ auctionId }: { auctionId: number }) {
    const auction = await prisma.auction.findUnique({
      where: { id: auctionId },
    });

    if (!auction) return;

    if (auction.status === "FINISHED") return;

    try {
      await auctionService.finalizeAuction(auction.id);
      logger.info({ auctionId }, "Auction closed");
    } catch (error: any) {
      if (error.message?.includes("not finished yet")) return;
      logger.warn({ auctionId }, "Failed to close auction, possibly extended");
      throw error;
    }
  },
};
