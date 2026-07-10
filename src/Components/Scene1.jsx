import { useRef, useEffect, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function Scene1() {
  const modelRef = useRef();
  const { scene } = useGLTF("/spider.glb");
  const [scrollY, setScrollY] = useState(0);
  const lerpRef = useRef({ posY: 0, rotY: 0 });

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.envMapIntensity = 1.5;
      }
    });
  }, [scene]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.body.scrollHeight - window.innerHeight;
      setScrollY(scrollTop / Math.max(height, 1));
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

useFrame((state) => {
  if (!modelRef.current) return;

  const t = state.clock.getElapsedTime();

  const baseY = -1; // 👈 move character down (try -3, -4, etc.)

  const targetPosY =
    baseY - scrollY * 4 + Math.sin(t * 0.4) * 0.06;

  const targetRotY = scrollY * Math.PI * 4;

  lerpRef.current.posY += (targetPosY - lerpRef.current.posY) * 0.05;
  lerpRef.current.rotY += (targetRotY - lerpRef.current.rotY) * 0.05;

  modelRef.current.position.y = lerpRef.current.posY;
  modelRef.current.rotation.y = lerpRef.current.rotY;

  modelRef.current.rotation.z = Math.sin(t * 0.4) * 0.015;
});

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={2.6}           // ← bigger, like your screenshot
      position={[1.8, 0, 0]}  // ← shifted right, slightly down so it bleeds top
    />
  );
}