import React from "react";
import { GraduationCap, Briefcase, Code2, Globe2, Terminal, Award } from "lucide-react";

export default function About() {
  const experiences = [
    {
      company: "Busybox Technology (Fintech)",
      role: "Full Stack Developer",
      date: "July 2025 – Present",
      desc: "Architecting cross-platform invoice & billing systems. Specializing in GST logic, customer management, and automated PDF generation.",
    },
    {
      company: "Lead Height Company",
      role: "Frontend Developer",
      date: "March 2025 – July 2025",
      desc: "Developed high-performance web applications using React.js. Focused on responsive design and rigorous code review standards.",
    },
  ];

  const education = [
    { school: "Barasat Government College", degree: "B.A. (Arts)", year: "2022", grade: "A++" },
    { school: "WBCHSE", degree: "Higher Secondary", year: "2019", grade: "A" },
    { school: "WBBSE", degree: "Madhyamik", year: "2016", grade: "A" },
  ];

  return (
    <section id="about" className="min-h-screen py-24 px-6 relative bg-[#05050f] overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-20 right-10 text-[12rem] font-black text-orange-500 leading-none select-none">
          INFO
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="flex items-center gap-4 mb-16">
          <div className="p-3 bg-orange-500/10 border border-orange-500/20 rounded-lg">
            <Terminal className="text-orange-500" size={24} />
          </div>
          <div>
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter italic">
              System_Identity
            </h2>
            <div className="h-1 w-32 bg-orange-500 mt-1" />
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* LEFT COLUMN: Summary & Languages */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-white/5 border-l-4 border-orange-500 backdrop-blur-md">
              <p className="text-xl text-gray-300 leading-relaxed font-medium">
                MERN Stack Developer passionate about building <span className="text-white font-bold">scalable web applications</span>. 
                Experienced in <span className="text-orange-500">Fintech solutions</span>, API architecture, 
                and performance optimization.
              </p>
            </div>

            {/* Languages HUD */}
            <div className="p-6 border border-white/10 bg-black/40">
              <h3 className="flex items-center gap-2 text-orange-500 font-bold text-xs uppercase tracking-[0.3em] mb-6">
                <Globe2 size={14} /> Communication_Protocols
              </h3>
              <div className="space-y-4">
                {["Bengali", "Hindi", "English"].map((lang) => (
                  <div key={lang} className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm font-mono">{lang}</span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className={`h-1 w-6 ${i < 4 ? 'bg-orange-500' : 'bg-white/10'}`} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Experience & Education */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Experience Timeline */}
            <div>
              <h3 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest mb-6">
                <Briefcase size={18} className="text-orange-500" /> Operational_History
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, i) => (
                  <div key={i} className="group relative pl-8 border-l border-white/10">
                    <div className="absolute left-[-5px] top-0 w-2 h-2 bg-orange-500 rounded-full group-hover:scale-150 transition-transform" />
                    <span className="text-[10px] font-mono text-orange-500/60 uppercase">{exp.date}</span>
                    <h4 className="text-lg font-black text-white mt-1 group-hover:text-orange-500 transition-colors">
                      {exp.company}
                    </h4>
                    <p className="text-xs text-gray-400 font-bold uppercase mb-2 tracking-wider">{exp.role}</p>
                    <p className="text-sm text-gray-500 max-w-xl">{exp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Grid */}
            <div>
              <h3 className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest mb-6">
                <GraduationCap size={18} className="text-orange-500" /> Academic_Calibration
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                {education.map((edu, i) => (
                  <div key={i} 
                    className="p-4 bg-white/5 border border-white/10 hover:border-orange-500/50 transition-all group"
                    style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
                  >
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-[10px] font-mono text-orange-500">{edu.year}</span>
                      <Award size={14} className="text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-xs font-black text-white uppercase mb-1">{edu.school}</h4>
                    <p className="text-[10px] text-gray-500 font-bold">{edu.degree}</p>
                    <p className="mt-2 text-xs font-mono text-white">GRADE: {edu.grade}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Bottom Scanline */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />
    </section>
  );
}