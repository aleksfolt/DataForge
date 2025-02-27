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
  globalAdmins: number[]
): Promise<IChat> {
  try {
    const updatedChat = await Chat.findOneAndUpdate(
      { chatId },
      { chatId, isActive, globalAdmins },
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