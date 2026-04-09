import { Router } from "express";
import { identityController } from "../controller/identity.controller";
import { authMiddleware } from "../middleware/auth.middlerware";
import { internalMiddleware } from "../middleware/internal.middleware";

const router = Router();

router.post("/issue", internalMiddleware, identityController.issueVerificationCode);
router.post("/confirm", identityController.confirmIdentity);
router.post("/refresh", identityController.refresh);
router.post("/logout", identityController.logout)

router.get("/me", authMiddleware, identityController.getProfile)
router.get("/test", (req, res) => {
  res.status(200).json({ping: "pong"})
})
export const identityRouter = router;