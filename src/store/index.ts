import { create } from "zustand";
import type { skillsStoreType, ContentsStoreType } from "./types";

export const useContentsRefStore = create<ContentsStoreType>((set) => ({
  contentsRefs: null,
  setContentsRefs: (newContentsRefs) => {
    set(() => ({ contentsRefs: newContentsRefs }));
  },
}));

export const useSkillsStore = create<skillsStoreType>((set) => ({
  skills: null,
  setSkills: (newSkills) => {
    set(() => ({ skills: newSkills }));
  },
}));
