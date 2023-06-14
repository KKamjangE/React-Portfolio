import { useEffect, useState } from "react";
import { ContentLayout } from "@/components/layout";
import { getWorkData } from "@/api";
import type { WorkTypes } from "@/api/types";
import { Loading } from "../motions";
import styled from "styled-components";
import { HoverLink } from "@/components/motions";

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
    <ContentLayout title={workData?.title}>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {workData?.data.map((work) => (
            <WorkStyled key={work.id}>
              <p className="position">{work.position}</p>
              <h2 className="company-name">
                <a href={work.companyURL} target="_blank">
                  <HoverLink>{work.companyName}</HoverLink>
                </a>
              </h2>
              <p className="period">{work.period}</p>
              <article className="discription">
                {work.discription.map((discription) => (
                  <p key={work.id}>📌 {discription}</p>
                ))}
              </article>
            </WorkStyled>
          ))}
        </>
      )}
    </ContentLayout>
  );
}

const WorkStyled = styled.section`
  display: grid;
  row-gap: 25px;
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
