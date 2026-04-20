import { EvidenceFileType, Prisma } from "../../../generated";
import { EvidenceDTO, ReportDTO } from "../../../schemas/marketplace.schema";
import { ActionContext, BaseDealAction } from "./base.action";

export class ReportAction extends BaseDealAction {
  async createReport(
    tx: Prisma.TransactionClient,
    report: ReportDTO,
    reporterId: number,
    targetId: number,
    dealId: number
  ) {
    return await tx.report.create({
      data: {
        reason: report.reason,
        reporter_id: reporterId,
        target_id: targetId,
        deal_id: dealId,
        evidences: {
          create: report.evidences.map((evidance: EvidenceDTO) => ({
            tg_file_id: evidance.tgFileId,
            file_type: evidance.fileType,
          })),
        },
      },
    });
  }

  async addEvidence(
    evidences: EvidenceDTO[],
    reportId: number,
    tx: Prisma.TransactionClient
  ) {
    await tx.reportEvidence.createMany({
      data: evidences.map((evidence) => ({
        report_id: reportId,
        tg_file_id: evidence.tgFileId,
        file_type: evidence.fileType || "PHOTO",
      })),
    });
  }

  async execute({ tx, deal, report, user, isBuyer }: ActionContext) {
    if (!report) {
      throw { status: 400, message: "Данные репорта отсутствуют" };
    }

    const targetId = isBuyer ? deal.item.seller_id : deal.buyer_id;
    const reporterId = user.id;

    await this.createReport(tx, report, reporterId, targetId, deal.id);
  }
}
