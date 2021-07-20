import { resolve } from 'path'
import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  root: resolve(__dirname),
  esbuild: {
    jsxInject: `import React from 'react'`,
  },
  build: {
    lib: {
      entry: 'src/index.ts',
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^react/, /^react-dom/, /^lit-element/],
      output: {
        globals: {
          react: 'React',
        },
      },
      plugins: [
        typescript({
          tsconfig: resolve(__dirname, 'tsconfig.example.json'),
        }),
        reactRefresh(),
      ],
    },
  },
  server: {
    open: true,
  },
})
