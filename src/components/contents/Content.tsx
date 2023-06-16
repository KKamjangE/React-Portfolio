import { useEffect, useState } from "react";
import styled from "styled-components";
import { ContentLayout } from "@/components/layout";
import { FadeInContent, Loading, HoverLink } from "@/components/interactive";
import { getData } from "@/api";
import type { getDataTypes } from "@/api/types";

export default function Content() {
  const [workData, setWorkData] = useState<getDataTypes>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getData()
      .then((res) => {
        console.log(res);
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
        <ContentLayout>
          <ContentStyled>
            <FadeInContent>
              <p className="position">{}</p>
            </FadeInContent>
            <FadeInContent>
              <h2 className="company-name">
                <a target="_blank">
                  <HoverLink>{}</HoverLink>
                </a>
              </h2>
            </FadeInContent>
            <FadeInContent>
              <p className="period">{}</p>
            </FadeInContent>
            <article className="discription">
              <FadeInContent>
                <p>📌 {}</p>
              </FadeInContent>
            </article>
          </ContentStyled>
        </ContentLayout>
      )}
    </>
  );
}

const ContentStyled = styled.section`
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
