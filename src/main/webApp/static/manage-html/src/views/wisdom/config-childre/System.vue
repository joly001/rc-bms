<template>
  <div class="box">
    <div class="title">参数配置</div>
    <div class="sub-title">基础配置</div>
    <div class="content bc-transparent">
      <span class="left">报警时长</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="1" :max="10000"
            size="mini" v-model="query.value1"
        ></el-input-number>
        <!--<el-input v-model="query.value1"  size="mini"></el-input>-->
        分钟
      </span>
    </div>
    <div class="sub-title">安全红线设置</div>
    <div class="content bc-transparent">
      <span class="left">安全红线触警-安全员通知距离</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="0" :max="10000"
            size="mini" v-model="query.value2"
        ></el-input-number>
        <!--<el-input v-model="query.value2" size="mini"></el-input>-->
        米
      </span>
    </div>
    <div class="sub-title">线缆防护相关设置</div>
    <div class="content">
      <span class="left">碾压限定距离</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="1" :max="10000"
            size="mini" v-model="query.value3"
        ></el-input-number>
        <!--<el-input v-model="query.value3" size="mini"></el-input>-->
        米
      </span>
    </div>
    <div class="content">
      <span class="left">碾压报警机械类型</span>
      <span class="input">
        <el-select v-model="query.value4">
          <el-option label="小型" value="SMALL"></el-option>
          <el-option label="中型" value="MEDIUM"></el-option>
          <el-option label="大型" value="LARGE"></el-option>
        </el-select>
      </span>
    </div>
    <div class="content">
      <span class="left">判定线缆附近动土-报警距离</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="0" :max="10000"
            size="mini" v-model="query.value5"
        ></el-input-number>
        <!--<el-input v-model="query.value5" size="mini"></el-input>-->
        米
      </span>
    </div>
    <div class="content bc-transparent">
      <span class="left">判定线缆附近动土-报警时间</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="1" :max="10000"
            size="mini" v-model="query.value6"
        ></el-input-number>
        <!--<el-input v-model="query.value6" size="mini"></el-input>-->
        分钟
      </span>
    </div>
    <div class="sub-title">列车接近报警相关设置</div>
    <div class="content">
      <span class="left">临站报警提前站数</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="1" :max="10000"
            size="mini" v-model="query.value7"
        ></el-input-number>
        <!--<el-input v-model="query.value7" size="mini"></el-input>-->
        站
      </span>
    </div>
    <div class="content">
      <span class="left">火车接近作业面人员-报警距离</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="0" :max="10000"
            size="mini" v-model="query.value8"
        ></el-input-number>
        <!--<el-input v-model="query.value8" size="mini"></el-input>-->
        公里
      </span>
    </div>
    <div class="content">
      <span class="left">火车接近作业面机械-报警距离</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="0" :max="10000"
            size="mini" v-model="query.value9"
        ></el-input-number>
        <!--<el-input v-model="query.value9" size="mini"></el-input>-->
        公里
      </span>
    </div>
    <div class="content bc-transparent">
      <span class="left">火车接近作业面机械-机械类型</span>
      <span class="input">
        <el-select v-model="query.value10">
          <el-option label="小型" value="SMALL"></el-option>
          <el-option label="中型" value="MEDIUM"></el-option>
          <el-option label="大型" value="LARGE"></el-option>
        </el-select>
      </span>
    </div>
    <div class="sub-title">GPS数据采集频率相关设置</div>
    <div class="content">
      <span class="left">RTK高精度人员定位采集频率</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="1" :max="10000"
            size="mini" v-model="query.value11"
        ></el-input-number>
        <!--<el-input v-model="query.value11" size="mini"></el-input>-->
        秒 / 秒
      </span>
    </div>
    <div class="content">
      <span class="left">RTK高精度机械定位采集频率</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="1" :max="10000"
            size="mini" v-model="query.value12"
        ></el-input-number>
        <!--<el-input v-model="query.value12" size="mini"></el-input>-->
        秒 / 秒
      </span>
    </div>
    <div class="content">
      <span class="left">火车司机GPS定位采集频率</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="1" :max="10000"
            size="mini" v-model="query.value13"
        ></el-input-number>
       <!--<el-input v-model="query.value13" size="mini"></el-input>-->
        秒 / 秒
      </span>
    </div>
    <div class="content bc-transparent">
      <span class="left">普通人员GPS定位采集频率</span>
      <span class="input">
        <el-input-number
            controls-position="right"
            :min="1" :max="10000"
            size="mini" v-model="query.value14"
        ></el-input-number>
        <!--<el-input v-model="query.value14" size="mini"></el-input>-->
        秒 / 秒
      </span>
    </div>
    <div class="btns">
      <div @click="submit()" class="btn-main">提交</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "System",
    data(){
      return{
        data: null,
        query:{
          value1: '',
          value2: '',
          value3: '',
          value4: '',
          value5: '',
          value6: '',
          value7: '',
          value8: '',
          value9: '',
          value10: '',
          value11: '',
          value12: '',
          value13: '',
          value14: '',
        }
      }
    },
    methods:{
      async getData(){
        let res = await this.$ajax({
          url: '/sysParameter/all'
        })
        this.data = res.list
        console.log(this.data)
        let getValue = (name) => {
          for (let i = 0; i <this.data.length ; i++) {
            if(this.data[i].parameterName === name){
              return this.data[i].parameterValue
            }
          }
        }
        this.query = {
          value1: getValue('ALARM_DURATION'),
          value2: getValue('CORDON'),
          value3: getValue('ROLLING_LIMIT_DISTANCE'),
          value4: getValue('TYPE_ROLLING_ALARM_MACHINERY'),
          value5: getValue('CABLE_LIMIT_DISTANCE'),
          value6: getValue('CABLE_LIMIT_TIME'),
          value7: getValue('NUMBER_ALARM_ADVANCE_STATIONS'),
          value8: getValue('TRAIN_APPROACHING_DISTANCE'),
          value9: getValue('MECHANICAL_TRAIN_APPROACHING_DISTANCE'),
          value10: getValue('MECHANICAL_TRAIN_ALARM_TYPE'),
          value11: getValue('RTK_PEOPLE_RATE'),
          value12: getValue('RTK_MACHINERY_RATE'),
          value13: getValue('GPS_TRAIN_RATE'),
          value14: getValue('GPS_PEOPLE_RATE'),

        }
      },
      async submit(){
        let setValue = (name, value) => {
          for (let i = 0; i < this.data.length; i++) {
            if(this.data[i].parameterName === name){
              this.data[i].parameterName = undefined
              this.data[i].parameterValue = value
            }
          }
        }
        setValue('ALARM_DURATION', this.query.value1)
        setValue('CORDON', this.query.value2)
        setValue('ROLLING_LIMIT_DISTANCE', this.query.value3)
        setValue('TYPE_ROLLING_ALARM_MACHINERY', this.query.value4)
        setValue('CABLE_LIMIT_DISTANCE', this.query.value5)
        setValue('CABLE_LIMIT_TIME', this.query.value6)
        setValue('NUMBER_ALARM_ADVANCE_STATIONS', this.query.value7)
        setValue('TRAIN_APPROACHING_DISTANCE', this.query.value8)
        setValue('MECHANICAL_TRAIN_APPROACHING_DISTANCE', this.query.value9)
        setValue('MECHANICAL_TRAIN_ALARM_TYPE', this.query.value10)
        setValue('RTK_PEOPLE_RATE', this.query.value11)
        setValue('RTK_MACHINERY_RATE', this.query.value12)
        setValue('GPS_TRAIN_RATE', this.query.value13)
        setValue('GPS_PEOPLE_RATE', this.query.value14)

        await this.$ajax({
          url: '/sysParameter/update',
          query: {
            list: this.data
          }
        })
        this.$remind('修改成功')
        this.getData()
      }
    },
    mounted(){
      this.getData()
    }
  }
</script>

<style lang="sass" scoped>
  .box
    border: 1px solid $main-c
    width: 560px
    border-radius: 10px
    overflow: hidden
    margin: 20px auto
    .title
      line-height: 50px
      text-align: center
      color: #000
    .sub-title
      background: #f5f5f5
      line-height: 38px
      padding-left: 40px
    .content
      font-size: $font-small
      line-height: 38px
      margin-left: 40px
      margin-right: 40px
      border-bottom: 1px solid #DCDDDE
      &:last-child
        border-color: transparent
      .left
        padding-left: 20px
        width: 260px
        display: inline-block
      .input
        /deep/ .el-input-number--mini
          margin-right: 5px
          width: 120px
        /deep/ .el-input, .el-select
          margin-right: 3px
          width: 120px
          input
            height: 28px
            border-color: $main-c
    .btns
      text-align: center
      margin: 20px 0
    .bc-transparent
      border-color: transparent
</style>
