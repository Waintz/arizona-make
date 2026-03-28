import { Conversation } from "@grammyjs/conversations";
import { UserContext } from "../context/context";

export type ConversationContext = Conversation<UserContext, UserContext>;
