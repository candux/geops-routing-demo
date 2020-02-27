(this["webpackJsonpgeops-routing-demo"]=this["webpackJsonpgeops-routing-demo"]||[]).push([[0],{195:function(e,t,n){e.exports=n(227)},223:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),i=n(40),l=n(56),u=n(91),s=n(156),d=n(94),p={currentMot:"bus",currentStops:["",""],currentStopsGeoJSON:{},clickLocation:null,notificationMessage:"",notificationType:"info",isFieldFocused:!1},m=function(e,t){var n={currentStops:t.currentStops};return Object(d.a)({},e,{},n)},f=function(e,t){var n={currentStopsGeoJSON:t.currentStopsGeoJSON};return Object(d.a)({},e,{},n)},h=function(e,t){var n={currentMot:t.currentMot};return Object(d.a)({},e,{},n)},S=function(e,t){var n={clickLocation:t.clickLocation};return Object(d.a)({},e,{},n)},v=function(e,t){var n={notificationMessage:t.notificationMessage,notificationType:t.notificationType};return Object(d.a)({},e,{},n)},b=function(e,t){var n={isFieldFocused:t.isFieldFocused};return Object(d.a)({},e,{},n)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_STOPS":return m(e,t);case"SET_CURRENT_STOPS_GEOJSON":return f(e,t);case"SET_CURRENT_MOT":return h(e,t);case"SET_CLICK_LOCATION":return S(e,t);case"SHOW_NOTIFICATION":return v(e,t);case"SET_IS_FIELD_FOCUSED":return b(e,t);default:return e}},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,O=Object(u.c)({MapReducer:g}),E=Object(u.e)(O,y(Object(u.a)(s.a))),w=n(95),k=n(69),j=n(110),C=n(111),T=n(128),F=n(284),R=n(166),N=n(13),_=n(283),M=n(74),I=n(157),P=n.n(I),x=n(81),H=n.n(x),L=n(138),V=n(288),D=n(154),G=n(127),A=n(92),U=n.n(A),J=n(291),z=n(135),q=n(108),K=n(139),W=n(129),B=[new z.b({stroke:new q.a({color:"black",lineDash:[10,10],width:5})}),new z.b({stroke:new q.a({color:"red",lineDash:[10,10],width:3})})],Z=[new z.b({stroke:new q.a({color:"black",width:5})}),new z.b({stroke:new q.a({color:"yellow",width:3})})],X=[new z.b({stroke:new q.a({color:"rgb(173, 216, 230)",width:3})})],$=[new z.b({stroke:new q.a({color:"black",lineDash:[.5,10],width:5})})],Q=[new z.b({stroke:new q.a({color:"black",width:5})}),new z.b({stroke:new q.a({color:"blue",width:3})})],Y=new z.b({image:new K.a({radius:7,fill:new W.a({color:"red"}),stroke:new q.a({color:"black",width:2})})}),ee=new z.b({image:new K.a({radius:7,fill:new W.a({color:"rgb(173, 216, 230)"})})}),te=new z.b({image:new K.a({radius:7,fill:new W.a({color:"yellow"}),stroke:new q.a({color:"black",width:2})})}),ne=new z.b({image:new K.a({radius:7,fill:new W.a({color:"blue"}),stroke:new q.a({color:"black",width:2})})}),ae=n(8),re=n.n(ae),oe=re.a.arrayOf(re.a.number.isRequired).isRequired,ce=re.a.shape({coordinates:oe,type:re.a.string.isRequired}),ie=re.a.shape({geometry:ce,properties:re.a.shape({id:re.a.oneOfType([re.a.string.isRequired,re.a.string.isRequired]),type:re.a.string.isRequired}),type:re.a.string.isRequired}),le=re.a.shape({features:re.a.shape({0:re.a.oneOfType([ie,oe]),1:re.a.oneOfType([ie,oe])}),type:re.a.string.isRequired}),ue=(re.a.shape({0:le,1:le}),re.a.arrayOf(re.a.oneOfType([re.a.string.isRequired,oe])),n(160)),se=n.n(ue),de=n(158),pe=n.n(de),me=n(159),fe=n.n(me),he=function(e){var t=null,n=e.charAt(0).toUpperCase()+e.slice(1);switch(e){case"rail":t=r.a.createElement(pe.a,null);break;case"foot":t=r.a.createElement(fe.a,null);break;default:t=r.a.createElement(se.a,null)}return r.a.createElement("span",{title:n},t)},Se=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:8;return Object(N.m)(e,"EPSG:3857","EPSG:4326").map((function(e){return e.toFixed(t)}))},ve=(n(223),function(e){return{type:"SET_CURRENT_STOPS",currentStops:e}}),be=function(e){return{type:"SET_CURRENT_STOPS_GEOJSON",currentStopsGeoJSON:e}},ge=function(e){return{type:"SET_CURRENT_MOT",currentMot:e}},ye=function(e,t){return{type:"SHOW_NOTIFICATION",notificationMessage:e,notificationType:t}},Oe=function(e){return{type:"SET_IS_FIELD_FOCUSED",isFieldFocused:e}},Ee=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(j.a)(this,Object(C.a)(t).call(this,e))).drawNewRoute=function(){n.findRouteCancel&&n.findRouteCancel();var e=[],t=n.props,a=t.currentStopsGeoJSON,r=t.routingUrl,o=t.currentMot,c=t.APIKey,i=t.onShowNotification;Object.keys(a).forEach((function(t){a[t].features?e.push("@".concat(Se(a[t].features[0].geometry.coordinates).slice().reverse())):e.push("!".concat(a[t].properties.id))})),U.a.get(r,{params:{via:e.join("|"),mot:o,key:c,srs:"3857"},cancelToken:new n.FindRouteCancelToken((function(e){n.findRouteCancel=e}))}).then((function(e){n.routeVectorSource.clear(),n.routeVectorSource.addFeatures((new L.a).readFeatures(e.data)),n.routeVectorSource.getFeatures().forEach((function(e){return e.setStyle("rail"===(t=o)?B:"bus"===t?Z:"foot"===t?X:"car"===t||"truck"===t?$:Q);var t})),n.map.getView().fit(n.routeVectorSource.getExtent(),{size:n.map.getSize(),duration:500,padding:[50,50,50,50]})}),(function(e){e&&i("Couldn't find route","error")}))},n.FindRouteCancelToken=U.a.CancelToken,n.findRouteCancel=null,n.hoveredFeature=null,n.state={hoveredStationOpen:!1,hoveredStationName:""},n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.APIKey,a=t.onSetClickLocation,r=[949042.143189,5899715.591163];this.markerVectorSource=new V.a({}),this.markerVectorLayer=new _.a({zIndex:1,source:this.markerVectorSource}),this.routeVectorSource=new V.a({}),this.routeVectorLayer=new _.a({zIndex:0,source:this.routeVectorSource});var o=new D.a({layers:[this.markerVectorLayer]});o.on("translateend",(function(t){var n,a=e.props,r=a.currentStops,o=a.currentStopsGeoJSON,c=a.onSetCurrentStops,i=a.onSetCurrentStopsGeoJSON,l=H.a.clone(r),u=H.a.clone(o),s=t.features.getArray()[0].getProperties(),d=s.name,p=s.id;l[n=d?r.indexOf(d):function(e,t){for(var n=0;n<e.length;n+=1)if(e[n][0]===t[0]&&e[n][1]===t[1])return n;return-1}(r,p.slice().reverse())]=t.coordinate,u[n]={type:"FeatureCollection",features:[{type:"Feature",properties:{id:t.coordinate.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:t.coordinate}}]},c(l),i(u)})),this.map=new F.a({target:"map",interactions:Object(G.a)().extend([o]),view:new R.a({projection:"EPSG:3857",center:r,zoom:6})});var c=new P.a.Map({style:"https://maps.geops.io/styles/travic/style.json?key=".concat(n),attributionControl:!1,boxZoom:!1,center:Object(N.j)(r),container:this.map.getTargetElement(),doubleClickZoom:!1,dragPan:!1,dragRotate:!1,interactive:!1,keyboard:!1,pitchWithRotate:!1,scrollZoom:!1,touchZoomRotate:!1}),i=new M.a({render:function(e){var t=c.getCanvas(),n=e.viewState,a=i.getVisible();t.style.display=a?"block":"none";var r=i.getOpacity();t.style.opacity=r;var o=n.rotation;return o&&c.rotateTo(180*-o/Math.PI,{animate:!1}),c.jumpTo({center:Object(N.j)(n.center),zoom:n.zoom-1,animate:!1}),c._frame&&(c._frame.cancel(),c._frame=null),c._render(),t}});[i,this.markerVectorLayer,this.routeVectorLayer].forEach((function(t){return e.map.addLayer(t)})),this.map.on("singleclick",(function(t){var n=e.props,r=n.isFieldFocused,o=n.currentStopsGeoJSON;o[0]&&o[1]&&!r||a(t.coordinate)})),this.map.on("pointermove",(function(t){e.hoveredFeature&&(e.hoveredFeature=null,e.setState({hoveredStationOpen:!1,hoveredStationName:""})),e.map.forEachFeatureAtPixel(t.pixel,(function(t){if("Point"===t.getGeometry().getType()){e.hoveredFeature=t;var n="";n=t.get("name")?"".concat(t.get("name")," - ").concat(t.get("country_code")):"".concat(t.get("id")[0],", ").concat(t.get("id")[1]),e.setState({hoveredStationOpen:!0,hoveredStationName:n})}return!0}))}))}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,a=n.currentStopsGeoJSON,r=n.currentMot,o=r&&r!==e.currentMot,c=a&&a!==e.currentStopsGeoJSON;(o||c)&&(this.markerVectorSource.clear(),Object.keys(a).forEach((function(e){t.markerVectorSource.addFeatures((new L.a).readFeatures(a[e])),t.markerVectorSource.getFeatures().forEach((function(e){return e.setStyle("rail"===(t=r)?Y:"bus"===t?te:"foot"===t?ee:"car"!==t&&"truck"!==t?ne:void 0);var t}));var n=t.markerVectorSource.getFeatures()[0].getGeometry().getCoordinates();t.map.getView().animate({center:n,duration:500})})),this.routeVectorSource.clear(),Object.keys(a).length>1&&this.drawNewRoute())}},{key:"render",value:function(){var e=this.state,t=e.hoveredStationOpen,n=e.hoveredStationName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:t,message:n}),r.a.createElement("div",{id:"map",className:"MapComponent"}))}}]),t}(a.Component),we=Object(l.b)((function(e){return{currentMot:e.MapReducer.currentMot,currentStops:e.MapReducer.currentStops,currentStopsGeoJSON:e.MapReducer.currentStopsGeoJSON,isFieldFocused:e.MapReducer.isFieldFocused}}),(function(e){return{onSetCurrentStops:function(t){return e(ve(t))},onSetCurrentStopsGeoJSON:function(t){return e(be(t))},onSetClickLocation:function(t){return e(function(e){return{type:"SET_CLICK_LOCATION",clickLocation:e}}(t))},onShowNotification:function(t,n){return e(ye(t,n))}}}))(Ee),ke=n(279),je=n(269),Ce=n(289),Te=n(286),Fe=n(280),Re=n(292),Ne=n(281),_e=n(285),Me=n(278),Ie=n(130),Pe=n(282),xe=n(125),He=n.n(xe),Le=(n(225),["rail","bus","coach","foot"]),Ve=["tram","subway","gondola","funicular","ferry","car","truck"],De={DEFAULT_MOTS:Le,OTHER_MOTS:Ve,VALID_MOTS:[].concat(Le,Ve)},Ge=n(270),Ae=n(228),Ue=n(272),Je=n(271),ze=n(136),qe=n.n(ze);function Ke(e){var t=e.currentSearchResults,n=e.processClickedResultHandler;return 0===t.length?null:r.a.createElement(je.a,{square:!0,elevation:3},r.a.createElement(Ge.a,{component:"nav","aria-label":"search results"},t.map((function(e,t){return 0!==t?r.a.createElement(Ae.a,{onClick:function(){n(e)},button:!0,key:He()()},r.a.createElement(Je.a,null,r.a.createElement(qe.a,null)),r.a.createElement(Ue.a,{primary:e.properties.name,secondary:"".concat(e.properties.code," - ").concat(e.properties.country_code)})):r.a.createElement(Ae.a,{onClick:function(){return n(e)},button:!0,selected:!0,key:"searchResult-".concat(e.properties.name)},r.a.createElement(Je.a,null,r.a.createElement(qe.a,null)),r.a.createElement(Ue.a,{primary:e.properties.name,secondary:"".concat(e.properties.code," - ").concat(e.properties.country_code)}))}))))}Ke.defaultProps={currentSearchResults:[]};var We=Ke,Be=n(273),Ze=n(294),Xe=n(275),$e=n(293),Qe=n(164),Ye=n.n(Qe),et=n(163),tt=n.n(et),nt=n(137),at=n.n(nt),rt=n(165),ot=n.n(rt),ct=n(161),it=n.n(ct);function lt(e){var t,n=Object(l.c)(),a=e.index,o=e.addNewSearchFieldHandler,c=e.currentStops,i=e.removeSearchFieldHandler,u=e.searchStopsHandler,s=e.singleStop,d=e.processHighlightedResultSelectHandler,p=e.onFieldFocusHandler,m=null,f=10,h="",S=null;return 0===a?(m=r.a.createElement(it.a,{fontSize:"small",color:"primary"}),h="Start",S=r.a.createElement(Be.a,{item:!0,xs:1},r.a.createElement($e.a,{title:"Add Hop"},r.a.createElement(Xe.a,{onClick:function(){return o(a+1)},color:"primary","aria-label":"Add Hop",size:"small"},r.a.createElement(at.a,{fontSize:"small"}))))):a===c.length-1?(m=r.a.createElement(tt.a,{color:"primary"}),h="End"):(m=r.a.createElement(Ye.a,{fontSize:"small",color:"primary"}),f=9,h="Hop",S=r.a.createElement(r.a.Fragment,null,r.a.createElement(Be.a,{item:!0,xs:1},r.a.createElement($e.a,{title:"Remove Hop"},r.a.createElement(Xe.a,{onClick:function(){return i(a)},color:"secondary","aria-label":"removeHop",size:"small"},r.a.createElement(ot.a,{fontSize:"small"})))),r.a.createElement(Be.a,{item:!0,xs:1},r.a.createElement($e.a,{title:"Add Hop"},r.a.createElement(Xe.a,{onClick:function(){return o(a+1)},color:"primary","aria-label":"addHop",size:"small"},r.a.createElement(at.a,{fontSize:"small"})))))),r.a.createElement(Be.a,{container:!0,spacing:1,alignItems:"flex-end",style:{width:"100%",padding:"0 20px"}},r.a.createElement(Be.a,{item:!0,xs:1},m),r.a.createElement(Be.a,{item:!0,xs:f},r.a.createElement(Ze.a,{style:{width:"100%"},label:h,color:"primary",onChange:function(e){return u(e,a)},value:(t=s,Array.isArray(t)?Se(t):t),onKeyDown:d,onFocus:function(){n(Oe(!0)),p(a)},onBlur:function(){return setTimeout((function(){n(Oe(!1))}),500)},onClick:function(e){e.target.select&&e.target.select()}})),S)}lt.defaultProps={currentStops:[],singleStop:""};var ut=lt;function st(e){var t=e.children,n=e.value,a=e.index;return r.a.createElement(Ie.a,{component:"div",role:"tabpanel",hidden:n!==a,id:He()(),"aria-labelledby":"simple-tab-".concat(a)},n===a&&t)}var dt=Object(ke.a)((function(){return{tabs:{width:"75%"},tab:{minWidth:"25%",width:"25%"},dropDown:{width:"25%",backgroundColor:"white"},dropDownSelected:{width:"25%",backgroundColor:"lightgrey"},checkbox:{padding:"20px"}}}));st.defaultProps={value:null,index:null};var pt=function(e){var t=e.mots,n=e.stationSearchUrl,o=e.APIKey,c=dt(),u=Object(l.c)(),s=De.DEFAULT_MOTS,d=De.OTHER_MOTS,p=function(e,t){var n=De.VALID_MOTS,a=[];return e.filter((function(e){return t.includes(e)})).forEach((function(e){var n=t.find((function(t){return t===e}));n&&a.push({name:n,icon:he(n)})})),0===a.length&&a.push({name:n[0],icon:he(n[0])}),a},m=p(t,s),f=p(t,d),h=Object(l.d)((function(e){return e.MapReducer.clickLocation})),S=Object(l.d)((function(e){return e.MapReducer.currentStops})),v=Object(l.d)((function(e){return e.MapReducer.currentStopsGeoJSON})),b=Object(a.useState)(m),g=Object(i.a)(b,1)[0],y=Object(a.useState)(m[0].name),O=Object(i.a)(y,2),E=O[0],w=O[1],k=Object(a.useState)(f),j=Object(i.a)(k,1)[0],C=Object(a.useState)([]),T=Object(i.a)(C,2),F=T[0],R=T[1],_=r.a.useState(!0),M=Object(i.a)(_,2),I=M[0],P=M[1],x=Object(a.useState)(0),L=Object(i.a)(x,2),V=L[0],D=L[1],G=Object(a.useState)(!1),A=Object(i.a)(G,2),J=A[0],z=A[1],q=Object(a.useState)(void 0),K=Object(i.a)(q,2),W=K[0],B=K[1],Z=U.a.CancelToken,X=null;Object(a.useEffect)((function(){u(ge(g[0].name))}),[]);var $=function(e,t,n){u(ve(e)),u(be(t)),D(n)},Q=function(e,t){var n=H.a.clone(v),a={type:"FeatureCollection",features:[{type:"Feature",properties:{id:h.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:h}}]};n[V]=a,$(e,n,t),u(be(n))};Object(a.useEffect)((function(){if(h)if(""===S[V]){S[V]=h,Q(S,V+1<S.length?V+1:V)}else{var e=S,t=V;e[V]=h,Q(e,V);var n=H.a.clone(v),a={type:"FeatureCollection",features:[{type:"Feature",properties:{id:h.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:h}}]};n[V]=a,$(e,n,t),u(be(n))}}),[h]);var Y=function(e,t){w(t),R([]),u(be({})),u(ge(t))},ee=function(e){D(e),u(Oe(!0))},te=function(e){var t=S;t.splice(e,0,""),u(ve(t))},ne=function(e){var t=S;t.splice(e,1);var n={};Object.keys(v).forEach((function(t){t!==e.toString()&&(n[t]=v[t])})),u(ve(t)),u(be(n))},ae=function(e,t){if(!e.target.value){var a=S;return a[t]="",R([]),u(ve(a)),void z(!1)}var r=S;r[t]=e.target.value,u(ve(r)),z(!0),X&&X(),U.a.get(n,{params:{q:e.target.value,key:o,mots:I?E:""},cancelToken:new Z((function(e){X=e}))}).then((function(e){var t=[];e.data.features.forEach((function(e){e.properties.mot[E]&&t.push(e)})),0!==e.data.features.length&&0!==t.length||u(ye("Couldn't find stations","warning")),R(t),z(!1)}),(function(e){z(!1),U.a.isCancel(e)||u(ye("Error while searching for stations","error"))}))},re=function(e){var t=Object(i.a)(F,1)[0];if("Enter"===e.key&&t){var n=S;$[V]=t.properties.name;var a=H.a.clone(v);a[V]=t,u(ve(n)),R([]),u(be(a))}if("Backspace"===e.key){var r=[];e.target.value&&(r=F);var o={};Object.keys(v).forEach((function(e){e!==V.toString()&&(o[e]=v[e])})),R(r),u(be(o))}};return r.a.createElement("div",{className:"rd-routing-menu"},r.a.createElement(je.a,{square:!0,elevation:3},r.a.createElement("div",{className:"rd-routing-menu-header"},r.a.createElement(Te.a,{value:!!s.includes(E)&&E,className:c.tabs,onChange:function(e,t){Y(0,t)},indicatorColor:"primary",textColor:"primary","aria-label":"mots icons"},g.map((function(e){return r.a.createElement(Fe.a,{className:c.tab,key:"mot-".concat(e.name),value:e.name,icon:e.icon,"aria-label":e.name})}))),r.a.createElement(Me.a,{className:E===W?c.dropDownSelected:c.dropDown},r.a.createElement(Re.a,{id:"rd-other-mot-label"},"Other MOTs"),r.a.createElement(_e.a,{labelId:"rd-other-mot-label",value:W,onChange:function(e){if(e){var t=e.target.value;Y(0,t),B(t)}else B(void 0)}},j.map((function(e){return r.a.createElement(Ne.a,{value:e.name,key:"other-mot-".concat(e.name)},e.name)}))))),r.a.createElement(st,null,S.map((function(e,t){return r.a.createElement(ut,{key:"searchField-".concat(t),index:t,addNewSearchFieldHandler:te,currentStops:S,removeSearchFieldHandler:ne,searchStopsHandler:ae,singleStop:e,processHighlightedResultSelectHandler:re,onFieldFocusHandler:ee})})),r.a.createElement("div",{className:"rd-mot-checkbox"},r.a.createElement(Ce.a,{className:c.checkbox,checked:I,onChange:function(){return P(!I)},color:"primary",inputProps:{"aria-label":"use only mot"}}),r.a.createElement("span",null,"Search only selected mode of transport"))),J?r.a.createElement(Pe.a,null):null),r.a.createElement(We,{currentSearchResults:F,processClickedResultHandler:function(e){var t=S;t[V]=e.properties.name;var n=H.a.clone(v);n[V]=e,u(ve(t)),R([]),Object.keys(n).forEach((function(e){var t;e===V.toString()&&(n[e].geometry.coordinates=(t=n[e].geometry.coordinates,Object(N.m)(t,"EPSG:4326","EPSG:3857")))})),u(be(n))}}))},mt=n(287),ft=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(j.a)(this,Object(C.a)(t).call(this,e))).handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1},n}return Object(T.a)(t,e),Object(k.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.notificationMessage;t&&t!==e.notificationMessage&&this.handleOpen()}},{key:"render",value:function(){var e=this.props,t=e.notificationMessage,n=e.notificationType,a=this.state.open;return r.a.createElement(J.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,autoHideDuration:6e3,onClose:this.handleClose},r.a.createElement(mt.a,{onClose:this.handleClose,severity:n,elevation:6,variant:"filled"},t))}}]),t}(r.a.Component),ht=Object(l.b)((function(e){return{notificationMessage:e.MapReducer.notificationMessage,notificationType:e.MapReducer.notificationType}}))(ft),St={mots:De.VALID_MOTS,routingUrl:"https://api.geops.io/routing/v1/",stationSearchUrl:"https://api.geops.io/stops/v1/"};function vt(e){var t=e.mots,n=e.routingUrl,o=e.stationSearchUrl,c=Object(a.useState)(null),u=Object(i.a)(c,2),s=u[0],d=u[1];return Object(a.useEffect)((function(){fetch("https://developer.geops.io/publickey").then((function(e){return e.json()})).then((function(e){d(e.key)})).catch((function(){console.error("Request to get the apiKey failed")}))}),[]),s?r.a.createElement(l.a,{store:E},r.a.createElement(pt,{mots:t,stationSearchUrl:o,APIKey:s}),r.a.createElement(we,{mots:t,routingUrl:n,APIKey:s}),r.a.createElement(ht,null)):null}vt.defaultProps=St;var bt=vt;n(226),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(bt,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[195,1,2]]]);
//# sourceMappingURL=main.3ccf2540.chunk.js.map