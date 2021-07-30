goog.provide('endless_ships.views.ship_page');
endless_ships.views.ship_page.render_licenses = (function endless_ships$views$ship_page$render_licenses(p__27312){
var vec__27313 = p__27312;
var license1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27313,(0),null);
var license2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27313,(1),null);
if((!((license2 == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),["This ship requires ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(license1)," and ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(license2)," licenses."].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.italic","p.italic",60958886),["This ship requires a ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(license1)," license."].join('')], null);
}
});
endless_ships.views.ship_page.image_url = (function endless_ships$views$ship_page$image_url(ship){
var suffix = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ship),"Shuttle"))?"=0.png":((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ship),"Void Sprite")) && ((!(cljs.core.contains_QMARK_(ship,new cljs.core.Keyword(null,"modification","modification",614103573)))))))?"-00.png":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ship),"Maeri'het"))?"-00.png":(cljs.core.truth_(cljs.core.last(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(ship)))?"-0.png":".png"
))));
var filename = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.encodeURI(cljs.core.first(new cljs.core.Keyword(null,"sprite","sprite",172516848).cljs$core$IFn$_invoke$arity$1(ship)))),suffix].join('');
return ["/images/",filename].join('');
});
endless_ships.views.ship_page.ship_modifications = (function endless_ships$views$ship_page$ship_modifications(ship_name,selected_modification_slug,modification_names){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Modifications"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.nav.nav-pills.nav-stacked","ul.nav.nav-pills.nav-stacked",1838477263),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),(((selected_modification_slug == null))?"active":null)], null),endless_ships.routes.ship_link(ship_name)], null),(function (){var iter__4622__auto__ = (function endless_ships$views$ship_page$ship_modifications_$_iter__27330(s__27331){
return (new cljs.core.LazySeq(null,(function (){
var s__27331__$1 = s__27331;
while(true){
var temp__5753__auto__ = cljs.core.seq(s__27331__$1);
if(temp__5753__auto__){
var s__27331__$2 = temp__5753__auto__;
if(cljs.core.chunked_seq_QMARK_(s__27331__$2)){
var c__4620__auto__ = cljs.core.chunk_first(s__27331__$2);
var size__4621__auto__ = cljs.core.count(c__4620__auto__);
var b__27333 = cljs.core.chunk_buffer(size__4621__auto__);
if((function (){var i__27332 = (0);
while(true){
if((i__27332 < size__4621__auto__)){
var modification_name = cljs.core._nth(c__4620__auto__,i__27332);
cljs.core.chunk_append(b__27333,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(endless_ships.views.utils.kebabize(modification_name),selected_modification_slug))?"active":null)], null),endless_ships.routes.ship_modification_link(ship_name,modification_name)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),modification_name], null)));

var G__27349 = (i__27332 + (1));
i__27332 = G__27349;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__27333),endless_ships$views$ship_page$ship_modifications_$_iter__27330(cljs.core.chunk_rest(s__27331__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__27333),null);
}
} else {
var modification_name = cljs.core.first(s__27331__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(endless_ships.views.utils.kebabize(modification_name),selected_modification_slug))?"active":null)], null),endless_ships.routes.ship_modification_link(ship_name,modification_name)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),modification_name], null)),endless_ships$views$ship_page$ship_modifications_$_iter__27330(cljs.core.rest(s__27331__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4622__auto__(modification_names);
})()], null)], null)], null);
});
endless_ships.views.ship_page.outfit_categories = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Guns","Turrets","Secondary Weapons","Ammunition","Systems","Power","Engines","Hand to Hand","Special"], null);
endless_ships.views.ship_page.outfit_item = (function endless_ships$views$ship_page$outfit_item(name,quantity){
var link = endless_ships.routes.outfit_link(name);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(quantity,(1))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),link], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.badge","span.badge",-1410699734),quantity], null),link], null);
}
});
endless_ships.views.ship_page.outfits_list = (function endless_ships$views$ship_page$outfits_list(outfits){
var items = cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (category){
if(cljs.core.contains_QMARK_(outfits,category)){
var header = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.list-group-item.disabled","span.list-group-item.disabled",951120914),category], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),category], null));
var items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27340){
var map__27341 = p__27340;
var map__27341__$1 = cljs.core.__destructure_map(map__27341);
var outfit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27341__$1,new cljs.core.Keyword(null,"outfit","outfit",435435962));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27341__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.ship_page.outfit_item,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(outfit),quantity], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(outfit)], null));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__27339_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__27339_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outfit","outfit",435435962),new cljs.core.Keyword(null,"name","name",1843675177)], null));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(outfits,category)));
return cljs.core.cons(header,items);
} else {
return null;
}
}),endless_ships.views.ship_page.outfit_categories));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),items], null);
});
endless_ships.views.ship_page.ship_page = (function endless_ships$views$ship_page$ship_page(ship_name,ship_modification){
var ship = cljs.core.deref((function (){var G__27343 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ship","endless-ships.subs/ship",1769681590),ship_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27343) : re_frame.core.subscribe.call(null,G__27343));
})());
var outfits = cljs.core.deref((function (){var G__27344 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","outfits","endless-ships.subs/outfits",351986639)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27344) : re_frame.core.subscribe.call(null,G__27344));
})());
var modification_names = cljs.core.deref((function (){var G__27345 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ship-modifications-names","endless-ships.subs/ship-modifications-names",1716196102),ship_name], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27345) : re_frame.core.subscribe.call(null,G__27345));
})());
var selected_modification = (((!((ship_modification == null))))?cljs.core.deref((function (){var G__27346 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","ship-modification","endless-ships.subs/ship-modification",1001473808),ship_name,ship_modification], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27346) : re_frame.core.subscribe.call(null,G__27346));
})()):cljs.core.PersistentArrayMap.EMPTY);
var ship_with_modification = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ship,selected_modification], 0));
var ship_outfits = cljs.core.group_by((function (p1__27342_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__27342_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"outfit","outfit",435435962),new cljs.core.Keyword(null,"category","category",-593092832)], null));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__27347){
var map__27348 = p__27347;
var map__27348__$1 = cljs.core.__destructure_map(map__27348);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27348__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var quantity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27348__$1,new cljs.core.Keyword(null,"quantity","quantity",-1929050694));
var outfit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(outfits,endless_ships.views.utils.kebabize(name));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"outfit","outfit",435435962),outfit,new cljs.core.Keyword(null,"quantity","quantity",-1929050694),quantity], null);
}),new cljs.core.Keyword(null,"outfits","outfits",-1347752670).cljs$core$IFn$_invoke$arity$1(ship_with_modification)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ship)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media","div.media",-1604536597),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-body","div.media-body",-1089439484),new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),endless_ships.views.utils.render_attribute(ship_with_modification,endless_ships.utils.ships.total_cost,"cost"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"shields","shields",-295786721),"shields"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"hull","hull",-957096876),"hull"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"mass","mass",-2138950046),"mass"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"cargo-space","cargo-space",212295633),"cargo space"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"required-crew","required-crew",537036974),"required crew"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"bunks","bunks",-2086436619),"bunks"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"fuel-capacity","fuel-capacity",-2137703529),"fuel capacity"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"outfit-space","outfit-space",-773098965),"outfit space"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"weapon-capacity","weapon-capacity",758606720),"weapon capacity"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"engine-capacity","engine-capacity",485978959),"engine capacity"),endless_ships.views.utils.render_attribute(ship_with_modification,endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"guns","guns",1668094555)),"guns"),endless_ships.views.utils.render_attribute(ship_with_modification,endless_ships.utils.ships.or_zero(new cljs.core.Keyword(null,"turrets","turrets",558331555)),"turrets"),(((new cljs.core.Keyword(null,"drones","drones",-1314497228).cljs$core$IFn$_invoke$arity$1(ship_with_modification) > (0)))?endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"drones","drones",-1314497228),"drones"):null),(((new cljs.core.Keyword(null,"fighters","fighters",292260032).cljs$core$IFn$_invoke$arity$1(ship_with_modification) > (0)))?endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"fighters","fighters",292260032),"fighters"):null),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"ramscoop","ramscoop",1634752045),"ramscoop"),endless_ships.views.utils.render_attribute(ship_with_modification,new cljs.core.Keyword(null,"cloak","cloak",2100002512),"cloak"),endless_ships.views.utils.render_percentage(ship_with_modification,new cljs.core.Keyword(null,"self-destruct","self-destruct",-1473453031),"self-destruct")], null),(((!((new cljs.core.Keyword(null,"licenses","licenses",521774891).cljs$core$IFn$_invoke$arity$1(ship_with_modification) == null))))?endless_ships.views.ship_page.render_licenses(new cljs.core.Keyword(null,"licenses","licenses",521774891).cljs$core$IFn$_invoke$arity$1(ship_with_modification)):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.media-right","div.media-right",-1849639964),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.ship-sprite","img.ship-sprite",112948501),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),endless_ships.views.ship_page.image_url(ship_with_modification)], null)], null)], null)], null)], null)], null),((cljs.core.seq(modification_names))?endless_ships.views.ship_page.ship_modifications(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(ship),ship_modification,modification_names):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-6","div.col-md-6",230002699),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel.panel-default","div.panel.panel-default",-1039051133),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-heading","div.panel-heading",-368913146),"Default outfits"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-body","div.panel-body",-4468178),endless_ships.views.ship_page.outfits_list(ship_outfits)], null)], null)], null)], null),((cljs.core.seq(new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(ship_with_modification)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-md-12","div.col-md-12",-1894925992),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.well","div.well",-752456960),endless_ships.views.utils.render_description(ship_with_modification)], null)], null)], null):null)], null);
});

//# sourceMappingURL=endless_ships.views.ship_page.js.map
