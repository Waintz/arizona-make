import z from "zod";

const raceSchema = z.object({
  body: z.object({
    locationId: z.number().optional(),
    
  })
})

export type RaceDTO = z.infer<typeof raceSchema>;