import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./stores";
import axios from "./utils/axios";
import './directives';
import './components';
// 引入插件
import VueSweetalert2 from './plugins/vue-sweetalert2'

// 使用插件
Vue.use(VueSweetalert2)

Vue.prototype.$axios = axios;

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
