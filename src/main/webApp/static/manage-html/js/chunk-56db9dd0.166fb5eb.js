(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-56db9dd0"],{"4ce3":function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"index"},[n("bread-nav",{attrs:{nav:e.nav}}),n("main-part",[n("div",{staticClass:"btn-block"},[n("span",{staticClass:"btn-main",on:{click:e.doImport}},[e._v("导入检查结果")]),n("span",{staticClass:"btn-main ml15",on:{click:function(t){e.$exportDetail("/export/assessSanitationExport.do",e.query)}}},[e._v("导出")])]),n("div",{staticClass:"search-box"},[n("div",{staticClass:"item"},[n("span",{staticClass:"text"},[e._v("年级")]),n("el-select",{on:{change:e.onGradeChange},model:{value:e.query.gradeId,callback:function(t){e.$set(e.query,"gradeId",t)},expression:"query.gradeId"}},e._l(e.gradeList,function(e){return n("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),n("div",{staticClass:"item"},[n("span",{staticClass:"text"},[e._v("月份")]),n("el-date-picker",{staticClass:"input",attrs:{"value-format":"yyyy-MM-dd 00:00:00",type:"month",clearable:""},on:{change:e.onMonthChange},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}})],1),n("div",{staticClass:"item"},[n("span",{staticClass:"text"},[e._v("周")]),n("el-select",{model:{value:e.query.weekId,callback:function(t){e.$set(e.query,"weekId",t)},expression:"query.weekId"}},e._l(e.weekList,function(e,t){return n("el-option",{key:t,attrs:{label:e.weekDesc,value:e.id}})}))],1)]),n("div",{staticClass:"table-box"},[n("div",{domProps:{innerHTML:e._s(e.tableHTML)}})])]),n("el-dialog",{staticClass:"dialog",attrs:{visible:e.dialogVisible,width:"500px",lazy:"",title:"导入检查结果"},on:{"update:visible":function(t){e.dialogVisible=t}}},[n("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"90px",model:e.submit,rules:e.rules}},[n("el-form-item",{attrs:{label:"年级",prop:"gradeId"}},[n("el-select",{model:{value:e.submit.gradeId,callback:function(t){e.$set(e.submit,"gradeId",t)},expression:"submit.gradeId"}},e._l(e.gradeList,function(e,t){return n("el-option",{key:t,attrs:{label:e.name,value:e.id}})}))],1),n("el-form-item",{attrs:{label:"周",prop:"weekId"}},[n("el-select",{model:{value:e.submit.weekId,callback:function(t){e.$set(e.submit,"weekId",t)},expression:"submit.weekId"}},e._l(e.curTermWeekList,function(e,t){return n("el-option",{key:t,attrs:{label:e.weekDesc,value:e.id}})}))],1)],1),n("import-excel",{attrs:{type:"卫生检查导入模板"},on:{"btn-click":e.onUploadBtnClick,change:e.onFileChange}})],1)],1)},r=[],i=(n("6d67"),n("96cf"),n("1da1")),s=n("c8e7"),u={mixins:[s["a"].$exportDetail,s["a"].$spliceHTML],data:function(){return{nav:[{name:"卫生检查",path:""}],gradeList:[],weekList:[],curTermWeekList:[],month:(new Date).$Format("yyyy-MM-dd 00:00:00"),query:{gradeId:null,weekId:null},tableHTML:"",dialogVisible:!1,rules:{gradeId:{required:!0,message:"请选择年级",trigger:"change"},weekId:{required:!0,message:"请选择周",trigger:"change"}},submit:{gradeId:null,weekId:null}}},methods:{getGradeList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/grade/queryGradeList.do"});case 2:this.gradeList=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getWeekList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/school/queryMonthWeekList.do",query:{queryDate:this.month}});case 2:this.weekList=e.sent;case 3:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getCurTermWeekList:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$ajax({url:"/school/querySchoolTermWeekListWithCurrentTerm.do"});case 2:t=e.sent,this.curTermWeekList=t.map(function(e){return{id:e.id,weekDesc:e.weekDesc,startDate:e.startDate,endDate:e.endDate}});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),getDetail:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){var t;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.query.weekId){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,this.$ajax({url:"/assessSanitation/queryAssessSanitationList.do",el:".table-box",query:this.query});case 4:t=e.sent,this.tableHTML=this.$spliceHTML(t);case 6:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),onGradeChange:function(){this.query.weekId=null},onMonthChange:function(){this.query.weekId=null,this.getWeekList()},doImport:function(){this.submit.gradeId=this.query.gradeId,this.dialogVisible=!0},onUploadBtnClick:function(e){this.$refs.form.validate(function(t){t||e.preventDefault()})},onFileChange:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(t){var n,a,r,i,s,u;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=t.target.files,0!==n.length){e.next=3;break}return e.abrupt("return");case 3:return a=n[0],r=new FormData,r.append("file",a),i=this.submit,r.append("gradeId",i.gradeId),r.append("weekId",i.weekId),s={url:"/import/importAssessSanitation.do",query:r,el:".upload"},e.prev=10,e.next=13,this.$ajax(s);case 13:this.$message.success("上传成功"),this.dialogVisible=!1,this.query.gradeId=this.submit.gradeId,this.query.weekId=this.submit.weekId,this.getDetail(),e.next=22;break;case 20:e.prev=20,e.t0=e["catch"](10);case 22:u=document.getElementById("file-input"),u.value=null;case 24:case"end":return e.stop()}},e,this,[[10,20]])}));return function(t){return e.apply(this,arguments)}}()},mounted:function(){var e=Object(i["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.getGradeList();case 2:return this.query.gradeId=this.gradeList[0].id,e.next=5,this.getWeekList();case 5:this.query.weekId=this.weekList[0].id,this.getDetail(),this.getCurTermWeekList();case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},l=u,o=(n("69f7"),n("2877")),c=Object(o["a"])(l,a,r,!1,null,"04f5c18a",null);c.options.__file="Index.vue";t["default"]=c.exports},"69f7":function(e,t,n){"use strict";var a=n("a955"),r=n.n(a);r.a},a955:function(e,t,n){},c8e7:function(e,t,n){"use strict";n("a481");t["a"]={$exportDetail:{methods:{$exportDetail:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.table.query,n="?";for(var a in t)t[a]&&"pageNo"!==a&&"pageSize"!==a&&(n+="".concat(a,"=").concat(t[a],"&"));window.open(this.$conf.API_PATH+e+n.substr(0,n.length-1))}}},$spliceHTML:{methods:{$spliceHTML:function(e){return e=e.replace('<html><head><META http-equiv="Content-Type" content="text/html; charset=UTF-8">',""),e=e.replace("</head>",""),e=e.replace("</body></html>",""),e=e.replace(/<h2>(.*)<\/h2>/,""),e}}}}}}]);
//# sourceMappingURL=chunk-56db9dd0.166fb5eb.js.map