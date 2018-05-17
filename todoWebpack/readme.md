
>-  "react": "^16.3.2",
    "react-dom": "^16.3.2",
    "webpack": "^4.8.3"
    "babel-loader": "^7.1.4",
    "babel-plugin-react-transform": "^3.0.0",
    "babel-plugin-transform-runtime": "^6.23.0",
    "babel-preset-env": "^1.7.0",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-0": "^6.24.1",
    "babel-preset-stage-1": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "css-loader": "^0.28.11",
    "express": "^4.16.3",
    "extract-text-webpack-plugin": "^4.0.0-beta.0",
    "html-webpack-plugin": "^3.2.0",
    "path": "^0.12.7",
    "style-loader": "^0.21.0",
    "webpack-cli": "^2.1.3",
    "webpack-dev-middleware": "^3.1.3",
    "webpack-dev-server": "^3.1.4"
    "test": "echo \"Error: no test specified\" && exit 1",
    "bulid": "webpack",
    "start": "webpack-dev-server --open",
    "watch": "webpack --watch",
    "server": "node server.js"
    HtmlWebpackPlugin = require('html-webpack-plugin'); // 通过 npm 安装
    ExtractTextPlugin = require("extract-text-webpack-plugin");
    webpack = require('webpack'); // 用于访问内置插件
    WebpackDevServer = require('webpack-dev-server');


    autoprefixer = require('autoprefixer');
    path = require('path');
    mode: 'development',
    entry: {
        main: "./src/index.js"
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
                    fallback: ['style-loader','postcss-loader'],
                    use: ['css-loader']
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
    postcss:[autoprefixer({browsers:['last 2 versions']})],
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
