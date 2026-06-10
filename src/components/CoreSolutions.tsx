/**
 * CoreSolutions.tsx
 * "Our Core Solutions" bento grid:
 *  Row 1: 3 equal cards (col-span-4 each)
 *  Row 2: 3 equal cards (col-span-4 each)
 *  GSAP scroll reveal + 3-D mouse tilt + spotlight + conic border
 */

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Brain, Network, Cpu, HeartPulse, HardDrive, Workflow,
  type LucideIcon,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

type Solution = {
  title: string;
  desc: string;
  icon: LucideIcon;
  accent: string;
  tag: string;
};

const SOLUTIONS: Solution[] = [
  {
    title: "Edge AI Solutions",
    desc: "Deploy AI directly at the edge with ultra-low latency processing, real-time analytics, and intelligent automation — no cloud dependency, full control at the point of action.",
    icon: Brain,
    accent: "oklch(0.72 0.22 255)",
    tag: "01 / Intelligence",
  },
  {
    title: "Industrial IoT Systems",
    desc: "Smart sensors, telemetry engines, monitoring gateways, and enterprise IoT platforms — a complete IoT stack from device to dashboard.",
    icon: Network,
    accent: "oklch(0.78 0.18 195)",
    tag: "02 / Connectivity",
  },
  {
    title: "GPU Servers & AI Infrastructure",
    desc: "Custom-built AI workstations, GPU clusters, inference servers, and enterprise hardware powering ML pipelines, LLM inference, and computer vision systems.",
    icon: Cpu,
    accent: "oklch(0.65 0.25 285)",
    tag: "03 / Compute",
  },
  {
    title: "Smart Healthcare Technologies",
    desc: "Remote patient monitoring, medical device integrations, and hospital intelligence systems that bring real-time IoT and edge AI together for clinical impact.",
    icon: HeartPulse,
    accent: "oklch(0.68 0.24 15)",
    tag: "04 / Healthcare",
  },
  {
    title: "Edge Computing Devices",
    desc: "Industrial PCs, rugged systems, panel PCs, and custom edge hardware — engineered for the harshest environments and mission-critical uptime.",
    icon: HardDrive,
    accent: "oklch(0.70 0.20 255)",
    tag: "05 / Hardware",
  },
  {
    title: "Enterprise Automation",
    desc: "AI-powered workflows, smart dashboards, and operational intelligence platforms with private cloud, storage, and IaaS for a complete enterprise stack.",
    icon: Workflow,
    accent: "oklch(0.65 0.25 285)",
    tag: "06 / Automation",
  },
];

