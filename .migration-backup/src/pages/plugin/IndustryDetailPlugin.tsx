import { ArrowRight, CheckCircle2, ChevronRight, LayoutDashboard, Cpu, Network, Share2 } from "lucide-react";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import { industries } from "@/data/industries";

/**
 * IndustryDetailPlugin
 *
 * In WordPress the slug is passed via a data attribute on the root div.
 * Usage: <div id="root" data-slug="healthcare"></div>
 * The PHP shortcode accepts a slug attribute: [edgeone_industry_detail slug="healthcare"]
 */
const IndustryDetailPlugin = () => {
  // Read slug from the root element's data attribute (set by the PHP shortcode)
  const slug = document.getElementById("edgeone-root")?.dataset?.slug ?? "";
  const industry = industries.find((ind) => ind.slug === slug);

  if (!industry) {
    return (
      <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Industry Not Found</h1>
          <a href="/industries" className="text-primary underline">Back to Industries</a>
        </div>
      </div>
    );
  }

  const Icon = industry.icon;

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <Section className="pt-40 pb-24 relative overflow-hidden">
        <div className="ambient-light w-[600px] h-[600px] bg-primary/10 top-0 left-[-10%]" />
        <div className="flex flex-col items-start relative z-10">
          <a href="/industries" className="flex items-center gap-2 text-sm font-bold text-primary mb-12 hover:opacity-80 transition-opacity uppercase tracking-widest">
            <ChevronRight className="w-4 h-4 rotate-180" /> Back to Industries
          </a>
          <div className="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mb-10 border border-white/10 relative">
            <div className="absolute inset-0 blur-2xl bg-primary/20 rounded-full" />
            <Icon className="w-10 h-10 text-primary relative z-10" />
          </div>
          <h1 className="text-5xl md:text-8xl font-black mb-8 max-w-5xl leading-[1.05] font-outfit">
            {industry.heroTitle.split(" ").map((word, i, arr) =>
              i === arr.length - 1
                ? <span key={i} className="text-gradient">{word}</span>
                : word + " "
            )}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl leading-relaxed font-medium">
            {industry.heroSubtitle}
          </p>
        </div>
      </Section>

      {/* CHALLENGE & SOLUTION */}
      <Section className="bg-white/[0.02] border-y border-white/5">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-bold mb-10 flex items-center gap-4 font-outfit">
              <span className="w-12 h-1.5 bg-primary rounded-full shadow-[0_0_15px_hsla(var(--primary)/0.5)]" /> The Challenge
            </h2>
            <ul className="space-y-6">
              {industry.challenge.map((c, i) => (
                <li key={i} className="flex items-start gap-5 text-zinc-400 text-lg">
                  <div className="mt-2.5 w-2 h-2 rounded-full bg-primary flex-shrink-0 glow-box" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass-card rounded-3xl p-10 lg:p-14 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20" />
            <h2 className="text-3xl font-bold mb-8 font-outfit">The Solution</h2>
            <p className="text-zinc-300 mb-10 leading-relaxed text-lg font-medium">{industry.solution}</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {industry.solutionPoints.map((p, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-bold">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* USE CASES */}
      <Section>
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-bold">Key Use Cases</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industry.useCases.map((uc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors"
            >
              <h4 className="font-semibold text-lg">{uc}</h4>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ARCHITECTURE */}
      <Section className="bg-card border-y border-border overflow-hidden">
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Architecture</span>
          <h2 className="text-3xl md:text-4xl font-bold">Deployment Overview</h2>
        </div>
        <div className="relative">
          <div className="grid lg:grid-cols-4 gap-8 relative z-10">
            {[
              { label: "Device Layer",      data: industry.architecture.device,      icon: Cpu },
              { label: "Edge Layer",        data: industry.architecture.edge,        icon: Network },
              { label: "Platform Layer",    data: industry.architecture.platform,    icon: LayoutDashboard },
              { label: "Integration Layer", data: industry.architecture.integration, icon: Share2 },
            ].map((layer, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-background border border-border flex items-center justify-center mb-6 shadow-sm">
                  <layer.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-bold mb-4">{layer.label}</h4>
                <div className="space-y-2">
                  {layer.data.map((item, j) => (
                    <p key={j} className="text-sm text-muted-foreground">{item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="hidden lg:block absolute top-7 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
      </Section>

      {/* IMPACT & FEATURES */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-10">Business Impact</h3>
            <div className="grid sm:grid-cols-2 gap-8">
              {industry.impact.map((stat, i) => (
                <div key={i} className="p-6 rounded-xl bg-secondary/30 border border-border">
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-10">Enterprise-Grade Features</h3>
            <div className="space-y-4">
              {industry.features.map((f, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <span className="text-sm font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* WHY EDGEONE */}
      <Section className="bg-primary/5 border-y border-primary/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">Why EdgeOne for {industry.title.split(" & ")[0]}?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {industry.why.map((reason, i) => (
              <div key={i} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="font-medium">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Operations?</h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-2xl mx-auto">
            Design your industry-first IoT infrastructure with our architects.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-base font-semibold text-primary-foreground hover:brightness-110 glow-box transition-all">
              Talk to an Architect <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/resources" className="inline-flex items-center gap-2 rounded-lg border border-border px-8 py-4 text-sm font-semibold text-foreground hover:bg-secondary transition-all">
              Download Industry Brief
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetailPlugin;
