<template>
  <!--
    分页组件
    入参格式
    data：{
      url: '/cloudFile/catalogPage.do',  接口地址
      list: [],    返回的数组
      total: 0,    总数
      el: '.table',    加载动画dom元素
      noText: true,  是否不显示加载动画的文案
      query: {     查询条件
        parentId: this.$route.query.parentId,
        pageSize: this.conf.PAGES,
        pageNo: 1,
        keyword: ''
      },


    }
  -->
    <el-pagination
      @current-change="handleCurrentChange"
      @size-change="handleSizeChange"
      :current-page="data.query.pageNo"
      :page-sizes="[10, 15, 20, 30, 50, 100]"
      :page-size="pageSize"
      layout="sizes, prev, pager, next, total, jumper"
      :total="pageData.total"
    >
    </el-pagination>

</template>
<script>
  export default {
    props: ['data'],
    computed:{
      'pageData': function () {
        return this.data
      },
      'pageSize': function () {
        return parseInt(this.pageData.query.pageSize || this.$store.state.pageSize)
      }
    },
    methods: {
      async handleCurrentChange (val) {
        this.pageData.query.pageNo = val || 1
        this.pageData.query.pageSize = this.$store.getters.getPageSize
        let res = await this.$ajax(this.pageData)
        this.pageData.list = res.list
        this.pageData.noData = this.pageData.total = res.total
        this.$emit('update:data', this.pageData)
      },
      async handleSizeChange(val){
        localStorage.setItem('pageSize', val)
        this.$store.commit('setPageSize', val)
        this.handleCurrentChange()
      }
    },
  }
</script>
<style lang="sass" scoped>
  .el-pagination
    margin-top: 20px
    margin-bottom: 10px
    text-align: center
</style>
