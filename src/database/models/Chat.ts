import { Schema, model, Document } from 'mongoose';

export interface IChat extends Document {
  chatId: number;
  isActive: boolean;
  globalAdmins: number[];
}

const chatSchema = new Schema<IChat>({
  chatId: { type: Number, required: true },
  isActive: { type: Boolean, default: false },
  globalAdmins: { type: [Number], default: [] },
});

const Chat = model<IChat>('Chat', chatSchema);

export default Chat;