"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const BackgroundAnimDecor = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (custom: number) => {
      const delay = 1 + custom * 0.5;
      return {
        pathLength: 1,
        opacity: 0.4 - custom * 0.1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2.5, bounce: 0.2 },
          opacity: { delay, duration: 2 },
        },
      };
    },
  };

  return (
    <div className="absolute top-0 right-0 -z-10">
      {windowWidth !== 0 && (
        <motion.svg
          initial="hidden"
          animate="visible"
          width={windowWidth * 0.75}
          height={window.innerHeight}
        >
          {new Array(Math.floor(windowWidth / 16)).fill(0).map((el, index) => {
            return (
              <motion.line
                key={crypto.randomUUID()}
                x1={windowWidth - index * 16}
                y1={0}
                x2={windowWidth - index * 16}
                y2={window.innerHeight}
                stroke="#50E3C2"
                variants={draw}
                custom={index * 0.05}
              />
            );
          })}
        </motion.svg>
      )}
    </div>
  );
};

export default BackgroundAnimDecor;
