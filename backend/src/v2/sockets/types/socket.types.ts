export type IncomingPayload =
  | { event: "room:join"; data: { roomId: string } }
  | { event: "room:leave"; data?: never }
  | { event: "auction:join"; data: { auctionId: number } }
  | { event: "auction:leave"; data: { auctionId: number } };

export type OutgoingPayload =
  | { event: "race:closed"; data: {} }
  | { event: "room:joined"; data: { roomId: string } }
  | {
      event: "race:player_finished";
      data: { userId: number; position: number; isWinner: boolean };
    }
  | { event: "room:player_joined"; data: { username: string } }
  | { event: "room:left"; data: { roomId: string } }
  | { event: "room:player_left"; data: { username: string } }
  | { event: "error"; data: { message: string } }
  | {
      event: "race:status";
      data: { status: "PREPARING" | "COUNTDOWN" | "GO"; seconds?: number };
      startTime?: string;
    }
  | {
      event: "auction:bid_update";
      data: {
        auctionId: number;
        slot: number;
        amount?: number;
        userId: number;
      };
    }
  | {
      event: "auction:extend";
      data: {
        auctionId: number;
        endAt: string;
      };
    }
  | {
      event: "auction:finished";
      data: {
        auctionId: number;
        winners: number[];
      };
    };
