goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___32983 = arguments.length;
var i__4830__auto___32984 = (0);
while(true){
if((i__4830__auto___32984 < len__4829__auto___32983)){
args__4835__auto__.push((arguments[i__4830__auto___32984]));

var G__32986 = (i__4830__auto___32984 + (1));
i__4830__auto___32984 = G__32986;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq32787){
var G__32788 = cljs.core.first(seq32787);
var seq32787__$1 = cljs.core.next(seq32787);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32788,seq32787__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__32792 = cljs.core.seq(sources);
var chunk__32793 = null;
var count__32794 = (0);
var i__32795 = (0);
while(true){
if((i__32795 < count__32794)){
var map__32800 = chunk__32793.cljs$core$IIndexed$_nth$arity$2(null,i__32795);
var map__32800__$1 = cljs.core.__destructure_map(map__32800);
var src = map__32800__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32800__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e32801){var e_32990 = e32801;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32990);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32990.message)].join('')));
}

var G__32991 = seq__32792;
var G__32992 = chunk__32793;
var G__32993 = count__32794;
var G__32994 = (i__32795 + (1));
seq__32792 = G__32991;
chunk__32793 = G__32992;
count__32794 = G__32993;
i__32795 = G__32994;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32792);
if(temp__5753__auto__){
var seq__32792__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32792__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32792__$1);
var G__32995 = cljs.core.chunk_rest(seq__32792__$1);
var G__32996 = c__4649__auto__;
var G__32997 = cljs.core.count(c__4649__auto__);
var G__32998 = (0);
seq__32792 = G__32995;
chunk__32793 = G__32996;
count__32794 = G__32997;
i__32795 = G__32998;
continue;
} else {
var map__32804 = cljs.core.first(seq__32792__$1);
var map__32804__$1 = cljs.core.__destructure_map(map__32804);
var src = map__32804__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32804__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32804__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32804__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32804__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e32805){var e_32999 = e32805;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_32999);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_32999.message)].join('')));
}

var G__33000 = cljs.core.next(seq__32792__$1);
var G__33001 = null;
var G__33002 = (0);
var G__33003 = (0);
seq__32792 = G__33000;
chunk__32793 = G__33001;
count__32794 = G__33002;
i__32795 = G__33003;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__32806 = cljs.core.seq(js_requires);
var chunk__32807 = null;
var count__32808 = (0);
var i__32809 = (0);
while(true){
if((i__32809 < count__32808)){
var js_ns = chunk__32807.cljs$core$IIndexed$_nth$arity$2(null,i__32809);
var require_str_33004 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_33004);


var G__33006 = seq__32806;
var G__33007 = chunk__32807;
var G__33008 = count__32808;
var G__33009 = (i__32809 + (1));
seq__32806 = G__33006;
chunk__32807 = G__33007;
count__32808 = G__33008;
i__32809 = G__33009;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32806);
if(temp__5753__auto__){
var seq__32806__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32806__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32806__$1);
var G__33011 = cljs.core.chunk_rest(seq__32806__$1);
var G__33012 = c__4649__auto__;
var G__33013 = cljs.core.count(c__4649__auto__);
var G__33014 = (0);
seq__32806 = G__33011;
chunk__32807 = G__33012;
count__32808 = G__33013;
i__32809 = G__33014;
continue;
} else {
var js_ns = cljs.core.first(seq__32806__$1);
var require_str_33015 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_33015);


