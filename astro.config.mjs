import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import remarkSectionize from "remark-sectionize";

import tailwind from "@astrojs/tailwind";

import customTheme from "./phix-light.json";

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'preserve',
  },
  markdown: {
    shikiConfig: {
      theme: customTheme,
      // Add custom languages
      // Note: Shiki has countless langs built-in, including .astro!
      // https://shiki.style/languages
      langs: [],
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
      // Add custom transformers: https://shiki.style/guide/transformers
      // Find common transformers: https://shiki.style/packages/transformers
      transformers: [],
    },
    gfm: true,
    remarkPlugins: [remarkSectionize],
  },
  integrations: [
    mdx(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  server: {
    host: true,
  }
});