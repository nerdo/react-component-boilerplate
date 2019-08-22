const webpack = require('webpack')
const path = require('path')

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
    library: 'react-component-boilerplate',
    libraryTarget: 'umd'
  }

const config = {
  entry,
  externals,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
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
