(function(t){function e(e){for(var a,s,o=e[0],l=e[1],c=e[2],u=0,d=[];u<o.length;u++)s=o[u],i[s]&&d.push(i[s][0]),i[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,c||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(a=!1)}a&&(r.splice(e--,1),t=l(l.s=n[0]))}return t}var a={},s={index:0},i={index:0},r=[];function o(t){return l.p+"public/js/"+({}[t]||t)+".js"}function l(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(t){var e=[],n={"chunk-3658b182":1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise(function(e,n){for(var a="public/css/"+({}[t]||t)+".css",i=l.p+a,r=document.getElementsByTagName("link"),o=0;o<r.length;o++){var c=r[o],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===a||u===i))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){c=d[o],u=c.getAttribute("data-href");if(u===a||u===i)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||i,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete s[t],p.parentNode.removeChild(p),n(r)},p.href=i;var v=document.getElementsByTagName("head")[0];v.appendChild(p)}).then(function(){s[t]=0}));var a=i[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise(function(e,n){a=i[t]=[e,n]});e.push(a[2]=r);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,l.nc&&u.setAttribute("nonce",l.nc),u.src=o(t),c=function(e){u.onerror=u.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+a+": "+s+")");r.type=a,r.request=s,n[1](r)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:u})},12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(e)},l.m=t,l.c=a,l.d=function(t,e,n){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)l.d(n,a,function(e){return t[e]}.bind(null,a));return n},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/",l.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var p=u;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"wrap"}},[n("TheHeader"),n("div",{staticClass:"container main-container",attrs:{id:"main-container"}},[n("router-view")],1),n("TheFooter")],1)},i=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar navbar-default topnav"},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-header"},[n("button",{staticClass:"navbar-toggle",attrs:{type:"button"},on:{click:t.toggleNav}},[n("span",{staticClass:"sr-only"},[t._v("Toggle navigation")]),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"}),n("span",{staticClass:"icon-bar"})]),n("router-link",{staticClass:"navbar-brand",attrs:{to:"/"}},[n("span",{staticClass:"title"},[t._v(t._s(t.logo.title))]),n("img",{attrs:{src:t.logo.src,alt:"logo.title"}})])],1),n("div",{class:["collapse","navbar-collapse",{in:t.showCollapsedNav}],attrs:{id:"top-navbar-collapse"}},[n("ul",{staticClass:"nav navbar-nav"},t._l(t.navList,function(e,a){return n("li",{key:e.id,class:{active:a===t.activeNavIndex}},[n("a",{attrs:{href:"#"},on:{click:function(e){return t.changeNavIndex(a)}}},[t._v(t._s(e))])])}),0),n("div",{staticClass:"navbar-right"},[n("TheEntry")],1)])])])},o=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-right"},[t.auth?n("ul",{staticClass:"nav navbar-nav github-login"},[n("li",[n("a",{directives:[{name:"dropdown",rawName:"v-dropdown"}],attrs:{href:"javascript:;"}},[t.user?n("span",[t.user.avatar?n("img",{staticClass:"avatar-topnav",attrs:{src:t.user.avatar}}):t._e(),t.user.name?n("span",[t._v(t._s(t.user.name))]):t._e()]):n("span",[t._v("佚名")]),n("span",{staticClass:"caret"})]),n("ul",{staticClass:"dropdown-menu"},[n("li",[n("router-link",{attrs:{to:"/users/1/edit"}},[n("i",{staticClass:"fa fa-cog text-md i-middle"}),t._v("\n            编辑资料\n          ")])],1),n("li",[n("a",{attrs:{href:"#"},on:{click:t.logout}},[n("i",{staticClass:"fa fa-sign-out text-md"}),t._v("退出")])])])])]):n("div",{staticClass:"nav navbar-nav github-login"},[n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/register"}},[n("i",{staticClass:"fa fa-user"}),t._v(" 注 册\n    ")]),n("router-link",{staticClass:"btn btn-default login-btn",attrs:{to:"/auth/login"}},[n("i",{staticClass:"fa fa-user"}),t._v(" 登 录\n    ")])],1)])},c=[],u=n("cebc"),d=n("2f62"),p={name:"TheEntry",computed:Object(u["a"])({},Object(d["b"])(["auth","user"])),methods:{logout:function(){var t=this;this.$swal({text:"你确定退出吗？",confirmButtonText:"退出"}).then(function(e){e.value&&t.$store.dispatch("logout")}),this.$store.dispatch("logout")}}},v=p,f=n("2877"),h=Object(f["a"])(v,l,c,!1,null,"2c7e7067",null),m=h.exports,g={name:"TheHeader",components:{TheEntry:m},data:function(){return{logo:{src:"".concat(this.uploadsUrl,"sites/ByvFbNlQYVwhvTyBgLdqitchoacDNznN.jpg"),title:"VuejsCaff"},navList:["社区","头条","问答","教程"],activeNavIndex:0,showCollapsedNav:!1}},beforeCreate:function(){this.uploadsUrl="https://vuejscaffcdn.phphub.org/uploads/"},methods:{changeNavIndex:function(t){this.activeNavIndex=t},toggleNav:function(){this.showCollapsedNav=!this.showCollapsedNav}}},b=g,y=(n("9ef4"),Object(f["a"])(b,r,o,!1,null,"27c5a927",null)),C=y.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row footer-top"},[n("div",{staticClass:"col-sm-5 col-lg-5"},[n("p",{staticClass:"padding-top-xsm"},[t._v(t._s(t.description))]),n("div",{staticClass:"text-md"},t._l(t.contacts,function(e){return n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],key:e.id,style:t.contactStyle,attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon})])}),0),n("br"),n("span",{domProps:{innerHTML:t._s(t.designer)}})]),n("div",{staticClass:"col-sm-6 col-lg-6 col-lg-offset-1"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.sponsor.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.sponsor.list,function(t){return n("li",{key:t.id},[n("a",{attrs:{href:t.link,target:"_blank"}},[n("img",{directives:[{name:"title",rawName:"v-title",value:t.title,expression:"item.title"}],staticClass:"footer-sponsor-link",attrs:{src:t.logo,alt:t.title,width:"98"}})])])}),0)]),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.statistics.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.statistics.list,function(e){return n("li",{key:e.id},[t._v(t._s(e.title)+": "+t._s(e.description))])}),0)]),n("div",{staticClass:"col-sm-4"},[n("h4",[t._v(t._s(t.other.title))]),n("ul",{staticClass:"list-unstyled"},t._l(t.other.list,function(e){return n("li",{key:e.id},[n("a",{directives:[{name:"title",rawName:"v-title",value:e.title,expression:"item.title"}],attrs:{href:e.link,target:"_blank"}},[n("i",{class:"fa fa-"+e.icon}),t._v(" "+t._s(e.title)+"\n                ")])])}),0)])])])])])])},_=[];function k(t,e){var n=x(),a=n.style;if(void 0===e)a.display="none";else{var s=t.getBoundingClientRect(),i=window.getComputedStyle(t,null),r=parseInt(i.getPropertyValue("padding-right"))||0,o=parseInt(i.getPropertyValue("padding-top"))||0;a.visibility="hidden",a.display="block",n.querySelector(".popover-content").textContent=e,a.left=s.left-n.offsetWidth/2+(t.offsetWidth-r)/2+"px",a.top=s.top-n.offsetHeight+o+"px",a.display="block",a.visibility="visible"}}function x(){var t=document.querySelector(".title-popover");if(!t){var e='\n        <div class="popover title-popover top fade in" style="position:fixed;">\n          <div class="arrow"></div>\n          <div class="popover-content"></div>\n        </div>\n      ',n=document.createRange().createContextualFragment(e);document.body.appendChild(n),t=document.querySelector(".title-popover")}return t}var E={bind:function(t,e,n){var a=["mouseenter","mouseleave","click"],s=function(n){"mouseenter"===n.type?k(t,e.value):k()};a.forEach(function(e){t.addEventListener(e,s,!1)}),t.destroy=function(){a.forEach(function(e){t.removeEventListener(e,s,!1)}),t.destroy=null}},unbind:function(t){t.destroy()}},S={name:"TheFooter",directives:{title:E},data:function(){return{description:"VuejsCaff 是一个 Vue.js 的知识社区",contacts:[{icon:"envelope",title:"反馈问题",link:"mailto:1502534146@qq.com"},{icon:"weibo",title:"站长微博",link:"https://weibo.com"},{icon:"weixin",title:"加我微信",link:"https://vuejscaff.com/contact"}],contactStyle:{paddingRight:"8px"},designer:'\n                <span style="font-size:0.9em">Designed by\n                <span style="color: #e27575;font-size: 14px;">❤</span>\n                <a href="https://github.com/nfreemason"target="_blank"style="color:inherit">Summer</a>\n                </span>\n            ',sponsor:{title:"赞助商",list:[{logo:"https://lccdn.phphub.org/uploads/banners/bQawWl3vT5dc2lYx5JZ7.png",title:"本站服务器由 UCloud 赞助",link:"http://www.ucloud.cn/?utm_source=zanzhu&utm_campaign=phphub&utm_medium=display&utm_content=yejiao&ytag=phphubyejiao"},{logo:"https://lccdn.phphub.org/uploads/banners/yGLIR0idW7zsInjsNmzr.png",title:"本站 CDN 服务由七牛赞助",link:"http://www.qiniu.com/?utm_source=phphub"},{logo:"https://lccdn.phphub.org/uploads/banners/XPtLlZmIN1cQbLuDFEON.png",title:"Composer 镜像赞助商",link:"https://www.upyun.com/"},{logo:"https://lccdn.phphub.org/uploads/banners/JpTCK6OKYBIrBIWdtob8.png",title:"订阅邮件赞助商：SendCloud",link:"http://www.sendcloud.net/"}]},statistics:{title:"统计信息",list:[{title:"社区会员",description:"88888"},{title:"话题数",description:"7397"},{title:"评论数",description:"39375"}]},other:{title:"其它信息",list:[{icon:"thumbs-up",title:"软件外包服务",link:"https://vuejscaff.com/contact"},{icon:"globe",title:"推荐网站",link:"https://vuejscaff.com/sites"}]}}}},j=S,T=(n("622e"),Object(f["a"])(j,w,_,!1,null,"f185a210",null)),N=T.exports,L={name:"App",components:{TheHeader:C,TheFooter:N}},O=L,I=(n("5c0b"),Object(f["a"])(O,s,i,!1,null,null,null)),P=I.exports,A=n("8c4f"),B=[{path:"/auth/register",name:"Register",component:function(){return n.e("chunk-3658b182").then(n.bind(null,"935e"))}},{path:"/",name:"Home",component:function(){return n.e("chunk-711b2eab").then(n.bind(null,"bb51"))}},{path:"*",redirect:"/"},{path:"/auth/login",name:"Login",component:function(){return n.e("chunk-8edc1036").then(n.bind(null,"5326"))}},{path:"/users/1/edit",name:"EditUsers",component:function(){return n.e("chunk-2d0a4f8d").then(n.bind(null,"095c"))}}];a["a"].use(A["a"]);var q=new A["a"]({mode:"history",linkExactActiveClass:"active",routes:B});q.beforeEach(function(t,e,n){var a=q.app.$options.store.state.auth;a&&-1!==t.path.indexOf("/auth/")?n("/"):n()});var U=q,$=n("e8ec");a["a"].use(d["a"]);var D={user:$["a"].getItem("user"),auth:$["a"].getItem("auth")},H={UPDATE_USER:function(t,e){t.user=e,$["a"].setItem("user",e)},UPDATE_AUTH:function(t,e){t.auth=e,$["a"].setItem("auth",e)}},F={login:function(t,e){var n=t.commit;e&&n("UPDATE_USER",e),n("UPDATE_AUTH",!0),U.push("/")},logout:function(t){var e=t.commit;e("UPDATE_AUTH",!1),U.push({name:"Home",params:{logout:!0}})}},R=new d["a"].Store({state:D,mutations:H,actions:F}),z=R,M=n("bc3a"),V=n.n(M);V.a.interceptors.request.use(function(t){return t},function(t){return Promise.reject(t)}),V.a.defaults.timeout=36e6,V.a.interceptors.response.use(function(t){return 403===t.data.code&&U.push({name:"login"}),t},function(t){return Promise.resolve(t.response)});var J=V.a,W=n("768b"),K=(n("ac6a"),n("ffc1"),n("7618"));function Q(t,e,n){n=n&&"object"===Object(K["a"])(n)?n:{};var a="string"===typeof t.value?t.value.trim():"",s=n,i=s.title,r=void 0===i?"该项":i,o=s.error,l="";if(e.required&&""===a)l="".concat(r,"不能为空");else if(n.target){var c=document.querySelector(n.target),u=c?c.value:null;u!==a&&(l="输入的".concat(r,"不匹配"))}else if(n.regex)try{n.regex.test(a)||(l="".concat(r,"格式不正确"))}catch(d){}l?Y(t,void 0===o?l:o):Y(t)}function Y(t,e){var n=t.parentElement,a=Z(t);void 0===e?(a.style.display="none",n.classList.remove("has-error")):(a.textContent=e,a.style.display="block",n.classList.add("has-error"))}function Z(t){var e=t.parentElement,n=e.querySelector(".help-block");if(!n){var a='<span class="help-block"></span>',s=document.createRange().createContextualFragment(a);e.appendChild(s),n=e.querySelector(".help-block")}return n}for(var G={bind:function(t,e,n){var a=e.value,s=e.arg,i=e.modifiers,r=-1!==["change","blur","input"].indexOf(s)?s:"change",o=function(){Y(t)},l=function(){Q(t,i,a)};t.addEventListener("input",o,!1),t.addEventListener(r,l,!1),t.destroy=function(){t.removeEventListener("input",o,!1),t.removeEventListener(r,l,!1),t.destroy=null}},inserted:function(t,e,n){var a=e.value,s=e.modifiers,i=t.closest("[data-validator-form]"),r=i?i.querySelector("[type=submit]"):null;if(r){var o=function(){Q(t,s,a);var e=i.querySelectorAll(".has-error");e.length?r.canSubmit=!1:r.canSubmit=!0};r.addEventListener("click",o,!1),t.destroySubmitBtn=function(){r.removeEventListener("click",o,!1),t.destroySubmitBtn=null}}},unbind:function(t){t.destroy(),t.destroySubmitBtn&&t.destroySubmitBtn()}},X={bind:function(t,e,n){var a=function(){t.parentElement.classList.toggle("open")},s=function(e){var n=e.target;n.isSameNode(t)||t.contains(n)||t.parentElement.classList.remove("open")};t.addEventListener("click",a,!1),document.addEventListener("click",s,!1),t.destroy=function(){t.removeEventListener("click",a,!1),document.removeEventListener("click",s,!1)}},unbind:function(t){t.destroy()}},tt={validator:G,dropdown:X},et=0,nt=Object.entries(tt);et<nt.length;et++){var at=Object(W["a"])(nt[et],2),st=at[0],it=at[1];a["a"].directive(st,it)}var rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],class:"alert alert-"+t.type+" alert-dismissible"},[n("button",{staticClass:"close",attrs:{type:"button"},on:{click:t.close}},[n("span",[t._v("×")])]),t._v("\n  "+t._s(t.msg)+"\n")])},ot=[],lt={name:"Message",props:{show:{type:Boolean,default:!1},type:{type:String,default:"success"},msg:{type:String,default:""}},watch:{show:function(t){var e=this;t&&this.$nextTick(function(){e.$el.scrollIntoView(!0)})}},methods:{close:function(){this.$emit("update:show",!1)}}},ct=lt,ut=Object(f["a"])(ct,rt,ot,!1,null,null,null),dt=ut.exports;a["a"].component("Message",dt);var pt=n("3d20"),vt=n.n(pt),ft={install:function(t){vt.a.setDefaults({type:"warning",showCancelButton:!0,confirmButtonColor:"rgb(140,212,245)",cancelButtonColor:"rgb(193,193,193)"}),t.swal=vt.a,t.prototype.$swal=vt.a}};a["a"].use(ft),a["a"].prototype.$axios=J,a["a"].config.productionTip=!1,new a["a"]({router:U,store:z,render:function(t){return t(P)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("5e27"),s=n.n(a);s.a},"5e27":function(t,e,n){},"622e":function(t,e,n){"use strict";var a=n("e2b2"),s=n.n(a);s.a},"9ef4":function(t,e,n){"use strict";var a=n("a4d0"),s=n.n(a);s.a},a4d0:function(t,e,n){},e2b2:function(t,e,n){},e8ec:function(t,e,n){"use strict";var a=localStorage;e["a"]={setItem:function(t,e){a.setItem(t,JSON.stringify(e))},getItem:function(t){try{return JSON.parse(a.getItem(t))}catch(e){return null}},removeItem:function(t){a.removeItem(t)}}}});
//# sourceMappingURL=index.js.map