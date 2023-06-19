import styled from "styled-components";
import {
  FadeInContent,
  HoverLink,
  YellowPoint,
} from "@/components/interactive";
import type { ContentDataType } from "@/api";
import { ContentUrl } from "@/components/contents";

export default function Content({ content }: { content: ContentDataType }) {
  return (
    <ContentStyled>
      <FadeInContent>
        <p className="classification">{content?.classification}</p>
      </FadeInContent>
      <FadeInContent>
        <h2 className="company-name">
          {content.titleURL ? (
            <a href={content.titleURL} target="_blank">
              <HoverLink>{content?.title}</HoverLink>
            </a>
          ) : (
            <YellowPoint>{content?.title}</YellowPoint>
          )}
        </h2>
      </FadeInContent>
      {content.position && (
        <FadeInContent>
          <p className="position">{content.position}</p>
        </FadeInContent>
      )}
      {content.period && (
        <FadeInContent>
          <p className="period">{content.period}</p>
        </FadeInContent>
      )}
      {content.discription && (
        <article className="discription">
          {content.discription.map((discription, idx) => (
            <FadeInContent key={idx}>
              <p>📌 {discription}</p>
            </FadeInContent>
          ))}
        </article>
      )}
      {content.URL && <ContentUrl urls={content.URL} />}
    </ContentStyled>
  );
}

const ContentStyled = styled.article`
  display: grid;
  row-gap: 30px;
  h2.company-name {
    font-size: 1.4rem;
    font-weight: bold;
  }
  p.position {
    font-size: 0.9rem;
    font-weight: 500;
  }
  p.period {
    font-size: 0.7rem;
    font-weight: 400;
    opacity: 0.7;
  }
  article.discription {
    display: grid;
    row-gap: 12px;
    font-size: 0.8rem;
  }
  article.url-section {
  }
`;
