<template>
  <div class="section">
    <h1 class="section__title">
      <span>答案</span>
      <span class="section__subtitle">请填写正确答案</span>
    </h1>
    <div class="section-content">
      <wang-editor height="120px"
          :content.sync="submit.answerContent"/>
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
