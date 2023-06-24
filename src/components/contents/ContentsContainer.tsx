import { useEffect, useRef, useState } from "react";
import { getContentsData, getSkillsData } from "@/api";
import type { ResponseData } from "@/api";
import { useContentsRefStore, useSkillsStore } from "@/store";
import { Content, ContentLayout, Loading } from "@/components";

export default function ContentsContainer() {
  const [isLoading, setIsLoading] = useState(true);
  const [contentsData, setContentsData] = useState<ResponseData>();

  const { setSkills } = useSkillsStore();

  const elementRef = useRef<HTMLElement[]>([]);
  const { setContentsRefs } = useContentsRefStore();

  useEffect(() => {
    getContentsData()
      .then((res) => {
        setContentsData(res);
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
          {contentsData?.data.map((contents, idx) => (
            <section
              key={contents.id}
              ref={(ref) => {
                if (ref) elementRef.current[idx] = ref;
              }}
            >
              <ContentLayout title={contents.title}>
                {contents.data.map((content) => (
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
