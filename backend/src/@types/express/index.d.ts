import { TokenPayload } from "../../v2/types/auth.types";

declare global {
  namespace Express {
    interface Request {
      user?: TokenPayload;
    }
  }
}
