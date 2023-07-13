import { useAppDispatch } from "@/store";
import { useCallback } from "react";
import { RefTopStateAction } from "@/store/RefTopStateSlice";

export const useSetRefTopArray = () => {
  // Top 배열 저장하는 dispatch 훅
  const dispatch = useAppDispatch();
  return useCallback(
    (RefTopList: number[]) =>
      dispatch(RefTopStateAction.setRefTopList(RefTopList)),
    [dispatch]
  );
};

export default useSetRefTopArray;
