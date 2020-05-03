import Vue from "vue";
import Vuex from "vuex";
import Cookie from "js-cookie";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        //优先取浏览器缓存 左边为false就会取右边的值
        //使用cookie获取值
        isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false
    },
    getters: {},
    //修改上述值
    mutations: {
        SET_COLLAPSE(state) {
            state.isCollapse = !state.isCollapse
                //使用cookie缓存
                // Cookie.set('isCollapse', JSON.stringify(state.isCollapse))
                //本地存储
            sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
        }


    },
    actions: {},
    modules: {}
});