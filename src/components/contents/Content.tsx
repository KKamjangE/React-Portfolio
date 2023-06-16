import styled from "styled-components";
import {
  FadeInContent,
  HoverLink,
  YellowPoint,
} from "@/components/interactive";
import type { ContentDataType } from "@/api";

export default function Content({ content }: { content?: ContentDataType }) {
  return (
    <ContentStyled>
      {content?.position && (
        <FadeInContent>
          <p className="position">{content.position}</p>
        </FadeInContent>
      )}
      <FadeInContent>
        <h2 className="company-name">
          {content?.URL?.companyURL ? (
            <a href={content.URL.companyURL} target="_blank">
              <HoverLink>{content?.title}</HoverLink>
            </a>
          ) : (
            <YellowPoint>{content?.title}</YellowPoint>
          )}
        </h2>
      </FadeInContent>
      {content?.period && (
        <FadeInContent>
          <p className="period">{content.period}</p>
        </FadeInContent>
      )}
      {content?.discription && (
        <article className="discription">
          {content.discription.map((discription, idx) => (
            <FadeInContent key={idx}>
              <p>📌 {discription}</p>
            </FadeInContent>
          ))}
        </article>
      )}
    </ContentStyled>
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
