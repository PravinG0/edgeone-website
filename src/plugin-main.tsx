/**
 * plugin-main.tsx
 *
 * WordPress plugin entry point.
 * Mounts the correct page component based on the `data-page` attribute
 * set on <div id="root"> by the PHP shortcode.
 *
 * Each shortcode sets data-page (and optionally data-slug for industry detail):
 *   [edgeone_index]            → IndexPlugin
 *   [edgeone_about]            → AboutPlugin
 *   [edgeone_case_studies]     → CaseStudiesPlugin
 *   [edgeone_contact]          → ContactPlugin
 *   [edgeone_industries]       → IndustriesPlugin
 *   [edgeone_industry_detail slug="healthcare"] → IndustryDetailPlugin
 *   [edgeone_platform]         → PlatformPlugin
 *   [edgeone_products]         → ProductsPlugin
 *   [edgeone_resources]        → ResourcesPlugin
 *   [edgeone_solutions]        → SolutionsPlugin
 *
 * Build command (run from edgeone-ascend-main folder):
 *   npx vite build --mode plugin
 */

import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import IndexPlugin          from "./pages/IndexPlugin";
import AboutPlugin          from "./pages/plugin/AboutPlugin";
import CaseStudiesPlugin    from "./pages/plugin/CaseStudiesPlugin";
import ContactPlugin        from "./pages/plugin/ContactPlugin";
import IndustriesPlugin     from "./pages/plugin/IndustriesPlugin";
import IndustryDetailPlugin from "./pages/plugin/IndustryDetailPlugin";
import PlatformPlugin       from "./pages/plugin/PlatformPlugin";
import ProductsPlugin       from "./pages/plugin/ProductsPlugin";
import ResourcesPlugin      from "./pages/plugin/ResourcesPlugin";
import SolutionsPlugin      from "./pages/plugin/SolutionsPlugin";

import "./index.css";

const PAGE_MAP: Record<string, React.ComponentType> = {
  index:           IndexPlugin,
  about:           AboutPlugin,
  "case-studies":  CaseStudiesPlugin,
  contact:         ContactPlugin,
  industries:      IndustriesPlugin,
  "industry-detail": IndustryDetailPlugin,
  platform:        PlatformPlugin,
  products:        ProductsPlugin,
  resources:       ResourcesPlugin,
  solutions:       SolutionsPlugin,
};

const rootEl = document.getElementById("edgeone-root");
if (rootEl) {
  const page = rootEl.dataset.page ?? "index";
  const PageComponent = PAGE_MAP[page] ?? IndexPlugin;

  const queryClient = new QueryClient();

  createRoot(rootEl).render(
    <QueryClientProvider client={queryClient}>
      <PageComponent />
    </QueryClientProvider>
  );
}
