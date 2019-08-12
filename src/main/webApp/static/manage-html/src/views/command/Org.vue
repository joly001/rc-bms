<template>
  <div>
    <div class="table-box">
      <div @click="showDialog('top')" class="btn-main btn-add mb20">新建顶级组织机构</div>
      <table cellspacing="0"  class="table">
        <tr>
          <th width="32%">组织架构</th>
          <th width="49%">说明</th>
          <th width="19%">操作</th>
        </tr>
        <tr :key="key" v-for="(item,key) in table.list">
          <td>
            <span
                :style="{marginLeft: 30 * item.tier + 'px'}"
                class="el-icon-caret-bottom"></span>
            {{item.orgName}}
          </td>
          <td :title="item.orgDesc">{{item.orgDesc}}</td>
          <td>
            <span @click="showDialog('childer', item)" class="oper">添加下级组织</span>
            <span class="col"></span>
            <span @click="showDialog('edit', item)" class="oper">修改</span>
            <span class="col"></span>
            <span @click="remove(item)" class="oper">删除</span>
          </td>
        </tr>
      </table>
    </div>
    <el-dialog :modal="false" :close-on-click-modal="false" center :title="title" class="dialog"
                :visible.sync="dialog" width="420px">
      <el-form class="form" ref="form" label-width="70px" label-position="left">
        <el-form-item v-show="title === '添加下级组织'" prop="oldPassword" label="上级组织">
          <el-input :value="org.query.parentName" disabled></el-input>
        </el-form-item>
        <el-form-item prop="oldPassword" label="名称">
          <el-input v-model="org.query.orgName" placeholder="请输入名称"></el-input>
        </el-form-item>
        <el-form-item prop="oldPassword" label="说明">
          <el-input v-model="org.query.orgDesc" type="textarea" :rows="7"  placeholder="请输入说明"></el-input>
        </el-form-item>
      </el-form>
      <div class="btns mt25">
        <div @click="addEdit()" class="btn-main mr15">提交</div>
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
        title: '新建顶级组织机构',
        table: {
          list: [],
          el: '.table',
          url: '/organization/all',
        },
        org:{
          url: '/organization/add',
          query:{
            orgName: '',
            orgDesc: '',
            parentId: ''
          }
        },
        dialog: false,
        orgList: [],
        data: [
            {
          label: '中铁十五局项目经理管理部',
          children: [{
            label: '二级 1-1',
            children: [{
              label: '三级 1-1-1'
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      }
    },
    mounted(){
      this.getOrgList()
      this.getData()
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      },
      // 展现弹窗
      showDialog(type, item){
        this.dialog = true
        this.org.query = {
          orgName: item ? item.orgName : '',
          parentName: item ? item.orgName : '',
          orgDesc: item ?  item.orgDesc : '',
          parentId: item ? item.id: '',
          id: item && item.id ? item.id: ''
        }
        if(type === 'top'){
          this.title = '新建顶级组织机构'
        }else if(type === 'edit'){
          this.title = '修改组织机构'

        }else{
          this.title = '添加下级组织'
          this.org.query.orgName = ''
          this.org.query.orgDesc = ''
        }
      },
      // 删除
      async remove(item){
        await this.$confirm(`删除后数据将无法恢复，是否确认删除？`, '提示', {
          confirmButtonText: '确认',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await this.$ajax({
          url: '/organization/delete',
          query:{
            id: item.id
          }
        })
        this.getData()
        this.$remind('删除成功')
      },
      // 获取组织结构树
      async getOrgList(){
        let res = await this.$ajax({
          url: '/organization/all',
        })
      },
      //
      async getData(){
        let res = await this.$ajax(this.table)
        this.table.list = []
        let vm = this
        let i = 0
        function changeList(list){
          list.forEach(e=>{
            vm.table.list.push({
              orgName: e.orgName,
              orgDesc: e.orgDesc,
              id: e.id,
              tier: i
            })
            if(e.childOrgList.length){
              changeList(e.childOrgList, ++i)
              i--
            }
          })
        }
        changeList(res.childOrgList)
        this.table.list = this.table.list.splice(0,this.table.list.length)
      },
      // 新建编辑组织机构
      async addEdit(){
        let text = ''
        let query = JSON.parse(JSON.stringify(this.org))
        query.query.parentName = undefined
        if(this.title === '修改组织机构'){
          text = '修改成功'
          query.url = '/organization/update'
          query.query.parentId = undefined
        }else{
          text = '新建成功'
          query.url = '/organization/add'
          query.query.id = undefined
        }

        let res = await this.$ajax(query)
        this.dialog = false
        this.getData()
        this.$remind(text)
      }
    }
  }
</script>

<style lang="sass" scoped>
  .table-box
    tr
      th
        text-align: left
        padding-left: 20px
      th:last-child
        text-align: center
        padding-left: 5px
    tr
      td
        text-align: left
        padding-left: 20px
      td:last-child
        text-align: center
        padding-left: 5px
      .org-name
        width: 280px
        display: inline-block

</style>
