(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cd70a3c0"],{"107c":function(t,e,a){"use strict";var r=a("81df"),i=a.n(r);i.a},"81df":function(t,e,a){},"8b5d":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"table-box"},[a("div",{staticClass:"btn-main btn-add mb20",on:{click:function(e){t.showDialog("top")}}},[t._v("新建顶级组织机构")]),a("table",{staticClass:"table",attrs:{cellspacing:"0"}},[t._m(0),t._l(t.table.list,function(e,r){return a("tr",{key:r},[a("td",[a("span",{staticClass:"el-icon-caret-bottom",style:{marginLeft:30*e.tier+"px"}}),t._v("\n          "+t._s(e.orgName)+"\n        ")]),a("td",{attrs:{title:e.orgDesc}},[t._v(t._s(e.orgDesc))]),a("td",[a("span",{staticClass:"oper",on:{click:function(a){t.showDialog("childer",e)}}},[t._v("添加下级组织")]),a("span",{staticClass:"col"}),a("span",{staticClass:"oper",on:{click:function(a){t.showDialog("edit",e)}}},[t._v("修改")]),a("span",{staticClass:"col"}),a("span",{staticClass:"oper",on:{click:function(a){t.remove(e)}}},[t._v("删除")])])])})],2)]),a("el-dialog",{staticClass:"dialog",attrs:{modal:!1,"close-on-click-modal":!1,center:"",title:t.title,visible:t.dialog,width:"420px"},on:{"update:visible":function(e){t.dialog=e}}},[a("el-form",{ref:"form",staticClass:"form",attrs:{"label-width":"70px","label-position":"left"}},[a("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"添加下级组织"===t.title,expression:"title === '添加下级组织'"}],attrs:{prop:"oldPassword",label:"上级组织"}},[a("el-input",{attrs:{value:t.org.query.parentName,disabled:""}})],1),a("el-form-item",{attrs:{prop:"oldPassword",label:"名称"}},[a("el-input",{attrs:{placeholder:"请输入名称"},model:{value:t.org.query.orgName,callback:function(e){t.$set(t.org.query,"orgName",e)},expression:"org.query.orgName"}})],1),a("el-form-item",{attrs:{prop:"oldPassword",label:"说明"}},[a("el-input",{attrs:{type:"textarea",rows:7,placeholder:"请输入说明"},model:{value:t.org.query.orgDesc,callback:function(e){t.$set(t.org.query,"orgDesc",e)},expression:"org.query.orgDesc"}})],1)],1),a("div",{staticClass:"btns mt25"},[a("div",{staticClass:"btn-main mr15",on:{click:function(e){t.addEdit()}}},[t._v("提交")]),a("div",{staticClass:"btn-main",on:{click:function(e){t.dialog=!1}}},[t._v("关闭")])])],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("tr",[a("th",{attrs:{width:"32%"}},[t._v("组织架构")]),a("th",{attrs:{width:"49%"}},[t._v("说明")]),a("th",{attrs:{width:"19%"}},[t._v("操作")])])}],n=(a("ac6a"),a("f3e2"),a("96cf"),a("1da1")),s={name:"Info",data:function(){return{title:"新建顶级组织机构",table:{list:[],el:".table",url:"/organization/all"},org:{url:"/organization/add",query:{orgName:"",orgDesc:"",parentId:""}},dialog:!1,orgList:[],data:[{label:"中铁十五局项目经理管理部",children:[{label:"二级 1-1",children:[{label:"三级 1-1-1"}]}]},{label:"一级 2",children:[{label:"二级 2-1",children:[{label:"三级 2-1-1"}]},{label:"二级 2-2",children:[{label:"三级 2-2-1"}]}]},{label:"一级 3",children:[{label:"二级 3-1",children:[{label:"三级 3-1-1"}]},{label:"二级 3-2",children:[{label:"三级 3-2-1"}]}]}],defaultProps:{children:"children",label:"label"}}},mounted:function(){this.getOrgList(),this.getData()},methods:{handleNodeClick:function(t){console.log(t)},showDialog:function(t,e){this.dialog=!0,this.org.query={orgName:e?e.orgName:"",parentName:e?e.orgName:"",orgDesc:e?e.orgDesc:"",parentId:e?e.id:"",id:e&&e.id?e.id:""},"top"===t?this.title="新建顶级组织机构":"edit"===t?this.title="修改组织机构":(this.title="添加下级组织",this.org.query.orgName="",this.org.query.orgDesc="")},remove:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$confirm("删除后数据将无法恢复，是否确认删除？","提示",{confirmButtonText:"确认",cancelButtonText:"取消",type:"warning"});case 2:return t.next=4,this.$ajax({url:"/organization/delete",query:{id:e.id}});case 4:this.getData(),this.$remind("删除成功");case 6:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),getOrgList:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$ajax({url:"/organization/all"});case 2:t.sent;case 3:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),getData:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a,r,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return i=function(t){t.forEach(function(t){a.table.list.push({orgName:t.orgName,orgDesc:t.orgDesc,id:t.id,tier:r}),t.childOrgList.length&&(i(t.childOrgList,++r),r--)})},t.next=3,this.$ajax(this.table);case 3:e=t.sent,this.table.list=[],a=this,r=0,i(e.childOrgList),this.table.list=this.table.list.splice(0,this.table.list.length);case 9:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),addEdit:function(){var t=Object(n["a"])(regeneratorRuntime.mark(function t(){var e,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e="",a=JSON.parse(JSON.stringify(this.org)),a.query.parentName=void 0,"修改组织机构"===this.title?(e="修改成功",a.url="/organization/update",a.query.parentId=void 0):(e="新建成功",a.url="/organization/add",a.query.id=void 0),t.next=6,this.$ajax(a);case 6:t.sent,this.dialog=!1,this.getData(),this.$remind(e);case 10:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},l=s,o=(a("107c"),a("2877")),c=Object(o["a"])(l,r,i,!1,null,"37024fea",null);c.options.__file="Org.vue";e["default"]=c.exports}}]);
//# sourceMappingURL=chunk-cd70a3c0.d82c283c.js.map