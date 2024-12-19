import { useEffect, useRef } from 'react'
import { Content, ContentLayout } from '@/components'
import { useSetRefOffsetList, useAxiosGetContents, useAxiosGetSkillDesc } from '@/hooks'
import Project from '@/components/contents/Project'

export default function ContentsContainer() {
    useAxiosGetContents() // contents get 요청
    useAxiosGetSkillDesc() // skillDesc get 요청

    const elementRefs = useRef<HTMLElement[]>([])
    const { setRefOffsetList } = useSetRefOffsetList() // RefTop 배열을 변환해서 저장하는 훅

    useEffect(() => {
        // 콘텐츠 데이터 로드가 완료되면
        // offset 배열로 변환해서 store에 저장
        setRefOffsetList(elementRefs)
    }, [])
    return (
        <>
            {/* <section
                key={contents.id}
                ref={(ref) => {
                    if (ref) elementRefs.current[idx] = ref
                }}
            >
                <ContentLayout title={contents.title}>
                    {contents.data.map((content) => (
                        // 콘텐츠 소분류
                        <Content key={content.id} content={content} />
                    ))}
                </ContentLayout>
            </section> */}
            <section ref={(ref) => (ref ? (elementRefs.current[0] = ref) : null)}>
                <Project />
            </section>
        </>
    )
}
