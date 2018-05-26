const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    'js/vendors': [ 'react', 'react-dom', 'prop-types', 'redux-persist/lib/persistReducer', 'redux-persist/lib/storage', path.resolve('app/constants/actionTypes.js'), path.resolve('app/constants/common.js') ],
    'js/bundle': path.resolve(__dirname, 'app/main.jsx'),
    'css/style': path.resolve(__dirname, 'app/stylesheets/main.scss')
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js',
    chunkFilename: '[name].js'
  },
  module: {
    rules: [ {
      exclude: /(node_modules)/,
      test: /\.(js|jsx)$/,
      loader: 'babel-loader'
    }, {
      test: /\.s?[ac]ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        'css-loader?-minimize',
        'postcss-loader',
        'sass-loader',
      ],
    }, {
      test: /\.(woff|woff2|ttf|svg|eot)(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url-loader'
    }, {
      test: /\.json$/,
      loader: 'json-loader'
    } ]
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        exclude: [ /\.min\.js$/gi ],
        sourceMap: true,
        uglifyOptions: {
          mangle: true,
          compress: {
            warnings: false,
            pure_getters: true,
            unsafe: true,
            unsafe_comps: true,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true
          },
          output: {
            comments: false
          },
        }
      })
    ],
  },
  plugins: [
    new CopyWebpackPlugin([ { from: 'view' } ]),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.IgnorePlugin(/^\.\/locale$/, [ /moment$/ ]),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[name].css"
    })
  ],
  resolve: {
    extensions: [ '.js', '.jsx' ],
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
  stats: {
    colors: true
  },
};
