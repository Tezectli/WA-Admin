// import cookie from "js-cookie";
import { Login } from "@/api/login";
import { setToken, setUserName, getUserName } from "@/utils/app";
const state = {
    //优先取浏览器缓存 左边为false就会取右边的值
    //使用cookie获取值
    isCollapse: JSON.parse(sessionStorage.getItem('isCollapse')) || false,
    to_ken: '',
    username: getUserName() || ''
}
const getters = {
        username: state => state.username
    }
    //修改上述值
const mutations = { //同步 不能处理回调
    SET_COLLAPSE(state) {
        state.isCollapse = !state.isCollapse
            //使用cookie缓存
            // Cookie.set('isCollapse', JSON.stringify(state.isCollapse))
            //本地存储
        sessionStorage.setItem('isCollapse', JSON.stringify(state.isCollapse))
    },
    SET_TOKEN(state, value) {
        state.to_ken = value
    },
    SET_USERNAME(state, value) {
        state.username = value
    }
}

const actions = {
    // setMenuStatus(content, data) {
    //     content.commit('SET_COLLAPSE')
    //     console.log('dsfsjdfsdsjkdf')
    //     console.log(data)
    // }
    login({ commit }, postData) {
        return new Promise((resolve, reject) => {
            Login(postData).then((response) => {
                let data = response.data
                console.log(response.data)
                    //普通法
                    // content.commit('SET_TOKEN', data.toKen)
                    // content.commit('SET_USERNAME', data.username)
                    //结构法
                commit('SET_TOKEN', data.toKen);
                commit('SET_USERNAME', data.username);
                setToken(data.toKen);
                setUserName(data.username);
                resolve(response)
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}