import { z } from "zod";

export const generateCodeSchema = z.object({
  body: z.object({
    telegramId: z
      .union([z.number(), z.string()])
      .transform((val) => String(val)),
  }),
});

export const verifyCodeSchema = z.object({
  body: z.object({
    code: z
      .string()
      .min(8, "Код слишком короткий")
      .max(8, "Код слишком длинный"),
  }),
});

export const refreshTokenSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, "Refresh token обязателен"),
  }),
});

export const logoutSchema = z.object({
  body: z.object({
    refreshToken: z.string().min(1, "Refresh token обязателен"),
  }),
});

export type GenerateCodeDTO = z.infer<typeof generateCodeSchema>["body"];
export type VerifyCodeDTO = z.infer<typeof verifyCodeSchema>["body"];
export type RefreshTokenDTO = z.infer<typeof refreshTokenSchema>["body"];
export type LogoutDTO = z.infer<typeof logoutSchema>["body"];
