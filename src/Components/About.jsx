import React from "react";
import { motion } from "framer-motion";
import { 
  GraduationCap, Briefcase, Terminal, Award, 
  Globe2, Zap, ShieldCheck, Activity 
} from "lucide-react";

export default function About() {
  const experiences = [
    {
      company: "Busybox Technology (Fintech)",
      role: "Full Stack Developer",
      date: "July 2025 – Present",
      desc: "Architecting cross-platform invoice & billing systems. Specializing in GST logic and automated PDF generation.",
    },
    {
      company: "Lead Height Company",
      role: "Frontend Developer",
      date: "March 2025 – July 2025",
      desc: "Developed high-performance web applications using React.js. Focused on responsive design and rigorous code review.",
    },
  ];

  const education = [
    { school: "Barasat Govt College", degree: "B.A. (Arts)", year: "2022", grade: "A++" },
    { school: "WBCHSE", degree: "Higher Secondary", year: "2019", grade: "A" },
    { school: "WBBSE", degree: "Madhyamik", year: "2016", grade: "A" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="min-h-screen py-24 px-6 relative bg-[#05050f] overflow-hidden">
      {/* Background HUD Decor */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-[-5%] text-[15rem] font-black text-orange-500/5 leading-none select-none italic">
          ABOUT
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-[radial-gradient(circle_at_20%_80%,rgba(249,115,22,0.05),transparent)]" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto relative z-10"
      >
        {/* Section Heading */}
        <div className="flex flex-col mb-20">
            <div className="flex items-center gap-3 mb-4">
                <Activity className="text-orange-500 animate-pulse" size={20} />
                <span className="text-orange-500 font-mono text-xs uppercase tracking-[0.4em]">Biometric_Verification_Success</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter italic">
                System<span className="text-orange-500">_</span>Identity
            </h2>
            <div className="h-1 w-64 bg-gradient-to-r from-orange-500 to-transparent mt-2" />
        </div>

        <div className="grid lg:grid-cols-12 gap-16">
          {/* LEFT COLUMN: Summary & Languages */}
          <div className="lg:col-span-5 space-y-12">
            
            {/* Bio Card */}
            <motion.div 
              variants={itemVariants}
              className="relative p-1 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-orange-500/50 to-transparent opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative p-8 bg-black/80 backdrop-blur-xl border-l-4 border-orange-500 shadow-[20px_20px_50px_rgba(0,0,0,0.5)]">
                <Zap className="text-orange-500 mb-4" size={32} />
                <p className="text-2xl text-gray-300 leading-tight font-medium">
                  MERN Stack Developer architecting <span className="text-white font-bold underline decoration-orange-500/50">scalable fintech solutions</span>. 
                  Focused on high-performance API logic and premium UI execution.
                </p>
              </div>
            </motion.div>

            {/* Languages HUD */}
            <motion.div variants={itemVariants} className="p-8 border border-white/5 bg-white/[0.02] backdrop-blur-sm relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-2 opacity-20"><Globe2 size={40} className="text-orange-500" /></div>
              <h3 className="text-orange-500 font-bold text-xs uppercase tracking-[0.3em] mb-8 flex items-center gap-2">
                <ShieldCheck size={14} /> Communication_Modules
              </h3>
              <div className="space-y-6">
                {["Bengali", "Hindi", "English"].map((lang, idx) => (
                  <div key={lang} className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-white uppercase">{lang}</span>
                      <span className="text-orange-500">{(idx === 0 ? "100%" : idx === 1 ? "90%" : "85%")}</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 overflow-hidden">
                        <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: idx === 0 ? "100%" : idx === 1 ? "90%" : "85%" }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className="h-full bg-orange-500 shadow-[0_0_10px_#f97316]"
                        />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Experience & Education */}
          <div className="lg:col-span-7 space-y-16">
            
            {/* Experience Timeline */}
            <div>
              <h3 className="flex items-center gap-4 text-white font-black text-xl uppercase tracking-widest mb-10">
                <Briefcase size={24} className="text-orange-500" /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Operational_History</span>
              </h3>
              <div className="space-y-12">
                {experiences.map((exp, i) => (
                  <motion.div 
                    variants={itemVariants}
                    key={i} 
                    className="group relative pl-10 border-l-2 border-orange-500/20 hover:border-orange-500 transition-colors"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-[#05050f] border-2 border-orange-500 rounded-full group-hover:scale-125 group-hover:bg-orange-500 transition-all shadow-[0_0_15px_rgba(249,115,22,0.5)]" />
                    <div className="mb-1 text-[10px] font-mono text-orange-500 bg-orange-500/10 w-fit px-2 py-0.5 rounded">
                        {exp.date}
                    </div>
                    <h4 className="text-2xl font-black text-white group-hover:tracking-wider transition-all">
                      {exp.company}
                    </h4>
                    <p className="text-sm text-orange-400 font-bold uppercase mb-3 tracking-tighter opacity-80">{exp.role}</p>
                    <p className="text-gray-400 text-base leading-relaxed max-w-xl group-hover:text-gray-200 transition-colors">
                        {exp.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Education Grid */}
            <div>
              <h3 className="flex items-center gap-4 text-white font-black text-xl uppercase tracking-widest mb-10">
                <GraduationCap size={24} className="text-orange-500" /> 
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">Academic_Calibration</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {education.map((edu, i) => (
                  <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                    key={i} 
                    className="p-6 bg-white/[0.03] border border-white/10 hover:border-orange-500/50 transition-all relative group overflow-hidden"
                    style={{ clipPath: "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)" }}
                  >
                    <div className="absolute top-0 right-0 w-8 h-8 bg-orange-500/10 flex items-center justify-center">
                        <Award size={14} className="text-orange-500" />
                    </div>
                    <span className="text-[10px] font-mono text-orange-500/60 block mb-2">{edu.year}</span>
                    <h4 className="text-sm font-black text-white uppercase mb-1 leading-tight">{edu.school}</h4>
                    <p className="text-[10px] text-gray-500 font-bold mb-4">{edu.degree}</p>
                    <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                        <span className="text-[10px] text-gray-400">RESULT</span>
                        <span className="text-xs font-mono font-bold text-white bg-orange-500/20 px-2 py-0.5">{edu.grade}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </motion.div>

      {/* Decorative Corner Borders */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t-2 border-l-2 border-orange-500/20 pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b-2 border-r-2 border-orange-500/20 pointer-events-none" />
    </section>
  );
}