(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[79203],{10134:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game",function(){return a(89401)}])},21046:function(e,t,a){"use strict";a.d(t,{_l:function(){return l},dO:function(){return i},kJ:function(){return s}});var r=a(14646),n=a(12774);let s=n.qR,l=r.OX,i=r.Le},89401:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return $}});var r=a(85893),n=a(67294),s=a(46313),l=a(26830),i=a(13301),o=a(4498),u=a(33209),c=a(44715),d=a(96851),m=a(88642),g=a(25199),p=a(67749),f=a(11163),y=a.n(f),h=a(94745),b=a(32157),v=a(90611),x=a(18288),w=a(84290),D=a(60081),k=a(50319),E=a(73359),_=a(21046),j=a(89950),Z=a(74040),G=a(95129),I=a(42257);async function P(e){let t=await fetch(e,{method:"GET"}),a=await t.text();return a}let R=e=>{let{gameId:t,gameTechnology:a}=e,{user:r}=n.useContext(Z.S),s=n.useContext(G.Z),l=n.useContext(I.ZP),[i]=(0,k.D)(_._l),[o]=(0,k.D)(_.dO),[u,c]=(0,E.t)(_.kJ),d=n.useRef([]);return n.useEffect(()=>{if(!c.called||c.loading)return;let e=c.data?.gameData;c.error?(d.current.forEach(e=>{e({type:"requestGameDataNone"})}),d.current=[]):e&&e.dataUrl?P(e.dataUrl).then(t=>{let a={...e,data:t};d.current.forEach(e=>{e({type:"requestGameDataResponse",data:{store:a,error:c.error}})}),d.current=[]}):(d.current.forEach(e=>{e({type:"requestGameDataResponse",data:{store:void 0,error:c.error}})}),d.current=[])},[c]),n.useEffect(()=>{let e=e=>{let n=t=>{let a=e.source;a&&a.postMessage(t,"*")};r?(d.current=[n,...d.current],u({variables:{id:t,technology:a},fetchPolicy:"network-only"})):d.current.forEach(e=>{e({type:"requestGameDataResponse",data:{store:void 0,error:null}})})},n=e=>{let{store:r,version:n,updatedAtTz:o,playedTime:u}=e.data,c=JSON.stringify(r),d=s.browser?.name||"",m=(0,I.cy)(l);i({variables:{input:{data:c,id:t,technology:a,version:n,browser:d,playedTime:u,deviceType:m,updatedAtTz:o}}})},c=e=>{let{version:r}=e.data,n=s.browser?.name||"",i=(0,I.cy)(l);o({variables:{input:{id:t,technology:a,version:r,browser:n,deviceType:i}}})},m=t=>{if(t.data&&t.data.type===j.V)switch(t.data.event){case"requestGameData":e(t);break;case"updateGameData":case"replaceGameData":r&&n(t);break;case"clearGameData":r&&c(t);break;default:return}};return window.addEventListener("message",m),function(){window.removeEventListener("message",m)}},[i,u,o,t,a,r,s.browser,l]),null};var S=a(89041),C=a(81792),L=a(98718),T=a(63306),q=a(68771),N=a(5152),O=a.n(N),M=a(69395),F=a(17134);let A=O()(()=>Promise.all([a.e(84275),a.e(76532),a.e(9943),a.e(29269)]).then(a.bind(a,89149)),{loadableGenerated:{webpack:()=>[89149]},loading:()=>null,ssr:!0}),H=O()(()=>Promise.all([a.e(84275),a.e(76532),a.e(9943),a.e(46996)]).then(a.bind(a,43382)),{loadableGenerated:{webpack:()=>[43382]},loading:()=>null,ssr:!0}),J=O()(()=>Promise.all([a.e(84275),a.e(76532),a.e(9943),a.e(2739)]).then(a.bind(a,5054)),{loadableGenerated:{webpack:()=>[5054]},loading:()=>null,ssr:!0}),W=e=>{let{game:t,instant:a,related:l,alternatives:i,hotGames:o,newGames:u}=e,{routeHelper:c}=n.useContext(T.Z),{isDesktop:d}=n.useContext(I.ZP),m=(0,h.mV)(),{czyExpNewGamePageDesktop3_CZY_11750:g}=n.useContext(M.T);n.useEffect(()=>((0,F.a)({gameId:t.id}),()=>(0,F.a)({gameId:null})),[t.id]);let p={name:t.name,category:t.category.name},f=t.pageTitle?t.pageTitle:m._("game.head.title",{name:t.name}),y=t.metaDescription||m._("game.head.metaDescriptionFallback",p),k=c.gameCanonical(t.slug),E=s.Z.Instance.data.advertizing.domain,_=!d&&!t.iosFriendly&&!t.androidFriendly,j=!!t.disableAds||"UNAVAILABLE"===t.status||_||(0,q.j)(),Z=t.tags.map(e=>e.enSlug||e.slug);return n.useEffect(()=>{let e;if("iframe"!==t.technology||"10112"!==t.id||!t.technologyOptions?.loaderConfig?.url||!HTMLScriptElement.supports("speculationrules"))return;(e=document.createElement("script")).id="currentSpecRules",e.type="speculationrules";let a={prerender:[{urls:[t.technologyOptions.loaderConfig.url]}]};return e.textContent=JSON.stringify(a),document.body.append(e),()=>{e&&e.remove()}},[t]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(b.Z,{advertisingGame:{gameName:t.name,gameSlug:t.slug,categoryEnSlug:t.category.enSlug,tagsSlug:Z,numLikes:t.upvotes},disabled:j,smartRefresh:{enabled:!!t.smartRefresh,minWaitInMs:t.minWaitForSmartRefreshInMs,maxWaitInMs:t.maxWaitForSmartRefreshInMs},gamepage_exp_24:void 0!==g?"enabled"===g:void 0,children:[(0,r.jsxs)(x.Z,{title:f,metaDescription:y,canonical:k,alternatives:i,children:[(0,r.jsx)("meta",{name:"apple-mobile-web-app-title",content:t.name}),(0,r.jsx)("link",{rel:"preconnect",href:E}),(()=>{if(t.customStructuredData)return(0,r.jsx)("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:t.customStructuredData}})})()]}),(0,r.jsx)(D.Z,{canonical:k,title:f,description:y,imageUrl:t.cover,type:"game"}),(0,r.jsx)(C.Z,{children:"enabled"===g?(0,r.jsx)(A,{game:t,related:l,hotGames:o,newGames:u}):(0,r.jsx)(H,{game:t,related:l})}),(0,r.jsx)(L.Z,{children:(0,r.jsx)(J,{game:t,instant:a,related:l})})]},t.slug),(0,r.jsx)(w.Z,{game:t},`gametracking-${t.slug}`),(0,r.jsx)(v.J,{game:t}),(0,r.jsx)(R,{gameId:t.id,gameTechnology:t.technology}),(0,r.jsx)(S.Z,{gameId:t.id})]})};W.getInitialProps=async e=>{let t=(e,t,a)=>{if(e.collection){let r=t.tagPageDirectLink(e.collection,{returnRelative:a});return r}{let r=t.categoryPageDirectLink(e.category.slug,{returnRelative:a});return r}},{pageService:a,routeDataService:r}=(0,p.b)(e),n=e.query&&e.query[m.l1],c=(e.query&&e.query.buildId)??null,{deviceType:g}=(0,i.mO)(e),f=(0,i.yz)(g),h=!g.isDesktop,b=h?o.gM:o.$d,[{game:v,related:x,hotGames:w,newGames:D,instant:k},E]=await Promise.all([a.gamePage(n,b,f,c),r.getRouteProviderData("game")]),{res:_}=e,j=(0,u.Kd)(e);if("ARCHIVED"===v.status){let a=await r.getLocaleRouteProviderData(j),n=d.Z.createFromContext(e,a);if(_){let e=t(v,n,!1);_.writeHead(302,{Location:e.as}),_.end()}else{let e=t(v,n,!0);y().push(e.href,e.as)}}_&&v.isKids&&(_.writeHead(302,{Location:`${s.Z.Instance.data.kids}/game/${v.slug}`}),_.end());let Z=(0,l.$W)(v.slug,E);return{game:v,related:x,hotGames:w,newGames:D,instant:k,alternatives:Z}};var $=(0,c.Z)("game")((0,g.Z)(W))}},function(e){e.O(0,[7581,56774,25199,92569,49774,92888,40179],function(){return e(e.s=10134)}),_N_E=e.O()}]);