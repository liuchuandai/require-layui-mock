/**
 * Created by admin on 2019/4/10.
 */

//require(["logi"], function (aa) {
//    console.log(aa)
//});


    //layui.use(['form', 'jquery'], function (form, jquery) {
    //    console.log($)
    //    var $ = layui.jquery;
    //    var form = layui.form;
    //    //监听提交
    //    form.on('submit(formDemo)', function (data) {
    //        //layer.msg(JSON.stringify(data.field));
    //        if (data.field.txt = "lcd" && data.field.password == 123456) {
    //            window.location.href = "test.html";
    //        } else {
    //            layer.msg(JSON.stringify("账号或密码错误"));
    //            console.log($)
    //        }
    //        return false;
    //    });
    //});

    //require(["moke", "layui"], function (moke) {
    //    var aa = moke.mock({
    //        'name|3': 'fei',
    //        'age|20-30': 25
    //    });
    //    console.log(aa);
    //    layui.use(['form', 'jquery'], function (form, jquery) {
    //        var $ = layui.jquery;
    //        var form = layui.form;
    //        //监听提交
    //        form.on('submit(formDemo)', function (data) {
    //            if (data.field.txt = "lcd" && data.field.password == 123456) {
    //                window.location.href = "test.html";
    //            } else {
    //                layer.msg(JSON.stringify("账号或密码错误"));
    //            }
    //            return false;
    //        });
    //    });
    //});


require(["../lib/main"], function () {
    require(["moke", "layui"], function (moke) {
        //设置mock数据与路径
        moke.mock('http://getJSON', 'post', {
                success: true,
                message: '',
                data: [{
                    "txt": "lcd",
                    "password": "123456"
                }]
            }
        );

        layui.use(['form', 'jquery'], function (form, jquery) {
            var $ = layui.jquery;
            var form = layui.form;
            //监听提交
            form.on('submit(formDemo)', function (data) {

                //if (data.field.txt = "lcd" && data.field.password == 123456) {
                //    window.location.href = "test.html";
                //} else {
                //    layer.msg(JSON.stringify("账号或密码错误"));
                //}

                $.post('http://getJSON', data.field, function (result) {

                    if (data.field.txt = "lcd" && data.field.password == 123456) {
                        window.location.href = "test.html";
                    } else {
                        layer.msg(JSON.stringify("账号或密码错误"));
                    }
                });

                return false;
            });
        });
    });
});



