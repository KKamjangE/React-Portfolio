import styled from "styled-components";

export default function YellowPoint({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <YellowPointStyled>
      {children}
      <span className="yellow-point">.</span>
    </YellowPointStyled>
  );
}

const YellowPointStyled = styled.div`
  span.yellow-point {
    color: var(--accent-yellow);
  }
`;
