import { Intro, Work, NavBar } from "@/components/contents";
import { Layout } from "@/components/layout";
import { ProgressBar } from "@/components/interactive";
import Footer from "@/components/contents/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Layout>
        <ProgressBar />
        <Intro />
        <Work />
        <Footer></Footer>
      </Layout>
    </>
  );
}
