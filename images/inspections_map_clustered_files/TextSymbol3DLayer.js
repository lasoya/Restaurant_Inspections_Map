// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ../core/lang ../core/accessorSupport/decorators ./Font ./Symbol3DLayer ./support/materialUtils ./support/Symbol3DHalo".split(" "),function(p,q,g,c,h,e,b,k,l,m,n){return function(f){function a(a){a=f.call(this)||this;a._userSize=void 0;a.halo=null;a.material=null;a.text=void 0;a.type="text";return a}g(a,f);d=a;Object.defineProperty(a.prototype,"font",{get:function(){return this._get("font")||
null},set:function(a){a&&this._userSize&&(a.size=this._userSize);this._set("font",a)},enumerable:!0,configurable:!0});a.prototype.writeFont=function(a,b,c,d){c=h({},d,{textSymbol3D:!0});b.font=a.write({},c);delete b.font.size};Object.defineProperty(a.prototype,"size",{get:function(){return null!=this._userSize?this._userSize:this.font&&null!=this.font.size?this.font.size:9},set:function(a){this._userSize=a;this.font&&(this.font.size=this._userSize);this.notifyChange("size")},enumerable:!0,configurable:!0});
a.prototype.clone=function(){return new d({enabled:this.enabled,elevationInfo:this.elevationInfo&&this.elevationInfo.clone(),font:this.font&&e.clone(this.font),halo:this.halo&&e.clone(this.halo),material:this.material&&this.material.clone(),size:this.size,text:this.text})};var d;c([b.property({type:k,json:{write:!0}})],a.prototype,"font",null);c([b.writer("font")],a.prototype,"writeFont",null);c([b.property({type:n.default,json:{write:!0}})],a.prototype,"halo",void 0);c([b.property()],a.prototype,
"material",void 0);c([b.property(m.screenSizeProperty),b.property({dependsOn:["font.size"]})],a.prototype,"size",null);c([b.property({type:String,json:{write:!0}})],a.prototype,"text",void 0);c([b.enumeration.serializable()({Text:"text"})],a.prototype,"type",void 0);return a=d=c([b.subclass("esri.symbols.TextSymbol3DLayer")],a)}(b.declared(l))});