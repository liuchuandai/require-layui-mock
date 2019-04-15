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
                    , {field: 'username', title: '用户名', width: '10%'}
                    , {field: 'sex', title: '性别', width: '7%', sort: true}
                    , {field: 'city', title: '城市', width: '10%'}
                    , {field: 'sign', title: '签名', width: '10%'}
                    , {field: 'experience', title: '积分', width: '10%', sort: true}
                    , {field: 'score', title: '评分', width: '10%', sort: true}
                    , {field: 'classify', title: '职业', width: '10%'}
                    , {field: 'wealth', title: '财富', width: '10%', sort: true}
                    , {field: 'switchs', title: '开关 操作', width: '13%', templet: "#switchTpl"}
                ]]
            });
            form.on('switch(sexDemo)', function (obj) {
                layer.msg(JSON.stringify("状态 " + this.name + "&nbsp;&nbsp;&nbsp;" + "id " + obj.value));
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
        })
    });
})