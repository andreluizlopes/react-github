var path = require('path');

module.exports = {
  entry: "./app/App.js",
  output: {
    path: path.resolve(__dirname),
    publicPath: "/",
    filename: 'public/bundle.js',

  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
}