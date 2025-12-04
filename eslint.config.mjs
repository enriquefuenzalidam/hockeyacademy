// eslint.config.mjs
import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';

export default defineConfig([
  // Next.js + React + Core Web Vitals rules (flat config from eslint-config-next 16)
  ...nextVitals,

  // Your custom overrides
  {
    rules: {
      // Keep your previous rule: allow <img>
      '@next/next/no-img-element': 'off',
      'react-hooks/immutability': 'off',          // if you get tired of the preloadImages rule
      'react-hooks/set-state-in-effect': 'off',   // to silence this one everywhere
    },
  },

  // Default ignores (you can tweak these if you like)
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
  ]),
]);
