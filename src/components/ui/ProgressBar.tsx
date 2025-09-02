import { motion, useScroll } from 'motion/react'
import styled from 'styled-components'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return <ProgressBarStyled className="progress-bar" style={{ scaleX: scrollYProgress }} />
}

const ProgressBarStyled = styled(motion.div)`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background-color: var(--accent-yellow);
    transform-origin: 0%;
`
