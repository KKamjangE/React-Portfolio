import { Intro, Work, NavBar, Footer, Project } from "@/components/contents";
import { Layout } from "@/components/layout";
import { ProgressBar, ScrollTopBtn } from "@/components/interactive";

export default function Home() {
  return (
    <>
      <NavBar />
      <Layout>
        <ProgressBar />
        <Intro />
        <Work />
        <Project />
        <Footer />
      </Layout>
      <ScrollTopBtn />
    </>
  );
}
