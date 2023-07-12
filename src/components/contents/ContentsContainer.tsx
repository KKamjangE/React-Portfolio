import { useEffect, useRef } from "react";
import { Content, ContentLayout, Loading } from "@/components";
import useSetRefTopArray from "@/Hooks/useSetRefTop";
import useAxiosGetContents from "@/Hooks/useAxiosGetContents";
import useRefsAtOffsetTops from "@/Hooks/useRefsAtOffsetTops";
import useGetContents from "@/Hooks/useGetContents";

export default function ContentsContainer() {
  useAxiosGetContents(); // 콘텐츠 get 요청
  const { contentsData, contentsError, isContentsLoading } = useGetContents();

  const elementRefs = useRef<HTMLElement[]>([]);
  const setRefTop = useSetRefTopArray(); // RefTop배열을 저장하는 dispatch
  const getRefTops = useRefsAtOffsetTops(); // Ref의 offsetTop 가져오기

  useEffect(() => {
    // 콘텐츠 데이터 로드가 완료되면
    // 렌더링된 콘텐츠의 Ref 배열을 offsetTop 배열로 변환
    const RefTops = getRefTops(elementRefs);
    // offsetTop 배열을 저장하는 dispatch 호출
    setRefTop(RefTops);
  }, [isContentsLoading]);
  return (
    <>
      {isContentsLoading && <Loading />}
      {contentsData && (
        <>
          {contentsData?.data.map((contents, idx) => (
            // 콘텐츠 대분류
            <section
              key={contents.id}
              ref={(ref) => {
                if (ref) elementRefs.current[idx] = ref;
              }}
            >
              <ContentLayout title={contents.title}>
                {contents.data.map((content) => (
                  // 콘텐츠 소분류
                  <Content key={content.id} content={content} />
                ))}
              </ContentLayout>
            </section>
          ))}
        </>
      )}
    </>
  );
}
