var debug = require('debug')('TemplateProject');
var cluster = require('cluster');

// 示例服务层
module.exports = {

    demoMethod: function(params, callback) {
        debug('----------[SERVICE]----------');
        debug(params);
        debug('----------[SERVICE]----------');

        console.log(cluster.worker.id + ':' + cluster.worker.process.pid);
        console.log(process.pid);

        callback(null, {
            title: '服务端返回数据',
            info: cluster.worker
        });
    }

};