<template>
  <div class="mechanical">
    <div class="table-box">
      <el-input v-model="table.query.condition.condition"
                @keyup.enter.native="table.query.currentPage = 1;getData()"
                class="mr10" placeholder="请输入：定位器编码/种类/司机姓名"></el-input>
      <div @click="table.query.currentPage = 1;getData()" class="btn-main ">查&nbsp;&nbsp;&nbsp;询</div>
<!--      <div @click="showDialog('add')" class="btn-main btn-add mb20 ml20">批量导入机械信息</div>-->
      <div @click="showDialog('add')" class="btn-main btn-add mb20">新建机械信息</div>
      <table cellspacing="0" class="table">
        <tr>
          <th width="6%">序号</th>
          <th width="13%">车牌号</th>
          <th class="left-justifying" width="10%">机械名称</th>
          <th width="10%">机械类型</th>
          <th width="10%">司机</th>
          <th width="13%">手机号</th>
          <th width="10%">作业半径</th>
          <th width="15%">定位器编码</th>
          <th width="13%">操作</th>
        </tr>
        <tr v-for="(item,key) in table.list">
          <td>{{key + 1}}</td>
          <td>{{item.plateNumber}}</td>
          <td class="left-justifying">{{item.machineryName}}</td>
          <td>{{item.machineryType | machineyrType}}</td>
          <td>{{item.nick}}</td>
          <td>{{item.mobile}}</td>
          <td>{{item.workRadius}}</td>
          <td>{{item.wristStrapCode}}</td>
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
               :visible.sync="dialog" width="420px">
      <el-form class="form" ref="form" label-width="85px" label-position="left">
        <el-form-item label="车牌号">
          <el-input v-model="addEditConfig.query.plateNumber" placeholder="请输入车牌号"></el-input>
        </el-form-item>
        <el-form-item label="机械名称">
          <el-input v-model="addEditConfig.query.machineryName" placeholder="请输入机械名称"></el-input>
        </el-form-item>
        <el-form-item prop="oldPassword" label="机械类型">
          <el-select v-model="addEditConfig.query.machineryType" placeholder="请选择机械类型">
            <el-option label="小型" value="SMALL"></el-option>
            <el-option label="中型" value="MEDIUM"></el-option>
            <el-option label="大型" value="LARGE"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="司机">
          <div @click="showDriverDialog" class="btn-set">
            {{addEditConfig.query.nick || '选择司机'}}
          </div>
        </el-form-item>
        <el-form-item label="手机">
          <el-input v-model="addEditConfig.query.mobile" placeholder="请输入手机"></el-input>
        </el-form-item>
        <el-form-item label="作业半径">
          <el-input class="unit-input" type="number" v-model="addEditConfig.query.workRadius" placeholder="请输入作业半径"></el-input>
          <span>cm</span>
        </el-form-item>
        <el-form-item label="定位器编码">
          <el-input v-model="addEditConfig.query.wristStrapCode" placeholder="请输入定位器编码"></el-input>
        </el-form-item>

      </el-form>
      <div class="btns mt25">
        <div @click="editFun()" class="btn-main mr15">提交</div>
        <div @click="dialog = false" class="btn-main">关闭</div>
      </div>
    </el-dialog>
    <!--司机选择-->
    <choice-driver v-if="driverDialog" @on-submit="selectedDriver" v-model="driverDialog"></choice-driver>
  </div>
</template>

<script>
  import choiceDriver from './ChoiceDriver'

  export default {
    components: {
      choiceDriver
    },
    data() {
      return {
        table: {
          url: '/machinery/list',
          loading: '.table',
          list: [],
          total: 0,
          query: {
            condition: {
              condition: ''
            },
            currentPage: 1,
            pageSize: this.$conf.PAGES,
          }
        },
        driverDialog: false,
        // 新建编辑
        addEditConfig: {
          url: '/mileage/add',
          query: {
            plateNumber: '',
            machineryName: '',
            machineryType: '',
            nick: '',
            mobile: '',
            workRadius: '',
            wristStrapCode: ''
          }
        },
        visible: false,
        title: '新建机械信息',
        dialog: false,
      }
    },
    methods: {
      // 展现弹窗
      showDialog(type, item) {
        this.dialog = true
        if (item) {
          this.title = '修改机械信息'
          this.addEditConfig.query = {
            id: item.id,
            userId: item.userId,
            plateNumber: item.plateNumber,
            machineryName: item.machineryName,
            machineryType: item.machineryType,
            nick: item.nick,
            mobile: item.mobile,
            workRadius: item.workRadius,
            wristStrapCode: item.wristStrapCode
          }
        } else {
          this.title = '新建机械信息'
          this.addEditConfig.query = {
            userId: '',
            plateNumber: '',
            machineryName: '',
            machineryType: '',
            nick: '',
            mobile: '',
            workRadius: '',
            wristStrapCode: ''
          }
        }
      },
      // 展开选择司机弹窗
      showDriverDialog() {
        this.driverDialog = true
      },
      // 选择司机的回调
      selectedDriver(userID, userName){
        this.addEditConfig.query.userId = userID
        this.addEditConfig.query.nick = userName
      },
      // 获取表格数据
      async getData() {
        let res = await this.$ajax(this.table)
        this.table.list = res.pageItems || []
        this.table.total = res.totalCount
      },
      // 删除
      async remove(item) {
        await this.$confirm(`数据删除后将不能恢复，请确认是否删除！`, '提示', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await this.$ajax({
          url: '/machinery/delete',
          query: {
            id: item.id
          }
        })
        this.$remind('删除成功')
        this.getData()
      },
      // 新建编辑方法
      async editFun() {
        if(isNaN(this.addEditConfig.query.workRadius)){
          this.$message.error('作业半径只能为数字')
          return
        }
        let text = ''
        if (this.title === '修改机械信息') {
          text = '修改成功'
          this.addEditConfig.url = '/machinery/update'
        } else {
          text = '新建成功'
          this.addEditConfig.url = '/machinery/add'
        }
        await this.$ajax(this.addEditConfig)
        this.$remind(text)
        this.dialog = false
        this.table.query = {
          condition: {
            condition: ''
          },
          currentPage: 1,
          pageSize: this.$conf.PAGES,
        }
        this.getData()
      },
      // 分页切换
      handleCurrentChange(e) {
        this.table.query.currentPage = e
        this.getData()
      },

    },
    mounted() {
      this.getData()
    },
    filters: {
      'machineyrType': function (val) {
        switch (val) {
          case 'SMALL':
            return '小型'
          case 'MEDIUM':
            return '中型'
          case 'LARGE':
            return '大型'
          default:
            return '未知'
        }
      }
    }
  }
</script>

<style lang="sass" scoped>
  .mechanical
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

    .unit-input
      width: calc(100% - 25px) !important
      margin-right: 5px
    .btn-set
      width: 100%
      text-align: center
      height: 28px
      line-height: 28px
      border-radius: 5px
      color: $main-c
      border: 1px solid $main-c
      cursor: pointer
      display: inline-block
      &:hover
        opacity: .7
      &:active
        opacity: 1
</style>
