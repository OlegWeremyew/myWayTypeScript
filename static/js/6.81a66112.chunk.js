(this.webpackJsonpsocial_network=this.webpackJsonpsocial_network||[]).push([[6],{327:function(e,t,s){e.exports={chat__item:"Messages_chat__item__rvdcq"}},328:function(e,t,s){e.exports={message:"Message_message__3voQ6",message__item:"Message_message__item__34l0T",message__userName:"Message_message__userName__2hie8",message__img:"Message_message__img__2yvRa",message__text:"Message_message__text__36qp9"}},329:function(e,t,s){e.exports={form__btn:"AddMessageForm_form__btn__1A1Fo",textarea:"AddMessageForm_textarea__1SV0Q"}},330:function(e,t,s){e.exports={chatBlock:"Chat_chatBlock__3pIRB"}},331:function(e,t,s){e.exports={chatPageBlock:"ChatPage_chatPageBlock__1fsnk",chatPage__title:"ChatPage_chatPage__title__3SkW7"}},338:function(e,t,s){"use strict";s.r(t);var a=s(1),c=s.n(a),r=s(22),n=s(327),i=s.n(n),_=s(21),o=s(328),j=s.n(o),l=s(16),m=s(8),b=s(0),u=c.a.memo((function(e){var t=e.message,s="".concat(m.a.PROFILE,"/").concat(t.userId);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("div",{className:j.a.message,children:[Object(b.jsxs)("div",{className:j.a.message__item,children:[Object(b.jsx)(l.b,{to:s,children:Object(b.jsx)("img",{className:j.a.message__img,src:t.photo,alt:"avatar",title:"avatar ".concat(t.userName)})}),Object(b.jsx)("div",{className:j.a.message__userName,children:t.userName}),Object(b.jsx)("br",{})]}),Object(b.jsx)("div",{className:j.a.message__text,children:t.message})]}),Object(b.jsx)("hr",{})]})})),g=s(24),h=function(){var e=Object(_.c)(),t=Object(a.useState)(!1),s=Object(r.a)(t,2),c=s[0],n=s[1],o=Object(_.d)(g.e),j=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e;c&&(null===(e=j.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e,o,c]),Object(b.jsxs)("div",{className:i.a.chat__item,onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop)-t.clientHeight<300?!c&&n(!0):c&&n(!1)},children:[o.map((function(e){return Object(b.jsx)(u,{message:e},e.id)})),Object(b.jsx)("div",{ref:j})]})},d=s(329),O=s.n(d),x=s(15),f=s(70),v=function(){var e=Object(_.c)(),t=Object(a.useState)(x.a),s=Object(r.a)(t,2),c=s[0],n=s[1],i=Object(_.d)(g.f);return Object(b.jsxs)("div",{children:[Object(b.jsx)("textarea",{className:O.a.textarea,placeholder:"write your message \u2709",value:c,onChange:function(e){return function(e){n(e)}(e.currentTarget.value)},onKeyPress:function(t){"Enter"===t.key&&(e(Object(f.b)(c)),n(x.a))}}),Object(b.jsx)("div",{className:O.a.form__btn,onClick:function(){c.trim()&&(e(Object(f.b)(c)),n(x.a))},children:Object(b.jsx)("button",{disabled:"ready"!==i,children:"Send"})})]})},p=s(330),N=s.n(p),k=function(){var e=Object(_.c)(),t=Object(_.d)(g.f);return Object(a.useEffect)((function(){return e(Object(f.c)()),function(){e(Object(f.d)())}}),[e]),Object(b.jsxs)(b.Fragment,{children:["error"===t&&Object(b.jsx)("div",{children:"Some error occurred. Please refresh this page"}),Object(b.jsxs)("div",{className:N.a.chatBlock,children:[Object(b.jsx)(h,{}),Object(b.jsx)(v,{})]})]})},P=s(331),M=s.n(P);t.default=function(){return Object(b.jsxs)("section",{className:M.a.chatPageBlock,children:[Object(b.jsx)("div",{className:M.a.chatPage__title,children:"Common chat"}),Object(b.jsx)(k,{})]})}}}]);
//# sourceMappingURL=6.81a66112.chunk.js.map