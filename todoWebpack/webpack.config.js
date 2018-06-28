const HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack'); // 用于访问内置插件
const WebpackDevServer = require('webpack-dev-server');
const autoprefixer = require('autoprefixer');
const postcssImport = require('postcss-import');
const path = require('path');
const port = 7000;
module.exports = {
    mode: 'development',
    entry: {
        // main: "./src2/index.js",
        index: "./src3/index.js"
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/' 
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    query: {
                        presets: ['env', 'react', 'es2015', 'stage-0', 'stage-1', 'stage-2']
                    }
                }
            },
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        {
                            loader: 'postcss-loader', options: {
                                plugins: () =>
                                    autoprefixer({
                                        browsers: ["last 3 versions", "> 1%"]
                                    })
                            }
                        }
                    ]
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            mimetype: 'image/png'
                        }
                    }
                ]
            }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        compress: true,
        host: '127.0.0.1',
        port: 7000,
        hot: true,
        open: true
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' }),
        new ExtractTextPlugin({ filename: '[name].css' })
    ]
};
