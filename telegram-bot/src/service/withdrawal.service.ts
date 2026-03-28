import { publicFetchRequest } from "../api/axios.instance";
import { GetUserDto } from "../types/user-dto";

export const withdrawalService = {
  async createWithdrawalRequests({
    userId,
    amount,
    requisites,
  }: {
    userId: number;
    amount: number;
    requisites: Record<string, string>;
  }) {
    const createRequest = await publicFetchRequest.post("/withdrawals", {
      userId,
      amount,
      requisites,
    });

    return { data: createRequest.data, status: createRequest.status };
  },

  async getWithdrawalRequests({
    id,
    identifier,
    limit,
    page,
    fields,
  }: {
    id?: number;
    limit?: number;
    page?: number;
    identifier?: GetUserDto;
    fields?: string[];
  }) {
    console.log("fields", fields);
    const requests = await publicFetchRequest.get("/withdrawals", {
      params: {
        id,
        userId: identifier?.userId,
        telegramId: identifier?.telegramId,
        page: page,
        limit: limit,
        fields: fields ? fields.join(",") : undefined,
      },
    });

    return { data: requests.data, status: requests.status };
  },

  async updateWithdrawalRequest({
    id,
    updateData,
  }: {
    id: number;
    updateData: Record<string, string>;
  }) {
    const update = await publicFetchRequest.patch(`/withdrawals/${id}`, {
      ...updateData,
    });

    const data = update.data;

    return data;
  },

  async approveWithdrawalRequest(id: number) {
    const approve = await publicFetchRequest.patch(
      `/withdrawals/${id}/approve`
    );

    const data = approve.data;
    return data;
  },

  async rejectWithdrawalRequest(
    id: number,
    reason?: string,
    adminComment?: string
  ) {
    const reject = await publicFetchRequest.patch(`/withdrawals/${id}/reject`, {
      reason,
      adminComment,
    });
    const data = reject.data;
    return data;
  },
};
