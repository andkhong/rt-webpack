const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const sourcePath = path.resolve(__dirname, '..', 'src');
const nodeModulesPath = path.resolve(__dirname, '..', 'node_modules');
const basePath = path.join(__dirname, '..', 'dist');
const regex = new RegExp(`${sourcePath}`);

module.exports = merge(common, {
  // devtool: "cheap-module-eval-source-map",
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(css|scss)$/,
        include: sourcePath,
        exclude: nodeModulesPath,
        use: [
          'style-loader', // Plugin for development, injects css tag to html
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  devServer: {
    contentBase: basePath, // Assets will be served
    open: true, // Open browser to localhost:port
    inline: false,

    historyApiFallback: true, // Falls back to index.html; we won't have to set an entry point and add an additional html loader        
    port: 8080,
    proxy: {

    },
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  },
  watchOptions: {
    ignored: nodeModulesPath
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env': { 'NODE_ENV': JSON.stringify('development') } }),
    new HardSourceWebpackPlugin(),
    new webpack.optimize.CommonsChunkPlugin({ // Manifest + Dynamic Imports => Lazy Loading + Incremental Builds (Incredibly fast builds + compile)
      name: 'manifest',
      minChunks: Infinity
    }),
    new webpack.NamedChunksPlugin(function (chunk) {
      if (chunk.name) return chunk.name;
      for (let m of chunk._modules) {
        if (regex.test(m.context)) {
          return path.basename(m.rawRequest);
        }
      }
      return null;
    }),
    // new BundleAnalyzerPlugin(), // Uncomment to analyze Bundle size
  ]
});