const glob = require('glob');
const path = require('path');

const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const generateHTMLPlugins = dir => glob.sync(dir).map(
    dir => new HtmlWebpackPlugin({
      inject: 'head',
      filename: path.basename(dir), // Output
      template: dir, // Input
    })
)

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: 'src',
    watchContentBase: true,
    hot: true,
    open: true,
    port: process.env.PORT || 9000,
    host: process.env.HOST || 'localhost',
  },
  module: {
    rules: [
      {
        test: /\.(sass|scss)$/,
        use: [
          { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
      },
    ],
  },
  plugins: [
      ...generateHTMLPlugins('./docs/**/*.html'),
    new webpack.HotModuleReplacementPlugin()
  ],
});
