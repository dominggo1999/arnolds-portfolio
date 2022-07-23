import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import svgrPlugin from 'vite-plugin-svgr';
import mdx from '@mdx-js/rollup';
import * as url from 'url';

const dirname = url.fileURLToPath(new URL('.', import.meta.url));
const r = (path) => resolve(dirname, path);

// https://vitejs.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ['react/jsx-runtime'],
  },
  resolve: {
    alias: {
      '~': r('src'),
    },
  },
  plugins: [
    mdx({ providerImportSource: '@mdx-js/react' }),
    react({
      babel: {
        plugins: [
          'babel-plugin-macros',
          [
            'babel-plugin-styled-components',
            {
              displayName: process.env.NODE_ENV !== 'production',
            },
          ],
        ],
      },
    }),
    svgrPlugin({
      svgrOptions: {
        icon: true,
        // ...svgr options (https://react-svgr.com/docs/options/)
      },
    }),
  ],
});
