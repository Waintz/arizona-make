import { prisma } from "../../../database/db";
import { VerifyGameAccountDTO } from "../schemas/game-account.schema";
import { authService } from "./auth.service";

export const gameAccountService = {
  async verifyGameAccount(dto: VerifyGameAccountDTO) {
    const { code, gameId, nickname, server, level } = dto;

    const codeEntry = await authService.verifyCode(code, "GAME_LOGIN");

    if (!codeEntry.verify || !codeEntry.user) {
      throw new Error("Код не найден или прошел срок жизни.");
    }

    const user = codeEntry.user;

    const hasAccounts = await prisma.gameAccount.count({
      where: { user_id: user.id },
    });

    const account = await prisma.gameAccount.upsert({
      where: {
        game_id_server: { game_id: gameId, server: server },
      },
      update: {
        nickname,
        level,
        user_id: user.id,
      },
      create: {
        game_id: gameId,
        nickname,
        server,
        level,
        user_id: user.id,
        is_main: hasAccounts === 0,
      },
    });

    return { account, user };
  },
};
