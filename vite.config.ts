import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

import type { Plugin } from 'vite';

function inlineCssPlugin(): Plugin {
  return {
    name: 'inline-css-plugin',
    apply: 'build',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post',
      handler(html, { bundle }) {
        if (!bundle) return html;
        let modifiedHtml = html;
        for (const [fileName, chunk] of Object.entries(bundle)) {
          if (fileName.endsWith('.css') && chunk.type === 'asset') {
            const cssContent = chunk.source.toString();
            const linkRegex = new RegExp(`<link[^>]+href="[^"]*${fileName}"[^>]*>`, 'g');
            modifiedHtml = modifiedHtml.replace(linkRegex, `<style>${cssContent}</style>`);
          }
        }
        return modifiedHtml;
      }
    }
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), inlineCssPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
