(function(e){function a(a){for(var s,i,o=a[0],l=a[1],m=a[2],d=0,c=[];d<o.length;d++)i=o[d],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&c.push(n[i][0]),n[i]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(e[s]=l[s]);u&&u(a);while(c.length)c.shift()();return r.push.apply(r,m||[]),t()}function t(){for(var e,a=0;a<r.length;a++){for(var t=r[a],s=!0,o=1;o<t.length;o++){var l=t[o];0!==n[l]&&(s=!1)}s&&(r.splice(a--,1),e=i(i.s=t[0]))}return e}var s={},n={app:0},r=[];function i(a){if(s[a])return s[a].exports;var t=s[a]={i:a,l:!1,exports:{}};return e[a].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=s,i.d=function(e,a,t){i.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,a){if(1&a&&(e=i(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var s in e)i.d(t,s,function(a){return e[a]}.bind(null,s));return t},i.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(a,"a",a),a},i.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var m=0;m<o.length;m++)a(o[m]);var u=l;r.push([0,"chunk-vendors"]),t()})({0:function(e,a,t){e.exports=t("56d7")},"034f":function(e,a,t){"use strict";var s=t("85ec"),n=t.n(s);n.a},"392e":function(e,a,t){"use strict";var s=t("3c2b"),n=t.n(s);n.a},3975:function(e,a,t){"use strict";var s=t("74ff"),n=t.n(s);n.a},"3c2b":function(e,a,t){},"56d7":function(e,a,t){"use strict";t.r(a),t.d(a,"bus",(function(){return M}));t("e260"),t("e6cf"),t("cca6"),t("a79d");var s=t("2b0e"),n=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},r=[],i={name:"App",components:{},methods:{setDataToLocalStorage:function(){localStorage.setItem("data",JSON.stringify(this.list))}},computed:{list:function(){return this.$store.getters.getList}},mounted:function(){window.addEventListener("beforeunload",this.setDataToLocalStorage)},beforeDestroy:function(){window.removeEventListener("beforeunload",this.setDataToLocalStorage)}},o=i,l=(t("034f"),t("2877")),m=Object(l["a"])(o,n,r,!1,null,null,null),u=m.exports,d=t("8c4f"),c=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"block"},[t("div",{staticClass:"block__wrap"},[t("router-link",{staticClass:"btn__add",attrs:{to:{name:"page-edit"}}},[e._v("Add user")]),t("router-link",{staticClass:"btn__back",attrs:{to:{name:"page-home"}}},[e._v("Go home")])],1),t("div",{staticClass:"search"},[t("p",{staticClass:"search-para"},[e._v("Search")]),t("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],staticClass:"search-input",attrs:{type:"search",placeholder:"search name"},domProps:{value:e.search},on:{input:function(a){a.target.composing||(e.search=a.target.value)}}}),t("p",{staticClass:"search-para"},[e._v(e._s(e.search))]),t("table",[e._m(0),e._l(e.searchHandler,(function(a){return t("tr",{key:a.id},[t("td",[e._v(e._s(a.id+1))]),t("td",[e._v(e._s(a.name))]),t("td",[e._v(e._s(a.surname))]),t("td",[e._v(e._s(a.address))]),t("td",[e._v(e._s(a.phone))]),t("td",[e._v(e._s(a.sparePhone))]),t("td",[e._v(e._s(a.email))]),t("td",[e._v(e._s(a.spareEmail))]),t("td",[t("button",{staticClass:"btn__delete",on:{click:function(t){return e.deteleUser(a.id)}}},[e._v("delete")]),t("router-link",{staticClass:"btn__edit",attrs:{to:{name:"page-edit",query:{item:a}}}},[e._v("edit")])],1)])}))],2)])])},p=[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("tr",[t("th",[e._v("id")]),t("th",[e._v("name")]),t("th",[e._v("surname")]),t("th",[e._v("address")]),t("th",[e._v("phone")]),t("th",[e._v("sparePhone")]),t("th",[e._v("email")]),t("th",[e._v("spareEmail")]),t("th",[e._v("action")])])}],h=(t("4de4"),t("caad"),t("b0c0"),t("ac1f"),t("2532"),t("841c"),{name:"page-user",data:function(){return{search:"",data:[]}},created:function(){this.data=this.$store.getters.getList},computed:{searchHandler:function(){var e=this;return this.data.filter((function(a){return a.name.toLowerCase().includes(e.search.toLowerCase())}))}},methods:{deteleUser:function(e){return this.$store.dispatch("deleteUser",e)}}}),v=h,f=(t("392e"),Object(l["a"])(v,c,p,!1,null,"434dbdf4",null)),_=f.exports,g=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"block"},[t("div",{staticClass:"block__wrap"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"block__inp",attrs:{type:"text",placeholder:"name"},domProps:{value:e.name},on:{input:function(a){a.target.composing||(e.name=a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.surname,expression:"surname"}],staticClass:"block__inp",attrs:{type:"text",placeholder:"surname"},domProps:{value:e.surname},on:{input:function(a){a.target.composing||(e.surname=a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],staticClass:"block__inp",attrs:{type:"text",placeholder:"address"},domProps:{value:e.address},on:{input:function(a){a.target.composing||(e.address=a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],staticClass:"block__inp",attrs:{type:"text",placeholder:"phone"},domProps:{value:e.phone},on:{input:function(a){a.target.composing||(e.phone=a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.sparePhone,expression:"sparePhone"}],staticClass:"block__inp",attrs:{type:"text",placeholder:"sparePhone"},domProps:{value:e.sparePhone},on:{input:function(a){a.target.composing||(e.sparePhone=a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.email,expression:"email"}],staticClass:"block__inp",attrs:{type:"text",placeholder:"email"},domProps:{value:e.email},on:{input:function(a){a.target.composing||(e.email=a.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.spareEmail,expression:"spareEmail"}],staticClass:"block__inp",attrs:{type:"text",placeholder:"spareEmail"},domProps:{value:e.spareEmail},on:{input:function(a){a.target.composing||(e.spareEmail=a.target.value)}}})]),e.error?t("p",{staticClass:"color_red"},[e._v("name and phone fields are required")]):e._e(),t("router-link",{staticClass:"btn__back",attrs:{to:{name:"page-user",query:{item:e.item}}}},[e._v("Go Back")]),e.item?e._e():t("button",{staticClass:"btn__save",on:{click:function(a){return e.addUser({name:e.name,surname:e.surname,address:e.address,phone:e.phone,sparePhone:e.sparePhone,email:e.email,spareEmail:e.spareEmail})}}},[e._v("Save")]),e.item?t("button",{staticClass:"btn__save",on:{click:function(a){return e.edit({name:e.name,surname:e.surname,address:e.address,phone:e.phone,sparePhone:e.sparePhone,email:e.email,spareEmail:e.spareEmail,item:e.item})}}},[e._v("Edit")]):e._e()],1)},b=[],P={name:"page-edit",data:function(){return{name:"",surname:"",address:"",phone:"",sparePhone:"",email:"",spareEmail:"",item:this.$route.query.item,error:!1}},methods:{addUser:function(e){var a=e.name,t=e.surname,s=e.address,n=e.phone,r=e.sparePhone,i=e.email,o=e.spareEmail;a.length>0&&n.length>0?(this.$store.dispatch("addUser",{name:a,surname:t,address:s,phone:n,sparePhone:r,email:i,spareEmail:o}),this.name="",this.surname="",this.address="",this.phone="",this.sparePhone="",this.email="",this.spareEmail="",this.$router.push("/")):this.error=!0},editUser:function(){this.item&&(this.name=this.item.name,this.surname=this.item.surname,this.address=this.item.address,this.phone=this.item.phone,this.sparePhone=this.item.sparePhone,this.email=this.item.email,this.spareEmail=this.item.spareEmail)},edit:function(e){var a=e.name,t=e.surname,s=e.address,n=e.phone,r=e.sparePhone,i=e.email,o=e.spareEmail,l=e.item;a.length>0&&n.length>0?(this.$store.dispatch("edit",{name:a,surname:t,address:s,phone:n,sparePhone:r,email:i,spareEmail:o,item:l}),this.$router.push("/")):this.error=!0},addUserParse:function(){var e=JSON.parse(this.jsonParese);this.$store.dispatch("addUserParse",e)}},mounted:function(){this.editUser()}},E=P,k=(t("3975"),Object(l["a"])(E,g,b,!1,null,"62d635a0",null)),w=k.exports,y=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("h1",[e._v("Home")]),t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur excepturi laboriosam praesentium quos recusandae sequi ut voluptates voluptatum? Aliquid aut commodi consequatur corporis cumque, dicta distinctio eligendi, expedita fuga ipsa nam nulla obcaecati odit praesentium, quaerat tempora velit! Assumenda at facere iusto nesciunt obcaecati possimus quo rerum velit voluptates?")]),t("router-link",{staticClass:"btn__user",attrs:{to:{name:"page-user"}}},[e._v("users")])],1)},x=[],C={name:"page-home",components:{},methods:{},computed:{}},U=C,S=(t("8b71"),Object(l["a"])(U,y,x,!1,null,null,null)),O=S.exports,$=new d["a"]({routes:[{path:"/",component:_,name:"page-user"},{path:"/edit",component:w,name:"page-edit"},{path:"/home",component:O,name:"page-home"}],mode:"history"}),j=(t("7db0"),t("c740"),t("a434"),t("2f62")),q=[{id:0,name:"Maksim",surname:"Starchev",address:"Moscow",phone:"0954037457",sparePhone:"0946757455",email:"Maxstar@gmail.com",spareEmail:"Maksstar@gmail.com"},{id:1,name:"Ivan",surname:"Timoshenko",address:"Moscow",phone:"0955038452",sparePhone:"0946757455",email:"Ivantimoshen@gmail.com",spareEmail:"Ivantimoshen2@gmail.com"},{id:2,name:"Stas",surname:"Ganiyev",address:"Tashkent",phone:"0955038550",sparePhone:"0946751586",email:"StasGaniyev@gmail.com",spareEmail:"StasGaniyev2@gmail.com"},{id:3,name:"Umar",surname:"Kobilov",address:"Moscow",phone:"0955049673",sparePhone:"0946759964",email:"Umarkobilov@gmail.com",spareEmail:"Umarkobilov2@gmail.com"},{id:4,name:"Daniil",surname:"Timoshenko",address:"Moscow",phone:"0955036490",sparePhone:"0946752421",email:"DaniilZubrenko@gmail.com",spareEmail:"DaniilZubrenkoubrenko@gmail.com"}];s["a"].use(j["a"]);var L=new j["a"].Store({state:function(){var e=JSON.parse(localStorage.getItem("data")),a=e||q;return{list:a}},getters:{getList:function(e){return e.list}},mutations:{deleteUser:function(e,a){var t=e.list.findIndex((function(e){return e.id==a}));e.list.splice(t,1)},addUser:function(e,a){var t=a.name,s=a.surname,n=a.address,r=a.phone,i=a.sparePhone,o=a.email,l=a.spareEmail,m=0;e.list.length>0&&(m=e.list[e.list.length-1].id+1),e.list.push({id:m,name:t,surname:s,address:n,phone:r,sparePhone:i,email:o,spareEmail:l})},edit:function(e,a){var t=a.item.id,s=e.list.find((function(e){return e.id==t}));s.email=a.email,s.spareEmail=a.spareEmail,s.name=a.name,s.surname=a.surname,s.address=a.address,s.phone=a.phone,s.sparePhone=a.sparePhone},addUserParse:function(e,a){var t=0;e.list.length>0&&(t=e.list[e.list.length-1].id+1),e.list.push({id:t,name:a.name,surname:a.surname,address:a.address,phone:a.phone,sparePhone:a.sparePhone,email:a.email,spareEmail:a.spareEmail})}},actions:{deleteUser:function(e,a){e.commit("deleteUser",a)},addUser:function(e,a){var t=a.name,s=a.surname,n=a.address,r=a.phone,i=a.sparePhone,o=a.email,l=a.spareEmail;e.commit("addUser",{name:t,surname:s,address:n,phone:r,sparePhone:i,email:o,spareEmail:l})},edit:function(e,a){e.commit("edit",a)},addUserParse:function(e,a){e.commit("addUserParse",a)}}});s["a"].use(d["a"]),s["a"].config.productionTip=!1;var M=new s["a"];new s["a"]({render:function(e){return e(u)},router:$,store:L}).$mount("#app")},"74ff":function(e,a,t){},"85ec":function(e,a,t){},"88d7":function(e,a,t){},"8b71":function(e,a,t){"use strict";var s=t("88d7"),n=t.n(s);n.a}});
//# sourceMappingURL=app.ad04935d.js.map