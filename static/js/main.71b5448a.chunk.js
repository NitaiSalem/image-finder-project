(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{100:function(e,t,a){},104:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(26),s=a.n(i),r=a(34),o=a(17),d=a(13),l=(a(91),a(172)),u=a(71),j=a.n(u),h=function(e){var t=1048576;return e<1024?e:e<t?(e/1024).toFixed(1)+"K":e<1073741824?(e/t).toFixed(1)+"M":void 0},b=a(2),m=function(e){var t=e.displayImages,a=e.handleAddToFavs;return t.map((function(e){return Object(b.jsxs)("div",{className:"image-container",children:[Object(b.jsxs)("div",{id:e.id,className:"image-text-container",children:[Object(b.jsxs)("h5",{className:"image-info",children:["Owner: ",e.user]}),Object(b.jsxs)("h5",{id:"imageSize",className:"image-info",children:["Image size: ",h(e.imageSize)]}),Object(b.jsx)(l.a,{"aria-label":"delete",size:"small",onClick:function(){return a(e)},children:Object(b.jsx)(j.a,{fontSize:"small",style:{fill:"#e34231"}})})]}),Object(b.jsx)("img",{className:"image",src:e.largeImageURL,alt:e.tags,width:"150px",height:"99px",id:e.id})]},e.id)}))},g=(a(100),a(15)),v=function(e){var t=e.favoriteList,a=e.handleAddToFavs,n=Object(g.f)();return Object(b.jsxs)("div",{className:"home-container",children:[t.length>0&&Object(b.jsx)(m,{displayImages:t,handleAddToFavs:a}),Object(b.jsx)("button",{className:"search-link",onClick:function(){return n.push("/search")},children:"Add image"})]})},f=a(53),x=a.n(f),O=a(73),p=(a(104),a(74)),N=a.n(p),k=a(173),F=function(e){var t=e.images,a=e.handleAddToFavs,n=e.currentFavoriteList;return Object(b.jsx)("div",{className:"image-results-container",children:t.map((function(e){return Object(b.jsxs)("div",{id:e.id,className:"image-container",children:[Object(b.jsx)("div",{className:"image-text-container",children:Object(b.jsx)(k.a,{id:"addOrRemoveButton",className:"addOrRemove-button",variant:"contained",color:"success",onClick:function(){return a(e)},children:n.find((function(t){return t.id===e.id}))?"Remove":"Add"})}),Object(b.jsx)("img",{className:"image",src:e.largeImageURL,alt:e.tags,width:"150px",height:"99px",id:e.id})]},e.id)}))})},S=function(e){var t=e.currPage,a=e.changePage,n=e.resultImages;return Object(b.jsxs)("div",{className:"nav-buttons-container",children:[Object(b.jsx)("div",{className:"grow",children:Object(b.jsx)(k.a,{className:"next-button",disabled:t<=1,onClick:function(){a(-1)},children:"Previous page"})}),30===(null===n||void 0===n?void 0:n.length)&&Object(b.jsx)("div",{className:"next-button-container",children:Object(b.jsx)(k.a,{className:"next-button",disabled:30!==(null===n||void 0===n?void 0:n.length),onClick:function(){a(1)},children:"Next page"})})]})},T=a(169),C=function(e){var t=e.onTextChange,a=e.search,n=e.moveToHomePage;return Object(b.jsxs)("div",{className:"search-keys-container",children:[Object(b.jsx)(T.a,{className:"text-field",onChange:t,label:"Search",placeholder:"Enter search image text",variant:"standard",onKeyUp:function(e){"Enter"===e.code&&a()}}),Object(b.jsx)(k.a,{className:"search-button",onClick:a,variant:"contained",children:"Search"}),Object(b.jsx)(k.a,{className:"back-button",variant:"outlined",onClick:n,children:"Back"})]})},I=function(e){var t=e.handleAddToFavs,a=e.favoriteList,c=Object(g.f)(),i=Object(n.useState)(""),s=Object(d.a)(i,2),r=s[0],o=s[1],l=Object(n.useState)([]),u=Object(d.a)(l,2),j=u[0],h=u[1],m=Object(n.useState)(!1),v=Object(d.a)(m,2),f=v[0],p=v[1],k=Object(n.useState)(1),T=Object(d.a)(k,2),I=T[0],y=T[1],A=function(){var e=Object(O.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==r){e.next=4;break}h([]),e.next=17;break;case 4:return e.prev=4,e.next=7,N.a.get("".concat("https://pixabay.com/api","/?key=").concat("23641822-956778db124c800e193674c0c","&q=").concat(r,"&image_type=photo&per_page=").concat(30,"&page=").concat(I,"&safesearch=true"));case 7:t=e.sent,h(t.data.hits),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(4),console.log(e.t0);case 14:return e.prev=14,p(!0),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[4,11,14,17]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){r&&A()}),[I]);return Object(b.jsxs)("div",{className:"search-container",children:[Object(b.jsx)(C,{onTextChange:function(e){var t=e.target.value;o(t)},search:function(){1===I?A():y(1)},moveToHomePage:function(){c.push("/")}}),Object(b.jsx)(F,{images:j,handleAddToFavs:t,currentFavoriteList:a}),f&&0===j.length?Object(b.jsx)("h2",{children:"No Results"}):f&&Object(b.jsx)(S,{currPage:I,changePage:function(e){y((function(t){return t+e}))},resultImages:j})]})};var y=function(){var e=Object(n.useState)(JSON.parse(localStorage.getItem("favoriteImages"))||[]),t=Object(d.a)(e,2),a=t[0],c=t[1],i=function(e){var t;t=a.find((function(t){return t.id===e.id}))?a.filter((function(t){var a=t.id;return e.id!==a})):[].concat(Object(o.a)(a),[e]),c(t),function(e){localStorage.setItem("favoriteImages",JSON.stringify(e))}(t)};return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(r.a,{children:Object(b.jsxs)(g.c,{children:[Object(b.jsx)(g.a,{exact:!0,path:"/",children:Object(b.jsx)(v,{favoriteList:a,handleAddToFavs:i})}),Object(b.jsx)(g.a,{exact:!0,path:"/search",children:Object(b.jsx)(I,{favoriteList:a,handleAddToFavs:i})})]})})})},A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,174)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;a(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(r.b,{children:Object(b.jsx)(y,{})})}),document.getElementById("root")),A()},91:function(e,t,a){}},[[126,1,2]]]);
//# sourceMappingURL=main.71b5448a.chunk.js.map