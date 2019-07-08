<template>
  <div class="search-box">
    <slot name="before"></slot>
    <div class="form" v-if="!item.hide" v-for="(item,key) in searchData">
      <div v-if="item.type === 'select'" class="select">
        <span class="text">{{item.title}}</span>
        <el-select @change="$search(table)"
                   :style="{'width': item.width}"
                   :clearable="!item.notRemove"
                   filterable default-first-option
                   @clear="table.query[item.model] = null;$search(table)"
                   v-model="table.query[item.model]">
          <el-option v-for="i in item.option"
                     :label="i.label" :value="i.value" :key="i.value"
          ></el-option>
        </el-select>
      </div>
      <div v-if="item.type ==='cascader'" class="cascader">
        <span class="text">{{item.title}}</span>
        <el-cascader
            :style="{'width': item.width}"
            @change="(value) => cascaderChange(value,item)"
            clearable
            v-model="item.model"
            :options="item.option"
            change-on-select
        ></el-cascader>
      </div>
      <div v-if="item.type === 'dateSection'" class="date-section">
        <span class="text">{{item.title}}</span>
        <el-date-picker
            class="date input"
            v-model="date"
            type="daterange"
            align="right"
            unlink-panels
            @change="(value) => dateChange(value,item)"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :picker-options="pickerOptions">
        </el-date-picker>
      </div>
      <div v-if="item.type === 'date'" class="date">
        <span class="text">{{item.title}}</span>
        <el-date-picker
            v-model="item.initialDate"
            :format="item.dateType === 'month' ? 'yyyy年MM月': 'yyyy-MM-dd'"
            :clearable="false"
            class="date"
            :type="item.dateType"
            @change="(value) => dateSingeChange(value,item)"
            placeholder="选择时间">
        </el-date-picker>
      </div>
      <div v-if="item.type === 'input'" class="input">
        <span class="text">关键字</span>
        <el-input @keyup.enter.native="$search(table)" v-model="table.query.keywords" :placeholder="item.placeholder">
          <el-button @click="$search(table)" slot="append" icon="el-icon-search"></el-button>
          <!--<i @click="$search(table)" slot="suffix" class="el-input__icon el-icon-search"></i>-->
        </el-input>
      </div>
    </div>
  </div>

</template>
<script>
  export default {
    props: {
      searchData: {
        default: [],
        type: Array
      },
      table: {
        default: {},
        type: Object
      }
    },
    data () {
      return {
        // 多选日期
        date: [null, null],
        pickerOptions: {
          shortcuts: [{
            text: '最近一个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(new Date(new Date().setMonth(new Date().getMonth() - 1)))
              picker.$emit('pick', [start, end])

            }
          }, {
            text: '最近三个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(new Date(new Date().setMonth(new Date().getMonth() - 3)))
              picker.$emit('pick', [start, end])
            }
          }, {
            text: '最近六个月',
            onClick (picker) {
              const end = new Date()
              const start = new Date()
              start.setTime(new Date(new Date().setMonth(new Date().getMonth() - 6)))
              picker.$emit('pick', [start, end])
            }
          }]
        },
      }
    },
    methods: {
      // cascader 值改变的时候
      cascaderChange (val, item) {
        if (val.length) {
          this.table.query[item.modelName[0]] = val[0]
          this.table.query[item.modelName[1]] = val[1]
        } else {
          this.table.query[item.modelName[0]] = null
          this.table.query[item.modelName[1]] = null
        }

        this.$search(this.table)
      },
      // 日期选择控件切换的回调
      dateChange (val, item) {
        if (val === null) {
          this.table.query[item.modelName[0]] = this.table.query[item.modelName[1]] = null
        } else {
          this.table.query[item.modelName[0]] = new Date(val[0]).$Format('yyyy-MM-dd') + ' 00:00:00'
          this.table.query[item.modelName[1]] = new Date(val[1]).$Format('yyyy-MM-dd') + ' 23:59:59'
        }
        this.$search(this.table)
      },
      // 日期单选控件切换的回调
      dateSingeChange (val, item) {
        this.table.query[item.model] = new Date(val).$Format('yyyy-MM-dd hh:mm:ss')
        this.$search(this.table)
      }

    },
    mounted () {
      for (let i = 0; i < this.searchData.length; i++) {
        if (this.searchData[i].type === 'dateSection' && this.searchData[i].startDate) {
          this.date = [this.searchData[i].startDate, this.searchData[i].endDate]
        }
      }

    }
  }
</script>
<style lang="sass">

</style>
<style lang="sass" scoped>
  .search-box
    padding: 5px 0 0px 0
    .item
      margin-top: 15px
    .text
      margin-left: 5px
      color: $gray-dark
      display: block
      font-size: $font-small
      font-weight: bold
      margin-bottom: 2px
    .form
      display: inline-block
      margin-right: 10px
      margin-bottom: 15px
    .date
      width: 240px
    .el-select
      width: 140px
      display: block
    .el-cascader
      width: 200px
      display: block
    .input
      width: 240px
</style>