var G__33016 = cljs.core.next(seq__32806__$1);
var G__33017 = null;
var G__33018 = (0);
var G__33019 = (0);
seq__32806 = G__33016;
chunk__32807 = G__33017;
count__32808 = G__33018;
i__32809 = G__33019;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__32811){
var map__32812 = p__32811;
var map__32812__$1 = cljs.core.__destructure_map(map__32812);
var msg = map__32812__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32812__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32812__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4622__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32813(s__32814){
return (new cljs.core.LazySeq(null,(function (){
var s__32814__$1 = s__32814;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__32814__$1);
if(temp__5753__auto__){
var xs__6308__auto__ = temp__5753__auto__;
var map__32821 = cljs.core.first(xs__6308__auto__);
var map__32821__$1 = cljs.core.__destructure_map(map__32821);
var src = map__32821__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32821__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32821__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4618__auto__ = ((function (s__32814__$1,map__32821,map__32821__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__32812,map__32812__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32813_$_iter__32815(s__32816){
return (new cljs.core.LazySeq(null,((function (s__32814__$1,map__32821,map__32821__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__32812,map__32812__$1,msg,info,reload_info){
return (function (){
var s__32816__$1 = s__32816;
while(true){
var temp__5753__auto____$1 = cljs.core.seq(s__32816__$1);
if(temp__5753__auto____$1){
var s__32816__$2 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__32816__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__32816__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__32818 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__32817 = (0);
while(true){
if((i__32817 < size__4621__auto__)){
var warning = cljs.core._nth(c__4620__auto__,i__32817);
cljs.core.chunk_append(b__32818,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__33026 = (i__32817 + (1));
i__32817 = G__33026;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__32818),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32813_$_iter__32815(cljs.core.chunk_rest(s__32816__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__32818),null);
}
} else {
var warning = cljs.core.first(s__32816__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32813_$_iter__32815(cljs.core.rest(s__32816__$2)));
}
} else {
return null;
}
break;
}
});})(s__32814__$1,map__32821,map__32821__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__32812,map__32812__$1,msg,info,reload_info))
,null,null));
});})(s__32814__$1,map__32821,map__32821__$1,src,resource_name,warnings,xs__6308__auto__,temp__5753__auto__,map__32812,map__32812__$1,msg,info,reload_info))
;
var fs__4619__auto__ = cljs.core.seq(iterys__4618__auto__(warnings));
if(fs__4619__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4619__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__32813(cljs.core.rest(s__32814__$1)));
} else {
var G__33027 = cljs.core.rest(s__32814__$1);
s__32814__$1 = G__33027;
continue;
}
} else {
var G__33028 = cljs.core.rest(s__32814__$1);
s__32814__$1 = G__33028;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__32827_33029 = cljs.core.seq(warnings);
var chunk__32828_33030 = null;
var count__32829_33031 = (0);
var i__32830_33032 = (0);
while(true){
if((i__32830_33032 < count__32829_33031)){
var map__32837_33034 = chunk__32828_33030.cljs$core$IIndexed$_nth$arity$2(null,i__32830_33032);
var map__32837_33035__$1 = cljs.core.__destructure_map(map__32837_33034);
var w_33036 = map__32837_33035__$1;
var msg_33037__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837_33035__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33038 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837_33035__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33039 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837_33035__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33040 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32837_33035__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33040)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33038),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33039),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33037__$1)].join(''));


var G__33044 = seq__32827_33029;
var G__33045 = chunk__32828_33030;
var G__33046 = count__32829_33031;
var G__33047 = (i__32830_33032 + (1));
seq__32827_33029 = G__33044;
chunk__32828_33030 = G__33045;
count__32829_33031 = G__33046;
i__32830_33032 = G__33047;
continue;
} else {
var temp__5753__auto___33048 = cljs.core.seq(seq__32827_33029);
if(temp__5753__auto___33048){
var seq__32827_33049__$1 = temp__5753__auto___33048;
if(cljs.core.chunked_seq_QMARK_(seq__32827_33049__$1)){
var c__4649__auto___33050 = cljs.core.chunk_first(seq__32827_33049__$1);
var G__33051 = cljs.core.chunk_rest(seq__32827_33049__$1);
var G__33052 = c__4649__auto___33050;
var G__33053 = cljs.core.count(c__4649__auto___33050);
var G__33054 = (0);
seq__32827_33029 = G__33051;
chunk__32828_33030 = G__33052;
count__32829_33031 = G__33053;
i__32830_33032 = G__33054;
continue;
} else {
var map__32842_33055 = cljs.core.first(seq__32827_33049__$1);
var map__32842_33056__$1 = cljs.core.__destructure_map(map__32842_33055);
var w_33057 = map__32842_33056__$1;
var msg_33058__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32842_33056__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_33059 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32842_33056__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_33060 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32842_33056__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_33061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32842_33056__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_33061)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_33059),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_33060),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_33058__$1)].join(''));


