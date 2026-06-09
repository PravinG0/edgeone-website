import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
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
  { label: "AI",                icon: Brain,     color: "text-blue-400",   border: "border-blue-500/30",   bg: "bg-blue-500/10" },
  { label: "Edge Computing",    icon: Cpu,        color: "text-cyan-400",   border: "border-cyan-500/30",   bg: "bg-cyan-500/10" },
  { label: "Industrial IoT",    icon: Wifi,       color: "text-indigo-400", border: "border-indigo-500/30", bg: "bg-indigo-500/10" },
  { label: "GPU Infrastructure",icon: Server,     color: "text-purple-400", border: "border-purple-500/30", bg: "bg-purple-500/10" },
  { label: "Automation",        icon: Zap,        color: "text-violet-400", border: "border-violet-500/30", bg: "bg-violet-500/10" },
  { label: "Smart Systems",     icon: Network,    color: "text-sky-400",    border: "border-sky-500/30",    bg: "bg-sky-500/10" },
  { label: "Real-Time RTLS",    icon: Gauge,      color: "text-emerald-400",border: "border-emerald-500/30",bg: "bg-emerald-500/10" },
  { label: "Edge Security",     icon: Lock,       color: "text-rose-400",   border: "border-rose-500/30",   bg: "bg-rose-500/10" },
  { label: "AI Model Deploy",   icon: GitBranch,  color: "text-amber-400",  border: "border-amber-500/30",  bg: "bg-amber-500/10" },
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
    icon: ShieldCheck,
    title: "Enterprise-Grade Architecture",
    points: [
      "Multi-tenant, role-based access control",
      "High-availability & fault-tolerant design",
      "On-premise, hybrid, or full-cloud deployment",
      "End-to-end encrypted data pipelines",
    ],
  },
  {
    icon: Zap,
    title: "Real-Time Edge Intelligence",
    points: [
      "Sub-millisecond local data processing",
      "AI inference at the device layer",
      "Autonomous rule engine & alerting",
      "Zero cloud-dependency for critical ops",
    ],
  },
  {
    icon: Network,
    title: "End-to-End IoT Integration",
    points: [
      "Full-stack from sensors to dashboards",
      "Industrial protocol support (Modbus, OPC-UA, MQTT)",
      "Seamless ERP / MES / SCADA integration",
      "RTLS & BLE/RFID asset tracking built-in",
    ],
  },
  {
    icon: Cpu,
    title: "Custom Hardware & Software",
    points: [
      "Purpose-built edge devices & gateways",
      "GPU AI servers & workstations",
      "White-label platform capabilities",
      "Hardware + software under one ecosystem",
    ],
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
        <div className="relative z-10 w-full mt-auto pb-10">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          <div className="overflow-hidden py-4 border-y border-white/5 bg-black/20 backdrop-blur-sm">
            {/* Double the items so the loop is seamless */}
            <div className="flex gap-4 animate-marquee whitespace-nowrap" style={{ width: "max-content" }}>
              {[...techTags, ...techTags].map((tag, i) => (
                <div
                  key={i}
                  className={`inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border ${tag.border} ${tag.bg} backdrop-blur-sm flex-shrink-0`}
                >
                  <tag.icon className={`w-4 h-4 ${tag.color}`} />
                  <span className={`text-sm font-bold tracking-wide ${tag.color}`}>{tag.label}</span>
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
      <Section className="py-32 bg-background">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Our Core Solutions</span>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
            End-to-End Intelligence. <span className="text-gradient">One Platform.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            From IoT at the edge to enterprise-grade cloud infrastructure, every solution is built for
            performance, scale, and real-world reliability.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreSolutions.map((sol, i) => (
            <motion.div
              key={sol.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`group relative rounded-2xl p-8 border ${sol.border} ${sol.bg} backdrop-blur-sm hover:-translate-y-2 transition-all duration-500 flex flex-col overflow-hidden`}
            >
              {/* Gradient accent top bar */}
              <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${sol.accent} opacity-60 group-hover:opacity-100 transition-opacity`} />

              <div className={`w-14 h-14 rounded-2xl ${sol.bg} border ${sol.border} flex items-center justify-center mb-6 relative`}>
                <div className={`absolute inset-0 blur-xl bg-gradient-to-br ${sol.accent} opacity-20 rounded-full group-hover:opacity-40 transition-opacity`} />
                <sol.icon className="w-7 h-7 text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </div>

              <h3 className="text-xl font-bold mb-4 font-outfit">{sol.title}</h3>
              <p className="text-sm text-zinc-400 leading-relaxed flex-grow">{sol.desc}</p>

              <div className={`mt-6 inline-flex items-center gap-2 text-xs font-bold bg-gradient-to-r ${sol.accent} bg-clip-text text-transparent group-hover:translate-x-1 transition-transform`}>
                Learn More <ArrowRight className="w-3.5 h-3.5 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 6. INDUSTRIES WE EMPOWER ────────────────────────────────────────── */}
      <Section className="py-32 bg-card border-y border-border overflow-hidden">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Industries We Empower</span>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
            Built for the Industries,{" "}
            <span className="text-gradient">That Build the World.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            From smart warehouses with real-time location systems to hospitals with live patient telemetry,
            EdgeOne powers the operations that can't afford to stop.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {industriesEmpower.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
            >
              <Link
                to={`/industries/${ind.slug}`}
                className="group flex flex-col items-center text-center p-8 rounded-2xl border border-white/5 bg-white/[0.03] hover:border-primary/40 hover:bg-primary/5 transition-all duration-400"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors relative">
                  <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  <ind.icon className="w-8 h-8 text-primary relative z-10 group-hover:scale-110 transition-transform" />
                </div>
                <span className="text-sm font-bold text-zinc-300 group-hover:text-white transition-colors leading-snug">
                  {ind.label}
                </span>
                <ArrowRight className="w-4 h-4 text-primary mt-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
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

      {/* ── 8. WHY EDGEONE ──────────────────────────────────────────────────── */}
      <Section className="py-32 bg-white/[0.02] border-y border-white/5">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Why EdgeOne</span>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight mb-6">
            Smarter Systems. Faster Decisions.{" "}
            <span className="text-gradient">Real Results.</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto font-medium">
            We don't just deliver technology. We engineer intelligent ecosystems that evolve with your operations.
            Here's what sets us apart as one of the best IoT platform companies in India and globally.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whyEdgeone.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-10 group hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -ml-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors relative">
                  <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  <item.icon className="w-7 h-7 text-primary relative z-10" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-5 font-outfit">{item.title}</h3>
                  <ul className="space-y-2.5">
                    {item.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-3 text-sm text-zinc-400 font-medium">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
