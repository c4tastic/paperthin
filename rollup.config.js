import babel from '@rollup/plugin-babel'
import commonJs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { defineConfig } from 'rollup'
import { resolve } from 'path'

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
    typescript({
      typescript: require('typescript'),
      tsconfig: resolve('./tsconfig.json'),
    }),
    babel({ babelHelpers: 'bundled' }),
  ],
})
