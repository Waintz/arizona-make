import { z } from "zod";

export const generateCodeSchema = z.object({
  telegramId: z.union([z.number(), z.string()]).transform(val => String(val)),
});

export const verifyCodeSchema = z.object({
  code: z.string().min(8, "Код слишком короткий").max(8, "Код слишком длинный"),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token обязателен"),
});

export const logoutSchema = z.object({
  refreshToken: z.string().min(1, "Refresh token обязателен"),
})