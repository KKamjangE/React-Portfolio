import { motion } from "motion/react";
import upArrow from "@/assets/up-arrow.svg";
import FadeIn from "@/components/ui/fade-in.motion";

export default function ScrollTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center items-center fixed bottom-[50px] right-[50px] max-lg:bottom-[20px] max-lg:right-[20px] cursor-pointer">
      <FadeIn>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ backgroundColor: "#ffffff", scale: 1.1 }}
          transition={{
            duration: 0.1,
            stiffness: 800,
            damping: 17,
          }}
          className="w-[70px] h-[70px] border-0 rounded-[28px] bg-[var(--color-light-gray)] shadow-[3px_10px_20px_rgba(0,0,0,0.4)] max-lg:w-[50px] max-lg:h-[50px] max-lg:rounded-[20px] max-md:w-[40px] max-md:h-[40px] max-md:rounded-[16px]"
        >
          <img src={upArrow} alt="위쪽 화살표" className="max-md:w-[20px]" />
        </motion.button>
      </FadeIn>
    </div>
  );
}
