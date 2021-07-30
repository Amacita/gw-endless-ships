goog.provide('endless_ships.views.ships_list');
endless_ships.views.ships_list.checkbox_group = (function endless_ships$views$ships_list$checkbox_group(filter,toggling_event){
var iter__4622__auto__ = (function endless_ships$views$ships_list$checkbox_group_$_iter__28519(s__28520){
return (new cljs.core.LazySeq(null,(function (){
var s__28520__$1 = s__28520;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__28520__$1);
if(temp__5753__auto__){
var s__28520__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28520__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__28520__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__28522 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__28521 = (0);
while(true){
if((i__28521 < size__4621__auto__)){
var vec__28523 = cljs.core._nth(c__4620__auto__,i__28521);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(0),null);
var checked_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28523,(1),null);
cljs.core.chunk_append(b__28522,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkbox","div.checkbox",389009838),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__28521,vec__28523,item,checked_QMARK_,c__4620__auto__,size__4621__auto__,b__28522,s__28520__$2,temp__5753__auto__){
return (function (){
var G__28526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggling_event,item], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28526) : re_frame.core.dispatch.call(null,G__28526));
});})(i__28521,vec__28523,item,checked_QMARK_,c__4620__auto__,size__4621__auto__,b__28522,s__28520__$2,temp__5753__auto__))
], null)], null),clojure.string.capitalize(cljs.core.name(item))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)));

