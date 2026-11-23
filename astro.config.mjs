// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import { createClient } from './src/lib/prismicio.ts';

const client = createClient();
const obras = await client.getAllByType('obra', {
  orderings: [{ field: 'my.obra.order', direction: 'asc' }]
});

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/obras': `/obras/${obras[0].uid}`
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
