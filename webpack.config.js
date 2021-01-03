const path = require('path');

const config = {
  mode: 'production',
  watch: true,
  entry: path.join(__dirname, './_webpack/', 'index'),
  output: {
    path: path.join(__dirname, 'js'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
};

module.exports = config;
