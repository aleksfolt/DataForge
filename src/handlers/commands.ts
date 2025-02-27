import { Composer } from "grammy";
import { MyContext } from "@types";

export const commandsComposer = new Composer<MyContext>();

commandsComposer.command("start", async (ctx) => {
    const msg = ctx.t("welcome.message")
    await ctx.reply(msg, {
        parse_mode: "HTML"
    })
    if (ctx.chat.type == "private") {
        const msg = ctx.t("welcome.chats")
        await ctx.reply(msg)
    }
})