import dotenv from "dotenv";
import { app } from "./app";
import { createServer } from "http";
import { SocketGateway } from "./src/v2/sockets/socket.gateway";
import { startGarbageCollector } from "./src/v2/services/garbage-collector.service";

dotenv.config();

const PORT = process.env.PORT || 4200;

const httpServer = createServer(app);
SocketGateway.init(httpServer);

startGarbageCollector();

httpServer.listen(PORT, () => {
  console.log(`🚀 Сервер и Сокеты запущены на порту ${PORT}`);
});
