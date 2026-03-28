import { prisma } from "../../database/db"

export const locationService = {
  async getLocations(limit: number = 10, page: number = 1) {
    const [requests, total] = await prisma.$transaction([
      prisma.location.findMany({
        orderBy: { name: "asc" },
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.location.count(),
    ])
    return { requests, total }
  }
}