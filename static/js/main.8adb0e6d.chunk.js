(this["webpackJsonpfilmy-star"]=this["webpackJsonpfilmy-star"]||[]).push([[0],{23:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},53:function(e,t,c){},54:function(e,t,c){},58:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c(24),s=c.n(n),i=(c(45),c(46),c(47),c(16)),r=c(0),o=function(){return Object(r.jsxs)("div",{className:"header",children:[Object(r.jsxs)("div",{className:"headerLeft",children:[Object(r.jsx)(i.b,{to:"/TvMovie/",children:Object(r.jsx)("img",{className:"header__icon",src:"https://www.seekpng.com/png/full/23-234252_tv-movie-logo-png-transparent-tv-and-movie.png",alt:"header icon"})}),Object(r.jsx)(i.b,{to:"/TvMovie/movies/popular",style:{textDecoration:"none"},children:Object(r.jsx)("span",{children:"Popular"})}),Object(r.jsx)(i.b,{to:"/TvMovie/movies/top_rated",style:{textDecoration:"none"},children:Object(r.jsx)("span",{children:"Top rated"})}),Object(r.jsx)(i.b,{to:"/TvMovie/movies/upcoming",style:{textDecoration:"none"},children:Object(r.jsx)("span",{children:"Upcoming"})})]}),Object(r.jsxs)("div",{className:"headerRight",children:[Object(r.jsx)(i.b,{to:"/TvMovie/movies/my-favourite",style:{textDecoration:"none"},children:Object(r.jsx)("span",{children:"My Favourites "})}),Object(r.jsx)(i.b,{to:"/TvMovie/",children:Object(r.jsx)("span",{children:Object(r.jsx)("i",{className:"user__avatar fas fa-user-circle"})})})]})]})},j=c(18),l=(c(53),c(7)),d=c(37),u=c(8),b=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.favouriteMovies})),c=Object(u.c)((function(e){return e.currentMovieDetail})),n=Object(a.useState)(!1),s=Object(j.a)(n,2),i=s[0],o=s[1],b=Object(l.g)().id,O=Object(a.useState)(!1),v=Object(j.a)(O,2),p=v[0],m=v[1];return Object(a.useEffect)((function(){e({type:"SET_CURRENT_MOVIE_DETAIL",payload:b})}),[]),Object(a.useEffect)((function(){t.map((function(e){e.id===c.id&&m(!0)}))}),[t]),Object(r.jsxs)("div",{className:"movie",children:[Object(r.jsx)("div",{className:"movie__intro",children:Object(r.jsx)("img",{className:"movie__backdrop",src:"https://image.tmdb.org/t/p/original".concat(c?c.backdrop_path:"")})}),Object(r.jsxs)("div",{className:"movie__detail",children:[Object(r.jsx)("div",{className:"movie__detailLeft",children:Object(r.jsx)("div",{className:"movie__posterBox",children:Object(r.jsx)("img",{className:"movie__poster",src:"https://image.tmdb.org/t/p/original".concat(c?c.poster_path:"")})})}),Object(r.jsxs)("div",{className:"movie__detailRight",children:[Object(r.jsxs)("div",{className:"movie__detailRightTop",children:[Object(r.jsx)("div",{className:"movie__name",children:c?c.original_title:""}),Object(r.jsx)("div",{className:"movie__tagline",children:c?c.tagline:""}),Object(r.jsxs)("div",{className:"movie__rating",children:[c?c.vote_average:""," ",Object(r.jsx)("i",{class:"fas fa-star"}),Object(r.jsx)("span",{className:"movie__voteCount",children:c?"("+c.vote_count+") votes":""})]}),Object(r.jsx)("div",{className:"movie__runtime",children:c?c.runtime+" mins":""}),Object(r.jsx)("div",{className:"movie__releaseDate",children:c?"Release date: "+c.release_date:""}),Object(r.jsx)("div",{className:"movie__genres",children:c&&c.genres?c.genres.map((function(e){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("span",{className:"movie__genre",id:e.id,children:e.name})})})):""})]}),Object(r.jsxs)("div",{className:"movie__detailRightBottom",children:[Object(r.jsxs)("div",{className:"synopsisText",children:["Synopsis",console.log("favouriteMovies",t),console.log("currentMovieDetail",c),console.log("Checksldlfahsfha",t[1]===c),p?Object(r.jsxs)("span",{className:"favourite",onClick:function(){e({type:"REMOVE_FAVOURITE",payload:c}),m(!1)},children:["Favourite",Object(r.jsx)("i",{class:"newTab favouriteOne fas fa-heart"})]}):Object(r.jsxs)("span",{className:"favourite",onClick:function(){e({type:"SET_FAVOURITE",payload:c}),m(!0)},children:["Add to favourite",Object(r.jsx)("i",{class:"newTab nonFavourite far fa-heart"})]})]}),Object(r.jsx)("div",{children:c?c.overview:""})]})]})]}),Object(r.jsxs)("div",{className:"movie__links",children:[Object(r.jsx)("div",{className:"movie__heading",children:"Useful Links"}),c&&Object(r.jsx)("a",{children:Object(r.jsx)("p",{children:Object(r.jsxs)("span",{className:"movie__previewButton movie__Button",onClick:function(){return o(!i)},children:["Preview video",i?Object(r.jsx)("i",{class:"newTab far fa-eye"}):Object(r.jsx)("i",{class:"newTab far fa-eye-slash"})]})})}),c&&c.homepage&&Object(r.jsx)("a",{href:c.homepage,target:"_blank",style:{textDecoration:"none"},children:Object(r.jsx)("p",{children:Object(r.jsxs)("span",{className:"movie__homeButton movie__Button",children:["Homepage ",Object(r.jsx)("i",{className:"newTab fas fa-external-link-alt"})]})})}),c&&c.imdb_id&&Object(r.jsx)("a",{href:"https://www.imdb.com/title/"+c.imdb_id,target:"_blank",style:{textDecoration:"none"},children:Object(r.jsx)("p",{children:Object(r.jsxs)("span",{className:"movie__imdbButton movie__Button",children:["IMDb",Object(r.jsx)("i",{className:"newTab fas fa-external-link-alt"})]})})})]}),i&&Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"movie__heading",children:"Movie preview video "}),Object(r.jsx)("div",{className:"movie__hlsPlayer",children:Object(r.jsx)(d.a,{src:"https://content.jwplatform.com/manifests/yp34SRmf.m3u8",autoPlay:!0,controls:!0,width:"75%"})})]}),Object(r.jsx)("div",{className:"movie__heading",children:"Production companies"}),Object(r.jsx)("div",{className:"movie__production",children:c&&c.production_companies&&c.production_companies.map((function(e){return Object(r.jsx)(r.Fragment,{children:e.logo_path&&Object(r.jsxs)("span",{className:"productionCompanyImage",children:[Object(r.jsx)("img",{className:"movie__productionComapany",src:"https://image.tmdb.org/t/p/original"+e.logo_path}),Object(r.jsx)("span",{children:e.name})]})})}))})]})},O=(c(23),c(32)),v=c.n(O),p=(c(54),function(e){var t=e.movie,c=Object(a.useState)(!0),n=Object(j.a)(c,2),s=n[0],i=n[1],o=Object(u.c)((function(e){return e.favouriteMovies}));return Object(a.useEffect)((function(){setTimeout((function(){i(!1)}),1500)}),[t.poster_path]),Object(r.jsx)(r.Fragment,{children:s?Object(r.jsx)("div",{className:"cards",children:Object(r.jsx)(O.SkeletonTheme,{color:"#202020",highlightColor:"#444",children:Object(r.jsx)(v.a,{height:300,duration:2})})}):Object(r.jsxs)("div",{className:"cards",onClick:function(){return window.location=window.location.origin+"/TvMovie/movie/".concat(t.id)},children:[o.map((function(e){if(e.id===t.id)return Object(r.jsx)("span",{class:"favourite__indicator",children:Object(r.jsx)("i",{className:"newTab favouriteOne fas fa-heart"})})})),Object(r.jsx)("img",{className:"cards__img",src:"https://image.tmdb.org/t/p/original".concat(t?t.poster_path:"")}),Object(r.jsxs)("div",{className:"cards__overlay",children:[Object(r.jsx)("div",{class:"card__title",children:t?t.original_title:""}),Object(r.jsxs)("div",{class:"card__runtime",children:[t?t.release_date:"",Object(r.jsxs)("span",{className:"card__rating",children:[t?t.vote_average:""," ",Object(r.jsx)("i",{class:"fas fa-star"}),"  "]})]}),Object(r.jsx)("div",{class:"card__description",children:t?t.overview.slice(0,118)+"...":""})]})]})})}),m=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.popularMovies}));return Object(a.useEffect)((function(){e({type:"GET_POPULAR_MOVIES"})}),[]),Object(r.jsxs)("div",{className:"movie_group",children:[Object(r.jsx)("h2",{className:"list_title",children:"Popular Movies"}),Object(r.jsx)("div",{className:"movies_card",children:t.map((function(e){return Object(r.jsx)(p,{movie:e})}))})]})},_=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.topRatedMovies}));return Object(a.useEffect)((function(){e({type:"GET_TOP_RATED_MOVIES"})}),[]),Object(r.jsxs)("div",{className:"movie_group",children:[Object(r.jsx)("h2",{className:"list_title",children:"Top Rated Movies"}),Object(r.jsx)("div",{className:"movies_card",children:t.map((function(e){return Object(r.jsx)(p,{movie:e})}))})]})},h=function(){var e=Object(u.b)(),t=Object(u.c)((function(e){return e.upcomingMovies}));return Object(a.useEffect)((function(){e({type:"GET_UPCOMING_MOVIES"})}),[]),Object(r.jsxs)("div",{className:"movie_group",children:[Object(r.jsx)("h2",{className:"list_title",children:"Upcoming Movies"}),Object(r.jsx)("div",{className:"movies_card",children:t.map((function(e){return Object(r.jsx)(p,{movie:e})}))})]})},f=function(){var e=Object(u.c)((function(e){return e.favouriteMovies}));return Object(r.jsxs)("div",{className:"movie_group",children:[Object(r.jsx)("h2",{className:"list_title",children:"My Favourite Movies"}),Object(r.jsx)("div",{className:"movies_card",children:e.map((function(e){return Object(r.jsx)(p,{movie:e})}))})]})},x=function(){var e=Object(l.g)().type;return Object(r.jsxs)(r.Fragment,{children:["popular"===e&&Object(r.jsx)(m,{}),"top_rated"===e&&Object(r.jsx)(_,{}),"upcoming"===e&&Object(r.jsx)(h,{}),"my-favourite"===e&&Object(r.jsx)(f,{})]})},g=(c(58),function(e){var t=Object.keys(e)[0],c=Object(a.useState)([]),n=Object(j.a)(c,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){fetch("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")).then((function(e){return e.json()})).then((function(e){return i(e.results)}))}),[]),Object(r.jsxs)("div",{className:"movie__group",children:[Object(r.jsx)("h2",{className:"list__title",children:"top_rated"===t?"TOP RATED":t.toUpperCase()}),Object(r.jsx)("div",{className:"movie__list",children:s&&s.map((function(e){return Object(r.jsx)(p,{movie:e})}))})]})}),N=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(g,{popular:!0}),Object(r.jsx)(g,{top_rated:!0}),Object(r.jsx)(g,{upcoming:!0})]})};var E=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(o,{}),Object(r.jsxs)(l.d,{children:[Object(r.jsx)(l.b,{exact:!0,path:"/TvMovie/",children:Object(r.jsx)(N,{})}),Object(r.jsx)(l.b,{path:"/TvMovie/movie/:id",children:Object(r.jsx)(b,{})}),Object(r.jsx)(l.b,{path:"/TvMovie/movies/:type",children:Object(r.jsx)(x,{})}),Object(r.jsx)(l.b,{path:"/TvMovie/:anything",children:Object(r.jsx)(l.a,{to:"/"})})]})]})})},T=c(15),M=c(22),y=c(11),w={favouriteMovies:[],popularMovies:[],topRatedMovies:[],upcomingMovies:[],currentMovieDetail:{}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_FAVOURITE_ASYNC":return Object(y.a)(Object(y.a)({},e),{},{favouriteMovies:[].concat(Object(M.a)(e.favouriteMovies),[t.payload.payload])});case"REMOVE_FAVOURITE_ASYNC":return Object(y.a)(Object(y.a)({},e),{},{favouriteMovies:e.favouriteMovies.filter((function(e){return e!=t.payload.payload}))});case"GET_POPULAR_MOVIES_ASYNC":return Object(y.a)(Object(y.a)({},e),{},{popularMovies:Object(M.a)(t.payload)});case"GET_TOP_RATED_MOVIES_ASYNC":return Object(y.a)(Object(y.a)({},e),{},{topRatedMovies:Object(M.a)(t.payload)});case"GET_UPCOMING_MOVIES_ASYNC":return Object(y.a)(Object(y.a)({},e),{},{upcomingMovies:Object(M.a)(t.payload)});case"SET_CURRENT_MOVIE_DETAIL_ASYNC":return Object(y.a)(Object(y.a)({},e),{},{currentMovieDetail:Object(y.a)({},t.payload)});default:return e}},R=c(33),k=c(38),I=c.n(k),A=c(39),C=c(40),U=c(6),V=c.n(U),P=c(12),D=V.a.mark(W),F=V.a.mark(Z),G=V.a.mark($),L=V.a.mark(ee),Y=V.a.mark(te),B=V.a.mark(ce),J=V.a.mark(ae),X=V.a.mark(ne),H=V.a.mark(se),q=V.a.mark(ie),z=V.a.mark(re),K=V.a.mark(oe),Q=V.a.mark(je);function W(e){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.b)({type:"SET_FAVOURITE_ASYNC",payload:e});case 2:case"end":return t.stop()}}),D)}function Z(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("SET_FAVOURITE",W);case 2:case"end":return e.stop()}}),F)}function $(e){return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(P.b)({type:"REMOVE_FAVOURITE_ASYNC",payload:e});case 2:case"end":return t.stop()}}),G)}function ee(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("REMOVE_FAVOURITE",$);case 2:case"end":return e.stop()}}),L)}function te(e){var t;return V.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,fetch("https://api.themoviedb.org/3/movie/".concat(e.payload,"?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")).then((function(e){return e.json()}));case 2:return t=c.sent,c.next=5,Object(P.b)({type:"SET_CURRENT_MOVIE_DETAIL_ASYNC",payload:t});case 5:case"end":return c.stop()}}),Y)}function ce(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("SET_CURRENT_MOVIE_DETAIL",te);case 2:case"end":return e.stop()}}),B)}function ae(){var e;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then((function(e){return e.json()}));case 2:return e=t.sent,t.next=5,Object(P.b)({type:"GET_POPULAR_MOVIES_ASYNC",payload:e.results});case 5:case"end":return t.stop()}}),J)}function ne(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("GET_POPULAR_MOVIES",ae);case 2:case"end":return e.stop()}}),X)}function se(){var e;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then((function(e){return e.json()}));case 2:return e=t.sent,t.next=5,Object(P.b)({type:"GET_TOP_RATED_MOVIES_ASYNC",payload:e.results});case 5:case"end":return t.stop()}}),H)}function ie(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("GET_TOP_RATED_MOVIES",se);case 2:case"end":return e.stop()}}),q)}function re(){var e;return V.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US").then((function(e){return e.json()}));case 2:return e=t.sent,t.next=5,Object(P.b)({type:"GET_UPCOMING_MOVIES_ASYNC",payload:e.results});case 5:case"end":return t.stop()}}),z)}function oe(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.c)("GET_UPCOMING_MOVIES",re);case 2:case"end":return e.stop()}}),K)}function je(){return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(P.a)([Z(),ee(),ne(),ie(),oe(),ce()]);case 2:case"end":return e.stop()}}),Q)}var le=Object(C.a)(),de=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||T.c,ue={key:"root",storage:I.a},be=Object(R.a)(ue,S),Oe=Object(T.d)(be,de(Object(T.a)(A.logger,le)));le.run(je);Object(R.b)(Oe);var ve=Oe;s.a.render(Object(r.jsx)(u.a,{store:ve,children:Object(r.jsx)(E,{})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.8adb0e6d.chunk.js.map