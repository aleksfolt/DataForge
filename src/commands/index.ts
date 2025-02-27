import { Composer } from "grammy";
import { MyContext } from "@types";
import { startCommand } from "./start";
import { chatCallbackCommand } from "./callbacks/callbacks";

export const commandsComposer = new Composer<MyContext>();

commandsComposer.use(startCommand);
commandsComposer.use(chatCallbackCommand);