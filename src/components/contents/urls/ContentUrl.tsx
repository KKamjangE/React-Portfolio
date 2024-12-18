import styled from 'styled-components'
import type { UrlType } from '@/api'
import { FadeIn, UrlList } from '@/components'

export default function ContentUrl({ urls }: { urls: UrlType }) {
    return (
        <ContentUrlStyeld>
            <FadeIn>
                <p className="title">🔗 관련링크들</p>
            </FadeIn>
            <ul>
                {Object.entries(urls).map(([urlName, url], idx) => (
                    <UrlList urlName={urlName} url={url} key={idx} />
                ))}
            </ul>
        </ContentUrlStyeld>
    )
}

const ContentUrlStyeld = styled.article`
    p.title {
        font-weight: bold;
        margin-bottom: 30px;
    }
    ul {
        display: grid;
        row-gap: 10px;
    }
`
