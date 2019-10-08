const path = require('path')

const common = require('./webpack.common')
const merge = require('webpack-merge')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contentHash].js'
  },
  optimization: {
    minimizer: [new OptimizeCssAssetsPlugin()]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contentHash].css',
      chunkFilename: '[id].css',
    })
  ],
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