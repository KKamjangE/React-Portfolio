import styled from "styled-components";
import { SkillDetail } from "@/components";
import { FadeInContent } from "@/components";

export default function ContentSkill({ skill }: { skill: string[] }) {
  return (
    <ContentSkillSytled>
      <FadeInContent>
        <p className="title">💡 사용기술들</p>
      </FadeInContent>
      {skill.map((skillName, idx) => {
        return <SkillDetail skillName={skillName} key={idx} />;
      })}
    </ContentSkillSytled>
  );
}

const ContentSkillSytled = styled.article`
  width: 60vw;
  p.title {
    font-weight: bold;
    margin-bottom: 30px;
  }
`;
