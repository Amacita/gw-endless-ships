goog.provide('pushy.core');
pushy.core.on_click = (function pushy$core$on_click(funk){
return goog.events.listen(document,"click",funk);
});
pushy.core.update_history_BANG_ = (function pushy$core$update_history_BANG_(h){
var G__11562 = h;
G__11562.setUseFragment(false);

G__11562.setPathPrefix("");

G__11562.setEnabled(true);

return G__11562;
});
pushy.core.set_retrieve_token_BANG_ = (function pushy$core$set_retrieve_token_BANG_(t){
(t.retrieveToken = (function (path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.search)].join('');
}));

return t;
});
pushy.core.set_create_url_BANG_ = (function pushy$core$set_create_url_BANG_(t){
(t.createUrl = (function (token,path_prefix,location){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('');
}));

return t;
});
pushy.core.new_history = (function pushy$core$new_history(var_args){
var G__11567 = arguments.length;
switch (G__11567) {
case 0:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.new_history.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.new_history.cljs$core$IFn$_invoke$arity$1(pushy.core.set_create_url_BANG_(pushy.core.set_retrieve_token_BANG_((new goog.history.Html5History.TokenTransformer()))));
}));

(pushy.core.new_history.cljs$core$IFn$_invoke$arity$1 = (function (transformer){
return pushy.core.update_history_BANG_((new goog.history.Html5History(window,transformer)));
}));

(pushy.core.new_history.cljs$lang$maxFixedArity = 1);


/**
 * @interface
 */
pushy.core.IHistory = function(){};

var pushy$core$IHistory$set_token_BANG_$dyn_11690 = (function() {
var G__11691 = null;
var G__11691__2 = (function (this$,token){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4522__auto__.call(null,this$,token));
} else {
var m__4519__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4519__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
});
var G__11691__3 = (function (this$,token,title){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (pushy.core.set_token_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4522__auto__.call(null,this$,token,title));
} else {
var m__4519__auto__ = (pushy.core.set_token_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4519__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.set-token!",this$);
}
}
});
G__11691 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__11691__2.call(this,this$,token);
case 3:
return G__11691__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11691.cljs$core$IFn$_invoke$arity$2 = G__11691__2;
G__11691.cljs$core$IFn$_invoke$arity$3 = G__11691__3;
return G__11691;
})()
;
pushy.core.set_token_BANG_ = (function pushy$core$set_token_BANG_(var_args){
var G__11583 = arguments.length;
switch (G__11583) {
case 2:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$2(this$,token);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_11690(this$,token);
}
}));

(pushy.core.set_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$set_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$set_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$set_token_BANG_$dyn_11690(this$,token,title);
}
}));

(pushy.core.set_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$replace_token_BANG_$dyn_11694 = (function() {
var G__11696 = null;
var G__11696__2 = (function (this$,token){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4522__auto__.call(null,this$,token));
} else {
var m__4519__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(this$,token) : m__4519__auto__.call(null,this$,token));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
});
var G__11696__3 = (function (this$,token,title){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (pushy.core.replace_token_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4522__auto__.call(null,this$,token,title));
} else {
var m__4519__auto__ = (pushy.core.replace_token_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(this$,token,title) : m__4519__auto__.call(null,this$,token,title));
} else {
throw cljs.core.missing_protocol("IHistory.replace-token!",this$);
}
}
});
G__11696 = function(this$,token,title){
switch(arguments.length){
case 2:
return G__11696__2.call(this,this$,token);
case 3:
return G__11696__3.call(this,this$,token,title);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__11696.cljs$core$IFn$_invoke$arity$2 = G__11696__2;
G__11696.cljs$core$IFn$_invoke$arity$3 = G__11696__3;
return G__11696;
})()
;
pushy.core.replace_token_BANG_ = (function pushy$core$replace_token_BANG_(var_args){
var G__11595 = arguments.length;
switch (G__11595) {
case 2:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,token){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$2 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$2(this$,token);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_11694(this$,token);
}
}));

