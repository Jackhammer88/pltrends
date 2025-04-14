import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */

const dev = process.env.NODE_ENV !== 'production';

const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			fallback: 'index.html',
		}),
		paths: {
			base: dev ? '' : '/pltrends'
		}
	}
};

export default config;
