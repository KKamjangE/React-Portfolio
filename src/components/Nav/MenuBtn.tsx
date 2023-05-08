import { useState } from "react";
import styled from "styled-components";

interface MenuBtnProps {
  menuName: string;
  imgURL: string;
  selectimgURL: string;
}

const MenuBtn = ({ menuName, imgURL, selectimgURL }: MenuBtnProps) => {
  const [isHover, setIsHover] = useState(false);
  const imgUrl = new URL(imgURL, import.meta.url).href;
  const selectedImgUrl = new URL(selectimgURL, import.meta.url).href;

  const onMouseOver = () => {
    setIsHover(true);
  };
  const onMouseOut = () => {
    setIsHover(false);
  };

  return (
    <MenuBtnStyled onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
      <div>
        {isHover ? (
          <img src={selectedImgUrl} alt="menu_image" />
        ) : (
          <img src={imgUrl} alt="menu_image" />
        )}
      </div>
      <p className="menu_name">{menuName}</p>
    </MenuBtnStyled>
  );
};

const MenuBtnStyled = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  .menu_name {
    margin-left: 20px;
  }
  img {
    padding: 8px;
    background-color: var(--bg-300);
    border-radius: 10px;
    transition: 0.2s;
  }
  p {
    color: var(--text-200);
  }
  :hover {
    cursor: pointer;
    img {
      background-color: var(--primary-100);
    }
    p {
      color: var(--text-100);
    }
  }
  :active {
    img {
      background-color: var(--accent-100);
    }
  }
`;

export default MenuBtn;
