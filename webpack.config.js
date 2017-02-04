const webpack = require('webpack');
const path = require('path');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'containers');
const nodeModules = path.join(__dirname, 'node_modules');
module.exports = {
  entry: {
    app: path.resolve(APP_PATH, 'index.jsx')
  },
  output: {
    path: './build',
    filename: 'bundle.js',
    sourceMapFilename:"[file].map"
  },
  module: {
    noParse: [
      path.resolve(nodeModules, 'react/dist/react.js')
    ],
    loaders: [{
      test: /\.jsx?$/,
      loader: 'babel',
      include: /containers/,
      query: {
        //添加两个presents 使用这两种presets处理js或者jsx文件
        presets: ['es2015', 'react']
      }
    },{
      test:/\.scss$/,
      loader:['style', 'css', 'sass'],
      include:/containers/
    }]
  },
  resolve: {
    // alias,
    extensions: ['','.web.js', '.js', '.jsx']//配置扩展名
  },
  devtool:"#cheap-module-eval-source-map",//配置source map
  devtoolModuleFilenameTemplate:"webpack:///[absolute-resource-path]"
};