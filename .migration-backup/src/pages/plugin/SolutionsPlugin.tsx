import { ArrowRight, MapPin, Activity, Heart, Bot } from "lucide-react";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const solutions = [
  {
    icon: MapPin,
    title: "Indoor Tracking (RTLS)",
    id: "rtls",
    desc: "Real-time location intelligence for hospitals and facilities.",
    details: "Track assets, personnel, and patients with sub-meter accuracy. Integrate with existing infrastructure for zone-based alerts and workflow automation.",
  },
  {
    icon: Activity,
    title: "Industrial Monitoring",
    id: "monitoring",
    desc: "Live telemetry, predictive alerts, and automated workflows.",
    details: "Monitor equipment health in real-time. Detect anomalies, predict failures, and trigger automated maintenance workflows before downtime occurs.",
  },
  {
    icon: Heart,
    title: "Healthcare IoT Infrastructure",
    id: "healthcare",
    desc: "Integrated device data pipelines and operational dashboards.",
    details: "Unify clinical and operational IoT data. From patient monitoring devices to facility management — all under one secure, compliant infrastructure.",
  },
  {
    icon: Bot,
    title: "Edge AI Deployments",
    id: "edge-ai",
    desc: "Deploy AI models directly at the edge for low-latency decisions.",
    details: "Run inference at the edge with our AI-enabled compute nodes. Process video, sensor, and telemetry data locally with millisecond response times.",
  },
];

// Inline tech visualizations (same as original Solutions.tsx)
const TechVisualization = ({ type }: { type: string }) => {
  if (type === "rtls") {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative w-full max-w-sm aspect-video border border-white/10 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm shadow-2xl">
          <motion.div
            animate={{ y: [0, 200, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 right-0 h-0.5 bg-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-20"
          />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 0.5], x: Math.random() * 300, y: Math.random() * 150 }}
              transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.5 }}
              className="absolute w-3 h-3 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.8)]"
            />
          ))}
        </div>
      </div>
    );
  }
  if (type === "monitoring") {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-sm aspect-video border border-white/10 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Telemetry Stream</div>
              <div className="text-xs font-mono text-primary flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Live: 842.4 MHz
              </div>
            </div>
            <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <Activity className="w-4 h-4 text-primary" />
            </div>
          </div>
          <div className="h-24 flex items-end gap-1 px-2">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ height: [20 + Math.random() * 40, 20 + Math.random() * 60, 20 + Math.random() * 40] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.1 }}
                className="flex-1 bg-gradient-to-t from-primary/20 to-primary/60 rounded-t-sm"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
  if (type === "healthcare") {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-sm aspect-video border border-white/10 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm flex items-center justify-center group">
          <svg viewBox="0 0 400 200" className="w-full h-full px-8">
            <motion.path
              d="M 0 100 L 50 100 L 60 70 L 80 130 L 90 100 L 150 100 L 160 40 L 180 160 L 190 100 L 250 100 L 260 80 L 280 120 L 290 100 L 400 100"
              fill="transparent" stroke="currentColor" strokeWidth="2" className="text-primary"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </svg>
          <div className="absolute top-4 left-6 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
              <Heart className="w-5 h-5 text-zinc-400 group-hover:text-primary transition-colors" />
            </div>
            <div>
              <div className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Vitals Monitor</div>
              <div className="text-lg font-mono font-bold text-white">72 <span className="text-[10px] text-zinc-500">BPM</span></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "edge-ai") {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-4">
        <div className="relative w-full max-w-sm aspect-video border border-white/10 rounded-xl overflow-hidden bg-background/50 backdrop-blur-sm flex items-center justify-center">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative">
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-32 h-32 rounded-full border border-dashed border-primary/30 flex items-center justify-center">
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center">
                <Bot className="w-10 h-10 text-primary" />
              </motion.div>
            </motion.div>
          </div>
          <div className="absolute bottom-4 right-6">
            <span className="text-[8px] font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded border border-primary/20">INFERENCE RELIABILITY: 99.8%</span>
          </div>
        </div>
      </div>
    );
  }
  return null;
};

const SolutionsPlugin = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Section className="pt-40 pb-24 relative overflow-hidden">
        <div className="ambient-light w-[500px] h-[500px] bg-primary/10 top-[-10%] right-[-10%]" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">EdgeOne Solutions</span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 max-w-4xl font-outfit leading-[1.1]">
          Built for <span className="text-gradient">Performance</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium">
          Purpose-built vertical solutions powered by our full-stack IoT and edge intelligence infrastructure.
        </p>
      </Section>

      {solutions.map((s, i) => (
        <Section
          key={s.title}
          id={s.id}
          className={i % 2 === 0 ? "bg-white/[0.02] border-y border-white/5 py-32" : "py-32"}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-20 items-center"
          >
            <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-10 group relative">
                <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full" />
                <s.icon className="w-10 h-10 text-primary relative z-10" />
              </div>
              <h2 className="text-4xl font-black mb-6 font-outfit leading-tight">{s.title}</h2>
              <p className="text-xl text-zinc-300 mb-6 font-medium tracking-tight">{s.desc}</p>
              <p className="text-lg text-zinc-400 leading-relaxed font-medium">{s.details}</p>
            </div>
            <div className={`glass-card rounded-3xl p-4 bg-grid relative overflow-hidden group min-h-[320px] flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <TechVisualization type={s.id} />
            </div>
          </motion.div>
        </Section>
      ))}

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-black mb-6 font-outfit tracking-tight">Need a Custom Solution?</h2>
          <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto font-medium">Our architects design bespoke IoT infrastructure for your unique challenges.</p>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-bold text-white hover:brightness-110 glow-box transition-all uppercase tracking-widest">
            Talk to an Architect <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPlugin;
