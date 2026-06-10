/**
 * IndexPlugin.tsx
 *
 * The full Index page content rendered WITHOUT Navbar or Footer.
 * This is the entry used when building the WordPress plugin bundle.
 * WordPress provides its own header/footer — this file outputs only the sections.
 */

import { motion } from "framer-motion";
import { ArrowRight, Cpu, Radio, Server, Brain, Zap, Cloud, Building2, Tag, MapPin, Activity, Heart, Bot } from "lucide-react";
import { industries as industriesData } from "@/data/industries";
import Section from "@/components/Section";
import { heroBgUrl } from "@/lib/pluginAssets";

const flowSteps = [
  { icon: Radio,  label: "Device",       desc: "Sensor & device connectivity" },
  { icon: Server, label: "Gateway",      desc: "Protocol translation & routing" },
  { icon: Cpu,    label: "Edge",         desc: "Low-latency processing" },
  { icon: Brain,  label: "Intelligence", desc: "Rules engine & AI" },
  { icon: Zap,    label: "Action",       desc: "Trigger & automate" },
];

const deployments = [
  { icon: Building2, title: "On-Premise",  desc: "Deploy entirely within your secure network." },
  { icon: Cloud,     title: "Cloud",       desc: "Deploy on scalable public or private cloud infrastructure." },
  { icon: Server,    title: "Hybrid",      desc: "Process locally. Sync globally." },
  { icon: Tag,       title: "White-Label", desc: "Enterprise-ready, fully brandable deployments." },
];

const solutions = [
  { icon: MapPin,   title: "Indoor Tracking (RTLS)",  desc: "Real-time location intelligence for hospitals and facilities." },
  { icon: Activity, title: "Industrial Monitoring",   desc: "Live telemetry, predictive alerts, and automated workflows." },
  { icon: Heart,    title: "Healthcare IoT",          desc: "Integrated device data pipelines and operational dashboards." },
  { icon: Bot,      title: "Edge AI Deployments",     desc: "Deploy AI models directly at the edge for low-latency decisions." },
];

const caseStudies = [
  { title: "Indoor Tracking Deployment",        metric: "95%",  metricLabel: "Location Accuracy", desc: "Real-time asset and personnel tracking across a multi-floor hospital." },
  { title: "Industrial Monitoring Infrastructure", metric: "40%", metricLabel: "Downtime Reduction", desc: "Predictive maintenance pipeline for manufacturing floor equipment." },
  { title: "Healthcare Device Integration",     metric: "200+", metricLabel: "Devices Connected",  desc: "Accuflow integration delivering unified patient monitoring data." },
];

