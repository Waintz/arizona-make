import { Router } from "express";
import { raceController } from "../controllers/race.controller";
import { checkInternalToken } from "../middlewares/checkInternalToken";
import { validate } from "../middlewares/validate";
import { createRaceSchema, finishRaceSchema, joinRaceSchema } from "../schemas/race.schema";
import { authMiddleware } from "../middlewares/auth.middleware";
import { hybridAuthMiddleware } from "../middlewares/hybridAuth.middleware";

const router = Router();

router.post(
  "/",
  checkInternalToken,
  validate(createRaceSchema),
  raceController.createRace
);

router.get("/", hybridAuthMiddleware, raceController.getActiveRaces);

router.post(
  "/join",
  authMiddleware,
  validate(joinRaceSchema),
  raceController.joinRace
);

router.get("/restore", hybridAuthMiddleware, raceController.restoreRoomsController);

router.get("/:raceId", hybridAuthMiddleware, raceController.getRace);

router.get(
  "/:raceId/leaderboard",
  hybridAuthMiddleware,
  raceController.getLeaderboard
);

router.post(
  "/finish",
  authMiddleware,
  validate(finishRaceSchema),
  raceController.finishRace
);

export const raceRouter = router;
