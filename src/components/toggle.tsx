import styled from 'styled-components'
import { motion } from 'motion/react'

interface ToggleProps {
    isOpen: boolean
    onToggle: () => void
}

export default function Toggle({ isOpen, onToggle }: ToggleProps) {
    return (
        <ToggleStyled $isOpen={isOpen}>
            <button className="toggle" onClick={onToggle}>
                <Line $isOpen={isOpen} $position="top" />
                <Line $isOpen={isOpen} $position="middle" />
                <Line $isOpen={isOpen} $position="bottom" />
            </button>
        </ToggleStyled>
    )
}

const ToggleStyled = styled(motion.div)<{ $isOpen: boolean }>`
    display: none;
    position: fixed;
    top: 0;
    z-index: 500;
    width: 100%;
    align-content: center;
    .toggle {
        position: relative;
        margin: 10px 10px 0 auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        padding: 10px;
        border: 2px solid;
        border-radius: 10px;
        transition: color 0.3s;
        background-color: ${({ $isOpen }) => ($isOpen ? 'none' : 'var(--bg-light-gray)')};
        ${({ $isOpen }) => {
            if ($isOpen) {
                return { backgroundColor: 'none', borderColor: '#fff' }
            }
        }}
    }
    @media screen and (max-width: 1024px) {
        display: block;
    }
`

interface LineProps {
    $isOpen: boolean
    $position: 'top' | 'middle' | 'bottom'
}

const Line = styled.span<LineProps>`
    width: 33px;
    height: 4px;
    border-radius: 10px;
    background-color: var(--text-black);
    transition: all 0.3s ease-in-out;
    ${({ $isOpen, $position }) => {
        if ($position === 'top') {
            return $isOpen ? 'transform: rotate(45deg) translate(7px, 7px)' : ''
        }
        if ($position === 'middle') {
            return $isOpen ? 'opacity: 0' : ''
        }
        if ($position === 'bottom') {
            return $isOpen ? 'transform: rotate(-45deg) translate(7px, -7px)' : ''
        }
    }};
`
