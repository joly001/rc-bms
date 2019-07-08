<template>
  <div class="plan">
    <div class="table-box">
      <el-input v-model="table.query.condition.condition"
                @keyup.enter.native="table.query.currentPage = 1;getData()"
                class="mr10" placeholder="请输入区段作业面/作业区间"></el-input>
      <div @click="table.query.currentPage = 1;getData()" class="btn-main">查&nbsp;&nbsp;&nbsp;询</div>
      <div @click="showDialog('add')" class="btn-main btn-add">新建作业面</div>
      <table cellspacing="0"  class="table">
        <tr>
          <th width="8%">序号</th>
          <th class="left-justifying" width="16%">区段作业面</th>
          <th class="left-justifying" width="18%">作业区间</th>
          <th width="12%">作业时间</th>
          <th width="10%">安全防护员人数</th>
          <th width="8%">现场员人数</th>
          <th width="8%">提交人</th>
          <th width="10%">提交时间</th>
          <th width="10%">操作</th>
        </tr>
        <tr v-for="(item,key) in table.list">
          <td>{{(key + 1) + (table.query.currentPage - 1) * table.query.pageSize}}</td>
          <td class="left-justifying">{{item.workSegmentName}}</td>
          <td class="left-justifying">
            {{item.workType === '00'? '上行': '下行'}}
            ：{{item.mileageSegmentName}}</td>
          <td>{{new Date(item.workDate).$Format('yyyy-MM-dd')}}</td>
          <td>{{item.safetyProtectionPersonnel}}</td>
          <td>{{item.workPersonnel}}</td>
          <td>{{item.submitUserName}}</td>
          <td>{{new Date(item.submitTime).$Format('yyyy-MM-dd')}}</td>
          <td>
            <span @click="showEditDialog(item)" class="oper">修改</span>
            <span class="col"></span>
            <span @click="remove(item)" class="oper">删除</span>
          </td>
        </tr>
        <no-data v-show="!table.list.length"></no-data>
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
               :visible.sync="dialog" width="520px">
      <el-form class="form" ref="form" label-width="96px" label-position="left">
        <el-form-item label="作业区间">
          <el-select v-model="addEditCofing.query.mileageSegmentId">
            <el-option :key="key" v-for="(item,key) in mileageSegment"
              :value="item.id" :label="item.mileageSegmentName"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="作业面">
          <el-checkbox
              @change="value8 = true; value9 = false"
              v-model="value8">上行</el-checkbox>
          <div class="mileage">
            k <input v-model="value1" type="text"/>
            + <input  v-model="value2" type="text"/>
            - k <input v-model="value3" type="text"/>
            + <input v-model="value4" type="text"/>
          </div>
          <el-checkbox @change="value9 = true; value8 = false" v-model="value9" class="ml5">下行</el-checkbox>
        </el-form-item>
        <el-form-item label="作业时间">
          <el-date-picker
              type="date"
              v-model="value5"
              placeholder="选择日期">
          </el-date-picker>
          <div v-for="(item,key) in value6">
            <el-time-picker
                v-model="item.time"
                class="time-picker"
                is-range
                size="mini"
                range-separator="-"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
                placeholder="选择时间范围">
            </el-time-picker>
            <i v-if="key === value6.length - 1" @click="value6.push({time: null})" class="icon el-icon-plus"></i>
            <i v-else @click="value6.splice(key, 1)" class="icon el-icon-minus"></i>
          </div>
        </el-form-item>
        <el-form-item label="安全防护员">
          <el-input-number
              class="mr5" v-model="addEditCofing.query.safetyProtectionPersonnel"
              size="mini" controls-position="right" :min="1" :max="10000"></el-input-number>
          <span>人</span>
        </el-form-item>
        <el-form-item label="现场人员人数">
          <el-input-number
              class="mr5" v-model="addEditCofing.query.workPersonnel"
              size="mini" controls-position="right" :min="1" :max="10000"></el-input-number>
          <span>人</span>
        </el-form-item>
        <el-form-item label="提交人">
          <el-input class="w130" disabled :value="userName"></el-input>
        </el-form-item>
        <el-form-item label="提交时间">
          <el-date-picker
              v-model="value7"
              disabled
              type="date"
              placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div class="btns mt25">
        <div  @click="addEditFun()" class="btn-main mr15">提交</div>
        <div @click="dialog = false" class="btn-main">关闭</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  let userName = JSON.parse(localStorage.getItem('userInfo')).username
  export default {
    name: "Plan",
    data(){
      return {
        value1: '',
        value2: '',
        value3: '',
        value4: '',
        value5: null,
        value7: new Date(),
        value6: [{time: null}],
        value8: true,
        value9: false,
        table:{
          url: '/workSegment/list',
          loading: '.table',
          list: [],
          total: 0,
          query:{
            condition:{
              condition: ''
            },
            currentPage: 1,
            pageSize: this.$conf.PAGES,
          }
        },
        addEditCofing:{
          url: '',
          query:{
            mileageSegmentId: null,
            mileageSegmentName: '',
            workSegmentName: '',
            startMileageName: '',
            endMileageName: '',
            workType: '00',
            workDate: '',
            safetyProtectionPersonnel: '',
            workPersonnel: '',
            workDateTimeList: [{
              startworkTime: '',
              endWorkTime: ''
            }]
          }
        },
        userName: userName,
        visible: false,
        title: '新建作业面',
        dialog: false,
        mileageSegment: []
      }
    },
    methods: {
      // 展现弹窗
      showDialog(type, item){
        this.dialog = true
        this.title = '新建作业面'
        this.value1 = ''
        this.value2 = ''
        this.value3 = ''
        this.value4 = ''
        this.value5 = null
        this.value6 = [{time: null}]
        this.value7 = new Date()
        this.value8 = true
        this.value9 = false
        this.addEditCofing.query = {
          mileageSegmentId: null,
          mileageSegmentName: '',
          workSegmentName: '',
          startMileageName: '',
          endMileageName: '',
          workType: '00',
          workDate: '',
          safetyProtectionPersonnel: '',
          workPersonnel: '',
          workDateTimeList: [{
            startworkTime: '',
            endWorkTime: ''
          }]
        }
      },
      // 修改时获取作业面时间
      async getTime(id){
        return await this.$ajax({
          url: '/workSegment/workSegmentDataTimeList',
          query: {
            workSegmentId: id
          }
        })
      },
      // 展现修改弹窗
      async showEditDialog(item){
        this.dialog = true
        this.title = '修改作业面'
        this.value1 = item.startMileageName.split('+')[0].replace('k', '')
        this.value2 = item.startMileageName.split('+')[1]
        this.value3 = item.endMileageName.split('+')[0].replace('k', '')
        this.value4 = item.endMileageName.split('+')[1]
        this.value5 = new Date(item.workDate)
        this.value6 = [{time: null}]
        this.value7 = new Date()
        this.value8 = item.workType === '00'
        this.value9 = item.workType === '01'
        this.addEditCofing.query = {
          id: item.id,
          mileageSegmentId: item.mileageSegmentId,
          mileageSegmentName: item.mileageSegmentName,
          workSegmentName: item.workSegmentName,
          startMileageName: item.workSegmentName,
          endMileageName: item.endMileageName,
          workType: item.workType,
          workDate: new Date(item.workDate).$Format('yyyy-MM-dd') ,
          safetyProtectionPersonnel: item.safetyProtectionPersonnel,
          workPersonnel: item.workPersonnel,
          workDateTimeList: [{
            startworkTime: '',
            endWorkTime: ''
          }]
        }
        let res = await this.getTime(item.id)
        this.value6 = []
        let list = res.list || []
        list.forEach(e=>{
          this.value6.push({
            time: [new Date(e.startworkTime),new Date(e.endWorkTime)]
          })
        })
        if(!this.value6.length){
          this.value6 = [{time: null}]
        }
        this.addEditCofing.query.workDateTimeList = res.list
      },
      // 获取表格数据
      async getData(){
        let table = JSON.parse(JSON.stringify(this.table))
        // if(table.query.condition.workDate){
        //   table.query.condition.workDate = new Date(table.query.condition.workDate).$Format('yyyy-MM-dd')
        // }
        let res = await this.$ajax(table)
        this.table.list = res.pageItems || []
        this.table.total = res.totalCount
      },
      // 删除
      async remove(item){
        await this.$confirm(`数据删除后将不能恢复，请确认是否删除？`, '提示', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await this.$ajax({
          url: '/workSegment/delete',
          query:{
            id: item.id
          }
        })
        this.$remind('删除成功')
        this.getData()
      },
      // 新建编辑作业面
      async addEditFun(){
        let text = ''
        if(this.title === '修改作业面'){
          text = '修改成功'
          this.addEditCofing.url = '/workSegment/update'
        }else{
          text = '新建成功'
          this.addEditCofing.url = '/workSegment/add'
        }
        this.addEditCofing.query.startMileageName = `k${this.value1}`
        if(this.value2){
          this.addEditCofing.query.startMileageName += `+${this.value2}`
        }
        this.addEditCofing.query.endMileageName = `k${this.value3}`
        if(this.value4){
          this.addEditCofing.query.endMileageName += `+${this.value4}`
        }
        this.addEditCofing.query.workSegmentName =this.addEditCofing.query.startMileageName + '-' +this.addEditCofing.query.endMileageName
        // 获取作业区间名称
        for (let i = 0; i < this.mileageSegment.length ; i++) {
          let e = this.mileageSegment[i]
          if(e.id === this.addEditCofing.query.mileageSegmentId){
            this.addEditCofing.query.mileageSegmentName = e.mileageSegmentName
            break
          }
        }

        // 处理作业时间
        this.addEditCofing.query.workDateTimeList = []
        this.addEditCofing.query.workDate = new Date(this.value5).$Format('yyyy-MM-dd')
        this.value6.forEach(e=>{
          if(e.time){
            this.addEditCofing.query.workDateTimeList.push({
              startworkTime: new Date(this.value5).$Format('yyyy-MM-dd') + ' ' + new Date(e.time[0]).$Format('hh:mm:ss') ,
              endWorkTime: new Date(this.value5).$Format('yyyy-MM-dd') + ' ' + new Date(e.time[1]).$Format('hh:mm:ss')
            })
          }
        })
        this.addEditCofing.query.workType = this.value8? '00': '01'
        await this.$ajax(this.addEditCofing)
        this.$remind(text)
        this.dialog = false
        this.table.query = {
          condition:{
            condition: ''
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
      },
      // 获取作业区间
      async getMileageSegment(){
        let res = await this.$ajax({
          url: '/mileageSegment/all'
        })
        this.mileageSegment = res.list
      }
    },
    mounted() {
      this.getData()
      this.getMileageSegment()
    }
  }
</script>

<style lang="sass" scoped>
  .plan
    .table-box
      width: 100%
      .btn-main
        vertical-align: middle
    .mileage
      display: inline-block
      margin: 0 3px
      input
        height: 28px
        border: 1px solid $main-c
        padding: 0 3px
        width: 45px
    .w130
      width: 130px !important
    .form
      .time-picker
        border: 1px solid $main-c
        border-radius: 5px
        margin-right: 5px
        width: calc(100% - 24px)
      .icon
        color: $main-c
        font-size: 16px
        font-weight: bold
        cursor: pointer
        &:hover
          opacity: .7
        &:active
          opacity: 1
</style>
