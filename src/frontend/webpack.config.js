const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ForkTSChecker = require('fork-ts-checker-webpack-plugin')
const webpack = require('webpack')
const dotenv = require('dotenv')

// NODE_ENV에 따라 path 설정. package.json에 값이 있음
if (process.env.NODE_ENV === 'development') {
  dotenv.config({
    path: path.resolve(__dirname, 'config', '.development.env')
  })
} else if (process.env.NODE_ENV === 'production') {
  dotenv.config({
    path: path.resolve(__dirname, 'config', '.env')
  })
}

/** @type import('webpack').Configuration */
module.exports = {
  target: 'web',
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    // publicPath: "/assets/",
    filename: '[name].[contenthash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        exclude: /node_modules/,
        use: [
          // 'vue-loader',
          'babel-loader',
        ],
      },
      {
        test: /\.s?css$/i,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.(png|svg)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      publicPath: '/',
    }),
    new ForkTSChecker(),
    // 여기에 string처럼 추가해서 써야함. front에서는 process 객체가 없음
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
      'process.env.API_BASE_URL': JSON.stringify(process.env.API_BASE_URL),
      'process.env.HERE_TEST': JSON.stringify(process.env.HERE_TEST),
      __VUE_OPTIONS_API__: false,
      __VUE_PROD_DEVTOOLS__: false
    }),
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      // src 경로를 @로 alias. 간편하게 load 해올 수 있음
      '@': path.resolve(__dirname, 'src'),
    }
  },
  devtool: 'source-map',
  watchOptions: {
    ignored: ['node_modules/**', 'dist/**']
  },
}