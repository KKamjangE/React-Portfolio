import styled from "styled-components";
import YellowPoint from "./YellowPoint";

export default function TextHoverMotion({
  children,
  isNav,
}: {
  children: React.ReactNode;
  isNav?: boolean;
}) {
  return (
    <TextHoverMotionStyled isNav={isNav}>
      <YellowPoint>{children}</YellowPoint>
    </TextHoverMotionStyled>
  );
}

const TextHoverMotionStyled = styled.div<{ isNav?: boolean }>`
  padding: ${(props) => (props.isNav ? "10px" : "0")};
  text-decoration: ${(props) => (props.isNav ? "" : "underline")};
  display: ${(props) => (props.isNav ? "" : "inline-block")};
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
