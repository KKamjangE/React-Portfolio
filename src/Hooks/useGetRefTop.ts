import { useAppSelector } from "@/store";

export const useGetRefTop = () => {
  // RefTop 배열을 store에서 가져오는 훅
  const RefTopArray = useAppSelector(
    (state) => state.RefTopStateReducer.RefTopArray
  );
  return RefTopArray;
};

export default useGetRefTop;
