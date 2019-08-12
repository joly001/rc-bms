<template>
  <div class="index">
    <iframe class="iframe" src="../map/map.html"></iframe>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data(){
    }
  }
</script>

<style lang="sass" scoped>
  .index
    overflow-y: hidden
    .iframe
      position: absolute
      border-width: 0
      width: calc(100% - 240px)
      margin-top: -20px
      margin-left: -20px
      height: calc(100vh - 84px)
</style>
