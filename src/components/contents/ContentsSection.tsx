import { useEffect, useState } from "react";
import { Content } from "@/components/contents";
import { getData } from "@/api";
import type { ResponseData } from "@/api";
import { ContentLayout } from "@/components/layout";
import { Loading } from "@/components/interactive";

export default function ContentsSection() {
  const [contentData, setContentData] = useState<ResponseData>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData()
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
          {contentData?.data.map((common) => (
            <ContentLayout key={common.id} title={common.title}>
              {common.data.map((detail) => (
                <Content key={detail.id} content={detail} />
              ))}
            </ContentLayout>
          ))}
        </>
      )}
    </section>
  );
}
