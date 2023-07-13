import { RefOffsetList } from "@/store/RefTopStateSlice";
import { MutableRefObject } from "react";

export const useRefsAtOffsets = () => {
  // Ref 배열을 받아서 offset 배열로 변환해주는 훅
  const getRefOffsetList = (elementRefs: MutableRefObject<HTMLElement[]>) => {
    const RefOffsetList = elementRefs.current.reduce<RefOffsetList[]>(
      (result, item) => {
        result.push({ top: item.offsetTop, height: item.offsetHeight });
        return result;
      },
      []
    );
    return RefOffsetList;
  };
  return getRefOffsetList;
};

export default useRefsAtOffsets;
