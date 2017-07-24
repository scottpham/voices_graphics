const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './app/scripts/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: "/",
    filename: 'app.js'
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }]
      },
      {
        test: /\.(jpe?g|gif|png|svg|wav|mp3)$/, 
        use: [{
          loader: 'file'
        }]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'build'),
    watchContentBase: true,
    inline: true,
    open: true
  }

}
