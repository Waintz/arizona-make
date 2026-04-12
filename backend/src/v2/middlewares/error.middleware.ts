import { Request, Response, NextFunction } from 'express';
import { logger } from '../utils/logger';

export const errorMiddleware = (err: any, req: Request, res: Response, next: NextFunction) => {
  logger.error({
    err: {
      message: err.message,
      stack: err.stack,
    },
    request: {
      method: req.method,
      url: req.url,
      body: req.body,
    }
  }, 'Unhandled Exception');

  if (err.name === 'ZodError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.errors,
    });
  }

  res.status(err.status || 500).json({
    error: 'Internal Server Error',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Что-то пошло не так на сервере',
  });
};