var G__33066 = cljs.core.next(seq__32827_33049__$1);
var G__33067 = null;
var G__33068 = (0);
var G__33069 = (0);
seq__32827_33029 = G__33066;
chunk__32828_33030 = G__33067;
count__32829_33031 = G__33068;
i__32830_33032 = G__33069;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__32810_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__32810_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__4221__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__4221__auto__){
var and__4221__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__4221__auto____$1){
return new$;
} else {
return and__4221__auto____$1;
}
} else {
return and__4221__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__32843){
var map__32844 = p__32843;
var map__32844__$1 = cljs.core.__destructure_map(map__32844);
var msg = map__32844__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32844__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__32845 = cljs.core.seq(updates);
var chunk__32847 = null;
var count__32848 = (0);
var i__32849 = (0);
while(true){
if((i__32849 < count__32848)){
var path = chunk__32847.cljs$core$IIndexed$_nth$arity$2(null,i__32849);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32879_33077 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32883_33078 = null;
var count__32884_33079 = (0);
var i__32885_33080 = (0);
while(true){
if((i__32885_33080 < count__32884_33079)){
var node_33082 = chunk__32883_33078.cljs$core$IIndexed$_nth$arity$2(null,i__32885_33080);
if(cljs.core.not(node_33082.shadow$old)){
var path_match_33083 = shadow.cljs.devtools.client.browser.match_paths(node_33082.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33083)){
var new_link_33084 = (function (){var G__32893 = node_33082.cloneNode(true);
G__32893.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33083),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32893;
})();
(node_33082.shadow$old = true);

(new_link_33084.onload = ((function (seq__32879_33077,chunk__32883_33078,count__32884_33079,i__32885_33080,seq__32845,chunk__32847,count__32848,i__32849,new_link_33084,path_match_33083,node_33082,path,map__32844,map__32844__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_33082);
});})(seq__32879_33077,chunk__32883_33078,count__32884_33079,i__32885_33080,seq__32845,chunk__32847,count__32848,i__32849,new_link_33084,path_match_33083,node_33082,path,map__32844,map__32844__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33083], 0));

goog.dom.insertSiblingAfter(new_link_33084,node_33082);


var G__33092 = seq__32879_33077;
var G__33093 = chunk__32883_33078;
var G__33094 = count__32884_33079;
var G__33095 = (i__32885_33080 + (1));
seq__32879_33077 = G__33092;
chunk__32883_33078 = G__33093;
count__32884_33079 = G__33094;
i__32885_33080 = G__33095;
continue;
} else {
var G__33096 = seq__32879_33077;
var G__33097 = chunk__32883_33078;
var G__33098 = count__32884_33079;
var G__33099 = (i__32885_33080 + (1));
seq__32879_33077 = G__33096;
chunk__32883_33078 = G__33097;
count__32884_33079 = G__33098;
i__32885_33080 = G__33099;
continue;
}
} else {
var G__33101 = seq__32879_33077;
var G__33102 = chunk__32883_33078;
var G__33103 = count__32884_33079;
var G__33104 = (i__32885_33080 + (1));
seq__32879_33077 = G__33101;
chunk__32883_33078 = G__33102;
count__32884_33079 = G__33103;
i__32885_33080 = G__33104;
continue;
}
} else {
var temp__5753__auto___33105 = cljs.core.seq(seq__32879_33077);
if(temp__5753__auto___33105){
var seq__32879_33107__$1 = temp__5753__auto___33105;
if(cljs.core.chunked_seq_QMARK_(seq__32879_33107__$1)){
var c__4649__auto___33110 = cljs.core.chunk_first(seq__32879_33107__$1);
var G__33111 = cljs.core.chunk_rest(seq__32879_33107__$1);
var G__33112 = c__4649__auto___33110;
var G__33113 = cljs.core.count(c__4649__auto___33110);
var G__33114 = (0);
seq__32879_33077 = G__33111;
chunk__32883_33078 = G__33112;
count__32884_33079 = G__33113;
i__32885_33080 = G__33114;
continue;
} else {
var node_33116 = cljs.core.first(seq__32879_33107__$1);
if(cljs.core.not(node_33116.shadow$old)){
var path_match_33118 = shadow.cljs.devtools.client.browser.match_paths(node_33116.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33118)){
var new_link_33119 = (function (){var G__32894 = node_33116.cloneNode(true);
G__32894.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33118),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32894;
})();
(node_33116.shadow$old = true);

(new_link_33119.onload = ((function (seq__32879_33077,chunk__32883_33078,count__32884_33079,i__32885_33080,seq__32845,chunk__32847,count__32848,i__32849,new_link_33119,path_match_33118,node_33116,seq__32879_33107__$1,temp__5753__auto___33105,path,map__32844,map__32844__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_33116);
});})(seq__32879_33077,chunk__32883_33078,count__32884_33079,i__32885_33080,seq__32845,chunk__32847,count__32848,i__32849,new_link_33119,path_match_33118,node_33116,seq__32879_33107__$1,temp__5753__auto___33105,path,map__32844,map__32844__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33118], 0));

