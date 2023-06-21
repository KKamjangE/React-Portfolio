import { SkillDescription } from "@/components/contents";
import styled from "styled-components";

export default function ContentSkill({ skill }: { skill: string[] }) {
  return (
    <ContentSkillSytled>
      <p className="title">💡 사용기술들</p>
      {skill.map((skillName, idx) => {
        return (
          <div key={idx}>
            <SkillDescription skillName={skillName} />
          </div>
        );
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
