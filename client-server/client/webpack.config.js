const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    devtool : 'none',
    mode: 'development',
    entry: './src/index.jsx',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            { 
                test: /\.jsx?$/,
                exclude: /node_modules/, 
                loader: "babel-loader" 
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: ["css-loader", "sass-loader"]
        })
             
            }
        ]
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist"),
        proxy: {
            '/': {
              target: 'http://localhost:3000',
              secure: false,
              changeOrigin: true,
            }
          },
        },
        
    plugins: [
        new HtmlWebpackPlugin({
        template: './dist/index.html',
        inject: "body"
        }),
        new ExtractTextPlugin("css/style.css")
    ]
};