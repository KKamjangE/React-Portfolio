import axios from "axios";
import type { ResponseData, SkillDescType } from "@/api";

const axiosAPI = axios.create({
  baseURL: import.meta.env.VITE_AXIOS_API_BASE_URL,
});

export const getContentsData = async <T = ResponseData>(): Promise<T> => {
  const response = await axiosAPI.get<T>("data.json");
  return response.data;
};

export const getSkillsData = async <T = SkillDescType>(): Promise<T> => {
  const response = await axiosAPI.get<T>("skill.json");
  return response.data;
};
