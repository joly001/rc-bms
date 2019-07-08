<template>
  <div class="bread-nav">
    <div class="content">
      <i class="iconfont icon-weiluqu_dingwei"></i>
      <span v-for="(item,key) in nav">
      <a :class="[!item.path ? 'shallow': 'active'  ]" @click="jump(item)">{{item.name}}</a>
        <!--<span >&nbsp;&nbsp;>&nbsp;&nbsp;</span>-->
        <span v-show='key < (nav.length - 1) && nav[key + 1].name'
              class="el-icon-arrow-right"></span>
    </span>
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      nav: {
        default: [],
        type: Array
      }
    },
    methods: {
      // 如果 item = # 或者 item = false 不跳转
      jump (item) {
        if (!item.path || item.path === '#') {
          return
        }
        if (item.path === 'go(-1)') {
          this.$router.go(-1)
          return
        }
        this.$router.push({path: item.path, query: item.query})
      }
    }
  }
</script>
<style lang="sass" scoped>
  .bread-nav
    position: absolute
    padding-left: 200px
    left: 0
    top: 60px
    z-index: 1
    height: $bread-nav-height
    width: 100%
    background: #eeeeee
    .iconfont
      color: $gray-dark
    .content
      line-height: $bread-nav-height
      padding-left: 20px
      min-width: $min-width
      margin: 0 auto
    .iconfont
      font-size: 20px
      vertical-align: middle
      margin-right: 10px
    .shallow
      color: $gray !important
    .active
      transition: all .2s
      color: $gray-dark
      cursor: pointer
      &:hover
        color: $main-c
    .el-icon-arrow-right
      margin: 0 5px
</style>
