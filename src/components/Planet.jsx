import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";

export default function Planet({ name, radius, distance, speed }) {
  const meshRef = useRef();

  const texture = useTexture(`/textures/${name.toLowerCase()}.jpg`);

  useFrame((state) => {
    if (!meshRef.current) return;

    const time = state.clock.getElapsedTime();
    const angle = time * speed;

    meshRef.current.position.x = Math.cos(angle) * distance;
    meshRef.current.position.z = Math.sin(angle) * distance;
	 
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[radius, 32, 32]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  );
}
