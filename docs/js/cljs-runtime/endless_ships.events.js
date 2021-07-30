goog.provide('endless_ships.events');
endless_ships.events.initial_outfit_settings = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (settings,p__28451){
var vec__28452 = p__28451;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(0),null);
var map__28455 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28452,(1),null);
var map__28455__$1 = cljs.core.__destructure_map(map__28455);
var initial_ordering = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28455__$1,new cljs.core.Keyword(null,"initial-ordering","initial-ordering",247801785));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(settings,name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ordering","ordering",1096406705),initial_ordering], null));
}),cljs.core.PersistentArrayMap.EMPTY,endless_ships.utils.outfits.types);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","initialize","endless-ships.events/initialize",1940589872),(function (p__28456,_){
var map__28457 = p__28456;
var map__28457__$1 = cljs.core.__destructure_map(map__28457);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28457__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"outfits","outfits",-1347752670),new cljs.core.Keyword(null,"loading?","loading?",1905707049),new cljs.core.Keyword(null,"gw-version","gw-version",-1331178453),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"licenses","licenses",521774891),new cljs.core.Keyword(null,"route","route",329891309),new cljs.core.Keyword(null,"outfitters","outfitters",-5305870),new cljs.core.Keyword(null,"loading-failed?","loading-failed?",1354782740),new cljs.core.Keyword(null,"ship-modifications","ship-modifications",-732656460),new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.Keyword(null,"version","version",425292698)],[cljs.core.PersistentArrayMap.EMPTY,true,cljs.core.PersistentArrayMap.EMPTY,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ordering","ordering",1096406705),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-name","column-name",551523580),"Name",new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null),new cljs.core.Keyword(null,"filters-collapsed?","filters-collapsed?",1637206496),true,new cljs.core.Keyword(null,"race-filter","race-filter",2145011058),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"category-filter","category-filter",52750599),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"license-filter","license-filter",-250200582),cljs.core.PersistentArrayMap.EMPTY], null)], null),endless_ships.events.initial_outfit_settings], 0)),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ships","ships",-875113158),cljs.core.PersistentArrayMap.EMPTY], null),cljs.core.PersistentVector.EMPTY,false,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY]),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),"/data.edn",new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.edn.edn_response_format.cljs$core$IFn$_invoke$arity$0(),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.events","data-loaded","endless-ships.events/data-loaded",2027853550)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.events","data-failed-to-load","endless-ships.events/data-failed-to-load",1016836608)], null)], null)], null);
}));
endless_ships.events.index_by_name = (function endless_ships$events$index_by_name(coll){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (indexed,p__28458){
var map__28459 = p__28458;
var map__28459__$1 = cljs.core.__destructure_map(map__28459);
var item = map__28459__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28459__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(indexed,endless_ships.views.utils.kebabize(name),item);
}),cljs.core.PersistentArrayMap.EMPTY,coll);
});
endless_ships.events.group_modifications = (function endless_ships$events$group_modifications(modifications){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (grouped,p__28460){
var map__28461 = p__28460;
var map__28461__$1 = cljs.core.__destructure_map(map__28461);
var mod = map__28461__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28461__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var modification = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28461__$1,new cljs.core.Keyword(null,"modification","modification",614103573));
return cljs.core.assoc_in(grouped,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.utils.kebabize(name),endless_ships.views.utils.kebabize(modification)], null),mod);
}),cljs.core.PersistentArrayMap.EMPTY,modifications);
});
endless_ships.events.process_outfitters = (function endless_ships$events$process_outfitters(outfitters){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (outfitter){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(outfitter,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"outfits","outfits",-1347752670),cljs.core.set);
}),outfitters);
});
endless_ships.events.toggle_filter = (function endless_ships$events$toggle_filter(filter,value){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(filter,value,cljs.core.not);
});
endless_ships.events.initial_filter = (function endless_ships$events$initial_filter(values){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(endless_ships.events.toggle_filter,cljs.core.sorted_map(),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,values));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","data-loaded","endless-ships.events/data-loaded",2027853550),(function (db,p__28462){
var vec__28463 = p__28462;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28463,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ships","ships",-875113158),endless_ships.events.index_by_name(new cljs.core.Keyword(null,"ships","ships",-875113158).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"ship-modifications","ship-modifications",-732656460),endless_ships.events.group_modifications(new cljs.core.Keyword(null,"ship-modifications","ship-modifications",-732656460).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"outfits","outfits",-1347752670),endless_ships.events.index_by_name(new cljs.core.Keyword(null,"outfits","outfits",-1347752670).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"outfitters","outfitters",-5305870),endless_ships.events.process_outfitters(new cljs.core.Keyword(null,"outfitters","outfitters",-5305870).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"gw-version","gw-version",-1331178453),new cljs.core.Keyword(null,"gw-version","gw-version",-1331178453).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"licenses","licenses",521774891),new cljs.core.Keyword(null,"licenses","licenses",521774891).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(data)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ships","ships",-875113158)], null),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"race-filter","race-filter",2145011058),endless_ships.events.initial_filter(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"race","race",693656872),new cljs.core.Keyword(null,"ships","ships",-875113158).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.Keyword(null,"category-filter","category-filter",52750599),endless_ships.events.initial_filter(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"ships","ships",-875113158).cljs$core$IFn$_invoke$arity$1(data))),new cljs.core.Keyword(null,"license-filter","license-filter",-250200582),endless_ships.events.initial_filter(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"licenses","licenses",521774891),new cljs.core.Keyword(null,"ships","ships",-875113158).cljs$core$IFn$_invoke$arity$1(data)))))], null));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","data-failed-to-load","endless-ships.events/data-failed-to-load",1016836608),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading-failed?","loading-failed?",1354782740),true], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","navigate-to","endless-ships.events/navigate-to",1779597913),(function (db,p__28466){
var vec__28467 = p__28466;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28467,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28467,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"route","route",329891309),route);
}));
endless_ships.events.toggle_ordering = (function endless_ships$events$toggle_ordering(db,entity_type,column){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),entity_type,new cljs.core.Keyword(null,"ordering","ordering",1096406705)], null),(function (p__28470){
var map__28471 = p__28470;
var map__28471__$1 = cljs.core.__destructure_map(map__28471);
var column_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28471__$1,new cljs.core.Keyword(null,"column-name","column-name",551523580));
var order = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28471__$1,new cljs.core.Keyword(null,"order","order",-1254677256));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(column_name,column)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-name","column-name",551523580),column,new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"desc","desc",2093485764)], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(order,new cljs.core.Keyword(null,"asc","asc",356854569))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"column-name","column-name",551523580),null], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-name","column-name",551523580),column,new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"asc","asc",356854569)], null);

}
}
}));
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","toggle-ordering","endless-ships.events/toggle-ordering",26210934),(function (db,p__28472){
var vec__28473 = p__28472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28473,(0),null);
var entity_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28473,(1),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28473,(2),null);
return endless_ships.events.toggle_ordering(db,entity_type,column);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","toggle-ship-filters-visibility","endless-ships.events/toggle-ship-filters-visibility",-1716081547),(function (db){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.Keyword(null,"filters-collapsed?","filters-collapsed?",1637206496)], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","toggle-ships-race-filter","endless-ships.events/toggle-ships-race-filter",1336905685),(function (db,p__28476){
var vec__28477 = p__28476;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(0),null);
var race = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28477,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.Keyword(null,"race-filter","race-filter",2145011058),race], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","toggle-ships-category-filter","endless-ships.events/toggle-ships-category-filter",360017738),(function (db,p__28480){
var vec__28481 = p__28480;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28481,(0),null);
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28481,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.Keyword(null,"category-filter","category-filter",52750599),category], null),cljs.core.not);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("endless-ships.events","toggle-ships-license-filter","endless-ships.events/toggle-ships-license-filter",1474231081),(function (db,p__28484){
var vec__28485 = p__28484;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28485,(0),null);
var license = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28485,(1),null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.Keyword(null,"license-filter","license-filter",-250200582),license], null),cljs.core.not);
}));

//# sourceMappingURL=endless_ships.events.js.map
