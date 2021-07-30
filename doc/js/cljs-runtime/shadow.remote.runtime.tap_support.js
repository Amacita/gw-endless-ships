goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__32431,p__32432){
var map__32433 = p__32431;
var map__32433__$1 = cljs.core.__destructure_map(map__32433);
var svc = map__32433__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32433__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32433__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32433__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32434 = p__32432;
var map__32434__$1 = cljs.core.__destructure_map(map__32434);
var msg = map__32434__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32434__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32434__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32434__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32434__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__32436,p__32437){
var map__32438 = p__32436;
var map__32438__$1 = cljs.core.__destructure_map(map__32438);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32438__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__32439 = p__32437;
var map__32439__$1 = cljs.core.__destructure_map(map__32439);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32439__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__32441,p__32442){
var map__32443 = p__32441;
var map__32443__$1 = cljs.core.__destructure_map(map__32443);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32443__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32443__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__32444 = p__32442;
var map__32444__$1 = cljs.core.__destructure_map(map__32444);
var msg = map__32444__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__32444__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__32449,tid){
var map__32450 = p__32449;
var map__32450__$1 = cljs.core.__destructure_map(map__32450);
var svc = map__32450__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32450__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__32458 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__32459 = null;
var count__32460 = (0);
var i__32461 = (0);
while(true){
if((i__32461 < count__32460)){
var vec__32471 = chunk__32459.cljs$core$IIndexed$_nth$arity$2(null,i__32461);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32471,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32471,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32490 = seq__32458;
var G__32491 = chunk__32459;
var G__32492 = count__32460;
var G__32493 = (i__32461 + (1));
seq__32458 = G__32490;
chunk__32459 = G__32491;
count__32460 = G__32492;
i__32461 = G__32493;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32458);
if(temp__5753__auto__){
var seq__32458__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32458__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32458__$1);
var G__32494 = cljs.core.chunk_rest(seq__32458__$1);
var G__32495 = c__4649__auto__;
var G__32496 = cljs.core.count(c__4649__auto__);
var G__32497 = (0);
seq__32458 = G__32494;
chunk__32459 = G__32495;
count__32460 = G__32496;
i__32461 = G__32497;
continue;
} else {
var vec__32475 = cljs.core.first(seq__32458__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32475,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32475,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__32501 = cljs.core.next(seq__32458__$1);
var G__32502 = null;
var G__32503 = (0);
var G__32504 = (0);
seq__32458 = G__32501;
chunk__32459 = G__32502;
count__32460 = G__32503;
i__32461 = G__32504;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__32453_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__32453_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__32454_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__32454_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__32455_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__32455_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__32456_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__32456_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__32483){
var map__32484 = p__32483;
var map__32484__$1 = cljs.core.__destructure_map(map__32484);
var svc = map__32484__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32484__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32484__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
