//表单验证函数的封装
//多个函数使用逗号分隔
export function stripscript(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
//验证邮箱
export function validataEmail(value) {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
    return !reg.test(value) ? true : false
    // if(!reg.test(value)){
    //     return true
    // }else{
    //     return false
    // }
}
/**
 * 验证密码
 */
export function validataPass(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/s
    return !reg.test(value) ? true : false
}
/**
 * 验证验证码
 */
export function validataVcode(value) {
    let reg = /^[a-z0-9]{6}$/
    return !reg.test(value) ? true : false
}