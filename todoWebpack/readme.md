
###package.json的配置
 
  - "react": "^16.3.2", 
  - "react-dom": "^16.3.2",
  - "webpack": "^4.8.3"  

  >打包文件 webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。通常，webpack 通过运行一个或多个 npm scripts，会在本地 node_modules 目录中查找安装的 webpack：

-

  - "babel-loader": "^7.1.4", 这个包允许使用 Babel 和 webpack 转换JavaScript文件。
  - "babel-plugin-react-transform": "^3.0.0", 解析jsx的包
  - "babel-plugin-transform-runtime": "^6.23.0",转为js; 使es6中的api类似generator,promise对象等生效
  -  babel-core 核心包
  - "babel-preset-env": "^1.7.0",将 转为js；解析es的包,智能识别当前运行环境并进行转换
  - "babel-preset-es2015": "^6.24.1",解析es6
  - "babel-preset-react": "^6.24.1",解析jsx的包
  - "babel-preset-stage-0": "^6.24.1",将 转为js；es7不同阶段语法转码规则(0-4选装1个即可)
  - "babel-preset-stage-1": "^6.24.1",
  - "babel-preset-stage-2": "^6.24.1",

  
-

  - "css-loader": "^0.28.11",
  - "style-loader": "^0.21.0", webpack打包css
  - "extract-text-webpack-plugin": "^4.0.0-beta.0", webpack打包移 动到独立分离的 CSS 文件。

  > css-loader使你能够使用类似@import和url（...）的方法实现require的功能，style-loader将所有的计算后的样式加入页面中，

-

  - "express": "^4.16.3",node的express框架
  - "html-webpack-plugin": "^3.2.0", webpack打包文件生成html 
  - "path": "^0.12.7", path 路径模块；
  - "webpack-cli": "^2.1.3", 使用 webpack 4+ 版本，你还需要安装webpack-cli。
  - "webpack-dev-middleware": "^3.1.3",
  
  >webpack-dev-middleware 是一个容器(wrapper)，它可以把 webpack 处理后的文件传递给一个服务器(server)。
  
  - "webpack-dev-server": "^3.1.4"，
  
  >简单的 web 服务器，并且能够实时重新加载(live reloading)。
  
  
-

###npm script 运行 的命令；
  
  - "bulid": "webpack",
  - "start": "webpack-dev-server --open",
  - "watch": "webpack --watch",
  - "server": "node server.js"
  
-

###webpack.config.js的配置
   - autoprefixer = require('autoprefixer'); webpack autoprefixer 自动补全；
   - mode: 'development', webpack 在哪一种模式下 生产模式，开发模式，none;
   - entry
   - output 
   - loader loader就是集成到webpack的文件处理方法，这些loader在webpack打包过程中，可以对指定类型的文件进行相应的处理，
   - plugins
     
-

   - **entry:**
   
   >`{
        main: "./src/index.js"
    },` 配成多个入口， 单个 entry:"./src/index.js"
   - **output:**
   
   >`{
        path: path.resolve(__dirname, './dist'), 打包在根路径下的dist文件 目标输出目录 path 的绝对路径。
        filename: '[name].js', 文件名字 
        publicPath: '/' 项目中的所有资源指定一个基础路径。
    },`
   - **loader:**
   
   > `moudle={
        rules: [
            {
					            test: /\.js|jsx$/, 匹配某种规则![
]()                exclude: /(node_modules|bower_components)/,除了node babel 模块以外
                use: {
                    loader: 'babel-loader',  babel 转为js
                    query: {
                        presets: ['env', 'react', 'es2015', 'stage-0', 'stage-1', 'stage-2']
                    解析 env 智能识别当前运行环境并进行转换
                    解析 jsx
                    解析 es6
                    解析 es2015
                    解析 es7 装饰期 生成器函数
                    }
                }
            },
            {
                test: /\.css$/, use: ExtractTextPlugin.extract({
                    fallback: ['style-loader','postcss-loader'],
                    loader（例如 'style-loader'）应用于当 CSS 没有被提取(也就是一个额外的 chunk，当 allChunks: false
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
                    chunk(entry chunks)中引用的 *.css，移动到独立分离的 CSS 文件。                
                })
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [
                  {
                    loader: 'url-loader', 解析 img path 
                    options: {
                      limit: 8192,   受限大小
                      mimetype: 'image/png' 类型
                    }
                    url-loader 功能类似于 file-loader，但是在文件大小（单位 byte）低于指定的限制时，可以返回一个 DataURL。
                  }
                ]
              }
        ]
    },`
   [here](https://webpack.docschina.org/loaders/postcss-loader/#install)
    
 - **devtool:**'inline-source-map',
  
 >调试 按行 此选项控制是否生成，以及如何生成 source map。
 转换过的代码（仅限行）[here](https://webpack.docschina.org/configuration/devtool/#devtool)
- **devServer:**` {
        compress: true, 是否压缩
        host: '127.0.0.1', 域名
        port: 7000, 端口
        hot: true, 热替换
        open: true 是否自动打开页面
    },`
- **plugins:** `[
        new HtmlWebpackPlugin({ template: './index.html' }),
        new ExtractTextPlugin({ filename: '[name].css' }) 生成一个 name 入口参数名字的css
    ]`
    
--- 
   
###/.babelrc
`{
  "presets": ["env","react","es2015","stage-0","stage-2","stage-1"]
}`

*解析 env 智能识别当前运行环境并进行转换
解析 jsx
解析 es6
解析 es2015
解析 es7 装饰期 生成器函数*


-

###postcss.config.js

  - **postcss:**[autoprefixer({browsers:['last 2 versions']})],自动补全的插件 浏览器的最近两个版本


npm i babel-core babel-loader babel-preset-env babel-preset-es2015 babel-preset-stage-0 webpack webpack-dev-server babel-plugin-transform-runtime  css-loader style-loader postcss-loader extract-text-webpack-plugin html-webpack-plugin path autoprefixer babel-preset-react webpack-cli -D

npm i react react-dom react-router-dom react-redux react-redux-router redux
