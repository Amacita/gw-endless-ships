goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__10012 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__10013 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__10013);

try{try{var seq__10018 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10019 = null;
var count__10020 = (0);
var i__10021 = (0);
while(true){
if((i__10021 < count__10020)){
var vec__10056 = chunk__10019.cljs$core$IIndexed$_nth$arity$2(null,i__10021);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10056,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10056,(1),null);
var temp__5751__auto___10183 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___10183)){
var effect_fn_10184 = temp__5751__auto___10183;
(effect_fn_10184.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10184.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10184.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10187 = seq__10018;
var G__10188 = chunk__10019;
var G__10189 = count__10020;
var G__10190 = (i__10021 + (1));
seq__10018 = G__10187;
chunk__10019 = G__10188;
count__10020 = G__10189;
i__10021 = G__10190;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10018);
if(temp__5753__auto__){
var seq__10018__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10018__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__10018__$1);
var G__10194 = cljs.core.chunk_rest(seq__10018__$1);
var G__10195 = c__4649__auto__;
var G__10196 = cljs.core.count(c__4649__auto__);
var G__10197 = (0);
seq__10018 = G__10194;
chunk__10019 = G__10195;
count__10020 = G__10196;
i__10021 = G__10197;
continue;
} else {
var vec__10062 = cljs.core.first(seq__10018__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10062,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10062,(1),null);
var temp__5751__auto___10200 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___10200)){
var effect_fn_10201 = temp__5751__auto___10200;
(effect_fn_10201.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10201.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10201.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10202 = cljs.core.next(seq__10018__$1);
var G__10203 = null;
var G__10204 = (0);
var G__10205 = (0);
seq__10018 = G__10202;
chunk__10019 = G__10203;
count__10020 = G__10204;
i__10021 = G__10205;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__9492__auto___10206 = re_frame.interop.now();
var duration__9493__auto___10207 = (end__9492__auto___10206 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9493__auto___10207,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__9492__auto___10206);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__10012);
}} else {
var seq__10067 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__10068 = null;
var count__10069 = (0);
var i__10070 = (0);
while(true){
if((i__10070 < count__10069)){
var vec__10084 = chunk__10068.cljs$core$IIndexed$_nth$arity$2(null,i__10070);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10084,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10084,(1),null);
var temp__5751__auto___10211 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___10211)){
var effect_fn_10212 = temp__5751__auto___10211;
(effect_fn_10212.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10212.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10212.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10217 = seq__10067;
var G__10218 = chunk__10068;
var G__10219 = count__10069;
var G__10220 = (i__10070 + (1));
seq__10067 = G__10217;
chunk__10068 = G__10218;
count__10069 = G__10219;
i__10070 = G__10220;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10067);
if(temp__5753__auto__){
var seq__10067__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10067__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__10067__$1);
var G__10225 = cljs.core.chunk_rest(seq__10067__$1);
var G__10226 = c__4649__auto__;
var G__10227 = cljs.core.count(c__4649__auto__);
var G__10228 = (0);
seq__10067 = G__10225;
chunk__10068 = G__10226;
count__10069 = G__10227;
i__10070 = G__10228;
continue;
} else {
var vec__10091 = cljs.core.first(seq__10067__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10091,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__10091,(1),null);
var temp__5751__auto___10233 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5751__auto___10233)){
var effect_fn_10234 = temp__5751__auto___10233;
(effect_fn_10234.cljs$core$IFn$_invoke$arity$1 ? effect_fn_10234.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_10234.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__10235 = cljs.core.next(seq__10067__$1);
var G__10236 = null;
var G__10237 = (0);
var G__10238 = (0);
seq__10067 = G__10235;
chunk__10068 = G__10236;
count__10069 = G__10237;
i__10070 = G__10238;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__10096 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10097 = null;
var count__10098 = (0);
var i__10099 = (0);
while(true){
if((i__10099 < count__10098)){
var map__10113 = chunk__10097.cljs$core$IIndexed$_nth$arity$2(null,i__10099);
var map__10113__$1 = cljs.core.__destructure_map(map__10113);
var effect = map__10113__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10113__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10113__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__10096,chunk__10097,count__10098,i__10099,map__10113,map__10113__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__10096,chunk__10097,count__10098,i__10099,map__10113,map__10113__$1,effect,ms,dispatch))
,ms);
}


