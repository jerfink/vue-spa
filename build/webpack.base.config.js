const path = require('path')
const env = process.env.NODE_ENV

const config = {
  mode: env || 'development',
  entry: {
    app: path.resolve(__dirname, '../src/client-entry.js')
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /(\.js$)|(\.vue$)/,
        loader: this.query,
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/',
    filename: 'assets/js/[name].js'
  }
}

module.exports = config
