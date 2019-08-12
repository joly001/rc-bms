<template>
  <div>
    <el-tree :data="orgList"
             show-checkbox
             :props="defaultProps"
             node-key="id"
             :default-expanded-keys="expandedKeys"
             :check-strictly="true"
             :highlight-current="true"
             default-expand-all
             :expand-on-click-node="false"
             ref="tree"
             @check-change="checkChange"
             @node-click="nodeClick">
    </el-tree>
    <div class="table-box">
      <el-input class="mr10"
                v-model="table.query.condition.condition"
                @keyup.enter.native="table.query.currentPage = 1;getData()"
                placeholder="请输入：姓名/手环编号/手机号"></el-input>
      <div @click="table.query.currentPage = 1;getData()" class="btn-main ">查&nbsp;&nbsp;&nbsp;询</div>
      <div v-show="table.query.condition.organizationId" @click="showDialog('add')" class="btn-main btn-add">新建人员信息</div>
      <table cellspacing="0" class="table">
        <tr>
          <th width="8%">序号</th>
          <th width="10%">姓名</th>
          <th width="16%">手环编号</th>
          <th width="14%">职位</th>
          <th width="15%">手机号</th>
          <th width="9%">状态</th>
          <th width="14%">入/离职时间</th>
          <th width="14%">操作</th>
        </tr>
        <tr v-for="(item,key) in table.list">
          <td>{{(key + 1) + (table.query.currentPage - 1) * table.query.pageSize}}</td>
          <td>{{item.nick}}</td>
          <td>{{item.wristStrapCode}}</td>
          <td>{{item.builderUserType | userType}}</td>
          <td>{{item.mobile}}</td>
          <td>{{item.builderStatus === '00' ? '入场': '离场'}}</td>
          <td>{{new Date(item.admissionDate).$Format('yyyy-MM-dd')}}</td>
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
          layout="prev, pager, next, jumper"
          :total="table.total">
      </el-pagination>
    </div>
    <el-dialog :modal="false" center
               :close-on-click-modal="false"
               :title="title" class="dialog"
               :visible.sync="dialog" width="380px">
      <el-form class="form" ref="form" label-width="70px" label-position="left">
        <el-form-item label="部门">
          <el-input disabled :value="checkName"></el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input v-model="user.query.nick" placeholder="请输入姓名"></el-input>
        </el-form-item>
        <el-form-item prop="oldPassword" label="手环编号">
          <el-input v-model="user.query.wristStrapCode" placeholder="请输入手环编号"></el-input>
        </el-form-item>
        <el-form-item prop="oldPassword" label="职位">
          <el-select v-model="user.query.builderUserType" placeholder="请选择职位">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="角色">
          <!--<el-select filterable v-model="user.query.roleId" placeholder="请选择角色">-->
          <!--  <el-option-->
          <!--      v-for="item in allRoleList"-->
          <!--      :key="item.id"-->
          <!--      :label="item.roleName"-->
          <!--      :value="item.id">-->
          <!--  </el-option>-->
          <!--</el-select>-->
          <div @click="showRoleDialog" class="btn-set">
            {{roleName || '选择角色'}}
          </div>
        </el-form-item>
        <el-form-item prop="oldPassword" label="手机号">
          <el-input v-model="user.query.mobile" type="number" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="oldPassword" label="状态">
          <el-radio-group v-model="user.query.builderStatus">
            <el-radio class="mr20" label="00">入场</el-radio>
            <el-radio class="ml20" label="01">离场</el-radio>
          </el-radio-group>

        </el-form-item>
        <el-form-item prop="oldPassword" label="入场时间">
          <el-date-picker
              v-model="user.query.admissionLeaveDate"
              type="date"
              placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
      </el-form>
      <div class="btns mt25">
        <div @click="addEdit()" class="btn-main mr15">提交</div>
        <div @click="dialog = false" class="btn-main">关闭</div>
      </div>
    </el-dialog>
    <el-dialog
      :modal="false" center
      :close-on-click-modal="false"
      title="选择角色" class="dialog"
      :visible.sync="roleDialog" width="800px"
    >
      <table cellspacing="0" v-if="roleDialog" class="table role-table">
        <tr>
          <th width="10%">选择</th>
          <th width="10%">序号</th>
          <th width="20%">角色名称</th>
          <th width="45%">角色描述</th>
          <th width="15%">类型</th>
        </tr>
        <tr v-for="(item,key) in roleList.list">
          <td>
            <el-checkbox @change="changeBox(item)" v-model="item.selected"></el-checkbox>
          </td>
          <td>{{(key + 1) + (roleList.query.currentPage - 1) * roleList.query.pageSize}}</td>
          <td>{{item.roleName}}</td>
          <td>{{item.roleDesc}}</td>
          <td>{{item.roleType === '00'? '默认': '自定义'}}</td>
        </tr>
        <no-data v-show="!table.list.length"></no-data>
      </table>
      <el-pagination
          class="pagination"
          :page-size="roleList.query.pageSize"
          @current-change="handleRoleListCurrentChange"
          layout="prev, pager, next, jumper"
          :total="roleList.total">
      </el-pagination>
      <div class="btns">
        <div @click="selectedRole" class="btn-main mr15">提交</div>
        <div @click="roleDialog = false" class="btn-main">关闭</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  let options = [
    {
      value: '00',
      label: '机车'
    }, {
      value: '01',
      label: '列车'
    }, {
      value: '02',
      label: '作业人员'
    }, {
      value: '03',
      label: '作业负责人'
    }, {
      value: '04',
      label: '安全员'
    }, {
      value: '05',
      label: '防护员'
    }, {
      value: '06',
      label: '监理'
    }, {
      value: '07',
      label: '其它人员'
    }]
  export default {
    name: "Info",
    data() {
      return {
        // 角色弹窗
        roleDialog: false,
        title: '新建人员信息',
        table: {
          url: '/user/list',
          loading: '.table',
          list: [],
          el: 'table',
          total: 0,
          query: {
            currentPage: 1,
            pageSize: this.$conf.PAGES,
            condition: {
              nick: null,
              mobile: null,
              wristStrapCode: null,
              organizationId: null
            }
          }
        },
        user: {
          url: '/user/add',
          query: {
            nick: '',
            mobile: '',
            roleId: '',
            builderUserType: '00',
            builderStatus: '00',
            admissionLeaveDate: null,
            wristStrapCode: '',
            organizationId: ''
          }
        },
        // 角色列表
        roleList: {
          url: '/role/list',
          list: [],
          total: 0,
          query:{
            currentPage: 1,
            pageSize: this.$conf.PAGES,
            condition: {}
          }
        },
        // 选中的角色
        roleName: '',
        dialog: false,
        orgList: [],
        options: options,
        defaultProps: {
          children: 'childOrgList',
          label: 'orgName'
        },
        // 默认展开的key
        expandedKeys: [],
        editCheckId: null
      }
    },
    async mounted() {
      await this.getOrgList()
      await this.getData()
      this.getRoleList()
    },
    computed: {
      checkName: function () {
        let vm = this
        let name = ''

        function getName(item) {
          item.forEach(e => {
            if (e.id === vm.editCheckId) {
              name = e.orgName
            } else {
              getName(e.childOrgList)
            }
          })
        }

        getName(this.orgList)
        if (this.orgList.length) {
          return name || this.orgList[0].orgName
        } else {
          return name
        }
      }
    },
    methods: {
      // 选中角色
      selectedRole(){
        for (let i = 0; i <this.roleList.list.length ; i++) {
          if(this.roleList.list[i].selected){
            this.user.query.roleId = this.roleList.list[i].id
            this.roleName = this.roleList.list[i].roleName
            this.roleList.list[i].selected = false
            break
          }
        }
        this.roleDialog = false
      },
      // 选择框点击的回调
      changeBox(item) {
        this.roleList.list.forEach(e=>{
          if(e.id === item.id && e.selected === true){
            e.selected = true
          }else{
            e.selected = false
          }
        })
        this.roleList.list = this.roleList.list.splice(0,this.roleList.list.length)
      },
      // 获取所有角色
      async getRoleList(){
        let res = await this.$ajax(this.roleList)
        this.roleList.list = res.pageItems || []
        this.roleList.total = res.totalCount
        this.roleList.list.forEach(e=>{
          e.selected = false
        })
      },
      // 分页切换
      handleCurrentChange(e){
        this.table.query.currentPage = e
        this.getData()
      },
      // 角色列表分页
      handleRoleListCurrentChange(e){
        this.roleList.query.currentPage = e
        this.getRoleList()
      },
      // 展现弹窗
      async showDialog(type,item) {
        this.dialog = true
        if (type === 'add') {
          this.title = '新建人员信息'
          this.user.query = {
            nick: '',
            mobile: '',
            roleId: '',
            builderUserType: '00',
            builderStatus: '00',
            admissionLeaveDate: null,
            wristStrapCode: '',
            organizationId: ''
          }
        } else {
          this.title = '修改人员信息'
          let res = await this.$ajax({
            url: '/user/details',
            query:{
              id: item.id
            }
          })
          this.roleName = res.roleName
          this.user.query = {
            nick: res.nick,
            mobile: res.mobile,
            roleId: res.roleId,
            builderUserType: res.builderUserType,
            builderStatus: res.builderStatus,
            admissionLeaveDate: new Date(res.admissionDate),
            wristStrapCode: res.wristStrapCode,
            organizationId: res.organizationId,
            id: item.id
          }
        }
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
          url: '/user/delete',
          query: {
            id: item.id
          }
        })
        this.$remind('删除成功')
        this.getData()
      },
      // 获取组织结构树
      async getOrgList() {
        let res = await this.$ajax({
          url: '/organization/all',
        })
        this.orgList = res.childOrgList
        this.expandedKeys = this.orgList.map(n => n.id)
        // this.$refs.tree.setCheckedKeys([this.orgList[0].id]);
        setTimeout(()=>{
          let labels = document.getElementsByClassName('el-tree-node__label')
          for (let i = 0; i < labels.length; i++) {
            console.log(labels[i].innerText)
            labels[i].setAttribute('title', labels[i].innerText)
          }
        },10)
      },
      // 展示选择角色弹窗
      showRoleDialog(){
        this.roleDialog = true
      },
      // 新建修改人员
      async addEdit() {
        let text = ''
        if(this.title === '新建人员信息'){
          text = '新建成功'
          this.roleName = ''
              this.user.url = '/user/add'
          this.user.query.organizationId = this.editCheckId
        }else{
          text = '修改成功'
          this.user.url = '/user/update'
        }

        let query = JSON.parse(JSON.stringify(this.user))
        query.query.admissionLeaveDate = new Date(query.query.admissionLeaveDate).$Format('yyyy-MM-dd')
        await this.$ajax(query)
        this.getData()
        this.$remind(text)
        this.dialog = false
      },
      checkChange(item, node, self) {
        if (node == true) {//点击未选中复选框
          this.editCheckId = item.id;
          this.$refs.tree.setCheckedKeys([item.id]);
          this.table.query.condition.organizationId = item.id
        } else {
          if (this.editCheckId == item.id) {//点击已选中复选框，保证至少一个选中
            this.$refs.tree.setCheckedKeys([item.id]);
            this.table.query.condition.organizationId = item.id
          }
        }
        this.getData()
      },
      nodeClick(item, node, self) {
        this.editCheckId = item.id;
        this.$refs.tree.setCheckedKeys([item.id]);
      }
    },
    filters: {
      'userType': function (val) {
        for (let i = 0; i <options.length ; i++) {
          if (val === options[i].value) {
            return options[i].label
          }
        }
      },
    },
  }
</script>

<style lang="sass" scoped>
  .el-tree
    position: absolute
    width: 280px
    margin: 60px 15px
  .table-box
    margin-left: 310px
    width: 770px
  .role-table
    border-radius: 0
    margin: 0 30px
    width: calc(100% - 60px)
    border-color: transparent
  .pagination /deep/ .el-pagination__editor
     input
      width: 46px
      height: 20px !important
      line-height: 20px !important
  .pagination
    text-align: center
    margin-top: 15px
    margin-bottom: 10px
  .btns
    border-top: 1px solid $border
    padding-top: 20px
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
