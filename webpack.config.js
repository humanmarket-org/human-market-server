const webpack = require('webpack');
const lessToJs = require('less-vars-to-js');

const fs  = require('fs');
const path = require('path');
const publicPath = '/';
const p = (pa) => path.resolve(__dirname, pa);

const devMode = process.env.NODE_ENV !== 'production'

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const themeVariables = lessToJs(fs.readFileSync(path.join(__dirname, './ant-theme-vars.less'), 'utf8'));

module.exports = {
  output: {
    path: p('./dist'),
    filename: 'app.js',
    publicPath: publicPath
  },
  entry: devMode ? [
    'webpack-dev-server/client?http://127.0.0.1:8003',
    'webpack/hot/only-dev-server',
    p('./src/run')
  ] : p('./src/run'),
  mode: process.env.NODE_ENV,
  devtool: devMode ? 'eval' : 'source-map',
  target: 'web',
  cache: devMode,
  context: __dirname,
  devServer: {
    contentBase: p('./src'),
    historyApiFallback: true,
    hot: true,
    https: false,
    port: 8003,
    publicPath: publicPath,
    noInfo: false,
    disableHostCheck: true,
    stats: {
      colors: true,
      chunks: false
    }
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.scss', '.css'],
    alias: {

    }
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', include: p('./src/') },
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(png|jpg|gif|ico|svg)$/,
        use: 'file-loader?name=[name].[ext]?[hash]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.otf(\?.*)?$/,
        use: 'file-loader?name=/fonts/[name].[ext]&mimetype=application/font-otf'
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader', // typings-for-css-modules-loader
            options: {
              localIdentName: '[folder]_[local]_[hash:base64:3]',
              modules: true,
              importLoaders: 1,
              // minimize: !devMode,
              // namedExport: true,
              camelCase: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              outputStyle: 'expanded',
              indentedSyntax: true,
              // data: "@import 'src/style/common';"
            }
          }
        ]
      },
      {
        test: /\.less$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'less-loader',
          options: {
            javascriptEnabled: true,
            modifyVars: themeVariables,
            noIeCompat: true
          }
        }]
      }
    ]
  },
  optimization: {
    noEmitOnErrors: false,
    mangleWasmImports: !devMode,
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      /sass\.d\.ts$/,
      /scss\.d\.ts$/,
      /css\.d\.ts$/,
    ])
  ]
}
