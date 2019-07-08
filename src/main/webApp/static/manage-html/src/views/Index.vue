<template>
  <div class="main">
    <left-nav></left-nav>
    <top-nav></top-nav>
    <div class="view">
      <transition  mode="out-in" name="el-fade-in-linear">
      <navigation>
        <router-view class="router"></router-view>
      </navigation>
      </transition>
    </div>
  </div>

</template>
<script>
  import leftNav from '../components/LeftNav'
  import topNav from '../components/TopNav'
  export default {
    components:{
      leftNav,
      topNav
    },
  }
</script>
<style lang="sass" scoped>
  .main
    .view
      position: absolute
      left: 0
      top: 0
      height: 100vh
      padding-top: $top-nav-height
      width: 100%
      min-width: $min-width
      padding-left: $left-nav-width
      overflow-x: hidden
    .router
      overflow-y: hidden
      overflow-x: hidden
      padding: 20px
</style>
