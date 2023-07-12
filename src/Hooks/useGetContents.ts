import { rootState, useAppSelector } from "@/store";

export const useGetContents = () => {
  // store에 저장된 contents를 가져오는 훅
  const { contents, error, isLoading } = useAppSelector(
    (state: rootState) => state.contentsStateSliceReducer
  );
  return {
    contentsData: contents,
    contentsError: error,
    isContentsLoading: isLoading,
  };
};

export default useGetContents;
