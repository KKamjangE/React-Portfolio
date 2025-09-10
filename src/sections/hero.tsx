import downDoubleArrow from "@/assets/down-double-arrow.webp";
import homeImage from "@/assets/home-img.webp";
 

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
        <p className="text-2xl font-semibold">��ϰ� ������ �����ϴ�</p>
        <p className="text-5xl font-bold my-16">
          <span className="underline decoration-primary underline-offset-8">
            ������
          </span>
          �Դϴ�.
        </p>
        <p className="text-xl font-medium leading-7 md:text-base">
          {years}���� ����Ʈ���� �������Դϴ�.
          <br />
          ������ ����ϰ� �����ϴ� ���� �����մϴ�.
          <br />
          �׻� ��Ȱ�� Ŀ�´����̼��� ���� ����մϴ�.
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

