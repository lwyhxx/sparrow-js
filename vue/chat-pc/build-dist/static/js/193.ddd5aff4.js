"use strict";(self["webpackChunkchat_pc"]=self["webpackChunkchat_pc"]||[]).push([[193],{4073:function(t,a,s){s.d(a,{Z:function(){return u}});var e=function(){var t=this,a=t._self._c;return a("div",t._l(t.contactList,(function(s){return a("div",{key:s.id,staticClass:"user-item"},[a("div",{staticClass:"user-info"},[a("div",{staticClass:"avatar"},[a("img",{attrs:{src:s.avatar,alt:""}}),a("img",{staticClass:"img-flag",attrs:{src:s.flagUrl,alt:""}})]),a("div",{staticClass:"user-name"},[a("span"),a("span",[t._v(t._s(s.userName))])])]),a("div",{staticClass:"operate"},[!1===t.platform?a("button",{on:{click:function(a){return t.remove(s)}}},[t._v(" "+t._s("删除好友")+" ")]):t._e(),a("button",{staticClass:"chat",on:{click:function(a){return t.chat(s)}}},[t._v("聊一下")])])])})),0)},n=[],r={props:{contactList:{type:Array,default:()=>[]},platform:{type:Boolean,default:!1}},data(){return{}},methods:{remove(t){this.$emit("remove",t)},chat(t){this.$emit("chat",t)}}},i=r,c=s(1001),o=(0,c.Z)(i,e,n,!1,null,"755bbb34",null),u=o.exports},6193:function(t,a,s){s.r(a),s.d(a,{default:function(){return f}});var e=function(){var t=this,a=t._self._c;return a("div",{},[a("ContactItem",{attrs:{"contact-list":t.friendList,platform:!0},on:{chat:t.onChat}})],1)},n=[],r=(s(7658),s(4073)),i=s(6225),c={components:{ContactItem:r.Z},data(){return{friendList:this.$platformServers}},methods:{onRemove(t){console.log(t)},onChat(t){var a=i.u.get121Session(t,this);this.$router.push({name:"session",query:{key:a}})}}},o=c,u=s(1001),l=(0,u.Z)(o,e,n,!1,null,"d103cbb2",null),f=l.exports}}]);
//# sourceMappingURL=193.ddd5aff4.js.map