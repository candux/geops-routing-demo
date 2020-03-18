(this["webpackJsonpgeops-routing-demo"]=this["webpackJsonpgeops-routing-demo"]||[]).push([[0],{353:function(e,t,n){e.exports=n(568)},563:function(e,t,n){},565:function(e,t,n){},567:function(e,t,n){},568:function(e,t,n){"use strict";n.r(t);n(354),n(363),n(553);var r=n(0),a=n.n(r),o=n(32),c=n.n(o),i=n(78),l=n(134),u=n(315),s=n(136),d={currentMot:"bus",currentStops:["",""],currentStopsGeoJSON:{},clickLocation:null,notificationMessage:"",notificationType:"info",isFieldFocused:!1},p=function(e,t){var n={currentStops:t.currentStops};return Object(s.a)({},e,{},n)},m=function(e,t){var n={currentStopsGeoJSON:t.currentStopsGeoJSON};return Object(s.a)({},e,{},n)},f=function(e,t){var n={currentMot:t.currentMot};return Object(s.a)({},e,{},n)},h=function(e,t){var n={clickLocation:t.clickLocation};return Object(s.a)({},e,{},n)},b=function(e,t){var n={notificationMessage:t.notificationMessage,notificationType:t.notificationType};return Object(s.a)({},e,{},n)},v=function(e,t){var n={isFieldFocused:t.isFieldFocused};return Object(s.a)({},e,{},n)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_STOPS":return p(e,t);case"SET_CURRENT_STOPS_GEOJSON":return m(e,t);case"SET_CURRENT_MOT":return f(e,t);case"SET_CLICK_LOCATION":return h(e,t);case"SHOW_NOTIFICATION":return b(e,t);case"SET_IS_FIELD_FOCUSED":return v(e,t);default:return e}},S=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||l.d,y=Object(l.c)({MapReducer:g}),E=Object(l.e)(y,S(Object(l.a)(u.a))),O=n(142),k=n(101),w=n(186),C=n(187),R=n(204),j=n(626),N=n(326),F=n(14),T=n(625),P=n(108),_=n(316),x=n.n(_),A=n(79),M=n.n(A),I=n(206),V=n(630),G=n(313),H=n(203),L=n(634),z=n(55),U=n(615),J=n(611),W=n(631),D=n(628),Z=n(622),q=n(623),K=n(627),B=n(621),X=n(207),$=n(624),Q=n(189),Y=n.n(Q),ee=function(e){return{type:"SET_CURRENT_STOPS",currentStops:e}},te=function(e){return{type:"SET_CURRENT_STOPS_GEOJSON",currentStopsGeoJSON:e}},ne=function(e){return{type:"SET_CURRENT_MOT",currentMot:e}},re=function(e,t){return{type:"SHOW_NOTIFICATION",notificationMessage:e,notificationType:t}},ae=function(e){return{type:"SET_IS_FIELD_FOCUSED",isFieldFocused:e}},oe=(n(563),["rail","bus","foot"]),ce=["tram","subway","gondola","funicular","ferry","car"],ie=[].concat(oe,ce),le=["foot","car"],ue=n(319),se=n.n(ue),de=n(317),pe=n.n(de),me=n(318),fe=n.n(me),he=function(e){var t=null,n=e.charAt(0).toUpperCase()+e.slice(1);switch(e){case"rail":t=a.a.createElement(pe.a,null);break;case"foot":t=a.a.createElement(fe.a,null);break;default:t=a.a.createElement(se.a,null)}return a.a.createElement("span",{title:n},t)},be=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return Object(F.m)(e,"EPSG:3857","EPSG:4326").map((function(e){return e.toFixed(t)}))},ve=n(612),ge=n(569),Se=n(614),ye=n(613),Ee=n(240),Oe=n.n(Ee),ke=function(e,t){return e&&t?"".concat(e," - ").concat(t):e||t?e||t:null};function we(e){var t=e.currentSearchResults,n=e.processClickedResultHandler;return 0===t.length?null:a.a.createElement(J.a,{square:!0,elevation:3},a.a.createElement(ve.a,{component:"nav","aria-label":"search results"},t.map((function(e,t){return 0!==t?a.a.createElement(ge.a,{onClick:function(){n(e)},button:!0,key:Y()()},a.a.createElement(ye.a,null,a.a.createElement(Oe.a,null)),a.a.createElement(Se.a,{primary:e.properties.name,secondary:ke(e.properties.code,e.properties.country_code)})):a.a.createElement(ge.a,{onClick:function(){return n(e)},button:!0,selected:!0,key:"searchResult-".concat(e.properties.name)},a.a.createElement(ye.a,null,a.a.createElement(Oe.a,null)),a.a.createElement(Se.a,{primary:e.properties.name,secondary:ke(e.properties.code,e.properties.country_code)}))}))))}we.defaultProps={currentSearchResults:[]};var Ce=we,Re=n(618),je=n(632),Ne=n(617),Fe=n(636),Te=n(324),Pe=n.n(Te),_e=n(322),xe=n.n(_e),Ae=n(241),Me=n.n(Ae),Ie=n(325),Ve=n.n(Ie),Ge=n(321),He=n.n(Ge),Le=n(323),ze=n.n(Le),Ue=n(9),Je=n.n(Ue),We=Je.a.arrayOf(Je.a.number.isRequired).isRequired,De=Je.a.shape({coordinates:We,type:Je.a.string.isRequired}),Ze=Je.a.shape({geometry:De,properties:Je.a.shape({id:Je.a.oneOfType([Je.a.string.isRequired,Je.a.string.isRequired]),type:Je.a.string.isRequired}),type:Je.a.string.isRequired}),qe=Je.a.shape({features:Je.a.shape({0:Je.a.oneOfType([Ze,We]),1:Je.a.oneOfType([Ze,We])}),type:Je.a.string.isRequired}),Ke=(Je.a.shape({0:qe,1:qe}),Je.a.arrayOf(Je.a.oneOfType([Je.a.string.isRequired,We])),Object(U.a)((function(){return{gridContainer:{width:"100%",padding:"0px 0px 0px 20px",boxSizing:"unset"},button:{color:"black","& svg":{height:"20px",width:"20px"}},fieldWrapper:{maxWidth:"75%"},buttonWrapper:{maxWidth:"26px"}}})));function Be(e){var t,n=Ke(),r=Object(i.c)(),o=e.index,c=e.addNewSearchFieldHandler,l=e.currentStops,u=e.removeSearchFieldHandler,s=e.searchStopsHandler,d=e.singleStop,p=e.processHighlightedResultSelectHandler,m=e.onFieldFocusHandler,f=e.onZoomRouteClick,h=e.isActiveRoute,b=e.onPanViaClick,v=e.inputReference,g=null,S=10,y="",E=null,O=""===l[o]||l.length>2&&""===l[o+1];return 0===o?(g=a.a.createElement(Fe.a,{title:"Pan to the feature"},a.a.createElement(Ne.a,{onClick:function(){return b(d,o)},className:n.button,"aria-label":"Pan to the feature",size:"small"},a.a.createElement(He.a,{fontSize:"small",color:"primary"}))),y="Start",E=a.a.createElement(Re.a,{item:!0,xs:1,className:n.buttonWrapper},a.a.createElement(Fe.a,{title:"Add Hop"},a.a.createElement(Ne.a,{onClick:function(){return c(l,o+1)},disabled:O,className:n.button,"aria-label":"Add Hop",size:"small"},a.a.createElement(Me.a,{fontSize:"small"}))))):o===l.length-1?(g=a.a.createElement(Fe.a,{title:"Pan to the feature"},a.a.createElement(Ne.a,{onClick:function(){return b(d,o)},className:n.button,"aria-label":"Pan to the feature",size:"small"},a.a.createElement(xe.a,{color:"primary"}))),y="End",E=a.a.createElement(Re.a,{item:!0,xs:1,className:n.buttonWrapper},a.a.createElement(Fe.a,{title:"Zoom to the route"},a.a.createElement(Ne.a,{onClick:function(){return f()},disabled:!h,className:n.button,"aria-label":"Zoom to the route",size:"small"},a.a.createElement(ze.a,{fontSize:"small"}))))):(g=a.a.createElement(Fe.a,{title:"Pan to the feature"},a.a.createElement(Ne.a,{onClick:function(){return b(d,o)},className:n.button,"aria-label":"Pan to the feature",size:"small"},a.a.createElement(Pe.a,{fontSize:"small",color:"primary"}))),S=9,y="Hop",E=a.a.createElement(a.a.Fragment,null,a.a.createElement(Re.a,{item:!0,xs:1,className:n.buttonWrapper},a.a.createElement(Fe.a,{title:"Add Hop"},a.a.createElement(Ne.a,{disabled:O,onClick:function(){return c(l,o+1)},className:n.button,"aria-label":"addHop",size:"small"},a.a.createElement(Me.a,{fontSize:"small"})))),a.a.createElement(Re.a,{item:!0,xs:1,className:n.buttonWrapper},a.a.createElement(Fe.a,{title:"Remove Hop"},a.a.createElement(Ne.a,{onClick:function(){return u(o)},className:n.button,"aria-label":"removeHop",size:"small"},a.a.createElement(Ve.a,{fontSize:"small"})))))),a.a.createElement(Re.a,{container:!0,spacing:1,className:n.gridContainer,alignItems:"flex-end"},a.a.createElement(Re.a,{item:!0,xs:1},g),a.a.createElement(Re.a,{item:!0,xs:S,className:n.fieldWrapper},a.a.createElement(je.a,{style:{width:"100%"},inputRef:v,label:y,color:"primary",onChange:function(e){return s(e,o)},value:(t=d,Array.isArray(t)?be(t):t),onKeyDown:p,onFocus:function(){r(ae(!0)),m(o)},onBlur:function(){return setTimeout((function(){r(ae(!1))}),500)},onClick:function(e){e.target.select&&e.target.select()}})),E)}Be.defaultProps={currentStops:[],singleStop:""};var Xe=Be;function $e(e){var t=e.children,n=e.value,r=e.index;return a.a.createElement(X.a,{component:"div",role:"tabpanel",hidden:n!==r,id:Y()(),"aria-labelledby":"simple-tab-".concat(r)},n===r&&t)}var Qe=Object(U.a)((function(){return{tabs:{width:"75%"},tab:{minWidth:"33%",width:"33%"},dropDown:{width:"25%",backgroundColor:"white"},select:{height:"100%"},selectInput:{backgroundColor:"white","&:focus":{backgroundColor:"white"}},checkbox:{padding:"20px 23px"}}})),Ye=new AbortController;function et(e){var t=e.mots,n=e.stationSearchUrl,o=e.APIKey,c=e.isActiveRoute,l=e.onZoomRouteClick,u=e.onPanViaClick,s=Qe(),d=Object(i.c)(),p=function(e,t){var n=[];return e.filter((function(e){return t.includes(e)})).forEach((function(e){var r=t.find((function(t){return t===e}));r&&n.push({name:r,icon:he(r)})})),0===n.length&&n.push({name:ie[0],icon:he(ie[0])}),n},m=p(t,oe),f=p(t,ce),h=Object(i.d)((function(e){return e.MapReducer.clickLocation})),b=Object(i.d)((function(e){return e.MapReducer.currentStops})),v=Object(i.d)((function(e){return e.MapReducer.currentStopsGeoJSON})),g=a.a.useRef([]);g.current.length!==b.length&&(g.current=Array(b.length).fill().map((function(e,t){return g.current[t]||a.a.createRef()})));var S=Object(r.useState)(m),y=Object(z.a)(S,1)[0],E=Object(r.useState)(m[0].name),O=Object(z.a)(E,2),k=O[0],w=O[1],C=Object(r.useState)(f),R=Object(z.a)(C,1)[0],j=Object(r.useState)(null),N=Object(z.a)(j,2),T=N[0],P=N[1],_=Object(r.useState)([]),x=Object(z.a)(_,2),A=x[0],I=x[1],V=a.a.useState(!0),G=Object(z.a)(V,2),H=G[0],L=G[1],U=Object(r.useState)(0),X=Object(z.a)(U,2),Q=X[0],Y=X[1],ue=Object(r.useState)(!1),se=Object(z.a)(ue,2),de=se[0],pe=se[1],me=Object(r.useState)(void 0),fe=Object(z.a)(me,2),be=fe[0],ve=fe[1];Object(r.useEffect)((function(){d(ne(y[0].name))}),[]);var ge=function(e,t,n){d(ee(e)),d(te(t)),Y(n)},Se=function(e,t){var n=M.a.clone(v),r={type:"FeatureCollection",features:[{type:"Feature",properties:{id:h.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:h}}]};n[Q]=r,ge(e,n,t),d(te(n))};Object(r.useEffect)((function(){if(h)if(""===b[Q]){b[Q]=h,Se(b,Q+1<b.length?Q+1:Q)}else{var e=b,t=Q;e[Q]=h,Se(e,Q);var n=M.a.clone(v),r={type:"FeatureCollection",features:[{type:"Feature",properties:{id:h.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:h}}]};n[Q]=r,ge(e,n,t),d(te(n))}}),[h]);var ye=function(e,t){ve(null),w(t),d(ne(t))},Ee=function(e){Y(e),d(ae(!0))},Oe=function(e,t){var n=M.a.clone(b),r=M.a.clone(v);if(n.splice(t,0,""),r[t]){var a=Object.keys(r).reverse();a.forEach((function(e){parseInt(e,10)>=a.length-1&&(r["".concat(parseInt(e,10)+1)]=r[e])}))}d(ee(n)),d(te(r))},ke=function(e){var t=M.a.clone(b),n=M.a.clone(v);if(t.splice(e,1),n[e]){var r=Object.keys(n);r.forEach((function(t){var r=parseInt(t,10);r===e?delete n[e]:r>e&&(n[r-1]=n[r])})),delete n[r.length-1]}d(ee(t)),d(te(n))},we=function(e,t){if(P(t),!e.target.value){var r=b;return r[t]="",I([]),d(ee(r)),void pe(!1)}var a=M.a.clone(b);a[t]=e.target.value,d(ee(a)),pe(!0),Ye.abort();var c=(Ye=new AbortController).signal,i="".concat(n,"?q=").concat(e.target.value,"&key=").concat(o).concat(le.includes(k)?"":"&mots=".concat(H?k:""));fetch(i,{signal:c}).then((function(e){return e.json()})).then((function(e){e.error?d(re("Couldn't find stations","warning")):(0===e.features.length&&d(re("Couldn't find stations","warning")),I(e.features),pe(!1))})).catch((function(e){if("AbortError"!==e.name)throw e;console.warn("Abort ".concat(i))}))},Re=function(e){var t=Object(z.a)(A,1)[0];if("Enter"===e.key&&t){var n=b;ge[Q]=t.properties.name;var r=M.a.clone(v);r[Q]=t,d(ee(n)),I([]),d(te(r))}if("Backspace"===e.key){var a=[];e.target.value&&(a=A);var o={};Object.keys(v).forEach((function(e){e!==Q.toString()&&(o[e]=v[e])})),I(a),d(te(o))}};return l&&u?a.a.createElement("div",{className:"rd-routing-menu"},a.a.createElement(J.a,{square:!0,elevation:3},a.a.createElement("div",{className:"rd-routing-menu-header"},a.a.createElement(D.a,{value:!!oe.includes(k)&&k,className:s.tabs,onChange:function(e,t){ye(0,t)},indicatorColor:"primary",textColor:"primary","aria-label":"mots icons"},y.map((function(e){return a.a.createElement(Z.a,{className:s.tab,key:"mot-".concat(e.name),value:e.name,icon:e.icon,"aria-label":e.name})}))),a.a.createElement(B.a,{className:s.dropDown},a.a.createElement(K.a,{renderValue:function(e){return""!==e?e:"Other MOTs"},className:s.select,classes:{root:s.selectInput},labelId:"rd-other-mot-label",value:be||"",disableUnderline:!be,displayEmpty:!0,onChange:function(e){if(e){var t=e.target.value;ye(0,t),ve(t)}else ve(null)}},R.map((function(e){return a.a.createElement(q.a,{value:e.name,key:"other-mot-".concat(e.name)},e.name)}))))),a.a.createElement($e,null,b.map((function(e,t){return a.a.createElement(Xe,{key:"searchField-".concat(t),index:t,inputReference:g.current[t],addNewSearchFieldHandler:Oe,currentStops:b,removeSearchFieldHandler:ke,searchStopsHandler:we,singleStop:e,processHighlightedResultSelectHandler:Re,onFieldFocusHandler:Ee,onZoomRouteClick:l,onPanViaClick:u,isActiveRoute:c})})),a.a.createElement("div",{className:"rd-mot-checkbox"},a.a.createElement(W.a,{className:s.checkbox,checked:H,onChange:function(){L(!H),null!==T&&we({target:{value:g.current[T].current.value}},T)},color:"primary",inputProps:{"aria-label":"use only mot"}}),a.a.createElement("span",null,"Search only selected mode of transport"))),de?a.a.createElement($.a,null):null),a.a.createElement(Ce,{currentSearchResults:A,processClickedResultHandler:function(e){var t=b;t[Q]=e.properties.name;var n=M.a.clone(v);n[Q]=e,d(ee(t)),I([]),Object.keys(n).forEach((function(e){var t;e===Q.toString()&&(n[e].geometry.coordinates=(t=n[e].geometry.coordinates,Object(F.m)(t,"EPSG:4326","EPSG:3857")))})),d(te(n))}})):null}$e.defaultProps={value:null,index:null},et.defaultProps={onZoomRouteClick:void 0,onPanViaClick:void 0};var tt=et,nt=n(242),rt=n(168),at=n(243),ot=n(205),ct=function(e){return e.map((function(e){return new nt.b({stroke:new rt.a({color:e[0],width:e[1],lineDash:e[2]})})}))},it=ct([["darkred",6],["red",3]]),lt=ct([["darkred",7],["red",4]]),ut=ct([["rgb(153,153,0)",6],["yellow",3]]),st=ct([["rgb(153,153,0)",7],["yellow",4]]),dt=ct([["rgb(96, 186, 219)",6],["rgb(173, 216, 230)",3]]),pt=ct([["rgb(96, 186, 219)",7],["rgb(173, 216, 230)",4]]),mt=ct([["grey",6],["darkgrey",3]]),ft=ct([["grey",7],["darkgrey",4]]),ht=ct([["darkblue",6],["blue",3]]),bt=ct([["darkblue",7],["blue",4]]),vt=new nt.b({image:new at.a({radius:7,fill:new ot.a({color:"red"}),stroke:new rt.a({color:"darkred",width:2})})}),gt=new nt.b({image:new at.a({radius:3,fill:new ot.a({color:"rgb(173, 216, 230)"}),stroke:new rt.a({color:"rgb(96, 186, 219)",width:2})})}),St=new nt.b({image:new at.a({radius:3,fill:new ot.a({color:"darkgrey"}),stroke:new rt.a({color:"grey",width:2})})}),yt=new nt.b({image:new at.a({radius:7,fill:new ot.a({color:"yellow"}),stroke:new rt.a({color:"rgb(153,153,0)",width:2})})}),Et=new nt.b({image:new at.a({radius:7,fill:new ot.a({color:"blue"}),stroke:new rt.a({color:"darkblue",width:2})})}),Ot=function(e,t){return"rail"===e?t?lt:it:"bus"===e?t?st:ut:"foot"===e?t?pt:dt:"car"===e?t?ft:mt:t?bt:ht},kt=(n(565),new AbortController),wt=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(w.a)(this,Object(C.a)(t).call(this,e))).drawNewRoute=function(){var e=[],t=n.props,r=t.currentStopsGeoJSON,a=t.routingUrl,o=t.currentMot,c=t.APIKey,i=t.onShowNotification;Object.keys(r).forEach((function(t){r[t].features?e.push("".concat(be(r[t].features[0].geometry.coordinates).slice().reverse())):"rail"===o||"bus"===o?e.push("!".concat(r[t].properties.uid)):e.push("".concat(r[t].properties.name))})),kt.abort();var l=(kt=new AbortController).signal,u="".concat(a,"?via=").concat(e.join("|"),"&mot=").concat(o,"&resolve-hops=false&srs=3857&key=").concat(c);fetch(u,{signal:l}).then((function(e){return e.json()})).then((function(e){if(e.error)i("Couldn't find route","error");else{n.routeVectorSource.clear();var t=le.includes(o)?new I.a({dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}):new I.a;n.routeVectorSource.addFeatures(t.readFeatures(e)),n.setIsActiveRoute(!!n.routeVectorSource.getFeatures().length),n.routeVectorSource.getFeatures().forEach((function(e){return e.setStyle(Ot(o))}))}})).catch((function(e){if("AbortError"!==e.name)throw e;console.warn("Abort ".concat(u))}))},n.hoveredFeature=null,n.hoveredRoute=null,n.state={hoveredStationOpen:!1,hoveredStationName:"",isActiveRoute:!1},n}return Object(R.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.APIKey,r=t.onSetClickLocation,a=[949042.143189,5899715.591163];this.markerVectorSource=new V.a({}),this.markerVectorLayer=new T.a({zIndex:1,source:this.markerVectorSource}),this.routeVectorSource=new V.a({}),this.routeVectorLayer=new T.a({zIndex:0,source:this.routeVectorSource});var o=new G.a({layers:[this.markerVectorLayer]});o.on("translateend",(function(t){var n,r=e.props,a=r.currentStops,o=r.currentStopsGeoJSON,c=r.onSetCurrentStops,i=r.onSetCurrentStopsGeoJSON,l=M.a.clone(a),u=M.a.clone(o),s=t.features.getArray()[0].getProperties(),d=s.name,p=s.id;l[n=d?a.indexOf(d):function(e,t){for(var n=0;n<e.length;n+=1)if(e[n][0]===t[0]&&e[n][1]===t[1])return n;return-1}(a,p.slice().reverse())]=t.coordinate,u[n]={type:"FeatureCollection",features:[{type:"Feature",properties:{id:t.coordinate.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:t.coordinate}}]},c(l),i(u)})),this.map=new j.a({target:"map",interactions:Object(H.a)().extend([o]),view:new N.a({projection:"EPSG:3857",center:a,zoom:6})});var c=new x.a.Map({style:"https://maps.geops.io/styles/travic/style.json?key=".concat(n),attributionControl:!1,boxZoom:!1,center:Object(F.j)(a),container:this.map.getTargetElement(),doubleClickZoom:!1,dragPan:!1,dragRotate:!1,interactive:!1,keyboard:!1,pitchWithRotate:!1,scrollZoom:!1,touchZoomRotate:!1}),i=new P.a({render:function(e){var t=c.getCanvas(),n=e.viewState,r=i.getVisible();t.style.display=r?"block":"none";var a=i.getOpacity();t.style.opacity=a;var o=n.rotation;return o&&c.rotateTo(180*-o/Math.PI,{animate:!1}),c.jumpTo({center:Object(F.j)(n.center),zoom:n.zoom-1,animate:!1}),c._frame&&(c._frame.cancel(),c._frame=null),c._render(),t}});[i,this.markerVectorLayer,this.routeVectorLayer].forEach((function(t){return e.map.addLayer(t)})),this.onZoomRouteClick=function(){var t;e.routeVectorSource.getFeatures().length&&(t=e.routeVectorSource.getExtent()),4===t.filter((function(e){return Number.isFinite(e)})).length&&e.map.getView().fit(e.routeVectorSource.getExtent(),{size:e.map.getSize(),duration:500,padding:[200,200,200,200]})},this.onPanViaClick=function(t,n){var r=e.props.currentStopsGeoJSON;if(r&&r[n]){var a=r[n].features?r[n].features[0].geometry.coordinates:r[n].geometry.coordinates;e.map.getView().animate({center:a,duration:500,padding:[100,100,100,100]})}},this.map.on("singleclick",(function(t){var n=e.props,a=n.isFieldFocused;(n.currentStops.includes("")||a)&&r(t.coordinate)})),this.map.on("pointermove",(function(t){var n=e.props.currentMot;e.hoveredFeature&&(e.hoveredFeature=null,e.setState({hoveredStationOpen:!1,hoveredStationName:""})),e.hoveredRoute&&(e.hoveredRoute.setStyle(Ot(n,!1)),e.hoveredRoute=null);var r=e.map.getFeaturesAtPixel(t.pixel);r.length?document.body.classList.add("rd-pointer"):document.body.classList.contains("rd-pointer")&&document.body.classList.remove("rd-pointer"),r.forEach((function(t){if("Point"===t.getGeometry().getType()){e.hoveredFeature=t;var r="",a=t.get("country_code");r=t.get("name")?"".concat(t.get("name")).concat(a?" - ".concat(a):""):"".concat(be(t.getGeometry().flatCoordinates)),e.setState({hoveredStationOpen:!0,hoveredStationName:r})}return"LineString"===t.getGeometry().getType()&&(e.hoveredRoute=t,t.setStyle(Ot(n,!0))),!0}))}))}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,r=n.currentStopsGeoJSON,a=n.currentMot,o=a&&a!==e.currentMot,c=r&&r!==e.currentStopsGeoJSON;(o||c)&&(this.markerVectorSource.clear(),Object.keys(r).forEach((function(e){t.markerVectorSource.addFeatures((new I.a).readFeatures(r[e])),t.markerVectorSource.getFeatures().forEach((function(e){return e.setStyle("rail"===(t=a)?vt:"bus"===t?yt:"foot"===t?gt:"car"===t?St:Et);var t}))})),this.routeVectorSource.clear(),this.setIsActiveRoute(!1),Object.keys(r).length>1&&this.drawNewRoute())}},{key:"setIsActiveRoute",value:function(e){this.setState({isActiveRoute:e})}},{key:"render",value:function(){var e=this.props,t=e.mots,n=e.APIKey,r=e.stationSearchUrl,o=this.state,c=o.isActiveRoute,i=o.hoveredStationOpen,l=o.hoveredStationName;return a.a.createElement(a.a.Fragment,null,a.a.createElement(tt,{mots:t,stationSearchUrl:r,isActiveRoute:c,onZoomRouteClick:this.onZoomRouteClick,onPanViaClick:this.onPanViaClick,APIKey:n}),a.a.createElement(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:i,message:l}),a.a.createElement("div",{id:"map",className:"rd-map-comp"}))}}]),t}(r.Component);wt.getExtentCenter=function(e){return[e[0]+(e[2]-e[0])/2,e[1]+(e[3]-e[1])/2]};var Ct=Object(i.b)((function(e){return{currentMot:e.MapReducer.currentMot,currentStops:e.MapReducer.currentStops,currentStopsGeoJSON:e.MapReducer.currentStopsGeoJSON,isFieldFocused:e.MapReducer.isFieldFocused}}),(function(e){return{onSetCurrentStops:function(t){return e(ee(t))},onSetCurrentStopsGeoJSON:function(t){return e(te(t))},onSetClickLocation:function(t){return e(function(e){return{type:"SET_CLICK_LOCATION",clickLocation:e}}(t))},onShowNotification:function(t,n){return e(re(t,n))}}}))(wt),Rt=n(629),jt=function(e){function t(e){var n;return Object(O.a)(this,t),(n=Object(w.a)(this,Object(C.a)(t).call(this,e))).handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){var e=n.props.onShowNotification;n.setState({open:!1}),e(null,"error")},n.state={open:!1},n}return Object(R.a)(t,e),Object(k.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.notificationMessage;t&&t!==e.notificationMessage&&this.handleOpen()}},{key:"render",value:function(){var e=this.props,t=e.notificationMessage,n=e.notificationType,r=this.state.open;return a.a.createElement(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:r,autoHideDuration:6e3,onClose:this.handleClose},a.a.createElement(Rt.a,{onClose:this.handleClose,severity:n,elevation:6,variant:"filled"},t))}}]),t}(a.a.Component),Nt=Object(i.b)((function(e){return{notificationMessage:e.MapReducer.notificationMessage,notificationType:e.MapReducer.notificationType}}),(function(e){return{onShowNotification:function(t,n){return e(re(t,n))}}}))(jt),Ft={mots:ie,routingUrl:"https://api.geops.io/routing/dev/",stationSearchUrl:"https://api.geops.io/stops/dev/"};function Tt(e){var t=e.mots,n=e.routingUrl,r=e.stationSearchUrl;return a.a.createElement(i.a,{store:E},a.a.createElement(Ct,{mots:t,routingUrl:n,APIKey:"5cc87b12d7c5370001c1d655012b7edc8da1475084e49b84b6ba658e",stationSearchUrl:r}),a.a.createElement(Nt,null))}Tt.defaultProps=Ft;var Pt=Tt;n(567),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(Pt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[353,1,2]]]);
//# sourceMappingURL=main.301f14b9.chunk.js.map