<template>
  <div>
    <p class="tips">
      <span>请下载{{type}}，按标准格式导入</span>
      <a :href="href" class="tips__href" target="_blank">下载模板</a>
    </p>
    <div class="upload">
      <div class="upload__label">
        <img src="../assets/img/excel.jpg"
             class="upload__img">
        <p class="upload__tips" v-show="!fileName">仅支持xls、xlsx格式文件</p>
        <p class="file">{{fileName}}</p>
        <label for="file-input"
               class="btn-main"
               @click.stop="btnUploadClick">上传文件</label>
      </div>
      <input type="file" id="file-input" hidden
             accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
             @change="onFileChange">
    </div>
  </div>
</template>

<script>
  export default {
    // data(){
    //   return {
    //     fileName: null
    //   }
    // },
    props: {
      // 下载模板的类型
      type: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        text: '上传文件',
        fileName: null
      }
    },
    computed: {
      suffix () {
        let xlsx = ['个人备课导入模板', '作业检查导入模板', '初中成绩基础数据导入模板', '学工各线考核导入模板', '常规检查总表导入模板', '成绩导入模板', '批量导入考生模板', '早自习到岗导入模板', '晚自习到岗导入模板', '晨读检查导入模板', '校办绩效考核登记表', '班主任例会到岗导入模板', '课间操到岗导入模板', '非文化成绩导入模板', '高中成绩基础数据导入模板', '卫生检查导入模板', '应聘结果导入模板']
        return xlsx.indexOf(this.type) > -1 ? 'xlsx' : 'xls'
      },
      href () {
        return `../gy-files/template/${this.type}.${this.suffix}`
      }
    },
    methods: {
      // 上传文件按钮点击
      btnUploadClick (e) {
        this.$emit('btn-click', e)
      },
      // file-input的change事件
      onFileChange (e) {
        this.$emit('change', e)
        this.fileName = e.target.files[0].name
        // 不清空input的话, 下次选择同一个文件不会触发change事件
        let oFileInput = document.getElementById('file-input')
        oFileInput.value = null
      }
    }
  }
</script>

<!--@formatter:off-->
<style lang='sass' scoped>
  .tips
    padding: 15px
    margin-bottom: 15px
    line-height: 30px
    color: #fff
    background: $warning
    @extend %clearfix
    &__href
      float: right
      color: $main-c
      text-decoration: underline
      cursor: pointer

  .upload
    width: 100%
    height: 150px
    border: 1px dashed $gray-shallow
    text-align: center
    &__img
      width: 60px
      margin-top: 10px
    &__tips
      margin-top: 5px
      color: $gray
    .btn-main
      margin-top: 10px
    .file
      margin-top: 5px
      color: $main-c
      text-decoration: $main-c
</style>
