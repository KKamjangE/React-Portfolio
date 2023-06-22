import styled from "styled-components";

export default function NavLayout({ children }: { children: React.ReactNode }) {
  return <NavLayoutStyled>{children}</NavLayoutStyled>;
}

const NavLayoutStyled = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 100vh;
  background-color: var(--bg-dark-gray);
`;
