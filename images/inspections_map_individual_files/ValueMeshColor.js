// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/lang ../../core/Logger ../../core/accessorSupport/decorators ./MeshColor".split(" "),function(n,p,f,c,g,h,k,b,l){var m=k.getLogger("esri.geometry.support.ValueMeshColor");return function(e){function a(a){a=e.call(this)||this;a.type="value";a.value=null;m.warn("esri/geometry/support/ValueMeshColor is deprecated since version 4.11. Use esri/Color instead.");return a}f(a,e);d=
a;a.prototype.clone=function(){return new d({value:h.clone(this.value)})};var d;c([b.property()],a.prototype,"type",void 0);c([b.property({type:g})],a.prototype,"value",void 0);return a=d=c([b.subclass("esri.geometry.support.ValueMeshColor")],a)}(b.declared(l.default))});