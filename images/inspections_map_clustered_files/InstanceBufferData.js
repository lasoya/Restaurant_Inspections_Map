// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/mathUtils"],function(h,k,g){return function(){function c(a,b){void 0===b&&(b=0);this.count=this.capacity=0;this.emptySlots=[];this.emptySlotCount=0;this.id2slot=new Map;this.slot2id=[];this.layout=a;this.resize(b)}c.prototype.prepareAllocate=function(a){a=this.count+a;a>this.capacity&&this.resize(a)};c.prototype.allocate=function(a){this.count>=this.capacity&&this.resize(this.count+1);var b=0<this.emptySlotCount?this.emptySlots[--this.emptySlotCount]:
this.count;this.id2slot.set(a,b);this.slot2id[b]=a;this.count++;return b};c.prototype.prepareFree=function(a){this.emptySlots.length+=a};c.prototype.free=function(a){var b=this.id2slot.get(a);null!=b&&(this.emptySlots.length<=this.emptySlotCount&&(this.emptySlots.length=this.emptySlotCount+1),this.emptySlots[this.emptySlotCount++]=b,this.id2slot.delete(a),this.slot2id[b]=null,this.count--)};c.prototype.getCount=function(){return this.count};c.prototype.getSlot=function(a){return this.id2slot.get(a)};
c.prototype.hasSlot=function(a){return this.id2slot.has(a)};c.prototype.getBuffer=function(){return this.buffer};c.prototype.compact=function(){if(0<this.emptySlotCount){var a=this.emptySlots,b=this.emptySlotCount,c=this.count+b;a.length=b;for(a.sort(function(a,b){return a-b});0<b;){if(a[b-1]!==c-1){var d=c-1,e=a[b-1];this.buffer.copyFrom(this.buffer,d,e,1);var f=this.slot2id[d];this.slot2id[d]=null;this.slot2id[e]=f;this.id2slot.set(f,e)}b--;c--}}this.emptySlotCount=0;this.emptySlots.length=0;this.resize(this.count)};
c.prototype.resize=function(a){var b=this.capacity;a=Math.max(0,a);0<a&&(a=g.nextHighestPowerOfTwo(a));if(a>b){var c=this.layout.createBuffer(a);this.buffer&&c.copyFrom(this.buffer,0,0,b);this.buffer=c}else a<b&&(c=this.layout.createBuffer(a),c.copyFrom(this.buffer,0,0,a),this.buffer=c);this.buffer||(this.buffer=this.layout.createBuffer(0));this.capacity=a;this.slot2id.length=a};return c}()});