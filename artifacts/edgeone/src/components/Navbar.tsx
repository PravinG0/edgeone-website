import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import edgeoneLogo from "@/assets/edgeone-logo-white.png";

const navItems = [
  { label: "Platform", path: "/platform" },
  {
    label: "Solutions",
    path: "/solutions",
    children: [
      { label: "Indoor Tracking (RTLS)", path: "/solutions#rtls" },
      { label: "Industrial Monitoring", path: "/solutions#monitoring" },
      { label: "Healthcare IoT", path: "/solutions#healthcare" },
      { label: "Edge AI Deployments", path: "/solutions#edge-ai" },
    ],
  },
  {
    label: "Industries",
    path: "/industries",
  },
  {
    label: "Hardware",
    path: "/products",
    children: [
      { label: "Industrial Mini PCs", path: "/products#mini-pcs" },
      { label: "IoT Gateways", path: "/products#gateways" },
      { label: "Edge AI Servers", path: "/products#ai-servers" },
      { label: "RTLS Kits", path: "/products#rtls-kits" },
    ],
  },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-2xl">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={edgeoneLogo} alt="EdgeOne" className="h-7" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setHoveredDropdown(item.label)}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-3 py-2 text-sm font-semibold rounded-md transition-all flex items-center gap-1 ${location.pathname === item.path
                    ? "text-primary glow-text"
                    : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
              >
                {item.label}
                {item.children && <ChevronDown className="w-3.5 h-3.5" />}
              </Link>

              <AnimatePresence>
                {item.children && hoveredDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-white/10 bg-card/90 backdrop-blur-2xl p-2 shadow-2xl"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.path}
                        className="block rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover-surface transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 glow-box"
          >
            Talk to an Architect
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground p-2"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden border-t border-border bg-background overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className="px-3 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover-surface transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
              >
                Talk to an Architect
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
