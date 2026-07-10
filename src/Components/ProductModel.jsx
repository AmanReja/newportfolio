import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function ProductModel({ color }) {
  const { scene } = useGLTF("/drone.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.color.set(color); // ✅ change color
      }
    });
  }, [scene, color]);

  return <primitive object={scene} scale={3} />;
}