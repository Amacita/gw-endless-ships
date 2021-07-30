goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_30823 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_30823(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_30825 = (function (this$){
var x__4521__auto__ = (((this$ == null))?null:this$);
var m__4522__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4522__auto__.call(null,this$));
} else {
var m__4519__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4519__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_30825(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__29520 = coll;
var G__29521 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__29520,G__29521) : shadow.dom.lazy_native_coll_seq.call(null,G__29520,G__29521));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4223__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__29565 = arguments.length;
switch (G__29565) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__29576 = arguments.length;
switch (G__29576) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__29585 = arguments.length;
switch (G__29585) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__29596 = arguments.length;
switch (G__29596) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__29605 = arguments.length;
switch (G__29605) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__29620 = arguments.length;
switch (G__29620) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e29626){if((e29626 instanceof Object)){
var e = e29626;
return console.log("didnt support attachEvent",el,e);
} else {
throw e29626;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4223__auto__ = (!((typeof document !== 'undefined')));
if(or__4223__auto__){
return or__4223__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__29634 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__29635 = null;
var count__29636 = (0);
var i__29637 = (0);
while(true){
if((i__29637 < count__29636)){
var el = chunk__29635.cljs$core$IIndexed$_nth$arity$2(null,i__29637);
var handler_30835__$1 = ((function (seq__29634,chunk__29635,count__29636,i__29637,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29634,chunk__29635,count__29636,i__29637,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30835__$1);


var G__30836 = seq__29634;
var G__30837 = chunk__29635;
var G__30838 = count__29636;
var G__30839 = (i__29637 + (1));
seq__29634 = G__30836;
chunk__29635 = G__30837;
count__29636 = G__30838;
i__29637 = G__30839;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29634);
if(temp__5753__auto__){
var seq__29634__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29634__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29634__$1);
var G__30840 = cljs.core.chunk_rest(seq__29634__$1);
var G__30841 = c__4649__auto__;
var G__30842 = cljs.core.count(c__4649__auto__);
var G__30843 = (0);
seq__29634 = G__30840;
chunk__29635 = G__30841;
count__29636 = G__30842;
i__29637 = G__30843;
continue;
} else {
var el = cljs.core.first(seq__29634__$1);
var handler_30844__$1 = ((function (seq__29634,chunk__29635,count__29636,i__29637,el,seq__29634__$1,temp__5753__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__29634,chunk__29635,count__29636,i__29637,el,seq__29634__$1,temp__5753__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_30844__$1);


var G__30845 = cljs.core.next(seq__29634__$1);
var G__30846 = null;
var G__30847 = (0);
var G__30848 = (0);
seq__29634 = G__30845;
chunk__29635 = G__30846;
count__29636 = G__30847;
i__29637 = G__30848;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__29663 = arguments.length;
switch (G__29663) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__29673 = cljs.core.seq(events);
var chunk__29674 = null;
var count__29675 = (0);
var i__29676 = (0);
while(true){
if((i__29676 < count__29675)){
var vec__29696 = chunk__29674.cljs$core$IIndexed$_nth$arity$2(null,i__29676);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29696,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29696,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30853 = seq__29673;
var G__30854 = chunk__29674;
var G__30855 = count__29675;
var G__30856 = (i__29676 + (1));
seq__29673 = G__30853;
chunk__29674 = G__30854;
count__29675 = G__30855;
i__29676 = G__30856;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29673);
if(temp__5753__auto__){
var seq__29673__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29673__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29673__$1);
var G__30857 = cljs.core.chunk_rest(seq__29673__$1);
var G__30858 = c__4649__auto__;
var G__30859 = cljs.core.count(c__4649__auto__);
var G__30860 = (0);
seq__29673 = G__30857;
chunk__29674 = G__30858;
count__29675 = G__30859;
i__29676 = G__30860;
continue;
} else {
var vec__29701 = cljs.core.first(seq__29673__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29701,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29701,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__30861 = cljs.core.next(seq__29673__$1);
var G__30862 = null;
var G__30863 = (0);
var G__30864 = (0);
seq__29673 = G__30861;
chunk__29674 = G__30862;
count__29675 = G__30863;
i__29676 = G__30864;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__29714 = cljs.core.seq(styles);
var chunk__29715 = null;
var count__29716 = (0);
var i__29717 = (0);
while(true){
if((i__29717 < count__29716)){
var vec__29740 = chunk__29715.cljs$core$IIndexed$_nth$arity$2(null,i__29717);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29740,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29740,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30865 = seq__29714;
var G__30866 = chunk__29715;
var G__30867 = count__29716;
var G__30868 = (i__29717 + (1));
seq__29714 = G__30865;
chunk__29715 = G__30866;
count__29716 = G__30867;
i__29717 = G__30868;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__29714);
if(temp__5753__auto__){
var seq__29714__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__29714__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__29714__$1);
var G__30872 = cljs.core.chunk_rest(seq__29714__$1);
var G__30873 = c__4649__auto__;
var G__30874 = cljs.core.count(c__4649__auto__);
var G__30875 = (0);
seq__29714 = G__30872;
chunk__29715 = G__30873;
count__29716 = G__30874;
i__29717 = G__30875;
continue;
} else {
var vec__29746 = cljs.core.first(seq__29714__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29746,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29746,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__30883 = cljs.core.next(seq__29714__$1);
var G__30884 = null;
var G__30885 = (0);
var G__30886 = (0);
seq__29714 = G__30883;
chunk__29715 = G__30884;
count__29716 = G__30885;
i__29717 = G__30886;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__29762_30887 = key;
var G__29762_30888__$1 = (((G__29762_30887 instanceof cljs.core.Keyword))?G__29762_30887.fqn:null);
switch (G__29762_30888__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_30893 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4223__auto__ = goog.string.startsWith(ks_30893,"data-");
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return goog.string.startsWith(ks_30893,"aria-");
}
})())){
el.setAttribute(ks_30893,value);
} else {
(el[ks_30893] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__29818){
var map__29819 = p__29818;
var map__29819__$1 = cljs.core.__destructure_map(map__29819);
var props = map__29819__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29819__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__29823 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29823,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__29827 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__29827,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__29827;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__29831 = arguments.length;
switch (G__29831) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5753__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5753__auto__)){
var n = temp__5753__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__29842){
var vec__29849 = p__29842;
var seq__29850 = cljs.core.seq(vec__29849);
var first__29851 = cljs.core.first(seq__29850);
var seq__29850__$1 = cljs.core.next(seq__29850);
var nn = first__29851;
var first__29851__$1 = cljs.core.first(seq__29850__$1);
var seq__29850__$2 = cljs.core.next(seq__29850__$1);
var np = first__29851__$1;
var nc = seq__29850__$2;
var node = vec__29849;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29856 = nn;
var G__29857 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29856,G__29857) : create_fn.call(null,G__29856,G__29857));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__29868 = nn;
var G__29869 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__29868,G__29869) : create_fn.call(null,G__29868,G__29869));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__29877 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29877,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29877,(1),null);
var seq__29888_30922 = cljs.core.seq(node_children);
var chunk__29889_30923 = null;
var count__29890_30924 = (0);
var i__29891_30925 = (0);
while(true){
if((i__29891_30925 < count__29890_30924)){
var child_struct_30926 = chunk__29889_30923.cljs$core$IIndexed$_nth$arity$2(null,i__29891_30925);
var children_30927 = shadow.dom.dom_node(child_struct_30926);
if(cljs.core.seq_QMARK_(children_30927)){
var seq__29980_30928 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30927));
var chunk__29982_30929 = null;
var count__29983_30930 = (0);
var i__29984_30931 = (0);
while(true){
if((i__29984_30931 < count__29983_30930)){
var child_30934 = chunk__29982_30929.cljs$core$IIndexed$_nth$arity$2(null,i__29984_30931);
if(cljs.core.truth_(child_30934)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30934);


var G__30935 = seq__29980_30928;
var G__30936 = chunk__29982_30929;
var G__30937 = count__29983_30930;
var G__30938 = (i__29984_30931 + (1));
seq__29980_30928 = G__30935;
chunk__29982_30929 = G__30936;
count__29983_30930 = G__30937;
i__29984_30931 = G__30938;
continue;
} else {
var G__30939 = seq__29980_30928;
var G__30940 = chunk__29982_30929;
var G__30941 = count__29983_30930;
var G__30942 = (i__29984_30931 + (1));
seq__29980_30928 = G__30939;
chunk__29982_30929 = G__30940;
count__29983_30930 = G__30941;
i__29984_30931 = G__30942;
continue;
}
} else {
var temp__5753__auto___30943 = cljs.core.seq(seq__29980_30928);
if(temp__5753__auto___30943){
var seq__29980_30944__$1 = temp__5753__auto___30943;
if(cljs.core.chunked_seq_QMARK_(seq__29980_30944__$1)){
var c__4649__auto___30946 = cljs.core.chunk_first(seq__29980_30944__$1);
var G__30947 = cljs.core.chunk_rest(seq__29980_30944__$1);
var G__30948 = c__4649__auto___30946;
var G__30949 = cljs.core.count(c__4649__auto___30946);
var G__30950 = (0);
seq__29980_30928 = G__30947;
chunk__29982_30929 = G__30948;
count__29983_30930 = G__30949;
i__29984_30931 = G__30950;
continue;
} else {
var child_30951 = cljs.core.first(seq__29980_30944__$1);
if(cljs.core.truth_(child_30951)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30951);


var G__30952 = cljs.core.next(seq__29980_30944__$1);
var G__30953 = null;
var G__30954 = (0);
var G__30955 = (0);
seq__29980_30928 = G__30952;
chunk__29982_30929 = G__30953;
count__29983_30930 = G__30954;
i__29984_30931 = G__30955;
continue;
} else {
var G__30957 = cljs.core.next(seq__29980_30944__$1);
var G__30958 = null;
var G__30959 = (0);
var G__30960 = (0);
seq__29980_30928 = G__30957;
chunk__29982_30929 = G__30958;
count__29983_30930 = G__30959;
i__29984_30931 = G__30960;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30927);
}


var G__30961 = seq__29888_30922;
var G__30962 = chunk__29889_30923;
var G__30963 = count__29890_30924;
var G__30964 = (i__29891_30925 + (1));
seq__29888_30922 = G__30961;
chunk__29889_30923 = G__30962;
count__29890_30924 = G__30963;
i__29891_30925 = G__30964;
continue;
} else {
var temp__5753__auto___30965 = cljs.core.seq(seq__29888_30922);
if(temp__5753__auto___30965){
var seq__29888_30966__$1 = temp__5753__auto___30965;
if(cljs.core.chunked_seq_QMARK_(seq__29888_30966__$1)){
var c__4649__auto___30967 = cljs.core.chunk_first(seq__29888_30966__$1);
var G__30968 = cljs.core.chunk_rest(seq__29888_30966__$1);
var G__30969 = c__4649__auto___30967;
var G__30970 = cljs.core.count(c__4649__auto___30967);
var G__30971 = (0);
seq__29888_30922 = G__30968;
chunk__29889_30923 = G__30969;
count__29890_30924 = G__30970;
i__29891_30925 = G__30971;
continue;
} else {
var child_struct_30972 = cljs.core.first(seq__29888_30966__$1);
var children_30973 = shadow.dom.dom_node(child_struct_30972);
if(cljs.core.seq_QMARK_(children_30973)){
var seq__30015_30974 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_30973));
var chunk__30017_30975 = null;
var count__30018_30976 = (0);
var i__30019_30977 = (0);
while(true){
if((i__30019_30977 < count__30018_30976)){
var child_30978 = chunk__30017_30975.cljs$core$IIndexed$_nth$arity$2(null,i__30019_30977);
if(cljs.core.truth_(child_30978)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30978);


var G__30979 = seq__30015_30974;
var G__30980 = chunk__30017_30975;
var G__30981 = count__30018_30976;
var G__30982 = (i__30019_30977 + (1));
seq__30015_30974 = G__30979;
chunk__30017_30975 = G__30980;
count__30018_30976 = G__30981;
i__30019_30977 = G__30982;
continue;
} else {
var G__30983 = seq__30015_30974;
var G__30984 = chunk__30017_30975;
var G__30985 = count__30018_30976;
var G__30986 = (i__30019_30977 + (1));
seq__30015_30974 = G__30983;
chunk__30017_30975 = G__30984;
count__30018_30976 = G__30985;
i__30019_30977 = G__30986;
continue;
}
} else {
var temp__5753__auto___30987__$1 = cljs.core.seq(seq__30015_30974);
if(temp__5753__auto___30987__$1){
var seq__30015_30988__$1 = temp__5753__auto___30987__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30015_30988__$1)){
var c__4649__auto___30989 = cljs.core.chunk_first(seq__30015_30988__$1);
var G__30990 = cljs.core.chunk_rest(seq__30015_30988__$1);
var G__30991 = c__4649__auto___30989;
var G__30992 = cljs.core.count(c__4649__auto___30989);
var G__30993 = (0);
seq__30015_30974 = G__30990;
chunk__30017_30975 = G__30991;
count__30018_30976 = G__30992;
i__30019_30977 = G__30993;
continue;
} else {
var child_30994 = cljs.core.first(seq__30015_30988__$1);
if(cljs.core.truth_(child_30994)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_30994);


var G__30995 = cljs.core.next(seq__30015_30988__$1);
var G__30996 = null;
var G__30997 = (0);
var G__30998 = (0);
seq__30015_30974 = G__30995;
chunk__30017_30975 = G__30996;
count__30018_30976 = G__30997;
i__30019_30977 = G__30998;
continue;
} else {
var G__30999 = cljs.core.next(seq__30015_30988__$1);
var G__31000 = null;
var G__31001 = (0);
var G__31002 = (0);
seq__30015_30974 = G__30999;
chunk__30017_30975 = G__31000;
count__30018_30976 = G__31001;
i__30019_30977 = G__31002;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_30973);
}


var G__31003 = cljs.core.next(seq__29888_30966__$1);
var G__31004 = null;
var G__31005 = (0);
var G__31006 = (0);
seq__29888_30922 = G__31003;
chunk__29889_30923 = G__31004;
count__29890_30924 = G__31005;
i__29891_30925 = G__31006;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__30051 = cljs.core.seq(node);
var chunk__30052 = null;
var count__30053 = (0);
var i__30054 = (0);
while(true){
if((i__30054 < count__30053)){
var n = chunk__30052.cljs$core$IIndexed$_nth$arity$2(null,i__30054);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31007 = seq__30051;
var G__31008 = chunk__30052;
var G__31009 = count__30053;
var G__31010 = (i__30054 + (1));
seq__30051 = G__31007;
chunk__30052 = G__31008;
count__30053 = G__31009;
i__30054 = G__31010;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30051);
if(temp__5753__auto__){
var seq__30051__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30051__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__30051__$1);
var G__31011 = cljs.core.chunk_rest(seq__30051__$1);
var G__31012 = c__4649__auto__;
var G__31013 = cljs.core.count(c__4649__auto__);
var G__31014 = (0);
seq__30051 = G__31011;
chunk__30052 = G__31012;
count__30053 = G__31013;
i__30054 = G__31014;
continue;
} else {
var n = cljs.core.first(seq__30051__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__31015 = cljs.core.next(seq__30051__$1);
var G__31016 = null;
var G__31017 = (0);
var G__31018 = (0);
seq__30051 = G__31015;
chunk__30052 = G__31016;
count__30053 = G__31017;
i__30054 = G__31018;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__30059 = arguments.length;
switch (G__30059) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__30065 = arguments.length;
switch (G__30065) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__30095 = arguments.length;
switch (G__30095) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4223__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4835__auto__ = [];
var len__4829__auto___31025 = arguments.length;
var i__4830__auto___31026 = (0);
while(true){
if((i__4830__auto___31026 < len__4829__auto___31025)){
args__4835__auto__.push((arguments[i__4830__auto___31026]));

var G__31027 = (i__4830__auto___31026 + (1));
i__4830__auto___31026 = G__31027;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__30120_31028 = cljs.core.seq(nodes);
var chunk__30121_31029 = null;
var count__30122_31030 = (0);
var i__30123_31031 = (0);
while(true){
if((i__30123_31031 < count__30122_31030)){
var node_31032 = chunk__30121_31029.cljs$core$IIndexed$_nth$arity$2(null,i__30123_31031);
fragment.appendChild(shadow.dom._to_dom(node_31032));


var G__31033 = seq__30120_31028;
var G__31034 = chunk__30121_31029;
var G__31035 = count__30122_31030;
var G__31036 = (i__30123_31031 + (1));
seq__30120_31028 = G__31033;
chunk__30121_31029 = G__31034;
count__30122_31030 = G__31035;
i__30123_31031 = G__31036;
continue;
} else {
var temp__5753__auto___31037 = cljs.core.seq(seq__30120_31028);
if(temp__5753__auto___31037){
var seq__30120_31038__$1 = temp__5753__auto___31037;
if(cljs.core.chunked_seq_QMARK_(seq__30120_31038__$1)){
var c__4649__auto___31039 = cljs.core.chunk_first(seq__30120_31038__$1);
var G__31040 = cljs.core.chunk_rest(seq__30120_31038__$1);
var G__31041 = c__4649__auto___31039;
var G__31042 = cljs.core.count(c__4649__auto___31039);
var G__31043 = (0);
seq__30120_31028 = G__31040;
chunk__30121_31029 = G__31041;
count__30122_31030 = G__31042;
i__30123_31031 = G__31043;
continue;
} else {
var node_31044 = cljs.core.first(seq__30120_31038__$1);
fragment.appendChild(shadow.dom._to_dom(node_31044));


var G__31045 = cljs.core.next(seq__30120_31038__$1);
var G__31046 = null;
var G__31047 = (0);
var G__31048 = (0);
seq__30120_31028 = G__31045;
chunk__30121_31029 = G__31046;
count__30122_31030 = G__31047;
i__30123_31031 = G__31048;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq30117){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq30117));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__30146_31049 = cljs.core.seq(scripts);
var chunk__30147_31050 = null;
var count__30148_31051 = (0);
var i__30149_31052 = (0);
while(true){
if((i__30149_31052 < count__30148_31051)){
var vec__30160_31053 = chunk__30147_31050.cljs$core$IIndexed$_nth$arity$2(null,i__30149_31052);
var script_tag_31054 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30160_31053,(0),null);
var script_body_31055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30160_31053,(1),null);
eval(script_body_31055);


var G__31058 = seq__30146_31049;
var G__31059 = chunk__30147_31050;
var G__31060 = count__30148_31051;
var G__31061 = (i__30149_31052 + (1));
seq__30146_31049 = G__31058;
chunk__30147_31050 = G__31059;
count__30148_31051 = G__31060;
i__30149_31052 = G__31061;
continue;
} else {
var temp__5753__auto___31062 = cljs.core.seq(seq__30146_31049);
if(temp__5753__auto___31062){
var seq__30146_31063__$1 = temp__5753__auto___31062;
if(cljs.core.chunked_seq_QMARK_(seq__30146_31063__$1)){
var c__4649__auto___31064 = cljs.core.chunk_first(seq__30146_31063__$1);
var G__31065 = cljs.core.chunk_rest(seq__30146_31063__$1);
var G__31066 = c__4649__auto___31064;
var G__31067 = cljs.core.count(c__4649__auto___31064);
var G__31068 = (0);
seq__30146_31049 = G__31065;
chunk__30147_31050 = G__31066;
count__30148_31051 = G__31067;
i__30149_31052 = G__31068;
continue;
} else {
var vec__30167_31069 = cljs.core.first(seq__30146_31063__$1);
var script_tag_31070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30167_31069,(0),null);
var script_body_31071 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30167_31069,(1),null);
eval(script_body_31071);


var G__31073 = cljs.core.next(seq__30146_31063__$1);
var G__31074 = null;
var G__31075 = (0);
var G__31076 = (0);
seq__30146_31049 = G__31073;
chunk__30147_31050 = G__31074;
count__30148_31051 = G__31075;
i__30149_31052 = G__31076;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__30172){
var vec__30174 = p__30172;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30174,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30174,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__30207 = arguments.length;
switch (G__30207) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__30240 = cljs.core.seq(style_keys);
var chunk__30241 = null;
var count__30242 = (0);
var i__30243 = (0);
while(true){
if((i__30243 < count__30242)){
var it = chunk__30241.cljs$core$IIndexed$_nth$arity$2(null,i__30243);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31091 = seq__30240;
var G__31092 = chunk__30241;
var G__31093 = count__30242;
var G__31094 = (i__30243 + (1));
seq__30240 = G__31091;
chunk__30241 = G__31092;
count__30242 = G__31093;
i__30243 = G__31094;
continue;
} else {
var temp__5753__auto__ = cljs.core.seq(seq__30240);
if(temp__5753__auto__){
var seq__30240__$1 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__30240__$1)){
var c__4649__auto__ = cljs.core.chunk_first(seq__30240__$1);
var G__31095 = cljs.core.chunk_rest(seq__30240__$1);
var G__31096 = c__4649__auto__;
var G__31097 = cljs.core.count(c__4649__auto__);
var G__31098 = (0);
seq__30240 = G__31095;
chunk__30241 = G__31096;
count__30242 = G__31097;
i__30243 = G__31098;
continue;
} else {
var it = cljs.core.first(seq__30240__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__31100 = cljs.core.next(seq__30240__$1);
var G__31101 = null;
var G__31102 = (0);
var G__31103 = (0);
seq__30240 = G__31100;
chunk__30241 = G__31101;
count__30242 = G__31102;
i__30243 = G__31103;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k30258,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__30273 = k30258;
var G__30273__$1 = (((G__30273 instanceof cljs.core.Keyword))?G__30273.fqn:null);
switch (G__30273__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30258,else__4475__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__30276){
var vec__30278 = p__30276;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30278,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30278,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30257){
var self__ = this;
var G__30257__$1 = this;
return (new cljs.core.RecordIter((0),G__30257__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30259,other30260){
var self__ = this;
var this30259__$1 = this;
return (((!((other30260 == null)))) && ((((this30259__$1.constructor === other30260.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30259__$1.x,other30260.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30259__$1.y,other30260.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30259__$1.__extmap,other30260.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k30258){
var self__ = this;
var this__4479__auto____$1 = this;
var G__30307 = k30258;
var G__30307__$1 = (((G__30307 instanceof cljs.core.Keyword))?G__30307.fqn:null);
switch (G__30307__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30258);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__30257){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__30311 = cljs.core.keyword_identical_QMARK_;
var expr__30312 = k__4481__auto__;
if(cljs.core.truth_((pred__30311.cljs$core$IFn$_invoke$arity$2 ? pred__30311.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__30312) : pred__30311.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__30312)))){
return (new shadow.dom.Coordinate(G__30257,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30311.cljs$core$IFn$_invoke$arity$2 ? pred__30311.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__30312) : pred__30311.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__30312)))){
return (new shadow.dom.Coordinate(self__.x,G__30257,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__30257),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__30257){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__30257,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__30266){
var extmap__4512__auto__ = (function (){var G__30341 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30266,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__30266)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30341);
} else {
return G__30341;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__30266),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__30266),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4472__auto__,k__4473__auto__){
var self__ = this;
var this__4472__auto____$1 = this;
return this__4472__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4473__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4474__auto__,k30367,else__4475__auto__){
var self__ = this;
var this__4474__auto____$1 = this;
var G__30385 = k30367;
var G__30385__$1 = (((G__30385 instanceof cljs.core.Keyword))?G__30385.fqn:null);
switch (G__30385__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k30367,else__4475__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4492__auto__,f__4493__auto__,init__4494__auto__){
var self__ = this;
var this__4492__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4495__auto__,p__30389){
var vec__30390 = p__30389;
var k__4496__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30390,(0),null);
var v__4497__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30390,(1),null);
return (f__4493__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4493__auto__.cljs$core$IFn$_invoke$arity$3(ret__4495__auto__,k__4496__auto__,v__4497__auto__) : f__4493__auto__.call(null,ret__4495__auto__,k__4496__auto__,v__4497__auto__));
}),init__4494__auto__,this__4492__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4487__auto__,writer__4488__auto__,opts__4489__auto__){
var self__ = this;
var this__4487__auto____$1 = this;
var pr_pair__4490__auto__ = (function (keyval__4491__auto__){
return cljs.core.pr_sequential_writer(writer__4488__auto__,cljs.core.pr_writer,""," ","",opts__4489__auto__,keyval__4491__auto__);
});
return cljs.core.pr_sequential_writer(writer__4488__auto__,pr_pair__4490__auto__,"#shadow.dom.Size{",", ","}",opts__4489__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__30366){
var self__ = this;
var G__30366__$1 = this;
return (new cljs.core.RecordIter((0),G__30366__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4470__auto__){
var self__ = this;
var this__4470__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4467__auto__){
var self__ = this;
var this__4467__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4476__auto__){
var self__ = this;
var this__4476__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4468__auto__){
var self__ = this;
var this__4468__auto____$1 = this;
var h__4330__auto__ = self__.__hash;
if((!((h__4330__auto__ == null)))){
return h__4330__auto__;
} else {
var h__4330__auto____$1 = (function (coll__4469__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4469__auto__));
})(this__4468__auto____$1);
(self__.__hash = h__4330__auto____$1);

return h__4330__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this30368,other30369){
var self__ = this;
var this30368__$1 = this;
return (((!((other30369 == null)))) && ((((this30368__$1.constructor === other30369.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30368__$1.w,other30369.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30368__$1.h,other30369.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this30368__$1.__extmap,other30369.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4482__auto__,k__4483__auto__){
var self__ = this;
var this__4482__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4483__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4482__auto____$1),self__.__meta),k__4483__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4483__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__4479__auto__,k30367){
var self__ = this;
var this__4479__auto____$1 = this;
var G__30449 = k30367;
var G__30449__$1 = (((G__30449 instanceof cljs.core.Keyword))?G__30449.fqn:null);
switch (G__30449__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k30367);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4480__auto__,k__4481__auto__,G__30366){
var self__ = this;
var this__4480__auto____$1 = this;
var pred__30457 = cljs.core.keyword_identical_QMARK_;
var expr__30458 = k__4481__auto__;
if(cljs.core.truth_((pred__30457.cljs$core$IFn$_invoke$arity$2 ? pred__30457.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__30458) : pred__30457.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__30458)))){
return (new shadow.dom.Size(G__30366,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__30457.cljs$core$IFn$_invoke$arity$2 ? pred__30457.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__30458) : pred__30457.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__30458)))){
return (new shadow.dom.Size(self__.w,G__30366,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4481__auto__,G__30366),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4485__auto__){
var self__ = this;
var this__4485__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4471__auto__,G__30366){
var self__ = this;
var this__4471__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__30366,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4477__auto__,entry__4478__auto__){
var self__ = this;
var this__4477__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4478__auto__)){
return this__4477__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4478__auto__,(0)),cljs.core._nth(entry__4478__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4477__auto____$1,entry__4478__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4516__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4516__auto__,writer__4517__auto__){
return cljs.core._write(writer__4517__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__30373){
var extmap__4512__auto__ = (function (){var G__30492 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__30373,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__30373)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__30492);
} else {
return G__30492;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__30373),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__30373),null,cljs.core.not_empty(extmap__4512__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4703__auto__ = opts;
var l__4704__auto__ = a__4703__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4704__auto__)){
var G__31130 = (i + (1));
var G__31131 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__31130;
ret = G__31131;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__30566){
var vec__30567 = p__30566;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30567,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30567,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__30583 = arguments.length;
switch (G__30583) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5751__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5751__auto__)){
var child = temp__5751__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__31138 = ps;
var G__31139 = (i + (1));
el__$1 = G__31138;
i = G__31139;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__30653 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30653,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30653,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30653,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__30657_31140 = cljs.core.seq(props);
var chunk__30658_31141 = null;
var count__30659_31142 = (0);
var i__30660_31143 = (0);
while(true){
if((i__30660_31143 < count__30659_31142)){
var vec__30681_31144 = chunk__30658_31141.cljs$core$IIndexed$_nth$arity$2(null,i__30660_31143);
var k_31145 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30681_31144,(0),null);
var v_31146 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30681_31144,(1),null);
el.setAttributeNS((function (){var temp__5753__auto__ = cljs.core.namespace(k_31145);
if(cljs.core.truth_(temp__5753__auto__)){
var ns = temp__5753__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31145),v_31146);


var G__31147 = seq__30657_31140;
var G__31148 = chunk__30658_31141;
var G__31149 = count__30659_31142;
var G__31150 = (i__30660_31143 + (1));
seq__30657_31140 = G__31147;
chunk__30658_31141 = G__31148;
count__30659_31142 = G__31149;
i__30660_31143 = G__31150;
continue;
} else {
var temp__5753__auto___31151 = cljs.core.seq(seq__30657_31140);
if(temp__5753__auto___31151){
var seq__30657_31152__$1 = temp__5753__auto___31151;
if(cljs.core.chunked_seq_QMARK_(seq__30657_31152__$1)){
var c__4649__auto___31153 = cljs.core.chunk_first(seq__30657_31152__$1);
var G__31154 = cljs.core.chunk_rest(seq__30657_31152__$1);
var G__31155 = c__4649__auto___31153;
var G__31156 = cljs.core.count(c__4649__auto___31153);
var G__31157 = (0);
seq__30657_31140 = G__31154;
chunk__30658_31141 = G__31155;
count__30659_31142 = G__31156;
i__30660_31143 = G__31157;
continue;
} else {
var vec__30694_31158 = cljs.core.first(seq__30657_31152__$1);
var k_31159 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30694_31158,(0),null);
var v_31160 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30694_31158,(1),null);
el.setAttributeNS((function (){var temp__5753__auto____$1 = cljs.core.namespace(k_31159);
if(cljs.core.truth_(temp__5753__auto____$1)){
var ns = temp__5753__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_31159),v_31160);


var G__31161 = cljs.core.next(seq__30657_31152__$1);
var G__31162 = null;
var G__31163 = (0);
var G__31164 = (0);
seq__30657_31140 = G__31161;
chunk__30658_31141 = G__31162;
count__30659_31142 = G__31163;
i__30660_31143 = G__31164;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__30712 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30712,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__30712,(1),null);
var seq__30716_31167 = cljs.core.seq(node_children);
var chunk__30718_31168 = null;
var count__30719_31169 = (0);
var i__30720_31170 = (0);
while(true){
if((i__30720_31170 < count__30719_31169)){
var child_struct_31171 = chunk__30718_31168.cljs$core$IIndexed$_nth$arity$2(null,i__30720_31170);
if((!((child_struct_31171 == null)))){
if(typeof child_struct_31171 === 'string'){
var text_31176 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31176),child_struct_31171].join(''));
} else {
var children_31177 = shadow.dom.svg_node(child_struct_31171);
if(cljs.core.seq_QMARK_(children_31177)){
var seq__30777_31178 = cljs.core.seq(children_31177);
var chunk__30779_31179 = null;
var count__30780_31180 = (0);
var i__30781_31181 = (0);
while(true){
if((i__30781_31181 < count__30780_31180)){
var child_31182 = chunk__30779_31179.cljs$core$IIndexed$_nth$arity$2(null,i__30781_31181);
if(cljs.core.truth_(child_31182)){
node.appendChild(child_31182);


var G__31183 = seq__30777_31178;
var G__31184 = chunk__30779_31179;
var G__31185 = count__30780_31180;
var G__31186 = (i__30781_31181 + (1));
seq__30777_31178 = G__31183;
chunk__30779_31179 = G__31184;
count__30780_31180 = G__31185;
i__30781_31181 = G__31186;
continue;
} else {
var G__31187 = seq__30777_31178;
var G__31188 = chunk__30779_31179;
var G__31189 = count__30780_31180;
var G__31190 = (i__30781_31181 + (1));
seq__30777_31178 = G__31187;
chunk__30779_31179 = G__31188;
count__30780_31180 = G__31189;
i__30781_31181 = G__31190;
continue;
}
} else {
var temp__5753__auto___31191 = cljs.core.seq(seq__30777_31178);
if(temp__5753__auto___31191){
var seq__30777_31192__$1 = temp__5753__auto___31191;
if(cljs.core.chunked_seq_QMARK_(seq__30777_31192__$1)){
var c__4649__auto___31193 = cljs.core.chunk_first(seq__30777_31192__$1);
var G__31194 = cljs.core.chunk_rest(seq__30777_31192__$1);
var G__31195 = c__4649__auto___31193;
var G__31196 = cljs.core.count(c__4649__auto___31193);
var G__31197 = (0);
seq__30777_31178 = G__31194;
chunk__30779_31179 = G__31195;
count__30780_31180 = G__31196;
i__30781_31181 = G__31197;
continue;
} else {
var child_31199 = cljs.core.first(seq__30777_31192__$1);
if(cljs.core.truth_(child_31199)){
node.appendChild(child_31199);


var G__31200 = cljs.core.next(seq__30777_31192__$1);
var G__31201 = null;
var G__31202 = (0);
var G__31203 = (0);
seq__30777_31178 = G__31200;
chunk__30779_31179 = G__31201;
count__30780_31180 = G__31202;
i__30781_31181 = G__31203;
continue;
} else {
var G__31204 = cljs.core.next(seq__30777_31192__$1);
var G__31205 = null;
var G__31206 = (0);
var G__31207 = (0);
seq__30777_31178 = G__31204;
chunk__30779_31179 = G__31205;
count__30780_31180 = G__31206;
i__30781_31181 = G__31207;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31177);
}
}


var G__31208 = seq__30716_31167;
var G__31209 = chunk__30718_31168;
var G__31210 = count__30719_31169;
var G__31211 = (i__30720_31170 + (1));
seq__30716_31167 = G__31208;
chunk__30718_31168 = G__31209;
count__30719_31169 = G__31210;
i__30720_31170 = G__31211;
continue;
} else {
var G__31213 = seq__30716_31167;
var G__31214 = chunk__30718_31168;
var G__31215 = count__30719_31169;
var G__31216 = (i__30720_31170 + (1));
seq__30716_31167 = G__31213;
chunk__30718_31168 = G__31214;
count__30719_31169 = G__31215;
i__30720_31170 = G__31216;
continue;
}
} else {
var temp__5753__auto___31217 = cljs.core.seq(seq__30716_31167);
if(temp__5753__auto___31217){
var seq__30716_31218__$1 = temp__5753__auto___31217;
if(cljs.core.chunked_seq_QMARK_(seq__30716_31218__$1)){
var c__4649__auto___31219 = cljs.core.chunk_first(seq__30716_31218__$1);
var G__31220 = cljs.core.chunk_rest(seq__30716_31218__$1);
var G__31221 = c__4649__auto___31219;
var G__31222 = cljs.core.count(c__4649__auto___31219);
var G__31223 = (0);
seq__30716_31167 = G__31220;
chunk__30718_31168 = G__31221;
count__30719_31169 = G__31222;
i__30720_31170 = G__31223;
continue;
} else {
var child_struct_31224 = cljs.core.first(seq__30716_31218__$1);
if((!((child_struct_31224 == null)))){
if(typeof child_struct_31224 === 'string'){
var text_31225 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_31225),child_struct_31224].join(''));
} else {
var children_31226 = shadow.dom.svg_node(child_struct_31224);
if(cljs.core.seq_QMARK_(children_31226)){
var seq__30786_31227 = cljs.core.seq(children_31226);
var chunk__30788_31228 = null;
var count__30789_31229 = (0);
var i__30790_31230 = (0);
while(true){
if((i__30790_31230 < count__30789_31229)){
var child_31231 = chunk__30788_31228.cljs$core$IIndexed$_nth$arity$2(null,i__30790_31230);
if(cljs.core.truth_(child_31231)){
node.appendChild(child_31231);


var G__31232 = seq__30786_31227;
var G__31233 = chunk__30788_31228;
var G__31234 = count__30789_31229;
var G__31235 = (i__30790_31230 + (1));
seq__30786_31227 = G__31232;
chunk__30788_31228 = G__31233;
count__30789_31229 = G__31234;
i__30790_31230 = G__31235;
continue;
} else {
var G__31236 = seq__30786_31227;
var G__31237 = chunk__30788_31228;
var G__31238 = count__30789_31229;
var G__31239 = (i__30790_31230 + (1));
seq__30786_31227 = G__31236;
chunk__30788_31228 = G__31237;
count__30789_31229 = G__31238;
i__30790_31230 = G__31239;
continue;
}
} else {
var temp__5753__auto___31240__$1 = cljs.core.seq(seq__30786_31227);
if(temp__5753__auto___31240__$1){
var seq__30786_31241__$1 = temp__5753__auto___31240__$1;
if(cljs.core.chunked_seq_QMARK_(seq__30786_31241__$1)){
var c__4649__auto___31242 = cljs.core.chunk_first(seq__30786_31241__$1);
var G__31243 = cljs.core.chunk_rest(seq__30786_31241__$1);
var G__31244 = c__4649__auto___31242;
var G__31245 = cljs.core.count(c__4649__auto___31242);
var G__31246 = (0);
seq__30786_31227 = G__31243;
chunk__30788_31228 = G__31244;
count__30789_31229 = G__31245;
i__30790_31230 = G__31246;
continue;
} else {
var child_31247 = cljs.core.first(seq__30786_31241__$1);
if(cljs.core.truth_(child_31247)){
node.appendChild(child_31247);


var G__31250 = cljs.core.next(seq__30786_31241__$1);
var G__31251 = null;
var G__31252 = (0);
var G__31253 = (0);
seq__30786_31227 = G__31250;
chunk__30788_31228 = G__31251;
count__30789_31229 = G__31252;
i__30790_31230 = G__31253;
continue;
} else {
var G__31255 = cljs.core.next(seq__30786_31241__$1);
var G__31256 = null;
var G__31257 = (0);
var G__31258 = (0);
seq__30786_31227 = G__31255;
chunk__30788_31228 = G__31256;
count__30789_31229 = G__31257;
i__30790_31230 = G__31258;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_31226);
}
}


var G__31259 = cljs.core.next(seq__30716_31218__$1);
var G__31260 = null;
var G__31261 = (0);
var G__31262 = (0);
seq__30716_31167 = G__31259;
chunk__30718_31168 = G__31260;
count__30719_31169 = G__31261;
i__30720_31170 = G__31262;
continue;
} else {
var G__31263 = cljs.core.next(seq__30716_31218__$1);
var G__31264 = null;
var G__31265 = (0);
var G__31266 = (0);
seq__30716_31167 = G__31263;
chunk__30718_31168 = G__31264;
count__30719_31169 = G__31265;
i__30720_31170 = G__31266;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4835__auto__ = [];
var len__4829__auto___31267 = arguments.length;
var i__4830__auto___31268 = (0);
while(true){
if((i__4830__auto___31268 < len__4829__auto___31267)){
args__4835__auto__.push((arguments[i__4830__auto___31268]));

var G__31269 = (i__4830__auto___31268 + (1));
i__4830__auto___31268 = G__31269;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq30792){
var G__30793 = cljs.core.first(seq30792);
var seq30792__$1 = cljs.core.next(seq30792);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30793,seq30792__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__30803 = arguments.length;
switch (G__30803) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4221__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4221__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4221__auto__;
}
})())){
var c__26969__auto___31282 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_30811){
var state_val_30812 = (state_30811[(1)]);
if((state_val_30812 === (1))){
var state_30811__$1 = state_30811;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30811__$1,(2),once_or_cleanup);
} else {
if((state_val_30812 === (2))){
var inst_30808 = (state_30811[(2)]);
var inst_30809 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_30811__$1 = (function (){var statearr_30813 = state_30811;
(statearr_30813[(7)] = inst_30808);

return statearr_30813;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_30811__$1,inst_30809);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__26680__auto__ = null;
var shadow$dom$state_machine__26680__auto____0 = (function (){
var statearr_30814 = [null,null,null,null,null,null,null,null];
(statearr_30814[(0)] = shadow$dom$state_machine__26680__auto__);

(statearr_30814[(1)] = (1));

return statearr_30814;
});
var shadow$dom$state_machine__26680__auto____1 = (function (state_30811){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_30811);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e30815){var ex__26683__auto__ = e30815;
var statearr_30816_31292 = state_30811;
(statearr_30816_31292[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_30811[(4)]))){
var statearr_30817_31293 = state_30811;
(statearr_30817_31293[(1)] = cljs.core.first((state_30811[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31294 = state_30811;
state_30811 = G__31294;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
shadow$dom$state_machine__26680__auto__ = function(state_30811){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__26680__auto____0.call(this);
case 1:
return shadow$dom$state_machine__26680__auto____1.call(this,state_30811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__26680__auto____0;
shadow$dom$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__26680__auto____1;
return shadow$dom$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_30818 = f__26970__auto__();
(statearr_30818[(6)] = c__26969__auto___31282);

return statearr_30818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
