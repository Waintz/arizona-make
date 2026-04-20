import { ActionContext, BaseDealAction } from "./base.action";

export class CancelAction extends BaseDealAction {
  async execute({
    deal,
    isBuyer,
    isSeller,
    tx,
    user,
  }: ActionContext): Promise<void> {
    await tx.marketplaceDeal.update({
      where: {
        id: deal.id,
      },
      data: {
        status: "CANCELLED",
      },
    });

    await tx.marketplaceItem.update({
      where: {
        id: deal.item_id,
      },
      data: {
        status: "FOR_SALE",
      },
    });
  }
}
