(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-676d29d3"],{"0d4f":function(t,e,s){"use strict";var a=s("bf8a"),i=s.n(a);i.a},"40f8":function(t,e,s){},7677:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("bread-nav",{attrs:{nav:t.nav}}),s("main-part",[s("el-tabs",{model:{value:t.tabs,callback:function(e){t.tabs=e},expression:"tabs"}},[s("el-tab-pane",{attrs:{label:"个人备课",name:"personal"}}),s("el-tab-pane",{attrs:{label:"集体备课",name:"group"}})],1),s("div",{directives:[{name:"show",rawName:"v-show",value:"personal"===t.tabs,expression:"tabs === 'personal'"}],staticClass:"btn-imp"},[s("a",{staticClass:"f-small main-c mr5",attrs:{download:"",href:"../gy-files/template/个人备课导入模板.xlsx"}},[t._v("下载模板")]),s("label",{attrs:{for:"importDom"}},[s("div",{staticClass:"btn-main btn-upload mr15 ml5"},[t._v("批量导入")])]),s("input",{ref:"upload",attrs:{accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel",id:"importDom",type:"file",hidden:""},on:{change:function(e){t.upload(e)}}})]),s("transition-group",{attrs:{mode:"out-in",name:"el-fade-in-linear"}},["personal"===t.tabs?s("personal",{key:"1",staticClass:"tabs-box"}):t._e(),"group"===t.tabs?s("group",{key:"2",staticClass:"tabs-box"}):t._e()],1)],1)],1)},i=[],r=(s("96cf"),s("1da1")),n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("search-box",{attrs:{searchData:t.searchData,table:t.table}}),s("resize-table",[s("table",{staticClass:"table"},[s("thead",[s("tr",[s("th",{attrs:{width:"7%"}},[t._v("年级")]),s("th",{attrs:{width:"7%"}},[t._v("学科")]),s("th",{attrs:{width:"7%"}},[t._v("教师姓名")]),s("th",{attrs:{width:"6%"}},[t._v("听课次数")]),s("th",{attrs:{width:"6%"}},[t._v("教案个数")]),s("th",{attrs:{width:"4%"}},[t._v("时间")]),s("th",{attrs:{width:"4%"}},[t._v("序号")]),s("th",{attrs:{width:"4%"}},[t._v("课题")]),s("th",{attrs:{width:"4%"}},[t._v("目标")]),s("th",{attrs:{width:"5%"}},[t._v("重难点")]),s("th",{attrs:{width:"6%"}},[t._v("教学方法")]),s("th",{attrs:{width:"6%"}},[t._v("教学过程")]),s("th",{attrs:{width:"6%"}},[t._v("作业布置")]),s("th",{attrs:{width:"6%"}},[t._v("板书设计")]),s("th",{attrs:{width:"6%"}},[t._v("后记反思")]),s("th",{attrs:{width:"4%"}},[t._v("等级")]),s("th",{attrs:{width:"12%"}},[t._v("亮点与不足")])])]),s("tbody",t._l(t.table.list,function(e){return s("tr",[s("td",[t._v(t._s(e.gradeName))]),s("td",[t._v(t._s(e.courseName))]),s("td",[t._v(t._s(e.name))]),s("td",[t._v(t._s(e.listenNum))]),s("td",[t._v(t._s(e.planNum))]),s("td",["YES"===e.lessonsTime?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsNo?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsTask?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsTarget?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsDifficulty?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsMethod?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsProcess?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsHomework?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsBoard?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",["YES"===e.lessonsPostscript?s("i",{staticClass:"el-icon-check"}):s("i",{staticClass:"el-icon-close"})]),s("td",[s("span",{class:["assess",e.assessLevel]},[t._v(t._s(t.$enums.AssessLevel.getName(e.assessLevel)))])]),s("td",[t._v(t._s(e.remark))])])}))])]),s("no-data",{directives:[{name:"show",rawName:"v-show",value:!t.table.noData,expression:"!table.noData"}]}),s("paging",{attrs:{data:t.table},on:{"update:data":function(e){t.table=e}}})],1)},c=[],l=(s("7f7f"),s("ac6a"),s("f3e2"),s("6d67"),{data:function(){return{searchData:[{type:"select",title:"学期",width:"240px",notRemove:!0,model:"termId",option:[]},{type:"select",title:"年级",notRemove:!0,model:"gradeId",option:[]},{type:"select",title:"学科",notRemove:!0,model:"courseId",option:[]}],table:{url:"/prepareLessons/queryTeacherPrepareLessonsPage.do",el:".table",total:0,noData:!0,list:[],query:{termId:null,gradeId:null,courseId:null}}}},methods:{getTermList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,s=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax({url:"/school/querySchoolTermList.do"});case 2:e=t.sent,this.searchData[0].option=e.map(function(t){return{label:t.termName,value:t.schoolTermId}}),e.forEach(function(t){"YES"===t.isDefault&&(s.table.query.termId=t.schoolTermId)});case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getGradeList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax({url:"/grade/queryGradeList.do"});case 2:e=t.sent,this.searchData[1].option=e.map(function(t){return{label:t.name,value:t.id}}),this.table.query.gradeId=e[0].id;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),subject:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax({url:"/teachGroupCourse/queryCourseList.do"});case 2:e=t.sent,this.searchData[2].option=e.map(function(t){return{value:t.id,label:t.name}}),this.table.query.courseId=e[0].id;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getTermList();case 2:return t.next=4,this.getGradeList();case 4:return t.next=6,this.subject();case 6:this.$search(this.table);case 7:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}),o=l,u=(s("917e"),s("2877")),h=Object(u["a"])(o,n,c,!1,null,"22f946cc",null);h.options.__file="Personal.vue";var d=h.exports,v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"index"},[s("div",{staticClass:"search-box"},[s("div",{staticClass:"item"},[s("span",{staticClass:"text"},[t._v("学期")]),s("el-select",{staticClass:"term-input",on:{change:t.getDetail},model:{value:t.schoolTermId,callback:function(e){t.schoolTermId=e},expression:"schoolTermId"}},t._l(t.termList,function(t){return s("el-option",{key:t.schoolTermId,attrs:{label:t.termName,value:t.schoolTermId}})}))],1)]),s("resize-table",[s("table",{staticClass:"table main-table mt20"},[s("thead",[s("tr",[s("th",{attrs:{width:"9%"}},[t._v("学科")]),s("th",{attrs:{width:"9%"}},[t._v("教研活动次数")]),t._l(t.detail.gradeList,function(e){return s("th",{attrs:{width:"10%"}},[t._v(t._s(e.name)+"备课次数")])}),s("th",{attrs:{width:"9%"}},[t._v("备课次数总和")]),s("th",{attrs:{width:"9%"}},[t._v("备课平均次数")]),s("th",{attrs:{width:"7%"}},[t._v("等级")])],2)]),s("tbody",t._l(t.detail.statisticsList,function(e){return s("tr",[s("td",[t._v(t._s(e.teachGroupName))]),s("td",[t._v("\n        "+t._s(e.activityNum||0)+"\n        "),s("i",{directives:[{name:"show",rawName:"v-show",value:e.activityNum,expression:"item.activityNum"}],staticClass:"oper see el-icon-view",on:{click:function(s){t.seeList("ACTIVITY_TEACH_GROUP",e)}}})]),t._l(e.gradeStatisticsList,function(a){return s("td",[t._v("\n        "+t._s(a.prepareLessonsNum||0)+"\n        "),s("i",{directives:[{name:"show",rawName:"v-show",value:a.prepareLessonsNum,expression:"i.prepareLessonsNum"}],staticClass:"oper see el-icon-view",on:{click:function(s){t.seeList("ACTIVITY_PREPARE_LESSONS",e,a)}}})])}),s("td",[t._v(t._s(e.prepareLessonsNum||0))]),s("td",[t._v(t._s(e.prepareLessonsAvg||0))]),s("td",[s("span",{class:["assess",e.assessLevel]},[t._v(t._s(t.$enums.AssessLevel.getName(e.assessLevel)||"--"))])])],2)}))])]),s("el-dialog",{staticClass:"dialog",attrs:{title:"活动列表",visible:t.listDialog,width:"600px"},on:{"update:visible":function(e){t.listDialog=e}}},[s("resize-table",[s("table",{staticClass:"table table-list"},[s("thead",[s("tr",[s("th",{attrs:{width:"50%"}},[t._v("活动名称")]),s("th",{attrs:{width:"25%"}},[t._v("活动时间")]),s("th",{attrs:{width:"25%"}},[t._v("教研组/备课组")])])]),s("tbody",t._l(t.activeList,function(e){return s("tr",[s("td",[s("span",{staticClass:"oper",on:{click:function(s){t.showDetailDialog(e)}}},[t._v(t._s(e.activityName))])]),s("td",[t._v(t._s(t._f("substrTime")(e.activityDate)))]),t.activeList.length>0?s("td",[t._v(t._s(t.activeList[0].teachGroupName))]):t._e()])}))])]),s("div",{staticClass:"btns"},[s("div",{staticClass:"btn-submit",on:{click:function(e){t.listDialog=!1}}},[t._v("返回")])])],1),s("el-dialog",{staticClass:"dialog",attrs:{title:"活动详情",visible:t.detailDialog,width:"600px"},on:{"update:visible":function(e){t.detailDialog=e}}},[s("resize-table",[t.activeDetail?s("table",{staticClass:"table detail-table"},[s("thead",[s("tr",[s("td",{staticClass:"title"},[t._v("教研组")]),s("td",{staticClass:"content"},[t._v(t._s(t.activeDetail.teachGroupName))]),s("td",{staticClass:"title"},[t._v("活动时间")]),s("td",{staticClass:"content"},[t._v(t._s(t._f("substrTime")(t.activeDetail.activityDate)))])])]),s("tbody",[s("tr",[s("td",{staticClass:"title"},[t._v("活动名称")]),s("td",{staticClass:"content",attrs:{colspan:"3"}},[t._v(t._s(t.activeDetail.activityName))])]),s("tr",[s("td",{staticClass:"title"},[t._v("举办单位")]),s("td",{staticClass:"content",attrs:{colspan:"3"}},[t._v(t._s(t.activeDetail.activitySponsor))])]),s("tr",[s("td",{staticClass:"title"},[t._v("活动地点")]),s("td",{staticClass:"content",attrs:{colspan:"3"}},[t._v(t._s(t.activeDetail.activityLocation))])]),s("tr",[s("td",{staticClass:"title"},[t._v("活动内容")]),s("td",{staticClass:"content",attrs:{colspan:"3"}},[t._v(t._s(t.activeDetail.activityContent))])]),s("tr",[s("td",{staticClass:"title"},[t._v("参会人员")]),s("td",{staticClass:"content",attrs:{colspan:"3"}},[t._v(t._s(t.activeDetail.teacherList.map(function(t){return t.name}).join()))])])])]):t._e()]),t.activeDetail?s("el-carousel",t._l(t.activeDetail.attachmentList,function(t,e){return s("el-carousel-item",{key:e,staticClass:"carousel"},[s("img",{attrs:{src:t.fileUrl,alt:""}})])})):t._e()],1)],1)},p=[],m={data:function(){return{termList:[],schoolTermId:null,detail:{statisticsList:[]},listDialog:!1,activeList:[],detailDialog:!1,activeDetail:null}},methods:{getTermList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax({url:"/school/querySchoolTermList.do"});case 2:this.termList=t.sent,this.termList.forEach(function(t){"YES"===t.isDefault&&(e.schoolTermId=t.schoolTermId)});case 4:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),seeList:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,s,a){var i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.listDialog=!0,t.next=3,this.$ajax({url:"/teachGroupActivity/queryTeachGroupActivityPage.do",el:".table-list",query:{activityType:e,termId:this.schoolTermId,teachGroupId:s.teachGroupId,gradeId:a?a.gradeId:null,pageSize:1e5,pageNo:1}});case 3:i=t.sent,this.activeList=i.list,this.activeList[0].teachGroupName=s.teachGroupName;case 6:case"end":return t.stop()}},t,this)}));return function(e,s,a){return t.apply(this,arguments)}}(),getDetail:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax({url:"/teachGroupActivity/queryTeachGroupStatisticsList.do",el:".table",query:{schoolTermId:this.schoolTermId}});case 2:this.detail=t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),showDetailDialog:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.detailDialog=!0,t.next=3,this.$ajax({url:"/teachGroupActivity/getTeachGroupActivity.do",el:".table-detail",query:{id:e.id}});case 3:this.activeDetail=t.sent;case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()},mounted:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.getTermList();case 2:this.getDetail();case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},f=m,_=(s("7a6e"),Object(u["a"])(f,v,p,!1,null,"53ce19e7",null));_.options.__file="Group.vue";var b=_.exports,w={components:{group:b,personal:d},data:function(){return{nav:[{name:"备课检查",path:""}],tabs:"personal"}},methods:{upload:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var s,a,i,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(0!==e.target.files.length){t.next=2;break}return t.abrupt("return");case 2:return s=e.target.files[0],this.$refs.upload.value=null,a=new FormData,a.append("file",s),i={url:"/import/importTeacherPrepareLessons.do",query:a,el:".btn-upload",noText:!0},t.next=9,this.$ajax(i);case 9:r=t.sent,r.errMsgList&&r.errMsgList.length?this.$message.error(r.errMsgList[0]):this.$remind("导入成功"),this.$search(this.table);case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},g=w,C=(s("0d4f"),Object(u["a"])(g,a,i,!1,null,"12412685",null));C.options.__file="Index.vue";e["default"]=C.exports},"7a6e":function(t,e,s){"use strict";var a=s("40f8"),i=s.n(a);i.a},"917e":function(t,e,s){"use strict";var a=s("9329"),i=s.n(a);i.a},9329:function(t,e,s){},bf8a:function(t,e,s){}}]);
//# sourceMappingURL=chunk-676d29d3.da71dc3d.js.map