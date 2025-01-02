import styled from 'styled-components'
import { motion } from 'motion/react'

interface ToggleProps {
    isOpen: boolean
    onOpenToggle: () => void
}

export default function Toggle({ isOpen, onOpenToggle }: ToggleProps) {
    return (
        <ToggleStyled
            onClick={onOpenToggle}
            animate={{ opacity: isOpen ? 0 : 1 }}
            transition={{ duration: 0.3 }}
        >
            Menu
        </ToggleStyled>
    )
}

const ToggleStyled = styled(motion.div)`
    display: none;
    position: fixed;
    top: 0;
    z-index: 300;
    width: 100%;
    height: 40px;
    background-color: var(--bg-dark-gray-tablet);
    backdrop-filter: blur(5px);
    padding: 0 15px;
    align-content: center;
    color: #fff;
    cursor: pointer;
    @media screen and (max-width: 1024px) {
        display: block;
    }
`
