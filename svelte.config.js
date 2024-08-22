import adapter from '@sveltejs/adapter-vercel'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

import { mdsvex } from 'mdsvex'

/** @type {import("mdsvex").MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md']
}

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['/'] // Lista de rutas que quieres prerenderizar
		}
	},
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess({
			postcss: true
		}),
		mdsvex(mdsvexOptions)
	]
}
export default config
