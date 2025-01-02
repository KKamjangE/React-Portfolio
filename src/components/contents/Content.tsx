import { useEffect, useRef } from 'react'
import Project from '@/components/contents/Project'
import Career from '@/components/contents/Career'
import Education from '@/components/contents/Education'
import useSetRefOffsetList from '@/hooks/useSetRefOffsetList'
import React from 'react'
import YellowPoint from '@/components/ui/YellowPoint'
import FadeIn from '@/components/ui/FadeIn.motion'
import styled from 'styled-components'

export default function Content() {
    const elementRefs = useRef<HTMLElement[]>([])
    const { setRefOffsetList } = useSetRefOffsetList()

    useEffect(() => {
        setRefOffsetList(elementRefs)
    }, [])

    return (
        <>
            <SectionStyled ref={(ref) => (ref ? (elementRefs.current[0] = ref) : null)}>
                <ContentLayout title="Career">
                    <Career />
                </ContentLayout>
            </SectionStyled>
            <SectionStyled ref={(ref) => (ref ? (elementRefs.current[1] = ref) : null)}>
                <ContentLayout title="Project">
                    <Project />
                </ContentLayout>
            </SectionStyled>
            <SectionStyled ref={(ref) => (ref ? (elementRefs.current[2] = ref) : null)}>
                <ContentLayout title="Education">
                    <Education />
                </ContentLayout>
            </SectionStyled>
            <SectionStyled ref={(ref) => (ref ? (elementRefs.current[3] = ref) : null)}>
                <ContentLayout title="Certificate">
                    <Education />
                </ContentLayout>
            </SectionStyled>
        </>
    )
}

function ContentLayout({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <>
            <FadeIn>
                <h1>
                    <YellowPoint>{title}</YellowPoint>
                </h1>
            </FadeIn>
            <FadeIn>
                <hr />
            </FadeIn>
            <div className="content">{children}</div>
        </>
    )
}

const SectionStyled = styled.section`
    margin: 50px 100px;
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
        & > div {
            display: flex;
            flex-direction: column;
            gap: 24px;
        }
    }
    @media screen and (max-width: 1024px) {
        margin: 50px;
        div.content {
            row-gap: 40px;
            & > div {
                gap: 12px;
            }
        }
    }
    @media screen and (max-width: 768px) {
        margin: 40px 10px;
    }
`
