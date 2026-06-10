import { useState } from "react";
import { Mail, MapPin, Phone, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import Section from "@/components/Section";
import { industries } from "@/data/industries";

const offices = [
  {
    country: "USA",
    address: "534 River Crossing Drive - 102, Fort Mill, SC 29715",
    phone: ["+1 (803) 906-0003"],
  },
  {
    country: "CANADA",
    address: "229 Yonge Street, Suite 400, Toronto, Ontario, M5B 1N9, Canada",
    phone: ["+1 (803) 906-0003"],
  },
  {
    country: "INDIA",
    address: "65, AA Arcade First Floor, Subramaniyam Avenue, Vilankuruchi Main Road, Coimbatore - 641035",
    phone: ["+91 95004 48060", "+91 97891 36662"],
  },
  {
    country: "SRI LANKA",
    address: "46 A Sri Sumangala Road, Ratmalana, Sri Lanka",
    phone: ["+91 95850 35886"],
  },
  {
    country: "MEXICO",
    address: "Avenue Armando Birlain, Shafler No. 2001 Centro Sur, Floor 14, Corporate 2 Santiago de Querétaro, Querétaro, 76090",
    phone: ["+52 446 144 3375"],
  },
];

const ContactPlugin = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData(e.currentTarget);
    try {
      const response = await fetch("https://formspree.io/f/xnjovvgg", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setSubmitted(true);
        toast.success("Message sent successfully!");
      } else {
        const errorData = await response.json();
        toast.error(`Submission failed: ${errorData.errors?.[0]?.message || "Please check your Formspree settings."}`);
      }
    } catch {
      toast.error("An error occurred. Please check your connection.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Toaster />
      <Section className="pt-40 pb-24 relative overflow-hidden">
        <div className="ambient-light w-[600px] h-[600px] bg-primary/10 top-[-10%] left-[-10%]" />
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Left */}
          <div className="relative z-10">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-6 block">Contact Us</span>
            <h1 className="text-5xl md:text-8xl font-black mb-10 font-outfit leading-[1.05]">
              Talk to an <br /><span className="text-gradient">Architect</span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12 font-medium">
              Ready to scale your next infrastructure project? Our engineering team is standing by to help design your edge intelligence layer.
            </p>

            <div className="glass-card rounded-[2rem] p-10 mb-12 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              <h3 className="text-2xl font-bold mb-4 font-outfit">Industry Transformation</h3>
              <p className="text-zinc-400 mb-8 font-medium">
                Explore how EdgeOne-powered intelligence can redefine your specific operational challenges.
              </p>
              <select className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-foreground focus:outline-none focus:border-primary transition-all cursor-pointer font-bold">
                <option value="" className="bg-background">Explore by Industry</option>
                {industries.map((ind) => (
                  <option key={ind.id} value={ind.slug} className="bg-background">{ind.title}</option>
                ))}
              </select>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">General Inquiries</p>
                  <a href="mailto:info@edgeonecomputing.com" className="text-foreground font-medium hover:text-primary transition-colors">info@edgeonecomputing.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Business Support</p>
                  <a href="mailto:contact@onedatasoftware.com" className="text-foreground font-medium hover:text-primary transition-colors">contact@onedatasoftware.com</a>
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="relative">
            <div className="ambient-light w-[300px] h-[300px] bg-accent/10 bottom-0 right-0 blur-[80px]" />
            {submitted ? (
              <div className="glass-card rounded-[2rem] p-12 text-center h-full flex flex-col items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-8 border border-primary/50">
                  <span className="text-4xl text-primary font-bold">✓</span>
                </div>
                <h3 className="text-3xl font-bold mb-4 font-outfit">Inquiry Received</h3>
                <p className="text-zinc-400 font-medium text-lg">Our engineering team will contact you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card rounded-[2.5rem] p-10 lg:p-14 space-y-8 relative z-10">
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">First Name</label>
                    <input name="firstName" type="text" required disabled={isLoading} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-medium disabled:opacity-50" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Last Name</label>
                    <input name="lastName" type="text" required disabled={isLoading} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-medium disabled:opacity-50" />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Enterprise Email</label>
                  <input name="email" type="email" required disabled={isLoading} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-medium disabled:opacity-50" />
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Company</label>
                    <input name="company" type="text" disabled={isLoading} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-medium disabled:opacity-50" />
                  </div>
                  <div>
                    <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Industry</label>
                    <select name="industry" required disabled={isLoading} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-bold appearance-none cursor-pointer disabled:opacity-50">
                      <option value="" className="bg-background">Select Industry</option>
                      {industries.map((ind) => (
                        <option key={ind.id} value={ind.id} className="bg-background">{ind.title}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-zinc-500 mb-2 block">Project Summary</label>
                  <textarea name="summary" rows={4} required disabled={isLoading} className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-3.5 text-base text-white focus:outline-none focus:border-primary/50 transition-all font-medium resize-none disabled:opacity-50" />
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full rounded-xl bg-primary py-4 text-base font-black text-white hover:brightness-110 transition-all glow-box uppercase tracking-widest font-outfit flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : "Initiate Discussion"}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Global Offices */}
        <div className="mt-40 pt-20 border-t border-white/5">
          <h2 className="text-4xl font-black mb-20 text-center font-outfit tracking-tight">Global Offices</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offices.map((office) => (
              <div key={office.country} className="glass-card rounded-3xl p-10 flex flex-col group hover:-translate-y-2 transition-all duration-500">
                <h4 className="text-2xl font-black mb-8 tracking-wider font-outfit border-b border-white/10 pb-4 inline-block">{office.country}</h4>
                <div className="flex gap-4 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <p className="text-base text-zinc-400 leading-relaxed font-medium">{office.address}</p>
                </div>
                <div className="space-y-4 mt-auto">
                  {office.phone.map((num) => (
                    <div key={num} className="flex items-center gap-4 group/item">
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center transition-colors group-hover/item:bg-primary/20">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <a href={`tel:${num.replace(/[^0-9+]/g, "")}`} className="text-sm font-bold text-zinc-300 hover:text-white transition-colors">
                        {num}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPlugin;