goog.dom.insertSiblingAfter(new_link_33119,node_33116);


var G__33131 = cljs.core.next(seq__32879_33107__$1);
var G__33132 = null;
var G__33133 = (0);
var G__33134 = (0);
seq__32879_33077 = G__33131;
chunk__32883_33078 = G__33132;
count__32884_33079 = G__33133;
i__32885_33080 = G__33134;
continue;
} else {
var G__33135 = cljs.core.next(seq__32879_33107__$1);
var G__33136 = null;
var G__33137 = (0);
var G__33138 = (0);
seq__32879_33077 = G__33135;
chunk__32883_33078 = G__33136;
count__32884_33079 = G__33137;
i__32885_33080 = G__33138;
continue;
}
} else {
var G__33140 = cljs.core.next(seq__32879_33107__$1);
var G__33141 = null;
var G__33142 = (0);
var G__33143 = (0);
seq__32879_33077 = G__33140;
chunk__32883_33078 = G__33141;
count__32884_33079 = G__33142;
i__32885_33080 = G__33143;
continue;
}
}
} else {
}
}
break;
}


var G__33144 = seq__32845;
var G__33145 = chunk__32847;
var G__33146 = count__32848;
var G__33147 = (i__32849 + (1));
seq__32845 = G__33144;
chunk__32847 = G__33145;
count__32848 = G__33146;
i__32849 = G__33147;
continue;
} else {
var G__33151 = seq__32845;
var G__33152 = chunk__32847;
var G__33153 = count__32848;
var G__33154 = (i__32849 + (1));
seq__32845 = G__33151;
chunk__32847 = G__33152;
count__32848 = G__33153;
i__32849 = G__33154;
continue;
}
} else {
var temp__5753__auto__ = cljs.core.seq(seq__32845);
if(temp__5753__auto__){
var seq__32845__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32845__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__32845__$1);
var G__33155 = cljs.core.chunk_rest(seq__32845__$1);
var G__33156 = c__4649__auto__;
var G__33157 = cljs.core.count(c__4649__auto__);
var G__33158 = (0);
seq__32845 = G__33155;
chunk__32847 = G__33156;
count__32848 = G__33157;
i__32849 = G__33158;
continue;
} else {
var path = cljs.core.first(seq__32845__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__32899_33159 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__32903_33160 = null;
var count__32904_33161 = (0);
var i__32905_33162 = (0);
while(true){
if((i__32905_33162 < count__32904_33161)){
var node_33165 = chunk__32903_33160.cljs$core$IIndexed$_nth$arity$2(null,i__32905_33162);
if(cljs.core.not(node_33165.shadow$old)){
var path_match_33167 = shadow.cljs.devtools.client.browser.match_paths(node_33165.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33167)){
var new_link_33168 = (function (){var G__32919 = node_33165.cloneNode(true);
G__32919.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33167),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32919;
})();
(node_33165.shadow$old = true);

(new_link_33168.onload = ((function (seq__32899_33159,chunk__32903_33160,count__32904_33161,i__32905_33162,seq__32845,chunk__32847,count__32848,i__32849,new_link_33168,path_match_33167,node_33165,path,seq__32845__$1,temp__5753__auto__,map__32844,map__32844__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_33165);
});})(seq__32899_33159,chunk__32903_33160,count__32904_33161,i__32905_33162,seq__32845,chunk__32847,count__32848,i__32849,new_link_33168,path_match_33167,node_33165,path,seq__32845__$1,temp__5753__auto__,map__32844,map__32844__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33167], 0));

goog.dom.insertSiblingAfter(new_link_33168,node_33165);


var G__33169 = seq__32899_33159;
var G__33170 = chunk__32903_33160;
var G__33171 = count__32904_33161;
var G__33172 = (i__32905_33162 + (1));
seq__32899_33159 = G__33169;
chunk__32903_33160 = G__33170;
count__32904_33161 = G__33171;
i__32905_33162 = G__33172;
continue;
} else {
var G__33173 = seq__32899_33159;
var G__33174 = chunk__32903_33160;
var G__33175 = count__32904_33161;
var G__33176 = (i__32905_33162 + (1));
seq__32899_33159 = G__33173;
chunk__32903_33160 = G__33174;
count__32904_33161 = G__33175;
i__32905_33162 = G__33176;
continue;
}
} else {
var G__33177 = seq__32899_33159;
var G__33178 = chunk__32903_33160;
var G__33179 = count__32904_33161;
var G__33180 = (i__32905_33162 + (1));
seq__32899_33159 = G__33177;
chunk__32903_33160 = G__33178;
count__32904_33161 = G__33179;
i__32905_33162 = G__33180;
continue;
}
} else {
var temp__5753__auto___33181__$1 = cljs.core.seq(seq__32899_33159);
if(temp__5753__auto___33181__$1){
var seq__32899_33182__$1 = temp__5753__auto___33181__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32899_33182__$1)){
var c__4649__auto___33183 = cljs.core.chunk_first(seq__32899_33182__$1);
var G__33184 = cljs.core.chunk_rest(seq__32899_33182__$1);
var G__33185 = c__4649__auto___33183;
var G__33186 = cljs.core.count(c__4649__auto___33183);
var G__33187 = (0);
seq__32899_33159 = G__33184;
chunk__32903_33160 = G__33185;
count__32904_33161 = G__33186;
i__32905_33162 = G__33187;
continue;
} else {
var node_33188 = cljs.core.first(seq__32899_33182__$1);
if(cljs.core.not(node_33188.shadow$old)){
var path_match_33191 = shadow.cljs.devtools.client.browser.match_paths(node_33188.getAttribute("href"),path);
if(cljs.core.truth_(path_match_33191)){
var new_link_33192 = (function (){var G__32920 = node_33188.cloneNode(true);
G__32920.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_33191),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__32920;
})();
(node_33188.shadow$old = true);

(new_link_33192.onload = ((function (seq__32899_33159,chunk__32903_33160,count__32904_33161,i__32905_33162,seq__32845,chunk__32847,count__32848,i__32849,new_link_33192,path_match_33191,node_33188,seq__32899_33182__$1,temp__5753__auto___33181__$1,path,seq__32845__$1,temp__5753__auto__,map__32844,map__32844__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_33188);
});})(seq__32899_33159,chunk__32903_33160,count__32904_33161,i__32905_33162,seq__32845,chunk__32847,count__32848,i__32849,new_link_33192,path_match_33191,node_33188,seq__32899_33182__$1,temp__5753__auto___33181__$1,path,seq__32845__$1,temp__5753__auto__,map__32844,map__32844__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_33191], 0));

