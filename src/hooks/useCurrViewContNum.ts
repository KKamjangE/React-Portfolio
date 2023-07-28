import { useState, useEffect } from "react";
import { useGetRefOffsetList } from "@/hooks";

export const useCurrViewContentNum = () => {
  // 현재 스크롤이 어느 콘텐츠에 있나 확인하는 훅
  // 현재 스크롤이 위치한 콘텐츠의 인덱스 반환
  const [currViewContentNum, setCurrViewContNum] = useState<number | null>(
    null
  );
  const RefOffsetList = useGetRefOffsetList();
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      for (let i = 0; i < RefOffsetList.length; i++) {
        const { top, height } = RefOffsetList[i];
        if (top <= currentScrollPos && top + height > currentScrollPos) {
          setCurrViewContNum(i);
          break;
        } else {
          setCurrViewContNum(null);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [RefOffsetList]);

  return { currViewContentNum };
};

export default useCurrViewContentNum;
