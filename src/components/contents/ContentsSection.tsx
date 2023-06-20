import { useEffect, useState } from "react";
import { Content } from "@/components/contents";
import { getData } from "@/api";
import type { ResponseData } from "@/api";
import { ContentLayout } from "@/components/layout";
import { Loading } from "@/components/interactive";

interface ContentsSectionProps {
  elementRef: React.MutableRefObject<HTMLDivElement[]>;
}

export default function ContentsSection({ elementRef }: ContentsSectionProps) {
  const [contentData, setContentData] = useState<ResponseData>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData("/data.json")
      .then((res) => {
        setContentData(res);
        setIsLoading(false);
      })
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
