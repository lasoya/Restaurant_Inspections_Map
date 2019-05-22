// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../support/utils","./utils"],function(t,h,q,r){function m(a){return a&&"esri.renderers.visualVariables.SizeVariable"===a.declaredClass}function k(a){return null!=a&&!isNaN(a)&&isFinite(a)}function n(a){return a.valueExpression?"expression":a.field&&"string"===typeof a.field?"field":"unknown"}function g(a,b,d){return null==a?null:m(a)?a.getSize(b,d):k(a)?a:null}function p(a,b,d){return k(d)&&a>d?d:k(b)&&a<b?b:a}Object.defineProperty(h,"__esModule",{value:!0});var l=
Math.PI;h.isSizeVariable=m;h.isValidNumber=k;h.getInputValueType=n;h.getTransformationType=function(a,b){return"unknown"===(b||n(a))?"constant":a.stops?"stops":null!=a.minSize&&null!=a.maxSize&&null!=a.minDataValue&&null!=a.maxDataValue?"clamped-linear":"unknown"===(a.valueUnit||"unknown")?null!=a.minSize&&null!=a.minDataValue?a.minSize&&a.minDataValue?"proportional":"additive":"identity":"real-world-size"};h.getSizeFromNumberOrVariable=g;h.getSizeForValue=function(a,b,d,c,f){switch(b.transformationType){case "additive":return c=
g(b.minSize,d,c),a+(c||b.minDataValue);case "constant":return a=(a=b.stops)&&a.length&&a[0].size,null==a&&(a=b.minSize),g(a,d,c);case "clamped-linear":f=(a-b.minDataValue)/(b.maxDataValue-b.minDataValue);var e=g(b.minSize,d,c);d=g(b.maxSize,d,c);c=c&&c.shape;a<=b.minDataValue?b=e:a>=b.maxDataValue?b=d:"area"===b.scaleBy&&c?(c=(b="circle"===c)?l*Math.pow(e/2,2):e*e,c+=f*((b?l*Math.pow(d/2,2):d*d)-c),b=b?2*Math.sqrt(c/l):Math.sqrt(c)):b=e+f*(d-e);return b;case "proportional":return f=c&&c.shape,a/=
b.minDataValue,e=g(b.minSize,d,c),b=g(b.maxSize,d,c),c=null,c="circle"===f?2*Math.sqrt(a*Math.pow(e/2,2)):"square"===f||"diamond"===f||"image"===f?Math.sqrt(a*Math.pow(e,2)):a*e,p(c,e,b);case "stops":return f=r.lookupData(a,f),e=f[0],a=f[1],f=f[2],e===a?b=g(b.stops[e].size,d,c):(e=g(b.stops[e].size,d,c),b=g(b.stops[a].size,d,c),b=e+(b-e)*f),b;case "real-world-size":return f=(c&&c.resolution?c.resolution:1)*q.meterIn[b.valueUnit],e=g(b.minSize,d,c),c=g(b.maxSize,d,c),b=b.valueRepresentation,d=null,
d="area"===b?2*Math.sqrt(a/l)/f:"radius"===b||"distance"===b?2*a/f:a/f,p(d,e,c);case "identity":return a;case "unknown":return null}}});