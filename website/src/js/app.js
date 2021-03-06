// 声明应用的主模块，注入angular-ui-router路由模块
var manual2cn = angular.module('manual2cn', ['ui.router']);
// 定义路由转换的全局事件
manual2cn.run(function($rootScope, $location, $anchorScroll) {
    // 当视图开始加载时，执行指定操作
    //$rootScope.$on('$viewContentLoading', function(event, viewConfig) {
    //    $("#globalModal").modal({
    //        backdrop: 'static',
    //        keyboard: false
    //    });
    //});
    $rootScope.gotoAnchor = function(id) {
        $location.hash(id);
        $anchorScroll();
    }
});
// 定义路由
manual2cn.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');
    $stateProvider.state('home', {
        // 站点的首页路由
        url: '/home',
        templateUrl: 'partials/home.html'
    }).state('home.ui-router-wiki', {
        // Angular UI Router Wiki的首页路由
        url: '/ui-router-wiki',
        templateUrl: 'partials/angularjs/ui-router/wiki/index.html'
    }).state('home.ui-router-wiki.state-manager', {
        url: '/state-manager',
        templateUrl: 'partials/angularjs/ui-router/wiki/state-manager.html'
    }).state('home.ui-router-wiki.nested-states-and-nested-views', {
        url: '/nested-states-and-nested-views',
        templateUrl: 'partials/angularjs/ui-router/wiki/nested-states-and-nested-views.html'
    }).state('home.ui-router-wiki.multiple-named-views', {
        url: '/multiple-named-views',
        templateUrl: 'partials/angularjs/ui-router/wiki/multiple-named-views.html'
    }).state('home.ui-router-wiki.url-routing', {
        url: '/url-routing',
        templateUrl: 'partials/angularjs/ui-router/wiki/url-routing.html'
    }).state('home.ui-router-wiki.the-components', {
        url: '/the-components',
        templateUrl: 'partials/angularjs/ui-router/wiki/the-components.html'
    }).state('home.nginx', {
        // Nginx的首页路由
        url: '/nginx',
        templateUrl: 'partials/nginx/index.html'
    }).state('home.nginx.installing-nginx', {
        url: '/installing-nginx',
        templateUrl: 'partials/nginx/installing-nginx.html'
    }).state('home.nginx.beginner-guide', {
        url: '/beginner-guide',
        templateUrl: 'partials/nginx/beginner-guide.html'
    }).state('home.nginx.process-request', {
        url: '/process-request',
        templateUrl: 'partials/nginx/process-request.html'
    }).state('home.nginx.server-names', {
        url: '/server-names',
        templateUrl: 'partials/nginx/server-names.html'
    }).state('home.nginx.http-load-balancer', {
        url: '/http-load-balancer',
        templateUrl: 'partials/nginx/http-load-balancer.html'
    });
});


