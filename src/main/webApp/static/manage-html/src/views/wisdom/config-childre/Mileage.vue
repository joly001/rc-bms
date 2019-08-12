<template>
  <div>
    <div class="table-box">
<!--      <el-input v-model="table.query.condition.roleName"-->
<!--                @keyup.enter.native="table.query.currentPage = 1;getData()"-->
<!--                class="mr10" placeholder="请输入：角色名称"></el-input>-->
<!--      <div @click="getData" class="btn-main ">查&nbsp;&nbsp;&nbsp;询</div>-->
      <div @click="showDialog('add')" class="btn-main btn-add mb20">设置里程</div>
      <table cellspacing="0"  class="table">
        <tr>
          <th width="8%">序号</th>
          <th class="left-justifying" width="9%">里程点</th>
          <th width="12%">里程类型</th>
          <th class="left-justifying" width="32%">对应坐标1</th>
          <th class="left-justifying" width="32%">对应坐标2</th>
          <th width="10%">操作</th>
        </tr>
        <tr v-for="(item,key) in table.list">
          <td>{{(key + 1) + (table.query.currentPage - 1) * table.query.pageSize}}</td>
          <td class="left-justifying">{{item.mileageName}}</td>
          <td>{{item.mileageType === '00'? '百米标': '公里标'}}</td>
          <td class="left-justifying">（x: {{item.startLongitude}} ， y: {{item.startLatitude}}）</td>
          <td class="left-justifying">（x: {{item.endLongitude}} ， y: {{item.endLatitude}}）</td>
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
               :visible.sync="dialog" width="420px">
      <el-form class="form" ref="form" label-width="80px" label-position="left">
        <el-form-item prop="oldPassword" label="里程点">
          <el-input v-model="addEditConfig.query.mileageName"  placeholder="请输入里程点"></el-input>
        </el-form-item>
        <el-form-item prop="oldPassword" label="里程类型">
          <el-radio-group class="ml20" v-model="addEditConfig.query.mileageType">
            <el-radio label="00">百米标</el-radio>
            <el-radio label="01">公里标</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item prop="oldPassword" label="对应坐标1">
          <span class="assist">{{addEditConfig.query.mileageType === '00'? '百米标': '公里标'}}</span>
          <div class="coordinates">
            <span>x:</span>
            <el-input placeholder="请输入内容" v-model="addEditConfig.query.startLongitude">
            </el-input>
          </div>
          <div class="coordinates">
            <span>y:</span>
            <el-input placeholder="请输入内容" v-model="addEditConfig.query.startLatitude">
            </el-input>
          </div>
        </el-form-item>
        <el-form-item prop="oldPassword" label="对应坐标2">
          <span class="assist">{{addEditConfig.query.mileageType === '00'? '百米标': '公里标'}}</span>
          <div class="coordinates">
            <span>x:</span>
            <el-input placeholder="请输入内容" v-model="addEditConfig.query.endLongitude">
            </el-input>
          </div>
          <div class="coordinates">
            <span>y:</span>
            <el-input placeholder="请输入内容" v-model="addEditConfig.query.endLatitude">
            </el-input>
          </div>
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
          url: '/mileage/list',
          loading: '.table',
          list: [],
          total: 0,
          query:{
            condition:{
              mileageName: '',
            },
            currentPage: 1,
            pageSize: this.$conf.PAGES,
          }
        },
        // 新建编辑
        addEditConfig: {
          url: '/mileage/add',
          query:{
            mileageName: '',
            mileageType: '00',
            startLongitude: '',
            startLatitude: '',
            endLongitude: '',
            endLatitude: ''
          }
        },
        visible: false,
        title: '设置里程',
        dialog: false,
      }
    },
    methods: {
      // 展现弹窗
      showDialog(type, item){
        this.dialog = true
        if(item){
          this.title = '修改里程'
          this.addEditConfig.query = {
            id: item.id,
            mileageName: item.mileageName,
            mileageType: item.mileageType,
            startLongitude: item.startLongitude,
            startLatitude: item.startLatitude,
            endLongitude: item.endLongitude,
            endLatitude: item.endLatitude
          }
        }else{
          this.title = '设置里程'
          this.addEditConfig.query = {
            mileageName: '',
            mileageType: '00',
            startLongitude: '',
            startLatitude: '',
            endLongitude: '',
            endLatitude: ''
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
          url: '/mileage/delete',
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
        if(this.title === '修改里程'){
          text = '修改成功'
          this.addEditConfig.url = '/mileage/update'
        }else{
          text = '新建成功'
          this.addEditConfig.url = '/mileage/add'
        }
        await this.$ajax(this.addEditConfig)
        this.$remind(text)
        this.dialog = false
        this.table.query = {
          condition:{
            mileageName: '',
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
  .table-box
    width: 100%
  .coordinates
    span
      display: inline-block
      width: 20px
    .el-input
      display: inline-block
      width: calc(100% - 20px) !important
  .assist
    font-size: $font-small
    color: $gray
    position: absolute
    top: 20px
    left: -80px
</style>
