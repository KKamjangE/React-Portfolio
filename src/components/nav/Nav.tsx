import { useCurrViewContentNum, useGetRefOffsetList } from '@/hooks'
import { FadeIn, HoverMotion } from '@/components'
import styled from 'styled-components'

export default function Nav() {
    const navList = ['Career', 'Project', 'Share', 'Education']
    const refOffsetList = useGetRefOffsetList()
    const { currViewContentNum } = useCurrViewContentNum()

    const moveToElement = (index: number) => {
        // index에 맞는 콘텐츠로 스크롤 이동하는 함수
        window.scrollTo({ top: refOffsetList[index].top + 1, behavior: 'smooth' })
    }

    return (
        <NavLayout>
            <FadeIn>
                <ul className="nav-list">
                    {navList.map((nav, index) => (
                        <li
                            key={index}
                            data-view={index === currViewContentNum}
                            onClick={() => moveToElement(index)}
                        >
                            <HoverMotion isNav={'nav'}>{nav}</HoverMotion>
                        </li>
                    ))}
                </ul>
            </FadeIn>
            <FadeIn>
                <div className="contact">
                    <a href="mailto:ajm980718@gmail.com" className="email">
                        ajm980718@gmail.com
                    </a>
                    <p className="update-info">Last Update: 2024/12</p>
                </div>
            </FadeIn>
        </NavLayout>
    )
}

const NavLayout = styled.nav`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20vw;
    height: 80vh;
    padding: 10vh 0;
    background-color: var(--bg-dark-gray);
    @media screen and (max-width: 1024px) {
        position: static;
        width: auto;
        height: 40vh;
        padding: 5vh 0;
    }
    .nav-list {
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
    }
    .contact {
        display: grid;
        row-gap: 15px;
        font-size: 0.6rem;
        color: var(--text-white);
        a.email {
            display: block;
            color: var(--text-white);
            transition: 0.2s;
            :hover {
                cursor: pointer;
                color: var(--accent-yellow);
            }
        }
        p.update-info {
            opacity: 0.6;
        }
    }
`
