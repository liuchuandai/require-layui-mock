/**
 * Created by admin on 2019/4/15.
 */

require(["../lib/main"], function () {
    require(["layui", "mock_table"], function () {
        layui.use('table', function () {
            var table = layui.table;
            var form = layui.form;
            //第一个实例
            table.render({
                elem: '#demo'
                , method: 'post'
                , url: 'http://table'
                , page: true //开启分页
                , cols: [[ //表头
                    {field: 'id', title: 'ID', sort: true}
                    , {field: 'username', title: '用户名'}
                    , {field: 'sex', title: '性别', sort: true}
                    , {field: 'city', title: '城市'}
                    , {field: 'sign', title: '签名'}
                    , {field: 'experience', title: '积分', sort: true}
                    , {field: 'score', title: '评分', sort: true}
                    , {field: 'classify', title: '职业'}
                    , {field: 'wealth', title: '财富', sort: true}
                    , {field: 'switchs', title: '开关 操作', width: '12%', templet: "#switchTpl"}
                ]]
            });
            form.on('switch(sexDemo)', function (obj) {
                layer.msg(JSON.stringify("状态 " + this.name +  "id " + obj.value));
            });
            //    del
            table.on('tool(test)', function (obj) {
                if (obj.event === 'del') {
                    layer.confirm('真的删除行么', function (index) {
                        obj.del();
                        layer.close(index);
                    });
                }
            });
        });
        $("#tiaozhuang").click(function(){
            window.location.herf = "#"
        })
    });
});