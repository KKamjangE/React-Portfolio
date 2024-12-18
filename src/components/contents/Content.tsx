import styled from 'styled-components'
import type { ContentDataType } from '@/api'
import {
    FadeIn,
    HoverMotion,
    YellowPoint,
    ContentUrl,
    ContentDescription,
    ContentSkill,
} from '@/components'

export default function Content({ content }: { content: ContentDataType }) {
    return (
        <ContentStyled>
            <FadeIn>
                <p className="classification">{content?.classification}</p>
            </FadeIn>
            <FadeIn>
                <h2 className="content-title">
                    {content.titleurl ? (
                        <a href={content.titleurl} target="_blank">
                            <HoverMotion>{content.title}</HoverMotion>
                        </a>
                    ) : (
                        <YellowPoint>{content.title}</YellowPoint>
                    )}
                </h2>
            </FadeIn>
            {content.position && (
                <FadeIn>
                    <p className="content-position">{content.position}</p>
                </FadeIn>
            )}
            {content.period && (
                <FadeIn>
                    <p className="content-period">{content.period}</p>
                </FadeIn>
            )}
            {content.description && <ContentDescription description={content.description} />}
            {content.url && <ContentUrl urls={content.url} />}
            {content.skill && <ContentSkill skill={content.skill} />}
        </ContentStyled>
    )
}

const ContentStyled = styled.article`
    display: grid;
    row-gap: 30px;
    h2.content-title {
        font-size: 1.4rem;
        font-weight: bold;
    }
    p.content-position {
        font-size: 0.9rem;
        font-weight: 500;
    }
    p.content-period {
        font-size: 0.7rem;
        font-weight: 400;
        opacity: 0.7;
    }
`
