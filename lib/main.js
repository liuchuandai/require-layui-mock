///**
// * Created by admin on 2019/4/10.
// */
//var requireConfig = {
//    baseUrl: '/',
//    paths: {
//        logi: '../js/mock_login',
//        layui: '../layui/layui',
//        jquery: '../lib/jquery-3.3.1.min',
//        moke: '../lib/mock'
//    },
//    shim: {  //配置js文件间的倚赖关系。
//        //layui: {  //这里的模块ID 是上面paths配置中定义moduleID，我试了一下不论是否用引号包起来都有用。
//        //    deps: ['jquery'] //这里的意思是：layui模块依赖jquery ,所以在要用到bootstrap时，
//        //    //requireJs 会先将jquery加载进来才会执行bootstrap。
//        //    //requireJs用这种方式来保证各个文件间的倚赖关系，并保证引用顺序。
//        //},
//        layui: {
//            deps: ['mock', 'jquery'],//多个依赖关系以数组形式指定出来。
//            exports: 'layuis'  //加载完成后，用Backbone作为全局的模块ID（moduleID）
//        }
//    }
//};
//requirejs.config(requireConfig);
//
//define(function (require) {
//    'use strict';
//    require(['mock'], function () {
//        //console.log($);
//    });
//});

requirejs.config({
    baseUrl: '/',
    paths: {
        "mock": "require-layui-mock/lib/mock",
        "logins": "require-layui-mock/js/mock_login",
        "layui": "require-layui-mock/layui/layui",
        "jquery": "require-layui-mock/lib/jquery-3.3.1.min"
    },
    shim: {
        "layui": {
            exports: "layuis",
            deps:[ "jquery"]
        }
    }
});
