import { useEffect, useState } from "react";
import { Content, ContentLayout, Loading } from "@/components";
import { getContentsData, getSkillsData } from "@/api";
import type { ResponseData } from "@/api";
import { useSkillsStore } from "@/store/store";

interface ContentsContainerProps {
  elementRef: React.MutableRefObject<HTMLDivElement[]>;
}

export default function ContentsContainer({
  elementRef,
}: ContentsContainerProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [contentData, setContentData] = useState<ResponseData>();
  const { setSkills } = useSkillsStore();

  useEffect(() => {
    getContentsData()
      .then((res) => {
        setContentData(res);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
    getSkillsData()
      .then((res) => setSkills(res))
      .catch((e) => console.log(e));
  }, []);
  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {contentData?.data.map((common, idx) => (
            <div
              key={common.id}
              ref={(ref) => {
                if (ref) elementRef.current[idx] = ref;
              }}
            >
              <ContentLayout title={common.title}>
                {common.data.map((detail) => (
                  <Content key={detail.id} content={detail} />
                ))}
              </ContentLayout>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
