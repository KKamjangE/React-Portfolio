import React from "react";
import { motion } from "framer-motion";

export const FadeInContent = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      whileInView={{ opacity: 1 }}
    >
      {children}
    </motion.div>
  );
};

export const FadeInDownContent = ({
  children,
  delayTime,
}: {
  children: React.ReactNode;
  delayTime: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 1, delay: delayTime, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
