<template>
    <div class="sider-container">
        <div class="logo">
			<!-- <img src="@/assets/logo.png" alt=""> -->
			<p>铁路营业线施工安全防护平台</p>
		</div>
         <Sider ref="side1" width="240" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed">
            <Menu theme="dark" width="auto" :class="menuitemClasses" accordion>
                <!--accessMounted()控制路由显示隐藏-->
                <Submenu :name="i"  v-for="(item,i) in memuList" :index="i" :key="i" v-if="figureAccess(item)">
                    <template slot="title">
                        <icon :name="item.meta.icon" :scale="3"></icon>
                        <span>{{item.meta.title}}</span>
                    </template>
                    <MenuItem :name="child.name" v-for="child in item.children" @click.native="go(child.name)" :key="child.name">{{child.meta.title}}</MenuItem>
                </Submenu>
            </Menu>
        </Sider>
    </div>
</template>

<script>

	 export default {
	 	components:{
	 	},
        data () {
            return {
                isCollapsed: false,
                memuList: [],//侧边栏列表
            }
        },
        computed: {
            rotateIcon () {
                return [
                    'menu-icon',
                    this.isCollapsed ? 'rotate-icon' : ''
                ];
            },
            menuitemClasses () {
                return [
                    'menu-item',
                    this.isCollapsed ? 'collapsed-menu' : ''
                ]
            }
        },
        methods: {
            collapsedSider () {
                this.$refs.side1.toggleCollapse();
            },
            figureRoute (routes) {//计算能显示在侧边栏的路由
				for(let i=0;i<routes.length; i++){
					if(routes[i].meta && routes[i].meta.showMenu){
						this.memuList.push(routes[i]);
					}
				}
				
			},
            figureAccess (route) {//计算是否有权限,计算结果是说返回true和false
				if(route.meta && !route.meta.access){
					return true;
				}else if(route.meta.access){
					for(let i=0;i<route.meta.access.length;i++){
						if(route.meta.access[i] == this.access){
							return true;
						}
					}
				}else {
					return false;
				}
            },
            go (toName,id) {//跳转路由
				this.$router.push({ name: toName, params: {}})
			}
        },
        mounted () {            
            
            let routes = this.$router.options.routes;
            console.log(routes);
			this.figureRoute(routes)
        }
    }
</script>
<style lang="less">

    .sider-container{
        // ivew默认样式覆盖
        // 侧边栏背景颜色/字体大小
        .ivu-menu-dark,.ivu-menu,.ivu-menu-dark.ivu-menu-vertical .ivu-menu-opened,.ivu-layout-sider,.ivu-menu-dark .ivu-menu-opened .ivu-menu-submenu-title{
            background: #1B2433!important;
        }

        .ivu-menu-submenu-title{
            display: flex;
        }

        .ivu-menu-submenu-title>span{
            margin: 0 10px;
        }

        .ivu-menu-submenu-title>i{
           width: 18px;
           height: 18px;
        }


        .ivu-menu-submenu{
            font-size: 18px;
        }
        .ivu-menu-dark.ivu-menu-vertical .ivu-menu-item, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu-title{
            color: #fff;
        }
        .ivu-menu-item{
            border-left: 2px solid transparent;
        }
        // 子级栏目
        .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-it,.ivu-menu-dark.ivu-menu-vertical .ivu-menu-item:hover,.ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active,.ivu-menu-submenu .ivu-menu-item-active:hover{
            border-left: 2px solid #4680D9;
            box-sizing: border-box;
            background:#323a48!important;
        }
        // hover样式
        .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active, .ivu-menu-dark.ivu-menu-vertical .ivu-menu-submenu .ivu-menu-item-active:hover{
             background:#323a48!important;
        }        
    }
</style>
<style lang="less" scoped>
    @import url('../../styles/navbar/navbar.less');
</style>
