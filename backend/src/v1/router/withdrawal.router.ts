import { Router } from "express";
import { withdrawalController } from "../controller/withdrawal.controller";

const router = Router();

router.post("/", withdrawalController.createRequest);
router.get("/", withdrawalController.getRequests);
router.patch("/:id", withdrawalController.updateRequest);
router.patch("/:id/approve", withdrawalController.approveRequest);
router.patch("/:id/reject", withdrawalController.rejectRequest);

export const withdrawalRouter = router;
