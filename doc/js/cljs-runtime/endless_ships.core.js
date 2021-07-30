goog.provide('endless_ships.core');
endless_ships.core.render = (function endless_ships$core$render(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endless_ships.views.interface$], null),document.getElementById("root"));
});
endless_ships.core.init = (function endless_ships$core$init(){
var G__28505_28511 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("endless-ships.events","initialize","endless-ships.events/initialize",1940589872)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__28505_28511) : re_frame.core.dispatch_sync.call(null,G__28505_28511));

endless_ships.routes.start_BANG_();

return endless_ships.core.render();
});
endless_ships.core.load = (function endless_ships$core$load(){
(re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0 ? re_frame.core.clear_subscription_cache_BANG_.cljs$core$IFn$_invoke$arity$0() : re_frame.core.clear_subscription_cache_BANG_.call(null));

return endless_ships.core.render();
});

//# sourceMappingURL=endless_ships.core.js.map
