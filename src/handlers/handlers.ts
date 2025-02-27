import { addAdminToChat, addOrUpdateChat, deleteAdmin, setChatWork } from "../database/services/chatService";
import { MyContext } from "@types";
import { Composer } from "grammy";
import type { ChatMemberUpdated } from "grammy/types";

export const handlersComposer = new Composer<MyContext>();

function hasRequiredPrivileges(admin: ChatMemberUpdated["new_chat_member"]): boolean {
  return admin.status === "administrator" &&
    (admin.can_pin_messages || admin.can_delete_messages);
}

handlersComposer.on("my_chat_member", async (ctx) => {
  const { new_chat_member } = ctx.update.my_chat_member;
  
  if (new_chat_member.user.id === ctx.me.id) {
    if (new_chat_member.status === "member" || new_chat_member.status === "administrator") {
      const msg = ctx.t("group.welcome", {
        username: ctx.me.username,
      });
      await ctx.reply(msg, {parse_mode: "HTML"});
      
      const initialAdmins: number[] = [];
      await addOrUpdateChat(ctx.chat.id, true, initialAdmins);
      
      try {
        const admins = await ctx.getChatAdministrators();
        for (const admin of admins) {
          if (hasRequiredPrivileges(admin)) {
            await addAdminToChat(ctx.chat.id, admin.user.id);
          }
        }
      } catch (error) {
        console.error('Error fetching or adding admins:', error);
      }
    }
    else if (new_chat_member.status === "left" || new_chat_member.status === "kicked") {
      await setChatWork(ctx.chat.id, false);
    }
  }
});

handlersComposer.on("chat_member", async (ctx) => {
  if (!ctx.chatMember) return;
  
  const { new_chat_member, old_chat_member, chat } = ctx.chatMember;
  console.log(new_chat_member, old_chat_member);
  
  if (
    hasRequiredPrivileges(new_chat_member) &&
    (
      old_chat_member.status !== "administrator" ||
      !(old_chat_member.can_pin_messages || old_chat_member.can_delete_messages)
    )
  ) {
    await addAdminToChat(chat.id, new_chat_member.user.id);
  }
  
  if (
    old_chat_member.status === "administrator" &&
    (old_chat_member.can_pin_messages || old_chat_member.can_delete_messages) &&
    (
      new_chat_member.status === "member" ||
      new_chat_member.status === "left" ||
      new_chat_member.status === "kicked" ||
      (
        new_chat_member.status === "administrator" &&
        !new_chat_member.can_pin_messages &&
        !new_chat_member.can_delete_messages
      )
    )
  ) {
    await deleteAdmin(chat.id, new_chat_member.user.id);
  }
});