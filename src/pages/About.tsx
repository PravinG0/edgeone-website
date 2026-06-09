import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import edgeoneLogoIcon from "@/assets/edgeone-logo-icon.png";

const About = () => {
  return (
    <Layout>
      <Section className="pt-40 pb-24 relative overflow-hidden">
        <div className="ambient-light w-[600px] h-[600px] bg-primary/10 top-[-10%] left-[-10%]" />
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">About EdgeOne</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 font-outfit leading-[1.05]">
              We Build <span className="text-gradient">Core Tech</span>, Not Just UIs.
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-6 font-medium">
              EdgeOne evolved from deep ThingsBoard architectural deployments into a category-defining IoT infrastructure firm.
            </p>
            <p className="text-lg text-zinc-500 font-medium leading-relaxed">
              We control the full stack — from silicon-level hardware integration and private edge clouds to
              industrial computing clusters and high-availability telemetry engines.
            </p>
          </div>
          <div className="flex items-center justify-center relative">
            <div className="ambient-light w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px]" />
            <div className="w-72 h-72 rounded-[3.5rem] border border-white/10 bg-white/5 backdrop-blur-2xl flex items-center justify-center relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 opacity-40 group-hover:opacity-60 transition-opacity" />
              <img
                src={edgeoneLogoIcon}
                alt="EdgeOne"
                className="w-40 relative z-10 drop-shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all duration-700 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white/[0.02] border-y border-white/5 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { icon: Target, title: "Engineered Precision", desc: "Building the next generation of industrial edge infrastructure with pixel-perfect attention to operational reliability." },
            { icon: Eye, title: "Autonomous Future", desc: "Powering a world where every industrial asset is an intelligent node capable of independent real-time decisions." },
            { icon: Shield, title: "Sovereign Infrastructure", desc: "Ensuring data sovereignty and security by keeping critical intelligence at the edge, where it belongs." },
          ].map((item) => (
            <div key={item.title} className="text-center group">
              <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8 group-hover:bg-primary/10 transition-colors relative">
                <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full scale-0 group-hover:scale-100 transition-transform" />
                <item.icon className="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-2xl font-bold mb-4 font-outfit">{item.title}</h3>
              <p className="text-base text-zinc-400 font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="py-20 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4">Join the EdgeOne Ecosystem</h2>
          <p className="text-muted-foreground mb-8">Partner with us or explore career opportunities.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 glow-box">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default About;
