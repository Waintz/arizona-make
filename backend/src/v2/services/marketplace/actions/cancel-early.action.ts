import { MarketplaceDeal, Prisma } from "../../../generated";
import { ActionContext, BaseDealAction } from "./base.action";

export class CancelEarlyAction extends BaseDealAction {
  async cancelEarly(
    tx: Prisma.TransactionClient,
    deal: MarketplaceDeal,
    isBuyer: boolean,
    isSeller: boolean
  ) {
    const updateData: Prisma.MarketplaceDealUpdateInput = {};
    if (isBuyer) updateData.buyer_wants_to_close = true;
    if (isSeller) updateData.seller_wants_to_close = true;

    const updatedDeal = await tx.marketplaceDeal.update({
      where: { id: deal.id },
      data: updateData,
    });

    if (updatedDeal.seller_wants_to_close && updatedDeal.buyer_wants_to_close) {
      await tx.marketplaceDeal.update({
        where: { id: deal.id },
        data: { status: "CANCELLED" },
      });

      await tx.marketplaceItem.update({
        where: { id: deal.item_id },
        data: { status: "FOR_SALE" },
      });
    } else if (
      updatedDeal.seller_wants_to_close &&
      !updateData.buyer_wants_to_close
    ) {
      // отправка покупателю предложение о закрытии сделки
    } else {
      // отправка продавцу предложение о закрытии сделки
    }

    return { success: true };
  }

  async execute({ deal, tx, isBuyer, isSeller }: ActionContext): Promise<void> {
    await this.cancelEarly(tx, deal, isBuyer, isSeller);
  }
}
