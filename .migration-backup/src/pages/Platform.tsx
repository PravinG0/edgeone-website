import { Link } from "react-router-dom";
import { ArrowRight, Cpu, Server, Radio, Brain, Zap, Shield, Users, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const archLayers = [
  { layer: "Device Layer", desc: "Secure device onboarding and lifecycle management.", icon: Radio },
  { layer: "Gateway Layer", desc: "Protocol translation and local data routing.", icon: Server },
  { layer: "Edge Layer", desc: "Low-latency processing and AI inference.", icon: Cpu },
  { layer: "Intelligence Layer", desc: "Rules engine, alerts, automation workflows.", icon: Brain },
  { layer: "Action Layer", desc: "Trigger systems, notifications, integrations.", icon: Zap },
];

const capabilities = [
  "Multi-Tenant Deployments",
  "Real-Time Telemetry Pipelines",
  "Event-Driven Automation",
  "RTLS Infrastructure Support",
  "Edge AI Model Deployment",
  "Enterprise Rules Engine",
];

const Platform = () => {
  return (
    <Layout>
      <Section className="pt-40 pb-24 relative overflow-hidden">
        <div className="ambient-light w-[500px] h-[500px] bg-primary/10 top-[-10%] left-[-10%]" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">EdgeOne Platform</span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 max-w-4xl font-outfit leading-[1.1]">
          The Engine of <span className="text-gradient">Intelligent Operations</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-medium">
          EdgeOne is a scalable enterprise-grade IoT system designed to unify device connectivity and
          edge intelligence under one robust architecture.
        </p>
      </Section>

      <Section className="bg-white/[0.02] border-y border-white/5 py-24">
        <h2 className="text-4xl font-black mb-6 font-outfit tracking-tight">The EdgeOne Difference</h2>
        <p className="text-xl text-zinc-400 mb-12 max-w-2xl font-medium">
          Architectural mastery enhanced with real-time edge processing and custom hardware integrations.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {["Custom Edge Devices & Gateways", "Industrial Mini PCs", "AI Deployment Nodes", "Real-Time Computing Layer", "Multi-Tenant Architecture", "Enterprise Rules Engine"].map((item) => (
            <div key={item} className="glass-card rounded-2xl p-6 text-foreground font-bold text-base flex items-center gap-4 transition-all hover:glow-text group">
              <div className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_hsla(var(--primary)/0.5)] group-hover:scale-125 transition-transform" />
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section className="py-24 relative">
        <div className="ambient-light w-[300px] h-[300px] bg-accent/10 bottom-0 right-0 blur-[100px]" />
        <h2 className="text-4xl font-black mb-16 text-center font-outfit">Architecture Layers</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {archLayers.map((l, i) => (
            <motion.div
              key={l.layer}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex items-center gap-8 rounded-3xl border border-white/5 bg-white/[0.02] p-8 hover:bg-white/[0.04] hover:border-white/10 transition-all"
            >
              <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0 relative group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full" />
                <l.icon className="w-10 h-10 text-primary relative z-10" />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 font-outfit">{l.layer}</h3>
                <p className="text-zinc-400 font-medium leading-relaxed">{l.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="bg-card border-y border-border">
        <h2 className="text-3xl font-bold mb-10 text-center">Enterprise Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {capabilities.map((c) => (
            <div key={c} className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3 text-sm">
              <Shield className="w-4 h-4 text-primary flex-shrink-0" />
              {c}
            </div>
          ))}
        </div>
      </Section>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">See EdgeOne in Action</h2>
          <p className="text-muted-foreground mb-8">Schedule a demo to explore how EdgeOne integrates with your infrastructure.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 glow-box">
            Talk to an Architect <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
