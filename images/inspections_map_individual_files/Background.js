// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/JSONSupport ../../core/kebabDictionary ../../core/accessorSupport/decorators".split(" "),function(m,n,g,e,h,k,l,c){var d=l.strict()({color:"color"});return function(f){function b(a){return f.call(this)||this}g(b,f);b.prototype.normalizeCtorArgs=function(a){a&&a.type&&(a=h({},a),delete a.type);return a};b.prototype.clone=function(){};e([c.property({type:d.apiValues,
readOnly:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],b.prototype,"type",void 0);return b=e([c.subclass("esri.webscene.background.Background")],b)}(c.declared(k))});