const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'), 
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
      // chunkFilename: '[id].css',
    })
  ],
  devServer: {
    contentBase: __dirname + '/dist',
    port: 4000,
    historyApiFallback: {
      disableDotRule: true
    }
  },
  module: {
    rules: [
      {
        test: /\.s?css/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  }
})