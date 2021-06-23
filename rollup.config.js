import babel from '@rollup/plugin-babel'
import commonJs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'

export default defineConfig({
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/esm/index.esm.js',
      format: 'esm',
    },
    {
      file: 'dist/cjs/index.cjs.js',
      format: 'commonjs',
    },
  ],
  plugins: [
    nodeResolve(),
    commonJs(),
    typescript(),
    babel({ babelHelpers: 'bundled' }),
  ],
})
