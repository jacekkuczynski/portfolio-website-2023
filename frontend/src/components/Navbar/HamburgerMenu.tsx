"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import BookCallDialogButton from "../BookCallDialogButton/BookCallDialogButton";

const HamburgerMenu = ({
  links,
  email,
}: {
  links: { name: string; link: string }[];
  email: string;
}) => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => setMenu(!menu);

  return (
    <>
      <button
        type="button"
        onClick={handleMenu}
        aria-label="menu"
        className="flex items-center justify-center"
      >
        <Menu strokeWidth={1.5} />
      </button>
      <AnimatePresence>
        {menu && (
          <motion.div
            variants={menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed top-0 right-0 z-50 w-full h-screen p-8 origin-right bg-black cursor-default lg:w-1/2 text-whiteDimmed"
          >
            <button
              type="button"
              className="absolute cursor-pointer top-2 right-2"
              onClick={handleMenu}
            >
              <X strokeWidth={1.5} width={48} height={48} />
            </button>

            <motion.div
              variants={linksContainerVariants}
              initial="initial"
              animate="open"
              exit="initial"
              className="container flex flex-col items-start justify-between h-full"
            >
              <div className="flex flex-col items-start h-full gap-8 overflow-hidden">
                <motion.div
                  variants={linkVariants}
                  onClick={handleMenu}
                  className="transition-colors ease-in-out title hover:text-cyanDark"
                >
                  <Link href="/">start</Link>
                </motion.div>
                {links.map((link) => {
                  return (
                    <motion.div
                      key={link.link}
                      variants={linkVariants}
                      onClick={handleMenu}
                      className="transition-colors ease-in-out title hover:text-cyanDark"
                    >
                      <Link href={link.link}>{link.name}</Link>
                    </motion.div>
                  );
                })}
              </div>
              <motion.div
                variants={linkVariants}
                className="flex flex-col gap-4 md:gap-8 "
              >
                <div className="flex flex-col gap-2 content text-whiteDimmed md:gap-4">
                  <p>{email}</p>
                  <p>designed & developed: Jacek Kuczyński</p>
                </div>
                <BookCallDialogButton />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HamburgerMenu;

const menuVariants = {
  initial: {
    scaleX: 0,
    opacity: 0,
  },
  animate: {
    scaleX: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.12, 0, 0.39, 0],
    },
  },
  exit: {
    scaleX: 0,
    opacity: 0,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const linksContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.09,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.09,
      staggerDirection: 1,
    },
  },
};

const linkVariants = {
  initial: {
    x: "45vh",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.37, 0, 0.63, 1],
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      ease: [0, 0.55, 0.45, 1],
      duration: 0.6,
    },
  },
};
