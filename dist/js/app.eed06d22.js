(function(t){function e(e){for(var s,o,a=e[0],r=e[1],c=e[2],_=0,d=[];_<a.length;_++)o=a[_],Object.prototype.hasOwnProperty.call(l,o)&&l[o]&&d.push(l[o][0]),l[o]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,e=0;e<n.length;e++){for(var i=n[e],s=!0,a=1;a<i.length;a++){var r=i[a];0!==l[r]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},l={app:0},n=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],r=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var u=r;n.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"0613":function(t,e,i){"use strict";i.r(e);var s=i("2b0e"),l=i("2f62"),n={namespaced:!0,state:{scroll_current_position:0,scroll_anim_to_pos:0},mutations:{updateScrollAnimToPosition:function(t,e){var i=e.delta;t.scroll_anim_to_pos+i<0?t.scroll_anim_to_pos=0:t.scroll_anim_to_pos+i>document.body.scrollHeight-window.innerHeight?t.scroll_anim_to_pos=document.body.scrollHeight-window.innerHeight:t.scroll_anim_to_pos+i>=0&&t.scroll_anim_to_pos+i<=document.body.scrollHeight-window.innerHeight&&(t.scroll_anim_to_pos+=i)},scrollToPosition:function(t,e){var i=e.position;console.log(i,document.body.scrollHeight-window.innerHeight),i<0?t.scroll_anim_to_pos=0:i>document.body.scrollHeight-window.innerHeight?t.scroll_anim_to_pos=document.body.scrollHeight-window.innerHeight:i>=0&&i<=document.body.scrollHeight-window.innerHeight&&(t.scroll_anim_to_pos=i)}},actions:{setUpEventListeners:function(t){window.addEventListener("wheel",(function(e){t.commit("updateScrollAnimToPosition",{delta:e.deltaY})}))},setUp:function(t){t.dispatch("setUpEventListeners");var e=function e(){t.state.scroll_current_position+=(t.state.scroll_anim_to_pos-t.state.scroll_current_position)/20,window.scrollTo({top:t.state.scroll_current_position}),window.requestAnimationFrame(e)};e()}}},o=n;s["default"].use(l["a"]);e["default"]=new l["a"].Store({state:{},mutations:{},actions:{},modules:{scroll:o}})},"5c0b":function(t,e,i){"use strict";i("9c0c")},"8d50":function(t,e,i){t.exports=i.p+"img/main-arrows.a3ac9672.svg"},"9c0c":function(t,e,i){},cd49:function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},n=[],o=(i("5c0b"),i("2877")),a={},r=Object(o["a"])(a,l,n,!1,null,null,null),c=r.exports,u=i("8c4f"),_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home"},[i("Header"),i("WelcomeScreen"),t._l(t.skills_filling,(function(t,e){return i("Skills",{key:e,attrs:{filling:t}})})),i("Skills"),i("Contacts"),i("Scroll")],2)},d=[],f=i("d4ec"),v=i("bee2"),p=i("262e"),m=i("2caf"),h=i("9ab4"),g=i("1b40"),b=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"scroll"},[i("div",{ref:"controller",staticClass:"scroll__controller",style:{height:t.controller_height+"px",top:t.controller_position+"px"}})])},w=[],k=i("ed09"),y=Object(k["b"])({setup:function(){var t=i("0613").default,e=Object(k["d"])(0),s=Object(k["d"])(0),l=Object(k["d"])(null),n={prev_pos:0,current_pos:0,active:!1,current_delta:0},o=function(){var e=l.value;e.onmousedown=function(t){n.prev_pos=t.clientY,n.current_pos=t.clientY,n.active=!0},window.onmouseup=function(t){n.prev_pos=0,n.current_pos=0,n.active=!1},window.onmousemove=function(e){if(n.active){n.prev_pos=n.current_pos,n.current_pos=e.clientY;var i=(n.current_pos-n.prev_pos)/window.innerHeight*document.body.scrollHeight;t.commit("scroll/updateScrollAnimToPosition",{delta:i})}}};Object(k["c"])((function(){o()}));var a=function(){n.current_delta+=(1+(n.current_pos-n.prev_pos)/window.innerHeight*20-n.current_delta)/40,e.value=window.innerHeight*(window.innerHeight/document.body.scrollHeight)*n.current_delta,s.value=(window.innerHeight-e.value)*(window.scrollY/(document.body.scrollHeight-window.innerHeight))},r=function t(){a(),window.requestAnimationFrame(t)};return r(),{controller_height:e,controller_position:s,controller:l}}}),C=y,O=Object(o["a"])(C,b,w,!1,null,null,null),S=O.exports,H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"header"},[i("div",{staticClass:"header__inner"},[i("div",{staticClass:"header__language-switcher"},[t._e()],2),i("div",{staticClass:"header__contacts-btn",on:{click:t.scrollToContacts}},[i("div",{staticClass:"header__contacts-btn-bg-line_1"}),i("div",{staticClass:"header__contacts-btn-bg-line_2"}),i("div",{staticClass:"header__contacts-btn-bg-line_3"}),t._v(" CONTACTS ")])])])},j=[],T=function(t){Object(p["a"])(i,t);var e=Object(m["a"])(i);function i(){return Object(f["a"])(this,i),e.apply(this,arguments)}return Object(v["a"])(i,[{key:"scrollToContacts",value:function(){console.log(document.body.scrollHeight-window.innerHeight),this.$store.commit("scroll/scrollToPosition",{position:document.body.scrollHeight-window.innerHeight})}}]),i}(g["c"]);T=Object(h["a"])([g["a"]],T);var E=T,x=E,A=Object(o["a"])(x,H,j,!1,null,null,null),F=A.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"welcome-screen"},[s("div",{staticClass:"welcome-screen__inner"},[s("div",{staticClass:"welcome-screen__photo"},[s("div",{staticClass:"welcome-screen__photo-title"},[t._v(" EDWARD PRYKHOZHAY "),s("div",{staticClass:"welcome-screen__photo-title-underline"})]),s("img",{staticClass:"welcome-screen__photo-photo",attrs:{src:i("ff08"),alt:""}})]),s("div",{staticClass:"welcome-screen__additional"},[s("img",{staticClass:"welcome-screen__additional-arrows",attrs:{src:i("8d50"),alt:""}}),s("div",{staticClass:"welcome-screen__additional-title"},[s("span",[t._v("MIDDLE")]),t._v(" FRONT-END DEVELOPER ")])]),s("div",{staticClass:"welcome-screen__mouse-navigation"})])])}],I={},$=Object(o["a"])(I,M,P,!1,null,null,null),R=$.exports,L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.filling?i("div",{ref:"skill",staticClass:"skills"},[i("div",{ref:"skillInner",staticClass:"skills__inner"},[i("div",{ref:"skillNavigation",staticClass:"skills__navigation",class:{skills__navigation_active:t.skill_navigation_active},style:{transform:"translateY(calc(-50% + "+this.skill_navigation_bias+"px))"}},[i("h1",{staticClass:"skills__navigation-title"},[t._v(t._s(t.filling.title))]),t._l(t.skills,(function(e,s){return i("h2",{key:e.id,ref:"skillNavItems",refInFor:!0,staticClass:"skills__navigation-subtitle",class:{"skills__navigation-subtitle_active":t.active_skill_view==s},on:{click:function(e){return t.scrollToSkill(s)}}},[i("div",{staticClass:"skills__navigation-subtitle-point",class:{"skills__navigation-subtitle-point_active":t.active_skill_view==s}}),t._v(" "+t._s(e.title)+" ")])}))],2),i("div",{staticClass:"skills__content"},t._l(t.skills,(function(e,s){return i("div",{key:e.id,ref:"skillItems",refInFor:!0,staticClass:"skills__item",class:{skills__item_active:t.active_skill_view==s&&t.skill_navigation_active}},[i("div",{staticClass:"skills__item-title skills__item-title_active"},[i("div",{staticClass:"skills__item-title-underline",style:{transform:"translateX("+(t.active_skill_view==s?e.underline.bias_x:0)+"px)",width:e.underline.width+"px",backgroundColor:e.underline.color}}),t._v(" "+t._s(e.title)+" "),e.tag?i("span",{domProps:{innerHTML:t._s(e.tag)}}):t._e()]),t._l(e.subskills,(function(e,s){return i("div",{key:e.id,staticClass:"skills__item-content"},[i("div",{staticClass:"skills__item-subtitle",style:{transform:"translateX("+e.bias_x+"px)",transitionDelay:.2+.1*s+"s"},domProps:{innerHTML:t._s(e.title)}})])}))],2)})),0)])]):t._e()},N=[],U=(i("d3b7"),i("159b"),i("d81d"),["#C100CE","#6A66DD","#78FFFF","#FFFFFF"]),Y=function(t){var e={id:Math.random(),underline:{width:0,bias_x:0,color:""},subskills:[]},i=Object.assign(e,t);return i.subskills.forEach((function(t){t.bias_x=0,t.id=Math.random()})),i},D=Y,G=function(t){Object(p["a"])(i,t);var e=Object(m["a"])(i);function i(){var t;return Object(f["a"])(this,i),t=e.apply(this,arguments),t.skill_navigation_bias=0,t.skill_navigation_active=!1,t.active_skill_view=null,t}return Object(v["a"])(i,[{key:"mounted",value:function(){var t=this;this.generateSkillState();var e=function e(){t.skills&&(t.countSkillNavigationBias(),t.updateSkillNavigationActiveItem(),window.requestAnimationFrame(e))};e()}},{key:"countSkillNavigationBias",value:function(){var t=this.$refs.skillNavItems,e=this.$refs.skillNavigation;if(null!==this.active_skill_view){var i=t[this.active_skill_view].offsetTop;this.skill_navigation_bias+=(e.offsetHeight/2-i-this.skill_navigation_bias)/20}}},{key:"updateSkillNavigationActiveItem",value:function(){var t=this.$refs.skillItems,e=this.$refs.skill,i=null;window.scrollY>e.offsetTop-window.innerHeight/2&&window.scrollY<e.offsetTop+e.offsetHeight-window.innerHeight/2?this.skill_navigation_active=!0:this.skill_navigation_active=!1,t.forEach((function(t,s){window.scrollY>t.offsetTop+e.offsetTop-window.innerHeight/2&&(i=s)})),this.active_skill_view=i}},{key:"scrollToSkill",value:function(t){var e=this.$refs.skillItems,i=this.$refs.skill,s=e[t].offsetTop+i.offsetTop-window.innerHeight/6;this.$store.commit("scroll/scrollToPosition",{position:s})}},{key:"generateSkillState",value:function(){var t=this;this.skills&&this.skills.forEach((function(e,i){e.underline.bias_x=80*(Math.random()*(i%2?1:-1)+.5),e.underline.width=200*(Math.random()+.5),e.underline.color=t.randomColor(),e.subskills.forEach((function(t,e){t.bias_x=Math.random()*(e%2?1:-1)*90}))}))}},{key:"randomColor",get:function(){return function(){return U[Math.floor(Math.random()*U.length)]}}},{key:"skills",get:function(){return!!this.filling&&this.filling.skills.map((function(t){return D(t)}))}}]),i}(g["c"]);Object(h["a"])([Object(g["b"])({type:Object})],G.prototype,"filling",void 0),G=Object(h["a"])([Object(g["a"])({})],G);var B=G,V=B,X=Object(o["a"])(V,L,N,!1,null,null,null),J=X.exports,W=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},q=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"contacts"},[s("img",{staticClass:"contacts__background",attrs:{src:i("cf1a"),alt:""}}),s("div",{staticClass:"contacts__list"},[s("span",{staticClass:"contacts__list-title"},[t._v("EMAIL:")]),s("a",{staticClass:"contacts__list-item",attrs:{href:"mailto:true.ed@icloud.com"}},[t._v(" true.ed@icloud.com "),s("span",{staticClass:"contacts__list-item-tip"},[t._v("priority")])]),s("a",{staticClass:"contacts__list-item",attrs:{href:"mailto:TRUE.A.E.P.O@Gmail.com"}},[t._v("TRUE.A.E.P.O@Gmail.com")]),s("span",{staticClass:"contacts__list-title"},[t._v("OTHER:")]),s("a",{staticClass:"contacts__list-item",attrs:{href:"https://www.linkedin.com/in/edward-prykhozhay/"}},[t._v("linkedin")]),s("a",{staticClass:"contacts__list-item",attrs:{href:"https://github.com/truedward/"}},[t._v("GITHUB")]),s("a",{staticClass:"contacts__list-item",attrs:{href:"https://t.me/trueed"}},[t._v(" TELEGRAM "),s("span",{staticClass:"contacts__list-item-tip"},[t._v("priority")])]),s("a",{staticClass:"contacts__list-item",attrs:{href:"https://www.instagram.com/true.ed/"}},[t._v("INSTAGRAM")])])])}],z={},K=Object(o["a"])(z,W,q,!1,null,null,null),Z=K.exports,Q=[{title:"WEB",skills:[{tag:"🙃",title:"HTML",subskills:[{title:"PUG"},{title:"JSX&TSX"},{title:"DOM"}]},{tag:"🤩",title:"CSS",subskills:[{title:"SCSS&SASS"},{title:"CSS Animations"},{title:"FlexBox"}]},{tag:"🤯",title:"JS",subskills:[{title:"TypeScript"},{title:"Lodash"},{title:"Async"},{title:"Axios"},{title:"Any animations in pure js"}]},{tag:"🤠",title:"VUE",subskills:[{title:"Router"},{title:"Class-Based components"},{title:"VUEX"},{title:"Vue best practice"},{title:"Vue with typescript"}]},{tag:"🥵",title:"React",subskills:[{title:"TSX Syntax"},{title:"React Component Lifecycle"},{title:"MobX"}]},{tag:"😃",title:"THREE JS",subskills:[{title:"Competent layout of a large number of loaders"},{title:"Linking scene state to store state"},{title:"Working with native animations"}]}]},{title:"OTHER",skills:[{tag:"🧐",title:"GIT",subskills:[{title:'File status "lifecycle"'},{title:"Init"},{title:"Merge"},{title:"Rebase"},{title:"Pull Request"},{title:"Fork"}]},{tag:"😏",title:"AFFINITY&FIGMA",subskills:[{title:"Create and read templates"},{title:"Base instruments"}]},{tag:"😍",title:"VS Code",subskills:[{title:"Source controll"},{title:"UI"},{title:"Vetur + Emmet"},{title:"Search instrument"}]},{tag:"(Hobbie)",title:"FLUTTER",subskills:[{title:"DART"},{title:"Async&Await 😇"},{title:"API integration with user interface"}]}]}],tt=Q,et=function(t){Object(p["a"])(i,t);var e=Object(m["a"])(i);function i(){var t;return Object(f["a"])(this,i),t=e.apply(this,arguments),t.skills_filling=tt,t}return Object(v["a"])(i,[{key:"mounted",value:function(){this.$store.dispatch("scroll/setUp")}}]),i}(g["c"]);et=Object(h["a"])([Object(g["a"])({components:{Header:F,WelcomeScreen:R,Skills:J,Contacts:Z,Scroll:S}})],et);var it=et,st=it,lt=Object(o["a"])(st,_,d,!1,null,null,null),nt=lt.exports;s["default"].use(u["a"]);var ot=[{path:"/",name:"Home",component:nt}],at=new u["a"]({routes:ot}),rt=at,ct=i("0613");s["default"].use(k["a"]),s["default"].config.productionTip=!1,new s["default"]({router:rt,store:ct["default"],render:function(t){return t(c)}}).$mount("#app")},cf1a:function(t,e,i){t.exports=i.p+"img/contacts-background.4486e965.svg"},ff08:function(t,e,i){t.exports=i.p+"img/my-face.7320e414.png"}});
//# sourceMappingURL=app.eed06d22.js.map