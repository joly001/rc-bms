import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component(resolve) {
        require(['@/components/main.vue'], resolve)
      },
      children: [
        {
          path: 'home',
          name: 'home',
          meta: {
            title: "主页"
          },
          component(resolve) {
            require(['@/views/home.vue'], resolve)
          }
        }
      ]
    },
    {
	    path:'/login',
	    name: 'login',
	    component(resolve){require(['@/views/login.vue'], resolve)},
	    hidden:true   
		},
    {
      path: '/',
      meta: {
        showMenu: true,
        icon: 'command',
        title: "指挥调度中心"
      },
      component(resolve) {
        require(['@/components/main.vue'], resolve)
      },
      children: [
        {
          path: 'msg',
          name: 'msg',
          meta: {
            showMenu: true,
            title: "信息展示"
          },
          component(resolve) {
            require(['@/views/command/msg.vue'], resolve)
          }
        },
        {
          path: 'work',
          name: 'work',
          meta: {
            showMenu: true,
            title: "作业计划"
          },
          component(resolve) {
            require(['@/views/command/work.vue'], resolve)
          }
        },
        {
          path: 'base',
          name: 'base',
          meta: {
            showMenu: true,
            title: "基础配置"
          },
          component(resolve) {
            require(['@/views/command/base.vue'], resolve)
          }
        },

      ]
    },
    {
      path: '/',
      meta: {
        showMenu: true,
        icon: 'people',
        title: '人员管理'
      },
      component(resolve) {
        require(['@/components/main.vue'], resolve)
      },
      children: [
        {
          path: 'people',
          name: 'people',
          meta: {
            showMenu: true,
            title: "现场人员管理"
          },
          component(resolve) {
            require(['@/views/people/people.vue'], resolve)
          }
        },
      ]
    },
    {
      path: '/',
      meta: {
        showMenu: true,
        icon: 'problem',
        title: "问题库管理"
      },
      component(resolve) { require(['@/components/main.vue'], resolve) },
      children: [
        {
           path: 'problem', 
           name: 'problem', 
           meta: { 
            title: '项目列表', 
          }, 
          component(resolve) { 
            require(['@/views/problem/problem.vue'], resolve) 
          } 
        },
      ]
    }
  ]
})
