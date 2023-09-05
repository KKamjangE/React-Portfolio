import { useCurrViewContentNum, useGetRefOffsetList } from "@/hooks";
import { FadeInContent, NavLayout, NavList, NavContact } from "@/components";

export default function NavContainer() {
  const navList = ["Project", "Work", "Share", "Education"];
  const refOffsetList = useGetRefOffsetList();
  const { currViewContentNum } = useCurrViewContentNum();

  const moveToElement = (index: number) => {
    // index에 맞는 콘텐츠로 스크롤 이동하는 함수
    window.scrollTo({ top: refOffsetList[index].top + 1, behavior: "smooth" });
  };

  return (
    <NavLayout>
      <FadeInContent>
        <NavList
          navList={navList}
          refOffsetList={refOffsetList}
          currViewContentNum={currViewContentNum}
          moveToElement={moveToElement}
        />
      </FadeInContent>
      <FadeInContent>
        <NavContact />
      </FadeInContent>
    </NavLayout>
  );
}
