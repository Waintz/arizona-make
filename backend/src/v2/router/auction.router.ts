import { Router } from "express";
import { AuctionController } from "../controllers/auction.controller";
import { authMiddleware } from "../middlewares/auth.middleware";
import { checkInternalToken } from "../middlewares/checkInternalToken";
import { CreateAuctionSchema, PlaceBidSchema } from "../schemas/auction.schema";
import { validate } from "../middlewares/validate";
import { adminMiddleware } from "../middlewares/admin.meddleware";
import { hybridAuthMiddleware } from "../middlewares/hybridAuth.middleware";

const router = Router();

router.post(
  "/",
  checkInternalToken,
  validate(CreateAuctionSchema),
  AuctionController.create,
);

router.post(
  "/bid",
  hybridAuthMiddleware,
  validate(PlaceBidSchema),
  AuctionController.placeBid,
);

router.get("/:id", hybridAuthMiddleware, AuctionController.getOne);

router.post("/:id/finalize", checkInternalToken, AuctionController.finalize);

export const auctionRouter = router;
