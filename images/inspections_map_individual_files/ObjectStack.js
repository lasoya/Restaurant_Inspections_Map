// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./nextTick"],function(b,c,d){Object.defineProperty(c,"__esModule",{value:!0});b=function(){function a(a){var b=this;this.allocator=a;this.items=[];this.itemsPtr=0;this.tickHandle=d.before(function(){return b.reset()});this.grow()}a.prototype.destroy=function(){this.tickHandle&&(this.tickHandle.remove(),this.tickHandle=null);this.items=null};a.prototype.get=function(){0===this.itemsPtr&&d(function(){});this.itemsPtr===this.items.length&&this.grow();return this.items[this.itemsPtr++]};
a.prototype.reset=function(){this.items.length=Math.min(Math.min(3*Math.max(8,this.itemsPtr),this.itemsPtr+3*e),this.items.length);this.itemsPtr=0};a.prototype.grow=function(){for(var a=0;a<Math.max(8,Math.min(this.items.length,e));a++)this.items.push(this.allocator())};return a}();c.ObjectStack=b;var e=1024;c.default=b});