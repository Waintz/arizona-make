import request from "supertest";
import { prisma } from "../../../database/db";
import { app } from "../../../app";

describe("V2 Auth System - Integration Flow", () => {
  const TEST_TG_ID = "999888777";
  const GAME_ACCOUNT = {
    code: "",
    gameId: 1337,
    nickname: "Test",
    server: 14,
    level: 122,
  };
  const BOT_TOKEN = process.env.INTERNAL_BOT_TOKEN || "your_secret_here";

  let tempCode: string;
  let accessToken: string;
  let refreshToken: string;

  beforeAll(async () => {
    const bigIntId = BigInt(TEST_TG_ID);

    // 1. Сначала удаляем игровые аккаунты, так как они ссылаются на User
    await prisma.gameAccount.deleteMany({
      where: { user: { telegram_id: bigIntId } },
    });

    // 2. Удаляем коды верификации
    await prisma.verificationCodes.deleteMany({
      where: { telegram_id: bigIntId },
    });

    // 3. Теперь, когда зависимостей нет, удаляем самого юзера
    await prisma.user.deleteMany({
      where: { telegram_id: bigIntId },
    });
  });

  // (Создаем юзера)
  it("1. [User] Registration - Success", async () => {
    const res = await request(app)
      .post("/api/v2/users")
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({
        telegramId: TEST_TG_ID,
        username: "test",
      });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
  });

  // (Для бота)
  it("2. [Auth] Generate Code - Success", async () => {
    const res = await request(app)
      .post("/api/v2/auth/generate")
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({ telegramId: TEST_TG_ID });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("code");
    tempCode = res.body.code;
  });

  // (Вход с игрового аккаунта обмен кода на токены)
  it("3. [Auth] Verify Game Account (Login) - Success", async () => {
    const res = await request(app)
      .post("/api/v2/auth/verify-game")
      .send({ ...GAME_ACCOUNT, code: tempCode });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("accessToken");
    expect(res.body).toHaveProperty("refreshToken");

    accessToken = res.body.accessToken;
    refreshToken = res.body.refreshToken;
  });

  // (Пробуем получить себя)
  it("4. [User] Get Me - Success", async () => {
    const res = await request(app)
      .get("/api/v2/users/me")
      .set("authorization", `Bearer ${accessToken}`);

    expect(res.status).toBe(200);
  });

  // (Refresh)
  it("5. [Auth] Refresh Tokens - Success", async () => {
    const res = await request(app)
      .post("/api/v2/auth/refresh")
      .send({ refreshToken });

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("accessToken");
    refreshToken = res.body.refreshToken;
  });

  // (Logout)
  it("6. [Auth] Logout - Success", async () => {
    const res = await request(app)
      .post("/api/v2/auth/logout")
      .send({ refreshToken });

    expect(res.status).toBe(200);
  });
});
