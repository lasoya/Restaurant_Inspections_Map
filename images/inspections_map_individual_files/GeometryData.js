// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./ComponentUtils","./geometryDataUtils","./Util"],function(q,r,n,h,k){return function(){function a(c,b,e,f){void 0===b&&(b=a.DefaultIndices);void 0===e&&(e=a.DefaultOffsets);void 0===f&&(f="triangle");this.preinterleaved=!1;var d={},g;for(g in c){var l=c[g],m=l.size;d[g]={data:l.data,size:m,offsetIdx:0,strideIdx:m}}if(b===a.DefaultIndices){b=k.getFirstObjectValue(d);c=h.generateDefaultIndexArray(b.data.length/b.size);b={};for(var p in d)b[p]=c}this._id=h.getNewId();this._vertexAttributes=
d;this._indices=b;this._componentOffsets=n.createOffsets(e);this._primitiveType=f}Object.defineProperty(a.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"vertexAttributes",{get:function(){return this._vertexAttributes},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"indices",{get:function(){return this._indices},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"componentOffsets",{get:function(){return this._componentOffsets},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"indexCount",{get:function(){return k.getFirstObjectValue(this._indices).length},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"primitiveType",{get:function(){return this._primitiveType},enumerable:!0,configurable:!0});a.prototype.getVertexAttr=function(){return this.vertexAttributes};a.prototype.toRenderData=function(){return{id:this._id.toString(),preinterleaved:!1,indices:this._indices,vertexAttr:this._vertexAttributes}};
a.prototype.getIndices=function(a){return this._indices[a]};a.prototype.getAttribute=function(a){return this._vertexAttributes[a]};a.prototype.estimateGpuMemoryUsage=function(){var a=0;this._indices.position&&(a+=12*this._indices.position.length);this._indices.normal&&(a+=12*this._indices.normal.length);this._indices.uv0&&(a+=8*this._indices.uv0.length);this._indices.color&&(a+=4*this._indices.color.length);return a};a.DefaultIndices={};a.DefaultOffsets=new Uint32Array(0);return a}()});