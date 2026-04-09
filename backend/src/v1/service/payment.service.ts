import { randomBytes } from "node:crypto";
import { TonTransaction } from "../types/ton-api.types";
import { prisma } from "../../../database/db";

export const paymentService = {
  async processLatestTransactions(specialCodes: (string | null)[]) {
    const transactions = await paymentService.fetchTonTransactions();
    console.log(transactions)

    const validTx = paymentService.findTransactionByCodes(
      specialCodes,
      transactions
    );

    console.log("нашли")

    if (validTx) {
      const exists = await prisma.transactions.findUnique({
        where: { hash: validTx.in_msg.hash },
      });

      console.log()

      if (!exists) {
        return {
          status: "success",
          message: "Payment found",
          comment: validTx.in_msg?.message,
          transaction: validTx
        };
      }
    } 
    return { status: "pending", message: "No new payment found", transactions };
  },

  findTransactionByCodes(
    specialCodes: (string | null)[],
    transactions: TonTransaction[]
  ) {
    console.log(specialCodes);

    const targetCodes = new Set(
      specialCodes.filter(
        (code): code is string => !!code && code.trim() !== ""
      )
    );

    if (targetCodes.size === 0) return null;

    const foundTransaction = transactions.slice(0, 50).find((tx) => {
      if (!tx.in_msg || !tx.in_msg.message) return false;

      if (BigInt(tx.in_msg.value) <= 0n) return false;

      const comment = tx.in_msg.message;

      console.log("какой нашли коммент", comment)

      return comment && targetCodes.has(comment);
    });

    return foundTransaction || null;
  },

  async fetchTonTransactions() {
    const url = process.env.CRYPTO_WALLET_TON_URL || "";
    let result = await fetch(url, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((res) => {
        return res;
      });

    console.log(`crypto result: ${result}`)

    return result.result;
  },

  async createPaymentIntent(userId: number) {
    const uniqueSuffix = randomBytes(3).toString("hex").toUpperCase();
    const code = `VIP-${uniqueSuffix}`;
    console.log("code", code)

    const transaction = await prisma.transactions.create({
      data: {
        user_id: userId,
        amount: 1000000000,
        comment: code,
        status: "PENDING",
      },
    });

    return transaction;
  },

  async getPendingPaymentCodes(userId: number) {
    const transactions = await prisma.transactions.findMany({
      where: {
        user_id: userId,
        status: "PENDING",
      },
      select: {
        comment: true,
      },
    });

    return transactions.map((t: any) => t.comment);
  },
};
