import styled from "styled-components";
import YellowPoint from "./YellowPoint";

export default function HoverLink({
  children,
  isNav,
}: {
  children: React.ReactNode;
  isNav?: boolean;
}) {
  return (
    <HoverLinkStyled isNav={isNav}>
      <YellowPoint>{children}</YellowPoint>
    </HoverLinkStyled>
  );
}

const HoverLinkStyled = styled.div<{ isNav?: boolean }>`
  padding: ${(props) => (props.isNav ? "10px" : "0")};
  background: linear-gradient(
    to right,
    transparent 50%,
    var(--accent-yellow) 50%
  );
  background-position: 0, 0;
  background-size: 200%;
  transition: 0.25s ease;
  text-decoration: ${(props) => (props.isNav ? "" : "underline")};
  display: ${(props) => (props.isNav ? "" : "inline-block")};
  :hover {
    background-position: -100% 0;
  }
`;
