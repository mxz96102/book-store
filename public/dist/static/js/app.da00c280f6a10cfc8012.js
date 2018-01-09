webpackJsonp([1],{"7zck":function(t,e){},"IAs+":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("3EgV"),i=a.n(r),o=(a("7zck"),{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{id:"app"}},[a("v-toolbar",{attrs:{dark:"",color:"primary"}},[a("v-toolbar-title",[t._v("Book Store")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-side-icon",{staticClass:"hidden-md-and-up"}),t._v(" "),a("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.$router.push("/")}}},[t._v("Books")]),t._v(" "),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.$router.push("/order")}}},[t._v("Order")]),t._v(" "),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.$router.push("/login")}}},[t._v("Login")]),t._v(" "),a("v-btn",{attrs:{flat:""},nativeOn:{click:function(e){t.$router.push("/register")}}},[t._v("Register")])],1)],1),t._v(" "),a("router-view")],1)},staticRenderFns:[]}),s=a("VU/8")({name:"app"},o,!1,function(t){a("rhPD")},null,null).exports,l=a("/ocq"),c=a("mtWM"),v=a.n(c),d={name:"index",data:function(){var t=this;return v.a.get("/api/book").then(function(e){e&&(t.items=e.data.data)}),{headers:[{text:"书号",value:"BookNo"},{text:"书名",value:"Name"},{text:"价格",value:"Price"},{text:"出版社",value:"Publish"}],items:[],dialog:!1,info:{}}},methods:{openIt:function(t){var e=this;v.a.get("/api/book/detail/"+t).then(function(t){t&&(e.info=t.data,e.dialog=!0)})}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index"},[a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.items,"hide-actions":""},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.BookNo))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[a("v-btn",{attrs:{flat:""},nativeOn:{click:function(a){t.openIt(e.item.BookNo)}}},[t._v(t._s(e.item.Name))])],1),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.Price))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.Publish))])]}}])}),t._v(" "),a("v-btn",{attrs:{color:"primary"},nativeOn:{click:function(e){t.$router.push("/add/book")}}},[t._v("添加书籍")]),t._v(" "),a("v-dialog",{model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",{staticClass:"text-xs-left",attrs:{"max-width":"350"}},[a("v-card-title",{staticClass:"headline"},[t._v(t._s(t.info.name))]),t._v(" "),a("v-card-text",[t._v("价格：¥"+t._s(t.info.price))]),t._v(" "),a("v-card-text",[t._v("出版社："+t._s(t.info.publish))]),t._v(" "),a("v-card-text",[t._v("作者："),t._l(t.info.author,function(e){return a("v-chip",[t._v(t._s(e))])})],2),t._v(" "),a("v-card-text",[t._v("关键词："),t._l(t.info.keyword,function(e){return a("v-chip",[t._v(t._s(e))])})],2),t._v(" "),a("v-card-text",[t._v("库存："+t._s(t.info.inventory))]),t._v(" "),a("v-card-text",[t._v("供货商："),t._l(t.info.provider,function(e){return a("v-chip",[t._v(t._s(e.ProviderName)+" ("+t._s(e.Inventory)+")")])})],2),t._v(" "),a("v-card-actions",[a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("关闭")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.$router.push("/pvd/book/"+t.info.id)}}},[t._v("供货书籍")]),t._v(" "),a("v-btn",{attrs:{color:"green darken-1",flat:"flat"},nativeOn:{click:function(e){t.dialog=!1}}},[t._v("购买")])],1)],1)],1)],1)},staticRenderFns:[]},f=a("VU/8")(d,u,!1,function(t){a("u16Y")},"data-v-5f2b7f59",null).exports,p={name:"Login",data:function(){return{username:"",password:""}},methods:{clear:function(){this.username="",this.password=""},submit:function(){var t=this;v.a.post("/api/user/login",{username:this.username,password:this.password}).then(function(e){e?e.data.done?(alert("登陆成功"),t.$router.push("/")):alert(e.data.message):alert("登陆失败请重试")})}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"login",attrs:{"max-width":"300"}},[a("v-card-title",[t._v("登陆")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"用户名",counter:10,required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("v-text-field",{attrs:{label:"密码",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("v-btn",{on:{click:t.submit}},[t._v("\n      登陆\n    ")])],1)],1)},staticRenderFns:[]},_=a("VU/8")(p,m,!1,function(t){a("wIir")},"data-v-52fd7802",null).exports,h={components:{VCardTitle:a("gfgR").a},name:"Register",data:function(){return{username:"",password:""}},methods:{clear:function(){this.username="",this.password=""},submit:function(){var t=this;v.a.post("/api/user/register",{username:this.username,password:this.password}).then(function(e){e?e.data.done?(alert("注册成功"),t.$router.push("/login")):alert(e.data.message):alert("注册失败请重试")})}}},b={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"register",attrs:{"max-width":"300"}},[a("v-card-title",[t._v("注册")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"用户名",counter:10,required:""},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}}),t._v(" "),a("v-text-field",{attrs:{label:"密码",type:"password",required:""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),a("v-btn",{on:{click:t.submit}},[t._v("\n      注册\n    ")])],1)],1)},staticRenderFns:[]},k=a("VU/8")(h,b,!1,function(t){a("fYRi")},"data-v-e35af4a2",null).exports,x=a("mvHQ"),g=a.n(x),w={name:"Login",data:function(){return{name:"",price:0,mainbook:0,publish:"",author:"",keyword:""}},methods:{submit:function(){var t=this;v.a.post("/api/book",{name:this.name,price:this.price,mainbook:this.mainbook,publish:this.publish,author:g()(this.author.split(";")),keyword:g()(this.keyword.split(";"))}).then(function(e){e?e.data.done?(alert("添加成功"),t.$router.push("/")):alert(e.data.message):alert("添加失败请重试")})}}},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{ref:"form",staticClass:"login",attrs:{"max-width":"300"}},[a("v-card-title",[t._v("添加书籍")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"书名",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),a("v-text-field",{attrs:{label:"价格",required:""},model:{value:t.price,callback:function(e){t.price=e},expression:"price"}}),t._v(" "),a("v-text-field",{attrs:{label:"主书籍编号",required:""},model:{value:t.mainbook,callback:function(e){t.mainbook=e},expression:"mainbook"}}),t._v(" "),a("v-text-field",{attrs:{label:"出版商",required:""},model:{value:t.publish,callback:function(e){t.publish=e},expression:"publish"}}),t._v(" "),a("v-text-field",{attrs:{label:"作者（分号隔开）",required:""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}}),t._v(" "),a("v-text-field",{attrs:{label:"关键词（分号隔开）",required:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),t._v(" "),a("v-btn",{on:{click:t.submit}},[t._v("\n      添加\n    ")])],1)],1)},staticRenderFns:[]},$=a("VU/8")(w,y,!1,function(t){a("IAs+")},"data-v-d8d98890",null).exports,C={name:"Login",data:function(){return{inventory:0}},methods:{submit:function(){var t=this;v.a.post("/api/pvd/book",{inventory:this.inventory,bookNo:this.$route.params.id}).then(function(e){e?e.data.done?(alert("添加成功"),t.$router.push("/")):alert(e.data.message):alert("添加失败请重试")})}}},q={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{ref:"form",staticClass:"pvdbook",attrs:{"max-width":"300"}},[a("v-card-title",[t._v("添加书籍")]),t._v(" "),a("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"供货量",required:""},model:{value:t.inventory,callback:function(e){t.inventory=e},expression:"inventory"}}),t._v(" "),a("v-btn",{on:{click:t.submit}},[t._v("\n      添加\n    ")])],1)],1)},staticRenderFns:[]},R=a("VU/8")(C,q,!1,function(t){a("tgj1")},"data-v-b8e663ce",null).exports;n.a.use(l.a);var O=new l.a({routes:[{path:"/",name:"Index",component:f},{path:"/login",name:"Login",component:_},{path:"/register",name:"Register",component:k},{path:"/add/book",name:"AddBook",component:$},{path:"/pvd/book/:id",name:"PvdBook",component:R}]});n.a.config.productionTip=!1,n.a.use(i.a),new n.a({el:"#app",router:O,template:"<App/>",components:{App:s}})},fYRi:function(t,e){},rhPD:function(t,e){},tgj1:function(t,e){},u16Y:function(t,e){},wIir:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.da00c280f6a10cfc8012.js.map