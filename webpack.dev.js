/**
 * Created by Soup Tang on 2015/8/26.
 */
var webpack = require('webpack');

module.exports = {
  entry: {
    app: './src/components/App.jsx',
  },
  output: {
    path: __dirname + '/dist',
    filename: '[name].js',
    publicPath: './dist/',
    libraryTarget: 'umd'
  },
  devtool: 'source-map',
  externals: [{
    'react': 'React'
  }, {
    'react-dom': 'ReactDOM'
  }, {
    'immutable': 'Immutable'
  }],
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css' },
      { test: /.(png|jpg)$/, loader: 'url-loader?limit=100000' },
      { test: /\.(js|jsx)$/, loader: 'babel-loader', query: { presets: ['react', 'es2015'] } },
      { test: /\.scss$/, loader: 'style!css!sass' }
    ]
  }
};