var G__10242 = seq__10096;
var G__10243 = chunk__10097;
var G__10244 = count__10098;
var G__10245 = (i__10099 + (1));
seq__10096 = G__10242;
chunk__10097 = G__10243;
count__10098 = G__10244;
i__10099 = G__10245;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10096);
if(temp__5753__auto__){
var seq__10096__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10096__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__10096__$1);
var G__10248 = cljs.core.chunk_rest(seq__10096__$1);
var G__10249 = c__4649__auto__;
var G__10250 = cljs.core.count(c__4649__auto__);
var G__10251 = (0);
seq__10096 = G__10248;
chunk__10097 = G__10249;
count__10098 = G__10250;
i__10099 = G__10251;
continue;
} else {
var map__10117 = cljs.core.first(seq__10096__$1);
var map__10117__$1 = cljs.core.__destructure_map(map__10117);
var effect = map__10117__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10117__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10117__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__10096,chunk__10097,count__10098,i__10099,map__10117,map__10117__$1,effect,ms,dispatch,seq__10096__$1,temp__5753__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__10096,chunk__10097,count__10098,i__10099,map__10117,map__10117__$1,effect,ms,dispatch,seq__10096__$1,temp__5753__auto__))
,ms);
}


var G__10256 = cljs.core.next(seq__10096__$1);
var G__10257 = null;
var G__10258 = (0);
var G__10259 = (0);
seq__10096 = G__10256;
chunk__10097 = G__10257;
count__10098 = G__10258;
i__10099 = G__10259;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__10128 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__10129 = null;
var count__10130 = (0);
var i__10131 = (0);
while(true){
if((i__10131 < count__10130)){
var event = chunk__10129.cljs$core$IIndexed$_nth$arity$2(null,i__10131);
re_frame.router.dispatch(event);


var G__10260 = seq__10128;
var G__10261 = chunk__10129;
var G__10262 = count__10130;
var G__10263 = (i__10131 + (1));
seq__10128 = G__10260;
chunk__10129 = G__10261;
count__10130 = G__10262;
i__10131 = G__10263;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10128);
if(temp__5753__auto__){
var seq__10128__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10128__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__10128__$1);
var G__10264 = cljs.core.chunk_rest(seq__10128__$1);
var G__10265 = c__4649__auto__;
var G__10266 = cljs.core.count(c__4649__auto__);
var G__10267 = (0);
seq__10128 = G__10264;
chunk__10129 = G__10265;
count__10130 = G__10266;
i__10131 = G__10267;
continue;
} else {
var event = cljs.core.first(seq__10128__$1);
re_frame.router.dispatch(event);


var G__10268 = cljs.core.next(seq__10128__$1);
var G__10269 = null;
var G__10270 = (0);
var G__10271 = (0);
seq__10128 = G__10268;
chunk__10129 = G__10269;
count__10130 = G__10270;
i__10131 = G__10271;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__10171 = cljs.core.seq(value);
var chunk__10172 = null;
var count__10173 = (0);
var i__10174 = (0);
while(true){
if((i__10174 < count__10173)){
var event = chunk__10172.cljs$core$IIndexed$_nth$arity$2(null,i__10174);
clear_event(event);


var G__10272 = seq__10171;
var G__10273 = chunk__10172;
var G__10274 = count__10173;
var G__10275 = (i__10174 + (1));
seq__10171 = G__10272;
chunk__10172 = G__10273;
count__10173 = G__10274;
i__10174 = G__10275;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__10171);
if(temp__5753__auto__){
var seq__10171__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__10171__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__10171__$1);
var G__10277 = cljs.core.chunk_rest(seq__10171__$1);
var G__10278 = c__4649__auto__;
var G__10279 = cljs.core.count(c__4649__auto__);
var G__10280 = (0);
seq__10171 = G__10277;
chunk__10172 = G__10278;
count__10173 = G__10279;
i__10174 = G__10280;
continue;
} else {
var event = cljs.core.first(seq__10171__$1);
clear_event(event);


var G__10281 = cljs.core.next(seq__10171__$1);
var G__10282 = null;
var G__10283 = (0);
var G__10284 = (0);
seq__10171 = G__10281;
chunk__10172 = G__10282;
count__10173 = G__10283;
i__10174 = G__10284;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
