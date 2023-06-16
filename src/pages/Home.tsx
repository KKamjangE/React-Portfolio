import { Content } from "@/components/contents";
import { NavBar, Intro, Footer } from "@/components";
import { Layout } from "@/components/layout";
import { ProgressBar, ScrollTopBtn } from "@/components/interactive";

export default function Home() {
  return (
    <>
      <NavBar />
      <Layout>
        <ProgressBar />
        <Intro />
        <Content />
        <Footer />
      </Layout>
      <ScrollTopBtn />
    </>
  );
}
