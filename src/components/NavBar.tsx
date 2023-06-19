import styled from "styled-components";
import { FadeInContent, HoverLink } from "@/components/interactive";

interface NavBarProps {
  elementRef: React.RefObject<HTMLDivElement[]>;
}

export default function NavBar({ elementRef }: NavBarProps) {
  const navList = ["Project", "Work", "Share", "Education"];

  const moveToElement = ({ index }: { index: number }) => {
    if (elementRef.current)
      elementRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <NavBarStyled>
      <FadeInContent>
        <div className="menu">
          {navList.map((nav, index) => (
            <a
              key={index}
              onClick={() => {
                if (elementRef.current) {
                  moveToElement({ index });
                }
              }}
            >
              <HoverLink isNav={true}>{nav}</HoverLink>
            </a>
          ))}
        </div>
      </FadeInContent>
      <FadeInContent>
        <div className="project-info">
          <a href="mailto:ajm980718@gmail.com" className="email">
            ajm980718@gmail.com
          </a>
          <p className="update-info">Last Update: 2023/06/19</p>
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
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 80px;
    height: 30vh;
    a {
      color: var(--text-white);
      display: block;
      font-size: 1.4rem;
      font-weight: 500;
      cursor: pointer;
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
