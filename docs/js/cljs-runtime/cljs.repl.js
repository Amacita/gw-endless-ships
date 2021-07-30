goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31612){
var map__31613 = p__31612;
var map__31613__$1 = cljs.core.__destructure_map(map__31613);
var m = map__31613__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31613__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31613__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4223__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return [(function (){var temp__5753__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31632_32031 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31633_32032 = null;
var count__31634_32033 = (0);
var i__31635_32034 = (0);
while(true){
if((i__31635_32034 < count__31634_32033)){
var f_32035 = chunk__31633_32032.cljs$core$IIndexed$_nth$arity$2(null,i__31635_32034);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32035], 0));


var G__32036 = seq__31632_32031;
var G__32037 = chunk__31633_32032;
var G__32038 = count__31634_32033;
var G__32039 = (i__31635_32034 + (1));
seq__31632_32031 = G__32036;
chunk__31633_32032 = G__32037;
count__31634_32033 = G__32038;
i__31635_32034 = G__32039;
continue;
} else {
var temp__5753__auto___32040 = cljs.core.seq(seq__31632_32031);
if(temp__5753__auto___32040){
var seq__31632_32041__$1 = temp__5753__auto___32040;
if(cljs.core.chunked_seq_QMARK_(seq__31632_32041__$1)){
var c__4649__auto___32046 = cljs.core.chunk_first(seq__31632_32041__$1);
var G__32047 = cljs.core.chunk_rest(seq__31632_32041__$1);
var G__32048 = c__4649__auto___32046;
var G__32049 = cljs.core.count(c__4649__auto___32046);
var G__32050 = (0);
seq__31632_32031 = G__32047;
chunk__31633_32032 = G__32048;
count__31634_32033 = G__32049;
i__31635_32034 = G__32050;
continue;
} else {
var f_32051 = cljs.core.first(seq__31632_32041__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_32051], 0));


var G__32053 = cljs.core.next(seq__31632_32041__$1);
var G__32054 = null;
var G__32055 = (0);
var G__32056 = (0);
seq__31632_32031 = G__32053;
chunk__31633_32032 = G__32054;
count__31634_32033 = G__32055;
i__31635_32034 = G__32056;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32061 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4223__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_32061], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_32061)))?cljs.core.second(arglists_32061):arglists_32061)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31664_32080 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31665_32081 = null;
var count__31666_32082 = (0);
var i__31667_32083 = (0);
while(true){
if((i__31667_32083 < count__31666_32082)){
var vec__31705_32084 = chunk__31665_32081.cljs$core$IIndexed$_nth$arity$2(null,i__31667_32083);
var name_32085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31705_32084,(0),null);
var map__31708_32086 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31705_32084,(1),null);
var map__31708_32087__$1 = cljs.core.__destructure_map(map__31708_32086);
var doc_32088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31708_32087__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32089 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31708_32087__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32085], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32089], 0));

if(cljs.core.truth_(doc_32088)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32088], 0));
} else {
}


var G__32099 = seq__31664_32080;
var G__32100 = chunk__31665_32081;
var G__32101 = count__31666_32082;
var G__32102 = (i__31667_32083 + (1));
seq__31664_32080 = G__32099;
chunk__31665_32081 = G__32100;
count__31666_32082 = G__32101;
i__31667_32083 = G__32102;
continue;
} else {
var temp__5753__auto___32107 = cljs.core.seq(seq__31664_32080);
if(temp__5753__auto___32107){
var seq__31664_32108__$1 = temp__5753__auto___32107;
if(cljs.core.chunked_seq_QMARK_(seq__31664_32108__$1)){
var c__4649__auto___32110 = cljs.core.chunk_first(seq__31664_32108__$1);
var G__32111 = cljs.core.chunk_rest(seq__31664_32108__$1);
var G__32112 = c__4649__auto___32110;
var G__32113 = cljs.core.count(c__4649__auto___32110);
var G__32114 = (0);
seq__31664_32080 = G__32111;
chunk__31665_32081 = G__32112;
count__31666_32082 = G__32113;
i__31667_32083 = G__32114;
continue;
} else {
var vec__31718_32119 = cljs.core.first(seq__31664_32108__$1);
var name_32120 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31718_32119,(0),null);
var map__31721_32121 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31718_32119,(1),null);
var map__31721_32122__$1 = cljs.core.__destructure_map(map__31721_32121);
var doc_32123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31721_32122__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31721_32122__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_32120], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_32124], 0));

