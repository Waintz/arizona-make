import { Request, Response } from "express";
import { statsService } from "../service/stats.service";

export const statsController = {
  async leaderboard(req: Request, res: Response) {
    try {
      const { limit } = req.query;

      const leaderboard = await statsService.getLeaderboard(
        limit ? Number(limit) : 10
      );

      return res.status(200).json({
        success: true,
        message: "Success",
        leaderboard,
      });
    } catch (error) {
      console.error(error);
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
