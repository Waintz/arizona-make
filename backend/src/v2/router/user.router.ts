import { Router } from "express";
import { validate } from "../middlewares/validate";
import { createUserSchema } from "../schemas/user.schema";
import { userController } from "../controllers/user.controller";
import { checkInternalToken } from "../middlewares/checkInternalToken";
import { authMiddleware } from "../middlewares/auth.middleware";
import { hybridAuthMiddleware } from "../middlewares/hybridAuth.middleware";

const router = Router();

router.post(
  "/",
  checkInternalToken,
  validate(createUserSchema),
  userController.createUser
);

router.get(
  "/me",
  hybridAuthMiddleware,
  userController.getMe
);

export const userRouter = router;
