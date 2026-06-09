import { Link } from "react-router-dom";
import edgeoneLogo from "@/assets/edgeone-logo-white.png";
import { Mail, Phone } from "lucide-react";

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
    address: "46 A Sri Sumangala Road Ratmalana, Sri Lanka",
    phone: ["+91 95850 35886"],
  },
  {
    country: "MEXICO",
    address: "Avenue Armando Birlain, Shafler No. 2001 Centro Sur, Floor 14, Corporate 2 Santiago de Querétaro, Querétaro, 76090",
    phone: ["+52 446 144 3375"],
  },
];

const Footer = () => {
  return (
    <footer className="relative border-t border-white/5 bg-background overflow-hidden">
      <div className="ambient-light w-[400px] h-[400px] bg-primary/5 top-[-10%] left-[-10%]" />
      <div className="container mx-auto px-4 py-24 relative z-10">
        {/* Contact Us Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-white/5 pb-12 mb-20 gap-8">
          <h2 className="text-4xl font-black font-outfit tracking-tighter">Initiate <span className="text-gradient">Infrastructure</span></h2>
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-16">
            <div className="group cursor-pointer">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2 transition-colors group-hover:text-primary">Engineering Info</p>
              <a href="mailto:info@edgeonecomputing.com" className="text-lg font-bold text-zinc-300 hover:text-white hover:glow-text transition-all">info@edgeonecomputing.com</a>
            </div>
            <div className="group cursor-pointer">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-500 mb-2 transition-colors group-hover:text-primary">Business Ops</p>
              <a href="mailto:contact@onedatasoftware.com" className="text-lg font-bold text-zinc-300 hover:text-white hover:glow-text transition-all">contact@onedatasoftware.com</a>
            </div>
          </div>
        </div>

        {/* Regional Offices Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          {offices.map((office, idx) => (
            <div key={office.country} className="flex flex-col group">
              <h4 className="text-lg font-black font-outfit mb-6 tracking-widest text-primary/80 group-hover:text-primary transition-colors">{office.country}</h4>
              <p className="text-zinc-500 text-sm font-medium leading-relaxed mb-8 group-hover:text-zinc-300 transition-colors">
                {office.address}
              </p>
              <div className="space-y-3 mt-auto">
                {office.phone.map((num) => (
                  <div key={num} className="flex items-center gap-3 transition-transform group-hover:translate-x-1 duration-300">
                    <Phone className="w-4 h-4 text-primary opacity-40" />
                    <a href={`tel:${num.replace(/[^0-9+]/g, '')}`} className="text-xs font-bold text-zinc-500 hover:text-white transition-colors">
                      {num}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Brand & Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 border-t border-white/5 pt-16 pb-8">
          <div className="space-y-6">
            <img src={edgeoneLogo} alt="EdgeOne" className="h-8 brightness-110" />
            <p className="text-zinc-500 text-sm font-medium leading-relaxed max-w-xs">
              Next-generation IoT infrastructure and edge intelligence for mission-critical industrial operations.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white mb-8">Platform</h4>
            <div className="flex flex-col gap-4">
              {["EdgeOne Platform", "Solutions", "Hardware"].map((item, i) => (
                <Link key={i} to={`/${item.toLowerCase().replace(" ", "")}`} className="text-sm font-bold text-zinc-500 hover:text-white transition-all hover:translate-x-1">{item}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-100 mb-8">System</h4>
            <div className="flex flex-col gap-4">
              {["About", "Industries", "Case Studies", "Resources"].map((item, i) => (
                <Link key={i} to={`/${item.toLowerCase().replace(" ", "-")}`} className="text-sm font-bold text-zinc-500 hover:text-white transition-all hover:translate-x-1">{item}</Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-start md:items-end justify-end space-y-4">
            <div className="flex items-center gap-6">
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700 hover:text-zinc-400 cursor-pointer transition-colors">Privacy</span>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-700 hover:text-zinc-400 cursor-pointer transition-colors">Compliance</span>
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-800">© 2026 EdgeOne Infrastructure Group.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
