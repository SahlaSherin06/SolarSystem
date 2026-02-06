import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

import Sun from "./components/Sun";
import Planet from "./components/Planet";
import SaturnGroup from "./components/SaturnGroup";
import OrbitRing from "./components/OrbitRing";


function App() {
  const planets = [
    { name: "Mercury", radius: 0.25, distance: 3, speed: 1.3 },
    { name: "Venus", radius: 0.45, distance: 4.5, speed: 1 },
    { name: "Earth", radius: 0.5, distance: 6, speed: 0.9 },
    { name: "Mars", radius: 0.35, distance: 8, speed: 0.8 },
    { name: "Jupiter", radius: 1.2, distance: 12, speed: 0.4 },
    { name: "Uranus", radius: 0.7, distance: 20, speed: 0.2 },
    { name: "Neptune", radius: 0.7, distance: 24, speed: 0.15 },
  ];

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Canvas
        camera={{ position: [0, 10, 22], fov: 45 }}
        style={{ width: "100%", height: "100%" }}
      >
        {/* LIGHTS */}
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />

        {/* SUN */}
        <Sun />

        {/* PLANETS */}
        {planets.map((planet) => (
          <group key={planet.name}>
            <OrbitRing radius={planet.distance} />
            <Planet {...planet} />
          </group>
        ))}

        {/* SATURN */}
        <OrbitRing radius={16} />
        <SaturnGroup />

        {/* STARS */}
        <Stars radius={100} depth={50} count={4000} factor={4} fade />

        {/* CONTROLS */}
        <OrbitControls
          autoRotate
          mouseButtons={{
            LEFT: THREE.MOUSE.ROTATE,
            MIDDLE: THREE.MOUSE.DOLLY,
            RIGHT: THREE.MOUSE.PAN,
          }}
        />
      </Canvas>
    </div>
  );
}

export default App;
