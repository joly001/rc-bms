<template>
  <div class="main-part">
    <slot></slot>
  </div>

</template>
<script>
  export default {
    data() {
      return {}
    },
    methods: {},
  }
</script>
<style lang="sass" scoped>
  .main-part
    position: relative
    height: calc(100vh - 60px)
    overflow-y: auto
    padding: $bread-nav-height + 15px 15px 15px 15px
    background: #fff
</style>
