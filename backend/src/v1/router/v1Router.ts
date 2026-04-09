import { Router } from "express";
import { identityRouter } from "./identity.router";
import { locationRouter } from "./location.router";
import { paymentRouter } from "./payment.router";
import { promoRouter } from "./promo.router";
import { raceRouter } from "./race.router";
import { statsRouter } from "./stats.router";
import { userRouter } from "./user.router";
import { withdrawalRouter } from "./withdrawal.router";

const router = Router();

router.use("/v1/users", userRouter);
router.use("/v1/races", raceRouter);
router.use("/v1/identity", identityRouter);
router.use("/v1/payments", paymentRouter);
router.use("/v1/promo", promoRouter);
router.use("/v1/stats", statsRouter);
router.use("/v1/withdrawals", withdrawalRouter);
router.use("/v1/locations", locationRouter);

export const v1Router = router;