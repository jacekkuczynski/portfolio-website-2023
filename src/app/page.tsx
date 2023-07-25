"use client";

import Hero from "@/components/Hero/Hero";
import { motion } from "framer-motion";
import { Inter, Oranienbaum } from "next/font/google";

const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: "400" });
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <section
        id="section_2"
        className="h-[900px] min-h-screen bg-blackdimmed flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 300 }}
          whileInView={{
            opacity: 1,
            x: 0,
            y: 50,
            rotate: -30,
            transition: {
              type: "spring",
              bounce: 0.4,
              duration: 1.8,
            },
          }}
          viewport={{ once: true }}
          className={`${inter.className} w-fit h-auto rounded-full shadow-2xl bg-pink text-heading-two p-5 text-whitedimmed uppercase tracking-wider font-bold border-4  border-brown`}
        >
          Ola 💔
        </motion.div>
        Section
      </section>
      <section
        id="section_3"
        className="h-[900px] min-h-screen bg-orange  flex items-center justify-center"
      >
        Section
      </section>
      <section
        id="section_4"
        className="h-[900px] min-h-screen bg-green flex items-center justify-center"
      >
        Section
      </section>
      <section className="h-[900px] min-h-screen bg-brown flex items-center justify-center">
        Section
      </section>
    </>
  );
}
