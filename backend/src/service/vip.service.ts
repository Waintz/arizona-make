import { prisma } from "../../database/db";
import { ApiError } from "../exceptions/api.error";

export const vipService = {
  async issueVip(user_id: number, days: number) {
    const user = await prisma.user.findUnique({
      where: { id: user_id },
    });

    if (!user) throw ApiError.UnauthorizedError();

    let newExpiresAt = new Date();

    if (user?.vip_expires_at && user.vip_expires_at > new Date()) {
      newExpiresAt = new Date(user.vip_expires_at);
    }

    newExpiresAt.setDate(newExpiresAt.getDate() + days);

    await prisma.user.update({
      where: { id: user_id },
      data: { vip_expires_at: newExpiresAt },
    });
  },
};
