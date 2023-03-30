import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://xyndra.github.io',
  base: '/math_renderer',
  integrations: [svelte()]
});