var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: 'bundle.js',
    publicPath: '/dist/'
  },
  devServer: {
    hot: true,
  },
  module: {
    // preLoaders: [
    //   {
    //     test: /\.js$/,
    //     loader: 'eslint',
    //   }
    // ],
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
      }
    ]
  }
}
