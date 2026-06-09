import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // ── Plugin build mode ──────────────────────────────────────────────────
  // Run:  npx vite build --mode plugin
  // Output goes to ../edgeone-ascend-admin/react-build/
  // The PHP plugin reads asset-manifest.json to enqueue CSS + JS.
  if (mode === "plugin") {
    return {
      plugins: [react()],
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "./src"),
        },
      },
      build: {
        outDir: path.resolve(__dirname, "../edgeone-ascend-admin/react-build"),
        emptyOutDir: true,
        // Generate asset-manifest.json (same format as CRA / HireOne)
        manifest: true,
        rollupOptions: {
          input: path.resolve(__dirname, "src/plugin-main.tsx"),
          output: {
            // Predictable filenames so the PHP manifest reader works reliably
            entryFileNames: "static/js/[name].[hash].js",
            chunkFileNames: "static/js/[name].[hash].chunk.js",
            assetFileNames: (assetInfo) => {
              if (assetInfo.name?.endsWith(".css")) {
                return "static/css/[name].[hash][extname]";
              }
              return "static/assets/[name].[hash][extname]";
            },
          },
        },
      },
    };
  }

  // ── Default dev / production build ────────────────────────────────────
  return {
    server: {
      host: "::",
      port: 8080,
      hmr: {
        overlay: false,
      },
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
