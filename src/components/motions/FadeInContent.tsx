import React from "react";
import { motion } from "framer-motion";

export default function FadeInContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
}
