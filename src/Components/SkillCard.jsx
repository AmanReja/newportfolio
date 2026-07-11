import React, { useState } from "react";
import {
  Cpu,
  Code2,
  Server,
  Database,
  Terminal,
  Globe,
  Layers,
  Smartphone,
  GitBranch,
//   Figma,
PencilRuler,
  Boxes,
  FileCode,
  Layout,
  HardDrive,
  Sparkles,
  Zap,
} from "lucide-react";

const skillsData = [
  // Outer Orbit (Frontend & Mobile)
  { name: "React.js", category: "Frontend", level: "92%", icon: Code2, orbit: "outer" },
  { name: "Vue.js", category: "Frontend", level: "80%", icon: Layers, orbit: "outer" },
  { name: "JavaScript", category: "Frontend", level: "95%", icon: FileCode, orbit: "outer" },
  { name: "HTML5", category: "Frontend", level: "98%", icon: Globe, orbit: "outer" },
  { name: "CSS3", category: "Frontend", level: "95%", icon: Layout, orbit: "outer" },
  { name: "Tailwind", category: "Frontend", level: "90%", icon: Sparkles, orbit: "outer" },
  { name: "Bootstrap", category: "Frontend", level: "85%", icon: Boxes, orbit: "outer" },
  { name: "React Native", category: "Mobile", level: "85%", icon: Smartphone, orbit: "outer" },

  // Inner Orbit (Backend, DB & Tools)
  { name: "Node.js", category: "Backend", level: "88%", icon: Server, orbit: "inner" },
  { name: "Express.js", category: "Backend", level: "85%", icon: Cpu, orbit: "inner" },
  { name: "PHP", category: "Backend", level: "80%", icon: Terminal, orbit: "inner" },
  { name: "MongoDB", category: "Database", level: "84%", icon: Database, orbit: "inner" },
  { name: "MySQL", category: "Database", level: "86%", icon: HardDrive, orbit: "inner" },
  { name: "Git & GitHub", category: "Tools", level: "90%", icon: GitBranch, orbit: "inner" },
  { name: "Figma", category: "Tools", level: "82%", icon: PencilRuler , orbit: "inner" },
  { name: "WordPress", category: "CMS", level: "85%", icon: Zap, orbit: "inner" },
];

