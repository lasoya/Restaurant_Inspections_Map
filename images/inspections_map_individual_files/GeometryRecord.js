// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./IdGen"],function(h,k,b){return function(){function a(c,b,d,e,f,g){this.id=a._idGen.gen(c.id);this.geometry=c;this.material=b;this.transformation=d;this.instanceParameters=e;this.origin=f;this.shaderTransformation=g}a.prototype.getStaticTransformation=function(){return this.transformation};a.prototype.getShaderTransformation=function(){return this.shaderTransformation?this.shaderTransformation(this.transformation):this.transformation};a._idGen=new b;return a}()});