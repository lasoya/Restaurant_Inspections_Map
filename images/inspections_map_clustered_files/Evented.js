// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./tsSupport/extendsHelper","@dojo/framework/shim/Map"],function(e,l,g,h){var k=function(){function b(a){this.target=a}b.prototype.emit=function(a,c){var b=this;a=this._listenersMap&&this._listenersMap.get(a);if(!a)return!1;c=c||{};c.target||(c.target=this.target);a.slice().forEach(function(a){a.call(b.target,c)});return 0<a.length};b.prototype.on=function(a,c){var b=this;if(Array.isArray(a)){var d=a.map(function(a){return b.on(a,c)});return{remove:function(){return d.forEach(function(a){return a.remove()})}}}if(-1<
a.indexOf(","))throw new TypeError("Evented.on() with a comma delimited string of event types is not supported");this._listenersMap||(this._listenersMap=new h.default);var f=this._listenersMap.get(a)||[];f.push(c);this._listenersMap.set(a,f);return{remove:function(){var d=b._listenersMap.get(a)||[];d.splice(d.indexOf(c),1)}}};b.prototype.once=function(a,c){var b=this,d;return d=this.on(a,function(a){d.remove();c.call(b.target,a)})};b.prototype.hasEventListener=function(a){a=this._listenersMap&&this._listenersMap.get(a);
return null!=a&&0<a.length};return b}();e=function(){function b(){this._emitter=new k(this)}b.prototype.emit=function(a,c){return this._emitter.emit(a,c)};b.prototype.on=function(a,c){return this._emitter.on(a,c)};b.prototype.once=function(a,c){return this._emitter.once(a,c)};b.prototype.hasEventListener=function(a){return this._emitter.hasEventListener(a)};return b}();(function(b){b.EventedMixin=function(a){return function(a){function b(){return null!==a&&a.apply(this,arguments)||this}g(b,a);b.prototype.emit=
function(a,b){return this._emitter.emit(a,b)};b.prototype.on=function(a,b){return this._emitter.on(a,b)};b.prototype.once=function(a,b){return this._emitter.once(a,b)};b.prototype.hasEventListener=function(a){return this._emitter.hasEventListener(a)};return b}(a)}})(e||(e={}));return e});