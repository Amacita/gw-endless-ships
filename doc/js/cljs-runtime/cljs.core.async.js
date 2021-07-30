goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27050 = arguments.length;
switch (G__27050) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27051 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27051 = (function (f,blockable,meta27052){
this.f = f;
this.blockable = blockable;
this.meta27052 = meta27052;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27053,meta27052__$1){
var self__ = this;
var _27053__$1 = this;
return (new cljs.core.async.t_cljs$core$async27051(self__.f,self__.blockable,meta27052__$1));
}));

(cljs.core.async.t_cljs$core$async27051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27053){
var self__ = this;
var _27053__$1 = this;
return self__.meta27052;
}));

(cljs.core.async.t_cljs$core$async27051.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27051.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27051.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27052","meta27052",-969122908,null)], null);
}));

(cljs.core.async.t_cljs$core$async27051.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27051.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27051");

(cljs.core.async.t_cljs$core$async27051.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async27051");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27051.
 */
cljs.core.async.__GT_t_cljs$core$async27051 = (function cljs$core$async$__GT_t_cljs$core$async27051(f__$1,blockable__$1,meta27052){
return (new cljs.core.async.t_cljs$core$async27051(f__$1,blockable__$1,meta27052));
});

}

return (new cljs.core.async.t_cljs$core$async27051(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27070 = arguments.length;
switch (G__27070) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27076 = arguments.length;
switch (G__27076) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27079 = arguments.length;
switch (G__27079) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_29500 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29500) : fn1.call(null,val_29500));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_29500) : fn1.call(null,val_29500));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27085 = arguments.length;
switch (G__27085) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5751__auto__)){
var ret = temp__5751__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5751__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5751__auto__)){
var retb = temp__5751__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4706__auto___29506 = n;
var x_29507 = (0);
while(true){
if((x_29507 < n__4706__auto___29506)){
(a[x_29507] = x_29507);

var G__29509 = (x_29507 + (1));
x_29507 = G__29509;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27086 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27086 = (function (flag,meta27087){
this.flag = flag;
this.meta27087 = meta27087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27088,meta27087__$1){
var self__ = this;
var _27088__$1 = this;
return (new cljs.core.async.t_cljs$core$async27086(self__.flag,meta27087__$1));
}));

(cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27088){
var self__ = this;
var _27088__$1 = this;
return self__.meta27087;
}));

(cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27086.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27087","meta27087",-1535738191,null)], null);
}));

(cljs.core.async.t_cljs$core$async27086.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27086");

(cljs.core.async.t_cljs$core$async27086.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async27086");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27086.
 */
cljs.core.async.__GT_t_cljs$core$async27086 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27086(flag__$1,meta27087){
return (new cljs.core.async.t_cljs$core$async27086(flag__$1,meta27087));
});

}

return (new cljs.core.async.t_cljs$core$async27086(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27089 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27089 = (function (flag,cb,meta27090){
this.flag = flag;
this.cb = cb;
this.meta27090 = meta27090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27091,meta27090__$1){
var self__ = this;
var _27091__$1 = this;
return (new cljs.core.async.t_cljs$core$async27089(self__.flag,self__.cb,meta27090__$1));
}));

(cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27091){
var self__ = this;
var _27091__$1 = this;
return self__.meta27090;
}));

(cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27090","meta27090",-2058694666,null)], null);
}));

(cljs.core.async.t_cljs$core$async27089.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27089");

(cljs.core.async.t_cljs$core$async27089.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async27089");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27089.
 */
cljs.core.async.__GT_t_cljs$core$async27089 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27089(flag__$1,cb__$1,meta27090){
return (new cljs.core.async.t_cljs$core$async27089(flag__$1,cb__$1,meta27090));
});

}

