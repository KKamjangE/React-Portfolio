import { NavBar, Intro, Footer } from "@/components";
import { ContentsSection } from "@/components/contents";
import { Layout } from "@/components/layout";
import { ProgressBar, ScrollTopBtn } from "@/components/interactive";
import { useRef } from "react";

export default function Home() {
  const elementRef = useRef<HTMLDivElement[]>([]);

  const moveToElement = ({
    elementRef,
    index,
  }: {
    elementRef: React.RefObject<HTMLDivElement[]>;
    index: number;
  }) => {
    if (elementRef.current)
      elementRef.current[index]?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <NavBar moveToElement={moveToElement} elementRef={elementRef} />
      <ProgressBar />
      <Layout>
        <Intro />
        <ContentsSection elementRef={elementRef} />
        <Footer />
      </Layout>
      <ScrollTopBtn />
    </>
  );
}
