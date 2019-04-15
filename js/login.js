/**
 * Created by admin on 2019/4/10.
 */
require(["../lib/main"], function () {
    require(["layui", "mock_login"], function (x, xx) {
        layui.use(['form'], function (form) {
            var $ = layui.jquery;
            var form = layui.form;
            //监听提交
            form.on('submit(formDemo)', function (data) {
                $.ajax({
                    url: 'http://login',
                    data: data.field,
                    type: 'post',
                    dataType: 'json',
                    success: function (datas) {
                        if (data.field.txt == datas.data.txt && data.field.password == datas.data.password) {
                            window.location.href = "home.html";
                        } else {
                            layer.msg(JSON.stringify("账号或密码错误"));
                        }
                    }
                });
                return false;
            });
        });
    });
})
