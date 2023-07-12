import { getSkillsData, skillsType } from "@/api";
import { AxiosError } from "axios";
import { useState } from "react";

export const useAxiosGetSkills = () => {
  // skill 데이터 get 요청하는 훅
  // 데이터, 에러, 로딩 반환
  const [skillsData, setSkillsData] = useState<skillsType | null>(null);
  const [skillsError, setSkillsError] = useState<AxiosError | null>(null);
  const [isSkillsLoading, setIsSkillsLoading] = useState<boolean>(true);
  getSkillsData()
    .then((res) => {
      setSkillsData(res);
    })
    .catch((e) => setSkillsError(e))
    .finally(() => setIsSkillsLoading(false));

  return { skillsData, skillsError, isSkillsLoading };
};
