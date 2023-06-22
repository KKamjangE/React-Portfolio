import type { skillsType } from "@/api/types";
import { MutableRefObject } from "react";

export interface skillsStoreType {
  skills: skillsType | null;
  setSkills: (newSkills: skillsType) => void;
}

export interface ContentsStoreType {
  contentsRefs: MutableRefObject<HTMLElement[]> | null;
  setContentsRefs: (newContentsRefs: MutableRefObject<HTMLElement[]>) => void;
}
