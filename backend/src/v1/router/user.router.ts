import { Router } from "express";
import { userController } from "../controller/user.controller";

const router = Router();

router.post("/registration", userController.registrationTelegram);

router.get("/:id/settings", userController.getUserSettings);
router.patch("/:id/settings", userController.updateUserSettings);

router.get("/:id/vip", userController.isVip);

router.post("/:id/connect-code", userController.generationConnectCode);

router.post("/:id/accounts/link", userController.linkGameAccount);
router.delete("/accounts/:nickname/:server", userController.unlinkedGameAccount);

router.get("/accounts/:nickname/:server", userController.getGameAcccount);
router.get("/:id/accounts", userController.getGameAcccounts);

router.get("/internal/broadcast-list", userController.getUsersForBroadcast);
router.get("/:id", userController.getUser);

export const userRouter = router;
