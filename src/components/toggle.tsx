import { motion } from 'motion/react'
import styled from 'styled-components'

interface ToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export default function Toggle({ isOpen, onToggle }: ToggleProps) {
  return (
    <ToggleStyled $isOpen={isOpen}>
      <button className="toggle" onClick={onToggle} type="button">
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
    top: 20px;
    right: 20px;
    z-index: 500;
    align-content: center;
    .toggle {
        position: relative;
        width: 40px;
        height: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        border-radius: 5px;
        transition: color 0.3s;
        background-color: ${({ $isOpen }) => ($isOpen ? 'none' : 'var(--bg-light-gray)')};
        box-shadow: ${({ $isOpen }) => ($isOpen ? 'none' : '3px 10px 20px rgba(0, 0, 0, 0.4)')};
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
    width: 24px;
    height: 2px;
    border-radius: 4px;
    background-color: ${({ $isOpen }) => ($isOpen ? 'var(--text-white)' : 'var(--text-black)')};
    transition: all 0.3s ease-in-out;
    ${({ $isOpen, $position }) => {
      if ($position === 'top') {
        return $isOpen ? 'transform: rotate(45deg) translate(5px, 6px)' : ''
      }
      if ($position === 'middle') {
        return $isOpen ? 'opacity: 0' : ''
      }
      if ($position === 'bottom') {
        return $isOpen ? 'transform: rotate(-45deg) translate(5px, -6px)' : ''
      }
    }};
`
