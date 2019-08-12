<template>
  <div class="section">
    <h1 class="section__title">
      <span>小题</span>
      <span class="section__subtitle">录入各小题选项</span>
    </h1>

    <div class="section__content bg-gray">
      <div v-for="(childQuestion, childQuestionIdx) in childQuestionList"
           :key="childQuestionIdx"
           class="section">
        <div class="section__title">
          <span>{{childQuestionIdx + 1}}</span>
          <span class="section__btn"
                @click="doDeleteChildQuestion(childQuestionIdx)">删除</span>
          <span class="section__btn"
                @click="doAddChildQuestionOption(childQuestionIdx)">添加选项</span>
        </div>
        <div class="section-content">
          <div v-for="(option, optionIdx) in childQuestion.questionOptionList"
               :key="optionIdx"
               class="section__question">
            <el-radio :label="String.fromCharCode(optionIdx + 65)"
                      v-model="childQuestion.answerContent"/>
            <el-input v-model.trim="option.optionContent"/>
            <!--<wang-editor v-if="option.optionContent !== undefined"-->
            <!--auto-adjust-tool-bar-visible-->
            <!--:content.sync="option.optionContent"/>-->
            <i class="el-icon-delete"
               v-show="optionIdx > 1"
               @click="doDeleteChildQuestionOption(childQuestionIdx, optionIdx)"></i>
          </div>
        </div>
      </div>

      <el-button type="primary"
                 @click="doAddChildQuestion">添加小题
      </el-button>
    </div>
  </div>
</template>

<script>

  export default {
    props: {
      childQuestionList: {
        type: Array,
        required: true
      }
    },
    methods: {
      doAddChildQuestionOption (childQuestionIdx) {
        let questionList = this.childQuestionList[childQuestionIdx].questionOptionList
        questionList.push({
          optionContent: ''
        })
      },
      doDeleteChildQuestion (childQuestionIdx) {
        this.childQuestionList.splice(childQuestionIdx, 1)
      },
      doDeleteChildQuestionOption (childQuestionIdx, optionIdx) {
        this.childQuestionList[childQuestionIdx].questionOptionList.splice(optionIdx, 1)
      },
      doAddChildQuestion () {
        this.childQuestionList.push({
          questionType: 'SELECT',
          titleContent: null,
          answerContent: null,
          questionOptionList: [{
            optionContent: ''
          }, {
            optionContent: ''
          }, {
            optionContent: ''
          }, {
            optionContent: ''
          }]
        })
      }
    }
  }
</script>

<style lang='sass' scoped>
  /*/deep/ .el-radio__label*/
    /*display: none*/
</style>
