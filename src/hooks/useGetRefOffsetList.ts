import { RootState, useAppSelector } from "@/store";

export const useGetRefOffsetList = () => {
  // offset 배열을 store에서 가져오는 훅
  const RefOffsetList = useAppSelector(
    (state: RootState) => state.RefOffsetListStateReducer.refOffsetList
  );
  return RefOffsetList;
};

export default useGetRefOffsetList;
