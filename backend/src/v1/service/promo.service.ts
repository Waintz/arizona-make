import { prisma } from "../../../database/db";
import { PromoCode } from "../generated/client";
import { ApiError } from "../exceptions/api.error";

interface GetPromoDto {
  telegramId?: number;
  userId?: string;
}

export const promoService = {
  async checkValidPromocode(code: string) {
    const promo = await prisma.promoCode.findUnique({
      where: { code: code },
    });

    return promo;
  },

  async activatePromo(data: { telegramId: number; promo: PromoCode }) {
    try {
      return await prisma.$transaction(async (tx: any) => {
        await tx.promoCode.update({
          where: { id: data.promo.id },
          data: {
            is_used: true,
            used_at: new Date(),
            user: {
              connect: {
                telegram_id: BigInt(data.telegramId),
              },
            },
          },
        });
        switch (data.promo.type) {
          case "VIP_DAYS":
            const user = await tx.user.findUnique({
              where: { telegram_id: BigInt(data.telegramId) },
            });

            if (!user) throw ApiError.BadRequest("Promocode not found");

            let newExpiresAt = new Date();

            if (user?.vip_expires_at && user.vip_expires_at > new Date()) {
              newExpiresAt = new Date(user.vip_expires_at);
            }

            newExpiresAt.setDate(newExpiresAt.getDate() + data.promo.value);

            await tx.user.update({
              where: { telegram_id: BigInt(data.telegramId) },
              data: { vip_expires_at: newExpiresAt },
            });

            break;

          default:
            break;
        }
        return {
          status: "success",
          message: "Promocode activated.",
        };
      });
    } catch (error) {
      console.log(error);
      return {
        status: "failed",
        message: "Promocode not found.",
      };
    }
  },
};
