import axios from "axios";
import type {
  WorkTypes,
  ProjectTypes,
  EducationTypes,
  ShareTypes,
} from "./types";

const axiosAPI = axios.create({
  baseURL: "http://localhost:5173/src/assets/data",
});

export const getWorkData = async <T = WorkTypes>(): Promise<T> => {
  const response = await axiosAPI.get<T>("work.json");
  return response.data;
};

export const getProjectData = async <T = ProjectTypes>(): Promise<T> => {
  const response = await axiosAPI.get<T>("project.json");
  return response.data;
};

export const getShareData = async <T = ShareTypes>(): Promise<T> => {
  const response = await axiosAPI.get<T>("share.json");
  return response.data;
};

export const getEducationData = async <T = EducationTypes>(): Promise<T> => {
  const response = await axiosAPI.get<T>("education.json");
  return response.data;
};
