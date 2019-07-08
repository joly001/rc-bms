import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', component: () => import(`./views/login/Index.vue`)},
    {path: '/login', component: () => import(`./views/login/Index.vue`)},
    /* 指挥调度中心 */
    {
      path: '/wisdom', component: () => import('./views/Index.vue'),
      children: [
        {path: '/wisdom/info', component: () => import(`./views/wisdom/Info.vue`),
          meta: {
            nav: '指挥调度中心',
            subNav: '信息展示'
          }},
        {path: '/wisdom/plan', component: () => import(`./views/wisdom/Plan.vue`),
          meta: {
            nav: '指挥调度中心',
            subNav: '作业计划'
          }},
        {path: '/wisdom/config', component: () => import(`./views/wisdom/Config.vue`),
          meta: {
            nav: '指挥调度中心',
            subNav: '基础配置'
          }},// 角色管理
      ]
    },
    /* 人员管理 */
    {
      path: '/command', component: () => import('./views/Index.vue'),
      children: [
        {path: '/command/info', component: () => import(`./views/command/Info.vue`),
          meta: {
            nav: '人员管理',
            subNav: '现场人员管理'
          }},// 信息展示
        {path: '/command/org', component: () => import(`./views/command/Org.vue`),
          meta: {
            nav: '人员管理',
            subNav: '组织架构'
          }},// 组织架构
        {path: '/command/role', component: () => import(`./views/command/Role.vue`),
          meta: {
            nav: '人员管理',
            subNav: '角色管理'
          }},// 角色管理
      ]
    },
    {path: '*', redirect: {path: '/command/info'}}
  ]
})
export default router
