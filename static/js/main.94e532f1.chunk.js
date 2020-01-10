(this["webpackJsonpgeops-routing-demo"]=this["webpackJsonpgeops-routing-demo"]||[]).push([[0],{175:function(e,t,a){e.exports=a(208)},180:function(e,t,a){},204:function(e,t,a){},206:function(e,t,a){},208:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),c=a.n(o),l=(a(180),a(91)),s=a(84),i=a(135),u=a(136),m={hops:[],mot:"bus"},h=function(e,t){var a={hops:t.hops,mot:t.mot};return Object(u.a)({},e,{},a)},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FIND_ROUTE":return h(e,t);default:return e}},d=s.d,f=Object(s.c)({MapReducer:p}),g=Object(s.e)(f,d(Object(s.a)(i.a))),v=a(88),E=a(64),b=a(99),S=a(100),y=a(116),w=a(255),R=a(151),C=a(262),k=a(259),F=a(149),j=a(150),O=a(261),x=a(93),M=a.n(x),B=(a(204),a(120)),I=a(97),T=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(b.a)(this,Object(S.a)(t).call(this,e))).findRouteCancelToken=M.a.CancelToken,a.findRouteCancel=null,a.routeStyle=new B.b({stroke:new I.a({color:"blue",lineDash:[4],width:3})}),a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){var e=new C.a({source:new F.a});this.map=new w.a({target:"map",layers:[e],view:new R.a({projection:"EPSG:4326",center:[25,25],zoom:4})})}},{key:"componentDidUpdate",value:function(e){var t=this;this.props.hops&&this.props.hops!==e.hops&&(this.findRouteCancel&&this.findRouteCancel(),M.a.get(this.props.routingUrl,{params:{via:this.props.hops.join("|"),mot:this.props.mot,key:this.props.APIKey},cancelToken:new this.findRouteCancelToken((function(e){t.findRouteCancel=e}))}).then((function(e){var a=new O.a({features:(new j.a).readFeatures(e.data)}),n=new k.a({source:a,style:t.routeStyle});t.map.addLayer(n),t.map.getView().fit(a.getExtent(),t.map.getSize())}),(function(e){console.log(e)})))}},{key:"render",value:function(){return r.a.createElement("div",{id:"map",className:"MapComponent"})}}]),t}(n.Component),D=Object(l.b)((function(e){return{hops:e.MapReducer.hops,mot:e.MapReducer.mot}}))(T),L=a(5),U=a(250),N=a(260),H=a(251),K=a(249),P=a(257),q=a(256),z=a(254),A=a(145),_=a.n(A),J=a(147),W=a.n(J),G=a(146),V=a.n(G),$=a(148),Q=a.n($),X=(a(206),a(252)),Y=a(253),Z=a(137),ee=a.n(Z),te=a(138),ae=a.n(te),ne=a(139),re=a.n(ne),oe=a(140),ce=a.n(oe),le=a(141),se=a.n(le),ie=a(142),ue=a.n(ie),me=a(143),he=a.n(me),pe=a(144),de=a.n(pe),fe=[{name:"bus",icon:r.a.createElement(ee.a,null)},{name:"ferry",icon:r.a.createElement(ae.a,null)},{name:"gondola",icon:r.a.createElement(re.a,null)},{name:"tram",icon:r.a.createElement(ce.a,null)},{name:"rail",icon:r.a.createElement(se.a,null)},{name:"funicular",icon:r.a.createElement(ue.a,null)},{name:"cable_car",icon:r.a.createElement(he.a,null)},{name:"subway",icon:r.a.createElement(de.a,null)}];function ge(e){var t=e.children,a=e.value,n=e.index,o=Object(L.a)(e,["children","value","index"]);return r.a.createElement(K.a,Object.assign({component:"div",role:"tabpanel",hidden:a!==n,id:"simple-tabpanel-".concat(n),"aria-labelledby":"simple-tab-".concat(n)},o),a===n&&r.a.createElement(P.a,{p:3},t))}var ve=function(e){function t(e){var a;Object(v.a)(this,t),(a=Object(b.a)(this,Object(S.a)(t).call(this,e))).validateMots=function(e){var t=[];return e.forEach((function(e){var a=fe.find((function(t){return t.name===e}));a&&t.push(a)})),0===t.length&&t.push(fe[0]),t},a.handleMotChange=function(e,t){a.setState({currentMot:t}),console.log(t)},a.onFieldFocus=function(e){a.setState({focusedFieldIndex:e})},a.onFieldBlur=function(){a.setState({focusedFieldIndex:null})},a.searchStops=function(e,t){if(!e.target.value){var n=a.state.currentStops;return n[t]="",void a.setState({currentSearchResults:[],currentStops:n,showLoadingBar:!1})}var r=a.state.currentStops;r[t]=e.target.value,a.setState({currentStops:r,showLoadingBar:!0}),a.searchCancel&&a.searchCancel(),M.a.get(a.props.stationSearchUrl,{params:{q:e.target.value,key:a.props.APIKey},cancelToken:new a.searchCancelToken((function(e){a.searchCancel=e}))}).then((function(e){var t=[];e.data.features.forEach((function(e){e.properties.mot[a.state.currentMot]&&t.push(e.properties.name)})),a.setState({currentSearchResults:t,showLoadingBar:!1})}),(function(e){console.log(e),a.setState({showLoadingBar:!1})}))},a.processHighlightedResultSelect=function(e){if("Enter"===e.key&&a.state.currentSearchResults[0]){var t=a.state.currentStops;t[a.state.focusedFieldIndex]=a.state.currentSearchResults[0],a.setState({currentStops:t,currentSearchResults:[]})}},a.processRoute=function(){a.props.onFindRoute(a.state.currentStops,a.state.currentMot)};var n=a.validateMots(e.mots);return a.state={currentMots:n,currentMot:n[0].name,currentSearchResults:[],focusedFieldIndex:null,currentStops:["",""],canSearchForRoute:!1,showLoadingBar:!1},a.searchCancelToken=M.a.CancelToken,a.searchCancel=null,a}return Object(y.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"RoutingMenu"},r.a.createElement(U.a,{square:!0,elevation:3},r.a.createElement(N.a,{value:this.state.currentMot,onChange:this.handleMotChange,variant:"scrollable",scrollButtons:"auto",indicatorColor:"primary",textColor:"primary","aria-label":"icon tabs example"},this.state.currentMots.map((function(e){return r.a.createElement(H.a,{key:"mot-"+e.name,value:e.name,icon:e.icon,"aria-label":e.name})}))),r.a.createElement(ge,null,r.a.createElement(X.a,{container:!0,spacing:1,alignItems:"flex-end",style:{width:"100%"}},r.a.createElement(X.a,{item:!0,xs:1},r.a.createElement(_.a,{fontSize:"small",color:"secondary"})),r.a.createElement(X.a,{item:!0,xs:10},r.a.createElement(q.a,{style:{width:"100%"},label:"Source",color:"secondary",onChange:function(t){return e.searchStops(t,0)},value:this.state.currentStops[0],onKeyDown:this.processHighlightedResultSelect,onFocus:function(){return e.onFieldFocus(0)},onBlur:this.onFieldBlur})),r.a.createElement(X.a,{item:!0,xs:1},r.a.createElement(Y.a,{className:"addHop",color:"primary","aria-label":"upload picture",component:"span"},r.a.createElement(V.a,null)))),r.a.createElement(X.a,{container:!0,spacing:1,alignItems:"flex-end",style:{width:"100%"}},r.a.createElement(X.a,{item:!0,xs:1},r.a.createElement(W.a,{color:"secondary"})),r.a.createElement(X.a,{item:!0,xs:10},r.a.createElement(q.a,{style:{width:"100%"},label:"Destination",color:"secondary",onChange:function(t){return e.searchStops(t,1)},value:this.state.currentStops[1],onKeyDown:this.processHighlightedResultSelect,onFocus:function(){return e.onFieldFocus(1)},onBlur:this.onFieldBlur})),r.a.createElement(X.a,{item:!0,xs:1},r.a.createElement(Y.a,{className:"addHop",color:"primary","aria-label":"upload picture",onClick:this.processRoute,component:"span"},r.a.createElement(Q.a,null))))),this.state.showLoadingBar?r.a.createElement(z.a,null):null),0!==this.state.currentSearchResults.length?r.a.createElement("div",null,r.a.createElement("hr",null),r.a.createElement(U.a,{square:!0,elevation:1},r.a.createElement(ge,null,this.state.currentSearchResults.map((function(e,t){return 0!==t?r.a.createElement(K.a,{key:"searchResult-"+e,variant:"subtitle1",gutterBottom:!0},e):r.a.createElement(K.a,{key:"searchResult-"+e,variant:"h6",gutterBottom:!0},e)}))))):null)}}]),t}(r.a.Component),Ee=Object(l.b)(null,(function(e){return{onFindRoute:function(t,a){return e(function(e,t){return{type:"FIND_ROUTE",hops:e,mot:t}}(t,a))}}}))(ve);var be=function(e){return r.a.createElement(l.a,{store:g},r.a.createElement(Ee,e),r.a.createElement(D,e))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Se=r.a.createElement(be,{mots:["rail","bus","tram"],routingUrl:"https://api.geops.io/routing/v1/",stationSearchUrl:"https://api.geops.io/stops/v1/",APIKey:"5cc87b12d7c5370001c1d655d0a18192eba64838a5fa1ad7d482ab82"});c.a.render(Se,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[175,1,2]]]);
//# sourceMappingURL=main.94e532f1.chunk.js.map