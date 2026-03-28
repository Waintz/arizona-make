import axios from "axios";
import { publicFetchRequest } from "../api/axios.instance";

interface CreatePaymentDto {
  telegramId?: number;
  userId?: string; 
}

export const paymentService = {
  async createPayment(identifier: CreatePaymentDto) {
    try {
      const { data } = await publicFetchRequest.post(`/payments`, identifier);

      return {
        success: true,
        specialCode: data.specialCode,
        amount: data.amount,
      };
    } catch (error) {
      console.error("Ошибка создания платежа:", error);
      return { success: false, message: "Сервер недоступен" };
    }
  },

  async verifyPayment(
    identifier: CreatePaymentDto,
    days: number
  ) {
    try {
      const { data } = await publicFetchRequest.post(`/payments/verify`, {
        ...identifier,
        days,
      });

      return data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        return error.response.data;
      }
      return { success: false, message: "Ошибка сети" };
    }
  },
};
