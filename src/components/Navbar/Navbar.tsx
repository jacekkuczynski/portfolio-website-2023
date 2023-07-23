"use client";

import { Syne } from "next/font/google";
import { useIsScrolled } from "./useIsScrolled";
import { scrollIntoElementOfId } from "@/helpers/helpers";

const syne = Syne({ weight: "400", subsets: ["latin"] });

const Navbar = () => {
  const isScrolled = useIsScrolled();

  return (
    <nav
      className={`${syne.className} ${
        isScrolled && "bg-whitedimmed bg-opacity-[3%] backdrop-blur-nav   "
      } px-standard text-whitedimmed fixed top-0 h-[75px] flex items-center justify-between  w-full uppercase transition-all duration-1000 ease-in-out`}
    >
      <div className="flex justify-center items-center gap-4">
        <div className="text-large ">
          <a
            onClick={() => {
              scrollIntoElementOfId("section_1");
            }}
          >
            Jacek Kuczyński
          </a>
        </div>
        <div className="text-base">Full stack developer</div>
      </div>
      <ul className="flex gap-4">
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
  );
};

export default Navbar;
