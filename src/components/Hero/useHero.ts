import { useState, useEffect, RefObject } from "react";

export const useHero = ({ heroRef }: { heroRef: RefObject<HTMLElement> }) => {
  const [offset, setOffset] = useState(0);
  const [heroOpacity, setHeroOpacity] = useState("0");

  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    window.removeEventListener("scroll", onScroll);

    const sectionHeight = document.getElementById("section_1")?.offsetHeight;
    if (sectionHeight && heroRef.current) {
      setHeroOpacity(
        `opacity-[${Math.round(100 - (offset / sectionHeight) * 100)}]`
      );

      heroRef.current.style.opacity = `${Math.round(
        100 - (offset / sectionHeight) * 100
      )}%`;
    }

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [heroOpacity, heroRef, offset]);

  return { heroOpacity };
};
