import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "Indoor Tracking Deployment",
    industry: "Healthcare",
    metrics: [
      { value: "95%", label: "Location Accuracy" },
      { value: "<1s", label: "Latency" },
      { value: "3 Floors", label: "Coverage" },
    ],
    desc: "Deployed a full UWB-based RTLS system across a multi-floor hospital, enabling real-time tracking of patients, staff, and critical assets. Integrated with existing nurse call and EHR systems.",
  },
  {
    title: "Industrial Monitoring Infrastructure",
    industry: "Manufacturing",
    metrics: [
      { value: "40%", label: "Downtime Reduction" },
      { value: "500+", label: "Sensors Deployed" },
      { value: "24/7", label: "Monitoring" },
    ],
    desc: "Built a predictive maintenance pipeline across a 200,000 sq ft manufacturing facility. Edge nodes process vibration, temperature, and pressure data locally to trigger automated workflows.",
  },
  {
    title: "Healthcare Device Integration (Accuflow)",
    industry: "Healthcare",
    metrics: [
      { value: "200+", label: "Devices Connected" },
      { value: "99.9%", label: "Uptime" },
      { value: "Real-Time", label: "Data Pipeline" },
    ],
    desc: "Integrated Accuflow infusion pump data into a unified IoT platform, providing real-time patient monitoring dashboards and automated alerting for clinical staff.",
  },
];

const CaseStudies = () => {
  return (
    <Layout>
      <Section className="pt-28">
        <span className="text-xs font-semibold uppercase tracking-widest text-primary mb-4 block">Case Studies</span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 max-w-3xl">
          Real-World <span className="text-gradient">Deployments</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          See how organizations use EdgeOne to transform their operations with intelligent IoT infrastructure.
        </p>
      </Section>

      <div className="space-y-0">
        {caseStudies.map((cs, i) => (
          <Section key={cs.title} className={i % 2 === 0 ? "bg-card border-y border-border" : ""}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">{cs.industry}</span>
              <h2 className="text-3xl font-bold mt-2 mb-6">{cs.title}</h2>
              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                {cs.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-background p-5 text-center">
                    <div className="text-3xl font-bold text-gradient">{m.value}</div>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">{m.label}</div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-3xl">{cs.desc}</p>
            </motion.div>
          </Section>
        ))}
      </div>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Start Your Deployment</h2>
          <p className="text-muted-foreground mb-8">Every case study started with a conversation. Let's start yours.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 glow-box">
            Talk to an Architect <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CaseStudies;
