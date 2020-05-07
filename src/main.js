import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入icons里的全局组件
import "./icons/index.js";
import "./router/premit"
// import axios from 'axios';
// import qs from 'qs';
// Vue.prototype.$qs = qs;
Vue.use(ElementUI);
Vue.config.productionTip = false;

//路由守卫
router.beforeEach((to, from, next) => {
    console.log(to); //进入的页面
    console.log(from); //离开之前的页面（上一个）
    console.log(next);
    next(); //添加参数会进入死循环
})
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
6