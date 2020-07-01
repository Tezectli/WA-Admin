import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import ElementUI from 'element-ui';
import './styles/custom.scss'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'element-ui/lib/theme-chalk/index.css';
//定义自己的全局方法
import global from "@/utils/global.js"
//引入icons里的全局组件
import "./icons/index.js";
import "./router/premit"
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import animated from 'animate.css'
import 'wowjs/css/libs/animate.css'
// import axios from 'axios';
// import qs from 'qs';
// Vue.prototype.$qs = qs;
Vue.use(IconsPlugin)
Vue.use(BootstrapVue);
Vue.use(animated);
Vue.use(global);
Vue.use(ElementUI);
Vue.config.productionTip = false;

//路由守卫
router.beforeEach((to, from, next) => {
    if (to.meta.title) {
        document.title = to.meta.title
    }
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