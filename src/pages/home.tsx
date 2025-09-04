import { useState } from "react";
import Content from "@/components/contents/content";
import Footer from "@/components/footer";
import Intro from "@/components/intro";
import Toggle from "@/components/toggle";
import ProgressBar from "@/components/ui/progress-bar";
import Layout from "@/pages/layout";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Layout>
      <Toggle isOpen={isOpen} onToggle={onToggle} />
      <ProgressBar />
      <Intro />
      <Content />
      <Footer />
    </Layout>
  );
}
