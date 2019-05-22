// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../Color ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType".split(" "),function(p,q,g,d,h,k,l,c,m){var n=l.getLogger("esri.renderers.support.AttributeColorInfo");return function(f){function b(a){a=f.call(this,a)||this;a.color=null;a.field=null;a.label=null;a.valueExpression=null;a.valueExpressionTitle=null;return a}g(b,f);e=b;b.prototype.castField=
function(a){return null==a?a:"function"===typeof a?(n.error(".field: field must be a string value"),null):m.ensureString(a)};b.prototype.clone=function(){return new e({color:this.color&&this.color.clone(),field:this.field,label:this.label,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle})};var e;d([c.property({type:h,json:{type:[Number],write:!0}})],b.prototype,"color",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"field",void 0);d([c.cast("field")],
b.prototype,"castField",null);d([c.property({type:String,json:{write:!0}})],b.prototype,"label",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"valueExpression",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"valueExpressionTitle",void 0);return b=e=d([c.subclass("esri.renderers.support.AttributeColorInfo")],b)}(c.declared(k))});