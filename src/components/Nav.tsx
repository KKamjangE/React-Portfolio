import FadeIn from '@/components/ui/FadeIn.motion'
import HoverMotion from '@/components/ui/HoverMotion'
import useCurrViewContentNum from '@/hooks/useCurrViewContNum'
import useGetRefOffsetList from '@/hooks/useGetRefOffsetList'
import styled from 'styled-components'

export default function Nav() {
    const navList = ['Career', 'Project', 'Education']
    const refOffsetList = useGetRefOffsetList()
    const { currViewContentNum } = useCurrViewContentNum()

    const moveToElement = (index: number) => {
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
                    <a href="https://velog.io/@ajm0718/posts" target="_blank">
                        Velog
                    </a>
                    <a href="https://github.com/KKamjangE" target="_blank">
                        Github
                    </a>
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
        position: fixed;
        z-index: 300;
        width: 100%;
        height: 90vh;
        padding: 5vh 0;
        backdrop-filter: blur(10px);
    }
    .nav-list {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 26vh;
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
        font-size: 0.7rem;
        & > * {
            color: var(--text-white);
        }
        & > a {
            display: block;
            transition: 0.2s;
            &:hover {
                color: var(--accent-yellow);
            }
        }
        p.update-info {
            opacity: 0.6;
        }
    }
`