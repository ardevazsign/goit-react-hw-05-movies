"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[184],{673:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(439),a=r(791),u=r(689),s=r(714),c="ReviewList_warningReviews__rpVU5",i="ReviewList_authorName__G4U8w",o="ReviewList_mainName__2+R7V",f="ReviewList_itemHolder__1t65g",v="ReviewList_contentReviews__2iWBT",p="ReviewList_createdDate__16f8r",d=r(184),h=function(){var e=(0,u.UO)().movieId,t=(0,a.useState)([]),r=(0,n.Z)(t,2),h=r[0],l=r[1];return(0,a.useEffect)((function(){(0,s.Hx)(e).then(l)}),[e]),(0,d.jsx)("div",{children:(null===h||void 0===h?void 0:h.length)>0?(0,d.jsx)("ul",{children:h.map((function(e){var t=e.id,r=e.author,n=e.created_at,a=e.content;return(0,d.jsxs)("li",{className:f,children:[(0,d.jsx)("p",{className:i,children:"Author name: "}),(0,d.jsx)("h3",{className:o,children:r}),(0,d.jsx)("h4",{className:p,children:n.slice(0,10)}),(0,d.jsx)("p",{className:v,children:a})]},t)}))}):(0,d.jsx)("p",{className:c,children:'"We don\'t have any reviews for this movie."'})})}},714:function(e,t,r){r.d(t,{Hx:function(){return v},Y5:function(){return o},mv:function(){return i},uV:function(){return f},wr:function(){return c}});var n=r(861),a=r(757),u=r.n(a),s=r(16);s.Z.defaults.baseURL="https://api.themoviedb.org/3/",s.Z.defaults.params={api_key:"acbe04d9b6826898170f4d9e0758e12a"};var c=function(){var e=(0,n.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(u().mark((function e(t){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=184.36f4fd75.chunk.js.map