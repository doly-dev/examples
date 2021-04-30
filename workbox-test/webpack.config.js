const path = require('path');
const { InjectManifest, GenerateSW } = require('workbox-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const pkg = require('./package.json');

module.exports = {
  mode: 'development',
  entry: './src/index.ts',
  output: {
    publicPath: `https://doly-dev.github.io/examples/${pkg.name}/dist/`,
    filename: 'static/bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/, use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new GenerateSW(),
    // new InjectManifest({
    //   swSrc: './src/service-worker.ts'
    // }),
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'public'),
          globOptions: {
            ignore: ["**/*.html"],
          },
          to: path.resolve(__dirname, 'dist'),
          toType: 'dir'
        },
      ],
    })
  ]
}