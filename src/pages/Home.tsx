import {
  ContentsContainer,
  ProgressBar,
  ScrollTopBtn,
  NavContainer,
  Intro,
  Footer,
  Layout,
} from "@/components";

export default function Home() {
  return (
    <>
      <NavContainer />
      <ProgressBar />
      <Layout>
        <Intro />
        <ContentsContainer />
        <Footer />
      </Layout>
      <ScrollTopBtn />
    </>
  );
}
