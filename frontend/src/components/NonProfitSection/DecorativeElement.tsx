"use client";

import { Canvas } from "@react-three/fiber";
import Element3D from "./Element3D";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

const DecorativeElement = () => {
  const canvasRef = useRef(null);
  const isInView = useInView(canvasRef);

  return (
    <Canvas ref={canvasRef} className="w-screen h-screen border-2 border-white">
      <Element3D isInView={isInView} />
    </Canvas>
  );
};

export default DecorativeElement;
