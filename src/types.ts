import { Context } from "grammy";

export type MyContext = Context & {
  t: (key: string, options?: any) => string;
};