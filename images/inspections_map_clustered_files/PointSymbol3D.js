// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/Error ../core/lang ../core/accessorSupport/decorators ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(v,w,n,b,e,p,f,d,k,l,q,r,g,t){var m=e.ofType({base:null,key:"type",typeMap:{icon:k,object:l,text:r}}),u=e.ofType({base:null,key:"type",typeMap:{icon:k,object:l}});return function(e){function a(c){c=
e.call(this)||this;c.verticalOffset=null;c.callout=null;c.symbolLayers=new m;c.type="point-3d";return c}n(a,e);h=a;a.prototype.writeSymbolLayers=function(c,a,d,b){var e=c.filter(function(a){return"text"!==a.type});b&&b.messages&&e.length<c.length&&(c=c.find(function(a){return"text"===a.type}),b.messages.push(new p("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:c})));a[d]=e.map(function(a){return a.write({},b)}).toArray()};a.prototype.supportsCallout=
function(){if(1>(this.symbolLayers?this.symbolLayers.length:0))return!1;for(var a=0,b=this.symbolLayers.items;a<b.length;a++)switch(b[a].type){case "icon":case "text":case "object":continue;default:return!1}return!0};a.prototype.hasVisibleCallout=function(){return g.hasVisibleCallout(this)};a.prototype.hasVisibleVerticalOffset=function(){return g.hasVisibleVerticalOffset(this)};a.prototype.clone=function(){return new h({verticalOffset:f.clone(this.verticalOffset),callout:f.clone(this.callout),styleOrigin:f.clone(this.styleOrigin),
symbolLayers:f.clone(this.symbolLayers),thumbnail:f.clone(this.thumbnail)})};var h;b([d.property({type:t.default,json:{write:!0}})],a.prototype,"verticalOffset",void 0);b([d.property(g.calloutProperty)],a.prototype,"callout",void 0);b([d.property({type:m,json:{type:u}})],a.prototype,"symbolLayers",void 0);b([d.writer("web-scene","symbolLayers")],a.prototype,"writeSymbolLayers",null);b([d.enumeration.serializable()({PointSymbol3D:"point-3d"})],a.prototype,"type",void 0);return a=h=b([d.subclass("esri.symbols.PointSymbol3D")],
a)}(d.declared(q))});