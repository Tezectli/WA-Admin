import Vue from "vue";
import VueCompositionApi from '@vue/composition-api';
Vue.use(VueCompositionApi);
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import axios from 'axios';
// import qs from 'qs';
// Vue.prototype.$qs = qs;

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
6