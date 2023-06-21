import { FadeInContent } from "@/components/interactive";
import styled from "styled-components";

export default function ContentDescription({
  description,
}: {
  description: string[];
}) {
  return (
    <ContentDescriptionStyled>
      {description.map((description, idx) => (
        <FadeInContent key={idx}>
          <p>📌 {description}</p>
        </FadeInContent>
      ))}
    </ContentDescriptionStyled>
  );
}

const ContentDescriptionStyled = styled.article`
  display: grid;
  row-gap: 12px;
  font-size: 0.8rem;
`;
