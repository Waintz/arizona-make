import { publicFetchRequest } from "../api/axios.instance";

export const locationRaceService = {
  async getAllLocations() {
    try {
      const response = await publicFetchRequest.get("/locations");

      return response.data;
    } catch (error) {
      console.error("Ошибка получения локаций:", error);
      return [];
    }
  },
};
