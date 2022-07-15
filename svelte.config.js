// import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

import adapter from '@sveltejs/adapter-netlify';
// import pkg from './package.json'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const pkg = require('./package.json')

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
  kit: {
    adapter: adapter(),
    target: '#svelte',
    vite: {
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {}),
      },
    },
  },
};

export default config;
