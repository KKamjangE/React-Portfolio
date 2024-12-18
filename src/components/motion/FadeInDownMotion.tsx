import { motion } from 'framer-motion'

export default function FadeInDownMotion({
    children,
    delayTime,
}: {
    children: React.ReactNode
    delayTime: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            transition={{ duration: 1, delay: delayTime, ease: 'easeOut' }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}
