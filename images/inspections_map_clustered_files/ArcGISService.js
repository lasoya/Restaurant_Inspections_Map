// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Logger ../../core/MultiOriginJSONSupport ../../core/accessorSupport/decorators ../support/arcgisLayerUrl".split(" "),function(l,m,f,c,g,h,b,e){var k=g.getLogger("esri.layers.mixins.ArcGISService");return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}f(a,d);Object.defineProperty(a.prototype,"title",{get:function(){if(this._get("title")&&"defaults"!==this.originOf("title"))return this._get("title");
if(this.url){var a=e.parse(this.url);if(a&&a.title)return a.title}return this._get("title")||""},set:function(a){this._set("title",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"url",{set:function(a){this._set("url",e.sanitizeUrl(a,k))},enumerable:!0,configurable:!0});c([b.property({dependsOn:["url"]})],a.prototype,"title",null);c([b.property({type:String})],a.prototype,"url",null);return a=c([b.subclass("esri.layers.mixins.ArcGISService")],a)}(b.declared(h))});