import express from "express";
import helmet from "helmet";
import { v2Router } from "./src/v2/router/v2Router";
import { errorMiddleware } from "./src/v1/middleware/error.middleware";
import { logger } from "./src/v2/utils/logger";

export const app = express();

// Это должно быть ПЕРЕД роутами
app.use(express.json());
app.use(helmet());

// Хак для BigInt
// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

app.use("/api/v2", v2Router); // Убедись, что префикс правильный

app.use(errorMiddleware);

process.on("uncaughtException", (err) => {
  logger.fatal(err, "UNCAUGHT EXCEPTION! Shutting down...");
  process.exit(1);
});

process.on("unhandledRejection", (reason, promise) => {
  logger.error({ promise, reason }, "UNHANDLED REJECTION!");
});
