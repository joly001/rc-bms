<template>
  <div>
    <div class="table-box">
      <el-input v-model.trim="table.query.condition.roleName"
                @keyup.enter.native="table.query.currentPage = 1;getData()"
                class="mr10" placeholder="请输入：角色名称"></el-input>
      <div @click="table.query.currentPage = 1;getData()" class="btn-main ">查&nbsp;&nbsp;&nbsp;询</div>
      <div @click="showDialog('add')" class="btn-main btn-add">新建自定义角色</div>
      <table cellspacing="0"  class="table">
        <tr>
          <th width="13%">序号</th>
          <th class="left-justifying" width="14%">角色名称</th>
          <th class="left-justifying" width="25%">角色描述</th>
          <th width="14%">类型</th>
          <th width="14%">创建时间</th>
          <th width="20%">操作</th>
        </tr>
        <tr v-for="(item,key) in table.list">
          <td>{{(key + 1) + (table.query.currentPage - 1) * table.query.pageSize}}</td>
          <td class="left-justifying">{{item.roleName}}</td>
          <td class="left-justifying" :title="item.roleDesc">{{item.roleDesc}}</td>
          <td>{{item.roleType === '00'? '默认': '自定义'}}</td>
          <td>{{new Date(item.createTime).$Format('yyyy-MM-dd hh:mm:ss')}}</td>
          <td>
            <span @click="getRoleDetail(item)" class="oper">修改</span>
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
      <el-form class="form" ref="form" label-width="70px" label-position="left">
        <el-form-item prop="oldPassword" label="角色名称">
          <el-input v-model="roleList.query.roleName"  placeholder="请输入角色名称"></el-input>
        </el-form-item>
        <el-form-item prop="oldPassword" label="角色描述">
          <el-input v-model="roleList.query.roleDesc" placeholder="请输入角色描述"></el-input>
        </el-form-item>
        <el-form-item v-if="dialog" prop="oldPassword" label="权限设置">
          <el-popover
            v-model="visible"
            placement="right"
            width="400"
            trigger="click">
          <el-tree class="el-tree" :data="authorities.list"
                   :props="defaultProps"
                   :default-expanded-keys="['root']"
                   ref="tree"
                   node-key="id" show-checkbox
                   :default-checked-keys="checkedKeys"
                   ></el-tree>
          <div slot="reference"
               @click="$refs.tree.setCheckedKeys(checkedKeys);visible = !visible" class="btn-set">设置权限</div>
          <div class="btns mt25">
            <div @click="checkedKeys = $refs.tree.getCheckedKeys();visible = false" class="btn-main mr15">提交</div>
            <div @click="visible = false" class="btn-main">关闭</div>
          </div>
        </el-popover>
        </el-form-item>
      </el-form>
      <div class="btns mt25">
        <div  @click="editRole()" class="btn-main mr15">提交</div>
        <div @click="dialog = false" class="btn-main">关闭</div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Info",
    data(){
      return {
        table:{
          url: '/role/list',
          loading: '.table',
          list: [],
          total: 0,
          el: '.table',
          query:{
            condition:{
              roleName: '',
            },
            currentPage: 1,
            pageSize: this.$conf.PAGES,
          }
        },
        // 权限列表
        authorities: {
          url: '/role/authorities',
          list: []
        },
        // 选中的角色
        checkedKeys: [],
        // 角色
        roleList: {
          url: '/role/add',
          query:{
            roleName: '',
            roleDesc: '',
            authorities: []
          }
        },
        visible: false,
        title: '新建自定义角色',
        dialog: false,
        defaultProps: {
          children: 'authorities',
          label: 'name'
        }
      }
    },
    methods: {
      // 展现弹窗
      showDialog(type, item){
        this.dialog = true
        this.checkedKeys = []

          this.title = '新建自定义角色'
          this.roleList.query = {
            roleName: '',
            roleDesc: '',
            authorities: []
          }
      },
      // 获取角色详情
      async getRoleDetail(item){
        let res = await this.$ajax({
          url: '/role/detail',
          query: {
            id: item.id
          }
        })
        this.roleList.query = {
          id: res.id,
          roleName: res.roleName,
          roleDesc: res.roleDesc,
          authorities: res.authorities
        }
        this.checkedKeys = []
        for(let i in res.authorities){
          this.checkedKeys.push(i)
        }
        this.dialog = true
        this.title = '修改自定义角色'
      },
      // 查询所有权限
      async getAuthorities(){
        let res = await this.$ajax(this.authorities)
        console.log(res)
        this.authorities.list = [res]
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
          url: '/role/delete',
          query:{
            id: item.id
          }
        })
        this.$remind('删除成功')
        this.getData()
      },
      // 新建角色
      async editRole(){
        let text = ''
        if(this.title === '修改自定义角色'){
          text = '修改成功'
          this.roleList.url = '/role/update'
        }else{
          text = '新建成功'
          this.roleList.url = '/role/add'
        }
        this.roleList.query.authorities = this.checkedKeys
        if(!this.roleList.query.authorities.length){
          this.$message.error('请设置权限')
          return
        }
        if(!this.roleList.query.roleName){
          this.$message.error('请输入角色名称')
          return
        }
        await this.$ajax(this.roleList)
        this.$remind(text)
        this.dialog = false
        this.table.query = {
          condition:{
            roleName: '',
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
      this.getAuthorities()
    }
  }
</script>

<style lang="sass" scoped>
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
