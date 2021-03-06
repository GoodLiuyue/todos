const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));
app.get("/app",function(req,res){
  console.log("req",req);
  console.log("res",res);
})
app.listen(3000, function () {
  console.log('hello world');
});