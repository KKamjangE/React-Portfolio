import { useEffect, useRef } from 'react'
import { useSetRefOffsetList } from '@/hooks'
import Project from '@/components/contents/Project'
import Career from '@/components/contents/Career'
import Education from '@/components/contents/Education'

export default function ContentsContainer() {
    const elementRefs = useRef<HTMLElement[]>([])
    const { setRefOffsetList } = useSetRefOffsetList()

    useEffect(() => {
        setRefOffsetList(elementRefs)
    }, [])
    return (
        <>
            <section ref={(ref) => (ref ? (elementRefs.current[0] = ref) : null)}>
                <Career />
            </section>
            <section ref={(ref) => (ref ? (elementRefs.current[1] = ref) : null)}>
                <Project />
            </section>
            <section ref={(ref) => (ref ? (elementRefs.current[2] = ref) : null)}>
                <Education />
            </section>
        </>
    )
}
