import { string, z } from "zod";
import { CarRaritySchema, OilStatusSchema } from "../generated/zod/schemas";
import { EntityType, EvidenceFileType, ListingStatus } from "../generated";

export enum DealActionType {
  CONFIRM_CONTACT = "CONFIRM_CONTACT",
  CONFIRM_DEAL = "CONFIRM_DEAL",
  CANCEL = "CANCEL",
  CANCEL_WITH_PENALTY = "CANCEL_WITH_PENALTY",
  CANCEL_EARLY = "CANCEL_EARLY",
  REPORT = "REPORT",
}

const baseListing = z.object({
  title: z.string().min(3).max(50),
  price: z.coerce.bigint().positive(),
  server: z.number().int().positive(),
  description: z.string().max(200).optional(),
});

export const createListingSchema = z.object({
  body: z.discriminatedUnion("entity_type", [
    z.object({
      entity_type: z.literal("CAR"),
      ...baseListing.shape,
      car_details: z.object({
        account_id: z.number().int(),
        model_id: z.number().int(),
        rarity: CarRaritySchema.default("JUNK"),
        plate_number: z.string().optional(),
        mileage: z.number().default(0),
        oil_status: OilStatusSchema.default("GOOD"),
        condition: z.number().int().min(0).max(100).default(100),
        has_launch: z.boolean().default(false),
      }),
    }),
    z.object({
      entity_type: z.literal("HOUSE"),
      ...baseListing.shape,
      house_details: z.object({
        house_number: z.number().int(),
        location: z.string(),
        has_garage: z.boolean().default(false),
      }),
    }),
  ]),
});

export const buyItemSchema = z.object({
  body: z.object({
    itemId: z.number().int().positive(),
  }),
});

const evidenceSchema = z.object({
  tgFileId: z.string(),
  fileType: z.enum(EvidenceFileType).default("PHOTO"),
});

const reportSchema = z.object({
  reason: z.string().min(1, "Укажите причину жалобы"),
  evidences: z
    .array(evidenceSchema)
    .min(1, "Добавьте хотя бы одно доказательство"),
});

export const dealsActionSchema = z.object({
  params: z.object({
    id: z.string().regex(/^\d+$/).transform(Number),
  }),
  body: z.discriminatedUnion("type", [
    z.object({
      type: z.literal(DealActionType.CONFIRM_CONTACT),
    }),
    z.object({
      type: z.literal(DealActionType.CONFIRM_DEAL),
    }),
    z.object({
      type: z.literal(DealActionType.CANCEL),
    }),
    z.object({
      type: z.literal(DealActionType.REPORT),
      report: reportSchema,
    }),
  ]),
});

export const getFeedSchema = z.object({
  query: z.object({
    server: z
      .string()
      .optional()
      .transform((val) => (val ? Number(val) : -1)),
    limit: z
      .string()
      .optional()
      .transform((val) => (val ? Number(val) : 20)),
    type: z.enum(["CAR", "HOUSE", "BUSINESS"]).optional(),
    search: z.string().optional(),
    minPrice: z
      .string()
      .optional()
      .transform((val) => (val ? BigInt(val) : undefined)),
    maxPrice: z
      .string()
      .optional()
      .transform((val) => (val ? BigInt(val) : undefined)),
    sort: z.enum(["price_asc", "price_desc", "newest"]).optional(),
  }),
});

export const getMyItemsSchema = z.object({
  query: z.object({
    limit: z
      .string()
      .optional()
      .transform((val) => (val ? Number(val) : 20)),
    status: z.enum(ListingStatus).optional(),
  }),
});

export const updateItemSchema = z.object({
  params: z.object({
    id: z.string().transform(Number),
  }),
  body: z.object({
    description: z.string().max(500).optional(),
    price: z.string().optional().transform((val) => (val ? BigInt(val) : undefined)),
    status: z.enum(ListingStatus).optional(),
  }),
});

export type UpdateItemDTO = z.infer<typeof updateItemSchema>;
export type GetMyItemsDTO = z.infer<typeof getMyItemsSchema>;
export type GetFeedDTO = z.infer<typeof getFeedSchema>;
export type ReportDTO = z.infer<typeof reportSchema>;
export type EvidenceDTO = z.infer<typeof evidenceSchema>;
export type DealsActionRequest = z.infer<typeof dealsActionSchema>;
export type BuyItemDTO = z.infer<typeof buyItemSchema>["body"];
export type CreateListingDTO = z.infer<typeof createListingSchema>["body"];
