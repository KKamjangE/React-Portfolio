import clsx from "clsx";
import FadeIn from "@/components/ui/fade-in.motion";
import HoverMotion from "@/components/ui/hover-motion";
import useCurrViewContentNum from "@/hooks/use-curr-view-cont-num";
import useGetRefOffsetList from "@/hooks/use-get-ref-offset-list";
import useMediaQuery from "@/hooks/use-media-query";

const navList = ["Career", "TechStack", "Project", "Education", "Certificate"];

interface NavProps {
  isOpen: boolean;
  onCloseToggle: () => void;
}

export default function Nav({ isOpen, onCloseToggle }: NavProps) {
  const refOffsetList = useGetRefOffsetList();
  const { currViewContentNum } = useCurrViewContentNum();
  const isTablet = useMediaQuery("(max-width: 1024px)");

  const moveToElement = (index: number) => {
    onCloseToggle();
    requestAnimationFrame(() => {
      window.scrollTo({
        top: refOffsetList[index].top + 1,
        behavior: isTablet ? "auto" : "smooth",
      });
    });
  };

  return (
    <nav
      className={clsx(
        "fixed flex flex-col justify-between items-center w-[20vw] h-screen py-[10vh] bg-dark-gray",
        "lg:top-0 lg:left-0 lg:z-30 lg:w-full lg:h-screen lg:py-[5vh] lg:backdrop-blur-lg lg:bg-dark-gray-tablet lg:transition-transform lg:duration-300 lg:ease-in-out",
        isOpen ? "lg:translate-x-0" : "lg:translate-x-full"
      )}
    >
      <FadeIn>
        <ul className="flex flex-col justify-between h-[30vh]">
          {navList.map((nav, index) => (
            <li
              key={nav}
              className="block text-white text-xl font-medium cursor-pointer data-[view=true]:text-white/50"
              data-view={index === currViewContentNum}
            >
              <button type="button" onClick={() => moveToElement(index)} className="unset-all">
                <HoverMotion isNav={"nav"}>{nav}</HoverMotion>
              </button>
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn>
        <div className="grid gap-[15px] text-xs text-white lg:text-sm">
          <a
            href="https://www.linkedin.com/in/kkamjange/"
            target="_blank"
            rel="noopener"
            className="block transition-colors duration-200 hover:text-accent-yellow"
          >
            LinkedIn
          </a>
          <a
            href="https://velog.io/@ajm0718/posts"
            target="_blank"
            rel="noopener"
            className="block transition-colors duration-200 hover:text-accent-yellow"
          >
            Velog
          </a>
          <a
            href="https://github.com/KKamjangE"
            target="_blank"
            rel="noopener"
            className="block transition-colors duration-200 hover:text-accent-yellow"
          >
            Github
          </a>
          <a
            href="mailto:ajm980718@gmail.com"
            className="block transition-colors duration-200 hover:text-accent-yellow email"
          >
            ajm980718@gmail.com
          </a>
          <p className="opacity-60">Last Update: 2025/04</p>
        </div>
      </FadeIn>
    </nav>
  );
}
