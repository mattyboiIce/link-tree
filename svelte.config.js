// svelte.config.js
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // run vite’s built-in preprocessors (TS, JSX support, etc.)
  // plus run svelte-preprocess for PostCSS/Tailwind
  preprocess: [
    vitePreprocess(),
    sveltePreprocess({ postcss: true })
  ],

  kit: {
    adapter: adapter()
  }
};

export default config;
