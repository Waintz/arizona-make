import { publicFetchRequest } from "../api/axios.instance";

export const identityService = {
  async createShortLivedCode(telegramId: number) {
    try {
      const response = await publicFetchRequest.post(
        `/identity/issue`,
        { telegramId },
        {
          headers: {
            'x-internal-secret': process.env.INTERNAL_BOT_SECRET 
          }
        }
      );

      return response.data.code; 
    } catch (error) {
      console.error("Ошибка при генерации кода:", error);
      throw error;
    }
  },
};
