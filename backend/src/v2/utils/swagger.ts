import { z } from "zod";
import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  extendZodWithOpenApi,
} from "@asteasolutions/zod-to-openapi";

extendZodWithOpenApi(z);

import {
  UserModelSchema,
  CarListingModelSchema,
  RaceModelSchema,
  AuctionModelSchema,
} from "../generated/zod/schemas";
import { logoutSchema } from "../schemas/auth.schema";
export const registry = new OpenAPIRegistry();

registry.register("User", UserModelSchema);
registry.register("CarListing", CarListingModelSchema);
registry.register("Race", RaceModelSchema);
registry.register("Auction", AuctionModelSchema);

registry.registerComponent("securitySchemes", "BotTokenAuth", {
  type: "apiKey",
  in: "header",
  name: "x-internal-bot-token", // Тот самый заголовок
});

const AuthResponseSchema = registry.register(
  "AuthResponse",
  z.object({
    accessToken: z.string(),
    refreshToken: z.string(),
    user: z.object({
      id: z.number(),
      username: z.string().nullable(),
      reputation: z.number(),
    }),
  })
);

// 1. ГЕНЕРАЦИЯ КОДА (для бота)
registry.registerPath({
  method: "post",
  path: "/auth/generate",
  summary: "Сгенерировать код авторизации",
  tags: ["Auth"],
  security: [{ BotTokenAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            telegramId: z.string().or(z.number()),
          }),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Код успешно сгенерирован",
      content: {
        "application/json": { schema: z.object({ code: z.string() }) },
      },
    },
  },
});

// 2. ВЕРИФИКАЦИЯ КОДА (для Луа/Сайта)
registry.registerPath({
  method: "post",
  path: "/auth/verify",
  summary: "Обменять код на токены (Логин)",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            code: z.string().length(8),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Успешная авторизация",
      content: { "application/json": { schema: AuthResponseSchema } },
    },
    401: { description: "Неверный или просроченный код" },
  },
});

// 3. REFRESH ТОКЕНОВ
registry.registerPath({
  method: "post",
  path: "/auth/refresh",
  summary: "Обновить Access Token",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            refreshToken: z.string(),
          }),
        },
      },
    },
  },
  responses: {
    200: {
      description: "Токены обновлены",
      content: { "application/json": { schema: AuthResponseSchema } },
    },
  },
});

// 4. LOGOUT
registry.registerPath({
  method: "post",
  path: "/auth/logout",
  summary: "Выйти из аккаунта",
  tags: ["Auth"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: logoutSchema,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Вы успешно вышли из аккаунта",
      content: {
        "application/json": { schema: z.object({ message: z.string() }) },
      },
    },
  },
});

registry.registerPath({
  method: "post",
  path: "/users",
  summary: "Создать пользователя",
  // Добавляем вот это:
  security: [{ BotTokenAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: z.object({
            telegramId: z.string().or(z.number()),
            username: z.string().optional(),
          }),
        },
      },
    },
  },
  responses: {
    201: {
      description: "Успех",
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
