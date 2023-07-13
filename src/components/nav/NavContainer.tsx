import useCurrViewContNum from "@/Hooks/useCurrViewContNum";
import useGetRefOffsetList from "@/Hooks/useGetRefOffsetList";
import { FadeInContent, NavLayout, NavList, NavContact } from "@/components";

export default function NavContainer() {
  const navList = ["Project", "Work", "Share", "Education"];
  const refOffsetList = useGetRefOffsetList();
  const { currViewContNum } = useCurrViewContNum();

  return (
    <NavLayout>
      <FadeInContent>
        <NavList
          navList={navList}
          RefOffsetList={refOffsetList}
          currViewContentNumber={currViewContNum}
        />
      </FadeInContent>
      <FadeInContent>
        <NavContact />
      </FadeInContent>
    </NavLayout>
  );
}
