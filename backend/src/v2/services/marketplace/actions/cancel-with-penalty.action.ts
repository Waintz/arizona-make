import { DealStatus, MarketplaceDeal, Prisma, User } from "../../../generated";
import { ActionContext, BaseDealAction } from "./base.action";

export class CancelWithPenaltyAction extends BaseDealAction {
  async cancelWithPenalty(
    tx: Prisma.TransactionClient,
    deal: MarketplaceDeal,
    isBuyer: boolean,
    isSeller: boolean,
    user: User
  ) {
    const updateUser: Prisma.UserUpdateInput = {};
    if (isBuyer) updateUser.reputation = Math.max(0, user.reputation - 10);
    if (isSeller) updateUser.reputation = Math.max(0, user.reputation - 10);

    await this.updateDealStatus(tx, deal.id, "CLOSED_WITH_PENALTY");

    await this.issuePenalty(tx, user.id, updateUser);

    await this.resetItemStatus(tx, deal.item_id);

    return { success: true };
  }

  private async getVictimTgId(
    tx: Prisma.TransactionClient,
    deal: MarketplaceDeal & { item: any },
    isBuyerInitiator: boolean
  ): Promise<bigint> {
    const victimId = isBuyerInitiator ? deal.item.seller_id : deal.buyer_id;

    const victim = await tx.user.findUnique({
      where: { id: victimId },
      select: { telegram_id: true },
    });

    if (!victim) {
      throw { status: 404, message: "Пострадавший участник не найден" };
    }

    return victim.telegram_id;
  }

  private async updateDealStatus(
    tx: Prisma.TransactionClient,
    dealId: number,
    status: DealStatus
  ) {
    return await tx.marketplaceDeal.update({
      where: { id: dealId },
      data: { status },
    });
  }

  private async issuePenalty(
    tx: Prisma.TransactionClient,
    userId: number,
    data: Prisma.UserUpdateInput
  ) {
    return await tx.user.update({
      where: { id: userId },
      data,
    });
  }

  private async resetItemStatus(tx: Prisma.TransactionClient, itemId: number) {
    return await tx.marketplaceItem.update({
      where: { id: itemId },
      data: { status: "FOR_SALE" },
    });
  }

  async execute({
    deal,
    isBuyer,
    isSeller,
    tx,
    user,
  }: ActionContext): Promise<void> {
    await this.cancelWithPenalty(tx, deal, isBuyer, isSeller, user);

    const victimTgId = await this.getVictimTgId(tx, deal, isBuyer);

    const initiatorName = user.username || "Участник";
  }
}
