/**
 * Created by admin on 2019/4/10.
 */

var aa = Mock.mock({
    "string|1-10": "★"
});
console.log(aa);

layui.use(['form', 'jquery'], function(form, jquery){
    var $ = layui.jquery;
    var form = layui.form;
    //监听提交
    form.on('submit(formDemo)', function(data){
        //layer.msg(JSON.stringify(data.field));
        if(data.field.txt = "lcd" && data.field.password == 123456){
            window.location.href="test.html";
        } else {
            layer.msg(JSON.stringify("账号或密码错误"));
        }
        return false;
    });
});
