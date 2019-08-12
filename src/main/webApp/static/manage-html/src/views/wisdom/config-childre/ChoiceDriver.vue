<template>
  <el-dialog custom-class="choice-driver"
             :close-on-click-modal="false"
             :modal="false"
             width="980px" title="选择司机" center :visible.sync="dialog">
    <div class="content">
      <div class="tree">
        <el-tree :data="orgList"
                 :props="defaultProps"
                 show-checkbox
                 node-key="id"
                 :default-expanded-keys="expandedKeys"
                 :check-strictly="true"
                 default-expand-all
                 ref="tree"
                 @check-change="checkChange"
                 @node-click="nodeClick"
        >
        </el-tree>
      </div>
      <div class="box">
        <table v-if="dialog" cellspacing="0" class="table">
          <tr>
            <th width="8%">选择</th>
            <th width="8%">序号</th>
            <th width="12%">姓名</th>
            <th width="20%">手环编号</th>
            <th width="20%">职位</th>
            <th width="20%">手机号</th>
            <th width="12%">状态</th>
          </tr>
          <tr :key="key" v-for="(item,key) in table.list">
            <td>
              <el-checkbox @change="changeBox(item)" v-model="item.selected"></el-checkbox>
            </td>
            <td>{{key + 1}}</td>
            <td :title="item.nick">{{item.nick}}</td>
            <td :title="item.wristStrapCode">{{item.wristStrapCode}}</td>
            <td>{{item.builderUserType | userType}}</td>
            <td>{{item.mobile}}</td>
            <td>{{item.builderStatus === '00'? '入场': '离场'}}</td>
          </tr>
        </table>
        <el-pagination
            class="pagination mt10 mr40"
            :page-size="table.query.pageSize"
            @current-change="handleCurrentChange"
            layout="prev, pager, next, jumper"
            :total="table.total">
        </el-pagination>
      </div>
    </div>
    <div class="btns">
      <div @click="submit()" class="btn-main mr15">提交</div>
      <div @click="dialog = false" class="btn-main">关闭</div>
    </div>
  </el-dialog>
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
    name: "driver",
    props: {
      value: {
        type: Boolean,
        required: true
      }
    },
    computed: {
      'dialog': {
        get: function () {
          return this.value
        },
        set: function (newVal) {
          this.value = newVal
          this.$emit('input', newVal)
        }
      }
    },
    data() {
      return {
        orgList: [],
        defaultProps: {
          children: 'childOrgList',
          label: 'orgName'
        },
        table: {
          url: '/user/list',
          loading: '.table',
          list: [],
          total: 0,
          query: {
            currentPage: 1,
            pageSize: this.$conf.PAGES,
            condition: {
              organizationId: null
            }
          }
        },
        editCheckId: '',
        expandedKeys: [],
        userList: []
      }
    },
    async created() {
      await this.getOrgList()
      this.getUser()
    },
    methods: {
      // 选择框点击的回调
      changeBox(item) {
        this.table.list.forEach(e=>{
          if(e.id === item.id && e.selected === true){
            e.selected = true
          }else{
            e.selected = false
          }
        })
        this.table.list = this.table.list.splice(0,this.table.list.length)
      },
      // 获取组织结构树
      async getOrgList() {
        let res = await this.$ajax({
          url: '/organization/all',
        })
        this.orgList = res.childOrgList
        this.expandedKeys = this.orgList.map(n => n.id)
        // this.$refs.tree.setCheckedKeys([this.orgList[0].id]);
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
        this.getUser()
      },
      nodeClick(item, node, self) {
        this.editCheckId = item.id;
        this.$refs.tree.setCheckedKeys([item.id]);
      },
      // 获取司机用户
      async getUser(id = null) {
        let res = await this.$ajax(this.table)
        this.table.list = res.pageItems || []
        this.table.list.forEach(e=>{
          e.selected = false
        })
        this.table.total = res.totalCount
      },
      // 分页切换
      handleCurrentChange(e){
        this.table.query.currentPage = e
        this.getUser()
      },
      // 提交
      submit(){
        let userID, userName = ''
        for (let i = 0; i <this.table.list.length ; i++) {
          if(this.table.list[i].selected){
            userID = this.table.list[i].id
            userName = this.table.list[i].nick
            this.table.list[i].selected = false
            break
          }
        }
        this.dialog = false
        this.$emit('on-submit', userID, userName)
      }
    },
    filters: {
      'userType': function (val) {
        for (let i = 0; i <options.length ; i++) {
          if (val === options[i].value) {
            return options[i].label
          }
        }
      }
    }
  }
</script>
<style lang="sass">
  .choice-driver
    height: 640px
    overflow: auto
    .content
      @extend %clearfix
    .tree
      width: 260px
      margin-top: 15px
      margin-bottom: 10px
      overflow: scroll
      float: left
    .el-dialog .el-pagination__editor
      /deep/ input
        width: 46px
        height: 20px !important
        line-height: 20px !important
    .box
      float: left
      margin-left: 20px
      margin-bottom: 20px
      width: 632px
      text-align: center
    .btns
      border-top: 1px solid $border
      padding-top: 20px
</style>
