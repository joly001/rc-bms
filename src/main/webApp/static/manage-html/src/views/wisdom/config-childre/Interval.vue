<template>
  <div class="interval">
    <div class="table-box">
            <!--<el-input v-model="table.query.condition.workSegmentName"-->
            <!--          @keyup.enter.native="table.query.currentPage = 1;getData()"-->
            <!--          class="mr10" placeholder="请输入：作业区间名称"></el-input>-->
            <!--<div @click="getData" class="btn-main ">查&nbsp;&nbsp;&nbsp;询</div>-->
      <div @click="showDialog('add')" class="btn-main btn-add mb20">新建作业区间</div>
      <table cellspacing="0"  class="table">
        <tr>
          <th width="140px">序号</th>
          <th width="240px">作业区间名称</th>
          <th width="240px">作业区间里程</th>
          <th width="180px">作业周期</th>
          <th >操作</th>
        </tr>
        <tr v-for="(item,key) in table.list">
          <td>{{(key + 1) + (table.query.currentPage - 1) * table.query.pageSize}}</td>
          <td class="left-justifying">{{item.mileageSegmentName}}</td>
          <td class="left-justifying">{{item.mileageSegmentName}}</td>
          <td>{{item.workingCycle}}</td>
          <td>
            <span @click="showDialog('edit',item)" class="oper">修改</span>
            <span class="col"></span>
            <span @click="remove(item)" class="oper">删除</span>
          </td>
        </tr>
      </table>
      <el-pagination
          class="pagination"
          :page-size="table.query.pageSize"
          @current-change="handleCurrentChange"
          :current-page.sync="table.query.currentPage"
          layout="prev, pager, next, jumper"
          :total="table.total">
      </el-pagination>
    </div>
    <el-dialog :modal="false" center :title="title"
               :close-on-click-modal="false"
               :visible.sync="dialog" width="610px">
      <div class="title-box">
        <span>区间名称</span>
        <span>作业区间里程</span>
        <span>作业周期</span>
      </div>
      <div class="content">
        <div>
          <input :value="name" disabled type="text"/>
        </div>
        <div>
          k <input v-model="value1" type="text"/>
          + <el-select size="mini" class="select"  v-model="value2">
              <el-option :key="item" v-for="item in 9"
                :label="(item) * 100"
                :value="(item) * 100"
              ></el-option>
            </el-select>
          - k <input v-model="value3" type="text"/>
          + <el-select size="mini" class="select"  v-model="value4">
              <el-option :key="item" v-for="item in 9"
                     :label="(item) * 100"
                     :value="(item) * 100"
              ></el-option>
            </el-select>
        </div>
        <div>
          <input v-model="addEditConfig.query.workingCycle" type="text" />
        </div>
      </div>
      <div class="btns mt25">
        <div  @click="editFun()" class="btn-main mr15">提交</div>
        <div @click="dialog = false" class="btn-main">关闭</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        table:{
          url: '/mileageSegment/list',
          loading: '.table',
          list: [],
          total: 0,
          query:{
            condition:{
            },
            currentPage: 1,
            pageSize: this.$conf.PAGES,
          }
        },
        // 新建编辑
        addEditConfig: {
          url: '/mileageSegment/add',
          query:{
            mileageSegmentName: '',
            workingCycle: '',
            startMileageName: '',
            endMileageName: '',
          }
        },
        visible: false,
        title: '新建作业区间',
        dialog: false,
      }
    },
    computed: {
      name: function () {
        let str = `k${this.value1}`
        if(this.value2){
          str += `+${this.value2}`
        }
        if(this.value3){
          str += `-k${this.value3}`
        }
        if(this.value4){
          str += `+${this.value4}`
        }
        return str

      }
    },
    methods: {
      // 展现弹窗
      showDialog(type, item){
        this.dialog = true
        if(item){
          this.title = '修改作业区间'
          this.value1 = item.startMileageName.split('+')[0].replace('k', '')
          this.value2 = item.startMileageName.split('+')[1]
          this.value3 = item.endMileageName.split('+')[0].replace('k', '')
          this.value4 = item.endMileageName.split('+')[1]
          this.addEditConfig.query = {
            id: item.id,
            mileageSegmentName: item.mileageSegmentName,
            startMileageName: item.startMileageName,
            endMileageName: item.endMileageName,
            workingCycle: item.workingCycle
          }
        }else{
          this.value1 = ''
          this.value2 = ''
          this.value3 = ''
          this.value4 = ''
          this.title = '新建作业区间'
          this.addEditConfig.query = {
            mileageSegmentName: '',
            startMileageName: '',
            endMileageName: '',
            workingCycle: ''
          }
        }
      },
      // 获取表格数据
      async getData(){
        let res = await this.$ajax(this.table)
        this.table.list = res.pageItems
        this.table.total = res.totalCount
      },
      // 删除
      async remove(item){
        await this.$confirm(`数据删除后将不能恢复，请确认是否删除！`, '提示', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await this.$ajax({
          url: '/mileageSegment/delete',
          query:{
            id: item.id
          }
        })
        this.$remind('删除成功')
        this.getData()
      },
      // 新建编辑方法
      async editFun(){
        let text = ''
        if(this.title === '修改作业区间'){
          text = '修改成功'
          this.addEditConfig.url = '/mileageSegment/update'
        }else{
          text = '新建成功'
          this.addEditConfig.url = '/mileageSegment/add'
        }

        this.addEditConfig.query.startMileageName = this.name.split('-')[0]
        this.addEditConfig.query.endMileageName = this.name.split('-')[1]
        this.addEditConfig.query.mileageSegmentName = this.name
        await this.$ajax(this.addEditConfig)
        this.$remind(text)
        this.dialog = false
        this.table.query = {
          condition:{
          },
          currentPage: 1,
          pageSize: this.$conf.PAGES,
        }
        this.getData()
      },
      // 分页切换
      handleCurrentChange(e){
        this.table.query.currentPage = e
        this.getData()
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style lang="sass" scoped>
  .interval
    .table
      th, td
        padding: 0 50px
    .title-box
      span
        display: inline-block
        text-align: center
        line-height: 32px
      span:nth-of-type(1)
        width: 150px
      span:nth-of-type(2)
        width: 308px
      span:nth-of-type(3)
        width: 100px
    .content
      height: 40px
      line-height: 40px
      border-top: 1px solid #eee
      border-bottom: 1px solid #eee
      input
        height: 26px
        border: 1px solid $main-c
      .select
        width: 60px !important
        /deep/ input
          padding: 0 3px !important
          border-radius: 0 !important
      div
        text-align: center
        display: inline-block
      div:nth-of-type(1)
        width: 150px
        input
          width: 150px
          cursor: no-drop
          background: #eee
          padding: 0 5px
      div:nth-of-type(2)
        width: 308px
        input
          width: 40px
      div:nth-of-type(3)
        width: 100px
        input
          width: 65px


</style>
