<template>
  <div class="section">
    <h1 class="section__title">
      <span>答案</span>
      <span class="section__subtitle">请填写每个填空的答案</span>
      <span class="section__btn" @click="doAddOption">添加答案</span>
    </h1>
    <div class="section__content">
      <div v-for="(item, idx) in submit.questionOptionList"
           :key="idx"
           class="section__question">
        <span class="el-checkbox">{{idx + 1}}</span>
        <!--<el-input v-model="item.optionContent"/>-->
        <wang-editor auto-adjust-tool-bar-visible
                     :content.sync="item.optionContent"
                     :ref="'wang-editor' + idx"/>
        <i class="el-icon-delete"
           v-show="idx > 0"
           @click="doDeleteOption(idx)"></i>
      </div>
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
    },
    methods: {
      doAddOption () {
        if (!this.submit.questionOptionList) this.submit.questionOptionList = []
        // console.log(this.submit.questionOptionList)
        this.submit.questionOptionList.push({
          optionContent: ''
        })
      },
      doDeleteOption (idx) {
        this.submit.questionOptionList.splice(idx, 1)
        // 重新渲染编辑器里面的内容
        setTimeout(() => {
          for (let i = 0; i < this.submit.questionOptionList.length; i++) {
            this.$refs['wang-editor' + (idx)][0].reRender()
          }
        }, 0)
      }
    }
  }
</script>

<style lang='sass' scoped>

</style>
