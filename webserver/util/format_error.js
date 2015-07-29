/**
 * 格式化输出错误信息，依据同目录下的error_message.json错误定义文件
 * */

var _ = require('underscore');
var error_message = require('../config/message_config.json');
var global_config = require('../config/global_config.json');
var debug = require('debug')(global_config.debug_env);

// 格式化错误输出
module.exports = function(error) {
    debug('----------[ERROR]----------');
    debug(error);
    debug('----------[ERROR]----------');

    return getMsg(error.toString()) || '程序异常';
};

function getMsg(source) {
    for(var i in error_message.error_index) {
        if (source.indexOf(error_message.error_index[i]) != -1) {
            return error_message[error_message.error_index[i]];
        }
    }
}