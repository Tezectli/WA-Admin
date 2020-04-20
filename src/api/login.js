import service from '@/utils/request.js'
export function GetSms() {
    //第一个为自家登录接口 第二个为测试用外网接口
    // service.request({
    //     method: "get",
    //     url: "WX_login",
    //     data: {}
    // });

    service.request({
        method: "post",
        url: "/getSms/",
        data: {}
    });
}