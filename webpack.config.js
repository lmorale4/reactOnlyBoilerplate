const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const parentDir = __dirname;

module.exports = {
  entry: ['babel-polyfill', './client/index.js'],
  output: {
    publicPath: parentDir + '/public',
    path: parentDir,
    filename: './public/bundle.js',
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
  plugins: [
    // Array of plugins to apply to build chunk
    new HtmlWebpackPlugin({
      template: __dirname + '/public/index.html',
    }),
  ],
};
