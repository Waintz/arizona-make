import { z } from "zod";
import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  extendZodWithOpenApi,
} from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

// Импортируем только нужные схемы напрямую
import {
  UserModelSchema,
  CarListingModelSchema,
  RaceModelSchema,
  AuctionModelSchema,
} from "../generated/zod/schemas";
export const registry = new OpenAPIRegistry();

// Регистрируем по одной — это гарантирует отсутствие рекурсии при генерации доков
registry.register("User", UserModelSchema);
registry.register("CarListing", CarListingModelSchema);
registry.register("Race", RaceModelSchema);
registry.register("Auction", AuctionModelSchema);

registry.registerPath({
  method: "get",
  path: "/user/{telegramId}",
  summary: "Получить профиль пользователя по Telegram ID",
  request: {
    params: z.object({ telegramId: z.string() }),
  },
  responses: {
    200: {
      description: "Объект пользователя",
      content: { "application/json": { schema: UserModelSchema } },
    },
  },
});

export function generateOpenApiDocs() {
  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      version: "2.0.0",
      title: "Arizona Make API v2",
      description: "Документация: Гонки, Автобазар, Аукционы",
    },
    servers: [{ url: "/api/v2" }],
  });
}
