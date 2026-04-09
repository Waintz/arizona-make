import { Router } from "express";
import { statsController } from "../controller/stats.controller";

const router = Router();

router.get("/leaderboard", statsController.leaderboard);

export const statsRouter = router;
