// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper @dojo/framework/shim/array @dojo/framework/shim/Set ../../core/Error ../../core/object ../../core/promiseUtils ./domains".split(" "),function(G,c,V,k,l,n,t,O,y,u,v){function H(a,b,d){if(a)for(var c=0;c<a.length;c++){var e=a[c],f=y.getDeepValue(e,b);(f=f&&"function"!==typeof f&&p(d,f))&&y.setDeepValue(e,f.name,b)}}function r(a,b){if(!a||!b)return[];z.clear();w(z,a,b);return n.from(z).sort()}
function w(a,b,d){if(d)if(b&&b.length)if(n.includes(d,"*"))for(d=0;d<b.length;d++)a.add(b[d].name);else for(var c=0;c<d.length;c++)e=d[c],q(a,b,e);else if(n.includes(d,"*"))a.clear(),a.add("*");else for(b=0;b<d.length;b++){var e=d[b];a.add(e)}}function q(a,b,d){b&&b.length?(b=p(b,d))&&a.add(b.name):"string"===typeof d&&a.add(d)}function p(a,b){if("string"!==typeof b)return null;if(null!=a){b=b.toLowerCase();for(var d=0;d<a.length;d++){var c=a[d];if(c&&c.name.toLowerCase()===b)return c}}return null}
function I(a,b,d){return l(this,void 0,void 0,function(){var c,e,f,m,h;return k(this,function(g){switch(g.label){case 0:return d?[4,u.create(function(a){G(["../../support/arcadeUtils"],function(b){a(b)})})]:[2];case 1:c=g.sent();e=c.extractFieldNames(d);f=0;for(m=e;f<m.length;f++)h=m[f],q(a,b,h);return[2]}})})}function J(a,b){return l(this,void 0,void 0,function(){var d,c;return k(this,function(e){if(!b)return[2];d=b.fields;return(c=y.getDeepValue("elevationInfo.featureExpressionInfo",b))?[2,c.collectRequiredFields(a,
d)]:[2]})})}function K(a,b){return l(this,void 0,void 0,function(){var d,c;return k(this,function(e){switch(e.label){case 0:return d=b.labelingInfo,c=b.fields,d&&d.length?[4,u.all(d.map(function(b){return P(a,c,b)}))]:[2];case 1:return e.sent(),[2]}})})}function P(a,b,d){return l(this,void 0,void 0,function(){var c,e,f,m,h;return k(this,function(g){switch(g.label){case 0:if(!d)return[2];c=d.getLabelExpression();e=d.where;return"arcade"!==c.type?[3,2]:[4,I(a,b,c.expression)];case 1:return g.sent(),
[3,3];case 2:(f=c.expression.match(/{[^}]*}/g))&&f.forEach(function(d){q(a,b,d.slice(1,-1))}),g.label=3;case 3:return m=/['"]+/g,e&&(h=e.split(" "),3===h.length&&q(a,b,h[0].replace(m,"")),7===h.length&&(q(a,b,h[0].replace(m,"")),q(a,b,h[4].replace(m,"")))),[2]}})})}function A(a){return"number"===typeof a&&!isNaN(a)&&isFinite(a)}function Q(a){return null===a||A(a)}function R(a){return null===a||x(a)}function L(a){return null!=a&&"string"===typeof a}function S(a){return null===a||L(a)}function T(a){return!0}
function B(a,b){var d;switch(a.type){case "date":case "integer":case "long":case "small-integer":case "esriFieldTypeDate":case "esriFieldTypeInteger":case "esriFieldTypeLong":case "esriFieldTypeSmallInteger":d=a.nullable?R:x;break;case "double":case "single":case "esriFieldTypeSingle":case "esriFieldTypeDouble":d=a.nullable?Q:A;break;case "string":case "esriFieldTypeString":d=a.nullable?S:L;break;default:d=T}return 1===arguments.length?d:d(b)}function C(a){return null!=a&&U.has(a.type)}function M(a,
b){return a.nullable&&null===b?null:C(a)&&!N(a.type,b)?D.OUT_OF_RANGE:B(a,b)?a.domain?v.validateDomainValue(a.domain,b):null:E.INVALID_TYPE}function N(a,b){return(a="string"===typeof a?F(a):a)?a.isInteger?x(b)&&b>=a.min&&b<=a.max:b>=a.min&&b<=a.max:!1}function F(a){switch(a){case "esriFieldTypeSmallInteger":case "small-integer":return c.smallIntegerRange;case "esriFieldTypeInteger":case "integer":return c.integerRange;case "esriFieldTypeSingle":case "single":return c.singleRange;case "esriFieldTypeDouble":case "double":return c.doubleRange}}
Object.defineProperty(c,"__esModule",{value:!0});c.rendererFields="field field2 field3 normalizationField rotationInfo.field proportionalSymbolInfo.field proportionalSymbolInfo.normalizationField colorInfo.field colorInfo.normalizationField".split(" ");c.visualVariableFields=["field","normalizationField"];c.fixRendererFields=function(a,b){if(null!=a&&null!=b){var d=0;for(a=Array.isArray(a)?a:[a];d<a.length;d++){var g=a[d];H(c.rendererFields,g,b);if("visualVariables"in g&&g.visualVariables)for(var e=
0,g=g.visualVariables;e<g.length;e++)H(c.visualVariableFields,g[e],b)}}};c.fixTimeInfoFields=function(a,b){if(null!=a&&null!=b)if("startField"in a){var d=p(b,a.startField);b=p(b,a.endField);a.startField=d&&d.name||null;a.endField=b&&b.name||null}else d=p(b,a.startTimeField),b=p(b,a.endTimeField),a.startTimeField=d&&d.name||null,a.endTimeField=b&&b.name||null};var z=new t.default;c.fixFields=r;c.collectFields=w;c.collectField=q;c.unpackFieldNames=function(a,b){return b&&a?n.includes(b,"*")?a.map(function(a){return a.name}):
b:[]};c.packFields=function(a,b,d){void 0===d&&(d=1);if(!b||!a)return[];if(n.includes(b,"*"))return["*"];b=r(a,b);return b.length/a.length>=d?["*"]:b};c.getField=p;c.hasField=function(a,b){if(!a||!b||"string"!==typeof b)return!1;b=b.toLowerCase();for(var d=0;d<a.length;d++){var c=a[d];if(c&&c.name.toLowerCase()===b)return!0}return!1};c.collectArcadeFieldNames=I;c.getElevationFields=function(a){return l(this,void 0,void 0,function(){var b;return k(this,function(d){switch(d.label){case 0:if(!a)return[2,
[]];b=new t.default;return[4,J(b,a)];case 1:return d.sent(),[2,n.from(b).sort()]}})})};c.collectElevationFields=J;c.collectFilterFields=function(a,b,d){return l(this,void 0,void 0,function(){var c,e;return k(this,function(f){switch(f.label){case 0:if(!b||!d||!(d.where&&"1\x3d1"!==d.where||d.timeExtent))return[2];b.timeInfo&&d.timeExtent&&w(a,b.fields,[b.timeInfo.startField,b.timeInfo.endField]);return d.where?[4,u.create(function(a){G(["../../core/sql/WhereClause"],a)})]:[3,2];case 1:c=f.sent();e=
c.create(d.where);if(!e.isStandardized())return[2,u.reject(new O("fieldUtils:collectFilterFields","Where clause is not standardized"))];w(a,b.fields,e.getFields());f.label=2;case 2:return[2]}})})};c.getTimeFields=function(a){return l(this,void 0,void 0,function(){var b;return k(this,function(c){return a?(b="timeInfo"in a&&a.timeInfo)?[2,r(a.fields,[a.trackIdField,b.startField,b.endField])]:[2,[]]:[2,[]]})})};c.getFeatureEditFields=function(a){if(!a)return[];var b="editFieldsInfo"in a&&a.editFieldsInfo;
return b?r(a.fields,[b&&b.creatorField,b&&b.creationDateField,b&&b.editorField,b&&b.editDateField]):[]};c.getFeatureGeometryFields=function(a){if(!a)return[];var b="geometryProperties"in a&&a.geometryProperties;return b?r(a.fields,[b&&b.shapeAreaFieldName,b&&b.shapeLengthFieldName]):[]};c.getLabelingFields=function(a){return l(this,void 0,void 0,function(){var b;return k(this,function(c){switch(c.label){case 0:if(!a)return[2,[]];b=new t.default;return[4,K(b,a)];case 1:return c.sent(),[2,n.from(b).sort()]}})})};
c.collectLabelingFields=K;c.getFieldDefaultValue=function(a){var b=a.defaultValue;if(void 0!==b&&B(a,b))return b;if(a.nullable)return null};var x=function(){return"isInteger"in Number?Number.isInteger:function(a){return"number"===typeof a&&isFinite(a)&&Math.floor(a)===a}}();c.isValueMatchingFieldType=B;c.numericTypes=["integer","small-integer","single","double"];var U=new t.default(c.numericTypes.concat(["esriFieldTypeInteger","esriFieldTypeSmallInteger","esriFieldTypeSingle","esriFieldTypeDouble"]));
c.isNumericField=C;c.isStringField=function(a){return null!=a&&("string"===a.type||"esriFieldTypeString"===a.type)};c.isDateField=function(a){return null!=a&&("date"===a.type||"esriFieldTypeDate"===a.type)};c.isValidFieldValue=function(a,b){return null===M(a,b)};var D;(D=c.NumericRangeValidationError||(c.NumericRangeValidationError={})).OUT_OF_RANGE="numeric-range-validation-error::out-of-range";var E;(E=c.TypeValidationError||(c.TypeValidationError={})).INVALID_TYPE="type-validation-error::invalid-type";
c.sanitizeNullFieldValue=function(a){return null==a||"number"===typeof a&&isNaN(a)?null:a};c.validateFieldValue=M;c.isNumberInRange=N;c.getFieldRange=function(a){var b=v.getDomainRange(a.domain);if(b)return b;if(C(a))return F(a.type)};c.getNumericTypeForValue=function(a){if(!A(a))return null;if(x(a)){if(a>=c.smallIntegerRange.min&&a<=c.smallIntegerRange.max)return"esriFieldTypeSmallInteger";if(a>=c.integerRange.min&&a<=c.integerRange.max)return"esriFieldTypeInteger"}return a>=c.singleRange.min&&a<=
c.singleRange.max?"esriFieldTypeSingle":"esriFieldTypeDouble"};c.smallIntegerRange={min:-32768,max:32767,isInteger:!0};c.integerRange={min:-2147483648,max:2147483647,isInteger:!0};c.singleRange={min:-3.4E38,max:1.2E38,isInteger:!1};c.doubleRange={min:-Number.MAX_VALUE,max:Number.MAX_VALUE,isInteger:!1};c.validationErrorToString=function(a,b,c){switch(a){case v.DomainValidationError.INVALID_CODED_VALUE:return"Value "+c+" is not in the coded domain - field: "+b.name+", domain: "+JSON.stringify(b.domain);
case v.DomainValidationError.VALUE_OUT_OF_RANGE:return"Value "+c+" is out of the range of valid values - field: "+b.name+", domain: "+JSON.stringify(b.domain);case E.INVALID_TYPE:return"Value "+c+" is not a valid value for the field type - field: "+b.name+", type: "+b.type+", nullable: "+b.nullable;case D.OUT_OF_RANGE:return a=F(b.type),"Value "+c+" is out of range for the number type - field: "+b.name+", type: "+b.type+", value range is "+a.min+" to "+a.max}};c.featureHasFields=function(a,b){if(!b||
!b.attributes||!a)return!1;b=b.attributes;for(var c=0;c<a.length;c++)if(!(a[c]in b))return!1;return!0}});