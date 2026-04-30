import dotenv from "dotenv";
import { app } from "./app";
import { createServer } from "http";
import { SocketGateway } from "./src/v2/sockets/socket.gateway";
import { startGarbageCollector } from "./src/v2/services/garbage-collector.service";
import { raceLifecycle } from "./src/v2/modules/race/scheduler/race.lifecycle";
import { initRaceScheduledJobs } from "./src/v2/modules/race/scheduler/race.scheduler";
import "./src/v2/modules/race/workers/race.worker"
import "./src/v2/modules/auction/workers/auction.worker"

dotenv.config();

const PORT = process.env.PORT || 4200;

const httpServer = createServer(app);
SocketGateway.init(httpServer);

startGarbageCollector();

async function bootstrap() {
  await raceLifecycle.ensureTodayRaces()
  await initRaceScheduledJobs();
}

bootstrap();

httpServer.listen(PORT, () => {
  console.log(`🚀 Сервер и Сокеты запущены на порту ${PORT}`);
});
