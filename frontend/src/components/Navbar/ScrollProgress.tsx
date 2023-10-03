"use client";

import { motion, useScroll } from "framer-motion";

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-[50px] md:top-20 left-0 right-0 h-[1px] bg-cyanDark rounded-full origin-left z-30"
      style={{ scaleX: scrollYProgress }}
    />
  );
};

export default ScrollProgress;
