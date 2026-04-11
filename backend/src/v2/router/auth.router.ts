import { Router } from "express";
import { authController } from "../controllers/auth.controller";
import { checkInternalToken } from "../middlewares/checkInternalToken";
import { validate } from "../middlewares/validate";
import {
  generateCodeSchema,
  logoutSchema,
  refreshTokenSchema,
  verifyCodeSchema,
} from "../schemas/auth.schema";

const router = Router();

/**
 * @route   POST /api/v2/auth/generate
 * @desc    Генерация кода (только для внутреннего бота)
 */
router.post(
  "/generate",
  checkInternalToken,
  validate(generateCodeSchema),
  authController.generateCode
);

/**
 * @route   POST /api/v2/auth/verify
 * @desc    Обмен кода на JWT токены (для игры/сайта)
 */
router.post("/verify", validate(verifyCodeSchema), authController.verifyCode);

/**
 * @route   POST /api/v2/auth/refresh
 * @desc    Обновление пары токенов (если accessToken протух)
 */
router.post("/refresh", validate(refreshTokenSchema), authController.refresh);

/**
 * @route   POST /api/v2/auth/logout
 * @desk    Выход из аккаунта
 */
router.post("/logout", validate(logoutSchema), authController.logout);

export const authRouter = router;
