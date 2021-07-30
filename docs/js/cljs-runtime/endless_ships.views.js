goog.provide('endless_ships.views');
endless_ships.views.current_page = (function endless_ships$views$current_page(){
var vec__27369 = cljs.core.deref((function (){var G__27372 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","route","endless-ships.subs/route",1899705456)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27372) : re_frame.core.subscribe.call(null,G__27372));
})());
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27369,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27369,(1),null);
var G__27373 = route;
var G__27373__$1 = (((G__27373 instanceof cljs.core.Keyword))?G__27373.fqn:null);
switch (G__27373__$1) {
case "ships":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.ships_list.ships_list], null);

break;
case "ship":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.ship_page.ship_page,new cljs.core.Keyword("ship","name","ship/name",1848744565).cljs$core$IFn$_invoke$arity$1(params),null], null);

break;
case "ship-modification":
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.ship_page.ship_page,new cljs.core.Keyword("ship","name","ship/name",1848744565).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword("ship","modification","ship/modification",613474329).cljs$core$IFn$_invoke$arity$1(params)], null);

break;
case "outfits":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.outfits.outfits], null);

break;
case "outfit":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.outfit_page.outfit_page,new cljs.core.Keyword("outfit","name","outfit/name",571818542).cljs$core$IFn$_invoke$arity$1(params)], null);

break;
default:
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),["Route unknown: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(route)].join('')], null);

}
});
endless_ships.views.gw_version = (function endless_ships$views$gw_version(){
var map__27374 = cljs.core.deref((function (){var G__27375 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","gw-version","endless-ships.subs/gw-version",1312763568)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27375) : re_frame.core.subscribe.call(null,G__27375));
})());
var map__27374__$1 = cljs.core.__destructure_map(map__27374);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27374__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27374__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27374__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-version","div.game-version",574134750),(((!((tag == null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["https://github.com/1010todd/galactic-war/releases/tag/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),"Galactic War ",tag], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["https://github.com/1010todd/galactic-war/commit/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),"galactic-war@",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(hash,(0),(7))], null))," (",date,")"], null);
});
endless_ships.views.game_version = (function endless_ships$views$game_version(){
var map__27376 = cljs.core.deref((function (){var G__27377 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","game-version","endless-ships.subs/game-version",-740841277)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27377) : re_frame.core.subscribe.call(null,G__27377));
})());
var map__27376__$1 = cljs.core.__destructure_map(map__27376);
var hash = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27376__$1,new cljs.core.Keyword(null,"hash","hash",-13781596));
var date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27376__$1,new cljs.core.Keyword(null,"date","date",-1463434462));
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__27376__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.game-version","div.game-version",574134750),(((!((tag == null))))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["https://github.com/endless-sky/endless-sky/releases/tag/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),"Endless Sky ",tag], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"href","href",-793805698),["https://github.com/endless-sky/endless-sky/commit/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hash)].join(''),new cljs.core.Keyword(null,"target","target",253001721),new cljs.core.Keyword(null,"blank","blank",-1249652109)], null),"endless-sky@",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(hash,(0),(7))], null))," (",date,")"], null);
});
endless_ships.views.interface$ = (function endless_ships$views$interface(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container-fluid","div.container-fluid",3929737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.row","div.row",133678515),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.col-lg-12","div.col-lg-12",1588800498),(cljs.core.truth_(cljs.core.deref((function (){var G__27379 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","loading?","endless-ships.subs/loading?",199675576)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27379) : re_frame.core.subscribe.call(null,G__27379));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),"Loading..."], null):(cljs.core.truth_(cljs.core.deref((function (){var G__27381 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.subs","loading-failed?","endless-ships.subs/loading-failed?",-1156555139)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__27381) : re_frame.core.subscribe.call(null,G__27381));
})()))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),"Failed to load data."], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.app","div.app",-99849286),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.game_version], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.gw_version], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.navigation.navigation], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.current_page], null)], null)))], null)], null)], null);
});

//# sourceMappingURL=endless_ships.views.js.map
