goog.provide('day8.re_frame.http_fx');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__11080){
var vec__11081 = p__11080;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11081,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11081,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__11087){
var map__11088 = p__11087;
var map__11088__$1 = cljs.core.__destructure_map(map__11088);
var request = map__11088__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11088__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11088__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__11085_SHARP_){
var G__11089 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__11085_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11089) : re_frame.core.dispatch.call(null,G__11089));
}),(function (p1__11086_SHARP_){
var G__11090 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__11086_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__11090) : re_frame.core.dispatch.call(null,G__11090));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__11092 = cljs.core.seq(seq_request_maps);
var chunk__11093 = null;
var count__11094 = (0);
var i__11095 = (0);
while(true){
if((i__11095 < count__11094)){
var request__$1 = chunk__11093.cljs$core$IIndexed$_nth$arity$2(null,i__11095);
var G__11098_11100 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__11098_11100) : ajax.core.ajax_request.call(null,G__11098_11100));


var G__11101 = seq__11092;
var G__11102 = chunk__11093;
var G__11103 = count__11094;
var G__11104 = (i__11095 + (1));
seq__11092 = G__11101;
chunk__11093 = G__11102;
count__11094 = G__11103;
i__11095 = G__11104;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__11092);
if(temp__5753__auto__){
var seq__11092__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11092__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__11092__$1);
var G__11105 = cljs.core.chunk_rest(seq__11092__$1);
var G__11106 = c__4649__auto__;
var G__11107 = cljs.core.count(c__4649__auto__);
var G__11108 = (0);
seq__11092 = G__11105;
chunk__11093 = G__11106;
count__11094 = G__11107;
i__11095 = G__11108;
continue;
} else {
var request__$1 = cljs.core.first(seq__11092__$1);
var G__11099_11110 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__11099_11110) : ajax.core.ajax_request.call(null,G__11099_11110));


var G__11111 = cljs.core.next(seq__11092__$1);
var G__11112 = null;
var G__11113 = (0);
var G__11114 = (0);
seq__11092 = G__11111;
chunk__11093 = G__11112;
count__11094 = G__11113;
i__11095 = G__11114;
continue;
}
} else {
return null;
}
}
break;
}
});
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect) : re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
