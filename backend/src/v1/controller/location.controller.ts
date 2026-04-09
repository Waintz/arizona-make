import { Request, Response } from "express";
import { locationService } from "../service/location.service";

export const locationController = {
  async getAllLocations(req: Request, res: Response) {
    try {
      const { limit, page } = req.query;

      const locations = await locationService.getLocations(
        limit ? Number(limit) : 10,
        page ? Number(page) : 1
      );
      res.status(200).json({ success: true, message: "Success", ...locations });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  },
};
