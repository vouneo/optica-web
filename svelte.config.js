import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      entries: ['/'] // Lista de rutas que quieres prerenderizar
    }
  },
  preprocess: vitePreprocess({
	postcss: true
  })
};
export default config;