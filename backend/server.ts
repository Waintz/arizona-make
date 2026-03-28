import express from "express";
import helmet from "helmet";
import dotenv from "dotenv";
import { userRouter } from "./src/router/user.router";
import { raceRouter } from "./src/router/race.router";
import { errorMiddleware } from "./src/middleware/error.middleware";
import { paymentRouter } from "./src/router/payment.router";
import { promoRouter } from "./src/router/promo.router";
import { statsRouter } from "./src/router/stats.router";
import { withdrawalRouter } from "./src/router/withdrawal.router";
import { initRaceScheduler } from "./src/scheduler/race.scheduler";
import {
  get_RACE_CHANNEL_ID,
  get_RACE_VIP_CHANNEL_ID,
} from "./src/types/constants";
import { locationRouter } from "./src/router/location.router";
import { TokenService } from "./src/service/token.service";
import { identityRouter } from "./src/router/identity.router";

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

app.use("/api/users", userRouter);
app.use("/api/races", raceRouter);
app.use("/api/identity", identityRouter);
app.use("/api/payments", paymentRouter);
app.use("/api/promo", promoRouter);
app.use("/api/stats", statsRouter);
app.use("/api/withdrawals", withdrawalRouter);
app.use("/api/locations", locationRouter);

app.use(errorMiddleware);

app.listen(PORT, () => {
  initRaceScheduler();
  console.log(`🚀 Сервер API запущен на порту: ${PORT}`);
});
