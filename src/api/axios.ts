import axios from "axios";
import type { ResponseData } from "./types";

const axiosAPI = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_API_BASE_URL,
});

export const getData = async <T = ResponseData>(): Promise<T> => {
  const response = await axiosAPI.get<T>("/data.json");
  return response.data;
};
