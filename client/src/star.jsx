// Star.jsx
import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Star({ size = 1, speed = 0.6 }) {
  const mesh = useRef();

  // ⬢ Build a 5-pointed 2-D star and extrude it into 3-D
  const geometry = useMemo(() => {
    const spikes = 5;
    const outer = size;
    const inner = size * 0.4;
    const shape = new THREE.Shape();
    let rot = Math.PI * 1.5;           // start at top
    const step = Math.PI / spikes;

    shape.moveTo(Math.cos(rot) * outer, Math.sin(rot) * outer);
    for (let i = 0; i < spikes; i++) {
      rot += step;
      shape.lineTo(Math.cos(rot) * inner, Math.sin(rot) * inner);
      rot += step;
      shape.lineTo(Math.cos(rot) * outer, Math.sin(rot) * outer);
    }

    return new THREE.ExtrudeGeometry(shape, {
      depth: size * 0.4,
      bevelEnabled: false,
    });
  }, [size]);

  // 🔄 Rotate on every animation frame
  useFrame((_, delta) => {
    mesh.current.rotation.y += delta * speed;   // horizontal spin
    mesh.current.rotation.x += delta * speed * 0.4; // slight tumble
  });

  return (
    <mesh ref={mesh} geometry={geometry} castShadow receiveShadow>
      <meshStandardMaterial
        color="#FFD700"             // gold
        metalness={0.7}
        roughness={0.2}
      />
    </mesh>
  );
}