(pushy.core.replace_token_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,token,title){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$replace_token_BANG_$arity$3 == null)))))){
return this$.pushy$core$IHistory$replace_token_BANG_$arity$3(this$,token,title);
} else {
return pushy$core$IHistory$replace_token_BANG_$dyn_11694(this$,token,title);
}
}));

(pushy.core.replace_token_BANG_.cljs$lang$maxFixedArity = 3);


var pushy$core$IHistory$get_token$dyn_11699 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (pushy.core.get_token[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (pushy.core.get_token["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.get-token",this$);
}
}
});
pushy.core.get_token = (function pushy$core$get_token(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$get_token$arity$1 == null)))))){
return this$.pushy$core$IHistory$get_token$arity$1(this$);
} else {
return pushy$core$IHistory$get_token$dyn_11699(this$);
}
});

var pushy$core$IHistory$start_BANG_$dyn_11707 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (pushy.core.start_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (pushy.core.start_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.start!",this$);
}
}
});
pushy.core.start_BANG_ = (function pushy$core$start_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$start_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$start_BANG_$arity$1(this$);
} else {
return pushy$core$IHistory$start_BANG_$dyn_11707(this$);
}
});

var pushy$core$IHistory$stop_BANG_$dyn_11710 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (pushy.core.stop_BANG_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (pushy.core.stop_BANG_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IHistory.stop!",this$);
}
}
});
pushy.core.stop_BANG_ = (function pushy$core$stop_BANG_(this$){
if((((!((this$ == null)))) && ((!((this$.pushy$core$IHistory$stop_BANG_$arity$1 == null)))))){
return this$.pushy$core$IHistory$stop_BANG_$arity$1(this$);
} else {
return pushy$core$IHistory$stop_BANG_$dyn_11710(this$);
}
});

pushy.core.processable_url_QMARK_ = (function pushy$core$processable_url_QMARK_(uri){
return (((!(clojure.string.blank_QMARK_(uri)))) && (((((cljs.core.not(uri.hasScheme())) && (cljs.core.not(uri.hasDomain())))) || ((!((cljs.core.re_matches(cljs.core.re_pattern(["^",cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.origin),".*$"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri)) == null)))))));
});
pushy.core.get_token_from_uri = (function pushy$core$get_token_from_uri(uri){
var path = uri.getPath();
var query = uri.getQuery();
if(cljs.core.empty_QMARK_(query)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join('');
}
});
/**
 * Takes in three functions:
 *  * dispatch-fn: the function that dispatches when a match is found
 *  * match-fn: the function used to check if a particular route exists
 *  * identity-fn: (optional) extract the route from value returned by match-fn
 */
pushy.core.pushy = (function pushy$core$pushy(var_args){
var args__4835__auto__ = [];
var len__4829__auto___11713 = arguments.length;
var i__4830__auto___11716 = (0);
while(true){
if((i__4830__auto___11716 < len__4829__auto___11713)){
args__4835__auto__.push((arguments[i__4830__auto___11716]));

var G__11718 = (i__4830__auto___11716 + (1));
i__4830__auto___11716 = G__11718;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((2) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((2)),(0),null)):null);
return pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4836__auto__);
});

(pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic = (function (dispatch_fn,match_fn,p__11627){
var map__11628 = p__11627;
var map__11628__$1 = cljs.core.__destructure_map(map__11628);
var processable_url_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11628__$1,new cljs.core.Keyword(null,"processable-url?","processable-url?",1865408336),pushy.core.processable_url_QMARK_);
var identity_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11628__$1,new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),cljs.core.identity);
var prevent_default_when_no_match_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__11628__$1,new cljs.core.Keyword(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",-358623618),cljs.core.constantly(false));
var history = pushy.core.new_history.cljs$core$IFn$_invoke$arity$0();
var event_keys = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
if((typeof pushy !== 'undefined') && (typeof pushy.core !== 'undefined') && (typeof pushy.core.t_pushy$core11634 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {pushy.core.IHistory}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
pushy.core.t_pushy$core11634 = (function (event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,history,map__11628,processable_url_QMARK_,p__11627,match_fn,meta11635){
this.event_keys = event_keys;
this.identity_fn = identity_fn;
this.prevent_default_when_no_match_QMARK_ = prevent_default_when_no_match_QMARK_;
this.dispatch_fn = dispatch_fn;
this.history = history;
this.map__11628 = map__11628;
this.processable_url_QMARK_ = processable_url_QMARK_;
this.p__11627 = p__11627;
this.match_fn = match_fn;
this.meta11635 = meta11635;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(pushy.core.t_pushy$core11634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11636,meta11635__$1){
var self__ = this;
var _11636__$1 = this;
return (new pushy.core.t_pushy$core11634(self__.event_keys,self__.identity_fn,self__.prevent_default_when_no_match_QMARK_,self__.dispatch_fn,self__.history,self__.map__11628,self__.processable_url_QMARK_,self__.p__11627,self__.match_fn,meta11635__$1));
}));

(pushy.core.t_pushy$core11634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11636){
var self__ = this;
var _11636__$1 = this;
return self__.meta11635;
}));

(pushy.core.t_pushy$core11634.prototype.pushy$core$IHistory$ = cljs.core.PROTOCOL_SENTINEL);

(pushy.core.t_pushy$core11634.prototype.pushy$core$IHistory$set_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token);
}));

(pushy.core.t_pushy$core11634.prototype.pushy$core$IHistory$set_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.setToken(token,title);
}));

(pushy.core.t_pushy$core11634.prototype.pushy$core$IHistory$replace_token_BANG_$arity$2 = (function (_,token){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token);
}));

(pushy.core.t_pushy$core11634.prototype.pushy$core$IHistory$replace_token_BANG_$arity$3 = (function (_,token,title){
var self__ = this;
var ___$1 = this;
return self__.history.replaceToken(token,title);
}));

(pushy.core.t_pushy$core11634.prototype.pushy$core$IHistory$get_token$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.history.getToken();
}));

(pushy.core.t_pushy$core11634.prototype.pushy$core$IHistory$start_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
this$__$1.pushy$core$IHistory$stop_BANG_$arity$1(null);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,goog.events.listen(self__.history,goog.history.EventType.NAVIGATE,(function (e){
var temp__5753__auto__ = (function (){var G__11641 = (function (){var G__11642 = e.token;
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__11642) : self__.match_fn.call(null,G__11642));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__11641) : self__.identity_fn.call(null,G__11641));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var match = temp__5753__auto__;
return (self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match) : self__.dispatch_fn.call(null,match));
} else {
return null;
}
})));

