require('babel-register');
const path = require('path');
const webpack = require('webpack');
const swiss = require('kouto-swiss');
const rupture = require('rupture');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const ReactStaticPlugin = require('react-static-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';
const localIdentName = isDev ?
  '&localIdentName=[name]__[local]__[hash:base64:6]' :
  '';


const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(isDev ? 'development' : 'production')
    },
    __DEVTOOLS__: !isDev
  }),
  // Use browser version of visionmedia-debug
  new webpack.NormalModuleReplacementPlugin(
    /debug\/node/,
    'debug/browser'
  ),
  new webpack.optimize.OccurenceOrderPlugin(true)
];

const devPlugins = [
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin()
];

const prodPlugins = [
  new ExtractTextPlugin('[name].css', { allChunks: true }),
  new webpack.optimize.UglifyJsPlugin({
    /* eslint-disable camelcase */
    screw_ie8: true,
    /* eslint-enable camelcase */
    compressor: { warnings: false }
  }),
  new ReactStaticPlugin({
    routes: './client/routes.js',
    template: './template.jsx'
  })
];

const stylLoaders = [
  'style',
  `css?modules&importLoaders=1${localIdentName}`,
  'stylus'
];

module.exports = {
  devtool: isDev ? 'inline-source-map' : null,

  entry: {
    bundle: './client'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public', 'js'),
    publicPath: '/'
  },

  plugins: plugins.concat(isDev ? devPlugins : prodPlugins),

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [
          path.join(__dirname, 'client/'),
          path.join(__dirname, 'common/'),
          path.join(__dirname, './template.jsx')
        ],
        loaders: isDev ? ['react-hot', 'babel'] : [ 'babel' ]
      },
      {
        test: /\.json$/,
        loaders: [
          'json-loader'
        ]
      },
      {
        test: /\.styl$/,
        loaders: isDev ?
          stylLoaders :
          [
            ExtractTextPlugin.extract({
              fallbackLoader: stylLoaders[0],
              loader: stylLoaders.splice(1)
            })
          ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loaders: [
          'file'
        ]
      }
    ]
  },
  stylus: {
    use: [
      swiss(),
      rupture()
    ],
    import: [
      '~kouto-swiss/lib/kouto-swiss/index.styl'
    ]
  }
};
