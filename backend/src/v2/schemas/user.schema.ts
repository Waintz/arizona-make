import z from "zod";

export const createUserSchema = z.object({
  body: z.object({
    telegramId: z.union([z.number(), z.string()]),
    username: z.string().optional(),
  }),
});

export type CreateUserDTO = z.infer<typeof createUserSchema>["body"];
