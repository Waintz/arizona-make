import { NextFunction, Request, Response } from "express";
import { promoService } from "../service/promo.service";

export const promoController = {
  async activatePromo(req: Request, res: Response, next: NextFunction) {
    try {
      const { code, telegramId } = req.body;

      const checkPromo = await promoService.checkValidPromocode(code);

      if (checkPromo == null) {
        return res.status(400).json({
          success: true,
          message: "The code does not exist",
        });
      }

      const activePromo = await promoService.activatePromo({
        telegramId: telegramId,
        promo: checkPromo,
      });

      res.status(200).json({
        success: true,
        message: "Promotional code activated",
        promo: activePromo
      });
    } catch (error) {
      next(error);
    }
  },
};
