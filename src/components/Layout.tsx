import styled from "styled-components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <LayoutStyled>{children}</LayoutStyled>;
}

const LayoutStyled = styled.div`
  display: flex;
  padding-left: 20vw;
  width: 80vw;
  height: 100vh;
`;
