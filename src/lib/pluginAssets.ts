/**
 * pluginAssets.ts
 *
 * Resolves asset URLs for the WordPress plugin build.
 *
 * The PHP plugin reads .vite/manifest.json, builds full absolute URLs for
 * every asset, and injects them via wp_localize_script as:
 *
 *   window.edgeoneAssets = {
 *     heroBg:      "https://site.com/.../static/assets/hero-bg.CBwoP6C0.jpg",
 *     logoIcon:    "https://site.com/.../static/assets/edgeone-logo-icon.CJqv9RIn.png",
 *     logoWhite:   "https://site.com/.../static/assets/edgeone-logo-white.BxYz.png",
 *     logoFull:    "https://site.com/.../static/assets/edgeone-logo-full.BxYz.png",
 *     brochurePdf: "https://site.com/.../static/assets/EdgeOne Brochure 2026.Bzr4dulq.pdf",
 *   }
 *
 * In dev mode (Vite dev server, no window.edgeoneAssets) the normal Vite
 * import URL is used as a fallback so the app still works locally.
 */

// Import assets so Vite processes them (hashing + copying to output dir).
import _heroBg      from "@/assets/hero-bg.jpg";
import _logoIcon    from "@/assets/edgeone-logo-icon.png";
import _logoWhite   from "@/assets/edgeone-logo-white.png";
import _logoFull    from "@/assets/edgeone-logo-full.png";
import _brochure    from "@/assets/EdgeOne Brochure 2026.pdf";

declare global {
  interface Window {
    edgeoneAssets?: {
      heroBg?:      string;
      logoIcon?:    string;
      logoWhite?:   string;
      logoFull?:    string;
      brochurePdf?: string;
    };
  }
}

const a = () => window.edgeoneAssets ?? {};

export const heroBgUrl      = (): string => a().heroBg      ?? _heroBg;
export const logoIconUrl    = (): string => a().logoIcon    ?? _logoIcon;
export const logoWhiteUrl   = (): string => a().logoWhite   ?? _logoWhite;
export const logoFullUrl    = (): string => a().logoFull    ?? _logoFull;
export const brochurePdfUrl = (): string => a().brochurePdf ?? _brochure;
