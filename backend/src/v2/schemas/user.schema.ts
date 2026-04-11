import z from "zod";

export const createUserSchema = z.object({
  telegramId: z.union([z.number(), z.string()]),
  username: z.string().optional(),
});

export const getMeSchma = z.object({})