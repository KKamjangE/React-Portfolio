import styled from "styled-components";
import homeImage from "@/assets/homeImg.png";

export default function Profile() {
  return (
    <ProfileStyled homeImage={homeImage}>
      <div className="home-image">
        <div className="profile-ment">
          <p className="strength">기록과 소통을 좋아하는</p>
          <p className="my-name">
            <span>안제민</span>입니다.
          </p>
          <p className="my-info">
            프론트엔드 개발자를 희망하고 있습니다.
            <br />
            배운 모든 것을 기록하고 공유하는 것을 좋아합니다.
            <br />
            소통의 중요성을 잘 알기에 항상 원활한 소통을 위해 노력합니다.
          </p>
        </div>
      </div>
    </ProfileStyled>
  );
}

const ProfileStyled = styled.div<{ homeImage: string }>`
  display: flex;
  padding-left: 20vw;
  width: 80vw;
  height: 100vh;
  .home-image {
    width: 100%;
    height: 100%;
    background-image: url(${(props) => props.homeImage});
    background-size: cover;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    .profile-ment {
      color: var(--text-white);
      text-align: center;
      .strength {
        font-size: 2rem;
        font-weight: 600;
      }
      .my-name {
        font-size: 3rem;
        font-weight: 700;
        margin: 70px 0;
      }
      .my-info {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.8rem;
      }
      span {
        text-decoration: underline;
        text-decoration-color: var(--accent-yellow);
        text-decoration-style: wavy;
      }
    }
  }
`;
