"use client";

import { Oranienbaum } from "next/font/google";
import Image from "next/image";
import { useEffect, useState } from "react";

const oranienbaum = Oranienbaum({ subsets: ["latin"], weight: "400" });

const Hero = () => {
  const [offset, setOffset] = useState(0);
  const [heroOpacity, setHeroOpacity] = useState("0");

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);

    const sectionHeight = document.getElementById("section_1")?.offsetHeight;
    // console.log({ offset }, { sectionHeight });
    if (sectionHeight)
      setHeroOpacity(
        `opacity-[${Math.round(100 - (offset / sectionHeight) * 100)}]`
      );

    console.log({ heroOpacity });

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroOpacity, offset]);
  //   useEffect(() => {
  //     if (window)
  //       window.addEventListener(
  //         "scroll",
  //         () => {
  //           console.log("scrolled down");
  //         },
  //         { passive: true }
  //       );

  //     return () => {
  //       window.removeEventListener("scroll", () => {
  //         console.log("scrolled down");
  //       });
  //     };
  //   }, []);

  return (
    <section
      id="section_1"
      className={`${heroOpacity} h-section bg-pink flex flex-col items-center justify-start bg-hero-image bg-no-repeat	bg-cover bg-center	`}
    >
      <div
        className={`${oranienbaum.className}  flex items-center justify-start w-full h-fit pt-[150px]  px-standard `}
      >
        <span className="h-fit text-display-one text-whitedimmed tracking-display uppercase animate-wiggle">
          Jacek Kuczyński
        </span>
      </div>
      <div className="flex flex-col  h-full w-full px-standard text-right">
        <div className="flex flex-col h-full items-end justify-center text-heading-two tracking-heading-2 uppercase text-white ">
          <div className="flex gap-2 justify-end">
            <Image src={"/img/star.png"} width={64} height={64} alt={""} />{" "}
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
