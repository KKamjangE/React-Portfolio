import { useAppDispatch } from "@/store";
import { useCallback } from "react";
import { RefTopStateAction } from "@/store/RefTopStateSlice";

export const useSetRefTopArray = () => {
  // Top 배열 저장하는 dispatch 호출하는 훅
  const dispatch = useAppDispatch();
  return useCallback(
    (RefTopArray: number[]) =>
      dispatch(RefTopStateAction.setRefTop(RefTopArray)),
    [dispatch]
  );
};

export default useSetRefTopArray;
