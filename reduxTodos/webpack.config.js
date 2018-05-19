const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const { extract } = ExtractTextPlugin;
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/, use: extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: '/node_modules/' }
        ]
    },
    devServer: {
        hot: true,
        open: true,
        host: '127.0.0.1',
        port :9000
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new ExtractTextPlugin("styles.css")
    ]
};