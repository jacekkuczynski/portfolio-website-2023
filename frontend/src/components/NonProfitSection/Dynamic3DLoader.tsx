"use client";

import dynamic from "next/dynamic";

const DecorativeElement = dynamic(() => import("./DecorativeElement"), {
  ssr: false,
});

const Dynamic3DLoader = () => {
  return <DecorativeElement />;
};

export default Dynamic3DLoader;
