# 问答题
## Express的Http请求处理模型是什么？

流水线式模型，通过中间件处理数据并在最终返回处理结果

## 如何使用 express-generator 生成 express 项目？请使用它生成项目并对app.js和bin/www两个文件关键代码进行注释详解
npx express-generator

npm install
```javascript
#!/usr/bin/env node

/**
 * Module dependencies.
 */

var app = require('../app');
var debug = require('debug')('work:server'); //debug 日志组件
var http = require('http');

/**
 * Get port from environment and store in Express.
 */

var port = normalizePort(process.env.PORT || '3000');  //获取端口
app.set('port', port); 

/**
 * Create HTTP server.
 */

var server = http.createServer(app); //利用app里的设置设定server

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port); // 监听并注册事件
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  debug('Listening on ' + bind);
}

```

```javascript
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');  // 在此获取路由组
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade'); // 在此设置APP属性 使用模板引擎

app.use(logger('dev')); //在此使用中间件
app.use(express.json()); // json化中间件
app.use(express.urlencoded({ extended: false })); // url 参数处理
app.use(cookieParser()); // cookie 处理
app.use(express.static(path.join(__dirname, 'public'))); // 静态资源

app.use('/', indexRouter); // 使用router
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

```
## 请查阅资料完成：什么是 Restful API ？如何使用Restful API访问服务器端资源？

表现层状态转化风格的 应用接口

利用url指定一个资源 通过http 请求方法 + 参数进行资源操作

get 请求 请求一个资源

post 更新和创建资源

put 更新资源

delete 删除资源

前端通过ajax或者成熟的库调用 调试采用postman

## 如果使用Express写Restful API？
针对同一个资源的请求放在一个router中

采用router get post put delete 编写处理函数

## 如何使用express Router？
```javascript

//index.js
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.write("hell world")
});


module.exports = router;

// app.js
var indexRouter = require('./routes/index');
app.use('/', indexRouter);

```
## 代码题
请实现 CRUD 用户 的 restful API，用户必须要有 id，用户名，密码，邮箱字段，其他字段可以自行扩展。需要实现 GET，POST，PUT,DELETE,PATCH五种访问形式，数据存储在内存中即可

