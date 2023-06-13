import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
      <p>Copyright 2023. Anjemin all rights reserved.</p>
    </FooterStyled>
  );
}

const FooterStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0 150px;
  p {
    font-size: 0.7rem;
    opacity: 0.4;
  }
`;
