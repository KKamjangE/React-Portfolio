import styled from "styled-components";

export default function HoverLink({ children }: { children: React.ReactNode }) {
  return (
    <HoverLinkStyled>
      {children}
      <span className="yellow-point">.</span>
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

  span.yellow-point {
    color: var(--accent-yellow);
  }
`;
