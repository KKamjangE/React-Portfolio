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
      {children}
    </ContentLayoutStyled>
  );
}

const ContentLayoutStyled = styled.div`
  padding: 100px 100px 50px 100px;
  h1 {
    font-size: 2rem;
    font-weight: bold;
  }
`;
