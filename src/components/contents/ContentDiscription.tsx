import { FadeInContent } from "@/components/interactive";
import styled from "styled-components";

export default function ContentDiscription({
  discription,
}: {
  discription: string[];
}) {
  return (
    <ContentDiscriptionStyled>
      {discription.map((discription, idx) => (
        <FadeInContent key={idx}>
          <p>📌 {discription}</p>
        </FadeInContent>
      ))}
    </ContentDiscriptionStyled>
  );
}

const ContentDiscriptionStyled = styled.article`
  display: grid;
  row-gap: 12px;
  font-size: 0.8rem;
`;
