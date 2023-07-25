"use client";

import { Oranienbaum } from "next/font/google";
import Image from "next/image";
import { useRef } from "react";
import { useHero } from "./useHero";

const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { heroOpacity } = useHero({ heroRef });

  return (
    <section
      ref={heroRef}
      id="section_1"
      className={`${heroOpacity} h-section min-h-screen bg-blackdimmed flex flex-col items-center justify-start bg-hero-image bg-no-repeat	bg-cover bg-center	`}
    >
      <div
        className={`${oranienbaum.className}  flex items-center justify-start w-full h-fit pt-[150px]  px-standard `}
      >
        <span className="h-fit text-heading-one tracking-tight heroSm:text-display-two heroSM:tracking-display hero:text-display-one text-whitedimmed  uppercase animate-wiggle ">
          Jacek Kuczyński
        </span>
      </div>
      <div className="flex flex-col  h-full w-full px-standard text-right">
        <div className="flex flex-col h-full items-end justify-center text-base heroSm:text-large hero:text-heading-two hero:leading-none tracking-heading-2 uppercase text-white ">
          <div className="flex gap-2 justify-start items-center ">
            <div className="relative w-8 h-8">
              <Image src={"/img/star.png"} fill alt={""} className="" />
            </div>
            <span>I&apos;m a fullstack</span>
          </div>
          <span>web developer</span>
          <span>specialized in front-end</span>
          <span>development with react</span>
          <span>and typescript</span>
          <span>based in Poland</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
