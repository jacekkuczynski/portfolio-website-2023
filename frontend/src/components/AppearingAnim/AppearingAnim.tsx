"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AppearingAnim = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "scale(0.8) translateY(10rem)",

        opacity: isInView ? 1 : 0,

        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      transition={{ delay: 0.3 }}
      initial={false}
      className="p-4 transform border-2 bg-blackDimmed opacity-80 rounded-xl border-cyan"
    >
      {children}
    </motion.div>
  );
};

export default AppearingAnim;
