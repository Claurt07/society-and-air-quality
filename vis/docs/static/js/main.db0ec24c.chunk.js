(this.webpackJsonpvis=this.webpackJsonpvis||[]).push([[0],{128:function(e,t,n){e.exports=n(243)},133:function(e,t,n){},142:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),l=n.n(c),o=(n(133),n(59),n(20)),i=(n(60),n(6)),s=(n(81),n(78)),u=(n(82),n(31)),m=(n(137),n(123)),p=n(56),f=(n(38),n(8)),d=n(246),v=n(247),E=(n(142),n(9)),h=n.n(E),g=n(16),x=n(26),b=n(102),y=n.n(b),w=function(e){return O.apply(this,arguments)};function O(){return(O=Object(g.a)(h.a.mark((function e(t){var n,a=arguments;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{onStep:void 0},e.abrupt("return",new Promise((function(e,a){y.a.parse(t,{worker:!0,header:!0,step:n.onStep,error:function(e){console.error("fetchCsv: error on ".concat(t),{err:e}),a(e.message)},complete:function(t){e(t.data)}})})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var j=function(e){return T.apply(this,arguments)};function T(){return(T=Object(g.a)(h.a.mark((function e(t){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch(t,{method:"GET",mode:"no-cors"});case 3:return n=e.sent,e.t0=console,e.t1=t,e.next=8,n.text();case 8:return e.t2=e.sent,e.t3={data:e.t2},e.t0.log.call(e.t0,e.t1,e.t3),e.abrupt("return",n.json());case 14:throw e.prev=14,e.t4=e.catch(0),console.error("fetchJSON: error on ".concat(t),e.t4),e.t4;case 18:case"end":return e.stop()}}),e,null,[[0,14]])})))).apply(this,arguments)}var k=["2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018"];function C(e){var t=e.name,n=e.children,c=e.context,l=Object(a.useState)({loading:!0}),o=Object(p.a)(l,2),i=o[0],s=o[1];return Object(a.useEffect)((function(){function e(){return(e=Object(g.a)(h.a.mark((function e(){var n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("".concat(t,": loading...")),e.prev=1,e.next=4,c.loadValue();case 4:n=e.sent,s(Object(x.a)({loading:!1},n)),console.log("".concat(t,": ok, updated")),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),console.log("".concat(t,": err, updated")),s({loading:!1,err:e.t0});case 13:case"end":return e.stop()}}),e,null,[[1,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[t,c]),r.a.createElement(c.Provider,{value:i,children:n})}C.defaultValue={loading:!0,err:void 0};var S=C,V=r.a.createContext(Object(x.a)({timeseriesFlat:null,timeseriesVert:null},S.defaultValue));V.displayName="context.acs",V.loadValue=Object(g.a)(h.a.mark((function e(){var t,n;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["/_data/acs/timeseries_flat.csv","/_data/acs/timeseries_vert.csv"].map((function(e){return w(e)})),e.next=3,Promise.all(t);case 3:return n=e.sent,e.abrupt("return",{timeseriesFlat:n[0],timeseriesVert:n[1]});case 5:case"end":return e.stop()}}),e)})));var _=V,P=r.a.createContext(Object(x.a)({timeseriesFlat:null,timeseriesVert:null,stations:null},S.defaultValue));P.displayName="context.epa",P.loadValue=Object(g.a)(h.a.mark((function e(){var t,n,a,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=["/_data/epa/timeseries_flat.csv","/_data/epa/timeseries_vert.csv"].map((function(e){return w(e)})),e.next=3,Promise.all(t);case 3:return n=e.sent,a=k.map((function(e){return j("_data/epa/stations/".concat(e,"_geojson.json"))})),e.next=7,Promise.all(a);case 7:return r=e.sent,e.abrupt("return",{timeseriesFlat:n[0],timeseriesVert:n[1],stations:r});case 9:case"end":return e.stop()}}),e)})));var F=P,z=(n(84),n(54)),A=(n(144),n(118)),J=(n(146),n(117)),L=n(245);var N=function(e){var t=e.children,n=e.contentStyle,a=void 0===n?{}:n;return r.a.createElement(u.a,{style:{minHeight:"100%"}},r.a.createElement(u.a.Content,{style:Object(x.a)({padding:"48px"},a)},t))},B=f.a.Text,D=f.a.Title;function R(){return r.a.createElement(F.Consumer,null,(function(e){return r.a.createElement(N,null,r.a.createElement(z.a,{direction:"vertical",size:"large",style:{padding:"48px"}},r.a.createElement(J.a,{size:"large",icon:r.a.createElement(L.a,null)}),r.a.createElement(f.a,null,r.a.createElement(D,null,"Society and Air Quality"),r.a.createElement(B,null,"EOSC 410 Final Project")," | ",r.a.createElement(B,{type:"secondary"},"University of British Columbia, April 2020")),e.loading?r.a.createElement(A.a,null):e.err?r.a.createElement(B,null,e.err.message):r.a.createElement(B,null,JSON.stringify(e.stations[0][0]))))}))}R.footerText="Robert Lin and Angelene Leow";var H=R,Q=(n(244),n(126)),W=(f.a.Title,f.a.Text);function q(){return r.a.createElement(N,null,r.a.createElement(o.a,{gutter:16},r.a.createElement(i.a,{span:8,offset:16},r.a.createElement(z.a,{direction:"vertical"},r.a.createElement(Q.a,{title:"Questions",bordered:!1},r.a.createElement(W,null,"research questions, few sentences on the relevance of this study"))))))}q.footerText="Robert Lin and Angelene Leow";var G=q,I=f.a.Title;var M=function(){return r.a.createElement(N,null,r.a.createElement(I,null,"TODO"))},U=f.a.Title;var $=function(){return r.a.createElement(N,null,r.a.createElement(U,null,"TODO"))},K=f.a.Title;var X=function(){return r.a.createElement(N,null,r.a.createElement(K,null,"TODO"))},Y=f.a.Text;var Z=function(){var e=Object(a.useState)(0),t=Object(p.a)(e,2),n=t[0],c=t[1],l=Object(a.useRef)(),f=[H,G,M,$,X],E=r.a.createElement(u.a,{style:{minHeight:"100vh"}},r.a.createElement(u.a.Content,null,r.a.createElement(m.a,{dotPosition:"top",draggable:!0,beforeChange:function(e,t){c(t)},ref:function(e){l.current=e},children:f.map((function(e){return r.a.createElement(e,null)}))})),r.a.createElement(u.a.Footer,null,r.a.createElement(o.a,{justify:"space-between"},r.a.createElement(i.a,{span:8},n>0?r.a.createElement(s.a,{type:"ghost",shape:"round",icon:r.a.createElement(d.a,null),size:"small",onClick:function(){l.current.prev()}}):void 0),r.a.createElement(i.a,null,r.a.createElement(Y,{type:"secondary"},f[n].footerText)),r.a.createElement(i.a,{span:8},n<f.length?r.a.createElement(s.a,{type:"ghost",shape:"round",icon:r.a.createElement(v.a,null),size:"small",style:{float:"right"},onClick:function(){l.current.next()}}):void 0))));return r.a.createElement(S,{name:"context.acs",context:_},r.a.createElement(S,{name:"context.epa",context:F},E))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[128,1,2]]]);
//# sourceMappingURL=main.db0ec24c.chunk.js.map