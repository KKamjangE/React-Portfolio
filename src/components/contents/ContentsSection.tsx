import { useEffect, useState } from "react";
import { Content } from "@/components/contents";
import { getContentsData, getSkillsData } from "@/api";
import type { ResponseData } from "@/api";
import { ContentLayout } from "@/components/layout";
import { Loading } from "@/components/interactive";
import { useSkillsStore } from "@/store/store";

interface ContentsSectionProps {
  elementRef: React.MutableRefObject<HTMLDivElement[]>;
}

export default function ContentsSection({ elementRef }: ContentsSectionProps) {
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
