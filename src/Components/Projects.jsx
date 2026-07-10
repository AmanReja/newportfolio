import { useRef, useEffect } from "react";

const projects = [
  {
    tag: "Full Stack",
    title: "DevCollab Platform",
    desc: "Real-time collaboration tool with live code editing, task boards, and integrated video chat for dev teams.",
    stack: ["React", "Node.js", "Socket.io", "Redis", "PostgreSQL"],
    accent: "#7c6ff7",
  },
  {
    tag: "3D / WebGL",
    title: "Interactive 3D Portfolio",
    desc: "Scroll-driven 3D experience with React Three Fiber, GLSL shaders, GLTF robot model, and physics.",
    stack: ["Three.js", "R3F", "GLSL", "GSAP"],
    accent: "#00e5c3",
  },
  {
    tag: "Backend",
    title: "API Gateway Service",
    desc: "Scalable REST + GraphQL gateway with JWT auth, rate-limiting, and distributed tracing via OpenTelemetry.",
    stack: ["Node.js", "GraphQL", "Docker", "AWS", "Prisma"],
    accent: "#f7a26f",
  },
];

export default function Projects() {
  const sectionRef = useRef();

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-32 px-[6vw] relative"
    >
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-10 blur-[80px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, #7c6ff7, transparent)" }}
      />

      <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-3 flex items-center gap-3"
        style={{ color: "#00e5c3" }}>
        <span className="inline-block w-6 h-px bg-current" />
        My work
      </p>

      <h2
        className="font-black mb-16"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "clamp(2rem, 5vw, 3.5rem)",
          letterSpacing: "-0.03em",
          lineHeight: 1.1,
        }}
      >
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="group relative rounded-2xl p-6 transition-all duration-300 cursor-pointer hover:-translate-y-2"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.border = `1px solid ${p.accent}44`;
              e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.5), 0 0 40px ${p.accent}15`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Top accent line */}
            <div
              className="absolute top-0 left-6 right-6 h-px transition-all duration-300 opacity-0 group-hover:opacity-100"
              style={{ background: `linear-gradient(90deg, transparent, ${p.accent}, transparent)` }}
            />

            <span
              className="inline-block text-xs font-bold tracking-[0.1em] uppercase px-3 py-1 rounded-full mb-4"
              style={{ background: `${p.accent}1a`, color: p.accent }}
            >
              {p.tag}
            </span>

            <h3
              className="text-lg font-bold mb-2 tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {p.title}
            </h3>

            <p className="text-sm leading-relaxed mb-5" style={{ color: "#6b6894" }}>
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-xs px-2 py-1 rounded-md"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "#8884aa",
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}