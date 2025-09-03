import { type RootState, useAppSelector } from "@/store";

export default function useGetRefOffsetList() {
  // offset 배열을 store에서 가져오는 훅
  const RefOffsetList = useAppSelector(
    (state: RootState) => state.RefOffsetListStateReducer.refOffsetList
  );
  return RefOffsetList;
}
