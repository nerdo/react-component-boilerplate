const webpack = require('webpack')
const path = require('path')
const package = require('./package.json')

const env = {
  mode: !process.env.NODE_ENV ? 'development' : process.env.NODE_ENV
}

const entry = env.mode === 'development' ? './dev/index.js' : './src/index.js'

const externals = env.mode === 'development'
  ? []
  : [
    'react',
    'react-dom'
  ]

const output = env.mode === 'development'
  ? {}
  : {
    library: package.name,
    libraryTarget: 'umd'
  }

const config = {
  entry,
  externals,
  output: {
    filename: path.basename(package.main),
    path: path.dirname(path.resolve(__dirname, package.main)),
    ...output
  },
  mode: env.mode,
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      BUILD_ENV: JSON.stringify(env)
    })
  ],
  devServer: {
      contentBase: './dev'
  }
}

module.exports = config
