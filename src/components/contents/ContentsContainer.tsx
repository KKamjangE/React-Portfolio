import { useEffect, useRef, useState } from "react";
import { Content, ContentLayout, Loading } from "@/components";
import { getContentsData, getSkillsData } from "@/api";
import type { ResponseData } from "@/api";
import { useContentsRefStore, useSkillsStore } from "@/store/store";

export default function ContentsContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentData, setContentData] = useState<ResponseData>();

  const { setSkills } = useSkillsStore();

  const elementRef = useRef<HTMLDivElement[]>([]);
  const { setContentsRefs } = useContentsRefStore();

  useEffect(() => {
    getContentsData()
      .then((res) => {
        setContentData(res);
        setIsLoading(false);
        setContentsRefs(elementRef);
      })
      .catch((e) => console.log(e));
    getSkillsData()
      .then((res) => setSkills(res))
      .catch((e) => console.log(e));
  }, []);
  return (
    <>
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
    </>
  );
}
