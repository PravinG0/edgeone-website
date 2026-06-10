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
import { CoreSolutions } from "@/components/CoreSolutions";
import { IoTHeroVisual } from "@/components/IoTHeroVisual";

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

// ── Industries Hub Section ────────────────────────────────────────────────────

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

function IndustriesHubSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  return (
    <Section className="py-32 bg-card border-y border-border overflow-hidden">

      {/* Two-column layout: heading left, hub right */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left — heading & subheading */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col justify-center"
        >
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Industries We Empower</span>
          <h2 className="text-4xl md:text-5xl font-black font-outfit tracking-tight mb-6 leading-[1.08]">
            Built for the Industries,{" "}
            <span className="text-gradient">That Build the World.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-xl font-medium leading-relaxed mb-8">
            From smart warehouses with real-time location systems to hospitals with live patient telemetry,
            EdgeOne powers the operations that can't afford to stop.
          </p>

          {/* Industry list chips — visible on desktop alongside the hub */}
          <div className="hidden lg:flex flex-wrap gap-2">
            {industriesEmpower.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold cursor-pointer transition-all duration-200 ${
                  hoveredIdx === i
                    ? "bg-primary/15 border-primary/50 text-white"
                    : "bg-white/[0.03] border-white/10 text-zinc-400 hover:border-primary/30 hover:text-zinc-200"
                }`}
              >
                <ind.icon className="w-3.5 h-3.5 text-primary" />
                {ind.label}
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/industries"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary hover:border-primary/40 transition-all"
            >
              View All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>

        {/* Right — SVG radial hub */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative select-none"
        >
          {/* Desktop SVG hub */}
          <div className="hidden md:block relative">
            <svg viewBox="0 0 500 500" fill="none" className="w-full max-w-lg mx-auto">
              {/* Orbit dashed circle */}
              <circle cx="250" cy="250" r={IND_R}
                stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.1" strokeDasharray="5 6" />

              {/* Connection lines */}
              {IND_NODES.map((node, i) => {
                // Re-compute coords relative to 250,250 center for this smaller viewBox
                const angle = (i * (360 / industriesEmpower.length) - 90) * (Math.PI / 180);
                const nx = 250 + IND_R * Math.cos(angle);
                const ny = 250 + IND_R * Math.sin(angle);
                return (
                  <motion.line
                    key={`line-${i}`}
                    x1={250} y1={250} x2={nx} y2={ny}
                    stroke="#3b82f6"
                    strokeWidth={hoveredIdx === i ? 1.5 : 0.8}
                    strokeDasharray="5 4"
                    animate={{ strokeOpacity: hoveredIdx === i ? 0.75 : 0.18 }}
                    transition={{ duration: 0.25 }}
                  />
                );
              })}

              {/* Traveling dots */}
              {IND_NODES.map((node, i) => {
                const angle = (i * (360 / industriesEmpower.length) - 90) * (Math.PI / 180);
                const nx = 250 + IND_R * Math.cos(angle);
                const ny = 250 + IND_R * Math.sin(angle);
                return (
                  <motion.circle
                    key={`dot-${i}`}
                    r={2.5} fill="#60a5fa"
                    initial={{ cx: 250, cy: 250, opacity: 0 }}
                    animate={{ cx: [250, nx, 250], cy: [250, ny, 250], opacity: [0, 0.9, 0] }}
                    transition={{ duration: 2.4, repeat: Infinity, repeatDelay: 0.3, delay: i * 0.34, ease: "easeInOut" }}
                  />
                );
              })}

              {/* Pulsing hub rings */}
              {[0, 0.75, 1.5].map((delay, ri) => (
                <motion.circle key={`ring-${ri}`} cx={250} cy={250} r={44}
                  stroke="#3b82f6" strokeWidth="1" fill="none" strokeOpacity={0}
                  initial={{ r: 44, strokeOpacity: 0 }}
                  animate={{ r: [44, 70], strokeOpacity: [0.3, 0] }}
                  transition={{ duration: 2.3, repeat: Infinity, delay, ease: "easeOut" }}
                />
              ))}

              {/* Hub */}
              <circle cx={250} cy={250} r={47} fill="#080e1e" stroke="#3b82f6" strokeWidth="1.5" strokeOpacity="0.55" />
              <circle cx={250} cy={250} r={37} fill="#3b82f6" fillOpacity="0.07" stroke="#3b82f6" strokeWidth="0.8" strokeOpacity="0.3" />
              <text x={250} y={245} textAnchor="middle" fill="white" fontSize="12" fontWeight="700" fontFamily="Outfit, sans-serif" letterSpacing="0.5">EdgeOne</text>
              <text x={250} y={262} textAnchor="middle" fill="#3b82f6" fontSize="7" fontFamily="Inter, sans-serif" letterSpacing="3">PLATFORM</text>

              {/* Industry nodes — click navigates to sub-page */}
              {IND_NODES.map((node, i) => {
                const angle = (i * (360 / industriesEmpower.length) - 90) * (Math.PI / 180);
                const nx = 250 + IND_R * Math.cos(angle);
                const ny = 250 + IND_R * Math.sin(angle);
                const isHov = hoveredIdx === i;
                const words = node.label.split(" ");
                return (
                  <g key={node.label}
                    onMouseEnter={() => setHoveredIdx(i)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    onClick={() => window.location.href = `/industries/${node.slug}`}
                    style={{ cursor: "pointer" }}
                  >
                    {isHov && (
                      <motion.circle cx={nx} cy={ny} r={36}
                        fill="#3b82f6" fillOpacity={0.12} stroke="#3b82f6" strokeWidth={1} strokeOpacity={0.35}
                        initial={{ r: 28, fillOpacity: 0, strokeOpacity: 0 }}
                        animate={{ r: 36, fillOpacity: 0.12, strokeOpacity: 0.35 }}
                        transition={{ duration: 0.2 }}
                      />
                    )}
                    <motion.circle cx={nx} cy={ny} r={27} fill="#080e1e" stroke="#3b82f6"
                      animate={{ strokeWidth: isHov ? 1.5 : 0.8, strokeOpacity: isHov ? 0.8 : 0.28 }}
                      transition={{ duration: 0.2 }}
                    />
                    <foreignObject x={nx - 13} y={ny - 13} width={26} height={26}>
                      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <node.icon style={{ width: 15, height: 15, color: isHov ? "#93c5fd" : "#3b82f6", transition: "color 0.2s" }} />
                      </div>
                    </foreignObject>
                    {words.length <= 2 ? (
                      <text x={nx} y={ny + 44} textAnchor="middle"
                        fill={isHov ? "white" : "#a1a1aa"} fontSize="10.5"
                        fontWeight={isHov ? "700" : "500"} fontFamily="Inter, sans-serif">
                        {node.label}
                      </text>
                    ) : (
                      <>
                        <text x={nx} y={ny + 42} textAnchor="middle"
                          fill={isHov ? "white" : "#a1a1aa"} fontSize="10"
                          fontWeight={isHov ? "700" : "500"} fontFamily="Inter, sans-serif">
                          {words.slice(0, 2).join(" ")}
                        </text>
                        <text x={nx} y={ny + 55} textAnchor="middle"
                          fill={isHov ? "white" : "#a1a1aa"} fontSize="10"
                          fontWeight={isHov ? "700" : "500"} fontFamily="Inter, sans-serif">
                          {words.slice(2).join(" ")}
                        </text>
                      </>
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Hover detail card removed — nodes are directly clickable */}
          </div>

          {/* Mobile: grid fallback */}
          <div className="md:hidden grid grid-cols-2 gap-3">
            {industriesEmpower.map((ind, i) => (
              <Link key={ind.label} to={`/industries/${ind.slug}`}
                className="group flex flex-col items-center text-center p-5 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                  <ind.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug">{ind.label}</span>
              </Link>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
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
        <div className="w-[360px] h-[360px] sm:w-[580px] sm:h-[580px] relative">

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
            <motion.circle cx={WHY_CENTER} cy={WHY_CENTER} r="62"
              stroke="#3b82f6" strokeWidth="2.5" strokeDasharray="40 20" strokeOpacity="0.45"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
              style={{ transformOrigin: `${WHY_CENTER}px ${WHY_CENTER}px` }}
            />
            <motion.circle cx={WHY_CENTER} cy={WHY_CENTER} r="76"
              stroke="#60a5fa" strokeWidth="1.2" strokeDasharray="10 40 20 10" strokeOpacity="0.22"
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 24, ease: "linear" }}
              style={{ transformOrigin: `${WHY_CENTER}px ${WHY_CENTER}px` }}
            />
          </svg>

          {/* Central EdgeOne Core */}
          <div className="absolute w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-primary bg-background flex flex-col items-center justify-center text-center shadow-xl z-20"
            style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
          >
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
            <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-primary mb-1 relative z-10" />
            <span className="text-[9px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-zinc-300 relative z-10">
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
                <div className="flex flex-col items-center gap-1.5">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-14 h-14 sm:w-18 sm:h-18 rounded-full flex items-center justify-center transition-all duration-300 relative ${
                      isActive
                        ? "bg-primary text-white border-2 border-primary shadow-[0_0_24px_rgba(59,130,246,0.5)]"
                        : "bg-white/5 text-zinc-400 border border-white/10 hover:border-primary/40 hover:bg-primary/10"
                    }`}
                    style={{ width: "56px", height: "56px" }}
                  >
                    {/* Pulse ring on active */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-primary"
                        animate={{ scale: [1, 1.6], opacity: [0.6, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                      />
                    )}
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                  </motion.div>
                  {/* Label under node */}
                  <span className={`text-[9px] font-bold uppercase tracking-widest whitespace-nowrap transition-colors duration-200 ${
                    isActive ? "text-primary" : "text-zinc-600"
                  }`}>
                    {tool.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Right — Info panel */}
      <div className="lg:col-span-5 order-1 lg:order-2 flex flex-col justify-center min-h-[420px]">
        <AnimatePresence mode="wait">
          {active ? (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, x: 24, scale: 0.97 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -24, scale: 0.97 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-10 border-2 border-primary/40 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-52 h-52 bg-primary/8 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/5 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <span className="text-[10px] font-mono font-bold px-4 py-1.5 bg-primary/10 border border-primary/25 rounded-full text-primary uppercase tracking-widest">
                  {active.category}
                </span>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-ping" />
                  <div className="w-1.5 h-1.5 bg-primary/50 rounded-full animate-ping" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/25 flex items-center justify-center mb-6 relative">
                <div className="absolute inset-0 blur-xl bg-primary/30 rounded-2xl" />
                <active.icon className="w-8 h-8 text-primary relative z-10" />
              </div>

              <h3 className="text-2xl md:text-3xl font-black font-outfit text-white mb-5 leading-tight">
                {active.title}
              </h3>
              <p className="text-zinc-300 text-base md:text-lg leading-relaxed mb-6">
                {active.description}
              </p>
              <div className="flex items-center gap-2 text-xs font-mono font-medium text-primary pt-4 border-t border-white/5">
                <Zap className="w-4 h-4" />
                Node Active — hover another to explore
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="default"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-card rounded-3xl p-10 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-xl pointer-events-none" />
              <div className="flex items-center gap-2 text-primary mb-7">
                <Brain className="w-5 h-5 animate-pulse" />
                <span className="text-xs uppercase font-mono tracking-widest font-bold">
                  Explore EdgeOne Capabilities
                </span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold font-outfit text-white mb-4">
                Hover over any orbit node
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-7">
                Each node represents a core EdgeOne capability. Hover to discover what makes us the leading
                Edge Computing & IoT platform for industrial operations.
              </p>
              <div className="grid grid-cols-2 gap-2">
                {whyEdgeone.map((t) => (
                  <div key={t.id}
                    className="bg-white/5 border border-white/5 rounded-xl p-3 text-center text-xs text-zinc-400 font-medium hover:border-primary/20 hover:text-zinc-200 transition-colors cursor-default"
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

// ── Typing Headline Component ─────────────────────────────────────────────────

const TYPING_PHRASES = [
  "Real-time Asset Tracking",
  "Automation",
  "Healthcare IoT",
  "RTLS (Indoor Tracking)",
];

function TypingHeadline() {
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [displayed, setDisplayed]   = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPING_PHRASES[phraseIdx];

    if (!isDeleting && displayed === current) {
      // Finished typing — pause then start deleting
      const pause = setTimeout(() => setIsDeleting(true), 1800);
      return () => clearTimeout(pause);
    }

    if (isDeleting && displayed === "") {
      // Finished deleting — move to next phrase
      setIsDeleting(false);
      setPhraseIdx((p) => (p + 1) % TYPING_PHRASES.length);
      return;
    }

    const speed = isDeleting ? 40 : 65;
    const timer = setTimeout(() => {
      setDisplayed(isDeleting
        ? current.slice(0, displayed.length - 1)
        : current.slice(0, displayed.length + 1)
      );
    }, speed);

    return () => clearTimeout(timer);
  }, [displayed, isDeleting, phraseIdx]);

  return (
    <span className="text-gradient inline-block min-w-[2ch]">
      {displayed}
      <span className="animate-pulse text-primary">|</span>
    </span>
  );
}

// ── Component ─────────────────────────────────────────────────────────────────

const Index = () => {
  return (
    <Layout>

      {/* ── 1. HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col overflow-hidden">

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

        {/* Two-column hero content */}
        <div className="relative z-10 container mx-auto px-4 flex-1 flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full pt-28 pb-12">

            {/* LEFT — text content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="flex flex-col items-start text-left"
            >
              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block"
              >
                Edge Computing · IoT · AI Infrastructure
              </motion.span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.08] mb-8 font-outfit">
                We built best
                <br />
                <TypingHeadline />
              </h1>

              <p className="text-lg text-zinc-400 leading-relaxed mb-10 max-w-xl font-medium">
                EdgeOne delivers end-to-end IoT platform infrastructure combining real-time location systems (RTLS),
                edge artificial intelligence, and cloud infrastructure services — purpose-built for warehouses,
                factories, and mission-critical industrial operations.
              </p>

              <div className="flex flex-wrap gap-4">
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
              <div className="flex flex-wrap gap-10 mt-12 pt-10 border-t border-white/5 w-full">
                {[
                  { val: "500+", label: "Devices Connected" },
                  { val: "99.9%", label: "Uptime SLA" },
                  { val: "5+",   label: "Countries Deployed" },
                ].map((s) => (
                  <div key={s.label}>
                    <div className="text-2xl font-black text-gradient font-outfit">{s.val}</div>
                    <div className="text-xs text-zinc-500 font-medium mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT — IoT visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.1, ease: "easeOut", delay: 0.3 }}
              className="hidden lg:flex items-center justify-center"
            >
              <IoTHeroVisual />
            </motion.div>

          </div>
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
      <Section className="py-32 relative overflow-hidden">
        {/* Ambient background pulse */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
            style={{ background: "radial-gradient(circle, hsl(221.2 83.2% 53.3% / 0.04) 0%, transparent 65%)" }} />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Who We Are</span>
            <h2 className="text-4xl md:text-6xl font-black font-outfit leading-[1.08] tracking-tight">
              Intelligence at the <span className="text-gradient">Edge of Everything.</span>
            </h2>
            {/* Animated stat row */}
            <div className="flex gap-8 mt-10 pt-8 border-t border-white/5">
              {[
                { val: "10+", label: "Years Experience" },
                { val: "50+", label: "Enterprise Clients" },
                { val: "99.9%", label: "Uptime SLA" },
              ].map((s, i) => (
                <motion.div key={s.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <div className="text-2xl font-black text-gradient font-outfit">{s.val}</div>
                  <div className="text-xs text-zinc-500 font-medium mt-1">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
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
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whoWeAre.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="glass-card rounded-2xl p-7 group transition-all duration-300 flex flex-col relative overflow-hidden"
            >
              {/* Hover top accent bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/0 via-primary to-primary/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              {/* Number watermark */}
              <span className="absolute bottom-4 right-4 text-6xl font-black text-white/[0.03] font-outfit select-none leading-none">{item.num}</span>

              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors relative">
                  {/* Pulse ring on hover */}
                  <div className="absolute inset-0 rounded-xl border border-primary/40 scale-0 group-hover:scale-150 opacity-0 group-hover:opacity-0 transition-all duration-700" />
                  <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500" />
                  <item.icon className="w-6 h-6 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                </div>
              </div>
              <h3 className="text-base font-bold mb-3 font-outfit leading-snug">{item.title}</h3>
              <p className="text-xs text-zinc-500 leading-relaxed flex-grow">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 4. IoT PHILOSOPHY FLOW ──────────────────────────────────────────── */}
      <Section className="border-t border-border bg-white/[0.02] py-24 relative overflow-hidden">
        {/* Background radial */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, hsl(221.2 83.2% 53.3% / 0.06) 0%, transparent 70%)" }} />

        <div className="text-center mb-16 relative z-10">
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 block"
          >The EdgeOne Principle</motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black mb-4 font-outfit"
          >
            IoT is not <span className="text-gradient">dashboards.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
          >
            Without edge computing, IoT becomes delayed data. With EdgeOne, IoT becomes real-time decision-making infrastructure.
          </motion.p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0 relative z-10">
          {flowSteps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex items-center"
            >
              <div className="flex flex-col items-center text-center w-48 group cursor-default">
                {/* Node with pulse rings */}
                <div className="relative mb-5">
                  {/* Pulse rings */}
                  <div className="absolute inset-0 rounded-2xl border border-primary/30 scale-100 group-hover:scale-[1.5] opacity-0 group-hover:opacity-0 transition-all duration-700" />
                  <motion.div
                    className="absolute -inset-3 rounded-3xl border border-primary/20"
                    animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                  />
                  <motion.div
                    className="absolute -inset-6 rounded-3xl border border-primary/10"
                    animate={{ scale: [1, 1.35, 1], opacity: [0.2, 0, 0.2] }}
                    transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 + 0.5 }}
                  />
                  <div className="w-24 h-24 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:bg-primary/10 group-hover:border-primary/40 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] relative z-10">
                    <step.icon className="w-10 h-10 text-primary transition-all group-hover:scale-110" />
                  </div>
                </div>
                <span className="text-base font-bold text-foreground font-outfit">{step.label}</span>
                <span className="text-xs text-zinc-500 mt-2 px-2 leading-tight">{step.desc}</span>
                {/* Step number */}
                <span className="mt-3 text-[10px] font-mono text-primary/40 tracking-widest">0{i + 1}</span>
              </div>

              {/* Connector */}
              {i < flowSteps.length - 1 && (
                <>
                  <div className="hidden md:flex items-center mx-1">
                    <div className="w-16 h-px bg-gradient-to-r from-primary/50 to-primary/20 relative overflow-hidden">
                      <motion.div
                        className="absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-transparent via-primary to-transparent"
                        animate={{ x: ["-100%", "200%"] }}
                        transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
                      />
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 -ml-0.5" />
                  </div>
                  <div className="md:hidden w-px h-10 bg-gradient-to-b from-primary/50 to-primary/20 my-1 relative overflow-hidden">
                    <motion.div
                      className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-transparent via-primary to-transparent"
                      animate={{ y: ["-100%", "200%"] }}
                      transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.4 }}
                    />
                  </div>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 5. OUR CORE SOLUTIONS ───────────────────────────────────────────── */}
      <CoreSolutions />

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
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="ambient-light w-[700px] h-[700px] bg-primary/12 bottom-[-20%] left-1/2 -translate-x-1/2 blur-[140px]" />
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">
              Ready to Build
            </span>
            <h2 className="text-4xl md:text-6xl font-black mb-6 font-outfit leading-tight tracking-tighter">
              Intelligent <span className="text-gradient">Infrastructure?</span>
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              Transform your business with scalable Edge AI, Industrial IoT, and enterprise computing solutions
              engineered for the future. Trusted by enterprises across India, USA, Canada, Mexico, and Sri Lanka.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 rounded-2xl bg-primary px-10 py-4 text-base font-black text-white transition-all hover:brightness-110 glow-box uppercase tracking-widest font-outfit"
              >
                Get Started <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/platform"
                className="inline-flex items-center gap-3 rounded-2xl border border-border px-8 py-4 text-base font-semibold text-foreground hover:bg-secondary hover:border-primary/40 transition-all"
              >
                Explore Platform
              </Link>
            </div>

            {/* Trust country badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-10 opacity-50">
              {["India", "USA", "Canada", "Colombia", "Mexico", "Sri Lanka"].map((country) => (
                <div key={country} className="px-3 py-1.5 rounded-lg border border-border bg-card text-xs text-muted-foreground font-bold tracking-wider uppercase">
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
