const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');


const plugins = [
  new CopyWebpackPlugin([{from: 'view'}]),
  new ExtractTextPlugin('[name]'),
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
  new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'js/vendors.js',
    minChunks: Infinity,
    filename: '[name]'
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    mangle: true,
    compress: {
      warnings: false,
      pure_getters: true,
      unsafe: true,
      unsafe_comps: true,
      screw_ie8: true,
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
      comments: false,
    },
    exclude: [/\.min\.js$/gi]
  }));
}

module.exports = {
  entry: {
    'js/vendors.js': ['react', 'react-dom', 'prop-types', path.resolve('app/constants/actionTypes.js'), path.resolve('app/constants/common.js')],
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
