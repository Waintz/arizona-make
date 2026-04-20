import { ActionContext, BaseDealAction } from "./base.action";

export class ConfirmContactAction extends BaseDealAction {
  async execute({ tx, deal, isBuyer }: ActionContext) {
    await tx.marketplaceDeal.update({
      where: { id: deal.id },
      data: isBuyer
        ? { buyer_confirmed_contact: true }
        : { seller_confirmed_contact: true },
    });
  }
}
