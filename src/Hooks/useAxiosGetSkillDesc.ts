import { getSkillsData } from "@/api";
import { useAppDispatch } from "@/store";
import { skillDescStateAction } from "@/store/skillDescStateSlice";
import { useEffect } from "react";

export const useAxiosGetSkillDesc = () => {
  // skill 데이터 get 요청해서 store에 저장하는 훅
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(skillDescStateAction.setIsLoading(true));
    dispatch(skillDescStateAction.setError(null));

    getSkillsData()
      .then((res) => dispatch(skillDescStateAction.setSkillDesc(res)))
      .catch((e) => dispatch(skillDescStateAction.setError(e.message)))
      .finally(() => dispatch(skillDescStateAction.setIsLoading(false)));
  }, [dispatch]);
};

export default useAxiosGetSkillDesc;
