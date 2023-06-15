import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContentLayout } from "@/components/layout";
import { FadeInContent, Loading, HoverLink } from "@/components/interactive";
import { getWorkData } from "@/api";
import type { WorkTypes } from "@/api/types";

export default function Work() {
  const [workData, setWorkData] = useState<WorkTypes>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getWorkData()
      .then((res) => {
        setWorkData(res);
        setIsLoading(false);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <ContentLayout title={workData?.title}>
          {workData?.data.map((work) => (
            <WorkStyled key={work.id}>
              <FadeInContent>
                <p className="position">{work.position}</p>
              </FadeInContent>
              <FadeInContent>
                <h2 className="company-name">
                  <a href={work.companyURL} target="_blank">
                    <HoverLink>{work.companyName}</HoverLink>
                  </a>
                </h2>
              </FadeInContent>
              <FadeInContent>
                <p className="period">{work.period}</p>
              </FadeInContent>
              <article className="discription">
                {work.discription.map((discription, idx) => (
                  <FadeInContent key={idx}>
                    <p>📌 {discription}</p>
                  </FadeInContent>
                ))}
              </article>
            </WorkStyled>
          ))}
        </ContentLayout>
      )}
    </>
  );
}

const WorkStyled = styled.section`
  display: grid;
  row-gap: 30px;
  padding-top: 50px;
  h2.company-name {
    font-size: 1.6rem;
    font-weight: bold;
    a {
      display: inline-block;
      text-decoration: underline;
    }
  }
  p.position {
    font-size: 1.1rem;
    font-weight: 500;
  }
  p.period {
    font-size: 0.8rem;
    font-weight: 400;
    opacity: 0.7;
  }
  article.discription {
    display: grid;
    row-gap: 12px;
    font-size: 0.9rem;
  }
`;
