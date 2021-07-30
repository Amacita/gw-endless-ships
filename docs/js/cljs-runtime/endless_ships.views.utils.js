goog.provide('endless_ships.views.utils');
endless_ships.views.utils.nbsp = "\u00A0";
endless_ships.views.utils.nbspize = (function endless_ships$views$utils$nbspize(s){
return clojure.string.replace(s,/ /,endless_ships.views.utils.nbsp);
});
endless_ships.views.utils.kebabize = (function endless_ships$views$utils$kebabize(s){
return clojure.string.lower_case(clojure.string.replace(clojure.string.replace(s,/\s+/,"-"),/[\?']/,""));
});
endless_ships.views.utils.race_label = (function endless_ships$views$utils$race_label(race){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.label","span.label",-1921107865),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),["label-",endless_ships.views.utils.kebabize(cljs.core.name(race))].join('')], null),race], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),race], null));
});
endless_ships.views.utils.format_number = (function endless_ships$views$utils$format_number(num){
if(typeof num === 'number'){
var rounded = (Math.round((num * (10))) / (10));
var formatter = (new goog.i18n.NumberFormat(goog.i18n.NumberFormat.Format.DECIMAL));
return formatter.format(cljs.core.str.cljs$core$IFn$_invoke$arity$1(rounded));
} else {
return num;
}
});
endless_ships.views.utils.render_attribute = (function endless_ships$views$utils$render_attribute(m,prop,label){
var v = (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(m) : prop.call(null,m));
if((!((v == null)))){
if(typeof v === 'number'){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(endless_ships.views.utils.format_number(v))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')], null);
}
} else {
return null;
}
});
endless_ships.views.utils.render_percentage = (function endless_ships$views$utils$render_percentage(m,prop,label){
var v = (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(m) : prop.call(null,m));
if((!((v == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(endless_ships.views.utils.format_number((v * (100)))),"%"].join('')], null);
} else {
return null;
}
});
endless_ships.views.utils.render_description = (function endless_ships$views$utils$render_description(entity){
return cljs.core.butlast(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (idx,paragraph){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [paragraph,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),idx], null))], null);
}),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(entity))));
});

//# sourceMappingURL=endless_ships.views.utils.js.map
