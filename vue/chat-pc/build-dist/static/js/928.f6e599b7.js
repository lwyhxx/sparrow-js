"use strict";(self["webpackChunkchat_pc"]=self["webpackChunkchat_pc"]||[]).push([[928],{928:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}});var s=function(){var e=this,t=e._self._c;return t("div",{},[t("div",{staticClass:"top-part"},e._l(e.menuList,(function(i){return t("div",{key:i.id,staticClass:"select-item"},[t("i",{staticClass:"iconfont",class:i.iconName}),t("span",{on:{click:function(t){return e.switchContent(i)}}},[e._v(e._s(i.title))])])})),0),t("div",{staticClass:"content"},[t("router-view")],1),t("el-dialog",{attrs:{visible:e.dialogFormVisible,title:"添加好友"},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[t("el-form",[t("el-form-item",{attrs:{"label-width":e.formLabelWidth,label:"请输入手机号",tabindex:"-1"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),t("el-button",{on:{click:e.searchFriend}},[e._v("查找")])],1),e.user?t("div",[t("div",{staticClass:"wrap"},[t("div",{staticClass:"wrap_name"},[e._v(e._s(e.user.userName))]),t("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:e.addFriend}},[e._v("确认申请")])],1)]):e._e()],1)],1)],1)},a=[],n=(i(7658),i(4804)),o={data(){return{menuList:[{id:1,title:"添加朋友",iconName:"icon-add-user",pathName:"add-friend"},{id:2,title:"新的朋友",iconName:"icon-user",pathName:"new-friend"},{id:3,title:"我的群聊",iconName:"icon-qun",pathName:"qun"}],phone:"",user:null,dialogFormVisible:!1,formLabelWidth:"120px"}},methods:{async searchFriend(){if(this.user=null,11===this.phone.length){var e=/^1[3|4|5|7|8][0-9]{9}$/;if(!e.test(this.phone))return this.$message("请输入正确的手机号"),void(this.dialogFormVisible=!1);await n.W.getUserByPhone(this.phone).then((e=>{200!=e.code&&(this.$message(e.msg),this.dialogFormVisible=!0),console.log(e),e.data.userId!=this.$getUserId()?this.user=e.data:(this.$message("不能向自己发出申请"),this.dialogFormVisible=!0)})).catch((e=>{console.log(e)}))}else this.$message("请输入正确的手机号")},addFriend(){n.W.addFriendById(this.user.userId).then((e=>{200===e.code?this.$message("提交申请成功"):this.$message(e.msg)})).catch((e=>{console.log(e)}))},switchContent(e){1!==e.id?this.$router.push({name:e.pathName}):this.dialogFormVisible=!0}}},l=o,r=i(1001),c=(0,r.Z)(l,s,a,!1,null,"30dc7354",null),d=c.exports}}]);
//# sourceMappingURL=928.f6e599b7.js.map