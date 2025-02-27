import { Composer } from "grammy";
import { MyContext } from "@types";

export const chatCallbackCommand = new Composer<MyContext>();

chatCallbackCommand.callbackQuery(/^chat:(.+)$/, async (ctx) => {
    const chatId = ctx.match[1];
    await ctx.answerCallbackQuery();
    await ctx.editMessageText(`Selected chat ID: ${chatId}`)
});