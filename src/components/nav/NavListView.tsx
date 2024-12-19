import styled from 'styled-components'
import { HoverMotion } from '@/components'
import { RefOffsetListType } from '@/store/RefTopStateSlice'

type NavListViewType = {
    navList: string[]
    refOffsetList: RefOffsetListType[]
    currViewContentNum: number | null
    moveToElement: (index: number) => void
}

export default function NavListView({
    navList,
    currViewContentNum,
    moveToElement,
}: NavListViewType) {
    return (
        <NavListViewStyled>
            {navList.map((nav, index) => (
                <li
                    key={index}
                    data-view={index === currViewContentNum}
                    onClick={() => moveToElement(index)}
                >
                    <HoverMotion isNav={'nav'}>{nav}</HoverMotion>
                </li>
            ))}
        </NavListViewStyled>
    )
}

const NavListViewStyled = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 30vh;
    li {
        color: var(--text-white);
        display: block;
        font-size: 1.4rem;
        font-weight: 500;
        cursor: pointer;
    }
    li[data-view='true'] {
        color: rgba(255, 255, 255, 0.5);
    }
`
