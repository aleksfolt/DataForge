import { Composer } from "grammy";
import { MyContext } from "@types";
import { getUserChats } from "../database/services/chatService";
import { createChatsKeyboard } from "./keyboards";

export const startCommand = new Composer<MyContext>();

startCommand.command("start", async (ctx) => {
  const msg = ctx.t("welcome.message");
  await ctx.reply(msg, { parse_mode: "HTML" });
  
  if (ctx.chat.type === "private") {
    const userId = ctx.from?.id;
    if (userId) {
      try {
        const userChats = await getUserChats(userId);
        const welcomeMsg = ctx.t("welcome.chats");
        
        if (userChats.length > 0) {
          const keyboard = createChatsKeyboard(userChats);
          await ctx.reply(welcomeMsg, { reply_markup: keyboard });
        } else {
          await ctx.reply(welcomeMsg);
        }
      } catch (error) {
        console.error("Error fetching user chats:", error);
        const welcomeMsg = ctx.t("welcome.chats");
        await ctx.reply(welcomeMsg);
      }
    }
  }
});
