var webpack = require('webpack');
var path = require('path');

const srcDir = path.resolve(__dirname, './src');
const distDir = path.resolve(__dirname, './dist');

module.exports = {
  entry: [path.resolve(srcDir, 'index.js')],
  output: {
    path: distDir,
    filename: 'chartjs-plugin-events.js'
  },
  resolveLoader: {
    modules: ["node_modules"]
  },
  externals: {
    "chart.js": {
      commonjs: "chart.js",
      commonjs2: "chart.js",
      amd: "chart.js"
    }
  },
  devServer: {
    publicPath: '/'
  },
  module: {
    loaders: [
    {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
      ]
    },
    plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true,
      compress: {
        warnings: false
      }
    })
    ]
  };
