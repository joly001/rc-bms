<template>
  <div class="main">
    <div class="top-nav">
      <span class="iconfont icon-daohang"></span>
      <div class="nav">
        <span>{{$route.meta.nav}}</span>
        <span class="hr">/</span>
        <span>{{$route.meta.subNav}}</span>
      </div>
      <span @click="logOut" class="login-out iconfont icon-dengchu"></span>

      <!--      <el-popover-->
<!--          placement="bottom"-->
<!--          width="281"-->
<!--          trigger="click"-->
<!--      >-->
<!--        <div class="top-nav-user">-->
<!--          <span class="font-large">超管</span>-->
<!--          &lt;!&ndash;<span>{{data.name}}</span>&ndash;&gt;-->
<!--          <p class="mt5 mb10 f-normal">18888888888</p>-->
<!--          <div class="btns">-->
<!--            <div @click="showDialog" class="btn btn-submit mr15">修改密码</div>-->
<!--            <div @click="logOut" class="btn btn-clear">退出登录</div>-->
<!--          </div>-->
<!--        </div>-->
<!--        <div slot="reference" class="info">-->
<!--          <i class="iconfont icon-shezhi"></i>-->
<!--        </div>-->
<!--      </el-popover>-->
    </div>

    <el-dialog :modal="false" :close-on-click-modal="false"
               center title="修改密码" class="dialog" :visible.sync="dialog" width="400px">
      <el-form class="form" :model="form" :rules="rules" ref="form" label-width="0px">
        <el-form-item prop="oldPassword">
          <el-input v-model="form.oldPassword" type="password" placeholder="请输入原密码"></el-input>
        </el-form-item>
        <el-form-item prop="newPassword">
          <el-input v-model="form.newPassword" type="password" placeholder="请输入新密码"></el-input>
        </el-form-item>
        <el-form-item prop="confirmPassword">
          <el-input v-model="form.confirmPassword" type="password" placeholder="请确认新密码"></el-input>
        </el-form-item>
      </el-form>
      <div class="btns mt25">
        <div @click="modifyPwd" class="btn-submit mr15">提交</div>
        <div class="btn-clear">关闭</div>
      </div>
    </el-dialog>
  </div>

</template>
<script>
  export default {
    data() {
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.form.newPassword) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        // 修改密码弹窗是否展现
        dialog: false,
        // 修改密码
        form: {
          oldPassword: '',
          newPassword: '',
          confirmPassword: ''
        },
        rules: {
          oldPassword: {required: true, message: '请输入原密码', trigger: 'blur'},
          newPassword: [
            {required: true, message: '请输入原密码', trigger: 'blur'},
            {min: 5, max: 12, message: '长度在 5 到 12 个字符', trigger: 'blur'},
          ],
          confirmPassword: [
            {required: true, validator: validatePass2, trigger: 'blur'}
          ],
        },
      }
    },
    methods: {
      // 如果 item = # 或者 item = false 不跳转
      jump(item) {
        if (!item.path || item.path === '#') {
          return
        }
        if (item.path === 'go(-1)') {
          this.$router.go(-1)
          return
        }
        this.$router.push({path: item.path, query: item.query})
      },
      // 展现修改密码弹窗
      showDialog() {
        for (let o in this.form) {
          this.form[o] = ''
        }
        this.dialog = true
      },
      // 修改密码
      async modifyPwd() {
        await this.$refs.form.validate()
        await this.$ajax({
          url: '/auth/modifyPassword.do',
          query: this.form
        })
        this.$remind('密码修改成功，请重新登录')
        this.logOut()

      },
      // 登出
      async logOut() {
        await this.$ajax({url: '/user/signOut'})
        this.$remind('已安全退出平台')
        this.$router.push('/login')
      }
    },
  }
</script>
<style lang="sass" scoped>
  .main
    .top-nav
      position: absolute
      z-index: 100
      height: $top-nav-height
      line-height: $top-nav-height
      background: $main-c
      color: #fff
      min-width: $min-width
      width: 100%
      padding: 0 25px 0 $left-nav-width + 30px

      .icon-daohang
        font-size: 30px
        position: absolute

      .nav
        margin-left: 40px

        span
          display: inline-block
          font-size: $font-big

        .hr
          margin: 0 8px
      .login-out
        position: absolute
        right: 30px
        top: 0
        font-size: 30px
        cursor: pointer
        &:hover
          opacity: .7
        &:active
          opacity: 1
      .info
        position: absolute
        right: 35px
        font-size: 30px
        top: 0

        .icon-shezhi
          font-size: 30px

      .top-nav-user
        span
          font-size: $font-large

        p
          margin: 10px 0



    .btns
      text-align: right
</style>
