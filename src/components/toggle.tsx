import { motion } from 'motion/react'
import clsx from 'clsx'

interface ToggleProps {
  isOpen: boolean
  onToggle: () => void
}

interface LineProps {
  isOpen: boolean
  position: 'top' | 'middle' | 'bottom'
}

function Line({ isOpen, position }: LineProps) {
  return (
    <span className={clsx(
      'w-6 h-0.5 rounded-md transition-all duration-300 ease-in-out',
      isOpen ? 'bg-white' : 'bg-black',
      {
        'rotate-45 translate-x-[5px] translate-y-[6px]': isOpen && position === 'top',
        'opacity-0': isOpen && position === 'middle',
        '-rotate-45 translate-x-[5px] -translate-y-[6px]': isOpen && position === 'bottom',
      }
    )} />
  );
}


export default function Toggle({ isOpen, onToggle }: ToggleProps) {
  return (
    <motion.div className="hidden max-lg:block fixed top-5 right-5 z-[500] content-center">
      <button
        className={clsx(
          'relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 cursor-pointer rounded-[5px] transition-colors duration-300',
          {
            'bg-transparent shadow-none': isOpen,
            'bg-[var(--color-light-gray)] shadow-[3px_10px_20px_rgba(0,0,0,0.4)]': !isOpen,
          }
        )}
        onClick={onToggle}
        type="button"
      >
        <Line isOpen={isOpen} position="top" />
        <Line isOpen={isOpen} position="middle" />
        <Line isOpen={isOpen} position="bottom" />
      </button>
    </motion.div>
  )
}
