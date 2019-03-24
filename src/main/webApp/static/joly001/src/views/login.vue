<template>
	<div>
		<Spin fix v-if="spinShow">
			<Icon type="ios-loading" size=18 class="demo-spin-icon-load"></Icon>
			<div>Loading</div>
		</Spin>
		<div class="login-bg">
			<div>
				<div class="logo">
					<!-- <img src="../assets/images/logo.png" alt="" /> -->
					<h1>铁路营业线施工安全防护平台</h1>
				</div>
				<div class="login-form">
					<Form action="" ref="formInline" :model="formInline" :rules="ruleInline">
						<FormItem prop="user">
							<Input type="text" v-model="formInline.user" placeholder="账号">
								<Icon type="ios-person-outline" slot="prepend"></Icon>
							</Input>
						</FormItem>
						<FormItem prop="password">
							<Input type="password" v-model="formInline.password" @keyup.native.enter="handleSubmit('formInline')" placeholder="密码">
								<Icon type="ios-lock-outline" slot="prepend"></Icon>
							</Input>
						</FormItem>
						<FormItem class="checked-pw">
							<Checkbox v-model="checked">记住密码</Checkbox>
						</FormItem>
						<FormItem>
							<Button type="primary" @click="handleSubmit('formInline')">登录</Button>
						</FormItem>
					</Form>
				</div>
			</div>
		</div>
	</div>
	
</template> 

<script>
	export default {
		data () {
			return {
				spinShow: false,
				formInline:{
					user:'',
					password:''
				},
				checked: false,
				ruleInline:{
					 user: [
                        { required: true, message: '请填写账号', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请填写密码', trigger: 'blur' },
                        { type: 'string', min: 1, message: '密码不少于六位', trigger: 'blur' }
                    ]
				}
			}
		},
		methods: {
			handleSubmit:function(formInline){
				 let _this = this;
				// this.$router.push({ name: "home"});
				// return ;
				this.$refs[formInline].validate((valid) =>{
					  if (valid) {
						this.spinShow = true
					  	var loginParams = {
							Id: _this.formInline.user,
							Pw: _this.formInline.password
						};//用户输入的账号和密码
					    this.axios({
					  		method:'get',
					  		url:'/Api/Home/Login',
					  		params:loginParams
					  	}).then((res) =>{
					  		if(res.status==200){
					  			 	this.$Message.success("登录成功!");
									// sessionStorage.setItem("AttributionGuid",res.data.User.AttributionGuid);//缓存用户token
									// sessionStorage.setItem("token",res.data.Token);//缓存用户token
									// sessionStorage.setItem('NickName',res.data.User.NickName);
									this.$store.commit("set_attr",res.data.User.AttributionGuid)
									this.$store.commit("set_token",res.data.Token)
									console.log(res)
									this.$store.commit("set_nick_name",res.data.User.NickName)
									let routes = this.$router.options.routes;
									// if(res.data.User.AttributionGuid == "0000000000-0000-0000-0000-0000000000"){
									// 	this.$store.commit("setAttributionName","水利厅")
									// 	routes[0].meta.title = this.$store.state.AttributionName;
									// 	routes[routes.length-2].meta.showMenu = true;
									// }else{
									// 	this.$store.commit("setAttributionName",res.data.User.AttributionName)
									// 	routes[0].meta.title = this.$store.state.AttributionName;
									// 	routes[routes.length-2].meta.showMenu = false;
									// }
									
								  this.$store.commit("set_guid",res.data.User.Guid);
								  let remeberFlag;//储存记住密码
						            //判断复选框是否被勾选
						            if (this.checked == true) {
						                // console.log("checked == true");
						                remeberFlag = "true";
						                this.setCookie(_this.formInline.user, _this.formInline.password, 30, remeberFlag);
						            }else {
						                remeberFlag = "false";
						                this.setCookie("", "", -1, remeberFlag);
						            }
								  this.$router.push({ name: "home"});
								  this.spinShow = false;
							  }else{
								  this.$Message.error('登录失败!');
							  }
							  this.spinShow = false;
					  	}).catch((error) =>{
					  		if(error.c ==500 && error.m.search("密码错误") != -1){
								  this.$Message.error('帐号或密码错误!');
								  return;
							}
							this.spinShow = false;
					  		this.$Message.error('登录失败!');
					  	})
					  }else{
					  	this.$Message.error('登录失败!');
					  }
				})
				
			},
			//设置cookie
		    setCookie(c_name, c_pwd, exdays, remeberFlag) {
		        let exdate = new Date(); //获取时间
		        exdate.setTime(exdate.getTime() + 24 * 60 * 60 * 1000 * exdays); //保存的天数
		        //字符串拼接cookie
		        window.document.cookie = "userName" + "=" + c_name + ";path=/;expires=" + exdate.toGMTString();
		        window.document.cookie = "userPwd" + "=" + c_pwd + ";path=/;expires=" + exdate.toGMTString();
		        window.document.cookie = "remeberFlag" + "=" + remeberFlag + ";path=/;expires=" + exdate.toGMTString();
		    },
		    getCookie: function() {//读取cookie
		        if (document.cookie.length > 0) {
		            let arr = document.cookie.split('; '); //这里显示的格式需要切割一下自己可输出看下
		            for (let i = 0; i < arr.length; i++) {
		                let arr2 = arr[i].split('='); //再次切割
		                //判断查找相对应的值
		                if (arr2[0] == 'userName') {
		                    this.formInline.user = arr2[1]; //保存到保存数据的地方
		                } else if (arr2[0] == 'userPwd') {
		                    this.formInline.password = arr2[1];
		                }else if (arr2[0] == 'remeberFlag') {
		                	if(arr2[1] == "true"){
		                		this.checked = true;
		                	}else{
		                		this.checked = false;
		                	}
		                    
		                }
		            }
		        }
		    }
		},
		mounted () {
			this.$store.commit("set_token","")
			this.getCookie();
		}
	}
</script>

<style lang="less" scoped>
	@import url("../styles/login.less");
</style>