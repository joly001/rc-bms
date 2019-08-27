<template>
  <div class="login" id="login">
    <div class="form">
      <div class="title">
        <p class="text">铁路营业线施工</p>
        <p class="text-assist">安全防护平台</p>
      </div>
      <el-form class="transition-el-form  mt25" v-if="!isFindPage"
               label-position="left" status-icon
               :model="login.query" :rules="rules" ref="form" label-width="0px">
        <el-form-item class="input-box" prop="username">
          <i class="iconfont icon-gerenzhongxinwoderenwubiaozhuntoumianxing"></i>
          <el-input @keyup.enter.native="loginFun()" v-model="login.query.username"
                    placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item class="input-box" prop="password">
          <i class="iconfont icon-mima"></i>
          <el-input type="password" @keyup.enter.native="loginFun()"
                    v-model="login.query.password" placeholder="请输入登录密码"></el-input>
        </el-form-item>
      </el-form>
      <find-pwd class="transition-item" :status.sync="isFindPage" v-if="isFindPage"></find-pwd>

      <div>
        <el-checkbox class="gary" v-model="checked">记住密码</el-checkbox>
        <div @click="loginFun()" class="btn-submit mt5">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
        <p class="hint">推荐使用
          <a href="https://www.google.cn/chrome/" target="_blank">谷歌Chrome</a>、
          <a href="http://se.360.cn/" target="_blank">360</a>、
          <a href="https://ie.sogou.com/" target="_blank">搜狗</a>、
          <a href="https://www.liebao.cn/" target="_blank">猎豹</a>浏览器登录</p>
      </div>
    </div>
  </div>

</template>
<script>
  import findPwd from './FindPwd'

  export default {
    components: {
      findPwd
    },
    data () {
      return {
        login: {
          url: '/user/login',
          el: '.btn-submit',
          noText: true,
          query: {
            username: '',
            password: '',
          }
        },
        // 是否记住密码变量
        checked: false,
        imgRefresh: true,
        verifyCodeUrl: '',
        rules: {
          username: [
            {required: true, message: ' ', trigger: 'blur'}
          ],
          password: [
            {required: true, message: ' ', trigger: 'blur'}
          ],
          verifyCode: [
            {min: 4, max: 4, required: true, message: ' ', trigger: 'blur'}
          ],
        },
        // 是否为找回密码页面
        isFindPage: false
      }
    },
    mounted () {
      // 从cookie中取密码
      this.login.query.username = $Cookie.getCookieValue('username')
      this.login.query.password = $Cookie.getCookieValue('password')
      this.checked = $Cookie.getCookieValue('checked') === 'true'
    },
    methods: {
      // 记住密码
      remember () {
        $Cookie.setCookie('checked', this.checked, 30 * 24)
        if (this.checked) {
          $Cookie.setCookie('username', this.login.query.username, 30 * 24)
          $Cookie.setCookie('password', this.login.query.password, 20 * 24)
        } else {
          $Cookie.deleteCookie('username')
          $Cookie.deleteCookie('password')
        }
      },
      // 登录
      async loginFun () {
        // 登录限制 @author: 石墨鑫 @date: 2019-07-08
        if(new Date().getTime() > new Date('2019-09-10').getTime()){
           return
        }
        await this.$refs.form.validate(async (valid) => {
          if (!valid) {
          } else {
            let res = await this.$ajax(this.login)
            let role = await this.$ajax({
              url: '/user/userAuthorities'
            })
            sessionStorage.setItem('role',JSON.stringify(role.authorities))
            this.remember()
            this.$remind('登录成功')
            localStorage.setItem('userInfo', JSON.stringify(res))
            this.$router.push('/wisdom/info')
          }
        })
      },
    }
  }
</script>
<style lang="sass" scoped>
  .login
    background: #1B2433
    width: 100%
    height: 100vh
    .form
      position: absolute
      background: #ffffff
      width: 996px
      height: 700px
      padding: 124px 340px
      top: calc(50vh - 350px)
      left: calc(50% - 498px)
      border-radius: 30px
      box-shadow: 0 0 38px 15px rgba(39,59,165, .6)
      text-align: center
      .el-form-item__content
        margin-bottom: 30px
      .el-input
        /deep/ .el-input__inner
          height: 54px
          background: #ffffff
          border-radius: 0
          padding-left: 45px
          border-bottom: 1px solid #ccc
          border-top-color: transparent
          border-left-color: transparent
          border-right-color: transparent
      .title
        .text
          font-size: 44px
          font-weight: 300
          color: $blue-dark
        .text-assist
          font-weight: 300
          text-align: left
          padding-left: 5px
          margin-top: 5px
          margin-bottom: 30px
          font-size: $font-big
      .iconfont
        font-size: 24px
        color: $main-c
        position: absolute
        z-index: 2
        top: 8px
        left: 12px
      .el-checkbox
        position: absolute
        color: #A9A9A9
        font-size: $font-normal
        font-weight: 400
        /deep/ .el-checkbox__label
          font-size: $font-normal
      .btn-submit
        margin-top: 57px
        height: 48px
        line-height: 48px
        border-radius: 50px
        width: 320px
        font-weight: 300
        display: inline-block
      .hint
        margin-top: 18px
        font-size: $font-small
        width: 320px
        color: $gray-shallow
        text-align: center
        a
          color: #00a0fb
          transition: all .2s
          &:hover
            opacity: .8

    .support
      width: 100%
      left: 0
      color: $gray-shallow
      position: fixed
      bottom: 20px
      text-align: center
      img
        height: 14px
        margin-right: 5px
        vertical-align: middle
      a
        color: $gray-shallow
        transition: all .2s
        &:hover
          text-decoration: underline

</style>
