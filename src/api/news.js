import service from '@/utils/request.js'
/**
 * 列表
 */
export function GetList(data) {
    return service.request({
        method: "post",
        url: "HT_splist",
        data
    })
}
/**
 * 新增
 */
export function AddInfo(data) {
    return service.request({
        method: "post",
        url: "OF_addsubject",
        data
    })
}
/**
 * 编辑
 * 
 */
export function EditInfo(data) {
    return service.request({
        method: "post",
        url: "OF_editsubject",
        data
    })
}
/**
 * 删除
 */
export function DeleteInfo(data) {
    return service.request({
        method: "post",
        url: "OF_deletesubject",
        data
    })
}
/**
 * 用户列表
 */
export function GetuserList(data) {
    return service.request({
        method: "post",
        url: "OF_userlist",
        data
    })
}
/**
 * 用户新增
 */
export function AdduserInfo(data) {
    return service.request({
        method: "post",
        url: "OF_addsubject",
        data
    })
}
/**
 * 用户编辑
 * 
 */
export function EdituserInfo(data) {
    return service.request({
        method: "post",
        url: "OF_edituser",
        data
    })
}
/**
 * 用户删除
 */
export function DeleteuserInfo(data) {
    return service.request({
        method: "post",
        url: "OF_deleteuser",
        data
    })
}
/**
 * 关于我们列表
 */
export function Aboutuslist(data) {
    return service.request({
        method: "post",
        url: "OF_aboutlist",
        data
    })
}

/**
 * 关于我们列表修改
 */
export function EditAboutuslist(data) {
    return service.request({
        method: "post",
        url: "OF_editabout",
        data
    })
}