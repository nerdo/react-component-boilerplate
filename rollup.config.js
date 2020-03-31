import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import beep from '@rollup/plugin-beep'
import filesize from 'rollup-plugin-filesize'
import pkg from './package.json'

const output = []
if (pkg.main) {
  output.push({
    file: pkg.main,
    format: 'umd',
    name: pkg.name,
    sourcemap: true,
    globals: {
      react: 'React',
      'react-dom': 'ReactDOM'
    }
  })
}
if (pkg.module) {
  output.push({
    file: pkg.module,
    format: 'es',
    name: pkg.name,
    sourcemap: true
  })
}

const config = {
  input: 'src/index.js',
  external: [
     'react',
     'react-dom'
  ],
  output,
  plugins: [
    beep(),
    babel(),
    terser({
      include: [
        /^.+\.js$/
      ]
    }),
    filesize()
  ]
}

export default config
