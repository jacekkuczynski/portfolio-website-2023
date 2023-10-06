"use client";

import { Float, OrbitControls } from "@react-three/drei";
import { Vector3, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const Element3D = ({ isInView }: { isInView: boolean }) => {
  const { size, viewport } = useThree();
  const [scrollY, setScrollY] = useState(0);
  const ligthRef1 = useRef(null);
  const ligthRef2 = useRef(null);
  const ligthRef3 = useRef(null);
  const ligthRef4 = useRef(null);

  useEffect(() => {
    console.log({ isInView }, { scrollY }, ligthRef1.current.position.y);
  });

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useFrame(() => {
    if (
      isInView &&
      ligthRef1.current
      // &&
      // ligthRef2.current &&
      // ligthRef3.current &&
      // ligthRef4.current
    ) {
      ligthRef1.current.position.y = -4 + scrollY * 0.00055;
      // ligthRef2.current.position.y = 0 + scrollY * 0.0055;
      // ligthRef3.current.position.y = 0 + scrollY * 0.0055;
      // ligthRef4.current.position.y = 0 + scrollY * 0.0055;
    }
  });

  // [radius, tube, radialSegments, tubularSegments, arc]
  const torusSize: [number, number, number, number, number] = [
    1,
    0.25,
    24,
    48,
    Math.PI * 2,
  ];

  const meshProps = { color: "#79ffe1", metalness: 1, roughness: 0.1 };

  const scale: Vector3 = [viewport.width / 10, viewport.width / 10, 1];

  return (
    <>
      {/* <OrbitControls enableZoom={false} /> */}
      {/* <spotLight intensity={5} position={[-4, 4, 3]} color="white" /> */}
      <directionalLight
        intensity={50}
        position={[0, 0, 0]}
        color="white"
        ref={ligthRef1}
      />
      {/* <directionalLight
        intensity={50}
        position={[-4, 4, 3]}
        color="white"
        ref={ligthRef1}
      />
      <directionalLight
        intensity={50}
        position={[-4, -4, 3]}
        color="white"
        ref={ligthRef2}
      />

      <directionalLight
        intensity={25}
        position={[4, 4, 3]}
        color="white"
        ref={ligthRef3}
      />
      <directionalLight
        intensity={25}
        position={[4, -4, 3]}
        color="white"
        ref={ligthRef4}
      /> */}

      <group>
        <Float>
          <mesh
            // position={[-3, 3, 0]}
            position={[0, 0, 0]}
            scale={scale}
          >
            <Float />
            <torusGeometry args={torusSize} />
            <meshStandardMaterial {...meshProps} />
          </mesh>
        </Float>
        {/* <Float>
          <mesh position={[0, 3, 0]} scale={scale}>
            <torusGeometry args={torusSize} />
            <meshStandardMaterial {...meshProps} />
          </mesh>
        </Float>
        <Float>
          <mesh position={[3, 3, 0]} scale={scale}>
            <torusGeometry args={torusSize} />
            <meshStandardMaterial {...meshProps} />
          </mesh>
        </Float> */}
      </group>
    </>
  );
};

export default Element3D;

{
  /* 2nd row */
}
//   <mesh position={[-3, 0, 0]} castShadow>
//   <Float />
//   <torusGeometry />
//   <meshStandardMaterial color="#79ffe1" metalness={1} roughness={0.1} />
// </mesh>
// <mesh position={[0, 0, 0]}>
//   <torusGeometry />
//   <meshStandardMaterial color="#79ffe1" metalness={1} roughness={0.2} />
// </mesh>
// <mesh position={[3, 0, 0]}>
//   <torusGeometry />
//   <meshStandardMaterial color="#79ffe1" metalness={1} roughness={0.3} />
// </mesh>
// {/* 3nd row */}
// <Float>
//
//   <mesh position={[-3, -3, 0]} castShadow>
//     <torusGeometry />
//     <meshStandardMaterial color="#79ffe1" metalness={1} roughness={0.1} />
//   </mesh>
// </Float>
// <mesh position={[0, -3, 0]}>
//   <torusGeometry />
//   <meshStandardMaterial color="#79ffe1" metalness={1} roughness={0.2} />
// </mesh>
// <mesh position={[3, -3, 0]}>
//   <torusGeometry />
//   <meshStandardMaterial color="#79ffe1" metalness={1} roughness={0.3} />
// </mesh>
