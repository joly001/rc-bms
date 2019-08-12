<template>
  <div class="find-pwd">
    <el-form
            label-position="left" class="mt25" status-icon
            :model="login.query" :rules="rules" ref="form" label-width="0px">
      <el-form-item class="input-box" prop="phone">
        <el-input @keyup.enter.native="loginFun()" v-model="login.query.phone"
                  placeholder="登录手机号"></el-input>
      </el-form-item>
      <el-form-item class="input-box" prop="vertifyCode">
        <el-input v-model="login.query.vertifyCode" placeholder="输入验证码">
          <el-button @click="getCode" class="hand" slot="append">{{countdown}}</el-button>
        </el-input>
      </el-form-item>
      <el-form-item class="input-box" prop="newPassword">
        <el-input type="password"
                  v-model="login.query.newPassword" placeholder="新密码"></el-input>
      </el-form-item>
      <el-form-item class="input-box" prop="confirmPassword">
        <el-input type="password"
                  v-model="login.query.confirmPassword" placeholder="确认密码"></el-input>
      </el-form-item>
    </el-form>
    <span @click="$emit('update:status', false)" class="text">已有密码，立即<span class="main-c">登录</span></span>
    <div class="btn-submit" @click="submitUser">确认</div>
  </div>

</template>
<script>
  export default {
    props: ['status'],
    data () {
      const validatePass = (rule, value, callback) => {
        if (!this.login.query.newPassword) {
          callback(new Error())
        } else if (this.login.query.newPassword !== this.login.query.confirmPassword) {
          callback(new Error())
        } else {
          callback()
        }
      }
      return {
        login: {
          url: '/auth/login.do',
          el: '.btn-submit',
          noText: true,
          query: {
            phone: null,
            newPassword: null,
            confirmPassword: null,
            vertifyCode: null
          }
        },
        rules: {
          phone: [
            {min: 11, max: 11, required: true, message: ' ', trigger: 'blur'}
          ],
          newPassword: [
            {min: 6, max: 18, required: true, message: ' ', trigger: 'blur'}
          ],
          confirmPassword: [
            {validator: validatePass, trigger: 'blur'}
          ],
          vertifyCode: [
            {min: 4, max: 4, required: true, message: ' ', trigger: 'blur'}
          ],
        },
        countdown: '获取验证码',
      }
    },
    methods: {
      // 获取验证码
      getCode () {
        status = true
        if (!status) return
        if (!this.login.query.phone) {
          this.$message.warning('请输入手机号码')
          return
        }
        if (!(/^[1][0-9][0-9]{9}$/.test(this.login.query.phone))) {
          this.$message.warning('请输入正确手机号码')
          return
        }
        this.$ajax({
          url: '/auth/sendVerifyCode.do',
          query: {
            phone: this.login.query.phone
          }
        })
        this.$remind('验证码发送成功')
        status = false
        if (typeof this.countdown === 'number') {
          return
        }
        this.countdown = 60
        let timer = setInterval(() => {
          this.countdown--
          if (this.countdown === 0) {
            clearInterval(timer)
            this.countdown = '获取验证码'
          }
        }, 1000)
      },
      // 提交
      async submitUser () {
        await this.$refs.form.validate()
        if (typeof this.countdown !== 'number') {
          this.$message.warning('请先获取验证码')
          return
        }
        await this.$ajax({
          url: '/auth/resetPassword.do',
          el: '.btn-submit',
          query: this.login.query
        })
        this.$emit('update:status', false)
      }
    },
    mounted () {
    }
  }
</script>
<style lang="sass" scoped>
  /deep/ .el-form-item__error
    display: none
  .find-pwd
    position: absolute
    z-index: 10
    margin-top: -40px
    margin-left: -30px
    width: 414px
    height: 404px
    padding: 30px
    .text
      float: right
      color: $gray
      margin-top: -7px
      margin-right: 5px
      margin-bottom: 2px
      .main-c
        cursor: pointer
        @include btn-opacity
    .el-input
      /deep/ input
        height: 40px
        background: #ebf8ff
        border-radius: $radius
        padding-left: 20px
        border: none
    .btn-submit
      height: 44px
      line-height: 44px
      width: 100%
    /deep/ .el-input-group__append
      width: 114px
      text-align: center
      background: $main-c
      border-color: $main-c
      color: #fff
      cursor: pointer
      opacity: 1
      transition: all .3s
      @include btn-opacity()

</style>
