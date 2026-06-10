import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Cpu, Server, Brain, Zap, Heart,
  Workflow, Network, HardDrive, ChevronRight,
  Hospital, Factory, Car, ShoppingCart, Settings, Microscope, GraduationCap,
} from "lucide-react";

// ── Data ──────────────────────────────────────────────────────────────────────

const coreSolutions = [
  {
    icon: Brain,
    title: "Edge AI Solutions",
    desc: "Deploy AI directly at the edge with ultra-low latency processing, real-time analytics, and intelligent automation — no cloud dependency, full control at the point of action.",
    accent: "from-blue-600 to-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Network,
    title: "Industrial IoT Systems",
    desc: "Smart sensors, telemetry engines, monitoring gateways, and enterprise IoT platforms for scalable operations. Build a complete IoT infrastructure stack from device to dashboard.",
    accent: "from-cyan-600 to-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Cpu,
    title: "GPU Servers & AI Infrastructure",
    desc: "Custom-built AI workstations, GPU clusters, inference servers, and enterprise-grade AI hardware. Power your machine learning pipelines, LLM inference, and computer vision systems.",
    accent: "from-purple-600 to-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Heart,
    title: "Smart Healthcare Technologies",
    desc: "Remote patient monitoring, medical device integrations, hospital intelligence systems, and healthcare automation. Bring real-time IoT data and edge AI together to transform clinical outcomes.",
    accent: "from-rose-600 to-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/20",
  },
  {
    icon: HardDrive,
    title: "Edge Computing Devices",
    desc: "Industrial PCs, mini PCs, rugged systems, panel PCs, embedded systems, and custom edge hardware — all engineered for the harshest environments and mission-critical uptime demands.",
    accent: "from-indigo-600 to-indigo-400",
    bg: "bg-indigo-500/10",
    border: "border-indigo-500/20",
  },
  {
    icon: Workflow,
    title: "Enterprise Automation",
    desc: "AI-powered workflows, smart dashboards, industrial automation, and operational intelligence platforms. Integrate cloud network security, private cloud storage, and IaaS for a complete enterprise stack.",
    accent: "from-violet-600 to-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/20",
  },
];

const SOLUTION_TAGS = [
  ["Edge AI", "Ultra-Low Latency", "On-Device Inference", "Autonomous"],
  ["Smart Sensors", "Telemetry Engine", "IoT Gateway", "RTLS Platform"],
  ["GPU Cluster", "AI Inference", "LLM Servers", "HPC Infrastructure"],
  ["Remote Monitoring", "Medical IoT", "Clinical Intelligence", "HL7"],
  ["Industrial PC", "Rugged Hardware", "Panel PC", "Embedded Systems"],
  ["Workflow Automation", "Smart Dashboard", "IaaS", "Private Cloud"],
];

const industriesEmpower = [
  { icon: Hospital,      label: "Healthcare & Hospitals",  slug: "healthcare" },
  { icon: Factory,       label: "Manufacturing",            slug: "manufacturing" },
  { icon: Car,           label: "Automotive & EV",          slug: "industrial-automation" },
  { icon: ShoppingCart,  label: "Retail & Logistics",       slug: "retail-analytics" },
  { icon: Settings,      label: "Industrial Automation",    slug: "industrial-automation" },
  { icon: Microscope,    label: "Research & AI Labs",       slug: "smart-campus" },
  { icon: GraduationCap, label: "Education & Innovation",   slug: "smart-campus" },
];

const IND_CX = 400;
const IND_CY = 245;
const IND_R  = 168;

const IND_NODES = industriesEmpower.map((ind, i) => {
  const angle = (i * (360 / industriesEmpower.length) - 90) * (Math.PI / 180);
  return {
    ...ind,
    nx: IND_CX + IND_R * Math.cos(angle),
    ny: IND_CY + IND_R * Math.sin(angle),
  };
});

// ── Shared section wrapper ────────────────────────────────────────────────────

function Section({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <section className={className}>
      <div className="container mx-auto px-4 max-w-7xl">
        {children}
      </div>
    </section>
  );
}

// ── Core Solutions Interactive ────────────────────────────────────────────────

