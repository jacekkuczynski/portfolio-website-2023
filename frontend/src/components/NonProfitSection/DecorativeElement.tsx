"use client";

import { Canvas } from "@react-three/fiber";
import Element3D from "./Element3D";

const DecorativeElement = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 17.5, near: 1, far: 40 }}
      className="w-screen h-screen border-y-2 bg-blackDimmed border-cyan"
    >
      <color attach="background" args={["#111111"]} />
      <Element3D />
    </Canvas>
  );
};

export default DecorativeElement;
