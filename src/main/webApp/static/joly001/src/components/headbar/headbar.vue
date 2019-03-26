<template>
  <section class="headbar">
    <div class="left">
      <div class="toggle" @click="toggle">
        <icon name="meun" :scale="3"></icon>
      </div>
      <ul class="current-page">
        <li>首页&nbsp;/&nbsp;</li>
        <li>指挥中心&nbsp;/&nbsp;</li>
        <li>信息展示</li>
      </ul>
    </div>
    <div class="right">
      <div class="search">
        <input type="text" placeholder >
      </div>
      <div class="notice flex-row" @click="notice">
        <icon name="notice" :scale="3"></icon>
      </div>
      <div class="settings flex-row" @click="settings">
        <icon name="set" :scale="3"></icon>
      </div>
      <div class="more flex-row" @click="more">
        <icon name="more" :scale="3"></icon>
      </div>
    </div>
  </section>
</template>

<script>
import screen from "@/components/headbar/allscreen/screen";
export default {
  components: {
    screen
  },
  data() {
    return {
      msg: "张三",
      content: "退出登录",
      visible: false,
      user: {
        src: require("../../assets/images/wode.png"),
        name: "张三"
      },
      isCollapsed: false,
      isFullscreen: false
    };
  },
  computed: {
    rotateIcon() {
      return ["menu-icon", this.isCollapsed ? "rotate-icon" : ""];
    }
  },
  methods: {
    toggle () {//侧边栏开关

	},
	notice () {//通知

	},
	settings () {//设置

	},
	more () {//更多

	}
  }
};
</script>

<style lang="less">
// 头部
.headbar {
  .ivu-layout-header {
    background-color: #4680d9;
  }
}
</style>


<style lang="less" scoped>
@import url("../../styles/headbar/headbar.less");
</style>
