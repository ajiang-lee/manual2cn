var router = require('express').Router();
//var _ = require('underscore');
//var service = require('../service');
//var db = require('../util/mysql_pool.js');
//var cache = require('../util/redis_client.js');

// 示例路由
router.get('/', function(req, res, next) {
    ////db.execSQL(
    ////    'select * from uch_blogfield limit ?, ?',
    ////    [0, 10],
    ////    function(error, result) {
    ////        console.log(result);
    ////    }
    ////);
    //cache.get('name', function(error, result) {
    //    console.log(result);
    //});
    //// 处理页面参数
    //var params = _.extend(req.body, {name: 'Jack', age: 27, fav: ['football', 'basketball', 'swimming']});
    //// 调用Service服务，并返回结果
    //service.demoService.demoMethod(params, function(error, result) {
    //    // 异常处理
    //    if (error) {
    //        next(error);
    //        return;
    //    }
    //    // 返回结果页面
    //    res.render('index', result);
    //});
    res.send({
        info: 'success'
    });
});

router.head('/head', function(req, res, next) {
    res.send({
        info: 'success'
    });
});



module.exports = router;
