import { Suspense, lazy, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight, Cpu, Radio, Server, Brain, Zap, Cloud, Building2,
  Activity, Heart, Bot, Layers, ShieldCheck,
  Microscope, GraduationCap, Car, ShoppingCart, Factory, Hospital,
  Settings, Workflow, Globe, HardDrive, Network, MonitorDot,
  BarChart3, ChevronRight, Wifi, Gauge, Lock, GitBranch,
} from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { industries as industriesData } from "@/data/industries";
import heroBg from "@/assets/hero-bg.jpg";
import { IoTBackground } from "@/components/IoTBackground";

// ── Data ─────────────────────────────────────────────────────────────────────

const techTags = [
  { label: "AI",                icon: Brain      },
  { label: "Edge Computing",    icon: Cpu        },
  { label: "Industrial IoT",    icon: Wifi       },
  { label: "GPU Infrastructure",icon: Server     },
  { label: "Automation",        icon: Zap        },
  { label: "Smart Systems",     icon: Network    },
  { label: "Real-Time RTLS",    icon: Gauge      },
  { label: "Edge Security",     icon: Lock       },
  { label: "AI Model Deploy",   icon: GitBranch  },
];

const whoWeAre = [
  {
    num: "01",
    icon: Brain,
    title: "Edge AI Infrastructure",
    desc: "As we are best Real-time assets tracking company, we build AI powered computing environments that process data instantly at the source, helping businesses make faster operational decisions with minimal delay.",
  },
  {
    num: "02",
    icon: Server,
    title: "Industrial Computing",
    desc: "Our industrial computing systems are designed for demanding environments where performance, stability, and continuous operation matter the most.",
  },
  {
    num: "03",
    icon: Activity,
    title: "IoT and Real Time Monitoring",
    desc: "We connect devices, systems, and operations through intelligent monitoring platforms that provide live visibility, tracking, alerts, and performance insights.",
  },
  {
    num: "04",
    icon: Cpu,
    title: "GPU Workstations and AI Servers",
    desc: "We deliver powerful GPU workstations and AI servers built for machine learning, computer vision, AI training, simulation, and large-scale data processing.",
  },
  {
    num: "05",
    icon: Zap,
    title: "Smart Automation Systems",
    desc: "Our automation solutions help businesses simplify repetitive processes, improve efficiency, and create more connected operational workflows.",
  },
  {
    num: "06",
    icon: Bot,
    title: "AI Model Deployment",
    desc: "We help organizations deploy AI models directly into real world environments where speed, security, and instant processing are essential.",
  },
  {
    num: "07",
    icon: Globe,
    title: "Enterprise Edge Solutions",
    desc: "Our enterprise solutions support businesses looking to modernize infrastructure, manage data locally, and improve operational intelligence across locations.",
  },
  {
    num: "08",
    icon: Settings,
    title: "Robotics and Intelligent Devices",
    desc: "We develop intelligent systems and connected devices that support automation, monitoring, tracking, and smarter industrial operations.",
  },
];

const flowSteps = [
  { icon: Radio, label: "Device", desc: "Sensor & device connectivity" },
  { icon: Server, label: "Gateway", desc: "Protocol translation & routing" },
  { icon: Cpu, label: "Edge", desc: "Low-latency processing" },
  { icon: Brain, label: "Intelligence", desc: "Rules engine & AI" },
  { icon: Zap, label: "Action", desc: "Trigger & automate" },
];

