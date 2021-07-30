goog.provide('re_frame.trace');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9532){
var map__9533 = p__9532;
var map__9533__$1 = cljs.core.__destructure_map(map__9533);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9533__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9533__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9533__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__9533__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4223__auto__ = child_of;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__9540_9573 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__9541_9574 = null;
var count__9542_9575 = (0);
var i__9543_9576 = (0);
while(true){
if((i__9543_9576 < count__9542_9575)){
var vec__9556_9577 = chunk__9541_9574.cljs$core$IIndexed$_nth$arity$2(null,i__9543_9576);
var k_9578 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9556_9577,(0),null);
var cb_9579 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9556_9577,(1),null);
try{var G__9561_9580 = cljs.core.deref(re_frame.trace.traces);
(cb_9579.cljs$core$IFn$_invoke$arity$1 ? cb_9579.cljs$core$IFn$_invoke$arity$1(G__9561_9580) : cb_9579.call(null,G__9561_9580));
}catch (e9559){var e_9581 = e9559;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_9578,"while storing",cljs.core.deref(re_frame.trace.traces),e_9581], 0));
}

var G__9582 = seq__9540_9573;
var G__9583 = chunk__9541_9574;
var G__9584 = count__9542_9575;
var G__9585 = (i__9543_9576 + (1));
seq__9540_9573 = G__9582;
chunk__9541_9574 = G__9583;
count__9542_9575 = G__9584;
i__9543_9576 = G__9585;
continue;
} else {
var temp__5753__auto___9586 = cljs.core.seq(seq__9540_9573);
if(temp__5753__auto___9586){
var seq__9540_9587__$1 = temp__5753__auto___9586;
if(cljs.core.chunked_seq_QMARK_(seq__9540_9587__$1)){
var c__4649__auto___9588 = cljs.core.chunk_first(seq__9540_9587__$1);
var G__9589 = cljs.core.chunk_rest(seq__9540_9587__$1);
var G__9590 = c__4649__auto___9588;
var G__9591 = cljs.core.count(c__4649__auto___9588);
var G__9592 = (0);
seq__9540_9573 = G__9589;
chunk__9541_9574 = G__9590;
count__9542_9575 = G__9591;
i__9543_9576 = G__9592;
continue;
} else {
var vec__9562_9593 = cljs.core.first(seq__9540_9587__$1);
var k_9594 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9562_9593,(0),null);
var cb_9595 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__9562_9593,(1),null);
try{var G__9566_9596 = cljs.core.deref(re_frame.trace.traces);
(cb_9595.cljs$core$IFn$_invoke$arity$1 ? cb_9595.cljs$core$IFn$_invoke$arity$1(G__9566_9596) : cb_9595.call(null,G__9566_9596));
}catch (e9565){var e_9597 = e9565;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_9594,"while storing",cljs.core.deref(re_frame.trace.traces),e_9597], 0));
}

var G__9598 = cljs.core.next(seq__9540_9587__$1);
var G__9599 = null;
var G__9600 = (0);
var G__9601 = (0);
seq__9540_9573 = G__9598;
chunk__9541_9574 = G__9599;
count__9542_9575 = G__9600;
i__9543_9576 = G__9601;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
