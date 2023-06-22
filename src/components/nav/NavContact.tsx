import styled from "styled-components";

export default function NavContact() {
  return (
    <NavContactStyled>
      <a href="mailto:ajm980718@gmail.com" className="email">
        ajm980718@gmail.com
      </a>
      <p className="update-info">Last Update: 2023/06/19</p>
    </NavContactStyled>
  );
}

const NavContactStyled = styled.div`
  display: grid;
  row-gap: 15px;
  font-size: 0.6rem;
  color: var(--text-white);
  a.email {
    display: block;
    color: var(--text-white);
    transition: 0.2s;
    :hover {
      cursor: pointer;
      color: var(--accent-yellow);
    }
  }
  p.update-info {
    opacity: 0.6;
  }
`;
