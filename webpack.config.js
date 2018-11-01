const webpack = require('webpack');
const { resolve } = require('path');

const parentDir = __dirname;

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    path: parentDir,
    filename: './bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: resolve(__dirname, './client'),
        loader: 'babel-loader',
      },
    ],
  },
};
