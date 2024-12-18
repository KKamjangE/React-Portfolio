import { FadeIn } from '@/components'
import styled from 'styled-components'

export default function ContentDescription({ description }: { description: string[] }) {
    return (
        <ContentDescriptionStyled>
            {description.map((description, idx) => (
                <li key={idx}>
                    <FadeIn>
                        <p>📌 {description}</p>
                    </FadeIn>
                </li>
            ))}
        </ContentDescriptionStyled>
    )
}

const ContentDescriptionStyled = styled.ul`
    display: grid;
    row-gap: 12px;
    font-size: 0.8rem;
`
