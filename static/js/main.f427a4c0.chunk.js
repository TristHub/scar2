(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,a){e.exports=a(166)},112:function(e,t,a){},163:function(e,t){},166:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),i=(a(112),a(34)),o=a.n(i),l=a(61),u=a(62),m=a.n(u),p=function(e){return{type:"SEND_MESSAGE",payload:e}},d=function(e,t){return{type:"CHANGE_SERVER",payload:{server:e,serverId:t}}},f=function(e){return{type:"CHANGE_TOPIC",payload:e}},v=function(e){return function(){var e=Object(l.a)(o.a.mark(function e(t){var a,n;return o.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a="".concat("https://simple-chat-apix.herokuapp.com/","/user?"),e.next=3,m.a.get(a);case 3:n=e.sent,t({type:"GET_INITIAL_DATA",payload:n.data});case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()},E=function(e){return function(){var t=Object(l.a)(o.a.mark(function t(a){var n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:n="".concat("https://simple-chat-apix.herokuapp.com/","/user?userId=").concat(e.userId,"&userName=").concat(e.userName),m.a.post(n)&&a({type:"SIGN_IN",payload:e});case 3:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}()},g=function(e){return{type:"SIGN_OUT",payload:e}},b=a(10),h=a(95),O=a.n(h),y=a(94),j=a.n(y),N=a(190),S=a(203),I=a(192),k=a(193),w=a(51),T=a(194),C=a(195),_=a(196),A=a(197),G=a(188);function M(){var e=Object(b.c)(function(e){return e.user}),t=Object(b.b)(),a=Object(n.useRef)();function c(e){"login"===e?a.current.signIn():a.current.signOut()}function s(e){if(e){var n=a.current.currentUser.get().getBasicProfile(),r=n.Eea,c=n.ig,s=n.U3;t(E({userId:r,userName:c,userEmail:s}))}else t(g(a.current.currentUser.get().getId()))}return Object(n.useEffect)(function(){window.gapi.load("client:auth2",function(){window.gapi.client.init({clientId:"607332079220-hhs6rhoaq44p29150j4thfdgoj7c5k59.apps.googleusercontent.com",scope:"email"}).then(function(){a.current=window.gapi.auth2.getAuthInstance(),s(a.current.isSignedIn.get()),a.current.isSignedIn.listen(function(){s(a.current.isSignedIn.get())})})})},[]),r.a.createElement("div",null,e.isSignedIn?r.a.createElement(G.a,{onClick:function(){return c("logout")}},"Sign Out"):r.a.createElement(G.a,{onClick:function(){return c("login")}},"Sign In"))}function x(e){var t=Object(b.c)(function(e){return e.chat}),a=Object.keys(t.servers),n=Object.keys(t.servers[t.activeServer]),c=t.activeServer,s=Object(b.c)(function(e){return e.user}),i=Object(b.b)(),o=e.changeDrawerVisible;return r.a.createElement("div",{className:"sidebar-container"},r.a.createElement("div",{className:"servers-container"},r.a.createElement(N.a,null,a.map(function(e){return r.a.createElement(S.a,{title:e,key:e,placement:"right",className:"server-tooltip"},r.a.createElement(I.a,{className:"server-icon",onClick:function(){return i(d(e,e.server_id))}},r.a.createElement(j.a,null)))}))),r.a.createElement("div",{className:"topics-container"},r.a.createElement(N.a,{className:"topic-list"},r.a.createElement(k.a,{className:"title-container"},c.split("-")[0]),n.map(function(e){return r.a.createElement(k.a,{onClick:function(t){i(f(e)),"undefined"!==typeof o&&o(!1)},key:e,button:!0},r.a.createElement("i",{className:"topic-hashtag"},"#"),r.a.createElement(w.a,{variant:"body1"},e.split("-")[0].toLowerCase()))})),r.a.createElement("div",{className:"user-options"},r.a.createElement(k.a,{className:"user-info"},r.a.createElement(T.a,null,r.a.createElement(C.a,null,r.a.createElement(O.a,null))),r.a.createElement(_.a,{primary:s.userName}),r.a.createElement(A.a,null,r.a.createElement(M,null))))))}var D=a(33),H=a(198),P=a(199),R=a(96),U=a.n(R),L=a(202);function V(e){var t=Object(b.c)(function(e){return e.chat}).activeTopic,a=Object(n.useState)(!1),c=Object(D.a)(a,2),s=c[0],i=c[1],o=e.topics,l=e.servers;return r.a.createElement(H.a,{position:"static"},r.a.createElement(P.a,{className:"navbar"},r.a.createElement(I.a,{edge:"start",color:"inherit","aria-label":"menu",className:"menu-burger-button",onClick:function(){return i(!0)}},r.a.createElement(U.a,null)),r.a.createElement(L.a,{anchor:"left",open:s,onClose:function(){return i(!1)},onOpen:function(){return null}},r.a.createElement(x,{topics:o,servers:l,changeDrawerVisible:i})),r.a.createElement("i",{className:"topic-hashtag"},"#"),r.a.createElement(w.a,{variant:"h6"}," ",t.split("-")[0].toLowerCase()," ")))}function B(e){var t,a=Object(b.c)(function(e){return e.chat}),c=Object.keys(a.servers),s=Object.keys(a.servers[a.activeServer]),i=a.activeServer,o=a.activeTopic;return Object(n.useEffect)(function(){t.scrollIntoView()}),r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{topics:s,servers:c}),r.a.createElement("div",{className:"messages-container"},r.a.createElement(N.a,null,a.servers[i][o].map(function(e,t){return r.a.createElement(k.a,{className:"message",key:t},r.a.createElement(T.a,null,r.a.createElement(C.a,null,r.a.createElement("img",{src:"/Simple-Chat/user.png",alt:"user icon",height:"48"}))),r.a.createElement(_.a,{primary:e.from,secondary:e.msg,className:"message-text"}))})),r.a.createElement("div",{ref:function(e){return t=e}})))}var F=a(200),W=(a(135),a(100)),z=a(97),J=a.n(z);function K(e){var t=Object(b.c)(function(e){return e.chat}),a=t.activeServer,c=t.activeTopic,s=Object(b.c)(function(e){return e.user}).userName,i=Object(b.b)(),o=Object(n.useState)(""),l=Object(D.a)(o,2),u=l[0],m=l[1],d=Object(n.useState)(!1),f=Object(D.a)(d,2),v=f[0],E=f[1];function g(e){"Enter"!==e.key||e.shiftKey||(i(p({server:a,topic:c,from:s,msg:u})),m(""))}return window.onclick=function(e){String(e.target.className).includes("send-message-emoji-menu")&&E(!1)},r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"send-message-border"}),r.a.createElement("div",{className:"send-message-container"},r.a.createElement(F.a,{"aria-label":"empty textarea",placeholder:"Message  #".concat(c),className:"message-text-area",value:u,onChange:function(e){return function(e){"\n"!==e.target.value&&m(e.target.value)}(e)},onKeyPress:function(e){return g(e)}}),r.a.createElement(J.a,{className:"send-message-emoji-button",onClick:function(){return E(!v)}})),r.a.createElement("div",{className:v?"send-message-emoji-menu show":"send-message-emoji-menu hide"},r.a.createElement("div",{className:"emoji-wrapper"},r.a.createElement(W.a,{set:"emojione",onSelect:function(e){return function(e){m(u+e.native),E(!1)}(e)}}))))}function X(){var e=Object(b.c)(function(e){return e.user}),t=Object(b.b)();return Object(n.useEffect)(function(){e.isSignedIn&&t(v())},[t,e.isSignedIn]),r.a.createElement("div",{className:"grid-container"},r.a.createElement("div",{className:"sidebar-grid"},r.a.createElement(x,null)),r.a.createElement("div",{className:"messages-grid"},r.a.createElement(B,null)),r.a.createElement("div",{className:"send-messages-grid"},r.a.createElement(K,null)))}var q=a(101),Q=a(201),Y=Object(q.a)({overrides:{MuiTooltip:{tooltip:{fontSize:"16px",backgroundColor:"black"}},MuiSnackbarContent:{root:{backgroundColor:"#202225",color:"white"}},MuiAppBar:{colorPrimary:{backgroundColor:"#36393E",position:"absolute"}}},palette:{type:"dark",primary:{main:"#7289da"}},typography:{fontFamily:'"Roboto", "Helvetica", "Arial", sans-serif',fontSize:14,fontWeightLight:300,fontWeightRegular:400,fontWeightMedium:500}});var Z,$=function(){return r.a.createElement(Q.a,{theme:Y},r.a.createElement(X,null))},ee=a(25),te=a(98),ae=a(99),ne=a.n(ae),re=a(32),ce=a(49),se=a(19),ie={servers:{"programming haven":{general:[]},"game land":{HOTS:[]}},activeServer:"programming haven",activeTopic:"general"},oe={isSignedIn:!1,isAdmin:!1,userId:null,userName:"anon"+Math.floor(100*Math.random(0)),userEmail:null},le=Object(ee.c)({chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CHAT":var a=t.payload,n=a.server,r=a.topic,c=a.from,s=a.msg;return Object(se.a)({},e,{servers:Object(se.a)({},e.servers,Object(re.a)({},n,Object(se.a)({},e.servers[n],Object(re.a)({},r,[].concat(Object(ce.a)(e.servers[n][r]),[{from:c,msg:s}])))))});case"GET_INITIAL_DATA":return Object(se.a)({},e,{servers:t.payload,activeServer:Object.keys(t.payload)[0],activeTopic:Object.keys(t.payload[Object.keys(t.payload)[0]])[0]});case"CHANGE_SERVER":return Object(se.a)({},e,{activeServer:t.payload.server,activeTopic:Object.keys(e.servers[t.payload.server])[0]});case"CHANGE_TOPIC":return Object(se.a)({},e,{activeTopic:t.payload});default:return Object(se.a)({},e)}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return console.log(t),Object(se.a)({},e,{isSignedIn:!0,userId:t.payload.userId,userName:t.payload.userName,userEmail:t.payload.userEmail});case"SIGN_OUT":return Object(se.a)({},e,{isSignedIn:!1,userId:null,userName:"anon"+Math.floor(100*Math.random(0))});default:return e}}}),ue=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ee.d,me=Object(ee.e)(le,ue(Object(ee.a)(te.a,(Z="https://simple-chat-apix.herokuapp.com/",function(e){var t=ne()(Z);return t.on("simple-chat",function(t){e.dispatch({type:"UPDATE_CHAT",payload:t})}),function(e){return function(a){if("SEND_MESSAGE"!==a.type)return e(a);t.emit("simple-chat",a.payload)}}}))));s.a.render(r.a.createElement(b.a,{store:me},r.a.createElement($,null)),document.getElementById("root"))}},[[107,1,2]]]);
//# sourceMappingURL=main.f427a4c0.chunk.js.map