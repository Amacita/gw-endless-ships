goog.provide('endless_ships.utils.tables');
/**
 * Resolve the data within a row for a specific column
 */
endless_ships.utils.tables.cell_data = (function endless_ships$utils$tables$cell_data(row,cell){
var map__28000 = cell;
var map__28000__$1 = cljs.core.__destructure_map(map__28000);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28000__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var expr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28000__$1,new cljs.core.Keyword(null,"expr","expr",745722291));
var or__4223__auto__ = (function (){var and__4221__auto__ = path;
if(cljs.core.truth_(and__4221__auto__)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,path);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
var and__4221__auto__ = expr;
if(cljs.core.truth_(and__4221__auto__)){
return (expr.cljs$core$IFn$_invoke$arity$1 ? expr.cljs$core$IFn$_invoke$arity$1(row) : expr.call(null,row));
} else {
return and__4221__auto__;
}
}
});
/**
 * Return the cell hiccup form for rendering.
 * the specific column from :column-model
 *   - row the current row
 *   - row-num the row number
 *   - col-num the column number in model coordinates
 */
endless_ships.utils.tables.cell_fn = (function endless_ships$utils$tables$cell_fn(render_info,row,row_num,col_num){
var map__28001 = render_info;
var map__28001__$1 = cljs.core.__destructure_map(map__28001);
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28001__$1,new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.identity);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__28001__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
var data = endless_ships.utils.tables.cell_data(row,render_info);
var content = (format.cljs$core$IFn$_invoke$arity$1 ? format.cljs$core$IFn$_invoke$arity$1(data) : format.call(null,data));
var attrs__$1 = (attrs.cljs$core$IFn$_invoke$arity$1 ? attrs.cljs$core$IFn$_invoke$arity$1(data) : attrs.call(null,data));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),attrs__$1,content], null);
});
/**
 * Returns true if the argument is a date, false otherwise.
 */
endless_ships.utils.tables.date_QMARK_ = (function endless_ships$utils$tables$date_QMARK_(d){
return (d instanceof Date);
});
/**
 * Returns something that can be used to order dates.
 */
endless_ships.utils.tables.date_as_sortable = (function endless_ships$utils$tables$date_as_sortable(d){
return d.getTime();
});
/**
 * A comparator that works for the various types found in table structures.
 *   This is a limited implementation that expects the arguments to be of
 *   the same type. The :else case is to call compare, which will throw
 *   if the arguments are not comparable to each other or give undefined
 *   results otherwise.
 *   Both arguments can be a vector, in which case they must be of equal
 *   length and each element is compared in turn.
 */
endless_ships.utils.tables.compare_vals = (function endless_ships$utils$tables$compare_vals(x,y){
if(((cljs.core.vector_QMARK_(x)) && (((cljs.core.vector_QMARK_(y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(x),cljs.core.count(y))))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__28010_SHARP_,p2__28009_SHARP_){
var r = cljs.core.compare(cljs.core.first(p2__28009_SHARP_),cljs.core.second(p2__28009_SHARP_));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(r,(0))){
return cljs.core.reduced(r);
} else {
return r;
}
}),(0),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,x,y));
} else {
if(((((typeof x === 'number') && (typeof y === 'number'))) || (((((typeof x === 'string') && (typeof y === 'string'))) || (((cljs.core.boolean_QMARK_(x)) && (cljs.core.boolean_QMARK_(y)))))))){
return cljs.core.compare(x,y);
} else {
if(((endless_ships.utils.tables.date_QMARK_(x)) && (endless_ships.utils.tables.date_QMARK_(y)))){
return cljs.core.compare(endless_ships.utils.tables.date_as_sortable(x),endless_ships.utils.tables.date_as_sortable(y));
} else {
return cljs.core.compare(x,y);

}
}
}
});
/**
 * Generic sort function for tabular data. Sort rows using data resolved from
 *   the specified columns in the column model.
 */
endless_ships.utils.tables.sort_fn = (function endless_ships$utils$tables$sort_fn(rows,column_model,sorting){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (row_x,row_y){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (_,sort){
var column = (function (){var G__28011 = cljs.core.first(sort);
return (column_model.cljs$core$IFn$_invoke$arity$1 ? column_model.cljs$core$IFn$_invoke$arity$1(G__28011) : column_model.call(null,G__28011));
})();
var direction = cljs.core.second(sort);
var cell_x = endless_ships.utils.tables.cell_data(row_x,column);
var cell_y = endless_ships.utils.tables.cell_data(row_y,column);
var compared = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,new cljs.core.Keyword(null,"asc","asc",356854569)))?endless_ships.utils.tables.compare_vals(cell_x,cell_y):endless_ships.utils.tables.compare_vals(cell_y,cell_x));
if((compared === (0))){
return null;
} else {
return cljs.core.reduced(compared);
}
}),(0),sorting);
}),rows);
});
/**
 * Return the reagent row key for the given row
 */
endless_ships.utils.tables.row_key_fn = (function endless_ships$utils$tables$row_key_fn(row,row_num){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(row,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
});
endless_ships.utils.tables.default_table_config = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"render-cell","render-cell",-515359581),endless_ships.utils.tables.cell_fn,new cljs.core.Keyword(null,"th","th",-545608566),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"scope","scope",-439358418),"col"], null),new cljs.core.Keyword(null,"sort","sort",953465918),endless_ships.utils.tables.sort_fn,new cljs.core.Keyword(null,"row-key","row-key",-1189010712),endless_ships.utils.tables.row_key_fn,new cljs.core.Keyword(null,"column-selection","column-selection",-282189655),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"btn"], null)], null)], null),new cljs.core.Keyword(null,"table","table",-564943036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),"table table-hover table-striped table-bordered table-reactive",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border-spacing","border-spacing",-1602200108),(0),new cljs.core.Keyword(null,"border-collapse","border-collapse",919100239),"separate"], null)], null)], null);

//# sourceMappingURL=endless_ships.utils.tables.js.map
