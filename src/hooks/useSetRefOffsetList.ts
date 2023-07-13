import { useAppDispatch } from "@/store";
import { useCallback } from "react";
import {
  RefOffsetList,
  RefOffsetListStateAction,
} from "@/store/RefTopStateSlice";

export const useSetRefOffsetList = () => {
  // offset 배열 저장하는 dispatch 훅
  const dispatch = useAppDispatch();
  return useCallback(
    (RefOffsetList: RefOffsetList[]) =>
      dispatch(RefOffsetListStateAction.setRefOffsetList(RefOffsetList)),
    [dispatch]
  );
};

export default useSetRefOffsetList;
