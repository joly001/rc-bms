<template>
  <div>
    <el-tabs v-model="tabindex" @tab-click="handleClick">
      <el-tab-pane
          v-if="authorities.hasOwnProperty('mileage.list')"
          label="里程管理" name="mileage">
        <config-mileage v-if="tabindex === 'mileage'"></config-mileage>
      </el-tab-pane>
      <el-tab-pane
          v-if="authorities.hasOwnProperty('mileageSegment.list')"
          label="作业区间" name="interval">
        <config-interval v-if="tabindex === 'interval'"></config-interval>
      </el-tab-pane>
      <el-tab-pane
          v-if="authorities.hasOwnProperty('railwayLines.list')"
          label="线路管理" name="line">
        <config-line v-if="tabindex === 'line'"></config-line>
      </el-tab-pane>
      <el-tab-pane
          v-if="authorities.hasOwnProperty('machinery.list')"
          label="机械管理" name="mechanical">
        <config-mechanical v-if="tabindex === 'mechanical'"></config-mechanical>
      </el-tab-pane>
      <el-tab-pane
          v-if="authorities.hasOwnProperty('sysParameter.all')"
          label="系统参数配置" name="system">
        <config-system v-if="tabindex === 'system'"></config-system>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import configMileage from './config-childre/Mileage'
  import configInterval from './config-childre/Interval'
  import configMechanical from './config-childre/Mechanical'
  import configLine from './config-childre/ConfigLine'
  import configSystem from './config-childre/System'
  export default {
    name: "Config",
    components:{
      configMileage,
      configInterval,
      configMechanical,
      configLine,
      configSystem
    },
    data(){
      return {
        tabindex: '',
        // 用户权限
        authorities: JSON.parse(sessionStorage.getItem('role'))
      }
    },
    methods:{
      handleClick(){

      }
    },
    mounted(){
      if(this.authorities.hasOwnProperty('mileage.list')){
        this.tabindex = 'mileage'
      }else if(this.authorities.hasOwnProperty('mileageSegment.list')){
        this.tabindex = 'interval'
      } else if(this.authorities.hasOwnProperty('railwayLines.list')){
        this.tabindex = 'line'
      } else if(this.authorities.hasOwnProperty('machinery.list')){
        this.tabindex = 'mechanical'
      } else if(this.authorities.hasOwnProperty('sysParameter.list')){
        this.tabindex = 'system'
      }
    }
  }
</script>

<style scoped>

</style>
