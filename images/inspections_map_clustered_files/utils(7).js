// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../geometry/support/jsonUtils"],function(h,b,f){Object.defineProperty(b,"__esModule",{value:!0});var g=function(){return function(a,d,c){this.geometryType=a;this.hasM=d;this.hasZ=c}}();b.OptimizedGeometryInfo=g;var e={};b.getOptimizedGeometryInfo=function(a){var d=f.getJsonType(a),c;f.isPoint(a)?(c=null!=a.z,a=null!=a.m):(c=a.hasZ,a=a.hasM);var b=d+c+a;e[b]||(e[b]=new g(d,c,a));return e[b]};b.getStride=function(a,b){return a?b?4:3:b?3:2}});