"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[460],{460:function(t,n,r){r.r(n);var e=r(861),a=r(439),c=r(757),u=r.n(c),i=r(409),s=r(791),o=r(689),p=r(184);n.default=function(){var t=(0,s.useState)([{}]),n=(0,a.Z)(t,2),r=n[0],c=n[1],f=(0,o.UO)().movieId;(0,s.useEffect)((function(){function t(){return t=(0,e.Z)(u().mark((function t(){var n,r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.fT)(f);case 2:n=t.sent,r=n.cast,c(r);case 5:case"end":return t.stop()}}),t)}))),t.apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[f]);return(0,p.jsx)("ul",{children:r.map((function(t){var n=t.id,r=t.name,e=t.character,a=t.profile_path;return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:"https://image.tmdb.org/t/p/w300/"+a,alt:a}),(0,p.jsx)("h4",{children:r}),(0,p.jsx)("p",{children:e})]},n)}))})}},409:function(t,n,r){r.d(n,{Mc:function(){return p},XT:function(){return s},fT:function(){return f},qF:function(){return o}});var e=r(861),a=r(757),c=r.n(a),u=r(263),i="429901df921e7a06d9fe261cd0c4ab69";u.Z.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var t=(0,e.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/trending/movie/day?api_key=".concat(i));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(n));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),p=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),f=function(){var t=(0,e.Z)(c().mark((function t(n){var r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("/movie/".concat(n,"/credits?api_key=").concat(i));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=460.25139c00.chunk.js.map