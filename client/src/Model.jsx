// src/components/Model.jsx  – gold coin + halo
import * as THREE from "three";
import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

export default function Model({
  url = "/models/myModel.glb",
  scale = 1,
  spin = 0.8,
}) {
  const { scene } = useGLTF(url);       // loads geometry & (ignored) embedded mats
  const ref = useRef(scene);

  /* 1️⃣  Override every mesh’s material with shiny-gold */
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material = new THREE.MeshStandardMaterial({
          color: 0xffd700,      // rich gold
          metalness: 1,
          roughness: 0.22,
          envMapIntensity: 1.2, // brighter reflections
        });
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  /* 2️⃣  Keep it spinning */
  useFrame((_, dt) => {
    if (ref.current) ref.current.rotation.y += dt * spin;
  });

  return (
    <>
      {/* ✨ Radial bloom / halo */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          intensity={0.7}   /* raise for stronger glow */
        />
      </EffectComposer>

      {/* 🌇 HDR environment for realistic metal reflections */}
      <Environment preset="city" />

      {/* 🪙 The coin itself */}
      <primitive
        ref={ref}
        object={scene}
        scale={Array.isArray(scale) ? scale : [scale, scale, scale]}
      />
    </>
  );
}

useGLTF.preload("/models/myModel.glb");