export default function SkillCard() {
  const [activeSkill, setActiveSkill] = useState(skillsData[0]);
  const [isPaused, setIsPaused] = useState(false);

  const outerSkills = skillsData.filter((s) => s.orbit === "outer");
  const innerSkills = skillsData.filter((s) => s.orbit === "inner");

  return (
    <section id="skills" className="relative min-h-screen w-full bg-[#05050f] flex flex-col items-center justify-center overflow-hidden py-20">
      {/* Dynamic Keyframe Injection for Counter-Rotation */}
      <style>{`
        @keyframes clockSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes counterClockSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-clock {
          animation: clockSpin 35s linear infinite;
        }
        .animate-counter-clock {
          animation: counterClockSpin 35s linear infinite;
        }
        .animate-reverse-orbit {
          animation: counterClockSpin 25s linear infinite;
        }
        .animate-reverse-orbit-counter {
          animation: clockSpin 25s linear infinite;
        }
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>

      {/* Cyber Background Glow & Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(249,115,22,0.12),transparent)] pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Header */}
      <div className="relative z-10 text-center mb-8 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full text-orange-400 text-xs font-mono uppercase tracking-[0.2em] mb-3">
          <Cpu size={14} className="animate-spin" /> SYSTEM_SKILLS_CORE
        </div>
        <h2
          className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          TECHNICAL <span className="text-orange-500">MATRIX</span>
        </h2>
        <p className="text-gray-400 font-mono text-xs mt-2 tracking-widest uppercase">
          // HOVER TO PAUSE ORBIT & INSPECT NODE DATA
        </p>
      </div>

      {/* Main Clock Wheel Container */}
      <div
        className="relative flex items-center justify-center w-[340px] h-[340px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => {
          setIsPaused(false);
        }}
      >
        {/* Clock Tick Marks Decorator */}
        <div className="absolute inset-0 rounded-full border border-orange-500/10 pointer-events-none" />
        <div className="absolute inset-[-20px] sm:inset-[-30px] rounded-full border border-orange-500/20 border-dashed pointer-events-none animate-pulse" />

        {/* Radar Scanning Clock Line */}
        <div
          className={`absolute w-1/2 h-[2px] bg-gradient-to-r from-transparent via-orange-500 to-orange-400 top-1/2 left-1/2 origin-left pointer-events-none ${
            isPaused ? "paused" : ""
          } animate-clock`}
          style={{ boxShadow: "0 0 15px rgba(249,115,22,0.8)" }}
        />

        {/* ---------------- OUTER ORBIT (Clockwise) ---------------- */}
        <div
          className={`absolute inset-0 rounded-full animate-clock ${
            isPaused ? "paused" : ""
          }`}
        >
          {outerSkills.map((skill, index) => {
            const angle = (index / outerSkills.length) * 360;
            const radius = 46; // Radius percentage
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            const Icon = skill.icon;
            const isSelected = activeSkill.name === skill.name;

            return (
              <div
                key={skill.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${x}%`, top: `${y}%` }}
                onMouseEnter={() => setActiveSkill(skill)}
              >
                {/* Counter-rotation wrapper keeps text upright */}
                <div
                  className={`animate-counter-clock ${
                    isPaused ? "paused" : ""
                  }`}
                >
                  <div
                    className={`relative flex items-center justify-center p-2.5 sm:p-3.5 rounded-xl border transition-all duration-300 backdrop-blur-md ${
                      isSelected
                        ? "bg-orange-500 text-black border-orange-400 scale-125 shadow-[0_0_25px_rgba(249,115,22,0.8)] z-30"
                        : "bg-black/80 text-orange-400 border-orange-500/30 hover:border-orange-400 hover:scale-110"
                    }`}
                  >
                    <Icon size={18} />

                    {/* Node Label Tooltip */}
                    <span
                      className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[9px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-black/90 border border-orange-500/40 text-orange-300 whitespace-nowrap transition-opacity duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------- INNER ORBIT (Counter-Clockwise) ---------------- */}
        <div
          className={`absolute inset-[18%] rounded-full border border-orange-500/10 animate-reverse-orbit ${
            isPaused ? "paused" : ""
          }`}
        >
          {innerSkills.map((skill, index) => {
            const angle = (index / innerSkills.length) * 360;
            const radius = 45; // Radius percentage
            const x = 50 + radius * Math.cos((angle * Math.PI) / 180);
            const y = 50 + radius * Math.sin((angle * Math.PI) / 180);

            const Icon = skill.icon;
            const isSelected = activeSkill.name === skill.name;

            return (
              <div
                key={skill.name}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                style={{ left: `${x}%`, top: `${y}%` }}
                onMouseEnter={() => setActiveSkill(skill)}
              >
                {/* Counter-rotation to keep icons upright */}
                <div
                  className={`animate-reverse-orbit-counter ${
                    isPaused ? "paused" : ""
                  }`}
                >
                  <div
                    className={`relative flex items-center justify-center p-2 sm:p-3 rounded-lg border transition-all duration-300 backdrop-blur-md ${
                      isSelected
                        ? "bg-orange-500 text-black border-orange-400 scale-125 shadow-[0_0_25px_rgba(249,115,22,0.8)] z-30"
                        : "bg-black/90 text-orange-400/80 border-orange-500/20 hover:border-orange-400 hover:scale-110"
                    }`}
                  >
                    <Icon size={16} />

                    {/* Tooltip */}
                    <span
                      className={`absolute -bottom-6 left-1/2 -translate-x-1/2 text-[8px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-black border border-orange-500/40 text-orange-300 whitespace-nowrap transition-opacity duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      {skill.name}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ---------------- CENTER HUD TELEMETRY CORE ---------------- */}
        <div className="relative z-20 flex flex-col items-center justify-center w-36 h-36 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full bg-black/90 border-2 border-orange-500/60 backdrop-blur-xl shadow-[0_0_40px_rgba(249,115,22,0.25)] p-4 text-center">
          {/* Cyber HUD Corner Trims */}
          <div className="absolute top-2 left-2 w-2 h-2 border-l border-t border-orange-400" />
          <div className="absolute top-2 right-2 w-2 h-2 border-r border-t border-orange-400" />
          <div className="absolute bottom-2 left-2 w-2 h-2 border-l border-b border-orange-400" />
          <div className="absolute bottom-2 right-2 w-2 h-2 border-r border-b border-orange-400" />

          {/* Icon */}
          <div className="p-2 sm:p-3 bg-orange-500/10 rounded-full border border-orange-500/30 text-orange-400 mb-1 sm:mb-2 animate-bounce">
            {React.createElement(activeSkill.icon, { size: 22 })}
          </div>

          {/* Skill Title */}
          <h3 className="text-xs sm:text-base font-black text-white uppercase tracking-wider font-mono">
            {activeSkill.name}
          </h3>

          {/* Category */}
          <p className="text-[9px] sm:text-[10px] font-mono text-orange-400/80 uppercase tracking-widest">
            [{activeSkill.category}]
          </p>

          {/* Level Progress Indicator */}
          <div className="w-full mt-2 sm:mt-3 px-2">
            <div className="flex justify-between text-[8px] sm:text-[9px] font-mono text-gray-400 mb-1">
              <span>PROFICIENCY</span>
              <span className="text-orange-400">{activeSkill.level}</span>
            </div>
            <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden border border-orange-500/30">
              <div
                className="h-full bg-gradient-to-r from-orange-600 to-orange-400 transition-all duration-500"
                style={{ width: activeSkill.level }}
              />
            </div>
          </div>

          {/* System Status Indicator */}
          <span className="mt-2 text-[7px] sm:text-[8px] font-mono text-orange-500/60 uppercase tracking-widest animate-pulse">
            {isPaused ? "// STREAM_PAUSED" : "// STREAM_ACTIVE"}
          </span>
        </div>
      </div>
    </section>
  );
}