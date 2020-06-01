const glob = require('glob');
const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.config.common.js');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const generateHTMLPlugins = dir => glob.sync(dir).map(
    dir => new HtmlWebpackPlugin({
      inject: 'head',
      filename: path.basename(dir), // Output
      template: dir, // Input
    })
)

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimize: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: './dist/*.min.css', to: '.' }
      ]
    }),
    ...generateHTMLPlugins('./docs/*.html'),
  ],
});
