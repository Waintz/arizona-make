import z from "zod";

export const getStatsSchema = z.object({
  params: z.object({
    raceId: z.string().transform(Number),
  }),
});

export const placeBetSchema = z.object({
  body: z.object({
    raceId: z.string().transform((race) => Number(race)),
    targetAccId: z.string().transform((target) => Number(target)),
    amount: z.string().transform((amount) => Number(amount)),
  }),
});

export type GetStatsDTO = z.infer<typeof getStatsSchema>["params"];
export type PlaceBetDTO = z.infer<typeof placeBetSchema>["body"];
