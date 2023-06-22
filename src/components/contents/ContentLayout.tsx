import React from "react";
import styled from "styled-components";
import { FadeInContent, YellowPoint } from "@/components";

export default function ContentLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <ContentLayoutStyled>
      <FadeInContent>
        <h1>
          <YellowPoint>{title}</YellowPoint>
        </h1>
      </FadeInContent>
      <FadeInContent>
        <hr />
      </FadeInContent>
      <div className="content">{children}</div>
    </ContentLayoutStyled>
  );
}

const ContentLayoutStyled = styled.div`
  padding: 50px 100px 50px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
  hr {
    height: 5px;
    border: 0;
    background-color: var(--accent-yellow);
    margin: 30px 0 50px;
  }
  div.content {
    display: grid;
    row-gap: 80px;
  }
`;
