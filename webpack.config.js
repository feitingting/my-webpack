var path = require('path')
var webpack = require('webpack')
var autoprefixer = require('autoprefixer')
var precss = require('precss')
var  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: ['webpack/hot/dev-server', path.resolve(__dirname, './main.js')],
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.js', '.json', '.ts', '.tsx', '.css'],
    modules: ['node_modules']
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'env', 'react', 'stage-0'
          ],
        }
      },
      {
        test: /\.css/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function () {
                return [precss, autoprefixer];
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),    
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    })

  ],
  devServer: {    
    port: 3005,
    host: '0.0.0.0',
    historyApiFallback: true
  }
};
