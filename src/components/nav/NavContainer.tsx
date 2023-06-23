import { FadeInContent, NavLayout, NavList, NavContact } from "@/components";
import { useContentsRefStore } from "@/store/store";
import { useState, useEffect } from "react";

export default function NavContainer() {
  const navList = ["Project", "Work", "Share", "Education"];
  const { contentsRefs } = useContentsRefStore();
  const [viewIndex, setViewIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY + 10;

      if (contentsRefs) {
        for (let i = 0; i < contentsRefs.current.length; i++) {
          const contentsRef = contentsRefs.current[i];
          const { offsetTop, offsetHeight } = contentsRef;

          if (
            offsetTop <= currentScrollPos &&
            offsetTop + offsetHeight > currentScrollPos
          ) {
            setViewIndex(i);
            break;
          } else {
            setViewIndex(null);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [contentsRefs]);

  return (
    <NavLayout>
      <FadeInContent>
        <NavList
          navList={navList}
          contentsRefs={contentsRefs}
          viewIndex={viewIndex}
        />
      </FadeInContent>
      <FadeInContent>
        <NavContact />
      </FadeInContent>
    </NavLayout>
  );
}
