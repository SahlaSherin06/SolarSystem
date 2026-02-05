import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Airplane() {
  const ref = useRef();
  const { scene } = useGLTF("/models/airplane/scene.gltf");

  useFrame(() => {
    if (!ref.current) return;

    // Fly left → right only once
    ref.current.position.x += 0.2;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={0.09}
      position={[-30, 3, 10]}
      rotation={[0, Math.PI / 2, 0]}
    />
  );
}

useGLTF.preload("/models/airplane/scene.gltf");
