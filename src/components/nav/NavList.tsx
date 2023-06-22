import { MutableRefObject } from "react";
import styled from "styled-components";
import { TextHoverMotion } from "@/components";

type NavType = {
  contentsRefs: MutableRefObject<HTMLElement[]> | null;
  navList: string[];
};

export default function Nav({ contentsRefs, navList }: NavType) {
  const moveToElement = ({ index }: { index: number }) => {
    if (contentsRefs) {
      contentsRefs.current[index].scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <NavListStyled>
      {navList.map((nav, index) => (
        <li
          key={index}
          onClick={() => {
            if (contentsRefs) {
              moveToElement({ index });
            }
          }}
        >
          <TextHoverMotion isNav={true}>{nav}</TextHoverMotion>
        </li>
      ))}
    </NavListStyled>
  );
}

const NavListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 30vh;
  li {
    color: var(--text-white);
    display: block;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
  }
`;