return (new cljs.core.async.t_cljs$core$async27089(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27094_SHARP_){
var G__27096 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27094_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27096) : fret.call(null,G__27096));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27095_SHARP_){
var G__27097 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27095_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__27097) : fret.call(null,G__27097));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4223__auto__ = wport;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return port;
}
})()], null));
} else {
var G__29525 = (i + (1));
i = G__29525;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4223__auto__ = ret;
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5753__auto__ = (function (){var and__4221__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4221__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4221__auto__;
}
})();
if(cljs.core.truth_(temp__5753__auto__)){
var got = temp__5753__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___29526 = arguments.length;
var i__4830__auto___29527 = (0);
while(true){
if((i__4830__auto___29527 < len__4829__auto___29526)){
args__4835__auto__.push((arguments[i__4830__auto___29527]));

var G__29528 = (i__4830__auto___29527 + (1));
i__4830__auto___29527 = G__29528;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((1) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4836__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27100){
var map__27101 = p__27100;
var map__27101__$1 = cljs.core.__destructure_map(map__27101);
var opts = map__27101__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27098){
var G__27099 = cljs.core.first(seq27098);
var seq27098__$1 = cljs.core.next(seq27098);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27099,seq27098__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27106 = arguments.length;
switch (G__27106) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26969__auto___29533 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27167){
var state_val_27168 = (state_27167[(1)]);
if((state_val_27168 === (7))){
var inst_27162 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27172_29534 = state_27167__$1;
(statearr_27172_29534[(2)] = inst_27162);

(statearr_27172_29534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (1))){
var state_27167__$1 = state_27167;
var statearr_27173_29535 = state_27167__$1;
(statearr_27173_29535[(2)] = null);

(statearr_27173_29535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (4))){
var inst_27123 = (state_27167[(7)]);
var inst_27123__$1 = (state_27167[(2)]);
var inst_27146 = (inst_27123__$1 == null);
var state_27167__$1 = (function (){var statearr_27174 = state_27167;
(statearr_27174[(7)] = inst_27123__$1);

return statearr_27174;
})();
if(cljs.core.truth_(inst_27146)){
var statearr_27175_29537 = state_27167__$1;
(statearr_27175_29537[(1)] = (5));

} else {
var statearr_27176_29538 = state_27167__$1;
(statearr_27176_29538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (13))){
var state_27167__$1 = state_27167;
var statearr_27177_29539 = state_27167__$1;
(statearr_27177_29539[(2)] = null);

(statearr_27177_29539[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (6))){
var inst_27123 = (state_27167[(7)]);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27167__$1,(11),to,inst_27123);
} else {
if((state_val_27168 === (3))){
var inst_27164 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27167__$1,inst_27164);
} else {
if((state_val_27168 === (12))){
var state_27167__$1 = state_27167;
var statearr_27181_29540 = state_27167__$1;
(statearr_27181_29540[(2)] = null);

(statearr_27181_29540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (2))){
var state_27167__$1 = state_27167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27167__$1,(4),from);
} else {
if((state_val_27168 === (11))){
var inst_27155 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
if(cljs.core.truth_(inst_27155)){
var statearr_27182_29541 = state_27167__$1;
(statearr_27182_29541[(1)] = (12));

} else {
var statearr_27183_29542 = state_27167__$1;
(statearr_27183_29542[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (9))){
var state_27167__$1 = state_27167;
var statearr_27184_29543 = state_27167__$1;
(statearr_27184_29543[(2)] = null);

(statearr_27184_29543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (5))){
var state_27167__$1 = state_27167;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27185_29544 = state_27167__$1;
(statearr_27185_29544[(1)] = (8));

} else {
var statearr_27186_29545 = state_27167__$1;
(statearr_27186_29545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (14))){
var inst_27160 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27187_29546 = state_27167__$1;
(statearr_27187_29546[(2)] = inst_27160);

(statearr_27187_29546[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (10))){
var inst_27152 = (state_27167[(2)]);
var state_27167__$1 = state_27167;
var statearr_27188_29550 = state_27167__$1;
(statearr_27188_29550[(2)] = inst_27152);

(statearr_27188_29550[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27168 === (8))){
var inst_27149 = cljs.core.async.close_BANG_(to);
var state_27167__$1 = state_27167;
var statearr_27189_29551 = state_27167__$1;
(statearr_27189_29551[(2)] = inst_27149);

(statearr_27189_29551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_27193 = [null,null,null,null,null,null,null,null];
(statearr_27193[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_27193[(1)] = (1));

return statearr_27193;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_27167){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27167);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27194){var ex__26683__auto__ = e27194;
var statearr_27195_29552 = state_27167;
(statearr_27195_29552[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27167[(4)]))){
var statearr_27196_29553 = state_27167;
(statearr_27196_29553[(1)] = cljs.core.first((state_27167[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29556 = state_27167;
state_27167 = G__29556;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_27167){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_27167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27197 = f__26970__auto__();
(statearr_27197[(6)] = c__26969__auto___29533);

return statearr_27197;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__27198){
var vec__27199 = p__27198;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27199,(1),null);
var job = vec__27199;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__26969__auto___29558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27206){
var state_val_27207 = (state_27206[(1)]);
if((state_val_27207 === (1))){
var state_27206__$1 = state_27206;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27206__$1,(2),res,v);
} else {
if((state_val_27207 === (2))){
var inst_27203 = (state_27206[(2)]);
var inst_27204 = cljs.core.async.close_BANG_(res);
var state_27206__$1 = (function (){var statearr_27209 = state_27206;
(statearr_27209[(7)] = inst_27203);

return statearr_27209;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_27206__$1,inst_27204);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0 = (function (){
var statearr_27210 = [null,null,null,null,null,null,null,null];
(statearr_27210[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__);

(statearr_27210[(1)] = (1));

return statearr_27210;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1 = (function (state_27206){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27206);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27212){var ex__26683__auto__ = e27212;
var statearr_27224_29560 = state_27206;
(statearr_27224_29560[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27206[(4)]))){
var statearr_27225_29561 = state_27206;
(statearr_27225_29561[(1)] = cljs.core.first((state_27206[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29563 = state_27206;
state_27206 = G__29563;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = function(state_27206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1.call(this,state_27206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27226 = f__26970__auto__();
(statearr_27226[(6)] = c__26969__auto___29558);

return statearr_27226;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__27227){
var vec__27228 = p__27227;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__27228,(1),null);
var job = vec__27228;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4706__auto___29566 = n;
var __29567 = (0);
while(true){
if((__29567 < n__4706__auto___29566)){
var G__27231_29568 = type;
var G__27231_29569__$1 = (((G__27231_29568 instanceof cljs.core.Keyword))?G__27231_29568.fqn:null);
switch (G__27231_29569__$1) {
case "compute":
var c__26969__auto___29571 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29567,c__26969__auto___29571,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async){
return (function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = ((function (__29567,c__26969__auto___29571,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async){
return (function (state_27244){
var state_val_27245 = (state_27244[(1)]);
if((state_val_27245 === (1))){
var state_27244__$1 = state_27244;
var statearr_27246_29572 = state_27244__$1;
(statearr_27246_29572[(2)] = null);

(statearr_27246_29572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (2))){
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27244__$1,(4),jobs);
} else {
if((state_val_27245 === (3))){
var inst_27242 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27244__$1,inst_27242);
} else {
if((state_val_27245 === (4))){
var inst_27234 = (state_27244[(2)]);
var inst_27235 = process(inst_27234);
var state_27244__$1 = state_27244;
if(cljs.core.truth_(inst_27235)){
var statearr_27247_29574 = state_27244__$1;
(statearr_27247_29574[(1)] = (5));

} else {
var statearr_27248_29575 = state_27244__$1;
(statearr_27248_29575[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (5))){
var state_27244__$1 = state_27244;
var statearr_27249_29577 = state_27244__$1;
(statearr_27249_29577[(2)] = null);

(statearr_27249_29577[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (6))){
var state_27244__$1 = state_27244;
var statearr_27250_29578 = state_27244__$1;
(statearr_27250_29578[(2)] = null);

(statearr_27250_29578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27245 === (7))){
var inst_27240 = (state_27244[(2)]);
var state_27244__$1 = state_27244;
var statearr_27251_29579 = state_27244__$1;
(statearr_27251_29579[(2)] = inst_27240);

(statearr_27251_29579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29567,c__26969__auto___29571,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async))
;
return ((function (__29567,switch__26679__auto__,c__26969__auto___29571,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0 = (function (){
var statearr_27255 = [null,null,null,null,null,null,null];
(statearr_27255[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__);

(statearr_27255[(1)] = (1));

return statearr_27255;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1 = (function (state_27244){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27244);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27259){var ex__26683__auto__ = e27259;
var statearr_27260_29580 = state_27244;
(statearr_27260_29580[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27244[(4)]))){
var statearr_27261_29581 = state_27244;
(statearr_27261_29581[(1)] = cljs.core.first((state_27244[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29582 = state_27244;
state_27244 = G__29582;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = function(state_27244){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1.call(this,state_27244);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__;
})()
;})(__29567,switch__26679__auto__,c__26969__auto___29571,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async))
})();
var state__26971__auto__ = (function (){var statearr_27269 = f__26970__auto__();
(statearr_27269[(6)] = c__26969__auto___29571);

return statearr_27269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
});})(__29567,c__26969__auto___29571,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async))
);


break;
case "async":
var c__26969__auto___29584 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__29567,c__26969__auto___29584,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async){
return (function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = ((function (__29567,c__26969__auto___29584,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async){
return (function (state_27285){
var state_val_27286 = (state_27285[(1)]);
if((state_val_27286 === (1))){
var state_27285__$1 = state_27285;
var statearr_27287_29586 = state_27285__$1;
(statearr_27287_29586[(2)] = null);

(statearr_27287_29586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27286 === (2))){
var state_27285__$1 = state_27285;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27285__$1,(4),jobs);
} else {
if((state_val_27286 === (3))){
var inst_27283 = (state_27285[(2)]);
var state_27285__$1 = state_27285;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27285__$1,inst_27283);
} else {
if((state_val_27286 === (4))){
var inst_27275 = (state_27285[(2)]);
var inst_27276 = async(inst_27275);
var state_27285__$1 = state_27285;
if(cljs.core.truth_(inst_27276)){
var statearr_27288_29587 = state_27285__$1;
(statearr_27288_29587[(1)] = (5));

} else {
var statearr_27289_29588 = state_27285__$1;
(statearr_27289_29588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27286 === (5))){
var state_27285__$1 = state_27285;
var statearr_27290_29589 = state_27285__$1;
(statearr_27290_29589[(2)] = null);

(statearr_27290_29589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27286 === (6))){
var state_27285__$1 = state_27285;
var statearr_27291_29590 = state_27285__$1;
(statearr_27291_29590[(2)] = null);

(statearr_27291_29590[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27286 === (7))){
var inst_27281 = (state_27285[(2)]);
var state_27285__$1 = state_27285;
var statearr_27292_29591 = state_27285__$1;
(statearr_27292_29591[(2)] = inst_27281);

(statearr_27292_29591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__29567,c__26969__auto___29584,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async))
;
return ((function (__29567,switch__26679__auto__,c__26969__auto___29584,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0 = (function (){
var statearr_27293 = [null,null,null,null,null,null,null];
(statearr_27293[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__);

(statearr_27293[(1)] = (1));

return statearr_27293;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1 = (function (state_27285){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27285);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27294){var ex__26683__auto__ = e27294;
var statearr_27295_29592 = state_27285;
(statearr_27295_29592[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27285[(4)]))){
var statearr_27296_29593 = state_27285;
(statearr_27296_29593[(1)] = cljs.core.first((state_27285[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29595 = state_27285;
state_27285 = G__29595;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = function(state_27285){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1.call(this,state_27285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__;
})()
;})(__29567,switch__26679__auto__,c__26969__auto___29584,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async))
})();
var state__26971__auto__ = (function (){var statearr_27297 = f__26970__auto__();
(statearr_27297[(6)] = c__26969__auto___29584);

return statearr_27297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
});})(__29567,c__26969__auto___29584,G__27231_29568,G__27231_29569__$1,n__4706__auto___29566,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27231_29569__$1)].join('')));

}

var G__29597 = (__29567 + (1));
__29567 = G__29597;
continue;
} else {
}
break;
}

var c__26969__auto___29598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27325){
var state_val_27326 = (state_27325[(1)]);
if((state_val_27326 === (7))){
var inst_27321 = (state_27325[(2)]);
var state_27325__$1 = state_27325;
var statearr_27327_29599 = state_27325__$1;
(statearr_27327_29599[(2)] = inst_27321);

(statearr_27327_29599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (1))){
var state_27325__$1 = state_27325;
var statearr_27328_29600 = state_27325__$1;
(statearr_27328_29600[(2)] = null);

(statearr_27328_29600[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (4))){
var inst_27300 = (state_27325[(7)]);
var inst_27300__$1 = (state_27325[(2)]);
var inst_27301 = (inst_27300__$1 == null);
var state_27325__$1 = (function (){var statearr_27329 = state_27325;
(statearr_27329[(7)] = inst_27300__$1);

return statearr_27329;
})();
if(cljs.core.truth_(inst_27301)){
var statearr_27330_29602 = state_27325__$1;
(statearr_27330_29602[(1)] = (5));

} else {
var statearr_27331_29603 = state_27325__$1;
(statearr_27331_29603[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (6))){
var inst_27300 = (state_27325[(7)]);
var inst_27305 = (state_27325[(8)]);
var inst_27305__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_27306 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27307 = [inst_27300,inst_27305__$1];
var inst_27308 = (new cljs.core.PersistentVector(null,2,(5),inst_27306,inst_27307,null));
var state_27325__$1 = (function (){var statearr_27341 = state_27325;
(statearr_27341[(8)] = inst_27305__$1);

return statearr_27341;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27325__$1,(8),jobs,inst_27308);
} else {
if((state_val_27326 === (3))){
var inst_27323 = (state_27325[(2)]);
var state_27325__$1 = state_27325;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27325__$1,inst_27323);
} else {
if((state_val_27326 === (2))){
var state_27325__$1 = state_27325;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27325__$1,(4),from);
} else {
if((state_val_27326 === (9))){
var inst_27318 = (state_27325[(2)]);
var state_27325__$1 = (function (){var statearr_27342 = state_27325;
(statearr_27342[(9)] = inst_27318);

return statearr_27342;
})();
var statearr_27343_29606 = state_27325__$1;
(statearr_27343_29606[(2)] = null);

(statearr_27343_29606[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (5))){
var inst_27303 = cljs.core.async.close_BANG_(jobs);
var state_27325__$1 = state_27325;
var statearr_27344_29607 = state_27325__$1;
(statearr_27344_29607[(2)] = inst_27303);

(statearr_27344_29607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27326 === (8))){
var inst_27305 = (state_27325[(8)]);
var inst_27310 = (state_27325[(2)]);
var state_27325__$1 = (function (){var statearr_27345 = state_27325;
(statearr_27345[(10)] = inst_27310);

return statearr_27345;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27325__$1,(9),results,inst_27305);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0 = (function (){
var statearr_27346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27346[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__);

(statearr_27346[(1)] = (1));

return statearr_27346;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1 = (function (state_27325){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27325);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27347){var ex__26683__auto__ = e27347;
var statearr_27348_29608 = state_27325;
(statearr_27348_29608[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27325[(4)]))){
var statearr_27349_29609 = state_27325;
(statearr_27349_29609[(1)] = cljs.core.first((state_27325[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29610 = state_27325;
state_27325 = G__29610;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = function(state_27325){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1.call(this,state_27325);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27353 = f__26970__auto__();
(statearr_27353[(6)] = c__26969__auto___29598);

return statearr_27353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


var c__26969__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27394){
var state_val_27395 = (state_27394[(1)]);
if((state_val_27395 === (7))){
var inst_27390 = (state_27394[(2)]);
var state_27394__$1 = state_27394;
var statearr_27399_29611 = state_27394__$1;
(statearr_27399_29611[(2)] = inst_27390);

(statearr_27399_29611[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (20))){
var state_27394__$1 = state_27394;
var statearr_27401_29613 = state_27394__$1;
(statearr_27401_29613[(2)] = null);

(statearr_27401_29613[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (1))){
var state_27394__$1 = state_27394;
var statearr_27402_29614 = state_27394__$1;
(statearr_27402_29614[(2)] = null);

(statearr_27402_29614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (4))){
var inst_27356 = (state_27394[(7)]);
var inst_27356__$1 = (state_27394[(2)]);
var inst_27357 = (inst_27356__$1 == null);
var state_27394__$1 = (function (){var statearr_27403 = state_27394;
(statearr_27403[(7)] = inst_27356__$1);

return statearr_27403;
})();
if(cljs.core.truth_(inst_27357)){
var statearr_27410_29615 = state_27394__$1;
(statearr_27410_29615[(1)] = (5));

} else {
var statearr_27411_29616 = state_27394__$1;
(statearr_27411_29616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (15))){
var inst_27372 = (state_27394[(8)]);
var state_27394__$1 = state_27394;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27394__$1,(18),to,inst_27372);
} else {
if((state_val_27395 === (21))){
var inst_27385 = (state_27394[(2)]);
var state_27394__$1 = state_27394;
var statearr_27412_29617 = state_27394__$1;
(statearr_27412_29617[(2)] = inst_27385);

(statearr_27412_29617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (13))){
var inst_27387 = (state_27394[(2)]);
var state_27394__$1 = (function (){var statearr_27413 = state_27394;
(statearr_27413[(9)] = inst_27387);

return statearr_27413;
})();
var statearr_27414_29619 = state_27394__$1;
(statearr_27414_29619[(2)] = null);

(statearr_27414_29619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (6))){
var inst_27356 = (state_27394[(7)]);
var state_27394__$1 = state_27394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27394__$1,(11),inst_27356);
} else {
if((state_val_27395 === (17))){
var inst_27380 = (state_27394[(2)]);
var state_27394__$1 = state_27394;
if(cljs.core.truth_(inst_27380)){
var statearr_27415_29621 = state_27394__$1;
(statearr_27415_29621[(1)] = (19));

} else {
var statearr_27416_29622 = state_27394__$1;
(statearr_27416_29622[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (3))){
var inst_27392 = (state_27394[(2)]);
var state_27394__$1 = state_27394;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27394__$1,inst_27392);
} else {
if((state_val_27395 === (12))){
var inst_27366 = (state_27394[(10)]);
var state_27394__$1 = state_27394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27394__$1,(14),inst_27366);
} else {
if((state_val_27395 === (2))){
var state_27394__$1 = state_27394;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27394__$1,(4),results);
} else {
if((state_val_27395 === (19))){
var state_27394__$1 = state_27394;
var statearr_27417_29623 = state_27394__$1;
(statearr_27417_29623[(2)] = null);

(statearr_27417_29623[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (11))){
var inst_27366 = (state_27394[(2)]);
var state_27394__$1 = (function (){var statearr_27418 = state_27394;
(statearr_27418[(10)] = inst_27366);

return statearr_27418;
})();
var statearr_27419_29624 = state_27394__$1;
(statearr_27419_29624[(2)] = null);

(statearr_27419_29624[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (9))){
var state_27394__$1 = state_27394;
var statearr_27420_29625 = state_27394__$1;
(statearr_27420_29625[(2)] = null);

(statearr_27420_29625[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (5))){
var state_27394__$1 = state_27394;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27421_29627 = state_27394__$1;
(statearr_27421_29627[(1)] = (8));

} else {
var statearr_27422_29628 = state_27394__$1;
(statearr_27422_29628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (14))){
var inst_27374 = (state_27394[(11)]);
var inst_27372 = (state_27394[(8)]);
var inst_27372__$1 = (state_27394[(2)]);
var inst_27373 = (inst_27372__$1 == null);
var inst_27374__$1 = cljs.core.not(inst_27373);
var state_27394__$1 = (function (){var statearr_27429 = state_27394;
(statearr_27429[(11)] = inst_27374__$1);

(statearr_27429[(8)] = inst_27372__$1);

return statearr_27429;
})();
if(inst_27374__$1){
var statearr_27430_29629 = state_27394__$1;
(statearr_27430_29629[(1)] = (15));

} else {
var statearr_27431_29630 = state_27394__$1;
(statearr_27431_29630[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (16))){
var inst_27374 = (state_27394[(11)]);
var state_27394__$1 = state_27394;
var statearr_27432_29631 = state_27394__$1;
(statearr_27432_29631[(2)] = inst_27374);

(statearr_27432_29631[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (10))){
var inst_27363 = (state_27394[(2)]);
var state_27394__$1 = state_27394;
var statearr_27433_29632 = state_27394__$1;
(statearr_27433_29632[(2)] = inst_27363);

(statearr_27433_29632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (18))){
var inst_27377 = (state_27394[(2)]);
var state_27394__$1 = state_27394;
var statearr_27434_29633 = state_27394__$1;
(statearr_27434_29633[(2)] = inst_27377);

(statearr_27434_29633[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27395 === (8))){
var inst_27360 = cljs.core.async.close_BANG_(to);
var state_27394__$1 = state_27394;
var statearr_27435_29638 = state_27394__$1;
(statearr_27435_29638[(2)] = inst_27360);

(statearr_27435_29638[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0 = (function (){
var statearr_27436 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__);

(statearr_27436[(1)] = (1));

return statearr_27436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1 = (function (state_27394){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27394);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27437){var ex__26683__auto__ = e27437;
var statearr_27438_29639 = state_27394;
(statearr_27438_29639[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27394[(4)]))){
var statearr_27439_29640 = state_27394;
(statearr_27439_29640[(1)] = cljs.core.first((state_27394[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29641 = state_27394;
state_27394 = G__29641;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__ = function(state_27394){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1.call(this,state_27394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__26680__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27443 = f__26970__auto__();
(statearr_27443[(6)] = c__26969__auto__);

return statearr_27443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));

return c__26969__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27445 = arguments.length;
switch (G__27445) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27450 = arguments.length;
switch (G__27450) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27458 = arguments.length;
switch (G__27458) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__26969__auto___29647 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27489){
var state_val_27490 = (state_27489[(1)]);
if((state_val_27490 === (7))){
var inst_27485 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27496_29648 = state_27489__$1;
(statearr_27496_29648[(2)] = inst_27485);

(statearr_27496_29648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (1))){
var state_27489__$1 = state_27489;
var statearr_27497_29655 = state_27489__$1;
(statearr_27497_29655[(2)] = null);

(statearr_27497_29655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (4))){
var inst_27464 = (state_27489[(7)]);
var inst_27464__$1 = (state_27489[(2)]);
var inst_27465 = (inst_27464__$1 == null);
var state_27489__$1 = (function (){var statearr_27498 = state_27489;
(statearr_27498[(7)] = inst_27464__$1);

return statearr_27498;
})();
if(cljs.core.truth_(inst_27465)){
var statearr_27499_29656 = state_27489__$1;
(statearr_27499_29656[(1)] = (5));

} else {
var statearr_27500_29657 = state_27489__$1;
(statearr_27500_29657[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (13))){
var state_27489__$1 = state_27489;
var statearr_27501_29658 = state_27489__$1;
(statearr_27501_29658[(2)] = null);

(statearr_27501_29658[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (6))){
var inst_27464 = (state_27489[(7)]);
var inst_27472 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_27464) : p.call(null,inst_27464));
var state_27489__$1 = state_27489;
if(cljs.core.truth_(inst_27472)){
var statearr_27502_29659 = state_27489__$1;
(statearr_27502_29659[(1)] = (9));

} else {
var statearr_27503_29660 = state_27489__$1;
(statearr_27503_29660[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (3))){
var inst_27487 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27489__$1,inst_27487);
} else {
if((state_val_27490 === (12))){
var state_27489__$1 = state_27489;
var statearr_27516_29661 = state_27489__$1;
(statearr_27516_29661[(2)] = null);

(statearr_27516_29661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (2))){
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27489__$1,(4),ch);
} else {
if((state_val_27490 === (11))){
var inst_27464 = (state_27489[(7)]);
var inst_27476 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27489__$1,(8),inst_27476,inst_27464);
} else {
if((state_val_27490 === (9))){
var state_27489__$1 = state_27489;
var statearr_27517_29664 = state_27489__$1;
(statearr_27517_29664[(2)] = tc);

(statearr_27517_29664[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (5))){
var inst_27467 = cljs.core.async.close_BANG_(tc);
var inst_27468 = cljs.core.async.close_BANG_(fc);
var state_27489__$1 = (function (){var statearr_27518 = state_27489;
(statearr_27518[(8)] = inst_27467);

return statearr_27518;
})();
var statearr_27519_29665 = state_27489__$1;
(statearr_27519_29665[(2)] = inst_27468);

(statearr_27519_29665[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (14))){
var inst_27483 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
var statearr_27520_29666 = state_27489__$1;
(statearr_27520_29666[(2)] = inst_27483);

(statearr_27520_29666[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (10))){
var state_27489__$1 = state_27489;
var statearr_27521_29667 = state_27489__$1;
(statearr_27521_29667[(2)] = fc);

(statearr_27521_29667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27490 === (8))){
var inst_27478 = (state_27489[(2)]);
var state_27489__$1 = state_27489;
if(cljs.core.truth_(inst_27478)){
var statearr_27522_29668 = state_27489__$1;
(statearr_27522_29668[(1)] = (12));

} else {
var statearr_27523_29669 = state_27489__$1;
(statearr_27523_29669[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_27525 = [null,null,null,null,null,null,null,null,null];
(statearr_27525[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_27525[(1)] = (1));

return statearr_27525;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_27489){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27489);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27526){var ex__26683__auto__ = e27526;
var statearr_27527_29670 = state_27489;
(statearr_27527_29670[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27489[(4)]))){
var statearr_27528_29671 = state_27489;
(statearr_27528_29671[(1)] = cljs.core.first((state_27489[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29672 = state_27489;
state_27489 = G__29672;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_27489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_27489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27529 = f__26970__auto__();
(statearr_27529[(6)] = c__26969__auto___29647);

return statearr_27529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26969__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27552){
var state_val_27553 = (state_27552[(1)]);
if((state_val_27553 === (7))){
var inst_27548 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27554_29677 = state_27552__$1;
(statearr_27554_29677[(2)] = inst_27548);

(statearr_27554_29677[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (1))){
var inst_27531 = init;
var inst_27532 = inst_27531;
var state_27552__$1 = (function (){var statearr_27558 = state_27552;
(statearr_27558[(7)] = inst_27532);

return statearr_27558;
})();
var statearr_27559_29681 = state_27552__$1;
(statearr_27559_29681[(2)] = null);

(statearr_27559_29681[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (4))){
var inst_27535 = (state_27552[(8)]);
var inst_27535__$1 = (state_27552[(2)]);
var inst_27536 = (inst_27535__$1 == null);
var state_27552__$1 = (function (){var statearr_27560 = state_27552;
(statearr_27560[(8)] = inst_27535__$1);

return statearr_27560;
})();
if(cljs.core.truth_(inst_27536)){
var statearr_27561_29682 = state_27552__$1;
(statearr_27561_29682[(1)] = (5));

} else {
var statearr_27562_29687 = state_27552__$1;
(statearr_27562_29687[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (6))){
var inst_27535 = (state_27552[(8)]);
var inst_27539 = (state_27552[(9)]);
var inst_27532 = (state_27552[(7)]);
var inst_27539__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_27532,inst_27535) : f.call(null,inst_27532,inst_27535));
var inst_27540 = cljs.core.reduced_QMARK_(inst_27539__$1);
var state_27552__$1 = (function (){var statearr_27563 = state_27552;
(statearr_27563[(9)] = inst_27539__$1);

return statearr_27563;
})();
if(inst_27540){
var statearr_27567_29695 = state_27552__$1;
(statearr_27567_29695[(1)] = (8));

} else {
var statearr_27568_29699 = state_27552__$1;
(statearr_27568_29699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (3))){
var inst_27550 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27552__$1,inst_27550);
} else {
if((state_val_27553 === (2))){
var state_27552__$1 = state_27552;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27552__$1,(4),ch);
} else {
if((state_val_27553 === (9))){
var inst_27539 = (state_27552[(9)]);
var inst_27532 = inst_27539;
var state_27552__$1 = (function (){var statearr_27571 = state_27552;
(statearr_27571[(7)] = inst_27532);

return statearr_27571;
})();
var statearr_27572_29700 = state_27552__$1;
(statearr_27572_29700[(2)] = null);

(statearr_27572_29700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (5))){
var inst_27532 = (state_27552[(7)]);
var state_27552__$1 = state_27552;
var statearr_27574_29704 = state_27552__$1;
(statearr_27574_29704[(2)] = inst_27532);

(statearr_27574_29704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (10))){
var inst_27546 = (state_27552[(2)]);
var state_27552__$1 = state_27552;
var statearr_27575_29705 = state_27552__$1;
(statearr_27575_29705[(2)] = inst_27546);

(statearr_27575_29705[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27553 === (8))){
var inst_27539 = (state_27552[(9)]);
var inst_27542 = cljs.core.deref(inst_27539);
var state_27552__$1 = state_27552;
var statearr_27576_29706 = state_27552__$1;
(statearr_27576_29706[(2)] = inst_27542);

(statearr_27576_29706[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__26680__auto__ = null;
var cljs$core$async$reduce_$_state_machine__26680__auto____0 = (function (){
var statearr_27581 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27581[(0)] = cljs$core$async$reduce_$_state_machine__26680__auto__);

(statearr_27581[(1)] = (1));

return statearr_27581;
});
var cljs$core$async$reduce_$_state_machine__26680__auto____1 = (function (state_27552){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27552);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27582){var ex__26683__auto__ = e27582;
var statearr_27583_29718 = state_27552;
(statearr_27583_29718[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27552[(4)]))){
var statearr_27584_29722 = state_27552;
(statearr_27584_29722[(1)] = cljs.core.first((state_27552[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29723 = state_27552;
state_27552 = G__29723;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__26680__auto__ = function(state_27552){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__26680__auto____1.call(this,state_27552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__26680__auto____0;
cljs$core$async$reduce_$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__26680__auto____1;
return cljs$core$async$reduce_$_state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27585 = f__26970__auto__();
(statearr_27585[(6)] = c__26969__auto__);

return statearr_27585;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));

return c__26969__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__26969__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27595){
var state_val_27596 = (state_27595[(1)]);
if((state_val_27596 === (1))){
var inst_27590 = cljs.core.async.reduce(f__$1,init,ch);
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27595__$1,(2),inst_27590);
} else {
if((state_val_27596 === (2))){
var inst_27592 = (state_27595[(2)]);
var inst_27593 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_27592) : f__$1.call(null,inst_27592));
var state_27595__$1 = state_27595;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27595__$1,inst_27593);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__26680__auto__ = null;
var cljs$core$async$transduce_$_state_machine__26680__auto____0 = (function (){
var statearr_27597 = [null,null,null,null,null,null,null];
(statearr_27597[(0)] = cljs$core$async$transduce_$_state_machine__26680__auto__);

(statearr_27597[(1)] = (1));

return statearr_27597;
});
var cljs$core$async$transduce_$_state_machine__26680__auto____1 = (function (state_27595){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27595);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27598){var ex__26683__auto__ = e27598;
var statearr_27600_29738 = state_27595;
(statearr_27600_29738[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27595[(4)]))){
var statearr_27601_29743 = state_27595;
(statearr_27601_29743[(1)] = cljs.core.first((state_27595[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29744 = state_27595;
state_27595 = G__29744;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__26680__auto__ = function(state_27595){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__26680__auto____1.call(this,state_27595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__26680__auto____0;
cljs$core$async$transduce_$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__26680__auto____1;
return cljs$core$async$transduce_$_state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27602 = f__26970__auto__();
(statearr_27602[(6)] = c__26969__auto__);

return statearr_27602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));

return c__26969__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__27604 = arguments.length;
switch (G__27604) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26969__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27633){
var state_val_27634 = (state_27633[(1)]);
if((state_val_27634 === (7))){
var inst_27615 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
var statearr_27639_29749 = state_27633__$1;
(statearr_27639_29749[(2)] = inst_27615);

(statearr_27639_29749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (1))){
var inst_27609 = cljs.core.seq(coll);
var inst_27610 = inst_27609;
var state_27633__$1 = (function (){var statearr_27640 = state_27633;
(statearr_27640[(7)] = inst_27610);

return statearr_27640;
})();
var statearr_27641_29754 = state_27633__$1;
(statearr_27641_29754[(2)] = null);

(statearr_27641_29754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (4))){
var inst_27610 = (state_27633[(7)]);
var inst_27613 = cljs.core.first(inst_27610);
var state_27633__$1 = state_27633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_27633__$1,(7),ch,inst_27613);
} else {
if((state_val_27634 === (13))){
var inst_27627 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
var statearr_27642_29758 = state_27633__$1;
(statearr_27642_29758[(2)] = inst_27627);

(statearr_27642_29758[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (6))){
var inst_27618 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
if(cljs.core.truth_(inst_27618)){
var statearr_27643_29760 = state_27633__$1;
(statearr_27643_29760[(1)] = (8));

} else {
var statearr_27644_29761 = state_27633__$1;
(statearr_27644_29761[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (3))){
var inst_27631 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27633__$1,inst_27631);
} else {
if((state_val_27634 === (12))){
var state_27633__$1 = state_27633;
var statearr_27645_29763 = state_27633__$1;
(statearr_27645_29763[(2)] = null);

(statearr_27645_29763[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (2))){
var inst_27610 = (state_27633[(7)]);
var state_27633__$1 = state_27633;
if(cljs.core.truth_(inst_27610)){
var statearr_27647_29765 = state_27633__$1;
(statearr_27647_29765[(1)] = (4));

} else {
var statearr_27648_29766 = state_27633__$1;
(statearr_27648_29766[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (11))){
var inst_27624 = cljs.core.async.close_BANG_(ch);
var state_27633__$1 = state_27633;
var statearr_27649_29773 = state_27633__$1;
(statearr_27649_29773[(2)] = inst_27624);

(statearr_27649_29773[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (9))){
var state_27633__$1 = state_27633;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27653_29776 = state_27633__$1;
(statearr_27653_29776[(1)] = (11));

} else {
var statearr_27654_29780 = state_27633__$1;
(statearr_27654_29780[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (5))){
var inst_27610 = (state_27633[(7)]);
var state_27633__$1 = state_27633;
var statearr_27655_29781 = state_27633__$1;
(statearr_27655_29781[(2)] = inst_27610);

(statearr_27655_29781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (10))){
var inst_27629 = (state_27633[(2)]);
var state_27633__$1 = state_27633;
var statearr_27656_29782 = state_27633__$1;
(statearr_27656_29782[(2)] = inst_27629);

(statearr_27656_29782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27634 === (8))){
var inst_27610 = (state_27633[(7)]);
var inst_27620 = cljs.core.next(inst_27610);
var inst_27610__$1 = inst_27620;
var state_27633__$1 = (function (){var statearr_27657 = state_27633;
(statearr_27657[(7)] = inst_27610__$1);

return statearr_27657;
})();
var statearr_27658_29786 = state_27633__$1;
(statearr_27658_29786[(2)] = null);

(statearr_27658_29786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_27663 = [null,null,null,null,null,null,null,null];
(statearr_27663[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_27663[(1)] = (1));

return statearr_27663;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_27633){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27633);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27664){var ex__26683__auto__ = e27664;
var statearr_27665_29792 = state_27633;
(statearr_27665_29792[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27633[(4)]))){
var statearr_27666_29795 = state_27633;
(statearr_27666_29795[(1)] = cljs.core.first((state_27633[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29797 = state_27633;
state_27633 = G__29797;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_27633){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_27633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27667 = f__26970__auto__();
(statearr_27667[(6)] = c__26969__auto__);

return statearr_27667;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));

return c__26969__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27669 = arguments.length;
switch (G__27669) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_29799 = (function (_){
var x__4521__auto__ = (((_ == null))?null:_);
var m__4522__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4522__auto__.call(null,_));
} else {
var m__4519__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4519__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_29799(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_29807 = (function (m,ch,close_QMARK_){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4522__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4519__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_29807(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_29829 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_29829(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_29832 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_29832(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27685 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27685 = (function (ch,cs,meta27686){
this.ch = ch;
this.cs = cs;
this.meta27686 = meta27686;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27687,meta27686__$1){
var self__ = this;
var _27687__$1 = this;
return (new cljs.core.async.t_cljs$core$async27685(self__.ch,self__.cs,meta27686__$1));
}));

(cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27687){
var self__ = this;
var _27687__$1 = this;
return self__.meta27686;
}));

(cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27685.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27685.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27686","meta27686",-881032349,null)], null);
}));

(cljs.core.async.t_cljs$core$async27685.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27685.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27685");

(cljs.core.async.t_cljs$core$async27685.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async27685");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27685.
 */
cljs.core.async.__GT_t_cljs$core$async27685 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27685(ch__$1,cs__$1,meta27686){
return (new cljs.core.async.t_cljs$core$async27685(ch__$1,cs__$1,meta27686));
});

}

return (new cljs.core.async.t_cljs$core$async27685(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__26969__auto___29841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_27866){
var state_val_27867 = (state_27866[(1)]);
if((state_val_27867 === (7))){
var inst_27862 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27868_29843 = state_27866__$1;
(statearr_27868_29843[(2)] = inst_27862);

(statearr_27868_29843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (20))){
var inst_27765 = (state_27866[(7)]);
var inst_27777 = cljs.core.first(inst_27765);
var inst_27779 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27777,(0),null);
var inst_27780 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27777,(1),null);
var state_27866__$1 = (function (){var statearr_27869 = state_27866;
(statearr_27869[(8)] = inst_27779);

return statearr_27869;
})();
if(cljs.core.truth_(inst_27780)){
var statearr_27874_29847 = state_27866__$1;
(statearr_27874_29847[(1)] = (22));

} else {
var statearr_27875_29848 = state_27866__$1;
(statearr_27875_29848[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (27))){
var inst_27734 = (state_27866[(9)]);
var inst_27810 = (state_27866[(10)]);
var inst_27815 = (state_27866[(11)]);
var inst_27808 = (state_27866[(12)]);
var inst_27815__$1 = cljs.core._nth(inst_27808,inst_27810);
var inst_27816 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27815__$1,inst_27734,done);
var state_27866__$1 = (function (){var statearr_27876 = state_27866;
(statearr_27876[(11)] = inst_27815__$1);

return statearr_27876;
})();
if(cljs.core.truth_(inst_27816)){
var statearr_27877_29853 = state_27866__$1;
(statearr_27877_29853[(1)] = (30));

} else {
var statearr_27878_29854 = state_27866__$1;
(statearr_27878_29854[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (1))){
var state_27866__$1 = state_27866;
var statearr_27879_29855 = state_27866__$1;
(statearr_27879_29855[(2)] = null);

(statearr_27879_29855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (24))){
var inst_27765 = (state_27866[(7)]);
var inst_27785 = (state_27866[(2)]);
var inst_27786 = cljs.core.next(inst_27765);
var inst_27743 = inst_27786;
var inst_27744 = null;
var inst_27745 = (0);
var inst_27746 = (0);
var state_27866__$1 = (function (){var statearr_27880 = state_27866;
(statearr_27880[(13)] = inst_27785);

(statearr_27880[(14)] = inst_27746);

(statearr_27880[(15)] = inst_27744);

(statearr_27880[(16)] = inst_27745);

(statearr_27880[(17)] = inst_27743);

return statearr_27880;
})();
var statearr_27881_29863 = state_27866__$1;
(statearr_27881_29863[(2)] = null);

(statearr_27881_29863[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (39))){
var state_27866__$1 = state_27866;
var statearr_27886_29867 = state_27866__$1;
(statearr_27886_29867[(2)] = null);

(statearr_27886_29867[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (4))){
var inst_27734 = (state_27866[(9)]);
var inst_27734__$1 = (state_27866[(2)]);
var inst_27735 = (inst_27734__$1 == null);
var state_27866__$1 = (function (){var statearr_27887 = state_27866;
(statearr_27887[(9)] = inst_27734__$1);

return statearr_27887;
})();
if(cljs.core.truth_(inst_27735)){
var statearr_27888_29871 = state_27866__$1;
(statearr_27888_29871[(1)] = (5));

} else {
var statearr_27889_29872 = state_27866__$1;
(statearr_27889_29872[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (15))){
var inst_27746 = (state_27866[(14)]);
var inst_27744 = (state_27866[(15)]);
var inst_27745 = (state_27866[(16)]);
var inst_27743 = (state_27866[(17)]);
var inst_27761 = (state_27866[(2)]);
var inst_27762 = (inst_27746 + (1));
var tmp27883 = inst_27744;
var tmp27884 = inst_27745;
var tmp27885 = inst_27743;
var inst_27743__$1 = tmp27885;
var inst_27744__$1 = tmp27883;
var inst_27745__$1 = tmp27884;
var inst_27746__$1 = inst_27762;
var state_27866__$1 = (function (){var statearr_27890 = state_27866;
(statearr_27890[(18)] = inst_27761);

(statearr_27890[(14)] = inst_27746__$1);

(statearr_27890[(15)] = inst_27744__$1);

(statearr_27890[(16)] = inst_27745__$1);

(statearr_27890[(17)] = inst_27743__$1);

return statearr_27890;
})();
var statearr_27891_29880 = state_27866__$1;
(statearr_27891_29880[(2)] = null);

(statearr_27891_29880[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (21))){
var inst_27789 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27895_29892 = state_27866__$1;
(statearr_27895_29892[(2)] = inst_27789);

(statearr_27895_29892[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (31))){
var inst_27815 = (state_27866[(11)]);
var inst_27819 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27815);
var state_27866__$1 = state_27866;
var statearr_27897_29914 = state_27866__$1;
(statearr_27897_29914[(2)] = inst_27819);

(statearr_27897_29914[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (32))){
var inst_27810 = (state_27866[(10)]);
var inst_27807 = (state_27866[(19)]);
var inst_27809 = (state_27866[(20)]);
var inst_27808 = (state_27866[(12)]);
var inst_27821 = (state_27866[(2)]);
var inst_27822 = (inst_27810 + (1));
var tmp27892 = inst_27807;
var tmp27893 = inst_27809;
var tmp27894 = inst_27808;
var inst_27807__$1 = tmp27892;
var inst_27808__$1 = tmp27894;
var inst_27809__$1 = tmp27893;
var inst_27810__$1 = inst_27822;
var state_27866__$1 = (function (){var statearr_27898 = state_27866;
(statearr_27898[(10)] = inst_27810__$1);

(statearr_27898[(21)] = inst_27821);

(statearr_27898[(19)] = inst_27807__$1);

(statearr_27898[(20)] = inst_27809__$1);

(statearr_27898[(12)] = inst_27808__$1);

return statearr_27898;
})();
var statearr_27899_29921 = state_27866__$1;
(statearr_27899_29921[(2)] = null);

(statearr_27899_29921[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (40))){
var inst_27834 = (state_27866[(22)]);
var inst_27838 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_27834);
var state_27866__$1 = state_27866;
var statearr_27900_29923 = state_27866__$1;
(statearr_27900_29923[(2)] = inst_27838);

(statearr_27900_29923[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (33))){
var inst_27825 = (state_27866[(23)]);
var inst_27827 = cljs.core.chunked_seq_QMARK_(inst_27825);
var state_27866__$1 = state_27866;
if(inst_27827){
var statearr_27901_29924 = state_27866__$1;
(statearr_27901_29924[(1)] = (36));

} else {
var statearr_27902_29925 = state_27866__$1;
(statearr_27902_29925[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (13))){
var inst_27755 = (state_27866[(24)]);
var inst_27758 = cljs.core.async.close_BANG_(inst_27755);
var state_27866__$1 = state_27866;
var statearr_27904_29926 = state_27866__$1;
(statearr_27904_29926[(2)] = inst_27758);

(statearr_27904_29926[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (22))){
var inst_27779 = (state_27866[(8)]);
var inst_27782 = cljs.core.async.close_BANG_(inst_27779);
var state_27866__$1 = state_27866;
var statearr_27905_29932 = state_27866__$1;
(statearr_27905_29932[(2)] = inst_27782);

(statearr_27905_29932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (36))){
var inst_27825 = (state_27866[(23)]);
var inst_27829 = cljs.core.chunk_first(inst_27825);
var inst_27830 = cljs.core.chunk_rest(inst_27825);
var inst_27831 = cljs.core.count(inst_27829);
var inst_27807 = inst_27830;
var inst_27808 = inst_27829;
var inst_27809 = inst_27831;
var inst_27810 = (0);
var state_27866__$1 = (function (){var statearr_27906 = state_27866;
(statearr_27906[(10)] = inst_27810);

(statearr_27906[(19)] = inst_27807);

(statearr_27906[(20)] = inst_27809);

(statearr_27906[(12)] = inst_27808);

return statearr_27906;
})();
var statearr_27907_29933 = state_27866__$1;
(statearr_27907_29933[(2)] = null);

(statearr_27907_29933[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (41))){
var inst_27825 = (state_27866[(23)]);
var inst_27840 = (state_27866[(2)]);
var inst_27842 = cljs.core.next(inst_27825);
var inst_27807 = inst_27842;
var inst_27808 = null;
var inst_27809 = (0);
var inst_27810 = (0);
var state_27866__$1 = (function (){var statearr_27908 = state_27866;
(statearr_27908[(10)] = inst_27810);

(statearr_27908[(19)] = inst_27807);

(statearr_27908[(20)] = inst_27809);

(statearr_27908[(12)] = inst_27808);

(statearr_27908[(25)] = inst_27840);

return statearr_27908;
})();
var statearr_27909_29941 = state_27866__$1;
(statearr_27909_29941[(2)] = null);

(statearr_27909_29941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (43))){
var state_27866__$1 = state_27866;
var statearr_27914_29944 = state_27866__$1;
(statearr_27914_29944[(2)] = null);

(statearr_27914_29944[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (29))){
var inst_27850 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27915_29945 = state_27866__$1;
(statearr_27915_29945[(2)] = inst_27850);

(statearr_27915_29945[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (44))){
var inst_27859 = (state_27866[(2)]);
var state_27866__$1 = (function (){var statearr_27922 = state_27866;
(statearr_27922[(26)] = inst_27859);

return statearr_27922;
})();
var statearr_27923_29946 = state_27866__$1;
(statearr_27923_29946[(2)] = null);

(statearr_27923_29946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (6))){
var inst_27799 = (state_27866[(27)]);
var inst_27798 = cljs.core.deref(cs);
var inst_27799__$1 = cljs.core.keys(inst_27798);
var inst_27800 = cljs.core.count(inst_27799__$1);
var inst_27801 = cljs.core.reset_BANG_(dctr,inst_27800);
var inst_27806 = cljs.core.seq(inst_27799__$1);
var inst_27807 = inst_27806;
var inst_27808 = null;
var inst_27809 = (0);
var inst_27810 = (0);
var state_27866__$1 = (function (){var statearr_27924 = state_27866;
(statearr_27924[(10)] = inst_27810);

(statearr_27924[(19)] = inst_27807);

(statearr_27924[(27)] = inst_27799__$1);

(statearr_27924[(28)] = inst_27801);

(statearr_27924[(20)] = inst_27809);

(statearr_27924[(12)] = inst_27808);

return statearr_27924;
})();
var statearr_27925_29951 = state_27866__$1;
(statearr_27925_29951[(2)] = null);

(statearr_27925_29951[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (28))){
var inst_27825 = (state_27866[(23)]);
var inst_27807 = (state_27866[(19)]);
var inst_27825__$1 = cljs.core.seq(inst_27807);
var state_27866__$1 = (function (){var statearr_27926 = state_27866;
(statearr_27926[(23)] = inst_27825__$1);

return statearr_27926;
})();
if(inst_27825__$1){
var statearr_27927_29958 = state_27866__$1;
(statearr_27927_29958[(1)] = (33));

} else {
var statearr_27928_29959 = state_27866__$1;
(statearr_27928_29959[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (25))){
var inst_27810 = (state_27866[(10)]);
var inst_27809 = (state_27866[(20)]);
var inst_27812 = (inst_27810 < inst_27809);
var inst_27813 = inst_27812;
var state_27866__$1 = state_27866;
if(cljs.core.truth_(inst_27813)){
var statearr_27930_29963 = state_27866__$1;
(statearr_27930_29963[(1)] = (27));

} else {
var statearr_27931_29964 = state_27866__$1;
(statearr_27931_29964[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (34))){
var state_27866__$1 = state_27866;
var statearr_27932_29966 = state_27866__$1;
(statearr_27932_29966[(2)] = null);

(statearr_27932_29966[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (17))){
var state_27866__$1 = state_27866;
var statearr_27933_29967 = state_27866__$1;
(statearr_27933_29967[(2)] = null);

(statearr_27933_29967[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (3))){
var inst_27864 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
return cljs.core.async.impl.ioc_helpers.return_chan(state_27866__$1,inst_27864);
} else {
if((state_val_27867 === (12))){
var inst_27794 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27934_29968 = state_27866__$1;
(statearr_27934_29968[(2)] = inst_27794);

(statearr_27934_29968[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (2))){
var state_27866__$1 = state_27866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27866__$1,(4),ch);
} else {
if((state_val_27867 === (23))){
var state_27866__$1 = state_27866;
var statearr_27935_29969 = state_27866__$1;
(statearr_27935_29969[(2)] = null);

(statearr_27935_29969[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (35))){
var inst_27848 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27936_29973 = state_27866__$1;
(statearr_27936_29973[(2)] = inst_27848);

(statearr_27936_29973[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (19))){
var inst_27765 = (state_27866[(7)]);
var inst_27769 = cljs.core.chunk_first(inst_27765);
var inst_27770 = cljs.core.chunk_rest(inst_27765);
var inst_27771 = cljs.core.count(inst_27769);
var inst_27743 = inst_27770;
var inst_27744 = inst_27769;
var inst_27745 = inst_27771;
var inst_27746 = (0);
var state_27866__$1 = (function (){var statearr_27938 = state_27866;
(statearr_27938[(14)] = inst_27746);

(statearr_27938[(15)] = inst_27744);

(statearr_27938[(16)] = inst_27745);

(statearr_27938[(17)] = inst_27743);

return statearr_27938;
})();
var statearr_27939_29975 = state_27866__$1;
(statearr_27939_29975[(2)] = null);

(statearr_27939_29975[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (11))){
var inst_27743 = (state_27866[(17)]);
var inst_27765 = (state_27866[(7)]);
var inst_27765__$1 = cljs.core.seq(inst_27743);
var state_27866__$1 = (function (){var statearr_27940 = state_27866;
(statearr_27940[(7)] = inst_27765__$1);

return statearr_27940;
})();
if(inst_27765__$1){
var statearr_27941_29976 = state_27866__$1;
(statearr_27941_29976[(1)] = (16));

} else {
var statearr_27942_29977 = state_27866__$1;
(statearr_27942_29977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (9))){
var inst_27796 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27943_29978 = state_27866__$1;
(statearr_27943_29978[(2)] = inst_27796);

(statearr_27943_29978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (5))){
var inst_27741 = cljs.core.deref(cs);
var inst_27742 = cljs.core.seq(inst_27741);
var inst_27743 = inst_27742;
var inst_27744 = null;
var inst_27745 = (0);
var inst_27746 = (0);
var state_27866__$1 = (function (){var statearr_27945 = state_27866;
(statearr_27945[(14)] = inst_27746);

(statearr_27945[(15)] = inst_27744);

(statearr_27945[(16)] = inst_27745);

(statearr_27945[(17)] = inst_27743);

return statearr_27945;
})();
var statearr_27949_29979 = state_27866__$1;
(statearr_27949_29979[(2)] = null);

(statearr_27949_29979[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (14))){
var state_27866__$1 = state_27866;
var statearr_27950_29986 = state_27866__$1;
(statearr_27950_29986[(2)] = null);

(statearr_27950_29986[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (45))){
var inst_27856 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27954_29987 = state_27866__$1;
(statearr_27954_29987[(2)] = inst_27856);

(statearr_27954_29987[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (26))){
var inst_27799 = (state_27866[(27)]);
var inst_27852 = (state_27866[(2)]);
var inst_27853 = cljs.core.seq(inst_27799);
var state_27866__$1 = (function (){var statearr_27955 = state_27866;
(statearr_27955[(29)] = inst_27852);

return statearr_27955;
})();
if(inst_27853){
var statearr_27956_29988 = state_27866__$1;
(statearr_27956_29988[(1)] = (42));

} else {
var statearr_27957_29989 = state_27866__$1;
(statearr_27957_29989[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (16))){
var inst_27765 = (state_27866[(7)]);
var inst_27767 = cljs.core.chunked_seq_QMARK_(inst_27765);
var state_27866__$1 = state_27866;
if(inst_27767){
var statearr_27958_29994 = state_27866__$1;
(statearr_27958_29994[(1)] = (19));

} else {
var statearr_27960_29996 = state_27866__$1;
(statearr_27960_29996[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (38))){
var inst_27845 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27961_29999 = state_27866__$1;
(statearr_27961_29999[(2)] = inst_27845);

(statearr_27961_29999[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (30))){
var state_27866__$1 = state_27866;
var statearr_27962_30000 = state_27866__$1;
(statearr_27962_30000[(2)] = null);

(statearr_27962_30000[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (10))){
var inst_27746 = (state_27866[(14)]);
var inst_27744 = (state_27866[(15)]);
var inst_27754 = cljs.core._nth(inst_27744,inst_27746);
var inst_27755 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27754,(0),null);
var inst_27756 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_27754,(1),null);
var state_27866__$1 = (function (){var statearr_27964 = state_27866;
(statearr_27964[(24)] = inst_27755);

return statearr_27964;
})();
if(cljs.core.truth_(inst_27756)){
var statearr_27968_30001 = state_27866__$1;
(statearr_27968_30001[(1)] = (13));

} else {
var statearr_27969_30002 = state_27866__$1;
(statearr_27969_30002[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (18))){
var inst_27792 = (state_27866[(2)]);
var state_27866__$1 = state_27866;
var statearr_27970_30006 = state_27866__$1;
(statearr_27970_30006[(2)] = inst_27792);

(statearr_27970_30006[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (42))){
var state_27866__$1 = state_27866;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_27866__$1,(45),dchan);
} else {
if((state_val_27867 === (37))){
var inst_27834 = (state_27866[(22)]);
var inst_27825 = (state_27866[(23)]);
var inst_27734 = (state_27866[(9)]);
var inst_27834__$1 = cljs.core.first(inst_27825);
var inst_27835 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_27834__$1,inst_27734,done);
var state_27866__$1 = (function (){var statearr_27972 = state_27866;
(statearr_27972[(22)] = inst_27834__$1);

return statearr_27972;
})();
if(cljs.core.truth_(inst_27835)){
var statearr_27973_30007 = state_27866__$1;
(statearr_27973_30007[(1)] = (39));

} else {
var statearr_27974_30008 = state_27866__$1;
(statearr_27974_30008[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27867 === (8))){
var inst_27746 = (state_27866[(14)]);
var inst_27745 = (state_27866[(16)]);
var inst_27748 = (inst_27746 < inst_27745);
var inst_27749 = inst_27748;
var state_27866__$1 = state_27866;
if(cljs.core.truth_(inst_27749)){
var statearr_27975_30009 = state_27866__$1;
(statearr_27975_30009[(1)] = (10));

} else {
var statearr_27976_30010 = state_27866__$1;
(statearr_27976_30010[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__26680__auto__ = null;
var cljs$core$async$mult_$_state_machine__26680__auto____0 = (function (){
var statearr_27979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27979[(0)] = cljs$core$async$mult_$_state_machine__26680__auto__);

(statearr_27979[(1)] = (1));

return statearr_27979;
});
var cljs$core$async$mult_$_state_machine__26680__auto____1 = (function (state_27866){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_27866);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e27983){var ex__26683__auto__ = e27983;
var statearr_27984_30014 = state_27866;
(statearr_27984_30014[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_27866[(4)]))){
var statearr_27985_30021 = state_27866;
(statearr_27985_30021[(1)] = cljs.core.first((state_27866[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30024 = state_27866;
state_27866 = G__30024;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__26680__auto__ = function(state_27866){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__26680__auto____1.call(this,state_27866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__26680__auto____0;
cljs$core$async$mult_$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__26680__auto____1;
return cljs$core$async$mult_$_state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_27986 = f__26970__auto__();
(statearr_27986[(6)] = c__26969__auto___29841);

return statearr_27986;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__27989 = arguments.length;
switch (G__27989) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_30031 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_30031(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_30032 = (function (m,ch){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4522__auto__.call(null,m,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4519__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_30032(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_30033 = (function (m){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4522__auto__.call(null,m));
} else {
var m__4519__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4519__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_30033(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_30038 = (function (m,state_map){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4522__auto__.call(null,m,state_map));
} else {
var m__4519__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4519__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_30038(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_30043 = (function (m,mode){
var x__4521__auto__ = (((m == null))?null:m);
var m__4522__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4522__auto__.call(null,m,mode));
} else {
var m__4519__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4519__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_30043(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4835__auto__ = [];
var len__4829__auto___30044 = arguments.length;
var i__4830__auto___30045 = (0);
while(true){
if((i__4830__auto___30045 < len__4829__auto___30044)){
args__4835__auto__.push((arguments[i__4830__auto___30045]));

var G__30046 = (i__4830__auto___30045 + (1));
i__4830__auto___30045 = G__30046;
continue;
} else {
}
break;
}

var argseq__4836__auto__ = ((((3) < args__4835__auto__.length))?(new cljs.core.IndexedSeq(args__4835__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4836__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28037){
var map__28038 = p__28037;
var map__28038__$1 = cljs.core.__destructure_map(map__28038);
var opts = map__28038__$1;
var statearr_28039_30047 = state;
(statearr_28039_30047[(1)] = cont_block);


var temp__5753__auto__ = cljs.core.async.do_alts((function (val){
var statearr_28040_30048 = state;
(statearr_28040_30048[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5753__auto__)){
var cb = temp__5753__auto__;
var statearr_28042_30049 = state;
(statearr_28042_30049[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28032){
var G__28033 = cljs.core.first(seq28032);
var seq28032__$1 = cljs.core.next(seq28032);
var G__28034 = cljs.core.first(seq28032__$1);
var seq28032__$2 = cljs.core.next(seq28032__$1);
var G__28035 = cljs.core.first(seq28032__$2);
var seq28032__$3 = cljs.core.next(seq28032__$2);
var self__4816__auto__ = this;
return self__4816__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28033,G__28034,G__28035,seq28032__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28048 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28048 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28049){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28049 = meta28049;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28050,meta28049__$1){
var self__ = this;
var _28050__$1 = this;
return (new cljs.core.async.t_cljs$core$async28048(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28049__$1));
}));

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28050){
var self__ = this;
var _28050__$1 = this;
return self__.meta28049;
}));

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28048.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async28048.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28049","meta28049",493443442,null)], null);
}));

(cljs.core.async.t_cljs$core$async28048.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28048.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28048");

(cljs.core.async.t_cljs$core$async28048.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async28048");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28048.
 */
cljs.core.async.__GT_t_cljs$core$async28048 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28048(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28049){
return (new cljs.core.async.t_cljs$core$async28048(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28049));
});

}

return (new cljs.core.async.t_cljs$core$async28048(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26969__auto___30058 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_28137){
var state_val_28138 = (state_28137[(1)]);
if((state_val_28138 === (7))){
var inst_28093 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28093)){
var statearr_28139_30060 = state_28137__$1;
(statearr_28139_30060[(1)] = (8));

} else {
var statearr_28140_30061 = state_28137__$1;
(statearr_28140_30061[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (20))){
var inst_28084 = (state_28137[(7)]);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28137__$1,(23),out,inst_28084);
} else {
if((state_val_28138 === (1))){
var inst_28066 = calc_state();
var inst_28067 = cljs.core.__destructure_map(inst_28066);
var inst_28068 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28067,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28069 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28067,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28070 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28067,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28071 = inst_28066;
var state_28137__$1 = (function (){var statearr_28142 = state_28137;
(statearr_28142[(8)] = inst_28071);

(statearr_28142[(9)] = inst_28069);

(statearr_28142[(10)] = inst_28068);

(statearr_28142[(11)] = inst_28070);

return statearr_28142;
})();
var statearr_28143_30062 = state_28137__$1;
(statearr_28143_30062[(2)] = null);

(statearr_28143_30062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (24))){
var inst_28075 = (state_28137[(12)]);
var inst_28071 = inst_28075;
var state_28137__$1 = (function (){var statearr_28144 = state_28137;
(statearr_28144[(8)] = inst_28071);

return statearr_28144;
})();
var statearr_28145_30063 = state_28137__$1;
(statearr_28145_30063[(2)] = null);

(statearr_28145_30063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (4))){
var inst_28084 = (state_28137[(7)]);
var inst_28086 = (state_28137[(13)]);
var inst_28083 = (state_28137[(2)]);
var inst_28084__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28083,(0),null);
var inst_28085 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28083,(1),null);
var inst_28086__$1 = (inst_28084__$1 == null);
var state_28137__$1 = (function (){var statearr_28146 = state_28137;
(statearr_28146[(7)] = inst_28084__$1);

(statearr_28146[(14)] = inst_28085);

(statearr_28146[(13)] = inst_28086__$1);

return statearr_28146;
})();
if(cljs.core.truth_(inst_28086__$1)){
var statearr_28147_30066 = state_28137__$1;
(statearr_28147_30066[(1)] = (5));

} else {
var statearr_28148_30067 = state_28137__$1;
(statearr_28148_30067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (15))){
var inst_28111 = (state_28137[(15)]);
var inst_28076 = (state_28137[(16)]);
var inst_28111__$1 = cljs.core.empty_QMARK_(inst_28076);
var state_28137__$1 = (function (){var statearr_28150 = state_28137;
(statearr_28150[(15)] = inst_28111__$1);

return statearr_28150;
})();
if(inst_28111__$1){
var statearr_28152_30073 = state_28137__$1;
(statearr_28152_30073[(1)] = (17));

} else {
var statearr_28153_30074 = state_28137__$1;
(statearr_28153_30074[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (21))){
var inst_28075 = (state_28137[(12)]);
var inst_28071 = inst_28075;
var state_28137__$1 = (function (){var statearr_28155 = state_28137;
(statearr_28155[(8)] = inst_28071);

return statearr_28155;
})();
var statearr_28156_30081 = state_28137__$1;
(statearr_28156_30081[(2)] = null);

(statearr_28156_30081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (13))){
var inst_28100 = (state_28137[(2)]);
var inst_28101 = calc_state();
var inst_28071 = inst_28101;
var state_28137__$1 = (function (){var statearr_28157 = state_28137;
(statearr_28157[(8)] = inst_28071);

(statearr_28157[(17)] = inst_28100);

return statearr_28157;
})();
var statearr_28158_30082 = state_28137__$1;
(statearr_28158_30082[(2)] = null);

(statearr_28158_30082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (22))){
var inst_28131 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28159_30083 = state_28137__$1;
(statearr_28159_30083[(2)] = inst_28131);

(statearr_28159_30083[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (6))){
var inst_28085 = (state_28137[(14)]);
var inst_28091 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_28085,change);
var state_28137__$1 = state_28137;
var statearr_28163_30084 = state_28137__$1;
(statearr_28163_30084[(2)] = inst_28091);

(statearr_28163_30084[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (25))){
var state_28137__$1 = state_28137;
var statearr_28164_30085 = state_28137__$1;
(statearr_28164_30085[(2)] = null);

(statearr_28164_30085[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (17))){
var inst_28085 = (state_28137[(14)]);
var inst_28077 = (state_28137[(18)]);
var inst_28113 = (inst_28077.cljs$core$IFn$_invoke$arity$1 ? inst_28077.cljs$core$IFn$_invoke$arity$1(inst_28085) : inst_28077.call(null,inst_28085));
var inst_28114 = cljs.core.not(inst_28113);
var state_28137__$1 = state_28137;
var statearr_28165_30090 = state_28137__$1;
(statearr_28165_30090[(2)] = inst_28114);

(statearr_28165_30090[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (3))){
var inst_28135 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28137__$1,inst_28135);
} else {
if((state_val_28138 === (12))){
var state_28137__$1 = state_28137;
var statearr_28172_30091 = state_28137__$1;
(statearr_28172_30091[(2)] = null);

(statearr_28172_30091[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (2))){
var inst_28071 = (state_28137[(8)]);
var inst_28075 = (state_28137[(12)]);
var inst_28075__$1 = cljs.core.__destructure_map(inst_28071);
var inst_28076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28075__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28075__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28078 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28075__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28137__$1 = (function (){var statearr_28175 = state_28137;
(statearr_28175[(16)] = inst_28076);

(statearr_28175[(12)] = inst_28075__$1);

(statearr_28175[(18)] = inst_28077);

return statearr_28175;
})();
return cljs.core.async.ioc_alts_BANG_(state_28137__$1,(4),inst_28078);
} else {
if((state_val_28138 === (23))){
var inst_28122 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28122)){
var statearr_28176_30096 = state_28137__$1;
(statearr_28176_30096[(1)] = (24));

} else {
var statearr_28177_30097 = state_28137__$1;
(statearr_28177_30097[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (19))){
var inst_28117 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28178_30098 = state_28137__$1;
(statearr_28178_30098[(2)] = inst_28117);

(statearr_28178_30098[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (11))){
var inst_28085 = (state_28137[(14)]);
var inst_28097 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_28085);
var state_28137__$1 = state_28137;
var statearr_28179_30099 = state_28137__$1;
(statearr_28179_30099[(2)] = inst_28097);

(statearr_28179_30099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (9))){
var inst_28076 = (state_28137[(16)]);
var inst_28085 = (state_28137[(14)]);
var inst_28105 = (state_28137[(19)]);
var inst_28105__$1 = (inst_28076.cljs$core$IFn$_invoke$arity$1 ? inst_28076.cljs$core$IFn$_invoke$arity$1(inst_28085) : inst_28076.call(null,inst_28085));
var state_28137__$1 = (function (){var statearr_28180 = state_28137;
(statearr_28180[(19)] = inst_28105__$1);

return statearr_28180;
})();
if(cljs.core.truth_(inst_28105__$1)){
var statearr_28182_30100 = state_28137__$1;
(statearr_28182_30100[(1)] = (14));

} else {
var statearr_28183_30101 = state_28137__$1;
(statearr_28183_30101[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (5))){
var inst_28086 = (state_28137[(13)]);
var state_28137__$1 = state_28137;
var statearr_28184_30102 = state_28137__$1;
(statearr_28184_30102[(2)] = inst_28086);

(statearr_28184_30102[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (14))){
var inst_28105 = (state_28137[(19)]);
var state_28137__$1 = state_28137;
var statearr_28187_30103 = state_28137__$1;
(statearr_28187_30103[(2)] = inst_28105);

(statearr_28187_30103[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (26))){
var inst_28127 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28188_30104 = state_28137__$1;
(statearr_28188_30104[(2)] = inst_28127);

(statearr_28188_30104[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (16))){
var inst_28119 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28119)){
var statearr_28193_30105 = state_28137__$1;
(statearr_28193_30105[(1)] = (20));

} else {
var statearr_28194_30106 = state_28137__$1;
(statearr_28194_30106[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (10))){
var inst_28133 = (state_28137[(2)]);
var state_28137__$1 = state_28137;
var statearr_28196_30107 = state_28137__$1;
(statearr_28196_30107[(2)] = inst_28133);

(statearr_28196_30107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (18))){
var inst_28111 = (state_28137[(15)]);
var state_28137__$1 = state_28137;
var statearr_28197_30108 = state_28137__$1;
(statearr_28197_30108[(2)] = inst_28111);

(statearr_28197_30108[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28138 === (8))){
var inst_28084 = (state_28137[(7)]);
var inst_28095 = (inst_28084 == null);
var state_28137__$1 = state_28137;
if(cljs.core.truth_(inst_28095)){
var statearr_28198_30109 = state_28137__$1;
(statearr_28198_30109[(1)] = (11));

} else {
var statearr_28199_30110 = state_28137__$1;
(statearr_28199_30110[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__26680__auto__ = null;
var cljs$core$async$mix_$_state_machine__26680__auto____0 = (function (){
var statearr_28200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28200[(0)] = cljs$core$async$mix_$_state_machine__26680__auto__);

(statearr_28200[(1)] = (1));

return statearr_28200;
});
var cljs$core$async$mix_$_state_machine__26680__auto____1 = (function (state_28137){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_28137);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e28201){var ex__26683__auto__ = e28201;
var statearr_28202_30111 = state_28137;
(statearr_28202_30111[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_28137[(4)]))){
var statearr_28203_30112 = state_28137;
(statearr_28203_30112[(1)] = cljs.core.first((state_28137[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30113 = state_28137;
state_28137 = G__30113;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__26680__auto__ = function(state_28137){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__26680__auto____1.call(this,state_28137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__26680__auto____0;
cljs$core$async$mix_$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__26680__auto____1;
return cljs$core$async$mix_$_state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_28209 = f__26970__auto__();
(statearr_28209[(6)] = c__26969__auto___30058);

return statearr_28209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_30116 = (function (p,v,ch,close_QMARK_){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4522__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4519__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4519__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_30116(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_30118 = (function (p,v,ch){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4522__auto__.call(null,p,v,ch));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4519__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_30118(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_30127 = (function() {
var G__30128 = null;
var G__30128__1 = (function (p){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4522__auto__.call(null,p));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4519__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__30128__2 = (function (p,v){
var x__4521__auto__ = (((p == null))?null:p);
var m__4522__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4521__auto__)]);
if((!((m__4522__auto__ == null)))){
return (m__4522__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4522__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4522__auto__.call(null,p,v));
} else {
var m__4519__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4519__auto__ == null)))){
return (m__4519__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4519__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4519__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__30128 = function(p,v){
switch(arguments.length){
case 1:
return G__30128__1.call(this,p);
case 2:
return G__30128__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__30128.cljs$core$IFn$_invoke$arity$1 = G__30128__1;
G__30128.cljs$core$IFn$_invoke$arity$2 = G__30128__2;
return G__30128;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28235 = arguments.length;
switch (G__28235) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30127(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_30127(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28250 = arguments.length;
switch (G__28250) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4223__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4223__auto__)){
return or__4223__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__28240_SHARP_){
if(cljs.core.truth_((p1__28240_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__28240_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__28240_SHARP_.call(null,topic)))){
return p1__28240_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__28240_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28257 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28257 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28258){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28258 = meta28258;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28259,meta28258__$1){
var self__ = this;
var _28259__$1 = this;
return (new cljs.core.async.t_cljs$core$async28257(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28258__$1));
}));

(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28259){
var self__ = this;
var _28259__$1 = this;
return self__.meta28258;
}));

(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5753__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5753__auto__)){
var m = temp__5753__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28257.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28257.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28258","meta28258",-946712525,null)], null);
}));

(cljs.core.async.t_cljs$core$async28257.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28257.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28257");

(cljs.core.async.t_cljs$core$async28257.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async28257");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28257.
 */
cljs.core.async.__GT_t_cljs$core$async28257 = (function cljs$core$async$__GT_t_cljs$core$async28257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28258){
return (new cljs.core.async.t_cljs$core$async28257(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28258));
});

}

return (new cljs.core.async.t_cljs$core$async28257(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26969__auto___30159 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_28377){
var state_val_28378 = (state_28377[(1)]);
if((state_val_28378 === (7))){
var inst_28365 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
var statearr_28382_30163 = state_28377__$1;
(statearr_28382_30163[(2)] = inst_28365);

(statearr_28382_30163[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (20))){
var state_28377__$1 = state_28377;
var statearr_28383_30164 = state_28377__$1;
(statearr_28383_30164[(2)] = null);

(statearr_28383_30164[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (1))){
var state_28377__$1 = state_28377;
var statearr_28385_30165 = state_28377__$1;
(statearr_28385_30165[(2)] = null);

(statearr_28385_30165[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (24))){
var inst_28346 = (state_28377[(7)]);
var inst_28355 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_28346);
var state_28377__$1 = state_28377;
var statearr_28386_30166 = state_28377__$1;
(statearr_28386_30166[(2)] = inst_28355);

(statearr_28386_30166[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (4))){
var inst_28282 = (state_28377[(8)]);
var inst_28282__$1 = (state_28377[(2)]);
var inst_28284 = (inst_28282__$1 == null);
var state_28377__$1 = (function (){var statearr_28389 = state_28377;
(statearr_28389[(8)] = inst_28282__$1);

return statearr_28389;
})();
if(cljs.core.truth_(inst_28284)){
var statearr_28391_30170 = state_28377__$1;
(statearr_28391_30170[(1)] = (5));

} else {
var statearr_28392_30171 = state_28377__$1;
(statearr_28392_30171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (15))){
var inst_28340 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
var statearr_28393_30173 = state_28377__$1;
(statearr_28393_30173[(2)] = inst_28340);

(statearr_28393_30173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (21))){
var inst_28361 = (state_28377[(2)]);
var state_28377__$1 = (function (){var statearr_28395 = state_28377;
(statearr_28395[(9)] = inst_28361);

return statearr_28395;
})();
var statearr_28396_30177 = state_28377__$1;
(statearr_28396_30177[(2)] = null);

(statearr_28396_30177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (13))){
var inst_28318 = (state_28377[(10)]);
var inst_28322 = cljs.core.chunked_seq_QMARK_(inst_28318);
var state_28377__$1 = state_28377;
if(inst_28322){
var statearr_28397_30185 = state_28377__$1;
(statearr_28397_30185[(1)] = (16));

} else {
var statearr_28398_30186 = state_28377__$1;
(statearr_28398_30186[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (22))){
var inst_28352 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
if(cljs.core.truth_(inst_28352)){
var statearr_28408_30193 = state_28377__$1;
(statearr_28408_30193[(1)] = (23));

} else {
var statearr_28409_30194 = state_28377__$1;
(statearr_28409_30194[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (6))){
var inst_28348 = (state_28377[(11)]);
var inst_28282 = (state_28377[(8)]);
var inst_28346 = (state_28377[(7)]);
var inst_28346__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_28282) : topic_fn.call(null,inst_28282));
var inst_28347 = cljs.core.deref(mults);
var inst_28348__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_28347,inst_28346__$1);
var state_28377__$1 = (function (){var statearr_28410 = state_28377;
(statearr_28410[(11)] = inst_28348__$1);

(statearr_28410[(7)] = inst_28346__$1);

return statearr_28410;
})();
if(cljs.core.truth_(inst_28348__$1)){
var statearr_28417_30201 = state_28377__$1;
(statearr_28417_30201[(1)] = (19));

} else {
var statearr_28418_30202 = state_28377__$1;
(statearr_28418_30202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (25))){
var inst_28357 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
var statearr_28420_30203 = state_28377__$1;
(statearr_28420_30203[(2)] = inst_28357);

(statearr_28420_30203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (17))){
var inst_28318 = (state_28377[(10)]);
var inst_28330 = cljs.core.first(inst_28318);
var inst_28331 = cljs.core.async.muxch_STAR_(inst_28330);
var inst_28332 = cljs.core.async.close_BANG_(inst_28331);
var inst_28333 = cljs.core.next(inst_28318);
var inst_28293 = inst_28333;
var inst_28294 = null;
var inst_28295 = (0);
var inst_28296 = (0);
var state_28377__$1 = (function (){var statearr_28421 = state_28377;
(statearr_28421[(12)] = inst_28296);

(statearr_28421[(13)] = inst_28294);

(statearr_28421[(14)] = inst_28293);

(statearr_28421[(15)] = inst_28295);

(statearr_28421[(16)] = inst_28332);

return statearr_28421;
})();
var statearr_28422_30204 = state_28377__$1;
(statearr_28422_30204[(2)] = null);

(statearr_28422_30204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (3))){
var inst_28367 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28377__$1,inst_28367);
} else {
if((state_val_28378 === (12))){
var inst_28342 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
var statearr_28423_30206 = state_28377__$1;
(statearr_28423_30206[(2)] = inst_28342);

(statearr_28423_30206[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (2))){
var state_28377__$1 = state_28377;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28377__$1,(4),ch);
} else {
if((state_val_28378 === (23))){
var state_28377__$1 = state_28377;
var statearr_28425_30208 = state_28377__$1;
(statearr_28425_30208[(2)] = null);

(statearr_28425_30208[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (19))){
var inst_28348 = (state_28377[(11)]);
var inst_28282 = (state_28377[(8)]);
var inst_28350 = cljs.core.async.muxch_STAR_(inst_28348);
var state_28377__$1 = state_28377;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28377__$1,(22),inst_28350,inst_28282);
} else {
if((state_val_28378 === (11))){
var inst_28318 = (state_28377[(10)]);
var inst_28293 = (state_28377[(14)]);
var inst_28318__$1 = cljs.core.seq(inst_28293);
var state_28377__$1 = (function (){var statearr_28426 = state_28377;
(statearr_28426[(10)] = inst_28318__$1);

return statearr_28426;
})();
if(inst_28318__$1){
var statearr_28427_30216 = state_28377__$1;
(statearr_28427_30216[(1)] = (13));

} else {
var statearr_28429_30217 = state_28377__$1;
(statearr_28429_30217[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (9))){
var inst_28344 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
var statearr_28431_30221 = state_28377__$1;
(statearr_28431_30221[(2)] = inst_28344);

(statearr_28431_30221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (5))){
var inst_28290 = cljs.core.deref(mults);
var inst_28291 = cljs.core.vals(inst_28290);
var inst_28292 = cljs.core.seq(inst_28291);
var inst_28293 = inst_28292;
var inst_28294 = null;
var inst_28295 = (0);
var inst_28296 = (0);
var state_28377__$1 = (function (){var statearr_28433 = state_28377;
(statearr_28433[(12)] = inst_28296);

(statearr_28433[(13)] = inst_28294);

(statearr_28433[(14)] = inst_28293);

(statearr_28433[(15)] = inst_28295);

return statearr_28433;
})();
var statearr_28434_30222 = state_28377__$1;
(statearr_28434_30222[(2)] = null);

(statearr_28434_30222[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (14))){
var state_28377__$1 = state_28377;
var statearr_28438_30226 = state_28377__$1;
(statearr_28438_30226[(2)] = null);

(statearr_28438_30226[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (16))){
var inst_28318 = (state_28377[(10)]);
var inst_28325 = cljs.core.chunk_first(inst_28318);
var inst_28326 = cljs.core.chunk_rest(inst_28318);
var inst_28327 = cljs.core.count(inst_28325);
var inst_28293 = inst_28326;
var inst_28294 = inst_28325;
var inst_28295 = inst_28327;
var inst_28296 = (0);
var state_28377__$1 = (function (){var statearr_28440 = state_28377;
(statearr_28440[(12)] = inst_28296);

(statearr_28440[(13)] = inst_28294);

(statearr_28440[(14)] = inst_28293);

(statearr_28440[(15)] = inst_28295);

return statearr_28440;
})();
var statearr_28441_30227 = state_28377__$1;
(statearr_28441_30227[(2)] = null);

(statearr_28441_30227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (10))){
var inst_28296 = (state_28377[(12)]);
var inst_28294 = (state_28377[(13)]);
var inst_28293 = (state_28377[(14)]);
var inst_28295 = (state_28377[(15)]);
var inst_28308 = cljs.core._nth(inst_28294,inst_28296);
var inst_28309 = cljs.core.async.muxch_STAR_(inst_28308);
var inst_28310 = cljs.core.async.close_BANG_(inst_28309);
var inst_28315 = (inst_28296 + (1));
var tmp28435 = inst_28294;
var tmp28436 = inst_28293;
var tmp28437 = inst_28295;
var inst_28293__$1 = tmp28436;
var inst_28294__$1 = tmp28435;
var inst_28295__$1 = tmp28437;
var inst_28296__$1 = inst_28315;
var state_28377__$1 = (function (){var statearr_28444 = state_28377;
(statearr_28444[(12)] = inst_28296__$1);

(statearr_28444[(13)] = inst_28294__$1);

(statearr_28444[(14)] = inst_28293__$1);

(statearr_28444[(15)] = inst_28295__$1);

(statearr_28444[(17)] = inst_28310);

return statearr_28444;
})();
var statearr_28446_30228 = state_28377__$1;
(statearr_28446_30228[(2)] = null);

(statearr_28446_30228[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (18))){
var inst_28336 = (state_28377[(2)]);
var state_28377__$1 = state_28377;
var statearr_28447_30229 = state_28377__$1;
(statearr_28447_30229[(2)] = inst_28336);

(statearr_28447_30229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28378 === (8))){
var inst_28296 = (state_28377[(12)]);
var inst_28295 = (state_28377[(15)]);
var inst_28304 = (inst_28296 < inst_28295);
var inst_28305 = inst_28304;
var state_28377__$1 = state_28377;
if(cljs.core.truth_(inst_28305)){
var statearr_28449_30230 = state_28377__$1;
(statearr_28449_30230[(1)] = (10));

} else {
var statearr_28450_30231 = state_28377__$1;
(statearr_28450_30231[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_28454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28454[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_28454[(1)] = (1));

return statearr_28454;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_28377){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_28377);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e28456){var ex__26683__auto__ = e28456;
var statearr_28457_30236 = state_28377;
(statearr_28457_30236[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_28377[(4)]))){
var statearr_28458_30237 = state_28377;
(statearr_28458_30237[(1)] = cljs.core.first((state_28377[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30238 = state_28377;
state_28377 = G__30238;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_28377){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_28377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_28462 = f__26970__auto__();
(statearr_28462[(6)] = c__26969__auto___30159);

return statearr_28462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28477 = arguments.length;
switch (G__28477) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28491 = arguments.length;
switch (G__28491) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28502 = arguments.length;
switch (G__28502) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__26969__auto___30250 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_28573){
var state_val_28574 = (state_28573[(1)]);
if((state_val_28574 === (7))){
var state_28573__$1 = state_28573;
var statearr_28576_30251 = state_28573__$1;
(statearr_28576_30251[(2)] = null);

(statearr_28576_30251[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (1))){
var state_28573__$1 = state_28573;
var statearr_28583_30252 = state_28573__$1;
(statearr_28583_30252[(2)] = null);

(statearr_28583_30252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (4))){
var inst_28522 = (state_28573[(7)]);
var inst_28524 = (state_28573[(8)]);
var inst_28527 = (inst_28524 < inst_28522);
var state_28573__$1 = state_28573;
if(cljs.core.truth_(inst_28527)){
var statearr_28585_30253 = state_28573__$1;
(statearr_28585_30253[(1)] = (6));

} else {
var statearr_28588_30256 = state_28573__$1;
(statearr_28588_30256[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (15))){
var inst_28556 = (state_28573[(9)]);
var inst_28561 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_28556);
var state_28573__$1 = state_28573;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28573__$1,(17),out,inst_28561);
} else {
if((state_val_28574 === (13))){
var inst_28556 = (state_28573[(9)]);
var inst_28556__$1 = (state_28573[(2)]);
var inst_28557 = cljs.core.some(cljs.core.nil_QMARK_,inst_28556__$1);
var state_28573__$1 = (function (){var statearr_28596 = state_28573;
(statearr_28596[(9)] = inst_28556__$1);

return statearr_28596;
})();
if(cljs.core.truth_(inst_28557)){
var statearr_28597_30262 = state_28573__$1;
(statearr_28597_30262[(1)] = (14));

} else {
var statearr_28599_30263 = state_28573__$1;
(statearr_28599_30263[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (6))){
var state_28573__$1 = state_28573;
var statearr_28600_30264 = state_28573__$1;
(statearr_28600_30264[(2)] = null);

(statearr_28600_30264[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (17))){
var inst_28563 = (state_28573[(2)]);
var state_28573__$1 = (function (){var statearr_28613 = state_28573;
(statearr_28613[(10)] = inst_28563);

return statearr_28613;
})();
var statearr_28614_30267 = state_28573__$1;
(statearr_28614_30267[(2)] = null);

(statearr_28614_30267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (3))){
var inst_28568 = (state_28573[(2)]);
var state_28573__$1 = state_28573;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28573__$1,inst_28568);
} else {
if((state_val_28574 === (12))){
var _ = (function (){var statearr_28618 = state_28573;
(statearr_28618[(4)] = cljs.core.rest((state_28573[(4)])));

return statearr_28618;
})();
var state_28573__$1 = state_28573;
var ex28605 = (state_28573__$1[(2)]);
var statearr_28621_30269 = state_28573__$1;
(statearr_28621_30269[(5)] = ex28605);


if((ex28605 instanceof Object)){
var statearr_28627_30270 = state_28573__$1;
(statearr_28627_30270[(1)] = (11));

(statearr_28627_30270[(5)] = null);

} else {
throw ex28605;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (2))){
var inst_28517 = cljs.core.reset_BANG_(dctr,cnt);
var inst_28522 = cnt;
var inst_28524 = (0);
var state_28573__$1 = (function (){var statearr_28637 = state_28573;
(statearr_28637[(7)] = inst_28522);

(statearr_28637[(8)] = inst_28524);

(statearr_28637[(11)] = inst_28517);

return statearr_28637;
})();
var statearr_28642_30271 = state_28573__$1;
(statearr_28642_30271[(2)] = null);

(statearr_28642_30271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (11))){
var inst_28533 = (state_28573[(2)]);
var inst_28535 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_28573__$1 = (function (){var statearr_28645 = state_28573;
(statearr_28645[(12)] = inst_28533);

return statearr_28645;
})();
var statearr_28647_30272 = state_28573__$1;
(statearr_28647_30272[(2)] = inst_28535);

(statearr_28647_30272[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (9))){
var inst_28524 = (state_28573[(8)]);
var _ = (function (){var statearr_28648 = state_28573;
(statearr_28648[(4)] = cljs.core.cons((12),(state_28573[(4)])));

return statearr_28648;
})();
var inst_28541 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_28524) : chs__$1.call(null,inst_28524));
var inst_28542 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_28524) : done.call(null,inst_28524));
var inst_28543 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_28541,inst_28542);
var ___$1 = (function (){var statearr_28652 = state_28573;
(statearr_28652[(4)] = cljs.core.rest((state_28573[(4)])));

return statearr_28652;
})();
var state_28573__$1 = state_28573;
var statearr_28653_30274 = state_28573__$1;
(statearr_28653_30274[(2)] = inst_28543);

(statearr_28653_30274[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (5))){
var inst_28553 = (state_28573[(2)]);
var state_28573__$1 = (function (){var statearr_28655 = state_28573;
(statearr_28655[(13)] = inst_28553);

return statearr_28655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28573__$1,(13),dchan);
} else {
if((state_val_28574 === (14))){
var inst_28559 = cljs.core.async.close_BANG_(out);
var state_28573__$1 = state_28573;
var statearr_28658_30275 = state_28573__$1;
(statearr_28658_30275[(2)] = inst_28559);

(statearr_28658_30275[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (16))){
var inst_28566 = (state_28573[(2)]);
var state_28573__$1 = state_28573;
var statearr_28664_30277 = state_28573__$1;
(statearr_28664_30277[(2)] = inst_28566);

(statearr_28664_30277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (10))){
var inst_28524 = (state_28573[(8)]);
var inst_28546 = (state_28573[(2)]);
var inst_28547 = (inst_28524 + (1));
var inst_28524__$1 = inst_28547;
var state_28573__$1 = (function (){var statearr_28667 = state_28573;
(statearr_28667[(14)] = inst_28546);

(statearr_28667[(8)] = inst_28524__$1);

return statearr_28667;
})();
var statearr_28670_30281 = state_28573__$1;
(statearr_28670_30281[(2)] = null);

(statearr_28670_30281[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28574 === (8))){
var inst_28551 = (state_28573[(2)]);
var state_28573__$1 = state_28573;
var statearr_28672_30282 = state_28573__$1;
(statearr_28672_30282[(2)] = inst_28551);

(statearr_28672_30282[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_28677 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28677[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_28677[(1)] = (1));

return statearr_28677;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_28573){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_28573);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e28679){var ex__26683__auto__ = e28679;
var statearr_28680_30283 = state_28573;
(statearr_28680_30283[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_28573[(4)]))){
var statearr_28681_30284 = state_28573;
(statearr_28681_30284[(1)] = cljs.core.first((state_28573[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30286 = state_28573;
state_28573 = G__30286;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_28573){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_28573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_28693 = f__26970__auto__();
(statearr_28693[(6)] = c__26969__auto___30250);

return statearr_28693;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28700 = arguments.length;
switch (G__28700) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26969__auto___30289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_28743){
var state_val_28744 = (state_28743[(1)]);
if((state_val_28744 === (7))){
var inst_28723 = (state_28743[(7)]);
var inst_28722 = (state_28743[(8)]);
var inst_28722__$1 = (state_28743[(2)]);
var inst_28723__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28722__$1,(0),null);
var inst_28724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_28722__$1,(1),null);
var inst_28725 = (inst_28723__$1 == null);
var state_28743__$1 = (function (){var statearr_28745 = state_28743;
(statearr_28745[(7)] = inst_28723__$1);

(statearr_28745[(9)] = inst_28724);

(statearr_28745[(8)] = inst_28722__$1);

return statearr_28745;
})();
if(cljs.core.truth_(inst_28725)){
var statearr_28746_30290 = state_28743__$1;
(statearr_28746_30290[(1)] = (8));

} else {
var statearr_28747_30291 = state_28743__$1;
(statearr_28747_30291[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (1))){
var inst_28709 = cljs.core.vec(chs);
var inst_28710 = inst_28709;
var state_28743__$1 = (function (){var statearr_28748 = state_28743;
(statearr_28748[(10)] = inst_28710);

return statearr_28748;
})();
var statearr_28749_30293 = state_28743__$1;
(statearr_28749_30293[(2)] = null);

(statearr_28749_30293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (4))){
var inst_28710 = (state_28743[(10)]);
var state_28743__$1 = state_28743;
return cljs.core.async.ioc_alts_BANG_(state_28743__$1,(7),inst_28710);
} else {
if((state_val_28744 === (6))){
var inst_28739 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28750_30295 = state_28743__$1;
(statearr_28750_30295[(2)] = inst_28739);

(statearr_28750_30295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (3))){
var inst_28741 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28743__$1,inst_28741);
} else {
if((state_val_28744 === (2))){
var inst_28710 = (state_28743[(10)]);
var inst_28714 = cljs.core.count(inst_28710);
var inst_28715 = (inst_28714 > (0));
var state_28743__$1 = state_28743;
if(cljs.core.truth_(inst_28715)){
var statearr_28752_30299 = state_28743__$1;
(statearr_28752_30299[(1)] = (4));

} else {
var statearr_28753_30300 = state_28743__$1;
(statearr_28753_30300[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (11))){
var inst_28710 = (state_28743[(10)]);
var inst_28732 = (state_28743[(2)]);
var tmp28751 = inst_28710;
var inst_28710__$1 = tmp28751;
var state_28743__$1 = (function (){var statearr_28755 = state_28743;
(statearr_28755[(11)] = inst_28732);

(statearr_28755[(10)] = inst_28710__$1);

return statearr_28755;
})();
var statearr_28756_30301 = state_28743__$1;
(statearr_28756_30301[(2)] = null);

(statearr_28756_30301[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (9))){
var inst_28723 = (state_28743[(7)]);
var state_28743__$1 = state_28743;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28743__$1,(11),out,inst_28723);
} else {
if((state_val_28744 === (5))){
var inst_28737 = cljs.core.async.close_BANG_(out);
var state_28743__$1 = state_28743;
var statearr_28757_30302 = state_28743__$1;
(statearr_28757_30302[(2)] = inst_28737);

(statearr_28757_30302[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (10))){
var inst_28735 = (state_28743[(2)]);
var state_28743__$1 = state_28743;
var statearr_28758_30303 = state_28743__$1;
(statearr_28758_30303[(2)] = inst_28735);

(statearr_28758_30303[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28744 === (8))){
var inst_28723 = (state_28743[(7)]);
var inst_28724 = (state_28743[(9)]);
var inst_28722 = (state_28743[(8)]);
var inst_28710 = (state_28743[(10)]);
var inst_28727 = (function (){var cs = inst_28710;
var vec__28718 = inst_28722;
var v = inst_28723;
var c = inst_28724;
return (function (p1__28695_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__28695_SHARP_);
});
})();
var inst_28728 = cljs.core.filterv(inst_28727,inst_28710);
var inst_28710__$1 = inst_28728;
var state_28743__$1 = (function (){var statearr_28760 = state_28743;
(statearr_28760[(10)] = inst_28710__$1);

return statearr_28760;
})();
var statearr_28763_30305 = state_28743__$1;
(statearr_28763_30305[(2)] = null);

(statearr_28763_30305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_28765 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28765[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_28765[(1)] = (1));

return statearr_28765;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_28743){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_28743);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e28767){var ex__26683__auto__ = e28767;
var statearr_28768_30308 = state_28743;
(statearr_28768_30308[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_28743[(4)]))){
var statearr_28769_30309 = state_28743;
(statearr_28769_30309[(1)] = cljs.core.first((state_28743[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30310 = state_28743;
state_28743 = G__30310;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_28743){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_28743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_28770 = f__26970__auto__();
(statearr_28770[(6)] = c__26969__auto___30289);

return statearr_28770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28776 = arguments.length;
switch (G__28776) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26969__auto___30315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_28806){
var state_val_28807 = (state_28806[(1)]);
if((state_val_28807 === (7))){
var inst_28788 = (state_28806[(7)]);
var inst_28788__$1 = (state_28806[(2)]);
var inst_28789 = (inst_28788__$1 == null);
var inst_28790 = cljs.core.not(inst_28789);
var state_28806__$1 = (function (){var statearr_28812 = state_28806;
(statearr_28812[(7)] = inst_28788__$1);

return statearr_28812;
})();
if(inst_28790){
var statearr_28813_30316 = state_28806__$1;
(statearr_28813_30316[(1)] = (8));

} else {
var statearr_28814_30317 = state_28806__$1;
(statearr_28814_30317[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (1))){
var inst_28780 = (0);
var state_28806__$1 = (function (){var statearr_28818 = state_28806;
(statearr_28818[(8)] = inst_28780);

return statearr_28818;
})();
var statearr_28819_30322 = state_28806__$1;
(statearr_28819_30322[(2)] = null);

(statearr_28819_30322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (4))){
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28806__$1,(7),ch);
} else {
if((state_val_28807 === (6))){
var inst_28801 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28823_30325 = state_28806__$1;
(statearr_28823_30325[(2)] = inst_28801);

(statearr_28823_30325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (3))){
var inst_28803 = (state_28806[(2)]);
var inst_28804 = cljs.core.async.close_BANG_(out);
var state_28806__$1 = (function (){var statearr_28824 = state_28806;
(statearr_28824[(9)] = inst_28803);

return statearr_28824;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_28806__$1,inst_28804);
} else {
if((state_val_28807 === (2))){
var inst_28780 = (state_28806[(8)]);
var inst_28785 = (inst_28780 < n);
var state_28806__$1 = state_28806;
if(cljs.core.truth_(inst_28785)){
var statearr_28825_30328 = state_28806__$1;
(statearr_28825_30328[(1)] = (4));

} else {
var statearr_28830_30329 = state_28806__$1;
(statearr_28830_30329[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (11))){
var inst_28780 = (state_28806[(8)]);
var inst_28793 = (state_28806[(2)]);
var inst_28794 = (inst_28780 + (1));
var inst_28780__$1 = inst_28794;
var state_28806__$1 = (function (){var statearr_28831 = state_28806;
(statearr_28831[(10)] = inst_28793);

(statearr_28831[(8)] = inst_28780__$1);

return statearr_28831;
})();
var statearr_28832_30336 = state_28806__$1;
(statearr_28832_30336[(2)] = null);

(statearr_28832_30336[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (9))){
var state_28806__$1 = state_28806;
var statearr_28833_30337 = state_28806__$1;
(statearr_28833_30337[(2)] = null);

(statearr_28833_30337[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (5))){
var state_28806__$1 = state_28806;
var statearr_28834_30340 = state_28806__$1;
(statearr_28834_30340[(2)] = null);

(statearr_28834_30340[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (10))){
var inst_28798 = (state_28806[(2)]);
var state_28806__$1 = state_28806;
var statearr_28835_30342 = state_28806__$1;
(statearr_28835_30342[(2)] = inst_28798);

(statearr_28835_30342[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28807 === (8))){
var inst_28788 = (state_28806[(7)]);
var state_28806__$1 = state_28806;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28806__$1,(11),out,inst_28788);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_28836 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28836[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_28836[(1)] = (1));

return statearr_28836;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_28806){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_28806);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e28837){var ex__26683__auto__ = e28837;
var statearr_28838_30351 = state_28806;
(statearr_28838_30351[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_28806[(4)]))){
var statearr_28839_30352 = state_28806;
(statearr_28839_30352[(1)] = cljs.core.first((state_28806[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30353 = state_28806;
state_28806 = G__30353;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_28806){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_28806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_28840 = f__26970__auto__();
(statearr_28840[(6)] = c__26969__auto___30315);

return statearr_28840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28842 = (function (f,ch,meta28843){
this.f = f;
this.ch = ch;
this.meta28843 = meta28843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28844,meta28843__$1){
var self__ = this;
var _28844__$1 = this;
return (new cljs.core.async.t_cljs$core$async28842(self__.f,self__.ch,meta28843__$1));
}));

(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28844){
var self__ = this;
var _28844__$1 = this;
return self__.meta28843;
}));

(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28845 = (function (f,ch,meta28843,_,fn1,meta28846){
this.f = f;
this.ch = ch;
this.meta28843 = meta28843;
this._ = _;
this.fn1 = fn1;
this.meta28846 = meta28846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28847,meta28846__$1){
var self__ = this;
var _28847__$1 = this;
return (new cljs.core.async.t_cljs$core$async28845(self__.f,self__.ch,self__.meta28843,self__._,self__.fn1,meta28846__$1));
}));

(cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28847){
var self__ = this;
var _28847__$1 = this;
return self__.meta28846;
}));

(cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__28841_SHARP_){
var G__28851 = (((p1__28841_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__28841_SHARP_) : self__.f.call(null,p1__28841_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__28851) : f1.call(null,G__28851));
});
}));

(cljs.core.async.t_cljs$core$async28845.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28843","meta28843",-463546887,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28842","cljs.core.async/t_cljs$core$async28842",-930932304,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28846","meta28846",-35939952,null)], null);
}));

(cljs.core.async.t_cljs$core$async28845.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28845.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28845");

(cljs.core.async.t_cljs$core$async28845.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async28845");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28845.
 */
cljs.core.async.__GT_t_cljs$core$async28845 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28845(f__$1,ch__$1,meta28843__$1,___$2,fn1__$1,meta28846){
return (new cljs.core.async.t_cljs$core$async28845(f__$1,ch__$1,meta28843__$1,___$2,fn1__$1,meta28846));
});

}

return (new cljs.core.async.t_cljs$core$async28845(self__.f,self__.ch,self__.meta28843,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4221__auto__ = ret;
if(cljs.core.truth_(and__4221__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4221__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__28853 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__28853) : self__.f.call(null,G__28853));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28842.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28842.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28843","meta28843",-463546887,null)], null);
}));

(cljs.core.async.t_cljs$core$async28842.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28842.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28842");

(cljs.core.async.t_cljs$core$async28842.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async28842");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28842.
 */
cljs.core.async.__GT_t_cljs$core$async28842 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28842(f__$1,ch__$1,meta28843){
return (new cljs.core.async.t_cljs$core$async28842(f__$1,ch__$1,meta28843));
});

}

return (new cljs.core.async.t_cljs$core$async28842(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28857 = (function (f,ch,meta28858){
this.f = f;
this.ch = ch;
this.meta28858 = meta28858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28859,meta28858__$1){
var self__ = this;
var _28859__$1 = this;
return (new cljs.core.async.t_cljs$core$async28857(self__.f,self__.ch,meta28858__$1));
}));

(cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28859){
var self__ = this;
var _28859__$1 = this;
return self__.meta28858;
}));

(cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28857.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async28857.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28858","meta28858",-479100200,null)], null);
}));

(cljs.core.async.t_cljs$core$async28857.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28857.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28857");

(cljs.core.async.t_cljs$core$async28857.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async28857");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28857.
 */
cljs.core.async.__GT_t_cljs$core$async28857 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28857(f__$1,ch__$1,meta28858){
return (new cljs.core.async.t_cljs$core$async28857(f__$1,ch__$1,meta28858));
});

}

return (new cljs.core.async.t_cljs$core$async28857(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28882 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28882 = (function (p,ch,meta28883){
this.p = p;
this.ch = ch;
this.meta28883 = meta28883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28884,meta28883__$1){
var self__ = this;
var _28884__$1 = this;
return (new cljs.core.async.t_cljs$core$async28882(self__.p,self__.ch,meta28883__$1));
}));

(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28884){
var self__ = this;
var _28884__$1 = this;
return self__.meta28883;
}));

(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28883","meta28883",-969531681,null)], null);
}));

(cljs.core.async.t_cljs$core$async28882.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28882");

(cljs.core.async.t_cljs$core$async28882.cljs$lang$ctorPrWriter = (function (this__4461__auto__,writer__4462__auto__,opt__4463__auto__){
return cljs.core._write(writer__4462__auto__,"cljs.core.async/t_cljs$core$async28882");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28882.
 */
cljs.core.async.__GT_t_cljs$core$async28882 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28882(p__$1,ch__$1,meta28883){
return (new cljs.core.async.t_cljs$core$async28882(p__$1,ch__$1,meta28883));
});

}

return (new cljs.core.async.t_cljs$core$async28882(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28914 = arguments.length;
switch (G__28914) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26969__auto___30405 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_28938){
var state_val_28939 = (state_28938[(1)]);
if((state_val_28939 === (7))){
var inst_28934 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28947_30411 = state_28938__$1;
(statearr_28947_30411[(2)] = inst_28934);

(statearr_28947_30411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (1))){
var state_28938__$1 = state_28938;
var statearr_28951_30419 = state_28938__$1;
(statearr_28951_30419[(2)] = null);

(statearr_28951_30419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (4))){
var inst_28920 = (state_28938[(7)]);
var inst_28920__$1 = (state_28938[(2)]);
var inst_28921 = (inst_28920__$1 == null);
var state_28938__$1 = (function (){var statearr_28956 = state_28938;
(statearr_28956[(7)] = inst_28920__$1);

return statearr_28956;
})();
if(cljs.core.truth_(inst_28921)){
var statearr_28957_30424 = state_28938__$1;
(statearr_28957_30424[(1)] = (5));

} else {
var statearr_28958_30425 = state_28938__$1;
(statearr_28958_30425[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (6))){
var inst_28920 = (state_28938[(7)]);
var inst_28925 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_28920) : p.call(null,inst_28920));
var state_28938__$1 = state_28938;
if(cljs.core.truth_(inst_28925)){
var statearr_28961_30426 = state_28938__$1;
(statearr_28961_30426[(1)] = (8));

} else {
var statearr_28962_30427 = state_28938__$1;
(statearr_28962_30427[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (3))){
var inst_28936 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28938__$1,inst_28936);
} else {
if((state_val_28939 === (2))){
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28938__$1,(4),ch);
} else {
if((state_val_28939 === (11))){
var inst_28928 = (state_28938[(2)]);
var state_28938__$1 = state_28938;
var statearr_28969_30431 = state_28938__$1;
(statearr_28969_30431[(2)] = inst_28928);

(statearr_28969_30431[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (9))){
var state_28938__$1 = state_28938;
var statearr_28973_30437 = state_28938__$1;
(statearr_28973_30437[(2)] = null);

(statearr_28973_30437[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (5))){
var inst_28923 = cljs.core.async.close_BANG_(out);
var state_28938__$1 = state_28938;
var statearr_28976_30440 = state_28938__$1;
(statearr_28976_30440[(2)] = inst_28923);

(statearr_28976_30440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (10))){
var inst_28931 = (state_28938[(2)]);
var state_28938__$1 = (function (){var statearr_28978 = state_28938;
(statearr_28978[(8)] = inst_28931);

return statearr_28978;
})();
var statearr_28981_30442 = state_28938__$1;
(statearr_28981_30442[(2)] = null);

(statearr_28981_30442[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28939 === (8))){
var inst_28920 = (state_28938[(7)]);
var state_28938__$1 = state_28938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_28938__$1,(11),out,inst_28920);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_28985 = [null,null,null,null,null,null,null,null,null];
(statearr_28985[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_28985[(1)] = (1));

return statearr_28985;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_28938){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_28938);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e28987){var ex__26683__auto__ = e28987;
var statearr_28988_30448 = state_28938;
(statearr_28988_30448[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_28938[(4)]))){
var statearr_28989_30450 = state_28938;
(statearr_28989_30450[(1)] = cljs.core.first((state_28938[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30452 = state_28938;
state_28938 = G__30452;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_28938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_28938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_28990 = f__26970__auto__();
(statearr_28990[(6)] = c__26969__auto___30405);

return statearr_28990;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28996 = arguments.length;
switch (G__28996) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26969__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_29076){
var state_val_29078 = (state_29076[(1)]);
if((state_val_29078 === (7))){
var inst_29072 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29081_30464 = state_29076__$1;
(statearr_29081_30464[(2)] = inst_29072);

(statearr_29081_30464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (20))){
var inst_29042 = (state_29076[(7)]);
var inst_29053 = (state_29076[(2)]);
var inst_29054 = cljs.core.next(inst_29042);
var inst_29027 = inst_29054;
var inst_29028 = null;
var inst_29029 = (0);
var inst_29030 = (0);
var state_29076__$1 = (function (){var statearr_29085 = state_29076;
(statearr_29085[(8)] = inst_29029);

(statearr_29085[(9)] = inst_29030);

(statearr_29085[(10)] = inst_29027);

(statearr_29085[(11)] = inst_29028);

(statearr_29085[(12)] = inst_29053);

return statearr_29085;
})();
var statearr_29088_30468 = state_29076__$1;
(statearr_29088_30468[(2)] = null);

(statearr_29088_30468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (1))){
var state_29076__$1 = state_29076;
var statearr_29090_30470 = state_29076__$1;
(statearr_29090_30470[(2)] = null);

(statearr_29090_30470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (4))){
var inst_29010 = (state_29076[(13)]);
var inst_29010__$1 = (state_29076[(2)]);
var inst_29011 = (inst_29010__$1 == null);
var state_29076__$1 = (function (){var statearr_29091 = state_29076;
(statearr_29091[(13)] = inst_29010__$1);

return statearr_29091;
})();
if(cljs.core.truth_(inst_29011)){
var statearr_29092_30473 = state_29076__$1;
(statearr_29092_30473[(1)] = (5));

} else {
var statearr_29093_30474 = state_29076__$1;
(statearr_29093_30474[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (15))){
var state_29076__$1 = state_29076;
var statearr_29098_30476 = state_29076__$1;
(statearr_29098_30476[(2)] = null);

(statearr_29098_30476[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (21))){
var state_29076__$1 = state_29076;
var statearr_29099_30481 = state_29076__$1;
(statearr_29099_30481[(2)] = null);

(statearr_29099_30481[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (13))){
var inst_29029 = (state_29076[(8)]);
var inst_29030 = (state_29076[(9)]);
var inst_29027 = (state_29076[(10)]);
var inst_29028 = (state_29076[(11)]);
var inst_29038 = (state_29076[(2)]);
var inst_29039 = (inst_29030 + (1));
var tmp29095 = inst_29029;
var tmp29096 = inst_29027;
var tmp29097 = inst_29028;
var inst_29027__$1 = tmp29096;
var inst_29028__$1 = tmp29097;
var inst_29029__$1 = tmp29095;
var inst_29030__$1 = inst_29039;
var state_29076__$1 = (function (){var statearr_29104 = state_29076;
(statearr_29104[(8)] = inst_29029__$1);

(statearr_29104[(9)] = inst_29030__$1);

(statearr_29104[(10)] = inst_29027__$1);

(statearr_29104[(11)] = inst_29028__$1);

(statearr_29104[(14)] = inst_29038);

return statearr_29104;
})();
var statearr_29105_30488 = state_29076__$1;
(statearr_29105_30488[(2)] = null);

(statearr_29105_30488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (22))){
var state_29076__$1 = state_29076;
var statearr_29106_30490 = state_29076__$1;
(statearr_29106_30490[(2)] = null);

(statearr_29106_30490[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (6))){
var inst_29010 = (state_29076[(13)]);
var inst_29025 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29010) : f.call(null,inst_29010));
var inst_29026 = cljs.core.seq(inst_29025);
var inst_29027 = inst_29026;
var inst_29028 = null;
var inst_29029 = (0);
var inst_29030 = (0);
var state_29076__$1 = (function (){var statearr_29108 = state_29076;
(statearr_29108[(8)] = inst_29029);

(statearr_29108[(9)] = inst_29030);

(statearr_29108[(10)] = inst_29027);

(statearr_29108[(11)] = inst_29028);

return statearr_29108;
})();
var statearr_29122_30496 = state_29076__$1;
(statearr_29122_30496[(2)] = null);

(statearr_29122_30496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (17))){
var inst_29042 = (state_29076[(7)]);
var inst_29046 = cljs.core.chunk_first(inst_29042);
var inst_29047 = cljs.core.chunk_rest(inst_29042);
var inst_29048 = cljs.core.count(inst_29046);
var inst_29027 = inst_29047;
var inst_29028 = inst_29046;
var inst_29029 = inst_29048;
var inst_29030 = (0);
var state_29076__$1 = (function (){var statearr_29123 = state_29076;
(statearr_29123[(8)] = inst_29029);

(statearr_29123[(9)] = inst_29030);

(statearr_29123[(10)] = inst_29027);

(statearr_29123[(11)] = inst_29028);

return statearr_29123;
})();
var statearr_29127_30505 = state_29076__$1;
(statearr_29127_30505[(2)] = null);

(statearr_29127_30505[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (3))){
var inst_29074 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29076__$1,inst_29074);
} else {
if((state_val_29078 === (12))){
var inst_29062 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29132_30509 = state_29076__$1;
(statearr_29132_30509[(2)] = inst_29062);

(statearr_29132_30509[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (2))){
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29076__$1,(4),in$);
} else {
if((state_val_29078 === (23))){
var inst_29070 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29141_30510 = state_29076__$1;
(statearr_29141_30510[(2)] = inst_29070);

(statearr_29141_30510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (19))){
var inst_29057 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29146_30511 = state_29076__$1;
(statearr_29146_30511[(2)] = inst_29057);

(statearr_29146_30511[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (11))){
var inst_29027 = (state_29076[(10)]);
var inst_29042 = (state_29076[(7)]);
var inst_29042__$1 = cljs.core.seq(inst_29027);
var state_29076__$1 = (function (){var statearr_29155 = state_29076;
(statearr_29155[(7)] = inst_29042__$1);

return statearr_29155;
})();
if(inst_29042__$1){
var statearr_29156_30517 = state_29076__$1;
(statearr_29156_30517[(1)] = (14));

} else {
var statearr_29157_30518 = state_29076__$1;
(statearr_29157_30518[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (9))){
var inst_29064 = (state_29076[(2)]);
var inst_29065 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_29076__$1 = (function (){var statearr_29158 = state_29076;
(statearr_29158[(15)] = inst_29064);

return statearr_29158;
})();
if(cljs.core.truth_(inst_29065)){
var statearr_29159_30522 = state_29076__$1;
(statearr_29159_30522[(1)] = (21));

} else {
var statearr_29160_30524 = state_29076__$1;
(statearr_29160_30524[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (5))){
var inst_29013 = cljs.core.async.close_BANG_(out);
var state_29076__$1 = state_29076;
var statearr_29161_30527 = state_29076__$1;
(statearr_29161_30527[(2)] = inst_29013);

(statearr_29161_30527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (14))){
var inst_29042 = (state_29076[(7)]);
var inst_29044 = cljs.core.chunked_seq_QMARK_(inst_29042);
var state_29076__$1 = state_29076;
if(inst_29044){
var statearr_29162_30530 = state_29076__$1;
(statearr_29162_30530[(1)] = (17));

} else {
var statearr_29163_30531 = state_29076__$1;
(statearr_29163_30531[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (16))){
var inst_29060 = (state_29076[(2)]);
var state_29076__$1 = state_29076;
var statearr_29164_30532 = state_29076__$1;
(statearr_29164_30532[(2)] = inst_29060);

(statearr_29164_30532[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29078 === (10))){
var inst_29030 = (state_29076[(9)]);
var inst_29028 = (state_29076[(11)]);
var inst_29036 = cljs.core._nth(inst_29028,inst_29030);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29076__$1,(13),out,inst_29036);
} else {
if((state_val_29078 === (18))){
var inst_29042 = (state_29076[(7)]);
var inst_29051 = cljs.core.first(inst_29042);
var state_29076__$1 = state_29076;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29076__$1,(20),out,inst_29051);
} else {
if((state_val_29078 === (8))){
var inst_29029 = (state_29076[(8)]);
var inst_29030 = (state_29076[(9)]);
var inst_29032 = (inst_29030 < inst_29029);
var inst_29033 = inst_29032;
var state_29076__$1 = state_29076;
if(cljs.core.truth_(inst_29033)){
var statearr_29165_30542 = state_29076__$1;
(statearr_29165_30542[(1)] = (10));

} else {
var statearr_29166_30544 = state_29076__$1;
(statearr_29166_30544[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__26680__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__26680__auto____0 = (function (){
var statearr_29167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29167[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__26680__auto__);

(statearr_29167[(1)] = (1));

return statearr_29167;
});
var cljs$core$async$mapcat_STAR__$_state_machine__26680__auto____1 = (function (state_29076){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_29076);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e29168){var ex__26683__auto__ = e29168;
var statearr_29170_30545 = state_29076;
(statearr_29170_30545[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_29076[(4)]))){
var statearr_29171_30548 = state_29076;
(statearr_29171_30548[(1)] = cljs.core.first((state_29076[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30549 = state_29076;
state_29076 = G__30549;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__26680__auto__ = function(state_29076){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__26680__auto____1.call(this,state_29076);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__26680__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__26680__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_29173 = f__26970__auto__();
(statearr_29173[(6)] = c__26969__auto__);

return statearr_29173;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));

return c__26969__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29175 = arguments.length;
switch (G__29175) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29189 = arguments.length;
switch (G__29189) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29200 = arguments.length;
switch (G__29200) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26969__auto___30578 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_29226){
var state_val_29227 = (state_29226[(1)]);
if((state_val_29227 === (7))){
var inst_29221 = (state_29226[(2)]);
var state_29226__$1 = state_29226;
var statearr_29230_30579 = state_29226__$1;
(statearr_29230_30579[(2)] = inst_29221);

(statearr_29230_30579[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29227 === (1))){
var inst_29201 = null;
var state_29226__$1 = (function (){var statearr_29231 = state_29226;
(statearr_29231[(7)] = inst_29201);

return statearr_29231;
})();
var statearr_29232_30584 = state_29226__$1;
(statearr_29232_30584[(2)] = null);

(statearr_29232_30584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29227 === (4))){
var inst_29204 = (state_29226[(8)]);
var inst_29204__$1 = (state_29226[(2)]);
var inst_29206 = (inst_29204__$1 == null);
var inst_29207 = cljs.core.not(inst_29206);
var state_29226__$1 = (function (){var statearr_29233 = state_29226;
(statearr_29233[(8)] = inst_29204__$1);

return statearr_29233;
})();
if(inst_29207){
var statearr_29234_30589 = state_29226__$1;
(statearr_29234_30589[(1)] = (5));

} else {
var statearr_29235_30590 = state_29226__$1;
(statearr_29235_30590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29227 === (6))){
var state_29226__$1 = state_29226;
var statearr_29236_30591 = state_29226__$1;
(statearr_29236_30591[(2)] = null);

(statearr_29236_30591[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29227 === (3))){
var inst_29223 = (state_29226[(2)]);
var inst_29224 = cljs.core.async.close_BANG_(out);
var state_29226__$1 = (function (){var statearr_29237 = state_29226;
(statearr_29237[(9)] = inst_29223);

return statearr_29237;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29226__$1,inst_29224);
} else {
if((state_val_29227 === (2))){
var state_29226__$1 = state_29226;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29226__$1,(4),ch);
} else {
if((state_val_29227 === (11))){
var inst_29204 = (state_29226[(8)]);
var inst_29215 = (state_29226[(2)]);
var inst_29201 = inst_29204;
var state_29226__$1 = (function (){var statearr_29240 = state_29226;
(statearr_29240[(7)] = inst_29201);

(statearr_29240[(10)] = inst_29215);

return statearr_29240;
})();
var statearr_29241_30598 = state_29226__$1;
(statearr_29241_30598[(2)] = null);

(statearr_29241_30598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29227 === (9))){
var inst_29204 = (state_29226[(8)]);
var state_29226__$1 = state_29226;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29226__$1,(11),out,inst_29204);
} else {
if((state_val_29227 === (5))){
var inst_29201 = (state_29226[(7)]);
var inst_29204 = (state_29226[(8)]);
var inst_29210 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29204,inst_29201);
var state_29226__$1 = state_29226;
if(inst_29210){
var statearr_29243_30604 = state_29226__$1;
(statearr_29243_30604[(1)] = (8));

} else {
var statearr_29244_30605 = state_29226__$1;
(statearr_29244_30605[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29227 === (10))){
var inst_29218 = (state_29226[(2)]);
var state_29226__$1 = state_29226;
var statearr_29245_30610 = state_29226__$1;
(statearr_29245_30610[(2)] = inst_29218);

(statearr_29245_30610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29227 === (8))){
var inst_29201 = (state_29226[(7)]);
var tmp29242 = inst_29201;
var inst_29201__$1 = tmp29242;
var state_29226__$1 = (function (){var statearr_29246 = state_29226;
(statearr_29246[(7)] = inst_29201__$1);

return statearr_29246;
})();
var statearr_29247_30611 = state_29226__$1;
(statearr_29247_30611[(2)] = null);

(statearr_29247_30611[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_29256 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29256[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_29256[(1)] = (1));

return statearr_29256;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_29226){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_29226);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e29261){var ex__26683__auto__ = e29261;
var statearr_29262_30614 = state_29226;
(statearr_29262_30614[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_29226[(4)]))){
var statearr_29263_30615 = state_29226;
(statearr_29263_30615[(1)] = cljs.core.first((state_29226[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30616 = state_29226;
state_29226 = G__30616;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_29226){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_29226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_29264 = f__26970__auto__();
(statearr_29264[(6)] = c__26969__auto___30578);

return statearr_29264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29267 = arguments.length;
switch (G__29267) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26969__auto___30625 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_29311){
var state_val_29312 = (state_29311[(1)]);
if((state_val_29312 === (7))){
var inst_29307 = (state_29311[(2)]);
var state_29311__$1 = state_29311;
var statearr_29314_30628 = state_29311__$1;
(statearr_29314_30628[(2)] = inst_29307);

(statearr_29314_30628[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (1))){
var inst_29274 = (new Array(n));
var inst_29275 = inst_29274;
var inst_29276 = (0);
var state_29311__$1 = (function (){var statearr_29315 = state_29311;
(statearr_29315[(7)] = inst_29275);

(statearr_29315[(8)] = inst_29276);

return statearr_29315;
})();
var statearr_29317_30629 = state_29311__$1;
(statearr_29317_30629[(2)] = null);

(statearr_29317_30629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (4))){
var inst_29279 = (state_29311[(9)]);
var inst_29279__$1 = (state_29311[(2)]);
var inst_29280 = (inst_29279__$1 == null);
var inst_29281 = cljs.core.not(inst_29280);
var state_29311__$1 = (function (){var statearr_29318 = state_29311;
(statearr_29318[(9)] = inst_29279__$1);

return statearr_29318;
})();
if(inst_29281){
var statearr_29319_30632 = state_29311__$1;
(statearr_29319_30632[(1)] = (5));

} else {
var statearr_29320_30633 = state_29311__$1;
(statearr_29320_30633[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (15))){
var inst_29301 = (state_29311[(2)]);
var state_29311__$1 = state_29311;
var statearr_29321_30634 = state_29311__$1;
(statearr_29321_30634[(2)] = inst_29301);

(statearr_29321_30634[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (13))){
var state_29311__$1 = state_29311;
var statearr_29322_30635 = state_29311__$1;
(statearr_29322_30635[(2)] = null);

(statearr_29322_30635[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (6))){
var inst_29276 = (state_29311[(8)]);
var inst_29297 = (inst_29276 > (0));
var state_29311__$1 = state_29311;
if(cljs.core.truth_(inst_29297)){
var statearr_29323_30636 = state_29311__$1;
(statearr_29323_30636[(1)] = (12));

} else {
var statearr_29324_30637 = state_29311__$1;
(statearr_29324_30637[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (3))){
var inst_29309 = (state_29311[(2)]);
var state_29311__$1 = state_29311;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29311__$1,inst_29309);
} else {
if((state_val_29312 === (12))){
var inst_29275 = (state_29311[(7)]);
var inst_29299 = cljs.core.vec(inst_29275);
var state_29311__$1 = state_29311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29311__$1,(15),out,inst_29299);
} else {
if((state_val_29312 === (2))){
var state_29311__$1 = state_29311;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29311__$1,(4),ch);
} else {
if((state_val_29312 === (11))){
var inst_29291 = (state_29311[(2)]);
var inst_29292 = (new Array(n));
var inst_29275 = inst_29292;
var inst_29276 = (0);
var state_29311__$1 = (function (){var statearr_29326 = state_29311;
(statearr_29326[(7)] = inst_29275);

(statearr_29326[(8)] = inst_29276);

(statearr_29326[(10)] = inst_29291);

return statearr_29326;
})();
var statearr_29327_30640 = state_29311__$1;
(statearr_29327_30640[(2)] = null);

(statearr_29327_30640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (9))){
var inst_29275 = (state_29311[(7)]);
var inst_29289 = cljs.core.vec(inst_29275);
var state_29311__$1 = state_29311;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29311__$1,(11),out,inst_29289);
} else {
if((state_val_29312 === (5))){
var inst_29284 = (state_29311[(11)]);
var inst_29279 = (state_29311[(9)]);
var inst_29275 = (state_29311[(7)]);
var inst_29276 = (state_29311[(8)]);
var inst_29283 = (inst_29275[inst_29276] = inst_29279);
var inst_29284__$1 = (inst_29276 + (1));
var inst_29285 = (inst_29284__$1 < n);
var state_29311__$1 = (function (){var statearr_29328 = state_29311;
(statearr_29328[(12)] = inst_29283);

(statearr_29328[(11)] = inst_29284__$1);

return statearr_29328;
})();
if(cljs.core.truth_(inst_29285)){
var statearr_29329_30641 = state_29311__$1;
(statearr_29329_30641[(1)] = (8));

} else {
var statearr_29330_30642 = state_29311__$1;
(statearr_29330_30642[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (14))){
var inst_29304 = (state_29311[(2)]);
var inst_29305 = cljs.core.async.close_BANG_(out);
var state_29311__$1 = (function (){var statearr_29332 = state_29311;
(statearr_29332[(13)] = inst_29304);

return statearr_29332;
})();
var statearr_29333_30643 = state_29311__$1;
(statearr_29333_30643[(2)] = inst_29305);

(statearr_29333_30643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (10))){
var inst_29295 = (state_29311[(2)]);
var state_29311__$1 = state_29311;
var statearr_29334_30644 = state_29311__$1;
(statearr_29334_30644[(2)] = inst_29295);

(statearr_29334_30644[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29312 === (8))){
var inst_29284 = (state_29311[(11)]);
var inst_29275 = (state_29311[(7)]);
var tmp29331 = inst_29275;
var inst_29275__$1 = tmp29331;
var inst_29276 = inst_29284;
var state_29311__$1 = (function (){var statearr_29335 = state_29311;
(statearr_29335[(7)] = inst_29275__$1);

(statearr_29335[(8)] = inst_29276);

return statearr_29335;
})();
var statearr_29336_30645 = state_29311__$1;
(statearr_29336_30645[(2)] = null);

(statearr_29336_30645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_29337 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29337[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_29337[(1)] = (1));

return statearr_29337;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_29311){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_29311);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e29338){var ex__26683__auto__ = e29338;
var statearr_29340_30646 = state_29311;
(statearr_29340_30646[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_29311[(4)]))){
var statearr_29341_30647 = state_29311;
(statearr_29341_30647[(1)] = cljs.core.first((state_29311[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30651 = state_29311;
state_29311 = G__30651;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_29311){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_29311);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_29342 = f__26970__auto__();
(statearr_29342[(6)] = c__26969__auto___30625);

return statearr_29342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29344 = arguments.length;
switch (G__29344) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__26969__auto___30656 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__26970__auto__ = (function (){var switch__26679__auto__ = (function (state_29390){
var state_val_29391 = (state_29390[(1)]);
if((state_val_29391 === (7))){
var inst_29386 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29392_30661 = state_29390__$1;
(statearr_29392_30661[(2)] = inst_29386);

(statearr_29392_30661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (1))){
var inst_29346 = [];
var inst_29347 = inst_29346;
var inst_29348 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29390__$1 = (function (){var statearr_29393 = state_29390;
(statearr_29393[(7)] = inst_29348);

(statearr_29393[(8)] = inst_29347);

return statearr_29393;
})();
var statearr_29394_30666 = state_29390__$1;
(statearr_29394_30666[(2)] = null);

(statearr_29394_30666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (4))){
var inst_29351 = (state_29390[(9)]);
var inst_29351__$1 = (state_29390[(2)]);
var inst_29352 = (inst_29351__$1 == null);
var inst_29353 = cljs.core.not(inst_29352);
var state_29390__$1 = (function (){var statearr_29395 = state_29390;
(statearr_29395[(9)] = inst_29351__$1);

return statearr_29395;
})();
if(inst_29353){
var statearr_29396_30668 = state_29390__$1;
(statearr_29396_30668[(1)] = (5));

} else {
var statearr_29398_30672 = state_29390__$1;
(statearr_29398_30672[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (15))){
var inst_29347 = (state_29390[(8)]);
var inst_29378 = cljs.core.vec(inst_29347);
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29390__$1,(18),out,inst_29378);
} else {
if((state_val_29391 === (13))){
var inst_29373 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29402_30676 = state_29390__$1;
(statearr_29402_30676[(2)] = inst_29373);

(statearr_29402_30676[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (6))){
var inst_29347 = (state_29390[(8)]);
var inst_29375 = inst_29347.length;
var inst_29376 = (inst_29375 > (0));
var state_29390__$1 = state_29390;
if(cljs.core.truth_(inst_29376)){
var statearr_29405_30677 = state_29390__$1;
(statearr_29405_30677[(1)] = (15));

} else {
var statearr_29406_30678 = state_29390__$1;
(statearr_29406_30678[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (17))){
var inst_29383 = (state_29390[(2)]);
var inst_29384 = cljs.core.async.close_BANG_(out);
var state_29390__$1 = (function (){var statearr_29407 = state_29390;
(statearr_29407[(10)] = inst_29383);

return statearr_29407;
})();
var statearr_29408_30680 = state_29390__$1;
(statearr_29408_30680[(2)] = inst_29384);

(statearr_29408_30680[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (3))){
var inst_29388 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29390__$1,inst_29388);
} else {
if((state_val_29391 === (12))){
var inst_29347 = (state_29390[(8)]);
var inst_29366 = cljs.core.vec(inst_29347);
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29390__$1,(14),out,inst_29366);
} else {
if((state_val_29391 === (2))){
var state_29390__$1 = state_29390;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29390__$1,(4),ch);
} else {
if((state_val_29391 === (11))){
var inst_29351 = (state_29390[(9)]);
var inst_29355 = (state_29390[(11)]);
var inst_29347 = (state_29390[(8)]);
var inst_29363 = inst_29347.push(inst_29351);
var tmp29409 = inst_29347;
var inst_29347__$1 = tmp29409;
var inst_29348 = inst_29355;
var state_29390__$1 = (function (){var statearr_29410 = state_29390;
(statearr_29410[(7)] = inst_29348);

(statearr_29410[(8)] = inst_29347__$1);

(statearr_29410[(12)] = inst_29363);

return statearr_29410;
})();
var statearr_29411_30684 = state_29390__$1;
(statearr_29411_30684[(2)] = null);

(statearr_29411_30684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (9))){
var inst_29348 = (state_29390[(7)]);
var inst_29359 = cljs.core.keyword_identical_QMARK_(inst_29348,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_29390__$1 = state_29390;
var statearr_29414_30689 = state_29390__$1;
(statearr_29414_30689[(2)] = inst_29359);

(statearr_29414_30689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (5))){
var inst_29348 = (state_29390[(7)]);
var inst_29351 = (state_29390[(9)]);
var inst_29356 = (state_29390[(13)]);
var inst_29355 = (state_29390[(11)]);
var inst_29355__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_29351) : f.call(null,inst_29351));
var inst_29356__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_29355__$1,inst_29348);
var state_29390__$1 = (function (){var statearr_29417 = state_29390;
(statearr_29417[(13)] = inst_29356__$1);

(statearr_29417[(11)] = inst_29355__$1);

return statearr_29417;
})();
if(inst_29356__$1){
var statearr_29418_30701 = state_29390__$1;
(statearr_29418_30701[(1)] = (8));

} else {
var statearr_29420_30702 = state_29390__$1;
(statearr_29420_30702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (14))){
var inst_29351 = (state_29390[(9)]);
var inst_29355 = (state_29390[(11)]);
var inst_29368 = (state_29390[(2)]);
var inst_29369 = [];
var inst_29370 = inst_29369.push(inst_29351);
var inst_29347 = inst_29369;
var inst_29348 = inst_29355;
var state_29390__$1 = (function (){var statearr_29429 = state_29390;
(statearr_29429[(7)] = inst_29348);

(statearr_29429[(8)] = inst_29347);

(statearr_29429[(14)] = inst_29368);

(statearr_29429[(15)] = inst_29370);

return statearr_29429;
})();
var statearr_29431_30703 = state_29390__$1;
(statearr_29431_30703[(2)] = null);

(statearr_29431_30703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (16))){
var state_29390__$1 = state_29390;
var statearr_29434_30704 = state_29390__$1;
(statearr_29434_30704[(2)] = null);

(statearr_29434_30704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (10))){
var inst_29361 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
if(cljs.core.truth_(inst_29361)){
var statearr_29439_30706 = state_29390__$1;
(statearr_29439_30706[(1)] = (11));

} else {
var statearr_29440_30707 = state_29390__$1;
(statearr_29440_30707[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (18))){
var inst_29380 = (state_29390[(2)]);
var state_29390__$1 = state_29390;
var statearr_29441_30708 = state_29390__$1;
(statearr_29441_30708[(2)] = inst_29380);

(statearr_29441_30708[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29391 === (8))){
var inst_29356 = (state_29390[(13)]);
var state_29390__$1 = state_29390;
var statearr_29442_30709 = state_29390__$1;
(statearr_29442_30709[(2)] = inst_29356);

(statearr_29442_30709[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__26680__auto__ = null;
var cljs$core$async$state_machine__26680__auto____0 = (function (){
var statearr_29443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29443[(0)] = cljs$core$async$state_machine__26680__auto__);

(statearr_29443[(1)] = (1));

return statearr_29443;
});
var cljs$core$async$state_machine__26680__auto____1 = (function (state_29390){
while(true){
var ret_value__26681__auto__ = (function (){try{while(true){
var result__26682__auto__ = switch__26679__auto__(state_29390);
if(cljs.core.keyword_identical_QMARK_(result__26682__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__26682__auto__;
}
break;
}
}catch (e29444){var ex__26683__auto__ = e29444;
var statearr_29445_30710 = state_29390;
(statearr_29445_30710[(2)] = ex__26683__auto__);


if(cljs.core.seq((state_29390[(4)]))){
var statearr_29446_30711 = state_29390;
(statearr_29446_30711[(1)] = cljs.core.first((state_29390[(4)])));

} else {
throw ex__26683__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__26681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30715 = state_29390;
state_29390 = G__30715;
continue;
} else {
return ret_value__26681__auto__;
}
break;
}
});
cljs$core$async$state_machine__26680__auto__ = function(state_29390){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__26680__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__26680__auto____1.call(this,state_29390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__26680__auto____0;
cljs$core$async$state_machine__26680__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__26680__auto____1;
return cljs$core$async$state_machine__26680__auto__;
})()
})();
var state__26971__auto__ = (function (){var statearr_29447 = f__26970__auto__();
(statearr_29447[(6)] = c__26969__auto___30656);

return statearr_29447;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__26971__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
