import { ArrowRight, Monitor, Radio, Server, MapPin } from "lucide-react";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const products = [
  {
    icon: Monitor,
    title: "Industrial Mini PCs",
    id: "mini-pcs",
    desc: "Rugged, fanless compute nodes designed for factory floors and edge deployments.",
    specs: ["Intel/AMD processors", "Wide temp range (-20°C to 60°C)", "Multiple I/O ports", "DIN rail mountable"],
  },
  {
    icon: Radio,
    title: "IoT Gateways",
    id: "gateways",
    desc: "Protocol-agnostic gateways that bridge devices to your edge and cloud infrastructure.",
    specs: ["BLE, Zigbee, LoRa, Wi-Fi", "MQTT/HTTP bridging", "Local buffering", "OTA firmware updates"],
  },
  {
    icon: Server,
    title: "Edge AI Servers",
    id: "ai-servers",
    desc: "GPU-enabled edge servers for running AI inference at the point of data creation.",
    specs: ["NVIDIA GPU support", "Up to 8 AI accelerators", "Real-time video analytics", "On-prem AI deployment"],
  },
  {
    icon: MapPin,
    title: "RTLS Kits",
    id: "rtls-kits",
    desc: "Complete indoor tracking hardware bundles for rapid deployment.",
    specs: ["UWB anchors & tags", "BLE beacons", "Gateway infrastructure", "Pre-configured software"],
  },
];

const ProductsPlugin = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Section className="pt-40 pb-24 relative overflow-hidden">
        <div className="ambient-light w-[500px] h-[500px] bg-primary/10 top-[-10%] left-[-10%]" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Hardware Products</span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 max-w-4xl font-outfit leading-[1.1]">
          Hardware for the <span className="text-gradient">Edge Era</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-medium">
          Enterprise-grade compute, connectivity, and tracking hardware — precision-engineered to integrate with the EdgeOne intelligence layer.
        </p>
      </Section>

      <div className="space-y-0">
        {products.map((p, i) => (
          <Section
            key={p.title}
            id={p.id}
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
                  <p.icon className="w-10 h-10 text-primary relative z-10" />
                </div>
                <h2 className="text-4xl font-black mb-6 font-outfit leading-tight">{p.title}</h2>
                <p className="text-xl text-zinc-300 mb-10 font-medium leading-relaxed">{p.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {p.specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 group hover:border-primary/50 transition-colors">
                      <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsla(var(--primary)/0.5)]" />
                      <span className="text-sm font-bold text-zinc-400 group-hover:text-white transition-colors">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={`glass-card rounded-3xl p-16 bg-grid relative overflow-hidden group ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="h-72 flex items-center justify-center relative z-10">
                  <p.icon className="w-40 h-40 text-primary opacity-20 group-hover:opacity-40 transition-all group-hover:scale-110 group-hover:rotate-3" />
                </div>
              </div>
            </motion.div>
          </Section>
        ))}
      </div>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-muted-foreground mb-8">Our team will recommend the right hardware for your deployment.</p>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 glow-box">
            Talk to an Architect <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPlugin;
