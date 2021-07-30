goog.provide('endless_ships.views.table');
endless_ships.views.table.table_headers = (function endless_ships$views$table$table_headers(entity_type,columns,ordering){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__4622__auto__ = (function endless_ships$views$table$table_headers_$_iter__27420(s__27421){
return (new cljs.core.LazySeq(null,(function (){
var s__27421__$1 = s__27421;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27421__$1);
if(temp__5753__auto__){
var s__27421__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27421__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27421__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27423 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27422 = (0);
while(true){
if((i__27422 < size__4621__auto__)){
var vec__27424 = cljs.core._nth(c__4620__auto__,i__27422);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27424,(0),null);
var map__27427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27424,(1),null);
var map__27427__$1 = cljs.core.__destructure_map(map__27427);
var orderable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27427__$1,new cljs.core.Keyword(null,"orderable?","orderable?",-590452154),true);
cljs.core.chunk_append(b__27423,(function (){var title = (cljs.core.truth_(orderable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.table-header","a.table-header",-453579852),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__27422,vec__27424,text,map__27427,map__27427__$1,orderable_QMARK_,c__4620__auto__,size__4621__auto__,b__27423,s__27421__$2,temp__5753__auto__){
return (function (){
var G__27429 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.events","toggle-ordering","endless-ships.events/toggle-ordering",26210934),entity_type,text], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27429) : re_frame.core.dispatch.call(null,G__27429));
});})(i__27422,vec__27424,text,map__27427,map__27427__$1,orderable_QMARK_,c__4620__auto__,size__4621__auto__,b__27423,s__27421__$2,temp__5753__auto__))
], null),text], null):text);
var icon = (cljs.core.truth_((function (){var and__4221__auto__ = orderable_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-name","column-name",551523580).cljs$core$IFn$_invoke$arity$1(ordering),text);
} else {
return and__4221__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(ordering),new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-sort-by-attributes","span.glyphicon.glyphicon-sort-by-attributes",1350494513)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-sort-by-attributes-alt","span.glyphicon.glyphicon-sort-by-attributes-alt",834182936)], null)):null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),title," ",icon], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),text], null));
})());

var G__27444 = (i__27422 + (1));
i__27422 = G__27444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27423),endless_ships$views$table$table_headers_$_iter__27420(cljs.core.chunk_rest(s__27421__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27423),null);
}
} else {
var vec__27431 = cljs.core.first(s__27421__$2);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27431,(0),null);
var map__27434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27431,(1),null);
var map__27434__$1 = cljs.core.__destructure_map(map__27434);
var orderable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27434__$1,new cljs.core.Keyword(null,"orderable?","orderable?",-590452154),true);
return cljs.core.cons((function (){var title = (cljs.core.truth_(orderable_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.table-header","a.table-header",-453579852),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__27431,text,map__27434,map__27434__$1,orderable_QMARK_,s__27421__$2,temp__5753__auto__){
return (function (){
var G__27435 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.events","toggle-ordering","endless-ships.events/toggle-ordering",26210934),entity_type,text], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27435) : re_frame.core.dispatch.call(null,G__27435));
});})(vec__27431,text,map__27434,map__27434__$1,orderable_QMARK_,s__27421__$2,temp__5753__auto__))
], null),text], null):text);
var icon = (cljs.core.truth_((function (){var and__4221__auto__ = orderable_QMARK_;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column-name","column-name",551523580).cljs$core$IFn$_invoke$arity$1(ordering),text);
} else {
return and__4221__auto__;
}
})())?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(ordering),new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-sort-by-attributes","span.glyphicon.glyphicon-sort-by-attributes",1350494513)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-sort-by-attributes-alt","span.glyphicon.glyphicon-sort-by-attributes-alt",834182936)], null)):null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th.text-center","th.text-center",738072305),title," ",icon], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),text], null));
})(),endless_ships$views$table$table_headers_$_iter__27420(cljs.core.rest(s__27421__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(columns);
})()], null);
});
endless_ships.views.table.table = (function endless_ships$views$table$table(entity_type,header_columns,ordering,rows){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table.table-striped.table-bordered.table-condensed.table-hover","table.table.table-striped.table-bordered.table-condensed.table-hover",1375904207),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thead","thead",-291875296),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.table_headers,entity_type,header_columns,ordering], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tbody","tbody",-80678300),rows], null)], null);
});
endless_ships.views.table.left_cell = (function endless_ships$views$table$left_cell(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27449 = arguments.length;
var i__4830__auto___27450 = (0);
while(true){
if((i__4830__auto___27450 < len__4829__auto___27449)){
args__4835__auto__.push((arguments[i__4830__auto___27450]));

var G__27451 = (i__4830__auto___27450 + (1));
i__4830__auto___27450 = G__27451;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return endless_ships.views.table.left_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(endless_ships.views.table.left_cell.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-left","td.text-left",511611147),children], null);
}));

(endless_ships.views.table.left_cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(endless_ships.views.table.left_cell.cljs$lang$applyTo = (function (seq27436){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27436));
}));

endless_ships.views.table.right_cell = (function endless_ships$views$table$right_cell(var_args){
var args__4835__auto__ = [];
var len__4829__auto___27452 = arguments.length;
var i__4830__auto___27453 = (0);
while(true){
if((i__4830__auto___27453 < len__4829__auto___27452)){
args__4835__auto__.push((arguments[i__4830__auto___27453]));

var G__27454 = (i__4830__auto___27453 + (1));
i__4830__auto___27453 = G__27454;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((0) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((0)),(0),null)):null);
return endless_ships.views.table.right_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__4836__auto__);
});

(endless_ships.views.table.right_cell.cljs$core$IFn$_invoke$arity$variadic = (function (children){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td.text-right","td.text-right",185725742),children], null);
}));

(endless_ships.views.table.right_cell.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(endless_ships.views.table.right_cell.cljs$lang$applyTo = (function (seq27442){
var self__4817__auto__ = this;
return self__4817__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq27442));
}));


//# sourceMappingURL=endless_ships.views.table.js.map
