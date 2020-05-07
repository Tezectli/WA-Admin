import Vue from "vue";
import Vuex from "vuex";
import Cookie from "js-cookie";
import { GetSms, Register, Login } from "@/api/login";
// import { resolveConfig } from "prettier";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //优先取浏览器缓存 左边为false就会取右边的值
        //使用cookie获取值
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
    },
    getters: {},
    //修改上述值
    mutations: { //同步 不能处理回调
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
                //使用cookie缓存
                // Cookie.set('isCollapse', JSON.stringify(state.isCollapse))
                //本地存储
            sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
        }
    },
    actions: {
        // setMenuStatus(content, data) {
        //     content.commit('SET_COLLAPSE')
        //     console.log('dsfsjdfsdsjkdf')
        //     console.log(data)
        // }
        login(content, postData) {
            return new Promise((resolve, reject) => {
                Login(postData).then((response) => {
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        }
    },
    modules: {}
});