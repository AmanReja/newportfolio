import React from "react";
import { Send, Cpu, Globe } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-6 relative overflow-hidden bg-[#05050f]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Central Orange Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/10 blur-[120px] rounded-full" />
        
        {/* Vertical Scanline */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '100% 40px' }} />
        
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.02]"
             style={{ backgroundImage: 'linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>

      {/* Main Contact Card */}
      <div className="relative z-10 w-full max-w-4xl">
        
        {/* Top Header Label */}
        <div className="flex items-center gap-3 mb-8 justify-center sm:justify-start">
          <div className="h-[1px] w-12 bg-orange-500/50" />
          <Cpu size={16} className="text-orange-500 animate-pulse" />
          <span className="text-[10px] font-mono font-bold tracking-[0.4em] text-orange-500 uppercase">
            Communication_Link
          </span>
          <div className="h-[1px] w-12 bg-orange-500/50" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h2
              className="font-black leading-[0.9] text-white uppercase mb-6"
              style={{
                fontFamily: "'Syne', sans-serif",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                letterSpacing: "-0.04em",
              }}
            >
              Ready to <br />
              <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.5)" }}>
                Initialize?
              </span>
            </h2>
            
            <p className="text-gray-400 font-medium text-lg max-w-md mx-auto lg:mx-0 mb-8 leading-relaxed">
              Currently available for <span className="text-orange-500">freelance projects</span>, 
              full-time roles, and architectural collaborations.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
               {[
                 { name: "GitHub", icon: <Globe size={18}/>, link: "#" },
                 { name: "LinkedIn", icon: <Globe size={18}/>, link: "#" },
                 { name: "Twitter", icon: <Globe size={18}/>, link: "#" }
               ].map((social) => (
                 <a
                   key={social.name}
                   href={social.link}
                   className="flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/5 text-gray-400 hover:text-orange-500 hover:border-orange-500/50 transition-all duration-300"
                   style={{ clipPath: "polygon(0 0, 100% 0, 100% 70%, 85% 100%, 0 100%)" }}
                 >
                   {social.icon}
                   <span className="text-[10px] font-bold uppercase tracking-widest">{social.name}</span>
                 </a>
               ))}
            </div>
          </div>

          {/* Contact "Hardware" Box */}
          <div className="relative group">
            {/* Box Glow */}
            <div className="absolute -inset-4 bg-orange-500/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div 
              className="relative p-10 bg-black/40 backdrop-blur-xl border border-orange-500/30 rounded-2xl"
              style={{ clipPath: "polygon(0 15%, 15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%)" }}
            >
              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-4 h-4 border-l-2 border-t-2 border-orange-500" />
              <div className="absolute bottom-4 right-4 w-4 h-4 border-r-2 border-b-2 border-orange-500" />

              <h3 className="text-xs font-black text-orange-500 tracking-[0.3em] uppercase mb-8 flex items-center gap-2">
                <Globe size={14} /> System_Endpoint
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest mb-1">Direct_Mail</p>
                  <a href="mailto:amanmolla742@gmail.com" className="text-xl sm:text-2xl font-black text-white hover:text-orange-500 transition-colors break-all">
                    amanmolla742@gmail.com
                  </a>
                </div>

                <button className="w-full group/btn relative overflow-hidden flex items-center justify-center gap-3 px-8 py-4 bg-orange-500 text-black font-black uppercase tracking-widest text-sm hover:bg-orange-400 transition-all">
                  <span>Transmit Message</span>
                  <Send size={18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  
                  {/* Subtle scanline on button */}
                  <div className="absolute inset-0 bg-white/20 -translate-y-full group-hover/btn:translate-y-full duration-[1.5s] transition-transform" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer Readout */}
      <footer className="absolute bottom-10 left-0 w-full px-10 flex flex-col sm:flex-row justify-between items-center gap-4 opacity-30">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
          <p className="text-[10px] font-mono text-white tracking-[0.2em] uppercase">
            Protocol: SECURE_ENCRYPTION_V4
          </p>
        </div>
        <p className="text-[10px] font-mono text-white tracking-[0.2em] uppercase text-center">
          &copy; {new Date().getFullYear()} Aman_Dev // Design_Auth: Industrial_Core
        </p>
      </footer>
    </section>
  );
}