if(cljs.core.truth_(doc_32123)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_32123], 0));
} else {
}


var G__32133 = cljs.core.next(seq__31664_32108__$1);
var G__32134 = null;
var G__32135 = (0);
var G__32136 = (0);
seq__31664_32080 = G__32133;
chunk__31665_32081 = G__32134;
count__31666_32082 = G__32135;
i__31667_32083 = G__32136;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5753__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5753__auto__)){
var fnspec = temp__5753__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__31745 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31746 = null;
var count__31747 = (0);
var i__31748 = (0);
while(true){
if((i__31748 < count__31747)){
var role = chunk__31746.cljs$core$IIndexed$_nth$arity$2(null,i__31748);
var temp__5753__auto___32147__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___32147__$1)){
var spec_32148 = temp__5753__auto___32147__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32148)], 0));
} else {
}


var G__32149 = seq__31745;
var G__32150 = chunk__31746;
var G__32151 = count__31747;
var G__32152 = (i__31748 + (1));
seq__31745 = G__32149;
chunk__31746 = G__32150;
count__31747 = G__32151;
i__31748 = G__32152;
continue;
} else {
var temp__5753__auto____$1 = cljs.core.seq(seq__31745);
if(temp__5753__auto____$1){
var seq__31745__$1 = temp__5753__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__31745__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__31745__$1);
var G__32153 = cljs.core.chunk_rest(seq__31745__$1);
var G__32154 = c__4649__auto__;
var G__32155 = cljs.core.count(c__4649__auto__);
var G__32156 = (0);
seq__31745 = G__32153;
chunk__31746 = G__32154;
count__31747 = G__32155;
i__31748 = G__32156;
continue;
} else {
var role = cljs.core.first(seq__31745__$1);
var temp__5753__auto___32158__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5753__auto___32158__$2)){
var spec_32159 = temp__5753__auto___32158__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_32159)], 0));
} else {
}


