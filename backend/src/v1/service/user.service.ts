import { prisma } from "../../../database/db";
import { Prisma, UserSettings } from "../generated/client";
import { ApiError } from "../exceptions/api.error";
import { generateCode } from "../utils/utils";

export interface GetUserDto {
  telegramId?: number;
  userId?: string | number;
}

export const userService = {
  async linkGameAccount(data: {
    code: string;
    nickname: string;
    server: number;
  }) {
    const user = await prisma.user.findUnique({
      where: { connect_code: data.code },
    });

    if (!user || !user.connect_code_expires_at) {
      throw ApiError.BadRequest("Код не найден или неверен.");
    }

    if (user.connect_code_expires_at < new Date()) {
      throw ApiError.BadRequest(
        "Срок действия кода истек. Сгенерируйте новый."
      );
    }

    const existingAccount = await prisma.gameAccount.findUnique({
      where: {
        nickname_server: {
          nickname: data.nickname,
          server: data.server,
        },
      },
    });
    if (existingAccount) {
      if (existingAccount.user_id === user.id) {
        throw ApiError.BadRequest("Вы уже привязали этот аккаунт.");
      }

      throw ApiError.BadRequest(
        "⛔️ Этот игровой аккаунт уже привязан к другому Telegram!"
      );
    }

    const newGameAccount = await prisma.gameAccount.create({
      data: {
        nickname: data.nickname,
        server: data.server,
        verified: true,
        user: {
          connect: { id: user.id },
        },
      },
      select: {
        user: true,
        id: true,
        nickname: true,
        server: true,
        user_id: true,
        verified: true,
      },
    });

    await prisma.user.update({
      where: { id: user.id },
      data: { connect_code: null, connect_code_expires_at: null },
    });

    return {
      success: true,
      gameAccount: newGameAccount,
      connect_code: user.connect_code,
    };
  },

  async getUser(identifier: GetUserDto) {
    let user;

    console.log("iden", identifier);

    if (identifier.userId) {
      user = await prisma.user.findUnique({
        where: { id: Number(identifier.userId) },
      });
    } else if (identifier.telegramId) {
      user = await prisma.user.findUnique({
        where: { telegram_id: BigInt(identifier.telegramId) },
      });
    }

    return user;
  },

  async getUsersForBroadcast() {
    const users = await prisma.user.findMany({
      where: {
        settings: {
          notify_news: true,
        },
      },
      select: {
        telegram_id: true,
      },
    });

    return users;
  },

  async getGameAccount(
    data: { nickname: string; server: number },
    include: { user?: boolean; races_won?: boolean }
  ) {
    try {
      const gameAccount = await prisma.gameAccount.findUnique({
        where: {
          nickname_server: {
            nickname: data.nickname,
            server: data.server,
          },
        },
        include: { user: include.user, races_won: include.races_won },
      });

      return {
        isRegistered: !!gameAccount,
        gameAccount: gameAccount,
      };
    } catch (error) {
      return { isRegistered: false };
    }
  },

  async getGameAccounts(identifier: GetUserDto) {
    try {
      let gameAccounts;

      if (identifier.telegramId) {
        const user = await prisma.user.findUnique({
          where: { telegram_id: identifier.telegramId },
          include: {
            game_accounts: {
              select: {
                id: true,
                races_won: true,
                wins: true,
                nickname: true,
                server: true,
                user_id: true,
                verified: true,
              },
            },
          },
        });

        gameAccounts = user?.game_accounts;
      } else if (identifier.userId) {
        const user = await prisma.user.findUnique({
          where: { id: Number(identifier.userId) },
          include: {
            game_accounts: {
              select: {
                id: true,
                races_won: true,
                wins: true,
                nickname: true,
                server: true,
                user_id: true,
                verified: true,
              },
            },
          },
        });

        gameAccounts = user?.game_accounts;
      }

      return {
        gameAccounts: gameAccounts,
        isRegistered: true,
      };
    } catch (error) {
      return { isRegistered: false, gameAccounts: [] };
    }
  },

  async unlinkedGameAccount(user: { nickname: string; server: number }) {
    console.log("BACKEND", user);

    try {
      const result = await prisma.$transaction(async (tx: any) => {
        const account = await tx.gameAccount.findUnique({
          where: {
            nickname_server: {
              nickname: user.nickname,
              server: user.server,
            },
          },
          select: {
            user: true,
          },
        });

        const isVip =
          account?.user.vip_expires_at &&
          account.user.vip_expires_at > new Date();

        if (isVip) {
          const gameAccount = await prisma.gameAccount.delete({
            where: {
              nickname_server: {
                nickname: user.nickname,
                server: user.server,
              },
            },
            select: {
              id: true,
              nickname: true,
              server: true,
            },
          });

          return gameAccount;
        } else {
          throw ApiError.BadRequest(
            "Эта функция доступна только для VIP пользователей, это сделано для безопасности и защиты от читеров."
          );
        }
      });

      return result;
    } catch (error) {
      console.error(error);
      return { message: "Failed" };
    }
  },

  async generationConnectCode(identifier: GetUserDto) {
    try {
      const code = generateCode();
      const expirationDate = new Date();
      expirationDate.setMinutes(expirationDate.getMinutes() + 5);

      let userData = null;

      if (identifier.telegramId) {
        userData = await prisma.user.update({
          where: { telegram_id: identifier.telegramId },
          data: {
            connect_code: code,
            connect_code_expires_at: expirationDate,
          },
        });
      }

      if (identifier.userId) {
        userData = await prisma.user.update({
          where: { id: Number(identifier.userId) },
          data: {
            connect_code: code,
            connect_code_expires_at: expirationDate,
          },
        });
      }

      return userData;
    } catch (error) {
      console.error(error);
    }
  },

  async isVip(identifier: GetUserDto) {
    let vip;

    if (identifier.userId) {
      vip = await prisma.user.findUnique({
        where: { id: Number(identifier.userId) },
        select: {
          vip_expires_at: true,
        },
      });
    } else if (identifier.telegramId) {
      vip = await prisma.user.findUnique({
        where: { telegram_id: BigInt(identifier.telegramId) },
        select: {
          vip_expires_at: true,
        },
      });
    }

    const isVip = vip?.vip_expires_at && vip.vip_expires_at > new Date();

    return {
      vip_expires_at: vip?.vip_expires_at,
      isVip: isVip || false,
    };
  },

  async getUserSettings(identifier: GetUserDto) {
    try {
      let settings = null;

      if (identifier.userId) {
        settings = await prisma.userSettings.findUnique({
          where: { user_id: Number(identifier.userId) },
        });
      } else if (identifier.telegramId) {
        const user = await prisma.user.findUnique({
          where: { telegram_id: BigInt(identifier.telegramId) },
          include: { settings: true },
        });

        settings = user?.settings || null;
      }

      return settings;
    } catch (error) {
      console.error("Ошибка получения настроек:", error);
      return null;
    }
  },

  async updateUserSettings(
    identifier: GetUserDto,
    settings: Partial<UserSettings>
  ) {
    try {
      let update;

      if (identifier.userId) {
        update = await prisma.userSettings.update({
          where: { user_id: Number(identifier.userId) },
          data: settings,
        });
      } else if (identifier.telegramId) {
        update = await prisma.user.update({
          where: { telegram_id: BigInt(identifier.telegramId) },
          data: {
            settings: { update: settings },
          },
        });
      }

      return update;
    } catch (error) {
      console.error("Ошибка обновления настроек:", error);
      return null;
    }
  },

  async registrationTelegram(user: { telegramId: number; username?: string }) {
    const tgId = BigInt(user.telegramId);

    let candidate = await prisma.user.findUnique({
      where: { telegram_id: tgId },
    });

    if (!candidate) {
      const userData = await prisma.user.create({
        data: {
          telegram_id: tgId,
          username: user.username,
          settings: {
            create: {},
          },
        },
      });

      return userData;
    } else {
      return null;
    }
  },
};
