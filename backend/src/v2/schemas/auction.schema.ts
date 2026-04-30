import z from "zod";
import { AuctionTargetType } from "../generated";

export const CreateAuctionSchema = z.object({
  body: z.object({
    title: z.string().min(1).max(255),
    targetType: z.enum(AuctionTargetType),
    targetId: z.number().int(),
    startAt: z
      .string()
      .transform((str) => new Date(str))
      .refine((date) => date > new Date(), {
        message: "Аукцион не может начаться в прошлом",
      }),
    endAt: z
      .string()
      .transform((str) => new Date(str))
      .refine((date) => date > new Date(), {
        message: "Аукцион не может закончиться в прошлом",
      }),
    minBidStep: z.number().int().positive().optional(),
    openSlots: z.number().int().min(0).optional().default(0),
    closedSlots: z.number().int().min(0).optional().default(0),
    hasLuckySlot: z.boolean().optional().default(false),
  }),
});

export const PlaceBidSchema = z.object({
  body: z.object({
    auctionId: z.number().int(),
    slotNumber: z.number().int(),
    amount: z.number().int().positive(),
  }),
})

export type CreateAuctionDTO = z.infer<typeof CreateAuctionSchema>
export type PlaceBidDTO = z.infer<typeof PlaceBidSchema>