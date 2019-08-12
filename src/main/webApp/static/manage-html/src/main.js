import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './vuex/index'
import 'normalize.css'
import './api/config'
import api from './api/index'
import './assets/js/utils' //工具包
import Navigation from 'vue-navigation'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import './assets/css/element-variables.scss'
import './assets/css/icon.css'
import breadNav from './components/BreadNav'
import mainPart from './components/MainPart'
import searchBox from './components/SearchBox'
import wangEditor from './components/WangEditor'
import noData from './components/NoData'
import paging from './components/Paging'
import importExcel from './components/ImportExcel'
import resizeTable from './components/ResizeTable'
// 面包屑导航
Vue.component('bread-nav', breadNav)
// 内容区域
Vue.component('main-part', mainPart)
// 表格搜索框
Vue.component('search-box', searchBox)
// 富文本
Vue.component('wang-editor', wangEditor)
// 无数据
Vue.component('no-data', noData)
// 分页
Vue.component('paging', paging)
// excel导入
Vue.component('import-excel', importExcel)
// 可以拉动的table
Vue.component('resize-table',resizeTable)
Vue.use(ElementUI)
// 保存返回状态插件
Vue.use(Navigation,{router})
Vue.prototype.$api = api
Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default app
