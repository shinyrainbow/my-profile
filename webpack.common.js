const path = require('path')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: {
    main: './index.js',
    vendor: './src/vendor.js', 
  },
  // output: {
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.[contentHash].js'
  // },
  // mode: 'development',
  // devtool: 'none',
  // devServer: {
  //   contentBase: __dirname + '/dist',
  //   port: 4000,
  //   historyApiF allback: {
  //     disableDotRule: true
  //   }
  // },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template/template.html',
    }),
  ],
  module: {
    rules: [
     
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              {
                plugins: [
                  '@babel/plugin-proposal-class-properties'
                ]
              },

            ]
          }
        }
      },
      {
        test: /\.(jpg|svg|jpeg|png)$/,
        use: {
          loader: "url-loader",
          // options: {
          //   name: '[name].[hash].[ext]',
          //   outputPath: 'imgs',
          //   limit: 25000,
          // }
        }
      }
    ]
  }
}
