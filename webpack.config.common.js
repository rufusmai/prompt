const glob = require('glob');
const path = require('path');

module.exports = {
  entry: ['./docs/js/app.js'],
  output: {
    path: path.resolve(__dirname, 'docs_dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
    ],
  },
  stats: {
    colors: true,
  },
  devtool: 'source-map',
};
