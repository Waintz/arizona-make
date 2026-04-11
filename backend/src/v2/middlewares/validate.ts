import { Request, Response, NextFunction } from "express";
import { ZodObject, ZodError } from "zod";

// Важно: эта функция возвращает ДРУГУЮ функцию (middleware)
export const validate = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsedData = await schema.parseAsync(req.body);

      req.body = parsedData;
      return next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({
          error: "Validation Error",
          details: error.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
};
