(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){e.exports=a(145)},110:function(e,t,a){},142:function(e,t){},145:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(8),s=a.n(c),i=(a(110),a(48)),o=a(13),l=a(175),m=a(181),u=a(87),v=a.n(u),p=function(e){return{type:"SEND_MESSAGE",payload:e}},E=function(e){return{type:"CHANGE_SERVER",payload:e}},d=function(e){return{type:"CHANGE_TOPIC",payload:e}},f=a(191),b=a(179),g=a(50);function h(e){var t=e.topics,a=e.servers,r=Object(o.b)();return n.a.createElement("div",{className:"sidebar-container"},n.a.createElement("div",{className:"servers-container"},n.a.createElement(l.a,null,a.map(function(e){return n.a.createElement(f.a,{title:e,key:e,placement:"right",className:"server-tooltip"},n.a.createElement(b.a,{className:"server-icon"},n.a.createElement(v.a,{onClick:function(){return r(E(e))}})))}))),n.a.createElement("div",{className:"topics-container"},n.a.createElement(l.a,{className:"topic"},t.map(function(e){return n.a.createElement(m.a,{onClick:function(t){return r(d(e))},key:e,button:!0},n.a.createElement("i",{style:{verticalAlign:"text-bottom",fontWeight:"bold"},class:"topic-hashtag"},"#"),n.a.createElement(g.a,{variant:"body1"},e))}))))}var O=a(182),y=a(183),j=a(184),N=a(88),S=a.n(N);function k(e){var t,a=Object(o.c)(function(e){return e.chat}),c=a.activeServer,s=a.activeTopic,i=Object(o.c)(function(e){return e.chat});return Object(r.useEffect)(function(){t.scrollIntoView()}),n.a.createElement("div",{className:"messages-container"},n.a.createElement(l.a,null,i.servers[c][s].map(function(e,t){return n.a.createElement(m.a,{className:"message",key:t},n.a.createElement(O.a,null,n.a.createElement(y.a,null,n.a.createElement(S.a,null))),n.a.createElement(j.a,{primary:e.from,secondary:e.msg,className:"message-text"}))})),n.a.createElement("div",{ref:function(e){return t=e}}))}var C=a(188);function T(e){var t=Object(o.c)(function(e){return e.chat}),a=t.activeServer,r=t.activeTopic,c=Object(o.b)(),s=e.chatMessage,i=e.changeChatMessage,l=e.user;function m(e){"Enter"===e.key&&(c(p({server:a,topic:r,from:l,msg:s})),i(""))}return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"send-message-border"}),n.a.createElement("div",{className:"send-message-container"},n.a.createElement(C.a,{autoComplete:"off",color:"blue",id:"filled-name",className:"message-input",label:"Message # ".concat(r),value:s,onChange:function(e){return i(e.target.value)},onKeyPress:function(e){return m(e)}})))}var _=a(185),A=a(186),M=a(90),w=a.n(M),H=a(190);function R(e){var t=Object(o.c)(function(e){return e.chat}),a=t.activeServer,c=t.activeTopic,s=Object(r.useState)(!1),l=Object(i.a)(s,2),m=l[0],u=l[1],v=e.topics,p=e.servers;return n.a.createElement(_.a,{position:"static"},n.a.createElement(A.a,{className:"navbar"},n.a.createElement(b.a,{edge:"start",color:"inherit","aria-label":"menu",className:"menu-burger-button"},n.a.createElement(w.a,{onClick:function(){return u(!0)}})),n.a.createElement(H.a,{anchor:"left",open:m,onClose:function(){return u(!1)}},n.a.createElement(h,{topics:v,servers:p})),n.a.createElement(g.a,{variant:"h6"},a," - ",c)))}var D="eric"+Math.ceil(100*Math.random());function G(){var e=Object(o.c)(function(e){return e.chat}),t=Object(r.useState)(""),a=Object(i.a)(t,2),c=a[0],s=a[1],l=Object.keys(e.servers),m=Object.keys(e.servers[e.activeServer]);return n.a.createElement("div",null,n.a.createElement(R,{topics:m,servers:l}),n.a.createElement("div",{className:"grid-container"},n.a.createElement("div",{className:"sidebar-grid"},n.a.createElement(h,{topics:m,servers:l})),n.a.createElement("div",{className:"messages-grid"},n.a.createElement(k,{topics:m})),n.a.createElement("div",{className:"send-messages-grid"},n.a.createElement(T,{chatMessage:c,changeChatMessage:s,user:D}))))}var P=a(94),x=a(187),I=Object(P.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"16px",backgroundColor:"black"}}},palette:{type:"dark",primary:{main:"#7289da"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});var V,W=function(){return n.a.createElement(x.a,{theme:I},n.a.createElement(G,null))},U=a(24),z=a(91),F=a(92),J=a.n(F),L=a(32),X=a(49),B=a(26),K={servers:{"programming haven":{general:[],react:[],vue:[],php:[],node:[]},"game land":{HOTS:[],Overwatch:[],Diablo:[],PoE:[],CSGO:[]}},activeServer:"",activeTopic:""},q=a(93),Q=Object(U.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CHAT":var a=t.payload,r=a.server,n=a.topic,c=a.from,s=a.msg;return console.log(t),Object(B.a)({},e,{servers:Object(B.a)({},e.servers,Object(L.a)({},r,Object(B.a)({},e.servers[r],Object(L.a)({},n,[].concat(Object(X.a)(e.servers[r][n]),[{from:c,msg:s}])))))});case"CHANGE_SERVER":return Object(B.a)({},e,{activeServer:t.payload,activeTopic:Object.keys(e.servers[t.payload])[0]});case"CHANGE_TOPIC":return Object(B.a)({},e,{activeTopic:t.payload});default:return Object(B.a)({},e,{activeServer:Object.keys(e.servers)[0],activeTopic:Object.keys(e.servers[Object.keys(e.servers)[0]])[0]})}},location:q.serverReducer}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||U.d,Z=Object(U.e)(Q,Y(Object(U.a)(z.a,(V="https://simple-chat-apix.herokuapp.com/",function(e){var t=J()(V);return t.on("simple-chat",function(t){e.dispatch({type:"UPDATE_CHAT",payload:t})}),function(e){return function(a){if("SEND_MESSAGE"!==a.type)return e(a);t.emit("simple-chat",a.payload)}}}))));s.a.render(n.a.createElement(o.a,{store:Z},n.a.createElement(W,null)),document.getElementById("root"))},93:function(e,t){}},[[105,1,2]]]);
//# sourceMappingURL=main.d363f814.chunk.js.map