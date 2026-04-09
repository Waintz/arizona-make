import { Router } from "express";
import { paymentController } from "../controller/payment.controller";
import { promoController } from "../controller/promo.controller";

const router = Router();

router.post("/activate", promoController.activatePromo);

export const promoRouter = router;
