import z from "zod";
import { PrizeType } from "../generated";

export const createRaceSchema = z.object({
  body: z.object({
    locationId: z.string().transform(Number),
    prizeType: z.enum(PrizeType),
    prize: z.string(),
    startAt: z
      .string()
      .transform((str) => new Date(str))
      .refine((date) => date > new Date(), {
        message: "Гонка не может начаться в прошлом",
      }),
  }),
});

export const joinRaceSchema = z.object({
  body: z.object({
    secretCode: z.string().min(6).max(6).toUpperCase(),
    gameId: z.number().int(),
    server: z.number().int(),
  }),
});

export const getLeaderBoardSchema = z.object({
  params: z.object({
    raceId: z.string().transform(Number),
  })
})

export const getRaceSchema = z.object({
  params: z.object({
    raceId: z.string().transform(Number),
  })
})

export const finishRaceSchema = z.object({
  body: z.object({
    secretCode: z.string().min(6).max(6).toUpperCase(),
  }),
}) 

export type GetRaceDTO = z.infer<typeof getRaceSchema>;
export type FinishRaceDTO = z.infer<typeof finishRaceSchema>;
export type GetLeaderBoardDTO = z.infer<typeof getLeaderBoardSchema>;
export type CreateRaceDTO = z.infer<typeof createRaceSchema>;
export type JoinRaceDTO = z.infer<typeof joinRaceSchema>;