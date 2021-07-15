import { resolve } from 'path'
import { defineConfig } from 'vite'
import typescript from '@rollup/plugin-typescript'
import { name } from './package.json'

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
