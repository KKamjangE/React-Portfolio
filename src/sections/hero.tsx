import downDoubleArrow from "@/assets/down-double-arrow.webp";
import homeImage from "@/assets/home-img.webp";
import SplitText from "@/components/ui/SplitText";

export default function Intro() {
  const startDate = new Date("2023-09");
  const today = new Date();
  let years = today.getFullYear() - startDate.getFullYear();
  if (startDate.getMonth() <= today.getMonth()) years++;

  return (
    <section
      className="h-screen bg-cover bg-center bg-fixed md:bg-scroll flex justify-center items-center"
      style={{ backgroundImage: `url(${homeImage})` }}
    >
      <article className="relative text-white text-center">
        <p className="text-6xl font-bold my-16 leading-20">
          <SplitText text="안녕하세요." />
          <br />
          <SplitText text={`${years}년차 프론트엔드 개발자`} />
          <br />
          <SplitText
            text="안제민"
            tag="span"
            className="underline decoration-primary underline-offset-8"
          />
          <SplitText text="입니다." />
        </p>
        <p className="text-xl font-semibold leading-8 md:text-2xl">
          <SplitText text="배움을 나누는 것을 좋아합니다." />
          <br />
          <SplitText text="항상 원활한 커뮤니케이션을 위해 노력합니다." />
        </p>
        <img
          className="block absolute left-1/2 w-12 mt-24 -ml-6 animate-bounce"
          src={downDoubleArrow}
          alt="down arrow"
        />
      </article>
    </section>
  );
}
