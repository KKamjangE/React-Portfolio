import styled from 'styled-components'
import FadeIn from '@/components/ui/FadeIn.motion'
import HoverMotion from '@/components/ui/HoverMotion'
import useCurrViewContentNum from '@/hooks/useCurrViewContNum'
import useGetRefOffsetList from '@/hooks/useGetRefOffsetList'
import useMediaQuery from '@/hooks/useMediaQuery'

const navList = ['Career', 'TechStack', 'Project', 'Education', 'Certificate']

interface NavProps {
  isOpen: boolean
  onCloseToggle: () => void
}

export default function Nav({ isOpen, onCloseToggle }: NavProps) {
  const refOffsetList = useGetRefOffsetList()
  const { currViewContentNum } = useCurrViewContentNum()
  const isTablet = useMediaQuery('(max-width: 1024px)')

  const moveToElement = (index: number) => {
    onCloseToggle()
    requestAnimationFrame(() => {
      window.scrollTo({
        top: refOffsetList[index].top + 1,
        behavior: isTablet ? 'auto' : 'smooth',
      })
    })
  }

  return (
    <NavLayout $isOpen={isOpen}>
      <FadeIn>
        <ul className="nav-list">
          {navList.map((nav, index) => (
            <li key={nav} data-view={index === currViewContentNum}>
              <button type="button" onClick={() => moveToElement(index)}>
                <HoverMotion isNav={'nav'}>{nav}</HoverMotion>
              </button>
            </li>
          ))}
        </ul>
      </FadeIn>
      <FadeIn>
        <div className="contact">
          <a href="https://www.linkedin.com/in/kkamjange/" target="_blank" rel="noopener">
            LinkedIn
          </a>
          <a href="https://velog.io/@ajm0718/posts" target="_blank" rel="noopener">
            Velog
          </a>
          <a href="https://github.com/KKamjangE" target="_blank" rel="noopener">
            Github
          </a>
          <a href="mailto:ajm980718@gmail.com" className="email">
            ajm980718@gmail.com
          </a>
          <p className="update-info">Last Update: 2025/04</p>
        </div>
      </FadeIn>
    </NavLayout>
  )
}

const NavLayout = styled.nav<{ $isOpen: boolean }>`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 20vw;
    height: 100vh;
    padding: 10vh 0;
    background-color: var(--bg-dark-gray);
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
            button {
                all: unset; // reset button style
            }
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
    @media screen and (max-width: 1024px) {
        top: 0;
        left: 0;
        z-index: 300;
        width: 100%;
        height: 100vh;
        padding: 5vh 0;
        backdrop-filter: blur(10px);
        background-color: var(--bg-dark-gray-tablet);
        transform: translateX(${({ $isOpen }) => ($isOpen ? 0 : '+100%')});
        transition: transform 0.3s ease-in-out;
        .contact {
            font-size: 0.8rem;
        }
    }
`
