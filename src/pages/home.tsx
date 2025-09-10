import { useState } from "react";
import Sections from "@/sections/sections";
import Footer from "@/components/layout/footer";
import Hero from "@/sections/hero";
import Toggle from "@/components/layout/hamburger-toggle";
import Layout from "@/pages/layout";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const onToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <Layout>
      <Toggle isOpen={isOpen} onToggle={onToggle} />
      <Hero />
      <Sections />
      <Footer />
    </Layout>
  );
}


