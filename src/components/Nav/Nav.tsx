import styled from "styled-components";
import profile from "../assets/profile.png";

const Nav = () => {
  const menuList = [
    { name: "Home" },
    { name: "Timeline" },
    { name: "Project" },
  ];
  return (
    <NavStyled>
      <NavContentsStyled>
        <ProfileStyled>
          <img src={profile} alt="profile_image" />
          <p className="name">안제민</p>
          <p className="email">ajm980718@gmail.com</p>
        </ProfileStyled>
        <MenuStyled>{menuList.map((menu) => menu.name)}</MenuStyled>
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
  margin-top: 100px;
`;

const NavBarStyled = styled.div`
  background-color: var(--bg-300);
  width: 3px;
  height: 800px;
  border-radius: 10px;
`;

export default Nav;
