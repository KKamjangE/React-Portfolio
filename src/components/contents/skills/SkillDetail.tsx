import { useState } from "react";
import styled from "styled-components";
import { useSkillsStore } from "@/store/store";

export default function SkillDetail({ skillName }: { skillName: string }) {
  const { skills } = useSkillsStore();
  const [disable, setDisable] = useState(false);
  const skillKey = skillName.split(" ").join("").toLowerCase();

  const handleClick = () => {
    setDisable((prev) => !prev);
  };
  return (
    <SkillDetailStyled disable={disable}>
      <p className="skill-title" onClick={handleClick}>
        {skillName}
      </p>
      <p className="detail">{skills?.data[skillKey]}</p>
    </SkillDetailStyled>
  );
}

const SkillDetailStyled = styled.div<{ disable: boolean }>`
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
  .detail {
    display: none;
  }
`;
