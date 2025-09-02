import { debounce } from 'es-toolkit'
import type React from 'react'
import { useEffect, useRef } from 'react'
import Career from '@/components/contents/Career'
import Certificate from '@/components/contents/Certificate'
import Education from '@/components/contents/Education'
import Project from '@/components/contents/Project'
import TechStack from '@/components/contents/TechStack'
import FadeIn from '@/components/ui/FadeIn.motion'
import YellowPoint from '@/components/ui/YellowPoint'
import useSetRefOffsetList from '@/hooks/useSetRefOffsetList'

export default function Content() {
    const elementRefs = useRef<HTMLElement[]>([])
    const { setRefOffsetList } = useSetRefOffsetList()

    useEffect(() => {
        setRefOffsetList(elementRefs)

        const onResize = debounce(() => setRefOffsetList(elementRefs), 500)

        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
            onResize.cancel()
        }
    }, [setRefOffsetList])

    const sections = [
        { title: 'Career', component: <Career /> },
        { title: 'TechStack', component: <TechStack /> },
        { title: 'Project', component: <Project /> },
        { title: 'Education', component: <Education /> },
        { title: 'Certificate', component: <Certificate /> },
    ]

    return (
        <>
            {sections.map((section, index) => (
                <section
                    key={section.title}
                    ref={(ref) => {
                        if (ref) elementRefs.current[index] = ref
                    }}
                    className="px-4 py-12 sm:px-8 md:px-12 lg:px-24"
                >
                    <ContentLayout title={section.title}>{section.component}</ContentLayout>
                </section>
            ))}
        </>
    )
}

function ContentLayout({ children, title }: { children: React.ReactNode; title: string }) {
    return (
        <>
            <FadeIn>
                <h1 className="text-3xl font-bold">
                    <YellowPoint>{title}</YellowPoint>
                </h1>
            </FadeIn>
            <FadeIn>
                <hr className="my-8 h-1 border-0 bg-accent-yellow" />
            </FadeIn>
            <div className="grid gap-10 md:gap-20">{children}</div>
        </>
    )
}
