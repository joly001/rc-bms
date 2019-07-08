<template>
  <div class="section">
    <h1 class="section__title">
      <span>答案</span>
      <span class="section__subtitle">请选择正确或错误</span>
    </h1>
    <div class="section__content">
      <el-radio-group v-model="submit.answerContent">
        <el-radio label="正确">正确</el-radio>
        <el-radio label="错误">错误</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      submit: {
        type: Object,
        required: true
      }
    }
  }
</script>

<style lang='sass' scoped>

</style>