var G__28546 = (i__28521 + (1));
i__28521 = G__28546;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28522),endless_ships$views$ships_list$checkbox_group_$_iter__28519(cljs.core.chunk_rest(s__28520__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28522),null);
}
} else {
var vec__28527 = cljs.core.first(s__28520__$2);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28527,(0),null);
var checked_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28527,(1),null);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.checkbox","div.checkbox",389009838),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_,new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (vec__28527,item,checked_QMARK_,s__28520__$2,temp__5753__auto__){
return (function (){
var G__28530 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [toggling_event,item], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28530) : re_frame.core.dispatch.call(null,G__28530));
});})(vec__28527,item,checked_QMARK_,s__28520__$2,temp__5753__auto__))
], null)], null),clojure.string.capitalize(cljs.core.name(item))], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),item], null)),endless_ships$views$ships_list$checkbox_group_$_iter__28519(cljs.core.rest(s__28520__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(filter);
});
endless_ships.views.ships_list.ships_filter = (function endless_ships$views$ships_list$ships_filter(){
var height = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
return (function (){
var collapsed_QMARK_ = cljs.core.deref((function (){var G__28532 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ship-filters-collapsed?","endless-ships.subs/ship-filters-collapsed?",1822271358)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28532) : re_frame.core.subscribe.call(null,G__28532));
})());
var race_filter = cljs.core.deref((function (){var G__28533 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ships-race-filter","endless-ships.subs/ships-race-filter",1205258620)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28533) : re_frame.core.subscribe.call(null,G__28533));
})());
var category_filter = cljs.core.deref((function (){var G__28534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ships-category-filter","endless-ships.subs/ships-category-filter",252855244)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28534) : re_frame.core.subscribe.call(null,G__28534));
})());
var license_filter = cljs.core.deref((function (){var G__28535 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ships-license-filter","endless-ships.subs/ships-license-filter",1023220639)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28535) : re_frame.core.subscribe.call(null,G__28535));
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.filters-group","div.filters-group",1527998988),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden",new cljs.core.Keyword(null,"transition","transition",765692007),"max-height 0.8s",new cljs.core.Keyword(null,"max-height","max-height",-612563804),(cljs.core.truth_(collapsed_QMARK_)?(0):cljs.core.deref(height))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ref","ref",1289896967),(function (p1__28531_SHARP_){
if(cljs.core.truth_(p1__28531_SHARP_)){
return cljs.core.reset_BANG_(height,p1__28531_SHARP_.clientHeight);
} else {
return null;
}
})], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2.col-md-3","div.col-lg-2.col-md-3",-2024501617),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Race"], null),endless_ships.views.ships_list.checkbox_group(race_filter,new cljs.core.Keyword("endless-ships.events","toggle-ships-race-filter","endless-ships.events/toggle-ships-race-filter",1336905685))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2.col-md-3","div.col-lg-2.col-md-3",-2024501617),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Category"], null),endless_ships.views.ships_list.checkbox_group(category_filter,new cljs.core.Keyword("endless-ships.events","toggle-ships-category-filter","endless-ships.events/toggle-ships-category-filter",360017738))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-2.col-md-3","div.col-lg-2.col-md-3",-2024501617),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"License"], null),endless_ships.views.ships_list.checkbox_group(license_filter,new cljs.core.Keyword("endless-ships.events","toggle-ships-license-filter","endless-ships.events/toggle-ships-license-filter",1474231081))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
var G__28536 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.events","toggle-ship-filters-visibility","endless-ships.events/toggle-ship-filters-visibility",-1716081547)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__28536) : re_frame.core.dispatch.call(null,G__28536));
})], null),"Filters ",(cljs.core.truth_(collapsed_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-menu-down","span.glyphicon.glyphicon-menu-down",-228782728)], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.glyphicon.glyphicon-menu-up","span.glyphicon.glyphicon-menu-up",-277172169)], null))], null)], null);
});
});
endless_ships.views.ships_list.crew_and_bunks = (function endless_ships$views$ships_list$crew_and_bunks(p__28537){
var map__28538 = p__28537;
var map__28538__$1 = cljs.core.__destructure_map(map__28538);
var required_crew = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28538__$1,new cljs.core.Keyword(null,"required-crew","required-crew",537036974));
var bunks = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28538__$1,new cljs.core.Keyword(null,"bunks","bunks",-2086436619));
if((required_crew > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(endless_ships.views.utils.format_number(required_crew)),endless_ships.views.utils.nbsp,"/",endless_ships.views.utils.nbsp,cljs.core.str.cljs$core$IFn$_invoke$arity$1(endless_ships.views.utils.format_number(bunks))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell], null);
}
});
endless_ships.views.ships_list.license_labels = (function endless_ships$views$ships_list$license_labels(p__28539){
var map__28540 = p__28539;
var map__28540__$1 = cljs.core.__destructure_map(map__28540);
var licenses = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28540__$1,new cljs.core.Keyword(null,"licenses","licenses",521774891));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.left_cell,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (license){
return cljs.core.deref((function (){var G__28541 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","license-label","endless-ships.subs/license-label",-778348113),license], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28541) : re_frame.core.subscribe.call(null,G__28541));
})());
}),licenses))], null);
});
endless_ships.views.ships_list.ship_row = (function endless_ships$views$ships_list$ship_row(name){
var map__28542 = cljs.core.deref((function (){var G__28543 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ship","endless-ships.subs/ship",1769681590),name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28543) : re_frame.core.subscribe.call(null,G__28543));
})());
var map__28542__$1 = cljs.core.__destructure_map(map__28542);
var ship = map__28542__$1;
var shields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"shields","shields",-295786721));
var category = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"category","category",-593092832));
var weapon_capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"weapon-capacity","weapon-capacity",758606720));
var mass = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var race = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"race","race",693656872));
var outfit_space = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"outfit-space","outfit-space",-773098965));
var engine_capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"engine-capacity","engine-capacity",485978959));
var cargo_space = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"cargo-space","cargo-space",212295633));
var hull = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"hull","hull",-957096876));
var fuel_capacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28542__$1,new cljs.core.Keyword(null,"fuel-capacity","fuel-capacity",-2137703529));
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.left_cell,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.routes.ship_link,name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.left_cell,endless_ships.views.utils.race_label(race)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(endless_ships.utils.ships.total_cost(ship))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.left_cell,endless_ships.views.utils.nbspize(category)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(hull)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(shields)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(mass)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(engine_capacity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(weapon_capacity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(fuel_capacity)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(outfit_space)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.right_cell,endless_ships.views.utils.format_number(cargo_space)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.ships_list.crew_and_bunks,ship], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.ships_list.license_labels,ship], null)], null);
});
endless_ships.views.ships_list.ships_list = (function endless_ships$views$ships_list$ships_list(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.ships_list.ships_filter], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.table.table,new cljs.core.Keyword(null,"ships","ships",-875113158),endless_ships.utils.ships.columns,cljs.core.deref((function (){var G__28544 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ships-ordering","endless-ships.subs/ships-ordering",290834139)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28544) : re_frame.core.subscribe.call(null,G__28544));
})()),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.ships_list.ship_row,name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null));
}),cljs.core.deref((function (){var G__28545 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ship-names","endless-ships.subs/ship-names",1482572920)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__28545) : re_frame.core.subscribe.call(null,G__28545));
})()))], null)], null);
});

//# sourceMappingURL=endless_ships.views.ships_list.js.map
