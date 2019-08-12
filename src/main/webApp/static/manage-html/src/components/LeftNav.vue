<template>
  <div class="left-nav">
    <p class="title">
      <span>铁路营业线施工</span>
      <span>安全防护平台</span>
    </p>
    <div class="hr"></div>
    <el-menu
        router
        :default-active="$route.path"
        active-text-color="#fff"
        class="el-menu-vertical-demo">
      <el-submenu index="1">
        <template slot="title">
          <i class="iconfont icon-zhihuizhongxinb"></i>
          <span>指挥调度中心</span>
        </template>
        <el-menu-item index="/wisdom/info">
          <div :class="{ 'active': $route.path === '/wisdom/info'}">
            <span class="row-active"></span>
            <span class="text-active">信息展示</span>
          </div>
        </el-menu-item>
        <el-menu-item
            v-if="authorities.hasOwnProperty('workSegment.list')"
            index="/wisdom/plan">
          <div :class="{ 'active': $route.path === '/wisdom/plan'}">
            <span class="row-active"></span>
            <span class="text-active">作业计划</span>
          </div>
        </el-menu-item>
        <el-menu-item
            v-if="authorities.hasOwnProperty('mileage.list')
            || authorities.hasOwnProperty('mileageSegment.list')
            || authorities.hasOwnProperty('railwayLines.list')
            || authorities.hasOwnProperty('machinery.list')
            || authorities.hasOwnProperty('sysParameter.all')"
            index="/wisdom/config">
          <div :class="{ 'active': $route.path === '/wisdom/config'}">
            <span class="row-active"></span>
            <span class="text-active">基础配置</span>
          </div>
        </el-menu-item>
      </el-submenu>
      <el-submenu
          v-if="authorities.hasOwnProperty('user.list')
          || authorities.hasOwnProperty('role.list')
          || authorities.hasOwnProperty('organization.all')"
          index="2">
        <template slot="title">
          <i class="iconfont icon-renyuan2"></i>
          <span>人员管理</span>
        </template>
        <el-menu-item
            v-if="authorities.hasOwnProperty('user.list')"
            index="/command/info">
          <div :class="{ 'active': $route.path === '/command/info'}">
            <span class="row-active"></span>
            <span class="text-active">现场人员管理</span>
          </div>
        </el-menu-item>
        <el-menu-item
            v-if="authorities.hasOwnProperty('role.list')"
            index="/command/role">
          <div :class="{ 'active': $route.path === '/command/role'}">
            <span class="row-active"></span>
            <span class="text-active">角色管理</span>
          </div>
        </el-menu-item>
        <el-menu-item
            v-if="authorities.hasOwnProperty('organization.all')"
            index="/command/org">
          <div :class="{ 'active': $route.path === '/command/org'}">
            <span class="row-active"></span>
            <span class="text-active">组织架构</span>
          </div>
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>

</template>
<script>
  // collapse 展开折叠
  import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
  // const menu = JSON.parse(localStorage.getItem('menu')).elementLists
  export default {
    components:{
      elCollapseTransition: CollapseTransition
    },
    data () {
      return {
        navData: [],
        info: {
          icon: '',
          name: ''
        },
        // 前一个页面的路由地址
        beforeRouter: this.$route.path,
        // 用户权限
        authorities: JSON.parse(sessionStorage.getItem('role'))
      }
    },
    methods: {
      // 展现第三级菜单
      showNav(item,key){
        let arr = this.navData[key]
        arr.status = !arr.status
        this.navData.splice(key,1,arr)
      },
    },
    watch: {
      '$route': function () {
        // 如果没有切换一级菜单 则不改变二级菜单列表
        if(this.beforeRouter.split('/')[1] === this.$route.path.split('/')[1]){
          return
        }
        this.beforeRouter = this.$route.path
      }
    },
  }
</script>
<style lang="sass" scoped>
  $nav-padding-left: 60px
  .left-nav
    position: absolute
    z-index: 101
    height: 100vh
    background: $assist-c
    width: $left-nav-width
    top: 0
    .row-active
      width: 6px
      height: 60px
      left: -6px
      background: $main-c
      position: absolute
      transition: all .3s
    .title
      padding: 25px 21px
      font-size: 28px
      line-height: 42px
      span:first-child
        font-size: 28px
      span:last-child
        font-size: 33px
      color: $main-c
    .el-menu-vertical-demo
      height: calc(100vh - 170px)
      overflow-y: auto
      overflow-x: hidden
    .hr
      width: 100%
      margin-top: 20px
      background: #6F6F6F
      height: 1px
      margin-bottom: 20px
    /deep/ .el-menu
      background-color: transparent
      width: $left-nav-width + 1px
      .el-submenu__title
        font-size: $font-large
        height: 68px
        line-height: 68px
      .el-submenu .el-menu-item
        height: 60px
        line-height: 60px
        font-size: 16px
      .is-active
        .el-submenu__title
          color: #fff
        i
          color: #fff
      .iconfont
        margin-right: 15px
        font-size: 20px
      .active
        color: #fff
        .row-active
          left: 0
        .text-active
          color: #ffffff
          width: calc(100% + 84px)
          height: 100%
          background: rgba(255,255,255,.1)
          display: block
          margin-left: -40px
          padding-left: 40px
      .el-submenu__title:hover
        background-color: transparent
      .el-menu-item:hover, .el-menu-item:focus
        background-color: transparent
        color: #ffffff
      .el-submenu__title
        color: #8D9199
      .el-menu-item
        color: #8D9199

</style>
