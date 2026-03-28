import { Router } from "express";
import { raceController } from "../controller/race.controller";

const router = Router();

router.get("/", raceController.raceStatus);


router.get("/paths", raceController.getRacePaths);
router.get("/paths/:raceId", raceController.getRacePath);
router.post("/telemetry", raceController.saveTelemetry);

router.post("/finish", raceController.finishRace);

router.post("/forceStart", raceController.forceStart);

router.post("/join", raceController.joinRace);

export const raceRouter = router;
