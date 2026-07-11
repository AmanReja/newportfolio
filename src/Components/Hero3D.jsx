import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars, Environment } from "@react-three/drei";
import Scene1 from "./Scene1";

import { useEffect, useRef, useState } from "react";
import { Send, Cpu,LayoutGrid,ArrowRight } from "lucide-react";
import {RobotStatCard} from "../Components/RobotStatCard"
import { ProjectChipPopup } from "./ProjectChipPopup";
import Contact from "./Contact";


export default function Hero3D() {
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
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(249,115,22,0.18),transparent)]" />
<div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(251,146,60,0.08),transparent)]" />
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
        <Scene1 />
        
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
        






        {/* Name */}
<div className="absolute inset-0 flex flex-col 
    justify-start pt-20     /* Mobile: Start at top with 20px padding */
    sm:justify-center       /* Desktop: Center it vertically */
    sm:pt-0                 /* Desktop: Remove that top padding */
    items-center 
    pointer-events-none"
>
  <div className="relative w-full max-w-7xl px-10">
    {/* Top labels */}
   

    {/* Giant Heading */}
    <h1
      className="uppercase font-black leading-none select-none"
      style={{
        fontSize: "clamp(3rem,8vw,14rem)",
        fontFamily: "'Syne', sans-serif",
        letterSpacing: "-0.08em",
        lineHeight: 0.8,
        background:
          "linear-gradient(180deg,#ffffff 0%,#d9d9d9 45%,#bfbfbf 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      HI, I'M
      <br />
      AMAN
    </h1>
  </div>
   <div className="relative w-full max-w-7xl px-10">
    {/* Top labels */}
   
<br />
    {/* Giant Heading */}
    <h1
      className="uppercase font-black leading-none select-none"
      style={{
        fontSize: "clamp(2rem,1vw,1rem)",
        fontFamily: "'Syne', sans-serif",
        letterSpacing: "-0.08em",
        lineHeight: 0.8,
        background:
          "linear-gradient(180deg,#ffffff 0%,#d9d9d9 45%,#bfbfbf 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
     I am a fullstack Developer
      
    </h1>
  </div>
 <div className="relative w-full max-w-7xl px-10">
  <a href="tel:+919749404582">
    <button
  className="
    group
    relative
    mt-5
    self-start
    overflow-hidden
    px-5
    py-2.5
    rounded-lg
    border
    border-orange-500/60
    bg-black/80
    backdrop-blur-md
    text-white
    text-sm
    font-semibold
    tracking-[0.15em]
    uppercase
    transition-all
    duration-500
    hover:scale-105
    hover:border-orange-400
    hover:shadow-[0_0_25px_rgba(249,115,22,0.45)]
    pointer-events-auto
  "
>
  {/* Animated Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500/30 to-transparent -translate-x-full group-hover:translate-x-full duration-1000" />

  {/* Corner Borders */}
  <span className="absolute left-1 top-1 w-2 h-2 border-l border-t border-orange-500" />
  <span className="absolute right-1 top-1 w-2 h-2 border-r border-t border-orange-500" />
  <span className="absolute left-1 bottom-1 w-2 h-2 border-l border-b border-orange-500" />
  <span className="absolute right-1 bottom-1 w-2 h-2 border-r border-b border-orange-500" />

  <div className="relative flex items-center gap-2">
    <Cpu
      size={14}
      className="text-orange-400 group-hover:rotate-180 transition-transform duration-700"
    />

    <span>Contact Me</span>

    <Send
      size={14}
      className="group-hover:translate-x-1 transition-transform"
    />
  </div>

  <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-orange-400 to-transparent animate-pulse" />
</button>
  </a>


 </div>

<ProjectChipPopup>
 <button className="group relative pointer-events-auto mt-6">
      {/* Outer Glow Layer */}
      <div className="absolute -inset-2 bg-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* The Button Shape */}
      <div
        className="
          relative
          flex items-center gap-4
          px-8 py-4
          bg-black/60 backdrop-blur-xl
          border border-orange-500/40
          transition-all duration-300
          group-hover:border-orange-400
          group-hover:translate-x-1
        "
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 100% 70%, 90% 100%, 0% 100%, 0% 30%)",
        }}
      >
        {/* Animated Inner Glitch/Scanline */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse" />

        {/* Left Indicator bar */}
        <div className="w-1 h-8 bg-orange-500/50 group-hover:bg-orange-500 transition-colors" />

        <div className="flex flex-col items-start">
          <span className="text-[10px] font-bold tracking-[0.3em] text-orange-500/70 uppercase">
            Execute_Link
          </span>
          <span className="text-xl font-black text-white uppercase tracking-wider flex items-center gap-3">
            Project Showcase
            <LayoutGrid size={20} className="text-orange-500 group-hover:rotate-90 transition-transform duration-500" />
          </span>
        </div>

        {/* Right Arrow that slides in */}
        <div className="relative overflow-hidden w-0 group-hover:w-8 transition-all duration-500 ease-out">
          <ArrowRight className="text-orange-400" />
        </div>

        {/* Decorative corner brackets */}
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-orange-500/0 group-hover:border-orange-500/100 transition-all" />
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-orange-500/0 group-hover:border-orange-500/100 transition-all" />
      </div>

      {/* Decorative "Status" text outside the button */}
      <div className="absolute -bottom-6 left-2 overflow-hidden">
        <p className="text-[8px] font-mono text-orange-500/40 uppercase tracking-widest animate-typing">
          // Init: fetch_portfolio_v2.0...
        </p>
      </div>
    </button>
</ProjectChipPopup>


   <div className="mt-8 flex flex-wrap gap-5">
    <RobotStatCard value="2+" label="Years Experience" />
    <RobotStatCard value="30+" label="Projects" />
    <RobotStatCard value="Remote" label="Available" />
  </div>

</div>




 

     

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