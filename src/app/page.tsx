"use client";

import Hero from "@/components/Hero/Hero";
import { Oranienbaum } from "next/font/google";

const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <>
      <Hero />
      <section
        id="section_2"
        className="h-[900px] bg-pink flex items-center justify-center"
      >
        Section
      </section>
      <section
        id="section_3"
        className="h-[900px] bg-orange flex items-center justify-center"
      >
        Section
      </section>
      <section
        id="section_4"
        className="h-[900px] bg-green flex items-center justify-center"
      >
        Section
      </section>
      <section className="h-[900px] bg-brown flex items-center justify-center">
        Section
      </section>
    </>
  );
}
