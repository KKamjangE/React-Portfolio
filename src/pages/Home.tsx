import {
  ContentsContainer,
  ProgressBar,
  ScrollTopBtn,
  NavBar,
  Intro,
  Footer,
  Layout,
} from "@/components";
import { useRef } from "react";

export default function Home() {
  const elementRef = useRef<HTMLDivElement[]>([]);

  return (
    <>
      <NavBar elementRef={elementRef} />
      <ProgressBar />
      <Layout>
        <Intro />
        <ContentsContainer elementRef={elementRef} />
        <Footer />
      </Layout>
      <ScrollTopBtn />
    </>
  );
}
