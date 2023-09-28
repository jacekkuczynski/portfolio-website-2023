"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const Greetings = () => {
  const [greetings, setGreetings] = useState([
    { text: "Dzień dobry", visible: true },
    { text: "hola", visible: true },
    { text: "bonjour", visible: true },
    { text: "привіт", visible: true },
    { text: "こんにちは", visible: true },
    { text: "你好", visible: true },
    { text: "salve", visible: true },
    { text: "Goddag", visible: true },
    { text: "Goedendag", visible: true },
    { text: "hello", visible: true },
  ]);

  const hideGreeting = (text: string, index: number, greetingsLen: number) => {
    if (index !== greetingsLen - 1)
      setGreetings((prevGreetings) =>
        prevGreetings.map((greeting) => ({
          ...greeting,
          visible: greeting.text === text ? false : greeting.visible,
        }))
      );
  };

  return (
    <div className="h-8">
      {greetings.map((greeting, index) => (
        <motion.div
          key={greeting.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={index === greetings.length ? { opacity: 100 } : { opacity: 0 }}
          transition={{ duration: 0.2, delay: index * 0.2 }}
          className={`${
            greeting.visible ? "block" : "hidden"
          } font-bold text-whiteDimmed font-raleway`}
          onAnimationComplete={() =>
            hideGreeting(greeting.text, index, greetings.length)
          }
        >
          {greeting.text}
        </motion.div>
      ))}
    </div>
  );
};

export default Greetings;
