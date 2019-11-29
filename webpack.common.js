const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    main: './index.js',
    vendor: './src/vendor.js',
  },
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
        test: /\.(jpg|jpeg|png|svg)$/,
        use: [{
          loader: "file-loader",
          options: {
            limit: 25000,
          }
        },
        ]
      },
      // {
      //   test: /\.(jpg|svg|jpeg|png)$/,
      //   use: {
      //     loader: "url-loader",
      //     // options: {
      //     //   name: '[name].[hash].[ext]',
      //     //   outputPath: 'imgs',
      //     //   limit: 25000,
      //     // }
      //   }
      // }
    ]
  }
}
