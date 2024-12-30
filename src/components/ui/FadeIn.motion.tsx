import React from 'react'
import { motion } from 'framer-motion'

export default function FadeIn({ children }: { children: React.ReactNode }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {children}
        </motion.div>
    )
}
