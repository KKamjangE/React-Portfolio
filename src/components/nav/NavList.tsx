import styled from "styled-components";
import { TextHoverMotion } from "@/components";
import { RefOffsetList } from "@/store/RefTopStateSlice";

type NavType = {
  navList: string[];
  RefOffsetList: RefOffsetList[];
  currViewContentNumber: number | null;
};

export default function Nav({
  navList,
  RefOffsetList,
  currViewContentNumber,
}: NavType) {
  const moveToElement = ({ index }: { index: number }) => {
    window.scrollTo({ top: RefOffsetList[index].top, behavior: "smooth" });
  };
  return (
    <NavListStyled>
      {navList.map((nav, index) => (
        <li
          key={index}
          data-view={index === currViewContentNumber}
          onClick={() => moveToElement({ index })}
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
  li[data-view="true"] {
    color: rgba(255, 255, 255, 0.5);
  }
`;
