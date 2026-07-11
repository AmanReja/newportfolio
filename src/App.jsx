import Hero3D from "./Components/Hero3D";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

import About from "./Components/About";
import SkillCard from "./Components/SkillCard";

export default function App() {
  return (
    <div  className="relative min-h-screen bg-[#05050f] text-white overflow-x-hidden">
      
      <Navbar />

      {/* Global Grid Background */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.04] -z-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Global glow background */}
      <div className="fixed inset-0 -z-20 bg-[#05050f]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(100,80,255,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_60%,rgba(0,220,180,0.07),transparent)]" />
      </div>

      {/* Sections */}
      <section className="h-[100vh] relative">
        <Hero3D />
        
      </section>

      {/* <Projects /> */}
      <SkillCard/>
       <About/>
      <Contact />

     
    </div>
  );
}