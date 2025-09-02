import { motion, useScroll } from 'motion/react'

export default function ProgressBar() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[5px] bg-[var(--color-accent-yellow)] origin-left"
      style={{ scaleX: scrollYProgress }}
    />
  )
}