// App.jsx
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";
import "./App.css";
<Model objUrl="/models/myModel.glb" />
export default function App() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 6], fov: 60 }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.8} castShadow />

      {/* ⬇️ your custom object, dead-centre */}
      <Suspense fallback={null}>
        <Model objUrl="/models/myModel.glb" scale={1.2} speed={0.8} />
        {/* or: <Model gltfUrl="/models/myModel.glb" scale={1.2} /> */}
      </Suspense>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}
