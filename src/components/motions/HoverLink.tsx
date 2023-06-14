import styled from "styled-components";
import YellowPoint from "./YellowPoint";

export default function HoverLink({ children }: { children: React.ReactNode }) {
  return (
    <HoverLinkStyled>
      <YellowPoint>{children}</YellowPoint>
    </HoverLinkStyled>
  );
}

const HoverLinkStyled = styled.div`
  padding: 10px;
  background: linear-gradient(
    to right,
    transparent 50%,
    var(--accent-yellow) 50%
  );
  background-position: 0, 0;
  background-size: 200%;
  transition: 0.25s ease;

  :hover {
    background-position: -100% 0;
  }
`;
