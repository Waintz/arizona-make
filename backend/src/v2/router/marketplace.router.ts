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
  authMiddleware,
  marketplaceController.buyItem
);

router.post(
  "/deals/:id/action",
  validate(dealsActionSchema),
  checkInternalToken,
  marketplaceController.dealAction
);

router.get(
  "/feed", 
  validate(getFeedSchema),
  authMiddleware,
  marketplaceController.getFeed
);

router.get(
  "/me", 
  validate(getMyItemsSchema),
  authMiddleware,
  marketplaceController.getMyItems
);

router.patch(
  "/:id",
  authMiddleware,
  validate(updateItemSchema),
  marketplaceController.updateItem
);

export const marketplaceRouter = router;
