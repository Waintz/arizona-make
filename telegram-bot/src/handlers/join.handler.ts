import { Composer } from "grammy";
import { UserContext } from "../context/context";
import {
  RACE_CHANNEL_ID,
  RACE_VIP_CHANNEL_ID,
} from "../constants/allowedChannels";
import { userService } from "../service/user.service";

export const joinComposer = new Composer<UserContext>();

joinComposer.on("chat_join_request", async (ctx) => {
  if (ctx.chat.id === RACE_CHANNEL_ID) {
    await joinRace(ctx);
  } else if (ctx.chat.id === RACE_VIP_CHANNEL_ID) {
    await joinVipRace(ctx);
  }
});

const joinRace = async (ctx: UserContext) => {
  if (!ctx.chatJoinRequest) {
    return;
  }
  const telegramId = ctx.chatJoinRequest.from.id;

  const inviteLink = ctx.chatJoinRequest.invite_link;
  const createLinkById = inviteLink?.name?.split("_")[2];
  console.log("tg id:", inviteLink);

  try {
    if (!inviteLink?.invite_link) return;
    if (!createLinkById) return;
    if (!ctx.chat?.id) return;

    if (
      createLinkById &&
      createLinkById.toString() !== telegramId.toString()
    ) {
      await ctx.declineChatJoinRequest(telegramId);
      await trySendMessage(
        ctx,
        telegramId,
        "❌ Это персональная ссылка другого пользователя. Получите свою в боте."
      );
      return;
    }

    const user = await userService.getUser({ telegramId: BigInt(telegramId) });

    if (user) {
      await ctx.approveChatJoinRequest(telegramId);

      await trySendMessage(
        ctx,
        telegramId,
        "✅ Заявка одобрена! Жди фото в канале."
      );

      try {
        await ctx.api.revokeChatInviteLink(
          ctx.chat?.id,
          inviteLink.invite_link
        );
      } catch (e) {
        console.warn("Не удалось отозвать ссылку:", e);
      }
    } else {
      await ctx.declineChatJoinRequest(telegramId);

      try {
        await trySendMessage(
          ctx,
          telegramId,
          "❌ Вы не зарегистрированы в системе."
        );
      } catch (e) {}
    }
  } catch (error) {
    console.error("Ошибка проверки заявки:", error);
    try {
      await ctx.declineChatJoinRequest(telegramId);
    } catch (e) {}
  }
};

const joinVipRace = async (ctx: UserContext) => {
  if (!ctx.chatJoinRequest) {
    return;
  }
  const telegramId = ctx.chatJoinRequest.from.id;
  const createLinkById = ctx.chatJoinRequest.invite_link?.name?.split("_")[2];

  try {
    if (!createLinkById) return;

    if (
      createLinkById &&
      createLinkById.toString() !== telegramId.toString()
    ) {
      await ctx.declineChatJoinRequest(telegramId);
      await ctx.api.sendMessage(
        telegramId,
        "❌ Это персональная ссылка другого пользователя. Получите свою в боте."
      );
      return;
    }

    const user = await userService.getUser({ telegramId: BigInt(telegramId) });

    if (user) {
      if (user.vip_expires_at && user.vip_expires_at > new Date()) {
        await ctx.approveChatJoinRequest(telegramId);

        await ctx.api.sendMessage(
          telegramId,
          "✅ Заявка одобрена! Жди фото в VIP канале."
        );
      } else {
        await ctx.api.sendMessage(
          telegramId,
          "❌ Вы не VIP пользователь, к человеку который дал вам ссылку будут применены санкции, а вы получите блокировку на 7 дней."
        );
      }
    } else {
      await ctx.declineChatJoinRequest(telegramId);

      try {
        await ctx.api.sendMessage(
          telegramId,
          "❌ Вы не зарегистрированы в боте."
        );
      } catch (e) {}
    }
  } catch (error) {
    console.error("Ошибка проверки заявки:", error);
    try {
      await ctx.declineChatJoinRequest(telegramId);
    } catch (e) {}
  }
};

async function trySendMessage(ctx: any, userId: number, text: string) {
  try {
    await ctx.api.sendMessage(userId, text);
  } catch (e) {
    console.log(`Не удалось отправить сообщение юзеру ${userId}`);
  }
}
