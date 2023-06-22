import styled from "styled-components";
import type { UrlType } from "@/api";
import { FadeInContent, TextHoverMotion } from "@/components";

export default function ContentUrl({ urls }: { urls: UrlType }) {
  return (
    <ContentUrlStyeld>
      <FadeInContent>
        <p className="title">🔗 관련링크들</p>
      </FadeInContent>
      <div className="urls">
        {urls.github && (
          <FadeInContent>
            <a href={urls.github} target="_blank">
              📌<TextHoverMotion>Github</TextHoverMotion>
            </a>
          </FadeInContent>
        )}
        {urls.video && (
          <FadeInContent>
            <a href={urls.video} target="_blank">
              📌<TextHoverMotion>Video</TextHoverMotion>
            </a>
          </FadeInContent>
        )}
        {urls.notion && (
          <FadeInContent>
            <a href={urls.notion} target="_blank">
              📌<TextHoverMotion>Notion 정리</TextHoverMotion>
            </a>
          </FadeInContent>
        )}
      </div>
    </ContentUrlStyeld>
  );
}

const ContentUrlStyeld = styled.article`
  p.title {
    font-weight: bold;
    margin-bottom: 30px;
  }
  .urls {
    display: grid;
    row-gap: 10px;
    a {
      font-size: 0.8rem;
      font-weight: 700;
      > div {
        margin-left: 7px;
      }
    }
  }
`;
