import { Composer } from "grammy";
import { UserContext } from "../context/context";

export const sendFileIdComposer = new Composer<UserContext>();

sendFileIdComposer.on("channel_post:photo", async (ctx) => {
    const photoId = ctx.channelPost.photo[ctx.channelPost.photo.length - 1].file_id;
    const caption = ctx.channelPost.caption || "Без названия";

    await ctx.reply(`📸 Фото: <b>${caption}</b>\n🆔 ID: <code>${photoId}</code>`, { parse_mode: "HTML" });
});