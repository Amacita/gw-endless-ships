goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__10918 = e.target.readyState;
var fexpr__10917 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__10917.cljs$core$IFn$_invoke$arity$1 ? fexpr__10917.cljs$core$IFn$_invoke$arity$1(G__10918) : fexpr__10917.call(null,G__10918));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__10926,handler){
var map__10928 = p__10926;
var map__10928__$1 = cljs.core.__destructure_map(map__10928);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10928__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10928__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10928__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10928__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10928__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__10928__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10928__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__10924_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__10924_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5753__auto___10958 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5753__auto___10958)){
var response_type_10959 = temp__5753__auto___10958;
(this$__$1.responseType = cljs.core.name(response_type_10959));
} else {
}

var seq__10931_10960 = cljs.core.seq(headers);
var chunk__10932_10961 = null;
var count__10933_10962 = (0);
var i__10934_10963 = (0);
while(true){
if((i__10934_10963 < count__10933_10962)){
var vec__10943_10964 = chunk__10932_10961.cljs$core$IIndexed$_nth$arity$2(null,i__10934_10963);
var k_10965 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10943_10964,(0),null);
var v_10966 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10943_10964,(1),null);
this$__$1.setRequestHeader(k_10965,v_10966);


var G__10967 = seq__10931_10960;
var G__10968 = chunk__10932_10961;
var G__10969 = count__10933_10962;
var G__10970 = (i__10934_10963 + (1));
seq__10931_10960 = G__10967;
chunk__10932_10961 = G__10968;
count__10933_10962 = G__10969;
i__10934_10963 = G__10970;
continue;
} else {
var temp__5753__auto___10973 = cljs.core.seq(seq__10931_10960);
if(temp__5753__auto___10973){
var seq__10931_10974__$1 = temp__5753__auto___10973;
if(cljs.core.chunked_seq_QMARK_(seq__10931_10974__$1)){
var c__4649__auto___10975 = cljs.core.chunk_first(seq__10931_10974__$1);
var G__10976 = cljs.core.chunk_rest(seq__10931_10974__$1);
var G__10977 = c__4649__auto___10975;
var G__10978 = cljs.core.count(c__4649__auto___10975);
var G__10979 = (0);
seq__10931_10960 = G__10976;
chunk__10932_10961 = G__10977;
count__10933_10962 = G__10978;
i__10934_10963 = G__10979;
continue;
} else {
var vec__10949_10980 = cljs.core.first(seq__10931_10974__$1);
var k_10981 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10949_10980,(0),null);
var v_10982 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10949_10980,(1),null);
this$__$1.setRequestHeader(k_10981,v_10982);


var G__10983 = cljs.core.next(seq__10931_10974__$1);
var G__10984 = null;
var G__10985 = (0);
var G__10986 = (0);
seq__10931_10960 = G__10983;
chunk__10932_10961 = G__10984;
count__10933_10962 = G__10985;
i__10934_10963 = G__10986;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4223__auto__ = body;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
