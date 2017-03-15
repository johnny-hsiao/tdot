var webpack = require('webpack');
var path = require('path');

var config = {
  entry: path.join(__dirname + '/public/javascripts/application.jsx'),
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/public/javascripts',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /.jsx$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      query: {
	presets: ['es2015', 'react']
      }
    },
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
    }]
  }
};

module.exports = config;
