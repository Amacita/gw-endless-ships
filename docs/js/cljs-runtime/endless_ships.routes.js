goog.provide('endless_ships.routes');
endless_ships.routes.name_pattern = /[A-Za-z0-9\-\(\)\,\"]+/;
endless_ships.routes.routes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["/",cljs.core.PersistentArrayMap.createAsIfByAssoc(["",new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ships/",new cljs.core.Keyword("ship","name","ship/name",1848744565)], null),new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["ships/",new cljs.core.Keyword("ship","name","ship/name",1848744565),"/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.routes.name_pattern,new cljs.core.Keyword("ship","modification","ship/modification",613474329)], null)], null),new cljs.core.Keyword(null,"ship-modification","ship-modification",501304417),"outfits",new cljs.core.Keyword(null,"outfits","outfits",-1347752670),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["outfits/",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.routes.name_pattern,new cljs.core.Keyword("outfit","name","outfit/name",571818542)], null)], null),new cljs.core.Keyword(null,"outfit","outfit",435435962)])], null);
endless_ships.routes.parse_url = (function endless_ships$routes$parse_url(url){
var map__27428 = bidi.bidi.match_route(endless_ships.routes.routes,url);
var map__27428__$1 = cljs.core.__destructure_map(map__27428);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27428__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var route_params = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__27428__$1,new cljs.core.Keyword(null,"route-params","route-params",2111411055),cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [handler,route_params], null);
});
endless_ships.routes.dispatch_route = (function endless_ships$routes$dispatch_route(matched_route){
if((!((window.ga == null)))){
window.ga("send","pageview",location.pathname);
} else {
}

var G__27430 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.events","navigate-to","endless-ships.events/navigate-to",1779597913),matched_route], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__27430) : re_frame.core.dispatch.call(null,G__27430));
});
endless_ships.routes.url_for = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bidi.bidi.path_for,endless_ships.routes.routes);
endless_ships.routes.start_BANG_ = (function endless_ships$routes$start_BANG_(){
var history = pushy.core.pushy(endless_ships.routes.dispatch_route,endless_ships.routes.parse_url);
return history.pushy$core$IHistory$start_BANG_$arity$1(null);
});
endless_ships.routes.ship_link = (function endless_ships$routes$ship_link(name){
var url = endless_ships.routes.url_for(new cljs.core.Keyword(null,"ship","ship",197863473),new cljs.core.Keyword("ship","name","ship/name",1848744565),endless_ships.views.utils.kebabize(name));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),endless_ships.views.utils.nbspize(name)], null);
});
endless_ships.routes.ship_modification_link = (function endless_ships$routes$ship_modification_link(name,modification){
var url = ["/ships/",endless_ships.views.utils.kebabize(name),"/",endless_ships.views.utils.kebabize(modification)].join('');
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),endless_ships.views.utils.nbspize(modification)], null);
});
endless_ships.routes.outfit_link = (function endless_ships$routes$outfit_link(name){
var url = endless_ships.routes.url_for(new cljs.core.Keyword(null,"outfit","outfit",435435962),new cljs.core.Keyword("outfit","name","outfit/name",571818542),endless_ships.views.utils.kebabize(name));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),url], null),endless_ships.views.utils.nbspize(name)], null);
});

//# sourceMappingURL=endless_ships.routes.js.map
