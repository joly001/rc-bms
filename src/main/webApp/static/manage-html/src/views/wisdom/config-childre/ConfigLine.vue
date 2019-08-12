<template>
  <div class="config-line">
    <div class="table-box">
            <el-input v-model="table.query.condition.railwayLinesName"
                      @keyup.enter.native="table.query.currentPage = 1;getData()"
                      class="mr10" placeholder="请输入站名"></el-input>
            <div @click="table.query.currentPage = 1;getData()" class="btn-main ">查&nbsp;&nbsp;&nbsp;询</div>
      <div @click="showDialog('add')" class="btn-main btn-add mb20">新建站点/区间</div>
      <table cellspacing="0"  class="table">
        <tr>
          <th width="10%">序号</th>
          <th class="left-justifying" width="15%">名称</th>
          <th width="23%">线路类型</th>
          <th class="left-justifying" width="25%">起止点</th>
          <th class="left-justifying" width="15%">上一站</th>
          <th width="12%">操作</th>
        </tr>
        <tr v-for="(item,key) in table.list">
          <td>{{(key + 1) + (table.query.currentPage - 1) * table.query.pageSize}}</td>
          <td class="left-justifying">{{item.railwayLinesName}}</td>
          <td>{{item.type === '00'? '站点': '区间'}}</td>
          <td class="left-justifying">
            {{item.startMileageName}} — {{item.endMileageName	}}
          </td>
          <td class="left-justifying">{{item.previousStationName	}}</td>
          <td>
            <span @click="showDialog('edit',item)" class="oper">修改</span>
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
               :visible.sync="dialog" width="362px">
      <el-form class="form" ref="form" label-width="80px" label-position="left">
        <el-form-item prop="oldPassword" label="名称">
          <el-input v-model="addEditConfig.query.railwayLinesName"  placeholder="请输入里程点"></el-input>
        </el-form-item>
        <el-form-item  label="线路类型">
          <span>站点</span>
        </el-form-item>
        <el-form-item  label="起讫里程">
          <div class="mileage">
            k <input v-model="value2" type="text"/>
            + <input  v-model="value3" type="text"/>
            - k <input v-model="value4" type="text"/>
            + <input v-model="value5" type="text"/>
          </div>
<!--          <el-input v-model="addEditConfig.query.startMileageName" class="short" placeholder="起始里程点"></el-input>-->
<!--            <span class="mx5">-</span>-->
<!--          <el-input v-model="addEditConfig.query.endMileageName" class="short" placeholder="结束里程点"></el-input>-->
        </el-form-item>
        <el-form-item label="上一站">
          <el-select v-model="addEditConfig.query.previousStationId">
            <el-option :key="key" v-for="(item,key) in allSite"
              :label="item.railwayLinesName" :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型">
          <p>站点</p>
        </el-form-item>
        <el-form-item label="起讫里程">
          <p>{{value1}}</p>
        </el-form-item>
      </el-form>
      <div class="btns mt25">
        <div  @click="editFun()" class="btn-main mr15">提交</div>
        <div @click="dialog = false" class="btn-main">关闭</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Mileage",
    data(){
      return {
        table:{
          url: '/railwayLines/list',
          loading: '.table',
          list: [],
          total: 0,
          query:{
            condition:{
              railwayLinesName: '',
            },
            currentPage: 1,
            pageSize: this.$conf.PAGES,
          }
        },
        // 新建编辑
        addEditConfig: {
          url: '/mileage/list',
          query:{
            previousStationId: null,
            endMileageName: '',
            startMileageName: '',
            railwayLinesName: '',
            type: '00'
          }
        },
        visible: false,
        title: '新建站点/区间',
        dialog: false,
        // 所有站点
        allSite: [],
        // 里程点
        value2: '',
        value3: '',
        value4: '',
        value5: '',
      }
    },
    methods: {
      // 展现弹窗
      showDialog(type, item){
        this.getAllSite()
        this.dialog = true
        if(item){
          this.title = '修改站点/区间'
          this.value2 = item.startMileageName.split('+')[0].replace('k', '')
          this.value3 = item.startMileageName.split('+')[1]
          this.value4 = item.endMileageName.split('+')[0].replace('k', '')
          this.value5 = item.endMileageName.split('+')[1]
          // 获取上个站点ID
          let previousStationId = ''
          for (let i = 0; i < this.allSite.length; i++) {
            if(this.allSite[i].railwayLinesName === item.railwayLinesName) {
              previousStationId = this.allSite[i].id
            }
          }
          this.addEditConfig.query = {
            id: item.id,
            previousStationId: previousStationId,
            endMileageName: item.endMileageName,
            startMileageName: item.startMileageName,
            railwayLinesName: item.railwayLinesName,
            type: '00'
          }
        }else{
          this.value2 = ''
          this.value3 = ''
          this.value4 = ''
          this.value5 = ''
          this.title = '新建站点/区间'
          this.addEditConfig.query = {
            previousStationId: null,
            endMileageName: '',
            startMileageName: '',
            railwayLinesName: '',
            type: '00'
          }
        }
      },
      // 获取表格数据
      async getData(){
        let res = await this.$ajax(this.table)
        this.table.list = res.pageItems || []
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
          url: '/railwayLines/delete',
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
        if(this.title === '修改站点/区间'){
          text = '修改成功'
          this.addEditConfig.url = '/railwayLines/update'
        }else{
          text = '新建成功'
          this.addEditConfig.url = '/railwayLines/add'
        }

        this.addEditConfig.query.startMileageName = `k${this.value2}`
        this.addEditConfig.query.endMileageName = `k${this.value4}`
        if(this.value3){
          this.addEditConfig.query.startMileageName += `+${this.value3}`
        }
        if(this.value5){
          this.addEditConfig.query.endMileageName += `+${this.value5}`
        }

        await this.$ajax(this.addEditConfig)
        this.$remind(text)
        this.dialog = false
        this.table.query = {
          condition:{
            railwayLinesName: '',
          },
          currentPage: 1,
          pageSize: this.$conf.PAGES,
        }
        this.getData()
      },
      // 获取所有线路站点
      async getAllSite(){
        let res = await this.$ajax({
          url: '/railwayLines/all'
        })
        this.allSite = res.list
      },
      // 分页切换
      handleCurrentChange(e){
        this.table.query.currentPage = e
        this.getData()
      }
    },
    computed:{
      value1: function () {
        for (let i = 0; i <this.allSite.length ; i++) {
         if(this.allSite[i].id === this.addEditConfig.query.previousStationId){
           return this.allSite[i].startMileageName + '-' + this.allSite[i].endMileageName
         }
        }

      }
    },
    mounted() {
      this.getData()
    }
  }
</script>

<style lang="sass" scoped>
  .config-line
    .table-box
      width: 100%
    .short
      width: 100px !important
    .mileage
      input
        height: 26px
        border: 1px solid $main-c
        padding: 0 3px
        width: 40px




</style>
