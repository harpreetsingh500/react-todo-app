var path = require('path');
var webpack = require("webpack");

module.exports = {
  entry: path.resolve(__dirname, 'src') + '/javascripts/index.js',
  output: {
    path: path.resolve(__dirname, 'src') + '/app',
    filename: 'bundle.min.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin()
  ]
};
