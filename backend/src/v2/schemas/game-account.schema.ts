import z from "zod";

export const verifyGameAccountSchema = z.object({
  body: z.object({
    code: z.string().length(8, "Код должен состоять из 8 символов"),
    gameId: z.coerce.number().int().positive("Невалидный UUID"),
    nickname: z.string().min(3).max(24),
    server: z.number().int(),
    level: z.number().int().default(1),
  }),
});

export type VerifyGameAccountDTO = z.infer<
  typeof verifyGameAccountSchema
>["body"];
