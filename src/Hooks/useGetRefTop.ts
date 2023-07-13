import { useAppSelector } from "@/store";

export const useGetRefTop = () => {
  // RefTop 배열을 store에서 가져오는 훅
  const RefTopList = useAppSelector(
    (state) => state.RefTopStateReducer.RefTopArray
  );
  return RefTopList;
};

export default useGetRefTop;
