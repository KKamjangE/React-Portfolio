import { motion } from 'motion/react'
import styled from 'styled-components'
import upArrow from '@/assets/up-arrow.svg'
import FadeIn from '@/components/ui/FadeIn.motion'

export default function ScrollTopBtn() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ScrollTopBtnStyled>
      <FadeIn>
        <motion.button
          onClick={scrollToTop}
          whileHover={{ backgroundColor: '#ffffff', scale: 1.1 }}
          transition={{
            // type: 'spring',
            duration: 0.1,
            stiffness: 800,
            damping: 17,
          }}
        >
          <img src={upArrow} alt="위쪽 화살표" />
        </motion.button>
      </FadeIn>
    </ScrollTopBtnStyled>
  )
}

const ScrollTopBtnStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 50px;
    right: 50px;
    :hover {
        cursor: pointer;
    }
    button {
        width: 70px;
        height: 70px;
        border: 0;
        border-radius: 28px;
        background-color: var(--bg-light-gray);
        box-shadow: 3px 10px 20px rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 1024px) {
        bottom: 20px;
        right: 20px;
        button {
            width: 50px;
            height: 50px;
            border-radius: 20px;
        }
    }
    @media screen and (max-width: 768px) {
        button {
            width: 40px;
            height: 40px;
            border-radius: 16px;
            img {
                width: 20px;
            }
        }
    }
`
