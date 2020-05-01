import Vue from "vue";
//定义全局组件

// require.context(‘./svg’, false, /\.svg$/) 参数说明：
// 第一个：目录
// 第二个：是否遍历子级目录
// 第三个：定义遍历文件规则

import SvgIcon from "./SvgIcon";
Vue.component('svg-icon', SvgIcon)
const  req  =  require.context('./svg',  false,  /\.svg$/)
const  requireAll  =  requireContext  =>  {  
    return  requireContext.keys().map(requireContext)
}
requireAll(req)