goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
return shadow.remote.runtime.api.relay_msg(runtime,msg);
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__28848,res){
var map__28849 = p__28848;
var map__28849__$1 = cljs.core.__destructure_map(map__28849);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28849__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28849__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__28850 = res;
var G__28850__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28850,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__28850);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__28850__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__28850__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__28854 = arguments.length;
switch (G__28854) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__28855,msg,handlers,timeout_after_ms){
var map__28856 = p__28855;
var map__28856__$1 = cljs.core.__destructure_map(map__28856);
var runtime = map__28856__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28856__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___29128 = arguments.length;
var i__4830__auto___29129 = (0);
while(true){
if((i__4830__auto___29129 < len__4829__auto___29128)){
args__4835__auto__.push((arguments[i__4830__auto___29129]));

var G__29130 = (i__4830__auto___29129 + (1));
i__4830__auto___29129 = G__29130;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28866,ev,args){
var map__28869 = p__28866;
var map__28869__$1 = cljs.core.__destructure_map(map__28869);
var runtime = map__28869__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28869__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__28871 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__28874 = null;
var count__28875 = (0);
var i__28876 = (0);
while(true){
if((i__28876 < count__28875)){
var ext = chunk__28874.cljs$core$IIndexed$_nth$arity$2(null,i__28876);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29133 = seq__28871;
var G__29134 = chunk__28874;
var G__29135 = count__28875;
var G__29136 = (i__28876 + (1));
seq__28871 = G__29133;
chunk__28874 = G__29134;
count__28875 = G__29135;
i__28876 = G__29136;
continue;
} else {
var G__29137 = seq__28871;
var G__29138 = chunk__28874;
var G__29139 = count__28875;
var G__29140 = (i__28876 + (1));
seq__28871 = G__29137;
chunk__28874 = G__29138;
count__28875 = G__29139;
i__28876 = G__29140;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__28871);
if(temp__5753__auto__){
var seq__28871__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__28871__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__28871__$1);
var G__29142 = cljs.core.chunk_rest(seq__28871__$1);
var G__29143 = c__4649__auto__;
var G__29144 = cljs.core.count(c__4649__auto__);
var G__29145 = (0);
seq__28871 = G__29142;
chunk__28874 = G__29143;
count__28875 = G__29144;
i__28876 = G__29145;
continue;
} else {
var ext = cljs.core.first(seq__28871__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__29147 = cljs.core.next(seq__28871__$1);
var G__29148 = null;
var G__29149 = (0);
var G__29150 = (0);
seq__28871 = G__29147;
chunk__28874 = G__29148;
count__28875 = G__29149;
i__28876 = G__29150;
continue;
} else {
var G__29151 = cljs.core.next(seq__28871__$1);
var G__29152 = null;
var G__29153 = (0);
var G__29154 = (0);
seq__28871 = G__29151;
chunk__28874 = G__29152;
count__28875 = G__29153;
i__28876 = G__29154;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq28860){
var G__28861 = cljs.core.first(seq28860);
var seq28860__$1 = cljs.core.next(seq28860);
var G__28862 = cljs.core.first(seq28860__$1);
var seq28860__$2 = cljs.core.next(seq28860__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28861,G__28862,seq28860__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__28901,p__28902){
var map__28903 = p__28901;
var map__28903__$1 = cljs.core.__destructure_map(map__28903);
var runtime = map__28903__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28903__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__28904 = p__28902;
var map__28904__$1 = cljs.core.__destructure_map(map__28904);
var msg = map__28904__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28904__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__28907 = cljs.core.deref(state_ref);
var map__28907__$1 = cljs.core.__destructure_map(map__28907);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28907__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28907__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__28910){
var map__28911 = p__28910;
var map__28911__$1 = cljs.core.__destructure_map(map__28911);
var runtime = map__28911__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28911__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__4223__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__28915,msg){
var map__28916 = p__28915;
var map__28916__$1 = cljs.core.__destructure_map(map__28916);
var runtime = map__28916__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28916__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__28942,key,p__28943){
var map__28945 = p__28942;
var map__28945__$1 = cljs.core.__destructure_map(map__28945);
var state = map__28945__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28945__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__28946 = p__28943;
var map__28946__$1 = cljs.core.__destructure_map(map__28946);
var spec = map__28946__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28946__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__28959,key,spec){
var map__28960 = p__28959;
var map__28960__$1 = cljs.core.__destructure_map(map__28960);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28960__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__28963_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__28963_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__28964_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__28964_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__28965_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__28965_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__28966_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__28966_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__28967_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__28967_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__28984,key){
var map__28986 = p__28984;
var map__28986__$1 = cljs.core.__destructure_map(map__28986);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28986__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__28991,msg){
var map__28992 = p__28991;
var map__28992__$1 = cljs.core.__destructure_map(map__28992);
var runtime = map__28992__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28992__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__28998,p__28999){
var map__29000 = p__28998;
var map__29000__$1 = cljs.core.__destructure_map(map__29000);
var runtime = map__29000__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29000__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__29001 = p__28999;
var map__29001__$1 = cljs.core.__destructure_map(map__29001);
var msg = map__29001__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29001__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29001__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__29019 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__29021 = null;
var count__29022 = (0);
var i__29023 = (0);
while(true){
if((i__29023 < count__29022)){
var map__29089 = chunk__29021.cljs$core$IIndexed$_nth$arity$2(null,i__29023);
var map__29089__$1 = cljs.core.__destructure_map(map__29089);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29089__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29176 = seq__29019;
var G__29177 = chunk__29021;
var G__29178 = count__29022;
var G__29179 = (i__29023 + (1));
seq__29019 = G__29176;
chunk__29021 = G__29177;
count__29022 = G__29178;
i__29023 = G__29179;
continue;
} else {
var G__29180 = seq__29019;
var G__29181 = chunk__29021;
var G__29182 = count__29022;
var G__29183 = (i__29023 + (1));
seq__29019 = G__29180;
chunk__29021 = G__29181;
count__29022 = G__29182;
i__29023 = G__29183;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29019);
if(temp__5753__auto__){
var seq__29019__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29019__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29019__$1);
var G__29185 = cljs.core.chunk_rest(seq__29019__$1);
var G__29186 = c__4649__auto__;
var G__29187 = cljs.core.count(c__4649__auto__);
var G__29188 = (0);
seq__29019 = G__29185;
chunk__29021 = G__29186;
count__29022 = G__29187;
i__29023 = G__29188;
continue;
} else {
var map__29094 = cljs.core.first(seq__29019__$1);
var map__29094__$1 = cljs.core.__destructure_map(map__29094);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29094__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__29190 = cljs.core.next(seq__29019__$1);
var G__29191 = null;
var G__29192 = (0);
var G__29193 = (0);
seq__29019 = G__29190;
chunk__29021 = G__29191;
count__29022 = G__29192;
i__29023 = G__29193;
continue;
} else {
var G__29194 = cljs.core.next(seq__29019__$1);
var G__29195 = null;
var G__29196 = (0);
var G__29197 = (0);
seq__29019 = G__29194;
chunk__29021 = G__29195;
count__29022 = G__29196;
i__29023 = G__29197;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
