import { Router } from "express";
import { betController } from "../controllers/bet.controller";
import { hybridAuthMiddleware } from "../middlewares/hybridAuth.middleware";
import { adminMiddleware } from "../middlewares/admin.meddleware";
import { authMiddleware } from "../middlewares/auth.middleware";
import { validate } from "../middlewares/validate";
import { getStatsSchema } from "../schemas/bet.schema";

const router = Router();

router.get(
  "/stats/:raceId",
  validate(getStatsSchema),
  hybridAuthMiddleware,
  betController.getStats,
);

router.post("/place", hybridAuthMiddleware, betController.placeBet);

router.post(
  "/rollback",
  authMiddleware,
  adminMiddleware,
  betController.rollbackBets,
);

export const betRouter = router;
