// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/lang ../core/accessorSupport/decorators ./LineSymbol3DLayer ./PathSymbol3DLayer ./Symbol3D".split(" "),function(p,q,l,d,b,e,c,g,h,m){var k=b.ofType({base:null,key:"type",typeMap:{line:g,path:h}}),n=b.ofType({base:null,key:"type",typeMap:{line:g,path:h}});return function(b){function a(a){a=b.call(this)||this;a.symbolLayers=new k;a.type="line-3d";return a}l(a,b);f=a;a.prototype.clone=
function(){return new f({styleOrigin:e.clone(this.styleOrigin),symbolLayers:e.clone(this.symbolLayers),thumbnail:e.clone(this.thumbnail)})};var f;d([c.property({type:k,json:{type:n}})],a.prototype,"symbolLayers",void 0);d([c.enumeration.serializable()({LineSymbol3D:"line-3d"})],a.prototype,"type",void 0);return a=f=d([c.subclass("esri.symbols.LineSymbol3D")],a)}(c.declared(m))});