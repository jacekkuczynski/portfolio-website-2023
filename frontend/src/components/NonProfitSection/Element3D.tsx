"use client";

import { Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const Element3D = () => {
  const torusKnotRef = useRef<Mesh>(null);
  const torusKnotRef1 = useRef<Mesh>(null);

  useFrame(() => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.z += 0.001;
      torusKnotRef.current.rotation.y += 0.002;
      torusKnotRef.current.rotation.x += 0.003;
    }
    if (torusKnotRef1.current) {
      torusKnotRef1.current.rotation.z -= 0.001;
      torusKnotRef1.current.rotation.y -= 0.002;
      torusKnotRef1.current.rotation.x -= 0.003;
    }
  });
  // radius; tube; tubularSegments; radialSegments; p; q
  // default: 1; 0.4; 64; 8; 2; 3
  const torusKnotSize: [number, number, number, number, number, number] = [
    1.4, 0.2, 128, 8, 2, 3,
  ];
  const meshProps = { color: "#79ffe1", metalness: 1, roughness: 0.01 };

  return (
    <>
      <directionalLight intensity={10} position={[2, -2, 3]} color="white" />
      <directionalLight intensity={10} position={[2, 2, 3]} color="white" />
      <directionalLight intensity={10} position={[-2, -2, 3]} color="white" />
      <directionalLight intensity={10} position={[-2, 2, 3]} color="white" />

      <directionalLight
        intensity={5}
        rotation={[0, 180, 0]}
        position={[0, -4, -20]}
        color="#ff0080"
      />

      <Center left>
        <mesh ref={torusKnotRef} scale={1}>
          <torusKnotGeometry args={torusKnotSize} />
          <meshStandardMaterial {...meshProps} />
        </mesh>
      </Center>
      <Center right>
        <mesh ref={torusKnotRef1} scale={1} rotation={[180, 180, 180]}>
          <torusKnotGeometry args={torusKnotSize} />
          <meshStandardMaterial {...meshProps} />
        </mesh>
      </Center>
    </>
  );
};

export default Element3D;
