import { FadeIn } from '@/components'
import { HoverMotion } from '@/components'
import styled from 'styled-components'

interface LinkTextType {
    urlName: string
    url: string
}

export default function LinkText({ urlName, url }: LinkTextType) {
    const newUrlName = urlName[0].toUpperCase() + urlName.slice(1)
    return (
        <UrlListStyled>
            <FadeIn>
                <a href={url} target="_blank">
                    📌<HoverMotion>{newUrlName}</HoverMotion>
                </a>
            </FadeIn>
        </UrlListStyled>
    )
}

const UrlListStyled = styled.li`
    a {
        font-size: 0.8rem;
        font-weight: 700;
        > div {
            margin-left: 7px;
        }
    }
`
