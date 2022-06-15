import adapter from '@sveltejs/adapter-static'
import path from 'path'
import preprocess from 'svelte-preprocess'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: [
    preprocess({
      postcss: {
        configFilePath: path.join(__dirname, 'postcss.config.js'),
      },
    }),
  ],

  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
    vite: {
      resolve: {
        alias: {
          $comp: path.resolve('./src/components'),
        },
      },
      test: {
        globals: true,
        environment: 'jsdom',
      },
    },
  },
}

export default config
