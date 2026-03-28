import { Context, SessionFlavor } from "grammy";
import { ConversationFlavor } from "@grammyjs/conversations";
import { User } from "../api/types/user.types";

export interface SessionData {
  [x: string]: boolean;
}

type MyBaseContext = Context &
  SessionFlavor<SessionData> & {
    user?: User | null;
    isVip: boolean;
  };

export type UserContext = ConversationFlavor<MyBaseContext>;
