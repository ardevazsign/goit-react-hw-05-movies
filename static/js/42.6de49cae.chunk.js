"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[42],{42:function(e,t,r){r.r(t),r.d(t,{default:function(){return N}});var n=r(861),a=r(439),s=r(757),i=r.n(s),c=r(791),o=r(689),u=r(87),l=r(714),v=r(455),p="MovieDetailsPage_backArrow__GyJ7+",f="MovieDetailsPage_movieDetailsContainer__RRyXo",d="MovieDetailsPage_image__oMCC0",_="MovieDetailsPage_movieDetailsWrap__BBIxM",h="MovieDetailsPage_mainTitle__SbYRD",m="MovieDetailsPage_userScore__dbz-v",x="MovieDetailsPage_percent__5KlGE",g="MovieDetailsPage_genreDetails__geMtd",w="MovieDetailsPage_contentOverview__vHUkq",j="MovieDetailsPage_infoBtn__Ocbgj",b="MovieDetailsPage_movieCast__C9rtq",D="MovieDetailsPage_movieReviews__mOwzZ",M="MovieDetailsPage_movieInfo__RVh2B",k=r(202),Z=r(184),N=function(){var e,t=(0,o.UO)().movieId,r=(0,c.useState)(),s=(0,a.Z)(r,2),N=s[0],P=s[1],y=(0,o.TH)(),C=(0,c.useRef)((null===(e=y.state)||void 0===e?void 0:e.from)||"/");return(0,c.useEffect)((function(){(0,n.Z)(i().mark((function e(){var r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,l.Y5)(t);case 3:r=e.sent,P(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[t]),N?(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)("div",{className:p,children:(0,Z.jsx)(u.rU,{to:C.current,children:(0,Z.jsx)(k.x_l,{})})}),(0,Z.jsxs)("div",{className:f,children:[(0,Z.jsx)("img",{className:d,src:N.poster_path?"https://image.tmdb.org/t/p/w500".concat(N.poster_path):"https://fakeimg.pl/450x500/13e5f0/000?text=No+Image&font=lobster",alt:N.title}),(0,Z.jsxs)("div",{className:_,children:[(0,Z.jsx)("h1",{className:h,children:N.title}),(0,Z.jsxs)("h4",{className:m,children:["User score:   ",(0,Z.jsxs)("span",{className:x,children:[Math.round(10*N.vote_average),"%"]})]}),(0,Z.jsx)("h2",{children:"Genres"}),(0,Z.jsx)("p",{className:g,children:N.genres.map((function(e){return(0,Z.jsxs)("span",{children:[" ",e.name]},e.id)}))}),(0,Z.jsx)("h2",{children:"Overview"}),(0,Z.jsx)("p",{className:w,children:N.overview})]})]}),(0,Z.jsx)("h2",{className:M,children:"Additional information"}),(0,Z.jsxs)("div",{className:j,children:[(0,Z.jsx)(u.rU,{to:"cast",className:b,children:"Cast"}),(0,Z.jsx)(u.rU,{to:"reviews",className:D,children:"Reviews"})]}),(0,Z.jsx)(c.Suspense,{fallback:(0,Z.jsx)(v.a,{}),children:(0,Z.jsx)(o.j3,{})})]}):(0,Z.jsx)(v.a,{})}},714:function(e,t,r){r.d(t,{Hx:function(){return v},Y5:function(){return u},mv:function(){return o},uV:function(){return l},wr:function(){return c}});var n=r(861),a=r(757),s=r.n(a),i=r(16);i.Z.defaults.baseURL="https://api.themoviedb.org/3/",i.Z.defaults.params={api_key:"acbe04d9b6826898170f4d9e0758e12a"};var c=function(){var e=(0,n.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("trending/movie/day");case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("search/movie?query=".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t));case 2:return r=e.sent,e.abrupt("return",r.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/credits?"));case 2:return r=e.sent,e.abrupt("return",r.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,n.Z)(s().mark((function e(t){var r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("movie/".concat(t,"/reviews?"));case 2:return r=e.sent,e.abrupt("return",r.data.results);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=42.6de49cae.chunk.js.map