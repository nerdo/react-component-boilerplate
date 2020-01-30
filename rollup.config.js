import babel from 'rollup-plugin-babel'
import { terser } from 'rollup-plugin-terser'
import pkg from './package.json'

const config = {
  input: 'src/index.js',
  external: [
    'react',
    'react-dom'
  ],
  output: [
    {
      file: pkg.main,
      format: 'umd',
      name: pkg.name,
      sourcemap: true
    }
  ],
  plugins: [
    babel(),
    terser({
      include: [
        /^.+\.js$/
      ]
    }),
  ]
}

export default config
