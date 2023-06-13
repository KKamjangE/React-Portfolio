import React from "react";
import { motion } from "framer-motion";

export const FadeInContent = () => {
  return;
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
      transition={{ duration: 1.5, delay: delayTime, ease: "easeOut" }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};
