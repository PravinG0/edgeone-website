import { ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { industries } from "@/data/industries";

const IndustriesPlugin = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Section className="pt-32 pb-16 relative overflow-hidden">
        <div className="ambient-light w-[400px] h-[400px] bg-primary/10 top-0 left-0" />
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Target Industries</span>
        <h1 className="text-5xl md:text-8xl font-black mb-8 max-w-4xl font-outfit leading-[1.1]">
          Critical <span className="text-gradient">Sector Solutions</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-400 max-w-2xl font-medium">
          Edge-first intelligence for environments where latency and reliability define success.
        </p>
      </Section>

      <Section className="bg-card border-y border-border !pt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 flex flex-col"
            >
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:bg-primary/10 transition-colors relative">
                <div className="absolute inset-0 blur-xl bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                <ind.icon className="w-8 h-8 text-primary relative z-10" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-outfit">{ind.title}</h3>
              <p className="text-sm text-zinc-400 mb-10 flex-grow leading-relaxed">{ind.heroSubtitle}</p>
              <a
                href={`/industries/${ind.slug}`}
                className="inline-flex items-center gap-2 text-sm font-bold text-primary group/link"
              >
                Explore Industry
                <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>
      </Section>

      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Industry?</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            EdgeOne's modular architecture is designed to adapt to any mission-critical operational environment.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:brightness-110 glow-box transition-all">
            Talk to an Architect <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPlugin;
