import React from 'react'
import styled from 'styled-components'
import { FadeIn, YellowPoint } from '@/components'

export default function ContentLayout({
    children,
    title,
}: {
    children: React.ReactNode
    title?: string
}) {
    return (
        <ContentLayoutStyled>
            <FadeIn>
                <h1>
                    <YellowPoint>{title}</YellowPoint>
                </h1>
            </FadeIn>
            <FadeIn>
                <hr />
            </FadeIn>
            <div className="content">{children}</div>
        </ContentLayoutStyled>
    )
}

const ContentLayoutStyled = styled.div`
    padding: 50px 100px;
    h1 {
        font-size: 2rem;
        font-weight: bold;
    }
    hr {
        height: 5px;
        border: 0;
        background-color: var(--accent-yellow);
        margin: 30px 0 50px;
    }
    div.content {
        display: grid;
        row-gap: 80px;
    }
    @media screen and (max-width: 1024px) {
        padding: 50px;
    }
    @media screen and (max-width: 768px) {
        padding: 50px 10px;
    }
`
