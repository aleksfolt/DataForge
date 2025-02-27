import { Schema, model, Document } from 'mongoose';

export interface IChat extends Document {
  chatId: number;
  isActive: boolean;
  globalAdmins: number[];
  title: string;
}

const chatSchema = new Schema<IChat>({
  chatId: { type: Number, required: true },
  isActive: { type: Boolean, default: false },
  globalAdmins: { type: [Number], default: [] },
  title: { type: String, default: '' },
});

const Chat = model<IChat>('Chat', chatSchema);

export default Chat;