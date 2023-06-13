import NavBar from "@/components/NavBar";
import { Intro, Work } from "@/components/contents";
import { Layout } from "@/components/layout";
import ProgressBar from "@/components/ProgressBar";
import Footer from "@/components/Footer";

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
