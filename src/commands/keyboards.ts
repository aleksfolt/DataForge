import { InlineKeyboard } from "grammy";

export function createChatsKeyboard(userChats: Array<{ title: string; chatId: number }>): InlineKeyboard {
  const keyboard = new InlineKeyboard();
  userChats.forEach(chat => {
    keyboard.row().text(chat.title, `chat:${chat.chatId}`);
  });
  return keyboard;
}