import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import ProductModel from "./ProductModel";
import { useState } from "react";

export default function ProductShowcase() {
  const [color, setColor] = useState("orange");

  return (
    <div className="w-full h-screen bg-black text-white flex flex-col">
      
      {/* 3D Canvas */}
      <div className="flex-1">
        <Canvas camera={{ position: [0, 0, 4] }}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[2, 2, 2]} />

          <ProductModel color={color} />

          <Environment preset="city" />
          <OrbitControls />
        </Canvas>
      </div>

      {/* Controls */}
      <div className="p-6 flex justify-center gap-4">
        {["orange", "blue", "green", "red"].map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className="w-10 h-10 rounded-full border"
            style={{ background: c }}
          />
        ))}
      </div>
    </div>
  );
}