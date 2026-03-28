import { Request } from "express";

export const getSearchCriteria = (req: Request) => {
  const { id } = req.params;
  console.log("айди в критериях", id);
  const tgId = req.query?.telegramId || req.body?.telegramId;

  const criteria = { telegramId: tgId ? Number(tgId) : undefined } as {
    userId?: string;
    telegramId?: number;
  };

  if (id === "me") {
    criteria.telegramId = tgId ? Number(tgId) : undefined;
  } else {
    criteria.userId = Array.isArray(id) ? id[0] : id;
  }

  const normalizedCriteria = {
    ...criteria,
    userId: criteria.userId
      ? Array.isArray(criteria.userId)
        ? criteria.userId[0]
        : criteria.userId
      : undefined,
  };

  return normalizedCriteria
};
