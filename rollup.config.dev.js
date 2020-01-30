import config from './rollup.config'
import liveServer from 'rollup-plugin-live-server'
import external from 'rollup-plugin-peer-deps-external'
import resolve from '@rollup/plugin-node-resolve'

config.input = 'dev/index.js'
config.output[0].file = 'dev/tmp/bundle.js'
config.output[0].sourcemap = false

// Plugin manipulation
config.plugins.unshift(resolve())
config.plugins.unshift(
  external({
    includeDependencies: true
  })
)
config.plugins.push(
    liveServer({
      port: 8081,
      host: '0.0.0.0',
      root: 'dev',
      mount: [
        ['/node_modules', './node_modules']
      ],
      open: false,
      wait: 500
    })
)
config.plugins = config.plugins.filter(({name}) => name !== 'terser')

export default config
