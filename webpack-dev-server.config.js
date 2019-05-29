/* global __dirname, require, module*/

const webpack = require('webpack');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');
const env = require('yargs').argv.env; // use --env with webpack 2
const pkg = require('./package.json');

let libraryName = pkg.name;

let outputFile, mode;


outputFile = libraryName + '.js';


const config = {
  mode: mode,
  entry: __dirname + '/src/index.js',
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: 8300,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  },
  output: {
    path: __dirname + '/lib',
    publicPath: '/',
    filename: outputFile,
    library: libraryName.replace(/-/g, '_'),
    libraryTarget: 'var',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: false }
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [path.resolve('./node_modules'), path.resolve('./src')],
    extensions: ['.html', '.json', '.js']
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: './index.html',
      filename: './index.html'
    })
  ]
};

module.exports = config;
