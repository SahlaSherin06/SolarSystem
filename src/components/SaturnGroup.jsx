import { useFrame, useLoader } from "@react-three/fiber";
import { useRef } from "react";
import { TextureLoader, DoubleSide } from "three";

const SaturnGroup = () => {
  const saturnTexture = useLoader(TextureLoader, "/textures/saturn.jpg");
  const ringTexture = useLoader(TextureLoader, "/textures/saturn_ring.png");

  const groupRef = useRef();

  useFrame((state, delta) => {
    if (!groupRef.current) return;

    const angle = state.clock.elapsedTime * 0.3;

    groupRef.current.position.x = Math.cos(angle) * 16;
    groupRef.current.position.z = Math.sin(angle) * 16;
    groupRef.current.rotation.y += delta * 0.8;
  });

  return (
    <group ref={groupRef}>
      {/* SATURN */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial map={saturnTexture} />
      </mesh>

      {/* RINGS */}
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.3, 2.0, 64]} />
        <meshStandardMaterial
          map={ringTexture}
          side={DoubleSide}
          transparent
        />
      </mesh>
    </group>
  );
};

export default SaturnGroup;
