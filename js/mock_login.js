/**
 * Created by admin on 2019/4/11.
 */
require(["moke"], function (mokes) {
    var aa = mokes.mock({
        'name|3': 'fei',//这个定义数据的模板形式下面会介绍
        'age|20-30': 25
    });
    console.log(aa);
});