import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";
import { logger } from "../utils/logger";

export const validate = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
      });

      return next();
    } catch (error) {
      logger.warn({ 
        path: req.path, 
        err: error, 
        body: req.body 
      }, "Validation failed");

      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Validation Error",
          details: error.issues.map((e) => ({
            field: e.path.filter(p => p !== 'body').join("."),
            message: e.message,
          })),
        });
      }

      return next(error);
    }
  };
};