export function CoreSolutions() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const headlineRef = useRef<HTMLDivElement | null>(null);
  const cardsRef   = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Headline reveal
      gsap.from(".cs-eyebrow, .cs-headline > span, .cs-sub", {
        scrollTrigger: { trigger: headlineRef.current, start: "top 82%" },
        y: 36, opacity: 0, duration: 0.9, ease: "power3.out", stagger: 0.07,
      });

      // Cards staggered rise
      const cards = gsap.utils.toArray<HTMLElement>(".cs-card");
      if (!cards.length) return;

      gsap.from(cards, {
        scrollTrigger: { trigger: cardsRef.current, start: "top 78%" },
        y: 60, opacity: 0, scale: 0.96,
        duration: 0.8, ease: "power3.out", stagger: 0.09,
      });

      // 3-D mouse-tilt + spotlight
      cards.forEach((card) => {
        const onMove = (e: MouseEvent) => {
          const r = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${((e.clientX - r.left) / r.width)  * 100}%`);
          card.style.setProperty("--my", `${((e.clientY - r.top)  / r.height) * 100}%`);
          const rx = ((e.clientY - r.top)  / r.height - 0.5) * -7;
          const ry = ((e.clientX - r.left) / r.width  - 0.5) *  7;
          gsap.to(card, { rotateX: rx, rotateY: ry, duration: 0.35, ease: "power2.out", transformPerspective: 900 });
        };
        const onLeave = () => gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.5, ease: "power3.out" });
        card.addEventListener("mousemove", onMove);
        card.addEventListener("mouseleave", onLeave);
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden py-32 px-6 bg-background"
      aria-labelledby="core-solutions"
    >
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, hsl(221.2 83.2% 53.3% / 0.08) 1px, transparent 1px), linear-gradient(to bottom, hsl(221.2 83.2% 53.3% / 0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Top glow blob */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl opacity-20"
        style={{ background: "radial-gradient(circle, hsl(221.2 83.2% 53.3%), transparent 70%)" }}
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* Header */}
      <div ref={headlineRef} className="relative mx-auto max-w-4xl text-center mb-16">
        <p className="cs-eyebrow mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          <span className="h-px w-8 bg-primary/60" />
          Our Core Solutions
          <span className="h-px w-8 bg-primary/60" />
        </p>
        <h2
          id="core-solutions"
          className="cs-headline text-4xl font-black leading-[1.05] tracking-tight md:text-6xl font-outfit"
        >
          <span className="block">End-to-End Intelligence.</span>
          <span className="block text-gradient">One Platform.</span>
        </h2>
        <p className="cs-sub mx-auto mt-6 max-w-2xl text-base text-zinc-400 md:text-lg font-medium">
          From IoT at the edge to enterprise-grade cloud infrastructure, every solution is built for
          performance, scale, and real-world reliability.
        </p>
      </div>

      {/* Card grid — 3 columns × 2 rows, all equal */}
      <div
        ref={cardsRef}
        className="relative mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        style={{ perspective: "1200px" }}
      >
        {SOLUTIONS.map((s) => {
          const Icon = s.icon;
          return (
            <article
              key={s.title}
              className="cs-card group relative flex flex-col overflow-hidden rounded-2xl p-7 will-change-transform transition-shadow duration-500 hover:shadow-[0_0_40px_-8px_var(--card-glow)]"
              style={{
                ["--accent" as string]: s.accent,
                ["--card-glow" as string]: s.accent,
                background: "linear-gradient(145deg, hsl(222.2 84% 6% / 0.9), hsl(222.2 84% 4.9% / 0.75))",
                backdropFilter: "blur(18px)",
                border: "1px solid hsl(221.2 83.2% 53.3% / 0.15)",
              }}
            >
              {/* Mouse spotlight */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl"
                style={{
                  background:
                    "radial-gradient(380px circle at var(--mx,50%) var(--my,50%), color-mix(in oklab, var(--accent) 22%, transparent), transparent 60%)",
                }}
              />

              {/* Animated conic border on hover */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  padding: "1px",
                  background:
                    "conic-gradient(from 0deg, transparent, color-mix(in oklab, var(--accent) 70%, transparent), transparent 40%)",
                  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                  animation: "orbit-spin 6s linear infinite",
                }}
              />

              {/* Tag row */}
              <div className="relative mb-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                <span>{s.tag}</span>
                <span
                  className="h-1.5 w-1.5 rounded-full flex-shrink-0"
                  style={{ background: s.accent, boxShadow: `0 0 10px ${s.accent}` }}
                />
              </div>

              {/* Icon */}
              <div className="relative mb-5 inline-flex self-start">
                <div
                  className="absolute inset-0 rounded-xl blur-xl opacity-60"
                  style={{ background: `color-mix(in oklab, ${s.accent} 50%, transparent)` }}
                />
                <div
                  className="relative grid h-13 w-13 place-items-center rounded-xl border"
                  style={{
                    height: "52px",
                    width: "52px",
                    background: `color-mix(in oklab, ${s.accent} 15%, transparent)`,
                    borderColor: `color-mix(in oklab, ${s.accent} 40%, transparent)`,
                  }}
                >
                  <Icon className="h-6 w-6" style={{ color: s.accent }} />
                </div>
              </div>

              {/* Content */}
              <h3 className="relative text-lg font-bold tracking-tight text-foreground md:text-xl font-outfit mb-3">
                {s.title}
              </h3>
              <p className="relative text-sm leading-relaxed text-zinc-400 flex-grow">
                {s.desc}
              </p>

              {/* Floating accent blob */}
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-12 -right-12 h-40 w-40 rounded-full opacity-20 blur-3xl"
                style={{
                  background: s.accent,
                  animation: "blob-float 14s ease-in-out infinite",
                }}
              />
            </article>
          );
        })}
      </div>
    </section>
  );
}
