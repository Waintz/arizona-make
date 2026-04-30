import { SocketEmitter } from "../../../sockets/socket.utils";
import { logger } from "../../../utils/logger";

export const AuctionEmitter = {
  getRoom(id: number) {
    return `auction:${id}`;
  },

  bidUpdate(
    auctionId: number,
    data: { slot: number; amount?: number; userId: number },
  ) {
    logger.info({ auctionId, ...data }, "Auction bid updated");
    SocketEmitter.toRoom(this.getRoom(auctionId), {
      event: "auction:bid_update",
      data: { auctionId, ...data },
    });
  },

  extend(auctionId: number, endAt: Date) {
    logger.info({ auctionId, newEndAt: endAt }, "Auction extended");

    SocketEmitter.toRoom(this.getRoom(auctionId), {
      event: "auction:extend",
      data: { auctionId, endAt: endAt.toISOString() },
    });
  },

  finish(auctionId: number, winners: number[]) {
    logger.info({ auctionId, winners }, "Auction finished");

    SocketEmitter.toRoom(this.getRoom(auctionId), {
      event: "auction:finished",
      data: { auctionId, winners },
    });
  },
};
