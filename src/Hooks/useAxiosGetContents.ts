import { ResponseData, getContentsData } from "@/api";
import { AxiosError } from "axios";
import { useState } from "react";

export const useAxiosGetContents = () => {
  // contents 데이터 get 요청하는 훅
  // 데이터, 에러, 로딩 반환
  const [contentsData, setData] = useState<ResponseData | null>(null);
  const [contentsError, setContentsError] = useState<AxiosError | null>(null);
  const [isContentsLoading, setIsContentsLoading] = useState<boolean>(true);
  getContentsData()
    .then((res) => {
      setData(res);
    })
    .catch((e) => {
      setContentsError(e);
    })
    .finally(() => setIsContentsLoading(false));
  return { contentsData, isContentsLoading, contentsError };
};

export default useAxiosGetContents;