var G__32163 = cljs.core.next(seq__31745__$1);
var G__32164 = null;
var G__32165 = (0);
var G__32166 = (0);
seq__31745 = G__32163;
chunk__31746 = G__32164;
count__31747 = G__32165;
i__31748 = G__32166;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5753__auto__)){
var msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5753__auto__)){
var ed = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__32178 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__32179 = cljs.core.ex_cause(t);
via = G__32178;
t = G__32179;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5753__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5753__auto__)){
var root_msg = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5753__auto__)){
var data = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5753__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5753__auto__)){
var phase = temp__5753__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31829 = datafied_throwable;
var map__31829__$1 = cljs.core.__destructure_map(map__31829);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31829__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31829__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__31829__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31830 = cljs.core.last(via);
var map__31830__$1 = cljs.core.__destructure_map(map__31830);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31830__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31830__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31830__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31831 = data;
var map__31831__$1 = cljs.core.__destructure_map(map__31831);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31831__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31831__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31831__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31832 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__31832__$1 = cljs.core.__destructure_map(map__31832);
var top_data = map__31832__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__31834 = phase;
var G__31834__$1 = (((G__31834 instanceof cljs.core.Keyword))?G__31834.fqn:null);
switch (G__31834__$1) {
case "read-source":
var map__31835 = data;
var map__31835__$1 = cljs.core.__destructure_map(map__31835);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31835__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31835__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31837 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__31837__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31837,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31837);
var G__31837__$2 = (cljs.core.truth_((function (){var fexpr__31839 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31839.cljs$core$IFn$_invoke$arity$1 ? fexpr__31839.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31839.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31837__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31837__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31837__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31837__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31841 = top_data;
var G__31841__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31841,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31841);
var G__31841__$2 = (cljs.core.truth_((function (){var fexpr__31842 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31842.cljs$core$IFn$_invoke$arity$1 ? fexpr__31842.cljs$core$IFn$_invoke$arity$1(source) : fexpr__31842.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__31841__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31841__$1);
var G__31841__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31841__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31841__$2);
var G__31841__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31841__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31841__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31841__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31841__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31847 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31847,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31847,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31847,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31847,(3),null);
var G__31850 = top_data;
var G__31850__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31850,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31850);
var G__31850__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31850__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31850__$1);
var G__31850__$3 = (cljs.core.truth_((function (){var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31850__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31850__$2);
var G__31850__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31850__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31850__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31850__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31850__$4;
}

break;
case "execution":
var vec__31864 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31864,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__31827_SHARP_){
var or__4223__auto__ = (p1__31827_SHARP_ == null);
if(or__4223__auto__){
return or__4223__auto__;
} else {
var fexpr__31875 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__31875.cljs$core$IFn$_invoke$arity$1 ? fexpr__31875.cljs$core$IFn$_invoke$arity$1(p1__31827_SHARP_) : fexpr__31875.call(null,p1__31827_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4223__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return line;
}
})();
var G__31883 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31883__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31883);
var G__31883__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31883__$1);
var G__31883__$3 = (cljs.core.truth_((function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = source__$1;
if(cljs.core.truth_(and__4221__auto__)){
return method;
} else {
return and__4221__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4223__auto__ = fn;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31883__$2);
var G__31883__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31883__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__31883__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31883__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31834__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31903){
var map__31904 = p__31903;
var map__31904__$1 = cljs.core.__destructure_map(map__31904);
var triage_data = map__31904__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31904__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = source;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4223__auto__ = line;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4223__auto__ = class$;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31927 = phase;
var G__31927__$1 = (((G__31927 instanceof cljs.core.Keyword))?G__31927.fqn:null);
switch (G__31927__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__31933 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__31934 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31935 = loc;
var G__31936 = (cljs.core.truth_(spec)?(function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31940_32219 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31941_32220 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31942_32221 = true;
var _STAR_print_fn_STAR__temp_val__31943_32222 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31942_32221);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31943_32222);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31900_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31900_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31941_32220);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31940_32219);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31933,G__31934,G__31935,G__31936) : format.call(null,G__31933,G__31934,G__31935,G__31936));

break;
case "macroexpansion":
var G__31965 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__31966 = cause_type;
var G__31967 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31968 = loc;
var G__31969 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31965,G__31966,G__31967,G__31968,G__31969) : format.call(null,G__31965,G__31966,G__31967,G__31968,G__31969));

break;
case "compile-syntax-check":
var G__31977 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__31978 = cause_type;
var G__31979 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31980 = loc;
var G__31981 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31977,G__31978,G__31979,G__31980,G__31981) : format.call(null,G__31977,G__31978,G__31979,G__31980,G__31981));

break;
case "compilation":
var G__31984 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__31985 = cause_type;
var G__31986 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__31987 = loc;
var G__31988 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__31984,G__31985,G__31986,G__31987,G__31988) : format.call(null,G__31984,G__31985,G__31986,G__31987,G__31988));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__31990 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__31991 = symbol;
var G__31992 = loc;
var G__31993 = (function (){var sb__4760__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31994_32225 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31995_32226 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31996_32227 = true;
var _STAR_print_fn_STAR__temp_val__31997_32228 = (function (x__4761__auto__){
return sb__4760__auto__.append(x__4761__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31996_32227);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31997_32228);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__31902_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__31902_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31995_32226);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31994_32225);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4760__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__31990,G__31991,G__31992,G__31993) : format.call(null,G__31990,G__31991,G__31992,G__31993));
} else {
var G__32005 = "Execution error%s at %s(%s).\n%s\n";
var G__32006 = cause_type;
var G__32007 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__32008 = loc;
var G__32009 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__32005,G__32006,G__32007,G__32008,G__32009) : format.call(null,G__32005,G__32006,G__32007,G__32008,G__32009));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31927__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
