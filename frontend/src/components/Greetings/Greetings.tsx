"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "hello",
  "Dzień dobry",
  "hola", // Spanish
  "bonjour", // French
  "привіт", // Ukrainian
  "こんにちは", // Japanese (Kanji and Hiragana)
  "你好", // Chinese (Simplified)
  "salve", // Italian
  "Goddag", // Danish
  "Goedendag", // Dutch
  "नमस्ते", // Hindi (Devanagari script)
  "مرحبًا", // Arabic (Arabic script)
  "Sawubona", // Zulu (Latin script)
  "שָׁלוֹם", // Hebrew (Hebrew script)
  "Selamat pagi", // Indonesian (Latin script)
  "Γειά σας", // Greek (Greek script)
  "Olá", // Portuguese (Latin script)
  "Kamusta", // Filipino (Latin script)
  "こんにちは", // Japanese (Kanji and Hiragana)
  "Dzień dobry",
];

const Greetings = () => {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (visible != greetings.length) setVisible(visible + 1);
    }, 350 - visible * 15);
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="flex items-center justify-start leading-none text-left w-fit title text-grey3">
      {visible == greetings.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.8 }}
        >
          hello
        </motion.div>
      )}
      {greetings[visible]}
    </div>
  );
};

export default Greetings;
