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

export const getWorkData = async () => {
  const response = await axiosAPI.get("work.json");
  return response.data;
};

export const getProjectData = async () => {
  const response = await axiosAPI.get("project.json");
  return response.data;
};

export const getShareData = async () => {
  const response = await axiosAPI.get("share.json");
  return response.data;
};

export const getEducationData = async () => {
  const response = await axiosAPI.get("education.json");
  return response.data;
};
