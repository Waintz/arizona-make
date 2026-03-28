import { publicFetchRequest } from "../api/axios.instance";

export const statsService = {
  async getLeaderboard(limit: number = 10) {
    try {
      const leaderboard = await publicFetchRequest.get("/stats/leaderboard", {
        params: {
          limit,
        },
      });

      return {
        status: leaderboard.status,
        data: leaderboard.data,
        success: true,
      };
    } catch (error) {
      console.error("Ошибка создании гонки:", error);
      return { success: false, message: "Сервер недоступен" };
    }
  },
};
