import { NavBar, Intro, Footer } from "@/components";
import { ContentsSection } from "@/components/contents";
import { Layout } from "@/components/layout";
import { ProgressBar, ScrollTopBtn } from "@/components/interactive";
import { useRef } from "react";

export default function Home() {
  const elementRef = useRef<HTMLDivElement[]>([]);

  return (
    <>
      <NavBar elementRef={elementRef} />
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
