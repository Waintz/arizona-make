import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate";
import {
  buyItemSchema,
  createListingSchema,
  dealsActionSchema,
  getFeedSchema,
  getMyItemsSchema,
  updateItemSchema,
} from "../schemas/marketplace.schema";
import { marketplaceController } from "../controllers/marketplace.controller";
import { checkInternalToken } from "../middlewares/checkInternalToken";
import { hybridAuthMiddleware } from "../middlewares/hybridAuth.middleware";

const router = Router();

router.post(
  "/",
  validate(createListingSchema),
  authMiddleware,
  marketplaceController.createListing
);

router.post(
  "/deals",
  validate(buyItemSchema),
  hybridAuthMiddleware,
  marketplaceController.buyItem
);

router.post(
  "/deals/:id/action",
  validate(dealsActionSchema),
  hybridAuthMiddleware,
  marketplaceController.dealAction
);

router.get(
  "/feed", 
  validate(getFeedSchema),
  hybridAuthMiddleware,
  marketplaceController.getFeed
);

router.get(
  "/me", 
  validate(getMyItemsSchema),
  hybridAuthMiddleware,
  marketplaceController.getMyItems
);

router.patch(
  "/:id",
  hybridAuthMiddleware,
  validate(updateItemSchema),
  marketplaceController.updateItem
);

export const marketplaceRouter = router;
