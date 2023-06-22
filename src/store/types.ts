import type { skillsType } from "@/api/types";
import { MutableRefObject } from "react";

export interface skillsStoreType {
  skills: skillsType | null;
  setSkills: (newSkills: skillsType) => void;
}

export interface ContentsStoreType {
  contentsRefs: MutableRefObject<HTMLDivElement[]> | null;
  setContentsRefs: (
    newContentsRefs: MutableRefObject<HTMLDivElement[]>
  ) => void;
}