goog.dom.insertSiblingAfter(new_link_33192,node_33188);


var G__33193 = cljs.core.next(seq__32899_33182__$1);
var G__33194 = null;
var G__33195 = (0);
var G__33196 = (0);
seq__32899_33159 = G__33193;
chunk__32903_33160 = G__33194;
count__32904_33161 = G__33195;
i__32905_33162 = G__33196;
continue;
} else {
var G__33197 = cljs.core.next(seq__32899_33182__$1);
var G__33198 = null;
var G__33199 = (0);
var G__33200 = (0);
seq__32899_33159 = G__33197;
chunk__32903_33160 = G__33198;
count__32904_33161 = G__33199;
i__32905_33162 = G__33200;
continue;
}
} else {
var G__33201 = cljs.core.next(seq__32899_33182__$1);
var G__33202 = null;
var G__33203 = (0);
var G__33204 = (0);
seq__32899_33159 = G__33201;
chunk__32903_33160 = G__33202;
count__32904_33161 = G__33203;
i__32905_33162 = G__33204;
continue;
}
}
} else {
}
}
break;
}


var G__33205 = cljs.core.next(seq__32845__$1);
var G__33206 = null;
var G__33207 = (0);
var G__33208 = (0);
seq__32845 = G__33205;
chunk__32847 = G__33206;
count__32848 = G__33207;
i__32849 = G__33208;
continue;
} else {
var G__33209 = cljs.core.next(seq__32845__$1);
var G__33210 = null;
var G__33211 = (0);
var G__33212 = (0);
seq__32845 = G__33209;
chunk__32847 = G__33210;
count__32848 = G__33211;
i__32849 = G__33212;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__32931){
var map__32932 = p__32931;
var map__32932__$1 = cljs.core.__destructure_map(map__32932);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32932__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__32943){
var map__32944 = p__32943;
var map__32944__$1 = cljs.core.__destructure_map(map__32944);
var _ = map__32944__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32944__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__32945,done,error){
var map__32950 = p__32945;
var map__32950__$1 = cljs.core.__destructure_map(map__32950);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32950__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__32952,done,error){
var map__32953 = p__32952;
var map__32953__$1 = cljs.core.__destructure_map(map__32953);
var msg = map__32953__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32953__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32953__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32953__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__32956){
var map__32957 = p__32956;
var map__32957__$1 = cljs.core.__destructure_map(map__32957);
var src = map__32957__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32957__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4221__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4221__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__32959 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__32959) : done.call(null,G__32959));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__32961){
var map__32962 = p__32961;
var map__32962__$1 = cljs.core.__destructure_map(map__32962);
var msg__$1 = map__32962__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32962__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e32963){var ex = e32963;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__32965){
var map__32966 = p__32965;
var map__32966__$1 = cljs.core.__destructure_map(map__32966);
var env = map__32966__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32966__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__32971){
var map__32972 = p__32971;
var map__32972__$1 = cljs.core.__destructure_map(map__32972);
var msg = map__32972__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32972__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__32975){
var map__32976 = p__32975;
var map__32976__$1 = cljs.core.__destructure_map(map__32976);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32976__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32976__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__32977){
var map__32978 = p__32977;
var map__32978__$1 = cljs.core.__destructure_map(map__32978);
var svc = map__32978__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32978__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
