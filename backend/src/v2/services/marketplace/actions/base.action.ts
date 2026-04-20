import { Prisma, MarketplaceDeal, User, MarketplaceItem } from "../../../generated";
import { ReportDTO } from "../../../schemas/marketplace.schema";

export interface ActionContext {
  tx: Prisma.TransactionClient;
  deal: MarketplaceDeal & { item: MarketplaceItem };
  user: User;
  isBuyer: boolean;
  isSeller: boolean;
  report?: ReportDTO;
}

export abstract class BaseDealAction {
  abstract execute(ctx: ActionContext): Promise<void>;
}