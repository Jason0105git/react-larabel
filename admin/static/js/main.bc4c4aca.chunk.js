(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(44)},41:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),o=a.n(s),l=a(21),u=a(15),i=(a(41),a(9)),c=a(10),p=a(12),d=a(11),m=a(13),h=a(14),g=function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(u.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/news"},"News")),r.a.createElement("li",null,r.a.createElement(u.b,{to:"/profile"},"profile")))},E=function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"authUser",value:function(){this.props.auth.isLogged?this.props.logout():this.props.login(this.inputEmail.value,this.inputPassword.value)}},{key:"render",value:function(){var e=this,t=this.props.auth.isLogged,a="err"===this.props.auth.error.status?this.props.auth.error.message:this.props.auth.message;return r.a.createElement("div",{className:"user"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"login-id"},"email"),r.a.createElement("input",{type:"email",ref:function(t){e.inputEmail=t}})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"password-id"},"password"),r.a.createElement("input",{type:"password",ref:function(t){e.inputPassword=t}})),r.a.createElement("li",null,r.a.createElement("button",{onClick:this.authUser.bind(this)},t?r.a.createElement("span",null,"Logout"):r.a.createElement("span",null,"Login")))),r.a.createElement("div",{className:"message"},a))}}]),t}(n.Component),f=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).newsTemplate=function(e){return r.a.createElement("ul",null,e.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("h3",null,e.title),r.a.createElement("p",null,r.a.createElement("i",null,e.text)))}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.auth.isLogged),this.props.getNews(this.props.auth.isLogged)}},{key:"render",value:function(){return this.props.auth.isLogged?"ok"==this.props.news.status?this.newsTemplate(this.props.news.data):r.a.createElement("span",null,"...loading"):r.a.createElement("span",null,"access denided")}}]),t}(n.Component),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(a=Object(p.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(s)))).profileTemplate=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"City: ",e.city),r.a.createElement(r.a.Fragment,null,"Languages:",r.a.createElement("ul",null,e.languages.map(function(e,t){return r.a.createElement("li",{key:t},"+",e)})),"Links:",r.a.createElement("ul",null,e.social.map(function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},e.label))}))))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isLogged&&this.props.getdata(this.props.auth.id)}},{key:"render",value:function(){return this.props.auth.isLogged?"ok"===this.props.profile.status?this.profileTemplate(this.props.profile.data):r.a.createElement("span",null,"loading..."):r.a.createElement("span",null,"access denided")}}]),t}(n.Component),O=function(){return r.a.createElement("div",{className:"home-content"},r.a.createElement("h2",null,"Task #2"))},b=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("header",null,r.a.createElement("h1",null,"test task react-redux-router-async")),r.a.createElement("nav",null,r.a.createElement(g,null),r.a.createElement(E,{auth:this.props.auth,login:this.props.loginUser,logout:this.props.logoutUser})),r.a.createElement("main",null,r.a.createElement("aside",null,r.a.createElement(g,null)),r.a.createElement("article",null,r.a.createElement(h.a,{exact:!0,path:"/",component:O}),r.a.createElement(h.a,{exact:!0,path:"/news",render:function(t){return r.a.createElement(f,Object.assign({},t,{news:e.props.news,auth:e.props.auth,getNews:e.props.getNews}))}}),r.a.createElement(h.a,{exact:!0,path:"/profile",render:function(t){return r.a.createElement(y,Object.assign({},t,{profile:e.props.profile,auth:e.props.auth,getdata:e.props.getProfile}))}}))),r.a.createElement("footer",null,"\xa92019\xa0footer"))}}]),t}(r.a.Component)),j=Object(l.b)(function(e){return{profile:e.profile,news:e.news,auth:e.auth}},function(e){return{loginUser:function(t,a){return e(function(e,t){return function(a){a({type:"LOGIN_REQUEST",payload:{message:"..loading"}}),fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/validate",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})}).then(function(e){return e.json()}).then(function(e){"ok"===e.status?a({type:"LOGIN_SUCCESS",payload:{id:e.data.id,status:e.status,data:e.data,isLogged:!0,message:"logged"}}):a({type:"LOGIN_ERROR",payload:{status:"err",error:e,isLogged:!1}})}).catch(function(e){return a({type:"REQUEST_ERROR"})})}}(t,a))},logoutUser:function(){return e({type:"LOGOUT",payload:{error:{status:"",message:""},isLogged:!1,status:"",data:{id:0},message:"not logged"}})},getProfile:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return function(t){t({type:"GET_USER_REQUEST",payload:"loading"}),fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/".concat(e)).then(function(e){return e.json()}).then(function(e){return t({type:"GET_USER_SUCCESS",payload:e})}).catch(function(e){return t({type:"GET_USER_ERROR"})})}}(t))},getNews:function(t){return e(function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?function(e){e({type:"GET_NEWS_REQUEST",payload:"loading"}),fetch("https://mysterious-reef-29460.herokuapp.com/api/v1/news").then(function(e){return e.json()}).then(function(t){return e({type:"GET_NEWS_SUCCESS",payload:t})}).catch(function(t){return e({type:"GET_NEWS_ERROR"})})}:{type:"NONE"}}(t))}}})(b);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=a(8),v=a(30),w=a(17),L=a(2),R={login:"",password:"",error:{status:"",message:""},isLogged:!1,status:"",data:{id:null},message:""},_={isLogged:!1,status:"",data:[]},U={isLogged:!1,status:"none",data:{userId:1,city:"",languages:[],social:[]}},T=Object(S.combineReducers)({auth:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_REQUEST":return Object(L.a)({},t,{isLogged:!1,status:"",data:{id:null},message:a.payload.message,error:""});case"LOGIN_SUCCESS":return Object(L.a)({},t,{isLogged:!0,status:a.payload.status,data:{id:a.payload.id},message:a.payload.message,error:""});case"LOGIN_ERROR":return Object(L.a)({},t,{isLogged:!1,status:"err",error:a.payload.error});case"LOGOUT":return Object(L.a)({},t,(e={isLogged:!1,status:"logout",data:{id:null}},Object(w.a)(e,"data",a.payload.data),Object(w.a)(e,"message",a.payload.message),Object(w.a)(e,"error",""),e));case"REQUEST_ERROR":return Object(L.a)({},t,{isLogged:!1,status:"server_err",message:"server error"});default:return t}return t},news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_NEWS_REQUEST":return Object(L.a)({},e,{status:"loading"});case"GET_NEWS_SUCCESS":return Object(L.a)({},e,{status:t.payload.status,data:t.payload.data});case"LOGOUT":return _;case"GET_USER_SUCCESS":return Object(L.a)({},e,{isLogged:!0});default:return e}return e},profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_USER_REQUEST":return Object(L.a)({},e,{status:"loading"});case"GET_USER_SUCCESS":return Object(L.a)({},e,{status:t.payload.status,data:t.payload.data});case"LOGOUT":return U;case"LOGIN_SUCCESS":return Object(L.a)({},e,{isLogged:!0});default:return e}return e}}),k=a(31),N=Object(S.createStore)(T,Object(v.composeWithDevTools)(Object(S.applyMiddleware)(k.a)));o.a.render(r.a.createElement(l.a,{store:N},r.a.createElement(u.a,null,r.a.createElement(j,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[32,1,2]]]);
//# sourceMappingURL=main.bc4c4aca.chunk.js.map