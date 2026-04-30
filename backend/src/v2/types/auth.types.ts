import { UserRole } from "../generated";

export interface TokenPayload {
  sub: string;
  tgId: string;
  role: UserRole;
  username: string;
  version: number;
}
