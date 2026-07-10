import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
import Scene2 from "./Scene2";
import { useEffect, useRef, useState } from "react";

export default function Hero2() {
  const textRef = useRef();
  const badgeRef = useRef();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      {/* Animated radial bg */}
      <div className="absolute inset-0 bg-[#05050f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(100,80,255,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(0,220,180,0.07),transparent)]" />
      </div>

      {/* Grid lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Three.js Canvas */}
      <Canvas
        className="absolute inset-0"
         camera={{ position: [0, 1, 5], fov: 55 }}  
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, 3, 2]} intensity={0.8} color="#7c6ff7" />
        <pointLight position={[5, -3, 2]} intensity={0.5} color="#00e5c3" />
        {/* <Stars radius={80} depth={50} count={3000} factor={3} saturation={0} fade speed={0.5} /> */}
        <Environment preset="night" />
        <Scene2 />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 1.8}
          minPolarAngle={Math.PI / 3}
          autoRotate={false}
        />
      </Canvas>

      {/* Overlay Text — left aligned, vertically centered */}
      <div
        className="absolute inset-0 flex flex-col justify-center pointer-events-none"
        style={{ padding: "0 6vw" }}
      >
        {/* Badge */}
        <div
          className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase"
            style={{ color: "#00e5c3" }}
          >
            Available for work
          </span>
        </div>

        {/* Name */}
        <h1
          className={`font-black leading-none mb-4 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            fontSize: "clamp(3rem, 8vw, 6rem)",
            fontFamily: "'Syne', sans-serif",
            letterSpacing: "-0.03em",
            transitionDelay: "350ms",
          }}
        >
          Hi, I'm
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #fff 0%, #7c6ff7 50%, #00e5c3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Aman
          </span>{" "}
          {/* <span style={{ WebkitTextFillColor: "initial" }}>👋</span> */}
        </h1>

        {/* Sub */}
        <p
          className={`text-lg font-light mb-8 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{
            color: "#8884aa",
            maxWidth: "380px",
            lineHeight: 1.7,
            transitionDelay: "500ms",
          }}
        >
          Full Stack Developer crafting{" "}
          <span className="text-white font-medium">React</span> frontends &{" "}
          <span className="text-white font-medium">Node.js</span> backends that scale.
        </p>

        {/* CTAs */}
        <div
          className={`flex gap-3 pointer-events-auto transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "650ms" }}
        >
          
        
          
    
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: "linear-gradient(to bottom, #7c6ff7, transparent)" }}
        />
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Scroll</span>
      </div>
    </div>
  
  );
}