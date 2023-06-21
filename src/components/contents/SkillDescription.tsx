import { useState } from "react";
import styled from "styled-components";
import { useSkillsStore } from "@/store/store";

export default function SkillDescription({ skillName }: { skillName: string }) {
  const { skills } = useSkillsStore();
  const [disable, setDisable] = useState(false);
  const skillKey = skillName.split(" ").join("").toLowerCase();

  const handleClick = () => {
    setDisable((prev) => !prev);
    console.log(disable);
  };
  return (
    <SkillDescriptionStyled disable={disable}>
      <p className="skill-title" onClick={handleClick}>
        {skillName}
      </p>
      <p className="discription">{skills?.data[skillKey]}</p>
    </SkillDescriptionStyled>
  );
}

const SkillDescriptionStyled = styled.div<{ disable: boolean }>`
  p {
    background-color: var(--bg-white);
    padding: 15px;
    font-size: 0.9rem;
  }
  .skill-title {
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }
  .discription {
    display: none;
  }
`;
