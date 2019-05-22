// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/arrayUtils","../../../../../core/maybe","../../../../../core/typedArrayUtil"],function(n,d,m,g,k){function l(a,b){var c=m.binaryIndexOf(a,b,!0);return-1===c?b<a[0]?0:a.length:c}Object.defineProperty(d,"__esModule",{value:!0});d.determineRendererType=function(a){for(var b=null,c=0;c<a.length;c++){var e=a[c],d=e.type;if(0<e.size*e.color[3]*e.opacity)if(g.isNone(b))b=d;else if(b!==d)return"uber"}return g.isSome(b)?b:"solid"};d.determineAllTransparent=
function(a){if(0===a.length)return!0;for(var b=0;b<a.length;b++){var c=a[b].material;if(0<c.size*c.color[3]*c.opacity)return!1}return!0};d.cloneIndices=function(a){if(Uint16Array.from)return k.isUint16Array(a)?Uint16Array.from(a):Uint32Array.from(a);for(var b=k.isUint16Array(a)?new Uint16Array(a.length):new Uint32Array(a.length),c=0;c<a.length;c++)b[c]=a[c];return b};d.estimateLengthAtDistance=function(a,b,c,d){return d/a*c*2*Math.tan(.5*b)};d.findLowerBoundIndex=l;d.computeEdgeCount=function(a,b,
c){return a.length-l(a,b*c.minimumEdgeLength)};d.fillComponenBufferIndices=function(a,b,c,d){for(var h=0;h<a.length;h++){var e=a[h].index,f=b[h],g=b[h+1];if(d)for(;f<g;f++)c.set(d[f],e);else for(;f<g;f++)c.set(f,e)}}});