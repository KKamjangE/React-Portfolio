import { MutableRefObject } from "react";

export const useRefsAtOffsetTops = () => {
  // Ref 배열을 받아서 offsetTop 배열로 변환해주는 훅
  const getRefTops = (elementRefs: MutableRefObject<HTMLElement[]>) => {
    const RefTops = elementRefs.current.reduce<number[]>((result, item) => {
      result.push(item.offsetTop);
      return result;
    }, []);
    return RefTops;
  };
  return getRefTops;
};

export default useRefsAtOffsetTops;
