import { Router } from "express";
import { paymentController } from "../controller/payment.controller";

const router = Router();

router.post("/verify", paymentController.verifyPayment);
router.post("/", paymentController.createPayment);

export const paymentRouter = router;
