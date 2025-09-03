import { useState } from "react";
import Content from "@/components/contents/content";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Nav from "@/components/nav";
import Toggle from "@/components/toggle";
import ProgressBar from "@/components/ui/progress-bar";
import ScrollTopBtn from "@/components/ui/scroll-top-btn";
import Layout from "@/pages/layout";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const onCloseToggle = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Toggle isOpen={isOpen} onToggle={onToggle} />
      <Nav isOpen={isOpen} onCloseToggle={onCloseToggle} />
      <ProgressBar />
      <Layout>
        <Intro />
        <Content />
        <Footer />
      </Layout>
      <ScrollTopBtn />
    </>
  );
}
