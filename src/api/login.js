import service from '@/utils/request.js'
export function GetSms(data) {
    //第一个为自家登录接口 第二个为测试用外网接口
    service.request({
        method: "post",
        url: "WX_login",
        data: {}
    });

    // service.request({
    //     method: "post",
    //     url: "/getSms/",
    //     data
    // });
}
/**
 * 注册接口
 */
export function Register(data) {
    return service.request({
        method: "post",
        url: "HT_usern_login",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data
    })
}
/**
 * 登录接口
 */
export function Login(data) {
    return service.request({
        method: "post",
        url: "WX_login",
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data
    })
}