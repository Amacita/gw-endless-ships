goog.provide('endless_ships.utils.ships');
endless_ships.utils.ships.total_cost = (function endless_ships$utils$ships$total_cost(p__11293){
var map__11294 = p__11293;
var map__11294__$1 = cljs.core.__destructure_map(map__11294);
var empty_hull_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11294__$1,new cljs.core.Keyword(null,"empty-hull-cost","empty-hull-cost",-1091101083));
var outfits_cost = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11294__$1,new cljs.core.Keyword(null,"outfits-cost","outfits-cost",-765170421));
return (empty_hull_cost + outfits_cost);
});
endless_ships.utils.ships.or_zero = (function endless_ships$utils$ships$or_zero(prop){
return (function (p1__11295_SHARP_){
var or__4223__auto__ = (prop.cljs$core$IFn$_invoke$arity$1 ? prop.cljs$core$IFn$_invoke$arity$1(p1__11295_SHARP_) : prop.call(null,p1__11295_SHARP_));
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return (0);
}
});
});
endless_ships.utils.ships.columns = (new cljs.core.PersistentArrayMap(null,(14),["Name",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"name","name",1843675177)], null),"Race",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"race","race",693656872)], null),"Cost",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.total_cost], null),"Category",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"category","category",-593092832),new cljs.core.Keyword(null,"orderable?","orderable?",-590452154),false], null),"Hull",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"hull","hull",-957096876))], null),"Shields",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"shields","shields",-295786721))], null),"Mass",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"mass","mass",-2138950046))], null),"Engine cap.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"engine-capacity","engine-capacity",485978959))], null),"Weapon cap.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"weapon-capacity","weapon-capacity",758606720))], null),"Fuel cap.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"fuel-capacity","fuel-capacity",-2137703529))], null),"Outfit sp.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"outfit-space","outfit-space",-773098965))], null),"Cargo sp.",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"cargo-space","cargo-space",212295633))], null),"Crew / bunks",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"bunks","bunks",-2086436619))], null),"Licenses",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"licenses","licenses",521774891)], null)],null));

//# sourceMappingURL=endless_ships.utils.ships.js.map
