const webpack = require('webpack');
const path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'containers');
module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      query: {
        //添加两个presents 使用这两种presets处理js或者jsx文件
        presets: ['es2015', 'react']
      }
    }]
  },
  resolve: {
    // alias,
    extensions: ['','.web.js', '.js', '.jsx']
  }
};