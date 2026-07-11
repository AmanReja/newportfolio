import React, { useState } from "react";
import { Cpu, Menu, X, Zap } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "Skills", href: "#skills" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] px-6 py-4">
      {/* Desktop & Mobile Container */}
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">
        
        {/* Logo / System ID */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="relative">
            <Cpu className="text-orange-500 w-6 h-6 group-hover:rotate-180 transition-transform duration-500" />
            <div className="absolute inset-0 bg-orange-500 blur-md opacity-20 group-hover:opacity-50 transition-opacity" />
          </div>
          <h1 className="text-xl font-black tracking-tighter text-white uppercase">
            Aman<span className="text-orange-500">.Reja</span>
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.3em] text-gray-400 hover:text-orange-500 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-orange-500 transition-all group-hover:w-full" />
            </a>
          ))}
          {/* Decorative System Status */}
          <div className="flex items-center gap-2 ml-4 px-3 py-1 border border-orange-500/20 bg-orange-500/5 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-[8px] font-mono text-orange-500/70 uppercase">System Online</span>
          </div>
        </div>

        {/* Hamburger Button (Mobile Only) */}
        <button
          className="md:hidden relative p-2 text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
          {/* Button Glow */}
          <div className="absolute inset-0 bg-orange-500 blur-lg opacity-20" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/95 backdrop-blur-xl transition-all duration-500 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Decorative Background for Mobile Menu */}
        <div className="absolute inset-0 opacity-5">
           <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#f97316 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        </div>

        <div className="flex flex-col items-center justify-center h-full gap-8 relative">
          {/* Close indicator for style */}
          <div className="absolute top-10 flex items-center gap-2">
            <Zap size={14} className="text-orange-500" />
            <span className="text-[10px] text-orange-500 font-mono tracking-widest uppercase">Navigation_Menu</span>
          </div>

          {navLinks.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-4xl font-black text-white uppercase tracking-widest hover:text-orange-500 transition-all transform hover:scale-110"
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Footer Info */}
          <div className="absolute bottom-10 px-6 w-full flex justify-between items-end">
            <div className="text-left">
              <p className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">// User: Guest</p>
              <p className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">// Location: 127.0.0.1</p>
            </div>
            <div className="h-px w-24 bg-orange-500/30" />
          </div>
        </div>

        {/* Mobile Menu Border Accents */}
        <span className="absolute left-4 top-4 w-6 h-6 border-l-2 border-t-2 border-orange-500/50" />
        <span className="absolute right-4 bottom-4 w-6 h-6 border-r-2 border-b-2 border-orange-500/50" />
      </div>

      {/* Bottom Scanning Line (Navbar Decoration) */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent shadow-[0_0_10px_#f97316]" />
    </nav>
  );
};

export default Navbar;