import jwt from "jsonwebtoken";
import { prisma } from "../../database/db";
import { TokenPayload } from "../types/auth.types";

export class TokenService {
  generateTokens(payload: TokenPayload) {
    const accessToken = jwt.sign(
      payload,
      process.env.JWT_ACCESS_SECRET as string,
      { expiresIn: "1h" }
    );
    const refreshToken = jwt.sign(
      payload,
      process.env.JWT_REFRESH_SECRET as string,
      { expiresIn: "30d" }
    );

    return { accessToken, refreshToken };
  }

  async removeToken(refreshToken: string) {
    const tokenData = await prisma.tokens.delete({
      where: { refresh_token: refreshToken },
      select: {
        id: true,
        user_id: true,
        refresh_token: true,
        created_at: true,
      },
    });

    return tokenData;
  }

  validateAccessToken(token: string) {
    try {
      const userData = jwt.verify(
        token,
        process.env.JWT_ACCESS_SECRET as string
      );
      return userData as TokenPayload;
    } catch (error) {
      return null;
    }
  }

  validateRefreshToken(token: string) {
    try {
      const userData = jwt.verify(
        token,
        process.env.JWT_REFRESH_SECRET as string
      );
      return userData as TokenPayload;
    } catch (error) {
      return null;
    }
  }

  async findToken(refreshToken: string) {
    const tokenData = await prisma.tokens.findUnique({
      where: { refresh_token: refreshToken },
    });
    return tokenData;
  }

  async saveToken(userId: number, refreshToken: string, tx?: any) {
    const client = tx || prisma;
    return await client.tokens.upsert({
      where: {
        user_id: userId,
      },
      update: {
        refresh_token: refreshToken,
      },
      create: {
        user_id: userId,
        refresh_token: refreshToken,
      },
    });
  }
}
