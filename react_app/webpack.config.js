const path = require('path');

module.exports = {
    devtool: 'eval',
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        { 
            test: /\.jsx?$/,
            exclude: /node_modules/, 
            loader: "babel-loader" 
        },
        {
            test: /\.css$/,
            use: [ 'style-loader', 'css-loader' ]
        }
    ]
  },
  devServer: {
      contentBase: path.resolve(__dirname, "dist")
    },
};