var temp__5753__auto___11721 = (function (){var G__11647 = (function (){var G__11648 = this$__$1.pushy$core$IHistory$get_token$arity$1(null);
return (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(G__11648) : self__.match_fn.call(null,G__11648));
})();
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__11647) : self__.identity_fn.call(null,G__11647));
})();
if(cljs.core.truth_(temp__5753__auto___11721)){
var match_11722 = temp__5753__auto___11721;
(self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1 ? self__.dispatch_fn.cljs$core$IFn$_invoke$arity$1(match_11722) : self__.dispatch_fn.call(null,match_11722));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.event_keys,cljs.core.conj,pushy.core.on_click((function (e){
var temp__5753__auto__ = (function (){var G__11650 = e;
var G__11650__$1 = (((G__11650 == null))?null:G__11650.target);
if((G__11650__$1 == null)){
return null;
} else {
return G__11650__$1.closest("a");
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var el = temp__5753__auto__;
var uri = goog.Uri.parse(el.href);
if(cljs.core.truth_((function (){var and__4221__auto__ = (self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.processable_url_QMARK_.cljs$core$IFn$_invoke$arity$1(uri) : self__.processable_url_QMARK_.call(null,uri));
if(cljs.core.truth_(and__4221__auto__)){
return ((cljs.core.not(e.altKey)) && (((cljs.core.not(e.ctrlKey)) && (((cljs.core.not(e.metaKey)) && (((cljs.core.not(e.shiftKey)) && (((cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["_self",null,"_blank",null], null), null),el.getAttribute("target")))) && (((((cljs.core.not(el.hasAttribute("data-pushy-ignore"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(el.getAttribute("data-pushy-ignore"),"false")))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),e.button)))))))))))));
} else {
return and__4221__auto__;
}
})())){
var next_token = pushy.core.get_token_from_uri(uri);
if(cljs.core.truth_((function (){var G__11655 = (self__.match_fn.cljs$core$IFn$_invoke$arity$1 ? self__.match_fn.cljs$core$IFn$_invoke$arity$1(next_token) : self__.match_fn.call(null,next_token));
return (self__.identity_fn.cljs$core$IFn$_invoke$arity$1 ? self__.identity_fn.cljs$core$IFn$_invoke$arity$1(G__11655) : self__.identity_fn.call(null,G__11655));
})())){
var temp__5751__auto___11724 = el.title;
if(cljs.core.truth_(temp__5751__auto___11724)){
var title_11725 = temp__5751__auto___11724;
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$3(null,next_token,title_11725);
} else {
this$__$1.pushy$core$IHistory$set_token_BANG_$arity$2(null,next_token);
}

return e.preventDefault();
} else {
if(cljs.core.truth_((self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1 ? self__.prevent_default_when_no_match_QMARK_.cljs$core$IFn$_invoke$arity$1(next_token) : self__.prevent_default_when_no_match_QMARK_.call(null,next_token)))){
return e.preventDefault();
} else {
return null;
}
}
} else {
return null;
}
} else {
return null;
}
})));

return null;
}));

(pushy.core.t_pushy$core11634.prototype.pushy$core$IHistory$stop_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
var seq__11656_11726 = cljs.core.seq(cljs.core.deref(self__.event_keys));
var chunk__11657_11727 = null;
var count__11658_11728 = (0);
var i__11659_11729 = (0);
while(true){
if((i__11659_11729 < count__11658_11728)){
var key_11730 = chunk__11657_11727.cljs$core$IIndexed$_nth$arity$2(null,i__11659_11729);
goog.events.unlistenByKey(key_11730);


var G__11731 = seq__11656_11726;
var G__11732 = chunk__11657_11727;
var G__11733 = count__11658_11728;
var G__11734 = (i__11659_11729 + (1));
seq__11656_11726 = G__11731;
chunk__11657_11727 = G__11732;
count__11658_11728 = G__11733;
i__11659_11729 = G__11734;
continue;
} else {
var temp__5753__auto___11735 = cljs.core.seq(seq__11656_11726);
if(temp__5753__auto___11735){
var seq__11656_11736__$1 = temp__5753__auto___11735;
if(cljs.core.chunked_seq_QMARK_(seq__11656_11736__$1)){
var c__4649__auto___11738 = cljs.core.chunk_first(seq__11656_11736__$1);
var G__11739 = cljs.core.chunk_rest(seq__11656_11736__$1);
var G__11740 = c__4649__auto___11738;
var G__11741 = cljs.core.count(c__4649__auto___11738);
var G__11742 = (0);
seq__11656_11726 = G__11739;
chunk__11657_11727 = G__11740;
count__11658_11728 = G__11741;
i__11659_11729 = G__11742;
continue;
} else {
var key_11743 = cljs.core.first(seq__11656_11736__$1);
goog.events.unlistenByKey(key_11743);


var G__11744 = cljs.core.next(seq__11656_11736__$1);
var G__11745 = null;
var G__11746 = (0);
var G__11747 = (0);
seq__11656_11726 = G__11744;
chunk__11657_11727 = G__11745;
count__11658_11728 = G__11746;
i__11659_11729 = G__11747;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(self__.event_keys,null);
}));

(pushy.core.t_pushy$core11634.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"event-keys","event-keys",804564896,null),new cljs.core.Symbol(null,"identity-fn","identity-fn",756348900,null),new cljs.core.Symbol(null,"prevent-default-when-no-match?","prevent-default-when-no-match?",1281907909,null),new cljs.core.Symbol(null,"dispatch-fn","dispatch-fn",-1401088155,null),new cljs.core.Symbol(null,"history","history",1393136307,null),new cljs.core.Symbol(null,"map__11628","map__11628",871923735,null),new cljs.core.Symbol(null,"processable-url?","processable-url?",-789027433,null),new cljs.core.Symbol(null,"p__11627","p__11627",1088544249,null),new cljs.core.Symbol(null,"match-fn","match-fn",-795226853,null),new cljs.core.Symbol(null,"meta11635","meta11635",336261612,null)], null);
}));