const IndexPlugin = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="ambient-light w-[500px] h-[500px] bg-primary top-[-10%] left-[-10%] animate-pulse" />
        <div className="ambient-light w-[400px] h-[400px] bg-accent bottom-[10%] right-[-5%] animate-pulse" />

        <div className="absolute inset-0">
          <img src={heroBgUrl()} alt="" className="w-full h-full object-cover opacity-20 scale-110 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
          <div className="absolute inset-0 bg-grid opacity-20" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-8 font-outfit">
              Future-Proof <br />
              <span className="text-gradient">Infrastructure.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-10 max-w-2xl font-medium">
              EdgeOne is a scalable enterprise-grade IoT and edge intelligence platform designed to connect devices,
              process data locally, and deliver real-time operational intelligence across industries.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-box"
              >
                Talk to an Architect
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/platform"
                className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary"
              >
                Explore Platform
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────── */}
      <Section className="border-t border-border">
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
              transition={{ delay: i * 0.1, duration: 0.5 }}
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
                <div className="hidden md:block w-12 h-px bg-gradient-to-r from-primary/60 to-primary/20 mx-2 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 w-4 bg-primary/80"
                    animate={{ x: ["-100%", "400%"] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
                  />
                </div>
              )}
              {i < flowSteps.length - 1 && (
                <div className="md:hidden w-px h-8 bg-gradient-to-b from-primary/60 to-primary/20 my-1" />
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── PLATFORM ─────────────────────────────────────────────────────── */}
      <Section className="bg-card border-y border-border">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Platform</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">A Full-Stack IoT & Edge Intelligence Platform</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              EdgeOne is not a dashboard customization service. It is a scalable infrastructure platform built on deep
              ThingsBoard architectural mastery, enhanced with custom hardware and real-time edge processing.
            </p>
            <a href="/platform" className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline">
              Explore Platform <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Custom Edge Devices & Gateways",
              "Industrial Mini PCs & AI Nodes",
              "Real-Time Processing Layer",
              "Hybrid Deployment Architecture",
              "Enterprise Multi-Tenant Design",
              "Rules Engine & Automation",
            ].map((item) => (
              <div
                key={item}
                className="glass-card rounded-xl p-4 text-sm font-bold text-zinc-300 hover:text-white hover:border-primary/50 transition-all flex items-center gap-3 group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_hsla(var(--primary)/0.5)] group-hover:scale-125 transition-transform" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── INDUSTRY HIGHLIGHT ───────────────────────────────────────────── */}
      <Section className="bg-background">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Industry-Focused IoT Intelligence</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Built for Your Specific Industry</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            EdgeOne provides pre-integrated infrastructure templates and edge intelligence models tailored for critical operations.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.slice(0, 6).map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group glass-card rounded-2xl p-8 h-full flex flex-col hover:-translate-y-2 transition-all duration-500"
            >
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors relative">
                <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full group-hover:bg-primary/40 transition-all" />
                <ind.icon className="w-8 h-8 text-primary relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-outfit">{ind.title}</h3>
              <p className="text-sm text-zinc-400 mb-8 flex-grow leading-relaxed">{ind.heroSubtitle}</p>
              <a
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:glow-text"
              >
                Explore Industry <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a href="/industries" className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground hover:bg-secondary">
            View All Industries
          </a>
        </div>
      </Section>

      {/* ── DEPLOYMENT ───────────────────────────────────────────────────── */}
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

      {/* ── SOLUTIONS ────────────────────────────────────────────────────── */}
      <Section className="bg-white/[0.02] border-y border-white/5 py-32">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Solutions</span>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight">Performance-Driven Results</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-8">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-3xl p-10 transition-all group"
            >
              <div className="flex items-start gap-8">
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex-shrink-0 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-primary/10 relative">
                  <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                  <s.icon className="w-8 h-8 text-primary relative z-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 font-outfit">{s.title}</h3>
                  <p className="text-zinc-400 font-medium leading-relaxed">{s.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── INFRASTRUCTURE TAGS ──────────────────────────────────────────── */}
      <Section className="border-t border-white/5 py-24 bg-background">
        <div className="text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Cross-Industry</span>
          <h2 className="text-4xl md:text-5xl font-black font-outfit tracking-tight">
            Universal <span className="text-gradient">Reliability</span>
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {industriesData.map((ind) => (
            <a
              key={ind.id}
              href={`/industries/${ind.slug}`}
              className="flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 px-6 py-4 hover:border-primary/50 hover:bg-white/10 transition-all group"
            >
              <ind.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
              <span className="text-base font-bold text-zinc-300 group-hover:text-white transition-colors">{ind.title}</span>
            </a>
          ))}
        </div>
      </Section>

      {/* ── CASE STUDIES ─────────────────────────────────────────────────── */}
      <Section className="bg-white/[0.02] border-y border-white/5 py-32">
        <div className="text-center mb-20">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Case Studies</span>
          <h2 className="text-4xl md:text-6xl font-black font-outfit tracking-tight">Industrial Impact</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((cs, i) => (
            <motion.div
              key={cs.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-[2rem] p-10 flex flex-col transition-all group"
            >
              <div className="text-5xl font-black text-gradient mb-3 font-outfit">{cs.metric}</div>
              <div className="text-xs text-primary font-black uppercase tracking-[0.3em] mb-8">{cs.metricLabel}</div>
              <h3 className="text-2xl font-bold mb-4 font-outfit">{cs.title}</h3>
              <p className="text-base text-zinc-400 font-medium leading-relaxed mb-6 flex-grow">{cs.desc}</p>
              <a href="/case-studies" className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:glow-text">
                Read Report <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── TRUST ────────────────────────────────────────────────────────── */}
      <Section>
        <div className="text-center mb-10">
          <p className="text-sm text-muted-foreground font-medium">Enterprise-grade architecture. Real-world deployments.</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          {["ThingsBoard Architecture", "AWS Deployment Capable", "Hardware OEM Partners"].map((logo) => (
            <div key={logo} className="px-6 py-3 rounded-lg border border-border bg-card text-sm text-muted-foreground font-mono">
              {logo}
            </div>
          ))}
        </div>
      </Section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="relative py-40 md:py-56 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="ambient-light w-[800px] h-[800px] bg-primary/20 bottom-[-20%] left-1/2 -translate-x-1/2 blur-[150px]" />
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl md:text-8xl font-black mb-10 font-outfit leading-tight tracking-tighter">
              Ready to Scale your <br />
              <span className="text-gradient">Intelligent Intel</span>?
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mx-auto mb-16 font-medium leading-relaxed">
              From reactive monitoring to autonomous edge operations. Design your mission-critical infrastructure with EdgeOne.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-4 rounded-2xl bg-primary px-12 py-6 text-xl font-black text-white transition-all hover:brightness-110 glow-box uppercase tracking-widest font-outfit"
            >
              Consult an Architect
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>
        </div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      </section>

    </div>
  );
};

export default IndexPlugin;
