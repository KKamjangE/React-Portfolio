import { NavBar, Intro, Footer } from "@/components";
import { ContentsSection } from "@/components/contents";
import { Layout } from "@/components/layout";
import { ProgressBar, ScrollTopBtn } from "@/components/interactive";

export default function Home() {
  return (
    <>
      <NavBar />
      <ProgressBar />
      <Layout>
        <Intro />
        <ContentsSection />
        <Footer />
      </Layout>
      <ScrollTopBtn />
    </>
  );
}
