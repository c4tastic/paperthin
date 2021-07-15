import { defineConfig } from 'vite'
import { name } from './package.json'
import { resolve } from 'path'
import typescript from '@rollup/plugin-typescript'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name,
    },
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
      plugins: [
        typescript({
          tsconfig: resolve(__dirname, 'tsconfig.json'),
          rootDir: resolve(__dirname, 'src'),
          declaration: true,
          declarationDir: resolve(__dirname, 'dist', 'types'),
          allowSyntheticDefaultImports: true,
        }),
      ],
    },
  },
})
