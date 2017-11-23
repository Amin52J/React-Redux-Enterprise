const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


const plugins = [
  new CopyWebpackPlugin([{from: 'view'}]),
  new ExtractTextPlugin('css/style.css'),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV)
    }
  }),
  // used to split out our sepcified vendor script
  new webpack.optimize.CommonsChunkPlugin({
    name: 'js/vendors.js',
    minChunks: Infinity,
    filename: '[name]'
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin());
}

module.exports = {
  entry: {
    'js/vendors.js': ['react', 'react-dom', 'isomorphic-fetch'],
    'js/bundle.js': path.resolve(__dirname, 'app/main.js'),
    'css/style.css': path.resolve(__dirname, 'app/stylesheets/main.scss')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name]',
    chunkFilename: '[name].js'
  },
  resolve: {
    alias: {
      '@actions': path.resolve('app/actions'),
      '@components': path.resolve('app/components'),
      '@constants': path.resolve('app/constants'),
      '@containers': path.resolve('app/containers'),
      '@elements': path.resolve('app/elements'),
      '@hoc': path.resolve('app/hoc'),
      '@reducers': path.resolve('app/reducers'),
      '@epics': path.resolve('app/epics'),
      '@root': path.resolve('app')
    }
  },
  module: {
    rules: [{
      exclude: /(node_modules)/,
      test: /\.js$/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }, {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract(['css-loader?-minimize', 'postcss-loader', 'sass-loader'])
    }, {
      test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    }]
  },
  stats: {
    colors: true
  },
  plugins: plugins
};
