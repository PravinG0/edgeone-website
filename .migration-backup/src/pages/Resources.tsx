import { useState } from "react";
import Layout from "@/components/Layout";
import Section from "@/components/Section";
import { Download, FileText, CheckCircle2 } from "lucide-react";
import { industries } from "@/data/industries";
import { motion } from "framer-motion";

import brochurePdf from "@/assets/EdgeOne Brochure 2026.pdf";

const Resources = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
        // Automatically open/download the PDF after submission
        window.open(brochurePdf, '_blank');
    };

    return (
        <Layout>
            <Section className="pt-40 pb-24 relative overflow-hidden">
                <div className="ambient-light w-[600px] h-[600px] bg-primary/10 top-[-10%] right-[-10%]" />
                <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
                    <div className="relative z-10">
                        <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Resource Center</span>
                        <h1 className="text-5xl md:text-8xl font-black mb-10 font-outfit leading-[1.05]">
                            Industry <br /><span className="text-gradient">Intelligence</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-zinc-400 mb-12 font-medium leading-relaxed">
                            Access our technical vault of implementation blueprints, architecture whitepapers, and operational deep-dives.
                        </p>

                        <div className="space-y-6">
                            {[
                                "Detailed Architecture Overviews",
                                "Technical Use Case Deep-Dives",
                                "Deployment Best Practices",
                                "ROI & Business Impact Analysis"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20 group-hover:bg-primary/20 transition-colors">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-lg font-bold text-zinc-300 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="ambient-light w-[300px] h-[300px] bg-accent/10 bottom-0 left-0 blur-[80px]" />
                        {submitted ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="glass-card rounded-[2.5rem] p-16 text-center relative z-10"
                            >
                                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20">
                                    <FileText className="w-12 h-12 text-primary" />
                                </div>
                                <h3 className="text-3xl font-black mb-4 font-outfit">Brief Transmitted</h3>
                                <p className="text-zinc-400 mb-6 text-lg font-medium">
                                    Check your enterprise inbox. The requested documentation is being delivered.
                                </p>
                                <a 
                                    href={brochurePdf}
                                    download="EdgeOne Brochure 2026.pdf"
                                    className="inline-flex items-center gap-2 mb-10 text-primary font-bold hover:glow-text transition-all tracking-widest uppercase text-sm"
                                >
                                    Manual Download <Download className="w-4 h-4" />
                                </a>
                                <div className="block">
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-zinc-500 font-bold hover:text-white transition-all tracking-widest uppercase text-xs"
                                    >
                                        Download another brief
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <div className="glass-card rounded-[2.5rem] p-10 lg:p-12 relative overflow-hidden z-10">
                                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full -mr-20 -mt-20 blur-3xl" />
                                <h3 className="text-3xl font-black mb-8 font-outfit">Get the Brief</h3>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Full Name</label>
                                        <input type="text" required placeholder="John Doe" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-medium" />
                                    </div>
                                    <div>
                                        <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Enterprise Email</label>
                                        <input type="email" required placeholder="john@company.com" className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-medium" />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-6">
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Company</label>
                                            <input type="text" required placeholder="Acme Inc." className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-medium" />
                                        </div>
                                        <div>
                                            <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Specialization</label>
                                            <select required className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-bold appearance-none cursor-pointer">
                                                <option value="" className="bg-background">Select Industry</option>
                                                {industries.map(ind => (
                                                    <option key={ind.id} value={ind.id} className="bg-background">{ind.title}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-xl bg-primary py-4 text-base font-black text-white hover:brightness-110 transition-all glow-box flex items-center justify-center gap-4 uppercase tracking-widest font-outfit"
                                    >
                                        Access PDF <Download className="w-6 h-6" />
                                    </button>
                                    <p className="text-[10px] text-zinc-500 text-center font-bold tracking-tight">
                                        By downloading, you agree to receive technical infrastructure updates from EdgeOne.
                                    </p>
                                </form>
                            </div>
                        )}
                    </div>
                </div>
            </Section>

            <Section className="bg-white/[0.02] border-y border-white/5 !py-32">
                <div className="text-center mb-20">
                    <h2 className="text-5xl font-black mb-6 font-outfit tracking-tight">Technical Vault</h2>
                    <p className="text-xl text-zinc-400 font-medium">Deep architectural dives into the EdgeOne ecosystem.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    {[
                        { title: "Edge Architecture Guide", type: "Technical Whitepaper", date: "Feb 2026" },
                        { title: "RTLS Implementation Blueprint", type: "Deployment Guide", date: "Jan 2026" },
                        { title: "Hybrid Cloud Connectivity", type: "Architecture Brief", date: "Dec 2025" }
                    ].map((item, i) => (
                        <div key={i} className="group glass-card p-10 rounded-3xl hover:-translate-y-2 transition-all duration-500">
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-6 block">{item.type}</span>
                            <h4 className="text-2xl font-bold mb-10 font-outfit group-hover:text-primary transition-colors leading-tight">{item.title}</h4>
                            <div className="flex items-center justify-between mt-8 border-t border-white/10 pt-6">
                                <span className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{item.date}</span>
                                <a 
                                    href={brochurePdf}
                                    download={`${item.title}.pdf`}
                                    className="text-primary text-xs font-black flex items-center gap-2 hover:glow-text transition-all uppercase tracking-widest"
                                >
                                    Download <Download className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </Section>
        </Layout>
    );
};

export default Resources;
