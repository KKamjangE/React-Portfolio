import React from "react";
import styled from "styled-components";

export default function ContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ContentLayoutStyled>{children}</ContentLayoutStyled>;
}

const ContentLayoutStyled = styled.div`
  padding: 100px 100px 50px 100px;
`;
