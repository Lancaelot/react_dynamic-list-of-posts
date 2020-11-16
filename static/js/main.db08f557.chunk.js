(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(21)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=n(2),u=(n(15),n(16),n(17),function(e){var t=e.changePostId,n=e.postId,c=Object(a.useState)(!1),o=Object(s.a)(c,2),u=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,u?r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){t(0),l(!1)}},"Close"):r.a.createElement("button",{type:"button",className:"PostsList__button button",onClick:function(){t(n),l(!0)}},"Open"))}),l=function(e){var t=e.posts,n=e.changePostId;return r.a.createElement(r.a.Fragment,null,t.length?r.a.createElement("div",{className:"PostsList"},r.a.createElement("h2",null,"Posts:"),r.a.createElement("ul",{className:"PostsList__list"},t.map((function(e){return r.a.createElement("li",{key:e.id,className:"PostsList__item"},r.a.createElement("div",null,r.a.createElement("b",null,"User #".concat(e.userId)),r.a.createElement("br",null),e.title),r.a.createElement(u,{changePostId:n,postId:e.id}))})))):r.a.createElement("h2",null,"Please wait, posts loading"))},i=n(1),m=n.n(i),p=n(8),f=n(3),b=(n(19),function(e){var t=e.postId,n=e.add,c=Object(a.useState)(""),o=Object(s.a)(c,2),u=o[0],l=o[1],i=Object(a.useState)(""),m=Object(s.a)(i,2),p=m[0],f=m[1],b=Object(a.useState)(""),v=Object(s.a)(b,2),d=v[0],E=v[1];return r.a.createElement("form",{className:"NewCommentForm",onSubmit:function(e){e.preventDefault(),n({postId:t,name:u,email:p,body:d}),l(""),f(""),E("")}},r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:u,onChange:function(e){var t=e.target.value;l(t)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:p,onChange:function(e){var t=e.target.value;f(t)}})),r.a.createElement("div",{className:"form-field"},r.a.createElement("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:d,onChange:function(e){var t=e.target.value;E(t)}})),r.a.createElement("button",{type:"submit",className:"NewCommentForm__submit-button button"},"Add a comment"))}),v=(n(20),"https://mate-api.herokuapp.com");function d(e,t){return E.apply(this,arguments)}function E(){return(E=Object(f.a)(m.a.mark((function e(t,n){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(v).concat(t),n);case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("".concat(a.status," - ").concat(a.statusText));case 5:return e.next=7,a.json();case 7:return r=e.sent,e.abrupt("return",r.data);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(){return(h=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/posts/",{method:"GET"});case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function _(e){return O.apply(this,arguments)}function O(){return(O=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("".concat("/posts/").concat(t),{method:"GET"});case 2:if(n=e.sent,t){e.next=5;break}return e.abrupt("return",null);case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=n(9),y=function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d("/comments/");case 2:if(n=e.sent,t){e.next=5;break}return e.abrupt("return",[]);case 5:return e.abrupt("return",n.filter((function(e){return e.postId===t})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(n="/comments/",a=Object(j.a)({},t),d(n,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(a)})));case 1:case"end":return e.stop()}var n,a}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",d("".concat("/comments/").concat(t),{method:"DELETE"}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.commentsLength,n=e.toggleCommentVisibility,c=Object(a.useState)(!1),o=Object(s.a)(c,2),u=o[0],l=o[1];return r.a.createElement(r.a.Fragment,null,u?r.a.createElement("button",{type:"button",className:"button",onClick:function(){l(!1),n(!1)}},"Hide ".concat(t," comments")):r.a.createElement("button",{type:"button",className:"button",onClick:function(){l(!0),n(!0)}},"Show ".concat(t," comments")))},x=function(e){var t=e.comment,n=e.remove;return r.a.createElement("li",{className:"PostDetails__list-item"},r.a.createElement("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return n(t.id)}},"Delete"),r.a.createElement("p",null,t.body))},k=function(e){var t=e.remove,n=e.comments;return r.a.createElement("ul",{className:"PostDetails__list"},n.map((function(e){return r.a.createElement(x,{key:e.id,comment:e,remove:t})})))},P=function(e){var t=e.commentsLength,n=e.comments,c=e.remove,o=Object(a.useState)(!0),u=Object(s.a)(o,2),l=u[0],i=u[1];return r.a.createElement("section",{className:"PostDetails__comments"},r.a.createElement(g,{commentsLength:t,toggleCommentVisibility:function(){i(!l)}}),!l&&r.a.createElement(k,{comments:n,remove:c}))},C=function(e){var t=e.postId,n=Object(a.useState)([]),c=Object(s.a)(n,2),o=c[0],u=c[1],l=Object(a.useState)(null),i=Object(s.a)(l,2),v=i[0],d=i[1],E=function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N(t);case 2:u([].concat(Object(p.a)(o),[t]));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:n=o.filter((function(e){return t!==e.id})),u(n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){var e=function(){var e=Object(f.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_(t);case 2:n=e.sent,d(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(f.a)(m.a.mark((function e(){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y(t);case 2:n=e.sent,u(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),n()}),[t]),r.a.createElement(r.a.Fragment,null,v?r.a.createElement("div",{className:"PostDetails"},r.a.createElement("h2",null,"Post details:"),r.a.createElement("section",{className:"PostDetails__post"},r.a.createElement("p",null,v.body)),!!o.length&&r.a.createElement(P,{commentsLength:o.length,comments:o,remove:h}),r.a.createElement("section",null,r.a.createElement("div",{className:"PostDetails__form-wrapper"},r.a.createElement(b,{postId:t,add:E})))):r.a.createElement("h2",null,"Please wait, posts loading"))},S=function(){var e=Object(a.useState)([]),t=Object(s.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(0),u=Object(s.a)(o,2),i=u[0],m=u[1],p=Object(a.useState)(0),f=Object(s.a)(p,2),b=f[0],v=f[1];return Object(a.useEffect)((function(){(function(e){return h.apply(this,arguments)})(i).then((function(e){c(0!==i?e.filter((function(e){return e.userId===i})):e)}))}),[i]),r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App__header"},r.a.createElement("label",null,"Select a user: \xa0",r.a.createElement("select",{className:"App__user-selector",value:i,onChange:function(e){var t=e.target.value;m(+t)}},r.a.createElement("option",{value:"0"},"All users"),r.a.createElement("option",{value:"1"},"Leanne Graham"),r.a.createElement("option",{value:"2"},"Ervin Howell"),r.a.createElement("option",{value:"3"},"Clementine Bauch"),r.a.createElement("option",{value:"4"},"Patricia Lebsack"),r.a.createElement("option",{value:"5"},"Chelsey Dietrich"),r.a.createElement("option",{value:"6"},"Mrs. Dennis Schulist"),r.a.createElement("option",{value:"7"},"Kurtis Weissnat"),r.a.createElement("option",{value:"8"},"Nicholas Runolfsdottir V"),r.a.createElement("option",{value:"9"},"Glenna Reichert"),r.a.createElement("option",{value:"10"},"Leanne Graham")))),r.a.createElement("main",{className:"App__main"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(l,{posts:n,changePostId:function(e){v(e)}})),r.a.createElement("div",{className:"App__content"},b?r.a.createElement(C,{postId:b}):r.a.createElement("div",null,"Please, choose a post"))))};o.a.render(r.a.createElement(S,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.db08f557.chunk.js.map