import axios from "axios";
import type { getDataTypes } from "./types";

const axiosAPI = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_API_BASE_URL,
});

export const getData = async <T = getDataTypes>(): Promise<T> => {
  const response = await axiosAPI.get<T>("/data.json");
  return response.data;
};
