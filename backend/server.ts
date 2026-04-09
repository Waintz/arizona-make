import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { errorMiddleware } from "./src/v1/middleware/error.middleware";
import { initRaceScheduler } from "./src/v1/scheduler/race.scheduler";
import {
  get_RACE_CHANNEL_ID,
  get_RACE_VIP_CHANNEL_ID,
} from "./src/v1/types/constants";
import { TokenService } from "./src/v1/service/token.service";
import { v1Router } from "./src/v1/router/v1Router";
import { v2Router } from "./src/v2/router/v2Router";

dotenv.config();

const tokenService = new TokenService();

console.log(
  "Загруженные переменные окружения:",
  get_RACE_CHANNEL_ID(),
  get_RACE_VIP_CHANNEL_ID(),
);

export const app = express();
const PORT = process.env.PORT || 3000;

// @ts-ignore
BigInt.prototype.toJSON = function () {
  return this.toString();
};

app.use(express.json());
app.use(helmet());

app.use("/api", v1Router);
app.use("/api", v2Router);

app.use(errorMiddleware);

app.listen(PORT, () => {
  initRaceScheduler();
  console.log(`🚀 Сервер API запущен на порту: ${PORT}`);
});
