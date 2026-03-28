import { publicFetchRequest } from "../api/axios.instance";

export const promoService = {
  async activatePromo(data: { code: string; telegramId: number }) {
    try {
      const promo = await publicFetchRequest.post(`/promo/activate`, data);
      
      console.log("promo", promo.data)

      return promo.data;
    } catch (error) {
      console.error("error", error);

      return null;
    }
  },
};
