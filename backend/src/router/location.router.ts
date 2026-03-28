import { Router } from "express";
import { locationController } from "../controller/location.controller";

const router = Router();

router.get("/", locationController.getAllLocations);

export const locationRouter = router;