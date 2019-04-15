/**
 * Created by admin on 2019/4/11.
 */

require(["mock"], function (Mock) {
    Mock.mock('http://login', 'post', {
        success: true,
        message: '',
        data: {
            "txt": "lcd",
            "password": "123456"
        }
    })
});