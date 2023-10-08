"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AppearingAnim = ({
  children,
  duration,
  delay,
}: {
  children: React.ReactNode;
  duration?: number;
  delay?: number;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(0.8) translateY(2rem)",

        opacity: isInView ? 1 : 0,

        transition: `all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) ${
          duration || "0.5s"
        }`,
      }}
      transition={{ delay: delay || 0.15 }}
      initial={false}
    >
      {children}
    </motion.div>
  );
};

export default AppearingAnim;
