import React from "react";
import styled from "styled-components";
import YellowPoint from "./../motions/YellowPoint";

export default function ContentLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <ContentLayoutStyled>
      <h1>
        <YellowPoint>{title}</YellowPoint>
      </h1>
      <hr />
      {children}
    </ContentLayoutStyled>
  );
}

const ContentLayoutStyled = styled.div`
  padding: 100px 100px 50px 100px;
  h1 {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 30px;
  }
  hr {
    height: 5px;
    border: 0;
    background-color: var(--accent-yellow);
  }
`;