(pushy.core.t_pushy$core11634.cljs$lang$type = true);

(pushy.core.t_pushy$core11634.cljs$lang$ctorStr = "pushy.core/t_pushy$core11634");

(pushy.core.t_pushy$core11634.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"pushy.core/t_pushy$core11634");
}));

/**
 * Positional factory function for pushy.core/t_pushy$core11634.
 */
pushy.core.__GT_t_pushy$core11634 = (function pushy$core$__GT_t_pushy$core11634(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,history__$1,map__11628__$2,processable_url_QMARK___$1,p__11627__$1,match_fn__$1,meta11635){
return (new pushy.core.t_pushy$core11634(event_keys__$1,identity_fn__$1,prevent_default_when_no_match_QMARK___$1,dispatch_fn__$1,history__$1,map__11628__$2,processable_url_QMARK___$1,p__11627__$1,match_fn__$1,meta11635));
});

}

return (new pushy.core.t_pushy$core11634(event_keys,identity_fn,prevent_default_when_no_match_QMARK_,dispatch_fn,history,map__11628__$1,processable_url_QMARK_,p__11627,match_fn,cljs.core.PersistentArrayMap.EMPTY));
}));

(pushy.core.pushy.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(pushy.core.pushy.cljs$lang$applyTo = (function (seq11617){
var G__11618 = cljs.core.first(seq11617);
var seq11617__$1 = cljs.core.next(seq11617);
var G__11619 = cljs.core.first(seq11617__$1);
var seq11617__$2 = cljs.core.next(seq11617__$1);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__11618,G__11619,seq11617__$2);
}));

/**
 * Returns whether Html5History is supported
 */
pushy.core.supported_QMARK_ = (function pushy$core$supported_QMARK_(var_args){
var G__11683 = arguments.length;
switch (G__11683) {
case 0:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1(window);
}));

(pushy.core.supported_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (window){
return goog.history.Html5History.isSupported(window);
}));

(pushy.core.supported_QMARK_.cljs$lang$maxFixedArity = 1);

pushy.core.push_state_BANG_ = (function pushy$core$push_state_BANG_(var_args){
var G__11686 = arguments.length;
switch (G__11686) {
case 2:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (dispatch_fn,match_fn){
return pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3(dispatch_fn,match_fn,cljs.core.identity);
}));

(pushy.core.push_state_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (dispatch_fn,match_fn,identity_fn){
var h = pushy.core.pushy.cljs$core$IFn$_invoke$arity$variadic(dispatch_fn,match_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"identity-fn","identity-fn",-884182627),identity_fn], 0));
h.pushy$core$IHistory$start_BANG_$arity$1(null);

return h;
}));

(pushy.core.push_state_BANG_.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=pushy.core.js.map
