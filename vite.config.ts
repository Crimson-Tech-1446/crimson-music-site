// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Prerendering spins up a local Vite preview server to crawl/render pages; force IPv4 loopback
  // since some environments (CI runners, sandboxes) don't support binding IPv6 "::".
  vite: {
    preview: { host: "127.0.0.1" },
  },
  // Static export for GitHub Pages (custom domain, served from site root — no base path needed).
  // Nitro is fully disabled: no Cloudflare Worker, no server runtime, no server.ts/start.ts entry.
  // TanStack Start prerenders every route to plain HTML at build time instead.
  nitro: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      // Crawl links found in prerendered pages so nested routes (privacy, terms, etc.) are
      // discovered automatically without having to list every path by hand.
      crawlLinks: true,
      autoStaticPathsDiscovery: true,
    },
  },
});
