/**
 * Created by admin on 2019/4/12.
 */
/**
 * Created by admin on 2019/4/10.
 */
require(["../lib/main"], function () {
    require(["mock", "layui"], function (Mock) {

        Mock.mock('http://getIMG', 'get', {
            success: true,
            message: '',
            data: [
                {
                    "src": "../images/lb1.jpg",
                    "url": "http://www.baidu.com"
                },
                {
                    "src": "../images/lb2.jpg",
                    "url": "http://www.google.com"
                },
                {
                    "src": "../images/lb3.jpg",
                    "url": "http://www.baidu.com"
                },
                {
                    "src": "../images/lb4.jpg",
                    "url": "http://www.baidu.com"
                },
                {
                    "src": "../images/lb5.jpg",
                    "url": "http://www.baidu.com"
                }
            ]
        });

        layui.use('carousel', function () {
            let carousel = layui.carousel;
            //获取轮播图路径
            $.ajax({
                url: 'http://getIMG',
                data: "",
                type: 'get',
                dataType: 'json',
                success: function (datas) {
                    for (let i = 0; i < datas.data.length; i++) {
                        let dataSrc = datas.data[i].src;
                        //给lbid增加一个img标签且增加src与data-img属性并绑定点击事件
                        $("<img>").appendTo("#lbid")
                            .attr({'src': dataSrc, 'data-img': datas.data[i].url})
                            .click(function () {
                                window.location = datas.data[i].url
                            });
                    }
                    //轮播图建造实例
                    carousel.render({
                        elem: '#test1'
                        , width: '100%'
                        , arrow: 'hover'
                        , anim: 'fade'
                        , interval: '3000'
                    })
                }
            })
        })
    })
})

