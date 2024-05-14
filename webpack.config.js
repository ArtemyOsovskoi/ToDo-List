const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
  mode: 'development',
   entry: {
     index: './src/index.js',
   },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'ToDo List',
      template: './src/index.html',
    }),
  ],
   output: {
     filename: 'main.js',
     path: path.resolve(__dirname, 'dist'),
   },
  devtool: 'eval-source-map',
 };