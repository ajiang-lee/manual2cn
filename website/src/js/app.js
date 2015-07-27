// 声明应用的主模块，注入angular-ui-router路由模块
var manual2cn = angular.module('manual2cn', ['ui.router']);

// 定义路由
manual2cn.config(function($stateProvider) {
    $stateProvider.state('index', {
        // 默认路由
        url: "",
        views: {
            "headerView": {
                templateUrl: "partials/header.html"
            },
            "contentView": {
                templateUrl: "partials/content.html"
            }
        }
    });
});