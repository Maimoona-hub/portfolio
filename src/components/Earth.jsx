import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

function EarthModel() {
  const texture = new THREE.TextureLoader().load(
    "https://threejs.org/examples/textures/land_ocean_ice_cloud_2048.jpg"
  );
  return (
    <mesh rotation={[0.4, 0, 0]}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}

export default function Earth() {
  return (
    <Canvas camera={{ position: [5, 3, 5], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      <Stars radius={100} depth={50} count={5000} factor={4} fade />
      <EarthModel />
      <OrbitControls autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
}
