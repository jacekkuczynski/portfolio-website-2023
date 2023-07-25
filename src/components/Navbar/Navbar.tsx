"use client";

import { Syne } from "next/font/google";
import { useIsScrolled } from "./useIsScrolled";
import { scrollIntoElementOfId } from "@/helpers/helpers";
import { motion, useScroll } from "framer-motion";

const syne = Syne({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const isScrolled = useIsScrolled();
  const { scrollYProgress } = useScroll();

  return (
    <div className="">
      <nav
        className={`${syne.className} ${
          isScrolled && "bg-blackdimmed bg-opacity-[10%] backdrop-blur-nav   "
        } px-standard text-whitedimmed fixed top-0 h-[75px] flex items-center justify-between  w-full uppercase transition-bg duration-1000 ease-in-out`}
      >
        <div className="flex flex-col md:flex-row text-left justify-center  items-start md:items-center gap-0 md:gap-4">
          <div className="text-large leading-none	">
            <a
              onClick={() => {
                scrollIntoElementOfId("section_1");
              }}
              className="flex flex-row gap-1"
            >
              <span className="hidden sm:block">Jacek </span>Kuczyński
            </a>
          </div>
          <div className=" hidden md:block text-tiny sm:text-base  ">
            Full stack developer
          </div>
        </div>
        <ul className="flex gap-4 text-small navbarSm:text-base md:text-large">
          <li>
            <a
              onClick={() => {
                scrollIntoElementOfId("section_2");
              }}
            >
              about
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollIntoElementOfId("section_3");
              }}
            >
              works
            </a>
          </li>
          <li>
            <a
              onClick={() => {
                scrollIntoElementOfId("section_4");
              }}
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
      {/* scroll progress background */}
      <div className="fixed top-[75px] left-[36px] right-[36px]  h-[3px] bg-blackdimmed rounded-full  z-20 px-standard opacity-50" />
      {/* scroll progress indicator */}
      <motion.div
        className="fixed top-[75px] left-[36px] right-[36px] h-[3px] bg-whitedimmed rounded-full origin-[0%] z-30 px-standard "
        style={{ scaleX: scrollYProgress }}
      />
    </div>
  );
};

export default Navbar;
