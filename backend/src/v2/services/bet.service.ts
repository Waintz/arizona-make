import { prisma } from "../../../database/db";

export const BettingService = {
  async placeBet(
    userId: number,
    raceId: number,
    targetAccId: number,
    amount: bigint,
  ) {
    return prisma.$transaction(async (tx) => {
      const race = await tx.race.findUnique({
        where: { id: raceId },
        include: { participants: true },
      });

      if (!race) throw new Error("Гонка не найдена");

      if (race.status !== "WAITING") {
        throw new Error(
          "Ставки больше не принимаются, гонка уже началась или завершена",
        );
      }

      const isParticipant = race.participants.some(
        (p) => p.game_account_id === targetAccId,
      );
      if (!isParticipant) {
        throw new Error("Этот игрок не участвует в гонке");
      }

      const user = await tx.user.update({
        where: { id: userId },
        data: { balance: { decrement: amount } },
      });

      if (user.balance < 0n) {
        throw new Error("Недостаточно средств");
      }

      const bet = await tx.raceBet.create({
        data: {
          user_id: userId,
          race_id: raceId,
          target_acc_id: targetAccId,
          amount: amount,
        },
      });

      return {
        betId: bet.id,
        amountStr: bet.amount.toString(),
      };
    });
  },

  async distributeWinnings(raceId: number, winnerAccId: number) {
    return prisma.$transaction(async (tx) => {
      const allBets = await tx.raceBet.findMany({
        where: { race_id: raceId },
      });

      if (allBets.length === 0)
        return { success: true, message: "Не было ставок" };

      const totalPool = allBets.reduce((sum, bet) => sum + bet.amount, 0n);

      const winningBets = allBets.filter(
        (bet) => bet.target_acc_id === winnerAccId,
      );

      if (winningBets.length === 0) {
        await tx.raceBet.updateMany({
          where: { race_id: raceId },
          data: { is_win: false, payout_amount: 0n },
        });
        return {
          success: true,
          message: "Никто не угадал победителя, банк сгорел",
        };
      }

      const winningPool = winningBets.reduce(
        (sum, bet) => sum + bet.amount,
        0n,
      );

      const netPool = (totalPool * 90n) / 100n;

      for (const bet of allBets) {
        if (bet.target_acc_id === winnerAccId) {
          const payout = (bet.amount * netPool) / winningPool;

          await tx.raceBet.update({
            where: { id: bet.id },
            data: { is_win: true, payout_amount: payout },
          });

          await tx.user.update({
            where: { id: bet.user_id },
            data: { balance: { increment: payout } },
          });
        } else {
          await tx.raceBet.update({
            where: { id: bet.id },
            data: { is_win: false, payout_amount: 0n },
          });
        }
      }

      return {
        totalPool: totalPool.toString(),
        distributed: netPool.toString(),
        winnersCount: winningBets.length,
      };
    });
  },

  async refundBets(raceId: number) {
    return prisma.$transaction(async (tx) => {
      const pendingBets = await tx.raceBet.findMany({
        where: {
          race_id: raceId,
          is_win: null,
        },
      });

      if (pendingBets.length === 0) {
        return { success: true, message: "Нет ставок для возврата" };
      }

      let refundedTotal = 0n;

      for (const bet of pendingBets) {
        await tx.user.update({
          where: { id: bet.user_id },
          data: { balance: { increment: bet.amount } },
        });

        await tx.raceBet.update({
          where: { id: bet.id },
          data: {
            is_win: false,
            payout_amount: bet.amount,
          },
        });

        refundedTotal += bet.amount;
      }

      await tx.race.update({
        where: { id: raceId },
        data: { status: "CANCELLED" },
      });

      return {
        success: true,
        message: "Ставки успешно возвращены",
        refundedBetsCount: pendingBets.length,
        refundedTotal: refundedTotal.toString(),
      };
    });
  },

  async getRaceBettingStats(raceId: number, targetAccId?: number) {
    const groupedBets = await prisma.raceBet.groupBy({
      by: ["target_acc_id"],
      where: { race_id: raceId, is_win: null },
      _sum: { amount: true },
      orderBy: { _sum: { amount: "desc" } },
    });

    let totalPool = 0n;
    for (const group of groupedBets) {
      if (group._sum.amount) totalPool += group._sum.amount;
    }

    const netPool = (totalPool * 90n) / 100n;

    const calculateCoef = (playerPool: bigint) => {
      if (playerPool === 0n || totalPool === 0n) return "0.00";

      const coefRaw = (netPool * 100n) / playerPool;

      return (Number(coefRaw) / 100).toFixed(2);
    };

    const topFavorites = groupedBets.slice(0, 3).map((group, index) => {
      const pool = group._sum.amount || 0n;
      return {
        position: index + 1,
        targetAccId: group.target_acc_id,
        totalBetStr: pool.toString(),
        coefficient: calculateCoef(pool),
      };
    });

    let targetPlayerStats = null;
    if (targetAccId) {
      const playerGroup = groupedBets.find(
        (g) => g.target_acc_id === targetAccId,
      );
      const playerPool = playerGroup?._sum.amount || 0n;

      targetPlayerStats = {
        targetAccId,
        totalBetStr: playerPool.toString(),
        coefficient: calculateCoef(playerPool),
      };
    }

    return {
      totalPoolStr: totalPool.toString(),
      topFavorites,
      targetPlayerStats,
    };
  },
};
