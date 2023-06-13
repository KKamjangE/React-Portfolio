import styled from "styled-components";
import { FadeInContent } from "@/motions/ContentsMotions";

export default function NavBar() {
  return (
    <NavBarStyled>
      <FadeInContent>
        <div className="menu">
          <a href="#">
            Work<span>.</span>
          </a>
          <a href="#">
            Project<span>.</span>
          </a>
          <a href="#">
            Share<span>.</span>
          </a>
          <a href="#">
            Education<span>.</span>
          </a>
        </div>
      </FadeInContent>
      <FadeInContent>
        <div className="project-info">
          <a href="mailto:ajm980718@gmail.com" className="email">
            ajm980718@gmail.com
          </a>
          <p className="update-info">Last Update: 2023/06/12</p>
        </div>
      </FadeInContent>
    </NavBarStyled>
  );
}

const NavBarStyled = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 20vw;
  height: 100vh;
  background-color: var(--bg-dark-gray);
  .menu {
    padding-top: 80px;
    a {
      color: var(--text-white);
      display: block;
      margin-bottom: 30px;
      font-size: 1.4rem;
      font-weight: bold;
      span {
        color: var(--accent-yellow);
      }
    }
  }
  .project-info {
    font-size: 0.6rem;
    padding-bottom: 80px;
    color: var(--text-white);
    .email {
      display: block;
      color: var(--text-white);
      margin-bottom: 15px;
      transition: 0.2s;
    }
    .email:hover {
      cursor: pointer;
      color: var(--accent-yellow);
    }
    .update-info {
      opacity: 0.6;
    }
  }
`;
