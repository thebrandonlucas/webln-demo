// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-netlify';
// const pkg = await import('./package.json', { assert: { type: 'json' } });

/** @type {import('@sveltejs/kit').Config} */

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			postcss: true
		})
	],
	kit: {
		adapter: adapter()
		// vite: {
		// 	ssr: {
		// 		noExternal: Object.keys(pkg.dependencies || {})
		// 	}
		// }
	}
};

export default config;
