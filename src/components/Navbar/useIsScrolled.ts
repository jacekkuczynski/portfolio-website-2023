import { useState, useLayoutEffect } from "react";

export const useIsScrolled = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const checkIsScrolled = () => {
    setIsScrolled(window.scrollY > 0);
  };
  useLayoutEffect(() => {
    if (window) {
      window.addEventListener("scroll", checkIsScrolled);
    }
  }, []);

  return isScrolled;
};
