import { useCurrViewContentNum, useGetRefOffsetList } from '@/hooks'
import { FadeIn, NavLayout, NavList, NavContact } from '@/components'

export default function NavContainer() {
    const navList = ['Project', 'Work', 'Share', 'Education']
    const refOffsetList = useGetRefOffsetList()
    const { currViewContentNum } = useCurrViewContentNum()

    const moveToElement = (index: number) => {
        // index에 맞는 콘텐츠로 스크롤 이동하는 함수
        window.scrollTo({ top: refOffsetList[index].top + 1, behavior: 'smooth' })
    }

    return (
        <NavLayout>
            <FadeIn>
                <NavList
                    navList={navList}
                    refOffsetList={refOffsetList}
                    currViewContentNum={currViewContentNum}
                    moveToElement={moveToElement}
                />
            </FadeIn>
            <FadeIn>
                <NavContact />
            </FadeIn>
        </NavLayout>
    )
}
