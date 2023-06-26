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
  height: 80vh;
  padding: 10vh 0;
  background-color: var(--bg-dark-gray);
  @media screen and (max-width: 1024px) {
    position: static;
    width: 100vw;
    height: 40vh;
    padding: 5vh 0;
  }
`;
