import styled from "styled-components";
import {
  FadeInContent,
  TextHoverMotion,
  YellowPoint,
  ContentUrl,
  ContentDescription,
  ContentSkill,
} from "@/components";
import type { ContentDataType } from "@/api";

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
              <TextHoverMotion>{content.title}</TextHoverMotion>
            </a>
          ) : (
            <YellowPoint>{content.title}</YellowPoint>
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
      {content.description && (
        <ContentDescription description={content.description} />
      )}
      {content.URL && <ContentUrl urls={content.URL} />}
      {content.skill && <ContentSkill skill={content.skill} />}
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
`;
