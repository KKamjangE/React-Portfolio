import { create } from "zustand";
import type { skillsStoreType } from "./types";

export const useSkillsStore = create<skillsStoreType>((set) => ({
  skills: null,
  setSkills: (newSkills) => {
    set(() => ({ skills: newSkills }));
  },
}));
