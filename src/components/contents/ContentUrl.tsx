import type { URLType } from "@/api";
import { FadeInContent, HoverLink } from "@/components/interactive";
import { AiFillGithub, AiFillYoutube } from "react-icons/ai";
import { RxNotionLogo } from "react-icons/rx";
import styled from "styled-components";

export default function ContentUrl({ urls }: { urls: URLType }) {
  return (
    <ContentUrlStyeld>
      <FadeInContent>
        <p>🔗 관련링크들</p>
      </FadeInContent>
      <div className="urls">
        {urls.githubURL && (
          <FadeInContent>
            <a href={urls.githubURL} target="_blank">
              <AiFillGithub />
              <HoverLink>Github</HoverLink>
            </a>
          </FadeInContent>
        )}
        {urls.videoURL && (
          <FadeInContent>
            <a href={urls.videoURL} target="_blank">
              <AiFillYoutube />
              <HoverLink>Video</HoverLink>
            </a>
          </FadeInContent>
        )}
        {urls.wikiURL && (
          <FadeInContent>
            <a href={urls.wikiURL} target="_blank">
              <RxNotionLogo />
              <HoverLink>Notion 정리</HoverLink>
            </a>
          </FadeInContent>
        )}
      </div>
    </ContentUrlStyeld>
  );
}

const ContentUrlStyeld = styled.article`
  p {
    font-weight: bold;
    margin-bottom: 30px;
  }
  .urls {
    display: grid;
    row-gap: 10px;
    a {
      font-weight: 500;
      display: flex;
      svg {
        margin-right: 10px;
        font-size: 30px;
      }
    }
  }
`;
