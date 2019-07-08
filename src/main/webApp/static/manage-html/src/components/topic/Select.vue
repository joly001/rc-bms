<template>
  <div class="section">
    <h1 class="section__title">
      <span>选项</span>
      <span class="section__subtitle">单/多选题的选项范围从2至20</span>
      <span class="section__btn" @click="doAddOption">添加选项</span>
    </h1>

    <div class="section__content">
      <div v-for="(item, idx) in submit.questionOptionList"
           :key="idx"
           class="section__question">
        <el-radio :label="String.fromCharCode(idx + 65)"
                  v-model="submit.answerContent"/>
        <!--<el-input v-model="item.optionContent"/>-->
        <wang-editor auto-adjust-tool-bar-visible
                     height="40px"
                     :content.sync="item.optionContent"
                     :ref="'wang-editor' + idx"/>
        <i class="el-icon-delete"
           v-show="idx > 1"
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
        this.submit.questionOptionList.push({
          optionContent: ''
        })
      },
      doDeleteOption (idx) {
        if (String.fromCharCode(idx + 65) === this.submit.answerContent) {
          this.$message({
            message: '当前选项是答案, 不能删除',
            type: 'warning'
          })
          return
        }
        this.submit.questionOptionList.splice(idx, 1)
        // 重新渲染编辑器里面的内容
        setTimeout(() => {
          for (let i = 0; i < this.submit.questionOptionList.length; i++) {
            this.$refs['wang-editor' + (idx)][0].reRender()
          }
        }, 0)
        // this.$refs['wang-editor' + (idx + 1)][0].reRender()
        // this.submit.questionOptionList[idx].optionContent = this.submit.questionOptionList[idx + 1].optionContent
        // if (String.fromCharCode(idx + 65) === this.submit.answerContent) {
        //   this.submit.answerContent = 'A'
        // }
      }
    }
  }
</script>

<style lang='sass' scoped>
  /*/deep/ .el-radio__label*/
    /*display: none*/
</style>
