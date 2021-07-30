goog.provide('endless_ships.utils.plugins');
endless_ships.utils.plugins.plugins = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vanilla","vanilla",-554347833),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Endless Sky",new cljs.core.Keyword(null,"resource-dir","resource-dir",-1970398070),"game",new cljs.core.Keyword(null,"repository","repository",1489835364),"https://github.com/endless-sky/endless-sky/",new cljs.core.Keyword(null,"base-image-url","base-image-url",243662337),"https://raw.githubusercontent.com/endless-sky/endless-sky/master/images/"], null),new cljs.core.Keyword(null,"galactic-war","galactic-war",-765738513),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"name","name",1843675177),"Galactic War",new cljs.core.Keyword(null,"resource-dir","resource-dir",-1970398070),"gw",new cljs.core.Keyword(null,"repository","repository",1489835364),"https://github.com/1010todd/Galactic-War/",new cljs.core.Keyword(null,"base-image-url","base-image-url",243662337),"https://raw.githubusercontent.com/1010todd/Galactic-War/master/images/"], null)], null);
endless_ships.utils.plugins.file__GT_plugin = (function endless_ships$utils$plugins$file__GT_plugin(file){
var root = cljs.core.first(clojure.string.split.cljs$core$IFn$_invoke$arity$2(file,"/"));
return (function (p1__28023_SHARP_,p2__28024_SHARP_){
var fexpr__28025 = cljs.core.PersistentArrayMap.createAsIfByAssoc([p1__28023_SHARP_,p2__28024_SHARP_]);
return (fexpr__28025.cljs$core$IFn$_invoke$arity$0 ? fexpr__28025.cljs$core$IFn$_invoke$arity$0() : fexpr__28025.call(null));
})(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__28026){
var vec__28027 = p__28026;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28027,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28027,(1),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resource-dir","resource-dir",-1970398070).cljs$core$IFn$_invoke$arity$1(v),root);
}),endless_ships.utils.plugins.plugins)));
});

//# sourceMappingURL=endless_ships.utils.plugins.js.map
