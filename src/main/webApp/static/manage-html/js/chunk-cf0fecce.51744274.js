(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf0fecce"],{"01fd":function(t,e,a){"use strict";var i=a("7a37"),n=a.n(i);n.a},2560:function(t,e,a){"use strict";var i=a("cdcb"),n=a.n(i);n.a},"40a6":function(t,e,a){"use strict";var i=a("4189"),n=a.n(i);n.a},4189:function(t,e,a){},"6a68":function(t,e,a){"use strict";var i=a("cd10"),n=a.n(i);n.a},7154:function(t,e,a){"use strict";var i=a("d41c"),n=a.n(i);n.a},"7a37":function(t,e,a){},b1ca:function(t,e,a){},cd10:function(t,e,a){},cdcb:function(t,e,a){},d41c:function(t,e,a){},e71d:function(t,e,a){"use strict";var i=a("b1ca"),n=a.n(i);n.a},fa01:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-tabs",{on:{"tab-click":t.handleClick},model:{value:t.tabindex,callback:function(e){t.tabindex=e},expression:"tabindex"}},[a("el-tab-pane",{attrs:{label:"里程管理",name:"mileage"}},[a("config-mileage")],1),a("el-tab-pane",{attrs:{label:"作业区间",name:"interval"}},[a("config-interval")],1),a("el-tab-pane",{attrs:{label:"线路管理",name:"line"}},[a("config-line")],1),a("el-tab-pane",{attrs:{label:"机械管理",name:"mechanical"}},[a("config-mechanical")],1),a("el-tab-pane",{attrs:{label:"系统参数配置",name:"system"}},[a("config-system")],1)],1)],1)},n=[],r=(a("cadf"),a("551c"),a("097d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"table-box"},[a("div",{staticClass:"btn-main btn-add mb20",on:{click:function(e){t.showDialog("add")}}},[t._v("设置里程")]),a("table",{staticClass:"table",attrs:{cellspacing:"0"}},[t._m(0),t._l(t.table.list,function(e,i){return a("tr",[a("td",[t._v(t._s(i+1))]),a("td",[t._v(t._s(e.mileageName))]),a("td",[t._v(t._s("00"===e.mileageType?"百米标":"公里标"))]),a("td",[t._v("（x: "+t._s(e.startLongitude)+" ， y: "+t._s(e.startLatitude)+"）")]),a("td",[t._v("（x: "+t._s(e.endLongitude)+" ， y: "+t._s(e.endLatitude)+"）")]),a("td",[a("span",{staticClass:"oper",on:{click:function(a){t.showDialog("edit",e)}}},[t._v("修改")]),a("span",{staticClass:"col"}),a("span",{staticClass:"oper",on:{click:function(a){t.remove(e)}}},[t._v("删除")])])])})],2),a("el-pagination",{staticClass:"pagination",attrs:{"page-size":t.table.query.pageSize,"current-page":t.table.query.currentPage,layout:"prev, pager, next, jumper",total:t.table.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.table.query,"currentPage",e)}}})],1),a("el-dialog",{attrs:{modal:!1,center:"",title:t.title,visible:t.dialog,width:"420px"},on:{"update:visible":function(e){t.dialog=e}}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{prop:"oldPassword",label:"里程点"}},[a("el-input",{attrs:{placeholder:"请输入里程点"},model:{value:t.addEditConfig.query.mileageName,callback:function(e){t.$set(t.addEditConfig.query,"mileageName",e)},expression:"addEditConfig.query.mileageName"}})],1),a("el-form-item",{attrs:{prop:"oldPassword",label:"里程类型"}},[a("el-radio-group",{model:{value:t.addEditConfig.query.mileageType,callback:function(e){t.$set(t.addEditConfig.query,"mileageType",e)},expression:"addEditConfig.query.mileageType"}},[a("el-radio",{attrs:{border:"",label:"00"}},[t._v("百米标")]),a("el-radio",{attrs:{border:"",label:"01"}},[t._v("公里标")])],1)],1),a("el-form-item",{attrs:{prop:"oldPassword",label:"对应坐标1"}},[a("span",{staticClass:"assist"},[t._v(t._s("00"===t.addEditConfig.query.mileageType?"百米标":"公里标"))]),a("div",{staticClass:"coordinates"},[a("span",[t._v("x:")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addEditConfig.query.startLongitude,callback:function(e){t.$set(t.addEditConfig.query,"startLongitude",e)},expression:"addEditConfig.query.startLongitude"}})],1),a("div",{staticClass:"coordinates"},[a("span",[t._v("y:")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addEditConfig.query.startLatitude,callback:function(e){t.$set(t.addEditConfig.query,"startLatitude",e)},expression:"addEditConfig.query.startLatitude"}})],1)]),a("el-form-item",{attrs:{prop:"oldPassword",label:"对应坐标2"}},[a("span",{staticClass:"assist"},[t._v(t._s("00"===t.addEditConfig.query.mileageType?"百米标":"公里标"))]),a("div",{staticClass:"coordinates"},[a("span",[t._v("x:")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addEditConfig.query.endLongitude,callback:function(e){t.$set(t.addEditConfig.query,"endLongitude",e)},expression:"addEditConfig.query.endLongitude"}})],1),a("div",{staticClass:"coordinates"},[a("span",[t._v("y:")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addEditConfig.query.endLatitude,callback:function(e){t.$set(t.addEditConfig.query,"endLatitude",e)},expression:"addEditConfig.query.endLatitude"}})],1)])],1),a("div",{staticClass:"btns mt25"},[a("div",{staticClass:"btn-main mr15",on:{click:function(e){t.editFun()}}},[t._v("提交")]),a("div",{staticClass:"btn-main",on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])])],1)],1)}),s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{width:"7%"}},[t._v("序号")]),a("th",{attrs:{width:"10%"}},[t._v("里程点")]),a("th",{attrs:{width:"10%"}},[t._v("里程类型")]),a("th",{attrs:{width:"32%"}},[t._v("对应坐标1")]),a("th",{attrs:{width:"32%"}},[t._v("对应坐标2")]),a("th",{attrs:{width:"12%"}},[t._v("操作")])])}],d=(a("96cf"),a("1da1")),l={name:"Mileage",data:function(){return{table:{url:"/mileage/list",loading:".table",list:[],total:0,query:{condition:{mileageName:""},currentPage:1,pageSize:this.$conf.PAGES}},addEditConfig:{url:"/mileage/add",query:{mileageName:"",mileageType:"00",startLongitude:"",startLatitude:"",endLongitude:"",endLatitude:""}},visible:!1,title:"设置里程",dialog:!1}},methods:{showDialog:function(t,e){this.dialog=!0,e?(this.title="修改里程",this.addEditConfig.query={id:e.id,mileageName:e.mileageName,mileageType:e.mileageType,startLongitude:e.startLongitude,startLatitude:e.startLatitude,endLongitude:e.endLongitude,endLatitude:e.endLatitude}):(this.title="设置里程",this.addEditConfig.query={mileageName:"",mileageType:"",startLongitude:"",startLatitude:"",endLongitude:"",endLatitude:""})},getData:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax(this.table);case 2:e=t.sent,this.table.list=e.pageItems,this.table.total=e.totalCount;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),remove:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("您确认删除该里程点吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:return t.next=4,this.$ajax({url:"/mileage/delete",query:{id:e.id}});case 4:this.$remind("删除成功"),this.getData();case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),editFun:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="","修改里程"===this.title?(e="修改成功",this.addEditConfig.url="/mileage/update"):(e="新增成功",this.addEditConfig.url="/mileage/add"),t.next=4,this.$ajax(this.addEditConfig);case 4:this.$remind(e),this.dialog=!1,this.table.query={condition:{mileageName:""},currentPage:1,pageSize:this.$conf.PAGES},this.getData();case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCurrentChange:function(t){this.table.query.currentPage=t,this.getData()}},mounted:function(){this.getData()}},o=l,u=(a("01fd"),a("2877")),c=Object(u["a"])(o,r,s,!1,null,"f0d42f6a",null);c.options.__file="Mileage.vue";var g=c.exports,f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("作业管理")])},m=[],p={name:"Interval"},h=p,v=(a("40a6"),Object(u["a"])(h,f,m,!1,null,"4ccd33e8",null));v.options.__file="Interval.vue";var b=v.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v("机械管理")])},C=[],_={name:"Mechanical"},L=_,E=(a("e71d"),Object(u["a"])(L,y,C,!1,null,"94164230",null));E.options.__file="Mechanical.vue";var x=E.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"table-box"},[a("div",{staticClass:"btn-main btn-add mb20",on:{click:function(e){t.showDialog("add")}}},[t._v("设置里程")]),a("table",{staticClass:"table",attrs:{cellspacing:"0"}},[t._m(0),t._l(t.table.list,function(e,i){return a("tr",[a("td",[t._v(t._s(i+1))]),a("td",[t._v(t._s(e.mileageName))]),a("td",[t._v(t._s("00"===e.mileageType?"百米标":"公里标"))]),a("td",[t._v("（x: "+t._s(e.startLongitude)+" ， y: "+t._s(e.startLatitude)+"）")]),a("td",[t._v("（x: "+t._s(e.endLongitude)+" ， y: "+t._s(e.endLatitude)+"）")]),a("td",[a("span",{staticClass:"oper",on:{click:function(a){t.showDialog("edit",e)}}},[t._v("修改")]),a("span",{staticClass:"col"}),a("span",{staticClass:"oper",on:{click:function(a){t.remove(e)}}},[t._v("删除")])])])})],2),a("el-pagination",{staticClass:"pagination",attrs:{"page-size":t.table.query.pageSize,"current-page":t.table.query.currentPage,layout:"prev, pager, next, jumper",total:t.table.total},on:{"current-change":t.handleCurrentChange,"update:currentPage":function(e){t.$set(t.table.query,"currentPage",e)}}})],1),a("el-dialog",{attrs:{modal:!1,center:"",title:t.title,visible:t.dialog,width:"420px"},on:{"update:visible":function(e){t.dialog=e}}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"80px","label-position":"left"}},[a("el-form-item",{attrs:{prop:"oldPassword",label:"里程点"}},[a("el-input",{attrs:{placeholder:"请输入里程点"},model:{value:t.addEditConfig.query.mileageName,callback:function(e){t.$set(t.addEditConfig.query,"mileageName",e)},expression:"addEditConfig.query.mileageName"}})],1),a("el-form-item",{attrs:{prop:"oldPassword",label:"里程类型"}},[a("el-radio-group",{model:{value:t.addEditConfig.query.mileageType,callback:function(e){t.$set(t.addEditConfig.query,"mileageType",e)},expression:"addEditConfig.query.mileageType"}},[a("el-radio",{attrs:{border:"",label:"00"}},[t._v("百米标")]),a("el-radio",{attrs:{border:"",label:"01"}},[t._v("公里标")])],1)],1),a("el-form-item",{attrs:{prop:"oldPassword",label:"对应坐标1"}},[a("span",{staticClass:"assist"},[t._v(t._s("00"===t.addEditConfig.query.mileageType?"百米标":"公里标"))]),a("div",{staticClass:"coordinates"},[a("span",[t._v("x:")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addEditConfig.query.startLongitude,callback:function(e){t.$set(t.addEditConfig.query,"startLongitude",e)},expression:"addEditConfig.query.startLongitude"}})],1),a("div",{staticClass:"coordinates"},[a("span",[t._v("y:")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addEditConfig.query.startLatitude,callback:function(e){t.$set(t.addEditConfig.query,"startLatitude",e)},expression:"addEditConfig.query.startLatitude"}})],1)]),a("el-form-item",{attrs:{prop:"oldPassword",label:"对应坐标2"}},[a("span",{staticClass:"assist"},[t._v(t._s("00"===t.addEditConfig.query.mileageType?"百米标":"公里标"))]),a("div",{staticClass:"coordinates"},[a("span",[t._v("x:")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addEditConfig.query.endLongitude,callback:function(e){t.$set(t.addEditConfig.query,"endLongitude",e)},expression:"addEditConfig.query.endLongitude"}})],1),a("div",{staticClass:"coordinates"},[a("span",[t._v("y:")]),a("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.addEditConfig.query.endLatitude,callback:function(e){t.$set(t.addEditConfig.query,"endLatitude",e)},expression:"addEditConfig.query.endLatitude"}})],1)])],1),a("div",{staticClass:"btns mt25"},[a("div",{staticClass:"btn-main mr15",on:{click:function(e){t.editFun()}}},[t._v("提交")]),a("div",{staticClass:"btn-main",on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])])],1)],1)},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{width:"7%"}},[t._v("序号")]),a("th",{attrs:{width:"10%"}},[t._v("里程点")]),a("th",{attrs:{width:"10%"}},[t._v("里程类型")]),a("th",{attrs:{width:"32%"}},[t._v("对应坐标1")]),a("th",{attrs:{width:"32%"}},[t._v("对应坐标2")]),a("th",{attrs:{width:"12%"}},[t._v("操作")])])}],$={name:"Line",data:function(){return{table:{url:"/mileage/list",loading:".table",list:[],total:0,query:{condition:{mileageName:""},currentPage:1,pageSize:this.$conf.PAGES}},addEditConfig:{url:"/mileage/add",query:{mileageName:"",mileageType:"00",startLongitude:"",startLatitude:"",endLongitude:"",endLatitude:""}},visible:!1,title:"设置里程",dialog:!1}},methods:{showDialog:function(t,e){this.dialog=!0,e?(this.title="修改里程",this.addEditConfig.query={id:e.id,mileageName:e.mileageName,mileageType:e.mileageType,startLongitude:e.startLongitude,startLatitude:e.startLatitude,endLongitude:e.endLongitude,endLatitude:e.endLatitude}):(this.title="设置里程",this.addEditConfig.query={mileageName:"",mileageType:"",startLongitude:"",startLatitude:"",endLongitude:"",endLatitude:""})},getData:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax(this.table);case 2:e=t.sent,this.table.list=e.pageItems,this.table.total=e.totalCount;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),remove:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("您确认删除该里程点吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:return t.next=4,this.$ajax({url:"/mileage/delete",query:{id:e.id}});case 4:this.$remind("删除成功"),this.getData();case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),editFun:function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="","修改里程"===this.title?(e="修改成功",this.addEditConfig.url="/mileage/update"):(e="新增成功",this.addEditConfig.url="/mileage/add"),t.next=4,this.$ajax(this.addEditConfig);case 4:this.$remind(e),this.dialog=!1,this.table.query={condition:{mileageName:""},currentPage:1,pageSize:this.$conf.PAGES},this.getData();case 8:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),handleCurrentChange:function(t){this.table.query.currentPage=t,this.getData()}},mounted:function(){this.getData()}},k=$,P=(a("7154"),Object(u["a"])(k,q,w,!1,null,"d261534e",null));P.options.__file="Line.vue";var T=P.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div")},N=[],D={name:"System"},S=D,O=(a("6a68"),Object(u["a"])(S,j,N,!1,null,"71f065a0",null));O.options.__file="System.vue";var R=O.exports,z={name:"Config",components:{configMileage:g,configInterval:b,configMechanical:x,configLine:T,configSystem:R},data:function(){return{tabindex:"mileage"}},methods:{handleClick:function(){}}},M=z,I=(a("2560"),Object(u["a"])(M,i,n,!1,null,"1aef4ffc",null));I.options.__file="Config.vue";e["default"]=I.exports}}]);
//# sourceMappingURL=chunk-cf0fecce.51744274.js.map