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