function CoreSolutionsInteractive() {
  const [activeIdx, setActiveIdx] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIdx((p) => (p + 1) % coreSolutions.length);
    }, 3800);
  };

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sol = coreSolutions[activeIdx];

  return (
    <Section className="py-28 bg-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
          Our Core Solutions
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
          End-to-End Intelligence.{" "}
          <span className="text-gradient">One Platform.</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
          From IoT at the edge to enterprise-grade cloud infrastructure, every solution is
          built for performance, scale, and real-world reliability.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-3xl border border-white/[0.08] overflow-hidden bg-white/[0.015] flex flex-col lg:flex-row"
      >
        {/* Left: solution selector */}
        <div className="lg:w-72 xl:w-80 flex-shrink-0 lg:border-r border-b lg:border-b-0 border-white/[0.08]">
          {coreSolutions.map((s, i) => (
            <button
              key={s.title}
              onClick={() => { setActiveIdx(i); startTimer(); }}
              className={`w-full text-left px-6 py-5 flex items-center gap-4 border-b border-white/[0.05] last:border-b-0 transition-all duration-300 relative group/tab ${
                activeIdx === i ? "bg-primary/[0.08]" : "hover:bg-white/[0.03]"
              }`}
            >
              {activeIdx === i && (
                <motion.div
                  layoutId="sol-bar"
                  className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                activeIdx === i ? `${s.bg} border ${s.border}` : "bg-white/[0.05] border border-white/[0.05]"
              }`}>
                <s.icon className={`w-5 h-5 transition-colors duration-300 ${
                  activeIdx === i ? "text-primary" : "text-zinc-500 group-hover/tab:text-zinc-300"
                }`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-semibold leading-tight truncate transition-colors duration-300 ${
                  activeIdx === i ? "text-white" : "text-zinc-500 group-hover/tab:text-zinc-300"
                }`}>
                  {s.title}
                </div>
                {activeIdx === i && (
                  <motion.div
                    key={`prog-${activeIdx}`}
                    className="h-[2px] rounded-full mt-2 bg-primary/40"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.8, ease: "linear" }}
                  />
                )}
              </div>
              <ChevronRight className={`w-3.5 h-3.5 flex-shrink-0 transition-all duration-300 ${
                activeIdx === i ? "text-primary" : "text-zinc-700 group-hover/tab:text-zinc-500"
              }`} />
            </button>
          ))}
        </div>

        {/* Right: animated content */}
        <div className="flex-1 relative overflow-hidden min-h-[440px]">
          <motion.div
            key={`bg-${activeIdx}`}
            className={`absolute inset-0 bg-gradient-to-br ${sol.accent} opacity-[0.04]`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.04 }}
            transition={{ duration: 0.7 }}
          />
          <div className={`absolute -top-20 -right-20 w-96 h-96 rounded-full blur-3xl bg-gradient-to-br ${sol.accent} opacity-[0.07] pointer-events-none`} />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIdx}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35, ease: [0.25, 0, 0, 1] }}
              className="relative z-10 p-8 lg:p-12 h-full flex flex-col justify-center"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${sol.accent} bg-clip-text text-transparent`}>
                  0{activeIdx + 1} / 0{coreSolutions.length}
                </span>
                <div className={`h-px w-12 bg-gradient-to-r ${sol.accent} opacity-50`} />
              </div>

              <div className={`w-16 h-16 rounded-2xl ${sol.bg} border ${sol.border} flex items-center justify-center mb-6 relative`}>
                <div className={`absolute inset-0 blur-2xl bg-gradient-to-br ${sol.accent} opacity-40 rounded-full scale-[2]`} />
                <sol.icon className="w-8 h-8 text-primary relative z-10" />
              </div>

              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black font-outfit tracking-tight mb-4 leading-tight">
                {sol.title}
              </h3>
              <p className="text-zinc-400 text-base leading-relaxed max-w-xl mb-8">{sol.desc}</p>

              <div className="flex flex-wrap gap-2 mb-8">
                {SOLUTION_TAGS[activeIdx].map((tag) => (
                  <span key={tag} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${sol.bg} border ${sol.border} text-zinc-300`}>
                    {tag}
                  </span>
                ))}
              </div>

              <button className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${sol.accent} bg-clip-text text-transparent hover:opacity-70 transition-opacity`}>
                Explore Solution <ArrowRight className="w-4 h-4 text-primary" />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Decorative SVG */}
          <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.06] pointer-events-none" viewBox="0 0 200 200" fill="none">
            <circle cx="100" cy="100" r="80" stroke="#3b82f6" strokeWidth="1" strokeDasharray="6 4" />
            <circle cx="100" cy="100" r="55" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="4 6" />
            <circle cx="100" cy="100" r="30" stroke="#3b82f6" strokeWidth="0.6" />
            <line x1="20" y1="100" x2="180" y2="100" stroke="#3b82f6" strokeWidth="0.5" />
            <line x1="100" y1="20" x2="100" y2="180" stroke="#3b82f6" strokeWidth="0.5" />
            <line x1="43" y1="43" x2="157" y2="157" stroke="#3b82f6" strokeWidth="0.4" />
            <line x1="157" y1="43" x2="43" y2="157" stroke="#3b82f6" strokeWidth="0.4" />
            <circle cx="100" cy="20" r="2.5" fill="#3b82f6" />
            <circle cx="100" cy="180" r="2.5" fill="#3b82f6" />
            <circle cx="20" cy="100" r="2.5" fill="#3b82f6" />
            <circle cx="180" cy="100" r="2.5" fill="#3b82f6" />
            <circle cx="100" cy="100" r="4" fill="#3b82f6" fillOpacity="0.4" />
          </svg>
        </div>
      </motion.div>
    </Section>
  );
}

// ── Industries Hub Section ────────────────────────────────────────────────────

function IndustriesHubSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Section className="py-28 bg-card border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
          Industries We Empower
        </span>
        <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
          Built for the Industries,{" "}
          <span className="text-gradient">That Build the World.</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
          From smart warehouses with real-time location systems to hospitals with live
          patient telemetry, EdgeOne powers the operations that can't afford to stop.
        </p>
      </motion.div>

      {/* Desktop: SVG radial hub */}
      <div className="hidden md:block relative max-w-4xl mx-auto select-none">
        <svg viewBox="0 0 800 510" fill="none" className="w-full">
          <circle cx={IND_CX} cy={IND_CY} r={IND_R}
            stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="5 6" />

          {IND_NODES.map((node, i) => (
            <motion.line key={`line-${i}`}
              x1={IND_CX} y1={IND_CY} x2={node.nx} y2={node.ny}
              stroke="#3b82f6" strokeWidth={hoveredIdx === i ? 1.5 : 0.8} strokeDasharray="5 4"
              animate={{ strokeOpacity: hoveredIdx === i ? 0.75 : 0.18 }}
              transition={{ duration: 0.25 }}
            />
          ))}

          {IND_NODES.map((node, i) => (
            <motion.circle key={`dot-${i}`}
              cx={IND_CX} cy={IND_CY} r={2.5} fill="#60a5fa"
              initial={{ cx: IND_CX, cy: IND_CY, opacity: 0 }}
              animate={{ cx: [IND_CX, node.nx, IND_CX], cy: [IND_CY, node.ny, IND_CY], opacity: [0, 0.9, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 0.3, delay: i * 0.34, ease: "easeInOut" }}
            />
          ))}

          {[0, 0.75, 1.5].map((delay, ri) => (
            <motion.circle key={`ring-${ri}`}
              cx={IND_CX} cy={IND_CY} r={44}
              stroke="#3b82f6" strokeWidth="1" fill="none" strokeOpacity={0}
              initial={{ r: 44, strokeOpacity: 0 }}
              animate={{ r: [44, 70], strokeOpacity: [0.3, 0] }}
              transition={{ duration: 2.3, repeat: Infinity, delay, ease: "easeOut" }}
            />
          ))}

          <circle cx={IND_CX} cy={IND_CY} r={47} fill="#080e1e" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.55" />
          <circle cx={IND_CX} cy={IND_CY} r={37} fill="#3b82f6" fillOpacity="0.07" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.3" />

          <text x={IND_CX} y={IND_CY - 5} textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Outfit, sans-serif" letterSpacing="0.5">
            EdgeOne
          </text>
          <text x={IND_CX} y={IND_CY + 12} textAnchor="middle" fill="#3b82f6" fontSize="7" fontFamily="Inter, sans-serif" letterSpacing="3">
            PLATFORM
          </text>

          {IND_NODES.map((node, i) => {
            const isHov = hoveredIdx === i;
            const words = node.label.split(" ");
            return (
              <g key={node.label} onMouseEnter={() => setHoveredIdx(i)} onMouseLeave={() => setHoveredIdx(null)} style={{ cursor: "pointer" }}>
                {isHov && (
                  <motion.circle cx={node.nx} cy={node.ny} r={36}
                    fill="#3b82f6" fillOpacity={0.12} stroke="#3b82f6" strokeWidth={1} strokeOpacity={0.35}
                    initial={{ r: 28, fillOpacity: 0, strokeOpacity: 0 }}
                    animate={{ r: 36, fillOpacity: 0.12, strokeOpacity: 0.35 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
                <motion.circle cx={node.nx} cy={node.ny} r={27} fill="#080e1e" stroke="#3b82f6"
                  animate={{ strokeWidth: isHov ? 1.5 : 0.8, strokeOpacity: isHov ? 0.8 : 0.28 }}
                  transition={{ duration: 0.2 }}
                />
                <foreignObject x={node.nx - 13} y={node.ny - 13} width={26} height={26}>
                  <div
                    // @ts-ignore
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <node.icon style={{ width: 15, height: 15, color: isHov ? "#93c5fd" : "#3b82f6", transition: "color 0.2s" }} />
                  </div>
                </foreignObject>
                {words.length <= 2 ? (
                  <text x={node.nx} y={node.ny + 44} textAnchor="middle"
                    fill={isHov ? "white" : "#a1a1aa"} fontSize="10.5"
                    fontWeight={isHov ? "700" : "500"} fontFamily="Inter, sans-serif">
                    {node.label}
                  </text>
                ) : (
                  <>
                    <text x={node.nx} y={node.ny + 42} textAnchor="middle"
                      fill={isHov ? "white" : "#a1a1aa"} fontSize="10" fontWeight={isHov ? "700" : "500"} fontFamily="Inter, sans-serif">
                      {words.slice(0, 2).join(" ")}
                    </text>
                    <text x={node.nx} y={node.ny + 55} textAnchor="middle"
                      fill={isHov ? "white" : "#a1a1aa"} fontSize="10" fontWeight={isHov ? "700" : "500"} fontFamily="Inter, sans-serif">
                      {words.slice(2).join(" ")}
                    </text>
                  </>
                )}
              </g>
            );
          })}
        </svg>

        <AnimatePresence>
          {hoveredIdx !== null && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              className="absolute top-4 right-0 bg-zinc-900/95 border border-primary/25 rounded-2xl p-5 w-56 backdrop-blur-sm shadow-2xl pointer-events-none"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl bg-primary/15 border border-primary/25 flex items-center justify-center flex-shrink-0">
                  {(() => { const Ic = IND_NODES[hoveredIdx].icon; return <Ic className="w-5 h-5 text-primary" />; })()}
                </div>
                <div className="text-sm font-bold text-white leading-tight">{IND_NODES[hoveredIdx].label}</div>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-primary">
                Explore use case <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile: animated grid */}
      <div className="md:hidden grid grid-cols-2 sm:grid-cols-3 gap-4">
        {industriesEmpower.map((ind, i) => (
          <motion.div key={ind.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <ind.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug">
              {ind.label}
            </span>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function Sections() {
  return (
    <div className="min-h-screen bg-background">
      {/* Minimal header */}
      <header className="border-b border-white/[0.06] px-6 py-4">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
              <Zap className="w-4 h-4 text-primary" />
            </div>
            <span className="font-black font-outfit text-white text-lg tracking-tight">EdgeOne</span>
          </div>
          <span className="text-xs text-zinc-500 font-medium hidden sm:block">
            Interactive Sections Preview
          </span>
        </div>
      </header>

      {/* Sections */}
      <CoreSolutionsInteractive />
      <IndustriesHubSection />
    </div>
  );
}
