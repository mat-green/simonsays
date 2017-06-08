const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  // minimum requirements:
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './target')
  },

  // debugging code (sourceMap)
  devtool: 'eval',

  plugins: [
    // including HTML
    new htmlWebpackPlugin({
      template: './src/index.html'
    }),
    // minifying code
    new webpack.optimize.UglifyJsPlugin(),

    new CopyWebpackPlugin([
        { from: 'src/assets' }
    ])
  ],

  module: {
    rules: [
      // including CSS
      { test: /\.css$/, loader: 'style-loader!css-loader?sourceMap&importLoaders=1' },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.(woff|woff2)$/, loader: "url-loader?prefix=font/&limit=5000" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
      {
        test: /\.less$/,
        use: [
          {
            loader: "style-loader"
          }, {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }, {
              loader: "less-loader"
          }
        ]
      }
    ]
  },

  // server up files
  devServer: {
    contentBase: 'target',
    port: 9000,
    watchContentBase: true
  }
};
