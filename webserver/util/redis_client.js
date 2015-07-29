var redis = require('redis');
var db_config = require('../config/db_config.json');
var global_config = require('../config/global_config.json');
var debug = require('debug')(global_config.debug_env);

// 打开Redis链接
var client = redis.createClient(db_config.redis.port, db_config.redis.host);

// 绑定链接打开事件
client.on('connect', function(error, client) {
    debug('[REDIS - 打开Redis链接] 新增Redis链接');
});

module.exports = client;