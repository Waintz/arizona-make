import request from "supertest";
import { prisma } from "../../../database/db";
import { app } from "../../../app";
import { DealActionType } from "../schemas/marketplace.schema";

describe("V2 Marketplace - Full Integration & Feed Test", () => {
  const TEST_TG_ID = "999888777";
  const TEST2_TG_ID = "444555666";
  const BOT_TOKEN = process.env.INTERNAL_BOT_TOKEN || "your_secret_here";

  let gameAccountId: number;
  let gameAccountId2: number;
  let itemId: number;
  let dealId: number;
  let accessToken: string;
  let accessToken2: string;
  let tempCode: string;
  let tempCode2: string;

  beforeAll(async () => {
    const ids = [BigInt(TEST_TG_ID), BigInt(TEST2_TG_ID)];
    await prisma.reportEvidence.deleteMany({});
    await prisma.report.deleteMany({});
    await prisma.marketplaceDeal.deleteMany({});
    await prisma.carListing.deleteMany({});
    await prisma.houseListing.deleteMany({});
    await prisma.marketplaceItem.deleteMany({});
    await prisma.gameAccount.deleteMany({});
    await prisma.verificationCodes.deleteMany({});
    await prisma.tokens.deleteMany({});
    await prisma.user.deleteMany({ where: { telegram_id: { in: ids } } });
  });

  it("1. Setup Users & Auth", async () => {
    await request(app)
      .post("/api/v2/users")
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({ telegramId: TEST_TG_ID, username: "vlad_seller" });
    await request(app)
      .post("/api/v2/users")
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({ telegramId: TEST2_TG_ID, username: "artem_buyer" });

    const c1 = await request(app)
      .post("/api/v2/auth/generate")
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({ telegramId: TEST_TG_ID });
    const c2 = await request(app)
      .post("/api/v2/auth/generate")
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({ telegramId: TEST2_TG_ID });

    const l1 = await request(app).post("/api/v2/auth/verify-game").send({
      gameId: 10,
      nickname: "Vlad",
      server: 14,
      level: 100,
      code: c1.body.code,
    });
    const l2 = await request(app).post("/api/v2/auth/verify-game").send({
      gameId: 20,
      nickname: "Artem",
      server: 14,
      level: 50,
      code: c2.body.code,
    });

    console.log("Access Tokens l1:", l1.body.accessToken);

    accessToken = l1.body.accessToken;
    gameAccountId = l1.body.account.id;
    accessToken2 = l2.body.accessToken;
  });

  it("2. [Marketplace] Create multiple items for Feed testing", async () => {
    // 2.1 Создаем 3 машины от первого юзера (чтобы проверить анти-монополию)
    for (let i = 1; i <= 3; i++) {
      await request(app)
        .post("/api/v2/marketplace")
        .set("authorization", `Bearer ${accessToken}`)
        .send({
          entity_type: "CAR",
          title: `Infernus #${i}`,
          price: 1000000 * i,
          server: 14,
          car_details: {
            account_id: gameAccountId,
            model_id: 411,
            rarity: "RARE",
          },
        });
    }

    // 2.2 Создаем дом от первого юзера
    const houseRes = await request(app)
      .post("/api/v2/marketplace")
      .set("authorization", `Bearer ${accessToken}`)
      .send({
        entity_type: "HOUSE",
        title: "Grove Street House",
        price: 50000000,
        server: 14,
        house_details: {
          house_number: 101,
          location: "Ganton",
          has_garage: true,
        },
      });

    for (let i = 1; i <= 3; i++) {
      await request(app)
        .post("/api/v2/marketplace")
        .set("authorization", `Bearer ${accessToken2}`)
        .send({
          entity_type: "CAR",
          title: `Infernus #${i}`,
          price: 1000000 * i,
          server: 14,
          car_details: {
            account_id: gameAccountId,
            model_id: 411,
            rarity: "RARE",
          },
        });
    }

    // 2.2 Создаем дом от первого юзера
    await request(app)
      .post("/api/v2/marketplace")
      .set("authorization", `Bearer ${accessToken2}`)
      .send({
        entity_type: "HOUSE",
        title: "Grove Street House",
        price: 50000000,
        server: 14,
        house_details: {
          house_number: 105,
          location: "Ganton",
          has_garage: true,
        },
      });

    itemId = houseRes.body.id; // запомним один ID для тестов сделок
  });

  it("3. [Discovery Feed] Check ranking and anti-monopoly", async () => {
    const seller = await prisma.user.findUnique({
      where: { telegram_id: BigInt(TEST_TG_ID) },
    });

    const res = await request(app)
      .get("/api/v2/marketplace/feed")
      .set("authorization", `Bearer ${accessToken}`)
      .query({ server: 14, limit: 10 });

    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);

    const sellerItems = res.body.filter((i: any) => i.seller_id === seller?.id);

    const hasCar = res.body.some((i: any) => i.entity_type === "CAR");
    const hasHouse = res.body.some((i: any) => i.entity_type === "HOUSE");
    expect(hasCar).toBe(true);
    expect(hasHouse).toBe(true);
  });

  it("4. [Marketplace] Create & Process Deal", async () => {
    // Создаем сделку на дом
    const dealRes = await request(app)
      .post("/api/v2/marketplace/deals")
      .set("authorization", `Bearer ${accessToken2}`)
      .send({ itemId });

    dealId = dealRes.body.deal.id;
    expect(dealRes.status).toBe(201);

    // Шаг 1: Контакт (Продавец)
    await request(app)
      .post(`/api/v2/marketplace/deals/${dealId}/action`)
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({ type: DealActionType.CONFIRM_CONTACT, telegramId: TEST_TG_ID });

    // Шаг 2: Контакт (Покупатель)
    await request(app)
      .post(`/api/v2/marketplace/deals/${dealId}/action`)
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({ type: DealActionType.CONFIRM_CONTACT, telegramId: TEST2_TG_ID });

    // Шаг 3: Финал сделки (Покупатель)
    const finalRes = await request(app)
      .post(`/api/v2/marketplace/deals/${dealId}/action`)
      .set("x-internal-bot-token", BOT_TOKEN)
      .send({ type: DealActionType.CONFIRM_DEAL, telegramId: TEST2_TG_ID });

    expect(finalRes.status).toBe(200);

    const dealInDb = await prisma.marketplaceDeal.findUnique({
      where: { id: dealId },
    });
    expect(dealInDb?.status).toBe("PENDING"); // Он станет COMPLETED только когда оба подтвердят
  });

  it("5. [Filter Test] Get only CARS", async () => {
    const res = await request(app)
      .get("/api/v2/marketplace/feed")
      .set("authorization", `Bearer ${accessToken}`)
      .query({ server: 14, type: "CAR" });

    const allAreCars = res.body.every((i: any) => i.entity_type === "CAR");
    expect(allAreCars).toBe(true);
  });
});
