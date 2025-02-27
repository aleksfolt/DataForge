import Chat, { IChat } from "../models/Chat";

export async function addAdminToChat(chatId: number, adminId: number): Promise<void> {
  try {
    await Chat.findOneAndUpdate(
      { chatId },
      { $addToSet: { globalAdmins: adminId } },
      { new: true, upsert: true }
    );
  } catch (error) {
    console.error('Ошибка при добавлении администратора:', error);
  }
}

export async function addOrUpdateChat(
  chatId: number,
  isActive: boolean,
  globalAdmins: number[],
  title: string   
): Promise<IChat> {
  try {
    const updatedChat = await Chat.findOneAndUpdate(
      { chatId },
      { chatId, isActive, globalAdmins, title },
      { new: true, upsert: true }
    );
    return updatedChat;
  } catch (error) {
    console.error('Ошибка при добавлении или обновлении чата:', error);
    throw error;
  }
}

export async function deleteAdmin(chatId: number, adminId: number): Promise<void> {
  try {
    await Chat.findOneAndUpdate(
      { chatId },
      { $pull: { globalAdmins: adminId } }, 
      { new: true }
    );
  } catch (error) {
    console.error('Ошибка при удалении администратора:', error);
    throw error;
  }
}

export async function setChatWork(chatId: number, isActive: boolean): Promise<IChat | null> {
  try {
    const updatedChat = await Chat.findOneAndUpdate(
      { chatId },
      { isActive },
      { new: true }
    );
    return updatedChat;
  } catch (error) {
    console.error('Ошибка при обновлении активности чата:', error);
    throw error;
  }
}


export async function getUserChats(userId: number): Promise<Array<{title: string, chatId: number}>> {
  try {
    const chats = await Chat.find({ globalAdmins: userId });
    
    return chats.map(chat => ({
      title: chat.title,
      chatId: chat.chatId
    }));
  } catch (error) {
    console.error('Ошибка при получении чатов пользователя:', error);
    throw error;
  }
}