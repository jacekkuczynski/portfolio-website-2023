"use client";

import { Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Element3D = () => {
  const { size } = useThree();
  const torusKnotRef = useRef<Mesh>(null);
  const torusKnotRef1 = useRef<Mesh>(null);

  useFrame(() => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.z += 0.001;
      torusKnotRef.current.rotation.y += 0.002;
      torusKnotRef.current.rotation.x += 0.003;
    }
    if (torusKnotRef1.current) {
      torusKnotRef1.current.rotation.z += 0.001;
      torusKnotRef1.current.rotation.y += 0.002;
      torusKnotRef1.current.rotation.x += 0.003;
    }
  });

  // radius; tube; tubularSegments; radialSegments; p; q
  // default: 1; 0.4; 64; 8; 2; 3
  const torusKnotSize: [number, number, number, number, number, number] = [
    1.2, 0.4, 128, 8, 2, 3,
  ];
  const meshProps = { color: "#79ffe1", metalness: 1, roughness: 0.01 };

  return (
    <>
      <directionalLight intensity={10} position={[2, -2, 3]} color="white" />
      <directionalLight intensity={10} position={[2, 2, 3]} color="white" />
      <directionalLight intensity={10} position={[-2, -2, 3]} color="white" />
      <directionalLight intensity={10} position={[-2, 2, 3]} color="white" />

      <Center position={[0, 0, 0]}>
        <mesh ref={torusKnotRef} position={[-2, 0, -6]} scale={1}>
          <torusKnotGeometry args={torusKnotSize} />
          <meshStandardMaterial {...meshProps} />
        </mesh>
        <mesh ref={torusKnotRef1} position={[2, 0, -6]} scale={1}>
          <torusKnotGeometry args={torusKnotSize} />
          <meshStandardMaterial {...meshProps} />
        </mesh>
      </Center>
    </>
  );
};

export default Element3D;
