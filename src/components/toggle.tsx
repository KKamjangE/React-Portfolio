import styled from 'styled-components'
import { motion } from 'motion/react'

interface ToggleProps {
    isOpen: boolean
    onOpenToggle: () => void
}

export default function Toggle({ isOpen, onOpenToggle }: ToggleProps) {
    return (
        <motion.div animate={{ opacity: isOpen ? 0 : 1 }} transition={{ duration: 0.3 }}>
            <ToggleStyled onClick={onOpenToggle}>Menu</ToggleStyled>
        </motion.div>
    )
}

const ToggleStyled = styled.div`
    display: none;
    position: fixed;
    top: 0;
    z-index: 300;
    width: 100%;
    background-color: var(--bg-dark-gray-tablet);
    backdrop-filter: blur(5px);
    padding: 15px;
    color: #fff;
    cursor: pointer;
    @media screen and (max-width: 1024px) {
        display: block;
    }
`
