import axios from "axios";
import { BACKEND_URL } from "../constants/env";

export const publicFetchRequest = axios.create({
  baseURL: BACKEND_URL,
});
