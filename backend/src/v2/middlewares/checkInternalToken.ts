import { NextFunction, Request, Response } from "express";
import { logger } from "../utils/logger";

export const checkInternalToken = (req: Request, res: Response, next: NextFunction) => {
  const botToken = req.headers['x-internal-bot-token'];
  const internalSecret = process.env.INTERNAL_BOT_TOKEN;

  if (!botToken || botToken !== internalSecret) {
    logger.warn({ 
      path: req.path, 
      ip: req.ip,
      receivedToken: botToken ? "PRESENT (mismatch)" : "MISSING" 
    }, "Forbidden internal bot token attempt");

    return res.status(401).json({ 
      error: "Unauthorized", 
      message: "This endpoint is restricted to the internal bot service." 
    });
  }

  next();
};