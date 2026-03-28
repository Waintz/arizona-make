import { publicFetchRequest } from "../api/axios.instance";
import { RaceStatus } from "../api/types/race.types";

export const raceService = {
  async forceStart(data: {
    prize: string;
    location_id: number;
    status: RaceStatus;
    start_at: Date;
    secret_code: string;
    is_vip: boolean;
  }) {
    try {
      const race = await publicFetchRequest.post("/races/forceStart", {
        ...data,
      });

      return {
        status: race.status,
        success: true,
      };
    } catch (error) {
      console.error("Ошибка создании гонки:", error);
      return { success: false, message: "Сервер недоступен" };
    }
  },

  async getRacePaths(page: number, limit: number) {
    const race_paths = await publicFetchRequest.get("/races/paths", {
      params: {
        page,
        limit,
      },
    });

    return {
      status: race_paths.status,
      ...race_paths.data,
    };
  },
  async getRacePath(raceId: number) {
    const race_path = await publicFetchRequest.get(`/races/paths/${raceId}`, {
    });

    console.log("+вызов")

    return {
      status: race_path.status,
      ...race_path.data,
    };
  },
};
