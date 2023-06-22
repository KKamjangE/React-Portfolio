import { FadeInContent, NavLayout, NavList, NavContact } from "@/components";
import { useContentsRefStore } from "@/store/store";

export default function NavContainer() {
  const navList = ["Project", "Work", "Share", "Education"];
  const { contentsRefs } = useContentsRefStore();

  return (
    <NavLayout>
      <FadeInContent>
        <NavList navList={navList} contentsRefs={contentsRefs} />
      </FadeInContent>
      <FadeInContent>
        <NavContact />
      </FadeInContent>
    </NavLayout>
  );
}
