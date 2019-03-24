import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAxios from 'vue-axios';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from './plugins/axios/http.js' // 导入axios拦截器 

import {updateVueX} from "./utils/index.js";

Vue.config.productionTip = false;

Vue.use(VueAxios, axios);
Vue.use(iView);

updateVueX();//监听页面刷新，重置vueX数据。

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
