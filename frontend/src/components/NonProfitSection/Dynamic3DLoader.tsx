"use client";

import dynamic from "next/dynamic";
import { useState, useEffect } from "react";

const DecorativeElement = dynamic(() => import("./DecorativeElement"));

const Dynamic3DLoader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const handleWindowLoad = () => {
      if (!loaded) setLoaded(true);
    };

    window.addEventListener("mousedown", handleWindowLoad);
    window.addEventListener("mousemove", handleWindowLoad);
    window.addEventListener("keydown", handleWindowLoad);
    window.addEventListener("keypress", handleWindowLoad);
    window.addEventListener("touchstart", handleWindowLoad);
    window.addEventListener("touchmove", handleWindowLoad);
    window.addEventListener("scroll", handleWindowLoad);
    window.addEventListener("resize", handleWindowLoad);
    window.addEventListener("load", handleWindowLoad);

    return () => {
      window.removeEventListener("mousedown", handleWindowLoad);
      window.removeEventListener("mousemove", handleWindowLoad);
      window.removeEventListener("keydown", handleWindowLoad);
      window.removeEventListener("keypress", handleWindowLoad);
      window.removeEventListener("touchstart", handleWindowLoad);
      window.removeEventListener("touchmove", handleWindowLoad);
      window.removeEventListener("scroll", handleWindowLoad);
      window.removeEventListener("resize", handleWindowLoad);
      window.removeEventListener("load", handleWindowLoad);
    };
  }, [loaded]);

  return <>{loaded && <DecorativeElement />}</>;
};

export default Dynamic3DLoader;
