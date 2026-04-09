import { prisma } from "../../../database/db";

export const statsService = {
  async getLeaderboard(limit: number = 10) {
    return prisma.gameAccount.findMany({
      where: {
        user: { settings: { is_stealth: false } },
      },
      take: limit,
      orderBy: {
        wins: "desc",
      },
      include: {
        user: true,
      },
    });
  },
};