const coreSolutions = [
  {
    icon: Brain,
    title: "Edge AI Solutions",
    desc: "Deploy AI directly at the edge with ultra-low latency processing, real-time analytics, and intelligent automation — no cloud dependency, full control at the point of action. Ideal for edge computing artificial intelligence workloads.",
    accent: "from-blue-600 to-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Network,
    title: "Industrial IoT Systems",
    desc: "Smart sensors, telemetry engines, monitoring gateways, and enterprise IoT platforms for scalable operations. Build a complete IoT infrastructure stack from device to dashboard with our full-stack RTLS and monitoring systems.",
    accent: "from-cyan-600 to-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/20",
  },
  {
    icon: Cpu,
    title: "GPU Servers & AI Infrastructure",
    desc: "Custom-built AI workstations, GPU clusters, inference servers, and enterprise-grade AI hardware. Power your machine learning pipelines, LLM inference, and computer vision systems with purpose-built silicon.",
    accent: "from-purple-600 to-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: Heart,
    title: "Smart Healthcare Technologies",
    desc: "Remote patient monitoring, medical device integrations, hospital intelligence systems, and healthcare automation. Bring real-time IoT data and edge AI together to transform clinical outcomes and operational efficiency.",
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

const industriesEmpower = [
  { icon: Hospital,     label: "Healthcare & Hospitals",     slug: "healthcare" },
  { icon: Factory,      label: "Manufacturing",               slug: "manufacturing" },
  { icon: Car,          label: "Automotive & EV",             slug: "industrial-automation" },
  { icon: ShoppingCart, label: "Retail & Logistics",          slug: "retail-analytics" },
  { icon: Settings,     label: "Industrial Automation",       slug: "industrial-automation" },
  { icon: Microscope,   label: "Research & AI Labs",          slug: "smart-campus" },
  { icon: GraduationCap,label: "Education & Innovation",      slug: "smart-campus" },
];

const SOLUTION_TAGS = [
  ["Edge AI", "Ultra-Low Latency", "On-Device Inference", "Autonomous"],
  ["Smart Sensors", "Telemetry Engine", "IoT Gateway", "RTLS Platform"],
  ["GPU Cluster", "AI Inference", "LLM Servers", "HPC Infrastructure"],
  ["Remote Monitoring", "Medical IoT", "Clinical Intelligence", "HL7"],
  ["Industrial PC", "Rugged Hardware", "Panel PC", "Embedded Systems"],
  ["Workflow Automation", "Smart Dashboard", "IaaS", "Private Cloud"],
];

const IND_CX = 400;
const IND_CY = 245;
const IND_R = 168;

const IND_NODES = industriesEmpower.map((ind, i) => {
  const angle = (i * (360 / industriesEmpower.length) - 90) * (Math.PI / 180);
  return {
    ...ind,
    nx: IND_CX + IND_R * Math.cos(angle),
    ny: IND_CY + IND_R * Math.sin(angle),
  };
});

const deployments = [
  { icon: Building2, title: "On-Premise",  desc: "Deploy entirely within your secure network." },
  { icon: Cloud,     title: "Cloud",       desc: "Deploy on scalable public or private cloud infrastructure." },
  { icon: Server,    title: "Hybrid",      desc: "Process locally. Sync globally." },
  { icon: Layers,    title: "White-Label", desc: "Enterprise-ready, fully brandable deployments." },
];

const whyEdgeone = [
  {
    id: "enterprise-arch",
    category: "Infrastructure",
    angle: 0,
    icon: ShieldCheck,
    title: "Enterprise-Grade Architecture",
    description: "Multi-tenant, role-based access control with high-availability fault-tolerant design. Deploy on-premise, hybrid, or full-cloud with end-to-end encrypted data pipelines built for mission-critical reliability.",
  },
  {
    id: "edge-intelligence",
    category: "Edge AI",
    angle: 60,
    icon: Zap,
    title: "Real-Time Edge Intelligence",
    description: "Sub-millisecond local data processing with AI inference at the device layer. Autonomous rule engine and alerting with zero cloud-dependency — decisions happen where the data lives.",
  },
  {
    id: "iot-integration",
    category: "Connectivity",
    angle: 120,
    icon: Network,
    title: "End-to-End IoT Integration",
    description: "Full-stack from sensors to dashboards with industrial protocol support (Modbus, OPC-UA, MQTT). Seamless ERP / MES / SCADA integration with RTLS & BLE/RFID asset tracking built-in.",
  },
  {
    id: "custom-hardware",
    category: "Hardware",
    angle: 180,
    icon: Cpu,
    title: "Custom Hardware & Software",
    description: "Purpose-built edge devices, gateways, GPU AI servers, and workstations. White-label platform capabilities with hardware and software delivered under one unified ecosystem.",
  },
  {
    id: "global-deployment",
    category: "Scale",
    angle: 240,
    icon: Globe,
    title: "Global Deployment Expertise",
    description: "Proven deployments across India, USA, Canada, Mexico and Sri Lanka. Multi-site infrastructure management with 99.9% uptime SLA and 24/7 engineering support.",
  },
  {
    id: "security",
    category: "Security",
    angle: 300,
    icon: ShieldCheck,
    title: "Sovereign Data Security",
    description: "Data sovereignty by design — keep critical intelligence at the edge, within your network. End-to-end encrypted communication, compliance-ready architecture, and zero-trust access models.",
  },
];

const techEcosystem = [
  { icon: Server,    label: "AI GPU Servers" },
  { icon: Cpu,       label: "Edge Computing Systems" },
  { icon: Radio,     label: "Industrial IoT Gateways" },
  { icon: MonitorDot,label: "Smart Monitoring Devices" },
  { icon: HardDrive, label: "AI Workstations" },
  { icon: Brain,     label: "Embedded AI Solutions" },
  { icon: Layers,    label: "Industrial Tablets & Panel PCs" },
  { icon: BarChart3, label: "Real-Time Telemetry Platforms" },
];

// ── WhyEdgeone Radial Hub Component ──────────────────────────────────────────

const WHY_RADIUS = 170;
const WHY_CENTER = 250;

const getRadialCoords = (angleDeg: number) => {
  const rad = (angleDeg - 90) * (Math.PI / 180);
  return {
    x: WHY_CENTER + WHY_RADIUS * Math.cos(rad),
    y: WHY_CENTER + WHY_RADIUS * Math.sin(rad),
  };
};

function WhyEdgeoneRadial() {
  const [hovered, setHovered] = useState<string | null>(null);
  const active = whyEdgeone.find((t) => t.id === hovered);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

      {/* Left — Radial SVG Hub */}
      <div className="lg:col-span-7 flex justify-center items-center relative order-2 lg:order-1 select-none">
        <div className="w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] relative">

          <svg className="w-full h-full absolute inset-0" viewBox="0 0 500 500" fill="none">
            {/* Dashed orbit circle */}
            <circle cx={WHY_CENTER} cy={WHY_CENTER} r={WHY_RADIUS}
              stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.12" strokeDasharray="5 5" />

            {/* Connection lines + travelling dot */}
            {whyEdgeone.map((tool) => {
              const c = getRadialCoords(tool.angle);
              const isActive = hovered === tool.id;
              return (
                <g key={tool.id}>
                  <motion.line
                    x1={WHY_CENTER} y1={WHY_CENTER} x2={c.x} y2={c.y}
                    stroke={isActive ? "#3b82f6" : "#3b82f6"}
                    strokeWidth={isActive ? 2 : 1}
                    strokeOpacity={isActive ? 0.8 : 0.15}
                    transition={{ duration: 0.3 }}
                  />
                  {isActive && (
                    <motion.circle r="4" fill="#60a5fa"
                      animate={{ cx: [WHY_CENTER, c.x], cy: [WHY_CENTER, c.y] }}
                      transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    />
                  )}
                </g>
              );
            })}

            {/* Rotating outer rings */}
            <motion.circle cx={WHY_CENTER} cy={WHY_CENTER} r="52"
              stroke="#3b82f6" strokeWidth="2" strokeDasharray="40 20" strokeOpacity="0.4"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              style={{ transformOrigin: `${WHY_CENTER}px ${WHY_CENTER}px` }}
            />
            <motion.circle cx={WHY_CENTER} cy={WHY_CENTER} r="64"
              stroke="#60a5fa" strokeWidth="1" strokeDasharray="10 40 20 10" strokeOpacity="0.2"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              style={{ transformOrigin: `${WHY_CENTER}px ${WHY_CENTER}px` }}
            />
          </svg>

          {/* Central EdgeOne Core */}
          <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border-2 border-primary bg-background flex flex-col items-center justify-center text-center shadow-xl z-20"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <Brain className="w-8 h-8 text-primary mb-1 relative z-10" />
            <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-zinc-300 relative z-10">
              EdgeOne
            </span>
          </div>

          {/* Orbit node buttons */}
          {whyEdgeone.map((tool) => {
            const coords = getRadialCoords(tool.angle);
            const isActive = hovered === tool.id;
            const Icon = tool.icon;
            return (
              <div
                key={tool.id}
                className="absolute cursor-pointer z-30"
                style={{
                  left: `${(coords.x / 500) * 100}%`,
                  top: `${(coords.y / 500) * 100}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHovered(tool.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <motion.div
                  whileHover={{ scale: 1.18 }}
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                    isActive
                      ? "bg-primary text-white border-2 border-primary shadow-lg shadow-primary/30"
                      : "bg-white/5 text-zinc-400 border border-white/10 hover:border-primary/40"
                  }`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right — Info panel */}
      <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center min-h-[350px]">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 border-2 border-primary/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
              <div className="flex items-center gap-3 mb-5">
                <span className="text-[10px] font-mono font-bold px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary uppercase tracking-widest">
                  {active.category}
                </span>
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-outfit text-white mb-4">
                {active.title}
              </h3>
              <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                {active.description}
              </p>
              <div className="mt-6 flex items-center gap-2 text-xs font-mono font-medium text-primary">
                <Zap className="w-4 h-4" />
                Active Node — Hover to explore
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 text-primary mb-6">
                <Brain className="w-5 h-5 animate-pulse" />
                <span className="text-xs uppercase font-mono tracking-widest font-bold">
                  Explore EdgeOne Capabilities
                </span>
              </div>
              <h3 className="text-lg md:text-xl font-bold font-outfit text-white mb-3">
                Hover over any orbit node
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                Each node represents a core EdgeOne capability. Hover to discover what makes us the leading
                Edge Computing & IoT platform for industrial operations.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {whyEdgeone.map((t) => (
                  <div key={t.id}
                    className="bg-white/5 border border-white/5 rounded-lg p-2 text-center text-[10px] text-zinc-400 font-medium"
                  >
                    {t.title.split(" ").slice(0, 2).join(" ")}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
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
    <Section className="py-32 bg-background overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Our Core Solutions</span>
        <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
          End-to-End Intelligence. <span className="text-gradient">One Platform.</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
          From IoT at the edge to enterprise-grade cloud infrastructure, every solution is built for
          performance, scale, and real-world reliability.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="rounded-3xl border border-white/[0.08] overflow-hidden bg-white/[0.015] flex flex-col lg:flex-row"
      >
        {/* Left: solution list */}
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

        {/* Right: animated content panel */}
        <div className="flex-1 relative overflow-hidden min-h-[440px]">
          {/* Ambient gradient */}
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
              {/* Counter badge */}
              <div className="flex items-center gap-3 mb-6">
                <span className={`text-xs font-bold uppercase tracking-widest bg-gradient-to-r ${sol.accent} bg-clip-text text-transparent`}>
                  0{activeIdx + 1} / 0{coreSolutions.length}
                </span>
                <div className={`h-px w-12 bg-gradient-to-r ${sol.accent} opacity-50`} />
              </div>

              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${sol.bg} border ${sol.border} flex items-center justify-center mb-6 relative`}>
                <div className={`absolute inset-0 blur-2xl bg-gradient-to-br ${sol.accent} opacity-40 rounded-full scale-[2]`} />
                <sol.icon className="w-8 h-8 text-primary relative z-10" />
              </div>

              {/* Title */}
              <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black font-outfit tracking-tight mb-4 leading-tight">
                {sol.title}
              </h3>

              {/* Description */}
              <p className="text-zinc-400 text-base leading-relaxed max-w-xl mb-8">
                {sol.desc}
              </p>

              {/* Feature tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {SOLUTION_TAGS[activeIdx].map((tag) => (
                  <span key={tag} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${sol.bg} border ${sol.border} text-zinc-300`}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${sol.accent} bg-clip-text text-transparent hover:opacity-70 transition-opacity`}>
                Explore Solution <ArrowRight className="w-4 h-4 text-primary" />
              </button>
            </motion.div>
          </AnimatePresence>

          {/* Decorative SVG circuit rings */}
          <svg
            className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.06] pointer-events-none"
            viewBox="0 0 200 200" fill="none"
          >
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
    <Section className="py-32 bg-card border-y border-border overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Industries We Empower</span>
        <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
          Built for the Industries,{" "}
          <span className="text-gradient">That Build the World.</span>
        </h2>
        <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
          From smart warehouses with real-time location systems to hospitals with live patient telemetry,
          EdgeOne powers the operations that can't afford to stop.
        </p>
      </motion.div>

      {/* Desktop: SVG radial hub diagram */}
      <div className="hidden md:block relative max-w-4xl mx-auto select-none">
        <svg viewBox="0 0 800 510" fill="none" className="w-full">
          {/* Outer orbit dashes */}
          <circle cx={IND_CX} cy={IND_CY} r={IND_R}
            stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="5 6" />

          {/* Connection lines */}
          {IND_NODES.map((node, i) => (
            <motion.line
              key={`line-${i}`}
              x1={IND_CX} y1={IND_CY}
              x2={node.nx} y2={node.ny}
              stroke="#3b82f6"
              strokeWidth={hoveredIdx === i ? 1.5 : 0.8}
              strokeDasharray="5 4"
              animate={{ strokeOpacity: hoveredIdx === i ? 0.75 : 0.18 }}
              transition={{ duration: 0.25 }}
            />
          ))}

          {/* Traveling dots along connections */}
          {IND_NODES.map((node, i) => (
            <motion.circle
              key={`dot-${i}`}
              cx={IND_CX}
              cy={IND_CY}
              r={2.5}
              fill="#60a5fa"
              initial={{ cx: IND_CX, cy: IND_CY, opacity: 0 }}
              animate={{
                cx: [IND_CX, node.nx, IND_CX],
                cy: [IND_CY, node.ny, IND_CY],
                opacity: [0, 0.9, 0],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                repeatDelay: 0.3,
                delay: i * 0.34,
                ease: "easeInOut",
              }}
            />
          ))}

          {/* Pulsing hub rings */}
          {[0, 0.75, 1.5].map((delay, ri) => (
            <motion.circle
              key={`ring-${ri}`}
              cx={IND_CX} cy={IND_CY}
              r={44}
              stroke="#3b82f6" strokeWidth="1" fill="none"
              strokeOpacity={0}
              initial={{ r: 44, strokeOpacity: 0 }}
              animate={{ r: [44, 70], strokeOpacity: [0.3, 0] }}
              transition={{ duration: 2.3, repeat: Infinity, delay, ease: "easeOut" }}
            />
          ))}

          {/* Hub background circles */}
          <circle cx={IND_CX} cy={IND_CY} r={47}
            fill="#080e1e" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.55" />
          <circle cx={IND_CX} cy={IND_CY} r={37}
            fill="#3b82f6" fillOpacity="0.07" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.3" />

          {/* Hub text */}
          <text x={IND_CX} y={IND_CY - 5}
            textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Outfit, sans-serif" letterSpacing="0.5">
            EdgeOne
          </text>
          <text x={IND_CX} y={IND_CY + 12}
            textAnchor="middle" fill="#3b82f6" fontSize="7" fontFamily="Inter, sans-serif" letterSpacing="3">
            PLATFORM
          </text>

          {/* Industry nodes */}
          {IND_NODES.map((node, i) => {
            const isHov = hoveredIdx === i;
            const words = node.label.split(" ");
            return (
              <g
                key={node.label}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                style={{ cursor: "pointer" }}
              >
                {/* Glow on hover */}
                {isHov && (
                  <motion.circle
                    cx={node.nx} cy={node.ny} r={36}
                    fill="#3b82f6" fillOpacity={0.12}
                    stroke="#3b82f6" strokeWidth={1} strokeOpacity={0.35}
                    initial={{ r: 28, fillOpacity: 0, strokeOpacity: 0 }}
                    animate={{ r: 36, fillOpacity: 0.12, strokeOpacity: 0.35 }}
                    transition={{ duration: 0.2 }}
                  />
                )}

                {/* Node ring */}
                <motion.circle
                  cx={node.nx} cy={node.ny} r={27}
                  fill="#080e1e"
                  stroke="#3b82f6"
                  animate={{
                    strokeWidth: isHov ? 1.5 : 0.8,
                    strokeOpacity: isHov ? 0.8 : 0.28,
                  }}
                  transition={{ duration: 0.2 }}
                />

                {/* Icon via foreignObject */}
                <foreignObject x={node.nx - 13} y={node.ny - 13} width={26} height={26}>
                  <div
                    // @ts-ignore
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >
                    <node.icon style={{ width: 15, height: 15, color: isHov ? "#93c5fd" : "#3b82f6", transition: "color 0.2s" }} />
                  </div>
                </foreignObject>

                {/* Multi-line label below node */}
                {words.length <= 2 ? (
                  <text x={node.nx} y={node.ny + 44} textAnchor="middle"
                    fill={isHov ? "white" : "#a1a1aa"} fontSize="10.5"
                    fontWeight={isHov ? "700" : "500"} fontFamily="Inter, sans-serif"
                    style={{ transition: "fill 0.2s" }}>
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

        {/* Hover detail card */}
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
          <motion.div
            key={ind.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
          >
            <Link
              to={`/industries/${ind.slug}`}
              className="group flex flex-col items-center text-center p-6 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <ind.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug">
                {ind.label}
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-14">
        <Link
          to="/industries"
          className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground hover:bg-secondary hover:border-primary/40 transition-all"
        >
          View All Industries <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </Section>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

const Index = () => {
  return (
    <Layout>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">

        {/* Background image */}
        <div className="absolute inset-0">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-10 scale-110 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/70 to-background" />
          <div className="absolute inset-0 bg-grid opacity-15" />
        </div>

        {/* IoT network background animation */}
        <div className="absolute inset-0 z-0">
          <IoTBackground />
        </div>

        {/* Ambient glows */}
        <div className="ambient-light w-[600px] h-[600px] bg-primary top-[-15%] left-[-10%] animate-pulse" />
        <div className="ambient-light w-[500px] h-[500px] bg-accent bottom-[5%] right-[-8%] animate-pulse" />

        {/* Centered content */}
        <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center pt-32 pb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block"
            >
              Edge Computing · IoT · AI Infrastructure
            </motion.span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.08] mb-8 font-outfit">
              Best{" "}
              <span className="text-gradient">Edge Computing</span>{" "}
              &amp; IoT Asset Tracking Platform{" "}
              <span className="text-gradient">for Smart Operations.</span>
            </h1>

            <p className="text-lg md:text-xl text-zinc-400 leading-relaxed mb-10 max-w-2xl mx-auto font-medium">
              EdgeOne delivers end-to-end IoT platform infrastructure combining real-time location systems (RTLS),
              edge artificial intelligence, and cloud infrastructure services — purpose-built for warehouses,
              factories, and mission-critical industrial operations.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-black text-white transition-all hover:brightness-110 glow-box uppercase tracking-widest font-outfit"
              >
                Start Building <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center gap-2 rounded-xl border border-border px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
              >
                Get Guided <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mini stats */}
            <div className="flex flex-wrap justify-center gap-10 mt-14 pt-10 border-t border-white/5">
              {[
                { val: "500+", label: "Devices Connected" },
                { val: "99.9%", label: "Uptime SLA" },
                { val: "5+", label: "Countries Deployed" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-black text-gradient font-outfit">{s.val}</div>
                  <div className="text-xs text-zinc-500 font-medium mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ── Marquee tag strip — inside hero at bottom ── */}
        <div className="relative z-10 w-full mt-auto">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-5 border-t border-blue-500/10 bg-blue-950/20 backdrop-blur-sm">
            <div className="flex gap-5 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
              {[...techTags, ...techTags].map((tag, i) => (
                <div
                  key={i}
                  className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-blue-500/25 bg-blue-500/8 backdrop-blur-sm flex-shrink-0"
                >
                  <tag.icon className="w-4 h-4 text-blue-400" />
                  <span className="text-sm font-bold tracking-wide text-blue-300">{tag.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 (old standalone tag strip) is now merged into hero above */}

      {/* ── 2. WHO WE ARE ───────────────────────────────────────────────────── */}
      <Section className="py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Who We Are</span>
            <h2 className="text-4xl md:text-6xl font-black font-outfit leading-[1.08] tracking-tight">
              Intelligence at the <span className="text-gradient">Edge of Everything.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-lg text-zinc-400 leading-relaxed font-medium">
              Edgeone builds intelligent technology systems that help businesses run faster, smarter, and with greater control.
              From AI computing and industrial automation to real-time monitoring and connected devices, we create solutions
              that bring advanced technology into everyday operations without complexity.
            </p>
            <p className="text-base text-zinc-500 leading-relaxed font-medium mt-4">
              As a leading Edge Computing and IoT Asset Tracking Platform for smart operations, we combine AI-powered
              computing, live data processing, industrial connectivity, and automation to help businesses improve efficiency,
              reduce downtime, and make faster operational decisions with confidence.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeAre.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="glass-card rounded-2xl p-7 group hover:-translate-y-1.5 transition-all duration-500 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative">
                  <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  <item.icon className="w-6 h-6 text-primary relative z-10" />
                </div>
                <span className="text-3xl font-black text-white/5 font-outfit select-none">{item.num}</span>
              </div>
              <h3 className="text-base font-bold mb-3 font-outfit leading-snug">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed flex-grow">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 4. IoT PHILOSOPHY FLOW ──────────────────────────────────────────── */}
      <Section className="border-t border-border bg-white/[0.02]">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">IoT is not dashboards.</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Without edge computing, IoT becomes delayed data. With EdgeOne, IoT becomes real-time decision-making infrastructure.
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center"
            >
              <div className="flex flex-col items-center text-center w-44">
                <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-4 transition-all hover:border-primary/50 hover:bg-primary/5 group">
                  <step.icon className="w-8 h-8 text-primary transition-all group-hover:scale-110" />
                </div>
                <span className="text-base font-bold text-foreground font-outfit">{step.label}</span>
                <span className="text-xs text-zinc-500 mt-2 px-2 leading-tight">{step.desc}</span>
              </div>
              {i < flowSteps.length - 1 && (
                <>
                  <div className="hidden md:block w-12 h-px bg-gradient-to-r from-primary/60 to-primary/20 mx-2 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-y-0 left-0 w-4 bg-primary/80"
                      animate={{ x: ["-100%", "400%"] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="md:hidden w-px h-8 bg-gradient-to-b from-primary/60 to-primary/20 my-1" />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 5. OUR CORE SOLUTIONS ───────────────────────────────────────────── */}
      <CoreSolutionsInteractive />

      {/* ── 6. INDUSTRIES WE EMPOWER ────────────────────────────────────────── */}
      <IndustriesHubSection />

      {/* ── 7. DEPLOYMENT MODELS ────────────────────────────────────────────── */}
      <Section className="py-32">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Deployment Models</span>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight">Built for Enterprise Infrastructure</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {deployments.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-8 hover:-translate-y-2 transition-all duration-500 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors relative">
                <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                <d.icon className="w-7 h-7 text-primary relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-outfit">{d.title}</h3>
              <p className="text-zinc-400 font-medium leading-relaxed">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 8. WHY EDGEONE — Radial Hub ─────────────────────────────────────── */}
      <Section className="py-32 bg-white/[0.02] border-y border-white/5 overflow-hidden">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Why EdgeOne</span>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
            Smarter Systems. Faster Decisions.{" "}
            <span className="text-gradient">Real Results.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            We don't just deliver technology. We engineer intelligent ecosystems that evolve with your operations.
          </p>
        </div>

        {/* Radial hub grid */}
        <WhyEdgeoneRadial />
      </Section>

      {/* ── 9. TECHNOLOGY ECOSYSTEM ─────────────────────────────────────────── */}
      <Section className="py-32 bg-background">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Technology Ecosystem</span>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
            Our Hardware &amp; Software <span className="text-gradient">Portfolio</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            Every product in our ecosystem is engineered for performance at the edge — from AI GPU servers
            to real-time telemetry platforms.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {techEcosystem.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              className="group relative rounded-2xl p-6 border border-white/5 bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 transition-all duration-400 flex flex-col items-center text-center overflow-hidden"
            >
              {/* Animated corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl -mr-10 -mt-10 group-hover:bg-primary/15 transition-colors" />

              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors relative z-10">
                <item.icon className="w-7 h-7 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug relative z-10">
                {item.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 10. FINAL CTA ───────────────────────────────────────────────────── */}
      <section className="relative py-40 md:py-56 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="ambient-light w-[900px] h-[900px] bg-primary/15 bottom-[-20%] left-1/2 -translate-x-1/2 blur-[160px]" />
        <div className="absolute inset-0 bg-grid opacity-15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-8 block">
              Ready to Build
            </span>
            <h2 className="text-5xl md:text-8xl font-black mb-8 font-outfit leading-tight tracking-tighter">
              Intelligent <span className="text-gradient">Infrastructure?</span>
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-14 font-medium leading-relaxed">
              Transform your business with scalable Edge AI, Industrial IoT, and enterprise computing solutions
              engineered for the future. Trusted by enterprises across India, USA, Canada, Mexico, and Sri Lanka.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-primary px-12 py-5 text-lg font-black text-white transition-all hover:brightness-110 glow-box uppercase tracking-widest font-outfit"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center gap-3 rounded-2xl border border-border px-10 py-5 text-base font-semibold text-foreground hover:bg-secondary hover:border-primary/40 transition-all"
              >
                Explore Platform
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-4 mt-16 opacity-50">
              {["India", "USA", "Canada", "Mexico", "Sri Lanka"].map((country) => (
                <div key={country} className="px-4 py-2 rounded-lg border border-border bg-card text-xs text-muted-foreground font-bold tracking-wider uppercase">
                  {country}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

    </Layout>
  );
};

export default Index;
