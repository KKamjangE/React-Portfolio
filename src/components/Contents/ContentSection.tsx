import { useMenuStore } from "@/store/store";
import styled from "styled-components";
import Home from "./HomeContents/Home";
import Project from "./ProjectContents/Project";
import Timeline from "./TimelineContents/Timeline";

const ContentSection = () => {
  const { currentMenu } = useMenuStore();
  return (
    <ContentSectionStyled>
      {currentMenu === "Home" && <Home />}
      {currentMenu === "Project" && <Project />}
      {currentMenu === "Timeline" && <Timeline />}
    </ContentSectionStyled>
  );
};

const ContentSectionStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 400px;
  height: 100vh;
`;

export default ContentSection;
