import styled from "styled-components";
import type { URLType } from "@/api";
import { FadeInContent, TextHoverMotion } from "@/components";

export default function ContentUrl({ urls }: { urls: URLType }) {
  return (
    <ContentUrlStyeld>
      <FadeInContent>
        <p className="title">🔗 관련링크들</p>
      </FadeInContent>
      <div className="urls">
        {urls.githubURL && (
          <FadeInContent>
            <a href={urls.githubURL} target="_blank">
              📌<TextHoverMotion>Github</TextHoverMotion>
            </a>
          </FadeInContent>
        )}
        {urls.videoURL && (
          <FadeInContent>
            <a href={urls.videoURL} target="_blank">
              📌<TextHoverMotion>Video</TextHoverMotion>
            </a>
          </FadeInContent>
        )}
        {urls.wikiURL && (
          <FadeInContent>
            <a href={urls.wikiURL} target="_blank">
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
