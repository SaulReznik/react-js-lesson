var webpack = require('webpack');

module.exports = {
  entry: [
    './src/index.js'
  ],

  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },

  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'es2016', 'es2017', 'stage-1']
      }
    }]
  },

  devtool: 'source-map',

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
    historyApiFallback: true,
    contentBase: './',
    stats: 'errors-only'
  }
}
