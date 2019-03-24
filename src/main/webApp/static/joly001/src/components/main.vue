<template>
  <div class="layout">
    <Layout class="layout">
      <Sider hide-trigger width="240">
        <nvabar></nvabar>
      </Sider>

      <Layout>
        <Header>
          <headbar></headbar>
        </Header>
        <Content>
          <transition name="fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
import headbar from "@/components/headbar/headbar";
import nvabar from "@/components/nvabar/nvabar";
export default {
  components: {
    headbar,
    nvabar
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
</script>

<style scoped="scoped">

.ivu-layout-header {
  height: 84px;
  background-color: #4680d9;
}
.layout {
  width: 100%;
  height: 100%;
}
</style>