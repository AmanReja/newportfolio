import { Cpu } from "lucide-react";

export const RobotStatCard = ({ value, label }) => {
  return (
    <div className="group animate-scan relative w-52 h-40 transition-all duration-500 hover:-translate-y-2">
      {/* Main Card Body with Clipped Corner */}
      <div
        className="
          relative h-full w-full
          bg-black/40 backdrop-blur-xl
          border border-orange-500/30
          rounded-tr-3xl rounded-bl-xl rounded-tl-md rounded-br-md
          p-5 overflow-hidden
          transition-all duration-500
          group-hover:border-orange-500/80
          group-hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]
        "
        style={{
          clipPath: "polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)",
        }}
      >
        {/* Animated Background Circuit Pattern */}
        <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
          <svg width="100%" height="100%">
            <pattern
              id="pattern-circles"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 10h20M10 0v20"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
            <rect width="100%" height="100%" fill="url(#pattern-circles)" />
          </svg>
        </div>

        {/* Hover Laser Scan Line */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-orange-500 shadow-[0_0_15px_#f97316] -translate-y-10 group-hover:animate-scan" />

        {/* Header Section */}
        <div className="relative flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-orange-500/10 border border-orange-500/20">
              <Cpu
                size={14}
                className="text-orange-500 group-hover:rotate-[360deg] transition-transform duration-1000"
              />
            </div>
            <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-orange-500/70">
              Data_Log
            </span>
          </div>
          {/* Small decorative "online" dot */}
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
        </div>

        {/* Value Section */}
        <div className="relative mt-4">
          <h2 
            className="text-4xl font-black text-white tracking-tighter"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {value}
          </h2>
          <div className="flex items-center gap-2 mt-1">
            <div className="h-[2px] w-4 bg-orange-500" />
            <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-gray-400 group-hover:text-orange-200 transition-colors">
              {label}
            </p>
          </div>
        </div>

        {/* Bottom Corner Accent */}
        <div className="absolute bottom-2 right-2 flex gap-1">
          <div className="w-1 h-1 bg-orange-500/40" />
          <div className="w-3 h-1 bg-orange-500/40" />
        </div>
      </div>

      {/* Outer Shadow Glow (Hidden by default) */}
      <div className="absolute -inset-1 bg-orange-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
    </div>
  );
};