import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import { FadeInContent } from "@/components";
import { useGetSkillDesc } from "@/hooks";

export default function SkillDesc({ skillName }: { skillName: string }) {
  const { skillDescData } = useGetSkillDesc(); // store에서 skillDesc 데이터 가져오기
  const [isOpen, setIsOpen] = useState(false);
  const skillKey = skillName.split(" ").join("").toLowerCase();

  return (
    <FadeInContent>
      <SkillDescStyled>
        <p className="skill-title" onClick={() => setIsOpen(!isOpen)}>
          {skillName} <IoIosArrowDown data-open={isOpen} />
        </p>
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.p
              key="detail"
              initial="close"
              animate="open"
              exit="close"
              variants={{
                open: {
                  height: "auto",
                  paddingTop: "5px",
                  paddingBottom: "15px",
                },
                close: { height: 0, paddingTop: 0, paddingBottom: 0 },
              }}
              transition={{ duration: 0.2 }}
              style={{ overflow: "hidden" }}
              className="detail"
            >
              {skillDescData?.data[skillKey]}
            </motion.p>
          )}
        </AnimatePresence>
      </SkillDescStyled>
    </FadeInContent>
  );
}

const SkillDescStyled = styled.div`
  width: 60vw;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  svg {
    transition: 0.2s;
  }
  svg[data-open="true"] {
    transform: rotate(180deg);
  }
  svg[data-open="false"] {
    transform: rotate(0deg);
  }
  p {
    font-size: 0.7rem;
    background-color: var(--bg-white);
  }
  p.skill-title {
    display: flex;
    justify-content: space-between;
    padding: 15px;
    font-weight: 400;
    cursor: pointer;
  }
  p.detail {
    padding: 0 15px;
    line-height: 1.2rem;
    font-weight: 300;
  }
  @media screen and (max-width: 1024px) {
    width: auto;
  }
`;
