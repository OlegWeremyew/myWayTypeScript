(this.webpackJsonpmyWayTypeScript=this.webpackJsonpmyWayTypeScript||[]).push([[0],[,,,function(e,t,s){e.exports={nav:"Navbar_nav__1Fdz2",item:"Navbar_item__1onIf",activeLink:"Navbar_activeLink__f94mN"}},,,,,function(e,t,s){e.exports={dialogs:"Messages_dialogs__2a5ir",dialogItem:"Messages_dialogItem__1fljT",dialog:"Messages_dialog__amYKR"}},,function(e,t,s){e.exports={appContent:"App_appContent__4mg9X",appContentWindow:"App_appContentWindow__dnoS0"}},function(e,t,s){e.exports={myPosts:"MyPosts_myPosts__1Dxws",posts:"MyPosts_posts__1WTYZ"}},function(e,t,s){e.exports={item:"Post_item__3IYxb",itemText:"Post_itemText__rOuHO"}},,,function(e,t,s){e.exports={header:"Header_header__3WLj3"}},function(e,t,s){e.exports={footer:"Footer_footer__mhg74"}},function(e,t,s){e.exports={news:"News_news__37yFc"}},function(e,t,s){e.exports={music:"Music_music__JnEwt"}},function(e,t,s){e.exports={friends:"Friends_friends__2_1Vc"}},function(e,t,s){e.exports={settings:"Settings_settings__Wu77x"}},function(e,t,s){e.exports={message:"Message_message__1_lWt"}},function(e,t,s){e.exports={dialog:"DialogsItem_dialog__26p68"}},function(e,t,s){e.exports={profile:"Profile_profile__3rowZ",ava:"Profile_ava__3qkus"}},function(e,t,s){e.exports={profile:"ProfileInfo_profile__2ViAK",ava:"ProfileInfo_ava__9e5p9"}},,,,,function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var i=s(1),a=s(14),n=s.n(a),c=(s(29),s(13)),r={posts:[{message:"Hello",likesCount:12,id:1},{message:"Dinosaurus are great",likesCount:17,id:2}],newPostText:""},o=function(e){return{type:"UPDATE_NEW_POST_TEXT",newText:e}},d={users:[{name:"Oleg",id:1,img:"https://avatars.mds.yandex.net/get-zen_doc/3986249/pub_607ecd1d13c71c1ca8a34192_607ee065330a4f14d551104b/scale_1200"},{name:"Diana",id:2,img:"https://avatars.mds.yandex.net/i?id=64b380ea3aa0d80cad94cb1a24a3b3f5-4233014-images-thumbs&ref=rim&n=33&w=150&h=150"},{name:"Fat cat",id:3,img:"https://data.whicdn.com/images/310252363/original.jpg"},{name:"Dimka",id:4,img:"https://i.pinimg.com/originals/b7/44/46/b744464dd3d970ad96745be8de69d755.jpg"},{name:"Ella",id:5,img:"https://st.depositphotos.com/1023162/5099/i/950/depositphotos_50991807-stock-photo-sexy-woman-in-fashion-sunglasses.jpg"},{name:"Makar",id:6,img:"https://avatars.mds.yandex.net/i?id=55d09aa1629f72a149098b2c3127e039-5222024-images-thumbs&ref=rim&n=33&w=150&h=150"}],messages:[{message:"Hi",id:1},{message:"Ho",id:2},{message:"He",id:3},{message:"Hu",id:4},{message:"Hio",id:5},{message:"Hia",id:6}],newMessageText:""},l=function(e){return{type:"UPDATE_NEW_MESSAGE_TEXT",newMessage:e}},j={},u=Object(c.a)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var s={id:(new Date).getTime(),message:e.newPostText,likesCount:12};return e.posts.push(s),e.newPostText="",e;case"UPDATE_NEW_POST_TEXT":return e.newPostText=t.newText,e;default:return e}},messagesPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_MESSAGE":var s={id:(new Date).getTime(),message:e.newMessageText};return e.messages.push(s),e.newMessageText="",e;case"UPDATE_NEW_MESSAGE_TEXT":return e.newMessageText=t.newMessage,e;default:return e}},sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j;return e}}),m=Object(c.b)(u),p=s(10),g=s.n(p),x=s(15),b=s.n(x),h=s.p+"static/media/logo.cbfad428.png",f=s(0),v=function(){return Object(f.jsx)("header",{className:b.a.header,children:Object(f.jsx)("img",{src:h,alt:"logo",title:"image logo"})})},_=s(3),O=s.n(_),w=s(5),N=function(){return Object(f.jsxs)("nav",{className:O.a.nav,children:[Object(f.jsx)("div",{className:O.a.item,children:Object(f.jsx)(w.b,{className:function(e){return e.isActive?O.a.activeLink:""},to:"/profile",children:"Profile"})}),Object(f.jsx)("div",{className:"".concat(O.a.item," ").concat(O.a.active),children:Object(f.jsx)(w.b,{className:function(e){return e.isActive?O.a.activeLink:""},to:"/messages",children:"Message"})}),Object(f.jsx)("div",{className:O.a.item,children:Object(f.jsx)(w.b,{className:function(e){return e.isActive?O.a.activeLink:""},to:"/news",children:"News"})}),Object(f.jsx)("div",{className:O.a.item,children:Object(f.jsx)(w.b,{className:function(e){return e.isActive?O.a.activeLink:""},to:"/music",children:"Music"})}),Object(f.jsx)("div",{className:O.a.item,children:Object(f.jsx)(w.b,{className:function(e){return e.isActive?O.a.activeLink:""},to:"/settings",children:"Settings"})}),Object(f.jsx)("div",{className:O.a.item,children:Object(f.jsx)(w.b,{className:function(e){return e.isActive?O.a.activeLink:""},to:"/friends",children:"Friends"})})]})},T=s(16),P=s.n(T),y=function(){return Object(f.jsx)("div",{className:P.a.footer,children:"Footer"})},k=s(2),M=s(17),A=s.n(M),E=function(){return Object(f.jsx)("div",{className:A.a.news,children:"News"})},S=s(18),D=s.n(S),C=function(){return Object(f.jsx)("div",{className:D.a.music,children:"Music"})},W=s(19),H=s.n(W),I=function(){return Object(f.jsx)("div",{className:H.a.friends,children:"Friends"})},L=s(20),F=s.n(L),X=function(){return Object(f.jsx)("div",{className:F.a.settings,children:"Settings"})},G=s(8),U=s.n(G),z=s(21),J=s.n(z),R=function(e){return Object(f.jsx)("div",{className:J.a.message,children:e.message})},Y=s(22),q=s.n(Y),K=function(e){var t="/messages/"+e.id;return Object(f.jsxs)("div",{className:q.a.dialog,children:[Object(f.jsx)("div",{children:Object(f.jsx)("img",{src:e.img})}),Object(f.jsx)("div",{children:Object(f.jsx)(w.b,{to:t,children:e.name})})]})},V=function(e){var t=Object(i.useRef)(null),s=e.state.users.map((function(e){return Object(f.jsx)(K,{name:e.name,id:e.id,img:e.img},e.id)})),a=e.state.messages.map((function(e){return Object(f.jsx)(R,{message:e.message,id:e.id},e.id)}));return Object(f.jsxs)("div",{className:U.a.dialogs,children:[Object(f.jsx)("div",{className:U.a.dialogItem,children:s}),Object(f.jsxs)("div",{className:U.a.messages,children:[a,Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{onChange:function(){var s,i=null===(s=t.current)||void 0===s?void 0:s.value;i?e.dispatch(l(i)):e.dispatch(l(""))},value:e.state.newMessageText,ref:t,rows:10,cols:44,placeholder:"Write your message"})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){var s,i=null===(s=t.current)||void 0===s?void 0:s.value;i&&e.dispatch(function(e){return{type:"ADD_MESSAGE",newMessage:e}}(i)),t.current&&(t.current.value="")},children:"Add message"})})]})]})},Z=s(23),B=s.n(Z),Q=s(11),$=s.n(Q),ee=s(12),te=s.n(ee),se=function(e){return Object(f.jsxs)("div",{className:te.a.item,children:[Object(f.jsx)("img",{src:"https://slovami.net/wp-content/uploads/thumbs_dir/the-most-beautiful-guys-russia-4-1-nwkkkydf2f1mhw9a4ijzfs2ktasvevyjiyi4xibqis.jpg",alt:"ava",title:"ava"}),Object(f.jsxs)("div",{className:te.a.itemText,children:[e.message,Object(f.jsx)("div",{children:Object(f.jsxs)("span",{children:["like: ",e.likesCount]})})]})]},e.id)},ie=function(e){var t=e.profilePage.posts.map((function(e){return Object(f.jsx)(se,{message:e.message,likesCount:e.likesCount,id:e.id},e.id)})),s=Object(i.useRef)(null);return Object(f.jsxs)("div",{className:$.a.myPosts,children:[Object(f.jsx)("h3",{children:"My posts"}),Object(f.jsxs)("div",{children:[Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{onChange:function(){var t,i=null===(t=s.current)||void 0===t?void 0:t.value;i?e.dispatch(o(i)):e.dispatch(o(""))},ref:s,value:e.profilePage.newPostText,placeholder:"Write your message"})}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){var t,i=null===(t=s.current)||void 0===t?void 0:t.value;i&&e.dispatch(function(e){return{type:"ADD_POST",newText:e}}(i)),s.current&&(s.current.value="")},children:"Add post"})})]}),Object(f.jsx)("div",{className:$.a.posts,children:t})]})},ae=s(24),ne=s.n(ae),ce=function(){return Object(f.jsx)("div",{className:ne.a.profile,children:Object(f.jsx)("img",{src:"https://img.lovepik.com/photo/50066/7884.jpg_wh860.jpg",alt:"fone",title:"fon image"})})},re=function(e){return Object(f.jsxs)("div",{className:B.a.profile,children:[Object(f.jsx)(ce,{}),Object(f.jsx)(ie,{profilePage:e.profilePage,dispatch:e.dispatch})]})};var oe=function(e){var t=e.state;return Object(f.jsxs)("main",{className:g.a.appContent,children:[Object(f.jsx)(v,{}),Object(f.jsx)(N,{}),Object(f.jsx)("div",{className:g.a.appContentWindow,children:Object(f.jsxs)(k.c,{children:[Object(f.jsx)(k.a,{path:"/profile/*",element:Object(f.jsx)(re,{profilePage:t.profilePage,dispatch:e.dispatch})}),Object(f.jsx)(k.a,{path:"/messages/*",element:Object(f.jsx)(V,{state:t.messagesPage,dispatch:e.dispatch})}),Object(f.jsx)(k.a,{path:"/news/*",element:Object(f.jsx)(E,{})}),Object(f.jsx)(k.a,{path:"/music/*",element:Object(f.jsx)(C,{})}),Object(f.jsx)(k.a,{path:"/settings/*",element:Object(f.jsx)(X,{})}),Object(f.jsx)(k.a,{path:"/friends/*",element:Object(f.jsx)(I,{})})]})}),Object(f.jsx)(y,{})]})},de=function(e){n.a.render(Object(f.jsx)(w.a,{children:Object(f.jsx)(oe,{state:m.getState(),dispatch:m.dispatch.bind(m)})}),document.getElementById("root"))};de(m.getState()),m.subscribe((function(){m.getState();de()}))}],[[31,1,2]]]);
//# sourceMappingURL=main.342baecd.chunk.js.map