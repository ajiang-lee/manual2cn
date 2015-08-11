// 加载对应的第三方包
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var global_config = require('./config/global_config.json');

// 初始化APP实例
var app = express();

// 配置模板引擎
app.set('views', path.join(__dirname, global_config.views_directory));
app.set('view engine', global_config.views_engine);

// 启用Response压缩
app.use(compression());

// 定义站点的favicon.ico，如果站点存在该文件，发布应用时需要启用下句代码
app.use(favicon(__dirname + global_config.favicon_path));

// 解析内容格式
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// 启用Cookie
//app.use(cookieParser());

// 静态文件所在目录
app.use(express.static(path.join(__dirname, global_config.static_directory)));

// 日志模式
app.use(logger(global_config.log_pattern));

// 声明自定义路由
app.use('/', require('./routes/index.js'));     // 示例路由

// 主动捕获404异常
app.use(function(req, res, next) {
  var err = new Error('not found');
  err.status = 404;
  next(err);
});

// 错误处理
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send({
    info: 'fail',
    msg: require('./util/format_error')(err)
  });
});

module.exports = app;
