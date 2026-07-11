import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Cpu, ExternalLink, Smartphone, MessageSquare, MapPin, Book, Heart, X } from "lucide-react";

const documents = [
  { id: "01", title: "Student Attendance", description: "React Native App", icon: <Smartphone size={14} />, link: "#" },
  { id: "02", title: "Realtime Chat", description: "Socket.io + RN", icon: <MessageSquare size={14} />, link: "https://github.com/AmanReja/chatapp" },
  { id: "03", title: "Position Tracker", description: "MERN + Socket.io", icon: <MapPin size={14} />, link: "https://github.com/AmanReja/tracker-frontend" },
  { id: "04", title: "Online Book Sale", description: "MERN Stack", icon: <Book size={14} />, link: "https://github.com/AmanReja/front-book" },
  { id: "05", title: "Minder Dating", description: "React Native", icon: <Heart size={14} />, link: "https://github.com/AmanReja/tinder-backend" },
];

export const ProjectChipPopup = ({ children }) => {
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const triggerRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = () => {
    if (isMobile) return; // Disable hover logic on mobile
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setPos({
        top: rect.top + window.scrollY + 140,
        left: rect.left+400,
      });
    }
    setHovered(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    timeoutRef.current = setTimeout(() => {
      setHovered(false);
    }, 150);
  };

  const toggleMobile = (e) => {
    if (!isMobile) return;
    e.preventDefault();
    setHovered(!hovered);
  };

  return (
    <>
      <div
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={toggleMobile} // Toggle on click for mobile
        className="inline-block pointer-events-auto"
      >
        {children}
      </div>

      {hovered &&
        createPortal(
          <>
            {/* Mobile-only backdrop */}
            {isMobile && (
              <div 
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-[9998] animate-in fade-in duration-300" 
                onClick={() => setHovered(false)}
              />
            )}

            <div
              className="fixed z-[9999] pointer-events-auto"
              style={
                isMobile
                  ? { top: "50%", left: "50%", transform: "translate(-50%, -50%)" }
                  : { top: pos.top, left: pos.left, transform: "translateY(-100%)" }
              }
              onMouseEnter={() => {
                if (!isMobile && timeoutRef.current) clearTimeout(timeoutRef.current);
              }}
              onMouseLeave={handleMouseLeave}
            >
              <div className={`relative group animate-in fade-in zoom-in-95 ${!isMobile ? 'slide-in-from-bottom-2' : ''} duration-300`}>
                
                {/* AI Chip Background Glow */}
                <div className="absolute -inset-1 bg-orange-500/20 blur-xl opacity-50" />

                {/* Main Chip Frame */}
                <div className="relative w-[90vw] sm:w-80 bg-[#0a0a0c]/95 backdrop-blur-2xl border-l-4 border-orange-500 border-r border-t border-b border-orange-500/30 rounded-r-xl rounded-tl-sm overflow-hidden shadow-2xl">
                  
                  {/* Tech Header */}
                  <div className="bg-orange-500/10 border-b border-orange-500/20 px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <Cpu size={14} className="text-orange-500 animate-pulse" />
                      <span className="text-[10px] font-mono font-black text-orange-500 tracking-widest">
                        {isMobile ? "MOBILE_ACCESS_V2" : "CORE_DRIVE://PROJ_LOG"}
                      </span>
                    </div>
                    {isMobile ? (
                      <button onClick={() => setHovered(false)} className="text-orange-500 p-1">
                        <X size={18} />
                      </button>
                    ) : (
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500/80 animate-ping" />
                    )}
                  </div>

                  {/* Project Rows */}
                  <div className="p-2 max-h-[60vh] overflow-y-auto custom-scrollbar">
                    {documents.map((doc) => (
                      <a 
                        key={doc.id}
                        href={doc.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/row relative flex items-center justify-between p-4 mb-1 rounded-md border border-transparent hover:border-orange-500/40 hover:bg-orange-500/5 transition-all"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-[9px] font-mono text-orange-500/40">{doc.id}</span>
                          <div className="text-orange-400">{doc.icon}</div>
                          <div>
                            <p className="text-[11px] font-bold text-white uppercase tracking-wider">{doc.title}</p>
                            <p className="text-[9px] text-gray-500 font-mono">{doc.description}</p>
                          </div>
                        </div>
                        <ExternalLink size={14} className="text-gray-700 group-hover/row:text-orange-500" />
                        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-transparent opacity-0 group-hover/row:opacity-100 transition-opacity" />
                      </a>
                    ))}
                  </div>

                  {/* Hardware Pins (Footer Decor) */}
                  <div className="bg-orange-500 h-8 px-4 flex items-center justify-between">
                    <span className="text-[9px] font-black text-black tracking-tighter">
                      {isMobile ? "TAP_TO_EXECUTE" : "STATUS: ACCESS_GRANTED"}
                    </span>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-4 bg-black/20 rounded-full" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line - Hidden on Mobile */}
                {!isMobile && (
                  <div className="absolute left-0 -bottom-3 w-[2px] h-3 bg-orange-500 shadow-[0_0_8px_#f97316]" />
                )}
              </div>
            </div>
          </>,
          document.body
        )}
    </>
  );
};