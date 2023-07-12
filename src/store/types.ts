import type { skillsType } from "@/api/types";

export interface skillsStoreType {
  skills: skillsType | null;
  setSkills: (newSkills: skillsType) => void;
}
