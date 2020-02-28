(this["webpackJsonpgeops-routing-demo"]=this["webpackJsonpgeops-routing-demo"]||[]).push([[0],{363:function(e,t,n){e.exports=n(595)},591:function(e,t,n){},593:function(e,t,n){},594:function(e,t,n){},595:function(e,t,n){"use strict";n.r(t);n(364),n(373),n(563);var a=n(0),r=n.n(a),o=n(32),c=n.n(o),i=n(52),l=n(79),u=n(135),s=n(325),d=n(137),p={currentMot:"bus",currentStops:["",""],currentStopsGeoJSON:{},clickLocation:null,notificationMessage:"",notificationType:"info",isFieldFocused:!1},m=function(e,t){var n={currentStops:t.currentStops};return Object(d.a)({},e,{},n)},f=function(e,t){var n={currentStopsGeoJSON:t.currentStopsGeoJSON};return Object(d.a)({},e,{},n)},h=function(e,t){var n={currentMot:t.currentMot};return Object(d.a)({},e,{},n)},S=function(e,t){var n={clickLocation:t.clickLocation};return Object(d.a)({},e,{},n)},b=function(e,t){var n={notificationMessage:t.notificationMessage,notificationType:t.notificationType};return Object(d.a)({},e,{},n)},v=function(e,t){var n={isFieldFocused:t.isFieldFocused};return Object(d.a)({},e,{},n)},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_STOPS":return m(e,t);case"SET_CURRENT_STOPS_GEOJSON":return f(e,t);case"SET_CURRENT_MOT":return h(e,t);case"SET_CLICK_LOCATION":return S(e,t);case"SHOW_NOTIFICATION":return b(e,t);case"SET_IS_FIELD_FOCUSED":return v(e,t);default:return e}},y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,O=Object(u.c)({MapReducer:g}),E=Object(u.e)(O,y(Object(u.a)(s.a))),w=n(143),k=n(100),j=n(187),C=n(188),N=n(205),F=n(652),R=n(335),T=n(14),_=n(651),M=n(107),x=n(326),P=n.n(x),I=n(109),G=n.n(I),H=n(207),V=n(656),A=n(323),L=n(204),U=n(241),z=n.n(U),D=n(659),J=n(242),W=n(169),q=n(245),K=n(206),B=[new J.b({stroke:new W.a({color:"black",lineDash:[10,10],width:5})}),new J.b({stroke:new W.a({color:"red",lineDash:[10,10],width:3})})],Z=[new J.b({stroke:new W.a({color:"black",width:5})}),new J.b({stroke:new W.a({color:"yellow",width:3})})],X=[new J.b({stroke:new W.a({color:"rgb(173, 216, 230)",width:3})})],$=[new J.b({stroke:new W.a({color:"black",lineDash:[.5,10],width:5})})],Q=[new J.b({stroke:new W.a({color:"black",width:5})}),new J.b({stroke:new W.a({color:"blue",width:3})})],Y=new J.b({image:new q.a({radius:7,fill:new K.a({color:"red"}),stroke:new W.a({color:"black",width:2})})}),ee=new J.b({image:new q.a({radius:7,fill:new K.a({color:"rgb(173, 216, 230)"})})}),te=new J.b({image:new q.a({radius:7,fill:new K.a({color:"black"})})}),ne=new J.b({image:new q.a({radius:7,fill:new K.a({color:"yellow"}),stroke:new W.a({color:"black",width:2})})}),ae=new J.b({image:new q.a({radius:7,fill:new K.a({color:"blue"}),stroke:new W.a({color:"black",width:2})})}),re=n(9),oe=n.n(re),ce=oe.a.arrayOf(oe.a.number.isRequired).isRequired,ie=oe.a.shape({coordinates:ce,type:oe.a.string.isRequired}),le=oe.a.shape({geometry:ie,properties:oe.a.shape({id:oe.a.oneOfType([oe.a.string.isRequired,oe.a.string.isRequired]),type:oe.a.string.isRequired}),type:oe.a.string.isRequired}),ue=oe.a.shape({features:oe.a.shape({0:oe.a.oneOfType([le,ce]),1:oe.a.oneOfType([le,ce])}),type:oe.a.string.isRequired}),se=(oe.a.shape({0:ue,1:ue}),oe.a.arrayOf(oe.a.oneOfType([oe.a.string.isRequired,ce])),["rail","bus","coach","foot"]),de=["tram","subway","gondola","funicular","ferry","car","truck"],pe=[].concat(se,de),me=["foot","car","truck"],fe=n(329),he=n.n(fe),Se=n(327),be=n.n(Se),ve=n(328),ge=n.n(ve),ye=function(e){var t=null,n=e.charAt(0).toUpperCase()+e.slice(1);switch(e){case"rail":t=r.a.createElement(be.a,null);break;case"foot":t=r.a.createElement(ge.a,null);break;default:t=r.a.createElement(he.a,null)}return r.a.createElement("span",{title:n},t)},Oe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:4;return Object(T.m)(e,"EPSG:3857","EPSG:4326").map((function(e){return e.toFixed(t)}))},Ee=(n(591),function(e){return{type:"SET_CURRENT_STOPS",currentStops:e}}),we=function(e){return{type:"SET_CURRENT_STOPS_GEOJSON",currentStopsGeoJSON:e}},ke=function(e){return{type:"SET_CURRENT_MOT",currentMot:e}},je=function(e,t){return{type:"SHOW_NOTIFICATION",notificationMessage:e,notificationType:t}},Ce=function(e){return{type:"SET_IS_FIELD_FOCUSED",isFieldFocused:e}},Ne=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(j.a)(this,Object(C.a)(t).call(this,e))).drawNewRoute=function(){n.findRouteCancel&&n.findRouteCancel();var e=[],t=n.props,a=t.currentStopsGeoJSON,r=t.routingUrl,o=t.currentMot,c=t.APIKey,i=t.onShowNotification;Object.keys(a).forEach((function(t){a[t].features?e.push("@".concat(Oe(a[t].features[0].geometry.coordinates).slice().reverse())):e.push("!".concat(a[t].properties.name))})),z.a.get(r,{params:{via:e.join("|"),mot:o,key:c,srs:"3857"},cancelToken:new n.FindRouteCancelToken((function(e){n.findRouteCancel=e}))}).then((function(e){n.routeVectorSource.clear();var t=me.includes(o)?new H.a({dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}):new H.a;n.routeVectorSource.addFeatures(t.readFeatures(e.data)),n.routeVectorSource.getFeatures().forEach((function(e){return e.setStyle("rail"===(t=o)?B:"bus"===t?Z:"foot"===t?X:"car"===t||"truck"===t?$:Q);var t})),n.map.getView().fit(n.routeVectorSource.getExtent(),{size:n.map.getSize(),duration:500,padding:[50,50,50,50]})}),(function(e){e&&i("Couldn't find route","error")}))},n.FindRouteCancelToken=z.a.CancelToken,n.findRouteCancel=null,n.hoveredFeature=null,n.state={hoveredStationOpen:!1,hoveredStationName:""},n}return Object(N.a)(t,e),Object(k.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,n=t.APIKey,a=t.onSetClickLocation,r=[949042.143189,5899715.591163];this.markerVectorSource=new V.a({}),this.markerVectorLayer=new _.a({zIndex:1,source:this.markerVectorSource}),this.routeVectorSource=new V.a({}),this.routeVectorLayer=new _.a({zIndex:0,source:this.routeVectorSource});var o=new A.a({layers:[this.markerVectorLayer]});o.on("translateend",(function(t){var n,a=e.props,r=a.currentStops,o=a.currentStopsGeoJSON,c=a.onSetCurrentStops,i=a.onSetCurrentStopsGeoJSON,l=G.a.clone(r),u=G.a.clone(o),s=t.features.getArray()[0].getProperties(),d=s.name,p=s.id;l[n=d?r.indexOf(d):function(e,t){for(var n=0;n<e.length;n+=1)if(e[n][0]===t[0]&&e[n][1]===t[1])return n;return-1}(r,p.slice().reverse())]=t.coordinate,u[n]={type:"FeatureCollection",features:[{type:"Feature",properties:{id:t.coordinate.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:t.coordinate}}]},c(l),i(u)})),this.map=new F.a({target:"map",interactions:Object(L.a)().extend([o]),view:new R.a({projection:"EPSG:3857",center:r,zoom:6})});var c=new P.a.Map({style:"https://maps.geops.io/styles/travic/style.json?key=".concat(n),attributionControl:!1,boxZoom:!1,center:Object(T.j)(r),container:this.map.getTargetElement(),doubleClickZoom:!1,dragPan:!1,dragRotate:!1,interactive:!1,keyboard:!1,pitchWithRotate:!1,scrollZoom:!1,touchZoomRotate:!1}),i=new M.a({render:function(e){var t=c.getCanvas(),n=e.viewState,a=i.getVisible();t.style.display=a?"block":"none";var r=i.getOpacity();t.style.opacity=r;var o=n.rotation;return o&&c.rotateTo(180*-o/Math.PI,{animate:!1}),c.jumpTo({center:Object(T.j)(n.center),zoom:n.zoom-1,animate:!1}),c._frame&&(c._frame.cancel(),c._frame=null),c._render(),t}});[i,this.markerVectorLayer,this.routeVectorLayer].forEach((function(t){return e.map.addLayer(t)})),this.map.on("singleclick",(function(t){var n=e.props,r=n.isFieldFocused,o=n.currentStopsGeoJSON;o[0]&&o[1]&&!r||a(t.coordinate)})),this.map.on("pointermove",(function(t){e.hoveredFeature&&(e.hoveredFeature=null,e.setState({hoveredStationOpen:!1,hoveredStationName:""})),e.map.forEachFeatureAtPixel(t.pixel,(function(t){if("Point"===t.getGeometry().getType()){e.hoveredFeature=t;var n="";n=t.get("name")?"".concat(t.get("name")," - ").concat(t.get("country_code")):"".concat(t.get("id")[0],", ").concat(t.get("id")[1]),e.setState({hoveredStationOpen:!0,hoveredStationName:n})}return!0}))}))}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props,a=n.currentStopsGeoJSON,r=n.currentMot,o=r&&r!==e.currentMot,c=a&&a!==e.currentStopsGeoJSON;(o||c)&&(this.markerVectorSource.clear(),Object.keys(a).forEach((function(e){t.markerVectorSource.addFeatures((new H.a).readFeatures(a[e])),t.markerVectorSource.getFeatures().forEach((function(e){return e.setStyle("rail"===(t=r)?Y:"bus"===t?ne:"foot"===t?ee:"car"===t||"truck"===t?te:ae);var t}));var n=t.markerVectorSource.getFeatures()[0].getGeometry().getCoordinates();t.map.getView().animate({center:n,duration:500})})),this.routeVectorSource.clear(),Object.keys(a).length>1&&this.drawNewRoute())}},{key:"render",value:function(){var e=this.state,t=e.hoveredStationOpen,n=e.hoveredStationName;return r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"right"},open:t,message:n}),r.a.createElement("div",{id:"map",className:"MapComponent"}))}}]),t}(a.Component),Fe=Object(l.b)((function(e){return{currentMot:e.MapReducer.currentMot,currentStops:e.MapReducer.currentStops,currentStopsGeoJSON:e.MapReducer.currentStopsGeoJSON,isFieldFocused:e.MapReducer.isFieldFocused}}),(function(e){return{onSetCurrentStops:function(t){return e(Ee(t))},onSetCurrentStopsGeoJSON:function(t){return e(we(t))},onSetClickLocation:function(t){return e(function(e){return{type:"SET_CLICK_LOCATION",clickLocation:e}}(t))},onShowNotification:function(t,n){return e(je(t,n))}}}))(Ne),Re=n(641),Te=n(637),_e=n(657),Me=n(654),xe=n(648),Pe=n(660),Ie=n(649),Ge=n(653),He=n(647),Ve=n(208),Ae=n(650),Le=n(202),Ue=n.n(Le),ze=(n(593),n(638)),De=n(596),Je=n(640),We=n(639),qe=n(243),Ke=n.n(qe);function Be(e){var t=e.currentSearchResults,n=e.processClickedResultHandler;return 0===t.length?null:r.a.createElement(Te.a,{square:!0,elevation:3},r.a.createElement(ze.a,{component:"nav","aria-label":"search results"},t.map((function(e,t){return 0!==t?r.a.createElement(De.a,{onClick:function(){n(e)},button:!0,key:Ue()()},r.a.createElement(We.a,null,r.a.createElement(Ke.a,null)),r.a.createElement(Je.a,{primary:e.properties.name,secondary:"".concat(e.properties.code," - ").concat(e.properties.country_code)})):r.a.createElement(De.a,{onClick:function(){return n(e)},button:!0,selected:!0,key:"searchResult-".concat(e.properties.name)},r.a.createElement(We.a,null,r.a.createElement(Ke.a,null)),r.a.createElement(Je.a,{primary:e.properties.name,secondary:"".concat(e.properties.code," - ").concat(e.properties.country_code)}))}))))}Be.defaultProps={currentSearchResults:[]};var Ze=Be,Xe=n(642),$e=n(662),Qe=n(644),Ye=n(663),et=n(333),tt=n.n(et),nt=n(332),at=n.n(nt),rt=n(244),ot=n.n(rt),ct=n(334),it=n.n(ct),lt=n(330),ut=n.n(lt),st=Object(Re.a)((function(){return{gridContainer:{width:"100%",padding:"0px 0px 0px 20px",boxSizing:"unset"},button:{color:"black"},fieldWrapper:{maxWidth:"75%"},buttonWrapper:{maxWidth:"26px"}}}));function dt(e){var t,n=st(),a=Object(l.c)(),o=e.index,c=e.addNewSearchFieldHandler,i=e.currentStops,u=e.removeSearchFieldHandler,s=e.searchStopsHandler,d=e.singleStop,p=e.processHighlightedResultSelectHandler,m=e.onFieldFocusHandler,f=null,h=10,S="",b=null;return 0===o?(f=r.a.createElement(ut.a,{fontSize:"small",color:"primary"}),S="Start",b=r.a.createElement(Xe.a,{item:!0,xs:1,className:n.buttonWrapper},r.a.createElement(Ye.a,{title:"Add Hop"},r.a.createElement(Qe.a,{onClick:function(){return c(o+1)},className:n.button,"aria-label":"Add Hop",size:"small"},r.a.createElement(ot.a,{fontSize:"small"}))))):o===i.length-1?(f=r.a.createElement(at.a,{color:"primary"}),S="End"):(f=r.a.createElement(tt.a,{fontSize:"small",color:"primary"}),h=9,S="Hop",b=r.a.createElement(r.a.Fragment,null,r.a.createElement(Xe.a,{item:!0,xs:1,className:n.buttonWrapper},r.a.createElement(Ye.a,{title:"Add Hop"},r.a.createElement(Qe.a,{onClick:function(){return c(o+1)},className:n.button,"aria-label":"addHop",size:"small"},r.a.createElement(ot.a,{fontSize:"small"})))),r.a.createElement(Xe.a,{item:!0,xs:1,className:n.buttonWrapper},r.a.createElement(Ye.a,{title:"Remove Hop"},r.a.createElement(Qe.a,{onClick:function(){return u(o)},className:n.button,"aria-label":"removeHop",size:"small"},r.a.createElement(it.a,{fontSize:"small"})))))),r.a.createElement(Xe.a,{container:!0,spacing:1,className:n.gridContainer,alignItems:"flex-end"},r.a.createElement(Xe.a,{item:!0,xs:1},f),r.a.createElement(Xe.a,{item:!0,xs:h,className:n.fieldWrapper},r.a.createElement($e.a,{style:{width:"100%"},label:S,color:"primary",onChange:function(e){return s(e,o)},value:(t=d,Array.isArray(t)?Oe(t):t),onKeyDown:p,onFocus:function(){a(Ce(!0)),m(o)},onBlur:function(){return setTimeout((function(){a(Ce(!1))}),500)},onClick:function(e){e.target.select&&e.target.select()}})),b)}dt.defaultProps={currentStops:[],singleStop:""};var pt=dt;function mt(e){var t=e.children,n=e.value,a=e.index;return r.a.createElement(Ve.a,{component:"div",role:"tabpanel",hidden:n!==a,id:Ue()(),"aria-labelledby":"simple-tab-".concat(a)},n===a&&t)}var ft=Object(Re.a)((function(){return{tabs:{width:"75%"},tab:{minWidth:"25%",width:"25%"},dropDown:{width:"25%",backgroundColor:"white"},dropDownSelected:{width:"25%",backgroundColor:"lightgrey"},checkbox:{padding:"20px"}}})),ht=new AbortController;mt.defaultProps={value:null,index:null};var St=function(e){var t=e.mots,n=e.stationSearchUrl,o=e.APIKey,c=ft(),u=Object(l.c)(),s=function(e,t){var n=[];return e.filter((function(e){return t.includes(e)})).forEach((function(e){var a=t.find((function(t){return t===e}));a&&n.push({name:a,icon:ye(a)})})),0===n.length&&n.push({name:pe[0],icon:ye(pe[0])}),n},d=s(t,se),p=s(t,de),m=Object(l.d)((function(e){return e.MapReducer.clickLocation})),f=Object(l.d)((function(e){return e.MapReducer.currentStops})),h=Object(l.d)((function(e){return e.MapReducer.currentStopsGeoJSON})),S=Object(a.useState)(d),b=Object(i.a)(S,1)[0],v=Object(a.useState)(d[0].name),g=Object(i.a)(v,2),y=g[0],O=g[1],E=Object(a.useState)(p),w=Object(i.a)(E,1)[0],k=Object(a.useState)([]),j=Object(i.a)(k,2),C=j[0],N=j[1],F=r.a.useState(!0),R=Object(i.a)(F,2),_=R[0],M=R[1],x=Object(a.useState)(0),P=Object(i.a)(x,2),I=P[0],H=P[1],V=Object(a.useState)(!1),A=Object(i.a)(V,2),L=A[0],U=A[1],z=Object(a.useState)(void 0),D=Object(i.a)(z,2),J=D[0],W=D[1];Object(a.useEffect)((function(){u(ke(b[0].name))}),[]);var q=function(e,t,n){u(Ee(e)),u(we(t)),H(n)},K=function(e,t){var n=G.a.clone(h),a={type:"FeatureCollection",features:[{type:"Feature",properties:{id:m.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:m}}]};n[I]=a,q(e,n,t),u(we(n))};Object(a.useEffect)((function(){if(m)if(""===f[I]){f[I]=m,K(f,I+1<f.length?I+1:I)}else{var e=f,t=I;e[I]=m,K(e,I);var n=G.a.clone(h),a={type:"FeatureCollection",features:[{type:"Feature",properties:{id:m.slice().reverse(),type:"coordinates"},geometry:{type:"Point",coordinates:m}}]};n[I]=a,q(e,n,t),u(we(n))}}),[m]);var B=function(e,t){O(t),u(ke(t))},Z=function(e){H(e),u(Ce(!0))},X=function(e){var t=f;t.splice(e,0,""),u(Ee(t))},$=function(e){var t=f;t.splice(e,1);var n={};Object.keys(h).forEach((function(t){t!==e.toString()&&(n[t]=h[t])})),u(Ee(t)),u(we(n))},Q=function(e,t){if(!e.target.value){var a=f;return a[t]="",N([]),u(Ee(a)),void U(!1)}var r=G.a.clone(f);r[t]=e.target.value,u(Ee(r)),U(!0),ht.abort();var c=(ht=new AbortController).signal,i="".concat(n,"?q=").concat(e.target.value,"&key=").concat(o,"&mots=").concat(_?y:"");fetch(i,{signal:c}).then((function(e){return e.json()})).then((function(e){var t=[];e.features.forEach((function(e){e.properties.mot[y]&&t.push(e)})),0!==e.features.length&&0!==t.length||u(je("Couldn't find stations","warning")),N(t),U(!1)})).catch((function(e){if("AbortError"!==e.name)throw e;console.warn("Abort ".concat(i))}))},Y=function(e){var t=Object(i.a)(C,1)[0];if("Enter"===e.key&&t){var n=f;q[I]=t.properties.name;var a=G.a.clone(h);a[I]=t,u(Ee(n)),N([]),u(we(a))}if("Backspace"===e.key){var r=[];e.target.value&&(r=C);var o={};Object.keys(h).forEach((function(e){e!==I.toString()&&(o[e]=h[e])})),N(r),u(we(o))}};return r.a.createElement("div",{className:"rd-routing-menu"},r.a.createElement(Te.a,{square:!0,elevation:3},r.a.createElement("div",{className:"rd-routing-menu-header"},r.a.createElement(Me.a,{value:!!se.includes(y)&&y,className:c.tabs,onChange:function(e,t){B(0,t)},indicatorColor:"primary",textColor:"primary","aria-label":"mots icons"},b.map((function(e){return r.a.createElement(xe.a,{className:c.tab,key:"mot-".concat(e.name),value:e.name,icon:e.icon,"aria-label":e.name})}))),r.a.createElement(He.a,{className:y===J?c.dropDownSelected:c.dropDown},r.a.createElement(Pe.a,{id:"rd-other-mot-label"},"Other MOTs"),r.a.createElement(Ge.a,{labelId:"rd-other-mot-label",value:J,onChange:function(e){if(e){var t=e.target.value;B(0,t),W(t)}else W(void 0)}},w.map((function(e){return r.a.createElement(Ie.a,{value:e.name,key:"other-mot-".concat(e.name)},e.name)}))))),r.a.createElement(mt,null,f.map((function(e,t){return r.a.createElement(pt,{key:"searchField-".concat(t),index:t,addNewSearchFieldHandler:X,currentStops:f,removeSearchFieldHandler:$,searchStopsHandler:Q,singleStop:e,processHighlightedResultSelectHandler:Y,onFieldFocusHandler:Z})})),r.a.createElement("div",{className:"rd-mot-checkbox"},r.a.createElement(_e.a,{className:c.checkbox,checked:_,onChange:function(){return M(!_)},color:"primary",inputProps:{"aria-label":"use only mot"}}),r.a.createElement("span",null,"Search only selected mode of transport"))),L?r.a.createElement(Ae.a,null):null),r.a.createElement(Ze,{currentSearchResults:C,processClickedResultHandler:function(e){var t=f;t[I]=e.properties.name;var n=G.a.clone(h);n[I]=e,u(Ee(t)),N([]),Object.keys(n).forEach((function(e){var t;e===I.toString()&&(n[e].geometry.coordinates=(t=n[e].geometry.coordinates,Object(T.m)(t,"EPSG:4326","EPSG:3857")))})),u(we(n))}}))},bt=n(655),vt=function(e){function t(e){var n;return Object(w.a)(this,t),(n=Object(j.a)(this,Object(C.a)(t).call(this,e))).handleOpen=function(){n.setState({open:!0})},n.handleClose=function(){n.setState({open:!1})},n.state={open:!1},n}return Object(N.a)(t,e),Object(k.a)(t,[{key:"componentDidUpdate",value:function(e){var t=this.props.notificationMessage;t&&t!==e.notificationMessage&&this.handleOpen()}},{key:"render",value:function(){var e=this.props,t=e.notificationMessage,n=e.notificationType,a=this.state.open;return r.a.createElement(D.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:a,autoHideDuration:6e3,onClose:this.handleClose},r.a.createElement(bt.a,{onClose:this.handleClose,severity:n,elevation:6,variant:"filled"},t))}}]),t}(r.a.Component),gt=Object(l.b)((function(e){return{notificationMessage:e.MapReducer.notificationMessage,notificationType:e.MapReducer.notificationType}}))(vt),yt={mots:pe,routingUrl:"https://api.geops.io/routing/dev/",stationSearchUrl:"https://api.geops.io/stops/dev/"};function Ot(e){var t=e.mots,n=e.routingUrl,o=e.stationSearchUrl,c=Object(a.useState)(null),u=Object(i.a)(c,2),s=u[0],d=u[1];return Object(a.useEffect)((function(){fetch("https://developer.geops.io/publickey").then((function(e){return e.json()})).then((function(e){d(e.key)})).catch((function(){console.error("Request to get the apiKey failed")}))}),[]),s?r.a.createElement(l.a,{store:E},r.a.createElement(St,{mots:t,stationSearchUrl:o,APIKey:s}),r.a.createElement(Fe,{mots:t,routingUrl:n,APIKey:s}),r.a.createElement(gt,null)):null}Ot.defaultProps=yt;var Et=Ot;n(594),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(Et,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[363,1,2]]]);
//# sourceMappingURL=main.6e1b5d70.chunk.js.map