#!/usr/bin/env node

// 加载对应的包
var app = require('../app');
var global_config = require('../config/global_config.json');
var debug = require('debug')(global_config.debug_env);
var http = require('http');
var cluster = require('cluster');
var cpus = require('os').cpus().length;

// 获取站点的监听端口，默认为3000
var port = normalizePort(process.env.PORT || global_config.port);
app.set('port', port);

if (cluster.isMaster) {
    for (var i = 0; i < cpus; i++) {
        cluster.fork();
    }

    cluster.on('listening', function(worker, address) {
        console.log('listening: worker ' + worker.process.pid + ', Address: ' + address.address + ':' + address.port);
    });

    cluster.on('exit', function(worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
} else {
    // 创建http服务器
    var server = http.createServer(app);

    // 启动http服务器
    server.listen(port);
    server.on('error', onError);
    server.on('listening', onListening);
}

// 辅助方法，用于格式化监听端口
function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

// 启动异常的回调函数
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error('端口【' + bind + '】已被占用');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// 启动正常的回调函数
function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : addr.port;
    debug('服务已在端口【' + bind + '】启动...');
}
