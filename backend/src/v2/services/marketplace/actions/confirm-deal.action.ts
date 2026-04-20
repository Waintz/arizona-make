import { Prisma, User } from "../../../generated";
import { ActionContext, BaseDealAction } from "./base.action";

export class ConfirmDealAction extends BaseDealAction {
  private async addReputation(
    tx: Prisma.TransactionClient,
    user: User,
    isBuyer: boolean
  ) {
    const bonus = isBuyer ? 5 : 10;
    const newReputation = Math.min(100, user.reputation + bonus);

    await tx.user.update({
      where: { id: user.id },
      data: { reputation: newReputation },
    });
  }

  async execute({ deal, tx, isBuyer, user }: ActionContext): Promise<void> {
    if (!deal.buyer_confirmed_contact || !deal.seller_confirmed_contact) {
      throw {
        status: 400,
        message: "Обе стороны должны подтвердить контакт",
      };
    }

    const updatedDeal = await tx.marketplaceDeal.update({
      where: { id: deal.id },
      data: isBuyer
        ? { buyer_confirmed_deal: true }
        : { seller_confirmed_deal: true },
    });

    if (updatedDeal.buyer_confirmed_deal && updatedDeal.seller_confirmed_deal) {
      await tx.marketplaceDeal.update({
        where: { id: deal.id },
        data: { status: "COMPLETED" },
      });

      await tx.marketplaceItem.update({
        where: { id: deal.item_id },
        data: { status: "SOLD" },
      });

      await this.addReputation(tx, user, isBuyer);
    }
  }
}
