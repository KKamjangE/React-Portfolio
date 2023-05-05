import styled from "styled-components";
import profile from "../../assets/profile.png";
import MenuBtn from "./MenuBtn";

const Nav = () => {
  const menuList = [
    {
      key: 1,
      name: "Home",
      img: "../../assets/home_img.png",
      selectedImg: "../../assets/home_selected_img.png",
    },
    {
      key: 2,
      name: "Timeline",
      img: "../../assets/timeline_img.png",
      selectedImg: "../../assets/timeline_selected_img.png",
    },
    {
      key: 3,
      name: "Project",
      img: "../../assets/project_img.png",
      selectedImg: "../../assets/project_selected_img.png",
    },
    {
      key: 4,
      name: "Blog",
      img: "../../assets/blog_img.png",
      selectedImg: "../../assets/blog_selected_img.png",
    },
    {
      key: 5,
      name: "Github",
      img: "../../assets/github_img.png",
      selectedImg: "../../assets/github_selected_img.png",
    },
  ];
  return (
    <NavStyled>
      <NavContentsStyled>
        <ProfileStyled>
          <img src={profile} alt="profile_image" />
          <p className="name">안제민</p>
          <p className="email">ajm980718@gmail.com</p>
        </ProfileStyled>
        <MenuStyled>
          {menuList.map((menu) => (
            <MenuBtn
              key={menu.key}
              menuName={menu.name}
              imgURL={menu.img}
              selectimgURL={menu.selectedImg}
            />
          ))}
        </MenuStyled>
      </NavContentsStyled>
      <NavBarStyled />
    </NavStyled>
  );
};

const NavStyled = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const NavContentsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProfileStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  .name {
    font-weight: 500;
    margin-top: 30px;
    margin-bottom: 20px;
  }
  .email {
    font-size: 0.8em;
  }
`;

const MenuStyled = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 244px;
  margin-top: 40px;
`;

const NavBarStyled = styled.div`
  background-color: var(--bg-300);
  width: 3px;
  height: 800px;
  border-radius: 10px;
`;

export default Nav;
