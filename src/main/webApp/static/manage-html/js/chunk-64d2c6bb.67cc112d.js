(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-64d2c6bb"],{"0798":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("bread-nav",{attrs:{nav:t.nav}}),a("main-part",[a("div",{staticClass:"btn-block"},[a("div",{staticClass:"btn-main-deepen",on:{click:function(e){t.$router.push("/research-orsay/teacherTraining/publicity")}}},[t._v("发布公告")])]),a("teacherTraining")],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("search-box",{attrs:{searchData:t.searchData,table:t.table}}),a("resize-table",[a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{width:"35%"}},[t._v("标题")]),a("th",{attrs:{width:"15%"}},[t._v("发布时间")]),a("th",{attrs:{width:"20%"}},[t._v("范围")]),a("th",{attrs:{width:"10%"}},[t._v("阅读人数")]),a("th",{attrs:{width:"20%"}},[t._v("操作")])])]),a("tbody",t._l(t.table.list,function(e){return a("tr",[a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(t._f("substrTime")(e.createdTime)))]),a("td",t._l(e.scopeList,function(e){return a("span",[t._v(" "+t._s(e.scopeName))])})),a("td",{staticStyle:{position:"relative"}},[a("span",[t._v(t._s(e.readNum))]),a("i",{staticClass:"el-icon-view oper view",on:{click:function(a){t.onDialogClick(e.title,e.id)}}})]),a("td",[a("span",{staticClass:"oper",on:{click:function(a){t.$router.push("/research-orsay/teacherTraining/publicity?id="+e.id)}}},[t._v("编辑")]),a("span",{staticClass:"oper",on:{click:function(a){t.remove(e)}}},[t._v("删除")])])])}))])]),a("no-data",{directives:[{name:"show",rawName:"v-show",value:!t.table.noData,expression:"!table.noData"}]}),a("paging",{attrs:{data:t.table},on:{"update:data":function(e){t.table=e}}}),a("el-dialog",{attrs:{title:t.title,visible:t.dialogVisible,width:"30%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-tabs",{staticClass:"dialog_table",on:{"tab-click":t.onSwitchClick}},[a("el-tab-pane",{attrs:{label:t.dialogTable.total+"人已读"}}),a("el-tab-pane",{attrs:{label:t.noDialogTable.total+"人未读"}}),a("resize-table",[a("table",{directives:[{name:"show",rawName:"v-show",value:!t.dialogSwitch,expression:"!dialogSwitch"}],staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{width:"33%"}},[t._v("姓名")]),a("th",{attrs:{width:"33%"}},[t._v("职务")]),a("th",{attrs:{width:"33%"}},[t._v("阅读时间")])])]),a("tbody",t._l(t.dialogTable.list,function(e){return a("tr",[a("td",[t._v(t._s(e.userName))]),a("td",[t._v(t._s(e.position))]),a("td",[t._v(t._s(t._f("substrTime")(e.createdTime)))])])}))])]),a("paging",{directives:[{name:"show",rawName:"v-show",value:!t.dialogSwitch,expression:"!dialogSwitch"}],attrs:{data:t.dialogTable},on:{"update:data":function(e){t.dialogTable=e}}}),a("resize-table",[a("table",{directives:[{name:"show",rawName:"v-show",value:t.dialogSwitch,expression:"dialogSwitch"}],staticClass:"table"},[a("thead",[a("tr",[a("th",{attrs:{width:"50%"}},[t._v("姓名")]),a("th",{attrs:{width:"50%"}},[t._v("职务")])])]),a("tbody",t._l(t.noDialogTable.list,function(e){return a("tr",[a("td",[t._v(t._s(e.userName))]),a("td",[t._v(t._s(e.position))])])}))])]),a("paging",{directives:[{name:"show",rawName:"v-show",value:t.dialogSwitch,expression:"dialogSwitch"}],attrs:{data:t.noDialogTable},on:{"update:data":function(e){t.noDialogTable=e}}})],1)],1)],1)},o=[],l=(a("96cf"),a("1da1")),r={data:function(){return{searchData:[{type:"input",placeholder:"标题"}],table:{url:"/notice/queryNoticePage.do",el:".table",total:0,noData:!0,list:[],query:{noticeType:"TEACHER_TRAIN",keywords:null}},dialogTable:{url:"/notice/queryNoticeReadRecordPage.do",el:".dialog_table",total:0,noData:!0,list:[],query:{}},noDialogTable:{url:"/notice/queryNoticeNoReadRecordPage.do",el:".dialog_table",total:0,noData:!0,list:[],query:{}},dialogVisible:!1,title:null,dialogSwitch:!1}},methods:{onSwitchClick:function(){this.dialogSwitch=!this.dialogSwitch},onDialogClick:function(t,e){this.title=t,this.dialogTable.query.id=e,this.noDialogTable.query.id=e,this.$search(this.dialogTable),this.$search(this.noDialogTable),this.dialogVisible=!0},remove:function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("您确认删除【".concat(e.title,"】吗?"),"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"});case 2:return t.next=4,this.$ajax({url:"/notice/deleteNotice.do",query:{id:e.id,isDelete:"YES"}});case 4:this.$remind("删除成功"),this.$search(this.table);case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},mounted:function(){this.$search(this.table)}},c=r,d=(a("6bcc"),a("2877")),u=Object(d["a"])(c,s,o,!1,null,"0e73448e",null);u.options.__file="TeacherTraining.vue";var h=u.exports,b={components:{teacherTraining:h},data:function(){return{nav:[{name:"教师培训",path:""}]}},methods:{},mounted:function(){}},v=b,p=(a("f371"),Object(d["a"])(v,i,n,!1,null,"7e98848b",null));p.options.__file="Index.vue";e["default"]=p.exports},4752:function(t,e,a){},"6bcc":function(t,e,a){"use strict";var i=a("4752"),n=a.n(i);n.a},"9b52":function(t,e,a){},f371:function(t,e,a){"use strict";var i=a("9b52"),n=a.n(i);n.a}}]);
//# sourceMappingURL=chunk-64d2c6bb.67cc112d.js.map