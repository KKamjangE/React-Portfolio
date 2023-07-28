import styled from "styled-components";
import homeImage from "@/assets/home-img.webp";
import downDoubleArrow from "@/assets/down-double-arrow.webp";
import { FadeInDownContent } from "@/components";

export default function IntroView() {
  return (
    <IntroViewStyled homeImage={homeImage}>
      <div className="home-image">
        <article>
          <FadeInDownContent delayTime={0.5}>
            <p className="strength">기록과 소통을 좋아하는</p>
          </FadeInDownContent>
          <FadeInDownContent delayTime={0.8}>
            <p className="my-name">
              <span>안제민</span>입니다.
            </p>
          </FadeInDownContent>
          <FadeInDownContent delayTime={1.5}>
            <p className="my-intro">
              프론트엔드 개발자를 희망하고 있습니다.
              <br />
              배운 모든 것을 기록하고 공유하는 것을 좋아합니다.
              <br />
              소통의 중요성을 잘 알기에 항상 원활한 소통을 위해 노력합니다.
            </p>
          </FadeInDownContent>
          <FadeInDownContent delayTime={2.1}>
            <img
              className="scroll-down-arrow"
              src={downDoubleArrow}
              alt="down arrow"
            />
          </FadeInDownContent>
        </article>
      </div>
    </IntroViewStyled>
  );
}

const IntroViewStyled = styled.section<{ homeImage: string }>`
  .home-image {
    height: 100vh;
    background-image: url(${(props) => props.homeImage});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    article {
      position: relative;
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
        span {
          text-decoration: underline;
          text-decoration-color: var(--accent-yellow);
          text-underline-offset: 10px;
        }
      }
      .my-intro {
        font-size: 1.2rem;
        font-weight: 500;
        line-height: 1.8rem;
      }
    }
    .scroll-down-arrow {
      display: block;
      position: absolute;
      left: 50%;
      width: 50px;
      margin-top: 100px;
      margin-left: -25px;

      animation: bounce 1.5s ease infinite;

      @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
          transform: translateY(0);
        }
        40% {
          transform: translateY(-33px);
        }
        60% {
          transform: translateY(-12px);
        }
      }
    }
    @media screen and (max-width: 1024px) {
      article {
        .my-intro {
          font-size: 0.9rem;
        }
      }
    }
  }
`;
