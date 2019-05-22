// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ./Attachment ./Dictionary ./Feature ./FunctionWrapper ./ImmutablePathArray ./ImmutablePointArray ./languageUtils ./treeAnalysis ./functions/date ./functions/geometry ./functions/geomsync ./functions/maths ./functions/stats ./functions/string ../geometry/Extent ../geometry/Geometry ../geometry/Multipoint ../geometry/Point ../geometry/Polygon ../geometry/Polyline ../geometry/SpatialReference".split(" "),function(oa,t,S,x,A,E,C,T,c,k,U,V,W,X,Y,Z,aa,H,ba,ca,da,ea,fa){function I(b,
a){for(var e=[],c=0;c<a.arguments.length;c++)e.push(g(b,a.arguments[c]));return e}function p(b,a,e){try{return e(b,a,I(b,a))}catch(f){throw f;}}function g(b,a){try{switch(a.type){case "EmptyStatement":return c.voidOperation;case "VariableDeclarator":var e=null===a.init?null:g(b,a.init);e===c.voidOperation&&(e=null);if("Identifier"!==a.id.type)throw Error("Can only assign a regular variable");var f=a.id.name.toLowerCase();null!==b.localScope?b.localScope[f]={value:e,valueset:!0,node:a.init}:b.globalScope[f]=
{value:e,valueset:!0,node:a.init};return c.voidOperation;case "VariableDeclaration":for(var d=0;d<a.declarations.length;d++)g(b,a.declarations[d]);return c.voidOperation;case "BlockStatement":var l;a:{for(var v=c.voidOperation,d=0;d<a.body.length;d++)if(v=g(b,a.body[d]),v instanceof c.ReturnResult||v===c.breakResult||v===c.continueResult){l=v;break a}l=v}return l;case "FunctionDeclaration":var m=a.id.name.toLowerCase();b.globalScope[m]={valueset:!0,node:null,value:new E(a,b)};return c.voidOperation;
case "ReturnStatement":var F;if(null===a.argument)F=new c.ReturnResult(c.voidOperation);else{var ga=g(b,a.argument);F=new c.ReturnResult(ga)}return F;case "IfStatement":var p;if("AssignmentExpression"===a.test.type||"UpdateExpression"===a.test.type)throw Error(k.nodeErrorMessage(a.test,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var t=g(b,a.test);if(!0===t)p=g(b,a.consequent);else if(!1===t)p=null!==a.alternate?g(b,a.alternate):c.voidOperation;else throw Error(k.nodeErrorMessage(a,"RUNTIME",
"CANNOT_USE_NONBOOLEAN_IN_CONDITION"));return p;case "ExpressionStatement":var u;if("AssignmentExpression"===a.expression.type||"UpdateExpression"===a.expression.type)u=g(b,a.expression);else{var w=g(b,a.expression);u=w===c.voidOperation?c.voidOperation:new c.ImplicitResult(w)}return u;case "AssignmentExpression":var z;var q=g(b,a.right),d=null,h="";if("MemberExpression"===a.left.type){d=g(b,a.left.object);!0===a.left.computed?h=g(b,a.left.property):"Identifier"===a.left.property.type&&(h=a.left.property.name);
if(c.isArray(d))if(c.isNumber(h)){0>h&&(h=d.length+h);if(0>h||h>d.length)throw Error("Assignment outside of array bounds");if(h===d.length&&"\x3d"!==a.operator)throw Error("Invalid Parameter");d[h]=B(q,a.operator,d[h],a)}else throw Error("Invalid Parameter");else if(d instanceof x){if(!1===c.isString(h))throw Error("Dictionary accessor must be a string");if(!0===d.hasField(h))d.setField(h,B(q,a.operator,d.field(h),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");d.setField(h,B(q,a.operator,
null,a))}}else if(d instanceof A){if(!1===c.isString(h))throw Error("Feature accessor must be a string");if(!0===d.hasField(h))d.setField(h,B(q,a.operator,d.field(h),a));else{if("\x3d"!==a.operator)throw Error("Invalid Parameter");d.setField(h,B(q,a.operator,null,a))}}else{if(c.isImmutableArray(d))throw Error("Array is Immutable");throw Error("Invalid Parameter");}z=c.voidOperation}else if(d=a.left.name.toLowerCase(),null!==b.localScope&&void 0!==b.localScope[d])b.localScope[d]={value:B(q,a.operator,
b.localScope[d].value,a),valueset:!0,node:a.right},z=c.voidOperation;else if(void 0!==b.globalScope[d])b.globalScope[d]={value:B(q,a.operator,b.globalScope[d].value,a),valueset:!0,node:a.right},z=c.voidOperation;else throw Error("Variable not recognised");return z;case "UpdateExpression":var r;var n,d=null,h="";if("MemberExpression"===a.argument.type){d=g(b,a.argument.object);!0===a.argument.computed?h=g(b,a.argument.property):"Identifier"===a.argument.property.type&&(h=a.argument.property.name);
if(c.isArray(d))if(c.isNumber(h)){0>h&&(h=d.length+h);if(0>h||h>=d.length)throw Error("Assignment outside of array bounds");n=c.toNumber(d[h]);d[h]="++"===a.operator?n+1:n-1}else throw Error("Invalid Parameter");else if(d instanceof x){if(!1===c.isString(h))throw Error("Dictionary accessor must be a string");if(!0===d.hasField(h))n=c.toNumber(d.field(h)),d.setField(h,"++"===a.operator?n+1:n-1);else throw Error("Invalid Parameter");}else if(d instanceof A){if(!1===c.isString(h))throw Error("Feature accessor must be a string");
if(!0===d.hasField(h))n=c.toNumber(d.field(h)),d.setField(h,"++"===a.operator?n+1:n-1);else throw Error("Invalid Parameter");}else{if(c.isImmutableArray(d))throw Error("Array is Immutable");throw Error("Invalid Parameter");}r=!1===a.prefix?n:"++"===a.operator?n+1:n-1}else{d="Identifier"===a.argument.type?a.argument.name.toLowerCase():"";if(!d)throw Error("Invalid identifier");if(null!==b.localScope&&void 0!==b.localScope[d])n=c.toNumber(b.localScope[d].value),b.localScope[d]={value:"++"===a.operator?
n+1:n-1,valueset:!0,node:a},r=!1===a.prefix?n:"++"===a.operator?n+1:n-1;else if(void 0!==b.globalScope[d])n=c.toNumber(b.globalScope[d].value),b.globalScope[d]={value:"++"===a.operator?n+1:n-1,valueset:!0,node:a},r=!1===a.prefix?n:"++"===a.operator?n+1:n-1;else throw Error("Variable not recognised");}return r;case "BreakStatement":return c.breakResult;case "ContinueStatement":return c.continueResult;case "ForStatement":null!==a.init&&g(b,a.init);h={testResult:!0,lastAction:c.voidOperation};do b:{z=
b;q=a;r=h;if(null!==q.test){r.testResult=g(z,q.test);if(!1===r.testResult)break b;if(!0!==r.testResult)throw Error(k.nodeErrorMessage(q,"RUNTIME","CANNOT_USE_NONBOOLEAN_IN_CONDITION"));}r.lastAction=g(z,q.body);r.lastAction===c.breakResult?r.testResult=!1:r.lastAction instanceof c.ReturnResult?r.testResult=!1:null!==q.update&&g(z,q.update)}while(!0===h.testResult);d=h.lastAction instanceof c.ReturnResult?h.lastAction:c.voidOperation;return d;case "ForInStatement":return ha(b,a);case "Identifier":return J(b,
a);case "MemberExpression":return ia(b,a);case "Literal":return a.value;case "CallExpression":return ja(b,a);case "UnaryExpression":return ka(b,a);case "BinaryExpression":return la(b,a);case "LogicalExpression":return ma(b,a);case "ConditionalExpression":throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTED"));case "ArrayExpression":try{for(d=[],h=0;h<a.elements.length;h++){var y=g(b,a.elements[h]);if(c.isFunctionParameter(y))throw Error(k.nodeErrorMessage(a,"RUNTIME","FUNCTIONCONTEXTILLEGAL"));
y===c.voidOperation?d.push(null):d.push(y)}}catch(G){throw G;}return d;case "ObjectExpression":d={};for(h=0;h<a.properties.length;h++){var D=g(b,a.properties[h]);if(c.isFunctionParameter(D.value))throw Error("Illegal Argument");if(!1===c.isString(D.key))throw Error("Illegal Argument");d[D.key.toString()]=D.value===c.voidOperation?null:D.value}var C=new x(d);C.immutable=!1;return C;case "Property":return{key:"Identifier"===a.key.type?a.key.name:g(b,a.key),value:g(b,a.value)};default:throw Error(k.nodeErrorMessage(a,
"RUNTIME","UNREOGNISED"));}}catch(G){throw G;}}function ha(b,a){var e=g(b,a.right);"VariableDeclaration"===a.left.type&&g(b,a.left);var f=null,d="";if("VariableDeclaration"===a.left.type){var l=a.left.declarations[0].id;"Identifier"===l.type&&(d=l.name)}else"Identifier"===a.left.type&&(d=a.left.name);if(!d)throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDVARIABLE"));null!==b.localScope&&void 0!==b.localScope[d]&&(f=b.localScope[d]);null===f&&void 0!==b.globalScope[d]&&(f=b.globalScope[d]);if(null===
f)throw Error(k.nodeErrorMessage(a,"RUNTIME","VARIABLENOTDECLARED"));if(c.isArray(e)||c.isString(e)){e=e.length;for(l=0;l<e;l++){f.value=l;d=g(b,a.body);if(d===c.breakResult)break;if(d instanceof c.ReturnResult)return d}return c.voidOperation}if(c.isImmutableArray(e)){for(l=0;l<e.length();l++){f.value=l;d=g(b,a.body);if(d===c.breakResult)break;if(d instanceof c.ReturnResult)return d}return c.voidOperation}if(e instanceof x||e instanceof A)for(e=e.keys(),l=0;l<e.length;l++){f.value=e[l];d=g(b,a.body);
if(d===c.breakResult)break;if(d instanceof c.ReturnResult)return d}else return c.voidOperation}function B(b,a,e,f){switch(a){case "\x3d":return b===c.voidOperation?null:b;case "/\x3d":return c.toNumber(e)/c.toNumber(b);case "*\x3d":return c.toNumber(e)*c.toNumber(b);case "-\x3d":return c.toNumber(e)-c.toNumber(b);case "+\x3d":return c.isString(e)||c.isString(b)?c.toString(e)+c.toString(b):c.toNumber(e)+c.toNumber(b);case "%\x3d":return c.toNumber(e)%c.toNumber(b);default:throw Error(k.nodeErrorMessage(f,
"RUNTIME","OPERATORNOTRECOGNISED"));}}function K(b,a,e,c){a=a.toLowerCase();switch(a){case "hasz":return b=b.hasZ,void 0===b?!1:b;case "hasm":return b=b.hasM,void 0===b?!1:b;case "spatialreference":return a=b.spatialReference._arcadeCacheId,void 0===a&&(e=!0,Object.freeze&&Object.isFrozen(b.spatialReference)&&(e=!1),e&&(u++,a=b.spatialReference._arcadeCacheId=u)),b=new x({wkt:b.spatialReference.wkt,wkid:b.spatialReference.wkid}),void 0!==a&&(b._arcadeCacheId="SPREF"+a.toString()),b}switch(b.type){case "extent":switch(a){case "xmin":case "xmax":case "ymin":case "ymax":case "zmin":case "zmax":case "mmin":case "mmax":return b=
b[a],void 0!==b?b:null;case "type":return"Extent"}break;case "polygon":switch(a){case "rings":return a=b.cache._arcadeCacheId,void 0===a&&(u++,a=u,b.cache._arcadeCacheId=a),b=new C(b.rings,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polygon"}break;case "point":switch(a){case "x":case "y":case "z":case "m":return void 0!==b[a]?b[a]:null;case "type":return"Point"}break;case "polyline":switch(a){case "paths":return a=b.cache._arcadeCacheId,void 0===a&&(u++,a=u,b.cache._arcadeCacheId=
a),b=new C(b.paths,b.spatialReference,!0===b.hasZ,!0===b.hasM,a);case "type":return"Polyline"}break;case "multipoint":switch(a){case "points":return a=b.cache._arcadeCacheId,void 0===a&&(u++,a=u,b.cache._arcadeCacheId=a),b=new T(b.points,b.spatialReference,!0===b.hasZ,!0===b.hasM,a,1);case "type":return"Multipoint"}}throw Error(k.nodeErrorMessage(c,"RUNTIME","PROPERTYNOTFOUND"));}function ia(b,a){try{var e=g(b,a.object);if(null===e)throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));if(!1===a.computed){if("Identifier"===
a.property.type){if(e instanceof x||e instanceof A)return e.field(a.property.name);if(e instanceof H)return K(e,a.property.name,b,a)}throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}var f=g(b,a.property);if(e instanceof x||e instanceof A){if(c.isString(f))return e.field(f);throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(e instanceof H){if(c.isString(f))return K(e,f,b,a);throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(c.isArray(e)){if(c.isNumber(f)&&isFinite(f)&&
Math.floor(f)===f){0>f&&(f=e.length+f);if(f>=e.length||0>f)throw Error(k.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return e[f]}throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(c.isString(e)){if(c.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){0>f&&(f=e.length+f);if(f>=e.length||0>f)throw Error(k.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return e[f]}throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}if(c.isImmutableArray(e)&&c.isNumber(f)&&isFinite(f)&&Math.floor(f)===f){0>
f&&(f=e.length()+f);if(f>=e.length()||0>f)throw Error(k.nodeErrorMessage(a,"RUNTIME","OUTOFBOUNDS"));return e.get(f)}throw Error(k.nodeErrorMessage(a,"RUNTIME","INVALIDTYPE"));}catch(d){throw d;}}function ka(b,a){try{var e=g(b,a.argument);if(c.isBoolean(e)){if("!"===a.operator)return!e;if("-"===a.operator)return-1*c.toNumber(e);if("+"===a.operator)return 1*c.toNumber(e);throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}if("-"===a.operator)return-1*c.toNumber(e);if("+"===a.operator)return 1*
c.toNumber(e);throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTSUPPORTEDUNARYOPERATOR"));}catch(f){throw f;}}function la(b,a){try{var e=[g(b,a.left),g(b,a.right)],f=e[0],d=e[1];switch(a.operator){case "\x3d\x3d":return c.equalityTest(f,d);case "!\x3d":return!c.equalityTest(f,d);case "\x3c":return c.greaterThanLessThan(f,d,a.operator);case "\x3e":return c.greaterThanLessThan(f,d,a.operator);case "\x3c\x3d":return c.greaterThanLessThan(f,d,a.operator);case "\x3e\x3d":return c.greaterThanLessThan(f,d,
a.operator);case "+":return c.isString(f)||c.isString(d)?c.toString(f)+c.toString(d):c.toNumber(f)+c.toNumber(d);case "-":return c.toNumber(f)-c.toNumber(d);case "*":return c.toNumber(f)*c.toNumber(d);case "/":return c.toNumber(f)/c.toNumber(d);case "%":return c.toNumber(f)%c.toNumber(d);default:throw Error(k.nodeErrorMessage(a,"RUNTIME","OPERATORNOTRECOGNISED"));}}catch(l){throw l;}}function ma(b,a){try{if("AssignmentExpression"===a.left.type||"UpdateExpression"===a.left.type)throw Error(k.nodeErrorMessage(a.left,
"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));if("AssignmentExpression"===a.right.type||"UpdateExpression"===a.right.type)throw Error(k.nodeErrorMessage(a.right,"RUNTIME","CANNOT_USE_ASSIGNMENT_IN_CONDITION"));var e=g(b,a.left);if(c.isBoolean(e))switch(a.operator){case "||":if(!0===e)return e;var f=g(b,a.right);if(c.isBoolean(f))return f;throw Error(k.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));case "\x26\x26":if(!1===e)return e;f=g(b,a.right);if(c.isBoolean(f))return f;throw Error(k.nodeErrorMessage(a,
"RUNTIME","ONLYORORAND"));default:throw Error(k.nodeErrorMessage(a,"RUNTIME","ONLYORORAND"));}throw Error(k.nodeErrorMessage(a,"RUNTIME","ONLYBOOLEAN"));}catch(d){throw d;}}function J(b,a){var e;try{var c=a.name.toLowerCase();if(null!==b.localScope&&void 0!==b.localScope[c]){e=b.localScope[c];if(!0===e.valueset)return e.value;e.value=g(b,e.node);e.valueset=!0;return e.value}if(void 0!==b.globalScope[c]){e=b.globalScope[c];if(!0===e.valueset)return e.value;e.value=g(b,e.node);e.valueset=!0;return e.value}throw Error(k.nodeErrorMessage(a,
"RUNTIME","VARIABLENOTFOUND"));}catch(d){throw d;}}function ja(b,a){try{if("Identifier"!==a.callee.type)throw Error(k.nodeErrorMessage(a,"RUNTIME","ONLYNODESSUPPORTED"));if(null!==b.localScope&&void 0!==b.localScope[a.callee.name.toLowerCase()]){var e=b.localScope[a.callee.name.toLowerCase()];if(e.value instanceof c.NativeFunction)return e.value.fn(b,a);if(e.value instanceof E)return L(b,a,e.value.definition);throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"));}if(void 0!==b.globalScope[a.callee.name.toLowerCase()]){e=
b.globalScope[a.callee.name.toLowerCase()];if(e.value instanceof c.NativeFunction)return e.value.fn(b,a);if(e.value instanceof E)return L(b,a,e.value.definition);throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTAFUNCTION"));}throw Error(k.nodeErrorMessage(a,"RUNTIME","NOTFOUND"));}catch(f){throw f;}}function M(b){return null==b?"":c.isArray(b)||c.isImmutableArray(b)?"Array":c.isDate(b)?"Date":c.isString(b)?"String":c.isBoolean(b)?"Boolean":c.isNumber(b)?"Number":b instanceof S?"Attachment":b instanceof
x?"Dictionary":b instanceof A?"Feature":b instanceof ca?"Point":b instanceof da?"Polygon":b instanceof ea?"Polyline":b instanceof ba?"Multipoint":b instanceof aa?"Extent":c.isFunctionParameter(b)?"Function":c.isFeatureSet(b)?"FeatureSet":c.isFeatureSetCollection(b)?"FeatureSetCollection":b===c.voidOperation?"":"number"===typeof b&&isNaN(b)?"Number":"Unrecognised Type"}function N(b,a,e,f){try{var d=g(b,a.arguments[e]);if(c.equalityTest(d,f))return g(b,a.arguments[e+1]);var l=a.arguments.length-e;return 1===
l?g(b,a.arguments[e]):2===l?null:3===l?g(b,a.arguments[e+2]):N(b,a,e+2,f)}catch(v){throw v;}}function O(b,a,e,f){try{if(!0===f)return g(b,a.arguments[e+1]);if(3===a.arguments.length-e)return g(b,a.arguments[e+2]);var d=g(b,a.arguments[e+2]);if(!1===c.isBoolean(d))throw Error("WHEN needs boolean test conditions");return O(b,a,e+2,d)}catch(l){throw l;}}function w(b,a){var e=b.length,c=Math.floor(e/2);if(0===e)return[];if(1===e)return[b[0]];var d=w(b.slice(0,c),a);b=w(b.slice(c,e),a);for(e=[];0<d.length||
0<b.length;)0<d.length&&0<b.length?(c=a(d[0],b[0]),isNaN(c)&&(c=0),0>=c?(e.push(d[0]),d=d.slice(1)):(e.push(b[0]),b=b.slice(1))):0<d.length?(e.push(d[0]),d=d.slice(1)):0<b.length&&(e.push(b[0]),b=b.slice(1));return e}function P(b,a,e){try{var f=b.body;if(e.length!==b.params.length)throw Error("Invalid Parameter calls to function.");for(var d=0;d<e.length;d++)a.localScope[b.params[d].name.toLowerCase()]={value:e[d],valueset:!0,node:null};var l=g(a,f);if(l instanceof c.ReturnResult)return l.value;if(l===
c.breakResult)throw Error("Cannot Break from a Function");if(l===c.continueResult)throw Error("Cannot Continue from a Function");return l instanceof c.ImplicitResult?l.value:l}catch(v){throw v;}}function L(b,a,c){return p(b,a,function(a,d,e){a={spatialReference:b.spatialReference,applicationCache:void 0===b.applicationCache?null:b.applicationCache,globalScope:b.globalScope,depthCounter:b.depthCounter+1,console:b.console,lrucache:b.lrucache,localScope:{}};if(64<a.depthCounter)throw Error("Exceeded maximum function depth");
return P(c,a,e)})}function Q(b){return function(){var a={applicationCache:void 0===b.context.applicationCache?null:b.context.applicationCache,spatialReference:b.context.spatialReference,console:b.context.console,lrucache:b.context.lrucache,localScope:{},depthCounter:b.context.depthCounter+1,globalScope:b.context.globalScope};if(64<a.depthCounter)throw Error("Exceeded maximum function depth");return P(b.definition,a,arguments)}}function na(b){console.log(b)}Object.defineProperty(t,"__esModule",{value:!0});
var u=0,m={};U.registerFunctions(m,p);Z.registerFunctions(m,p);X.registerFunctions(m,p);V.registerFunctions(m,p);Y.registerFunctions(m,p);W.registerFunctions(m,p);m["typeof"]=function(b,a){return p(b,a,function(a,b,d){c.pcCheck(d,1,1);a=M(d[0]);if("Unrecognised Type"===a)throw Error("Unrecognised Type");return a})};m.iif=function(b,a){try{c.pcCheck(null===a.arguments?[]:a.arguments,3,3);var e=g(b,a.arguments[0]);if(!1===c.isBoolean(e))throw Error("IF Function must have a boolean test condition");
var f=g(b,a.arguments[1]),d=g(b,a.arguments[2]);return!0===e?f:d}catch(l){throw l;}};m.decode=function(b,a){try{if(2>a.arguments.length)throw Error("Missing Parameters");if(2===a.arguments.length)return g(b,a.arguments[1]);if(0===(a.arguments.length-1)%2)throw Error("Must have a default value result.");var c=g(b,a.arguments[0]);return N(b,a,1,c)}catch(f){throw f;}};m.when=function(b,a){try{if(3>a.arguments.length)throw Error("Missing Parameters");if(0===a.arguments.length%2)throw Error("Must have a default value result.");
var e=g(b,a.arguments[0]);if(!1===c.isBoolean(e))throw Error("WHEN needs boolean test conditions");return O(b,a,0,e)}catch(f){throw f;}};m.top=function(b,a){return p(b,a,function(a,b,d){c.pcCheck(d,2,2);if(c.isArray(d[0]))return c.toNumber(d[1])>=d[0].length?d[0].slice(0):d[0].slice(0,c.toNumber(d[1]));if(c.isImmutableArray(d[0]))return c.toNumber(d[1])>=d[0].length()?d[0].slice(0):d[0].slice(0,c.toNumber(d[1]));throw Error("Top cannot accept this parameter type");})};m.first=function(b,a){return p(b,
a,function(a,b,d){c.pcCheck(d,1,1);return c.isArray(d[0])?0===d[0].length?null:d[0][0]:c.isImmutableArray(d[0])?0===d[0].length()?null:d[0].get(0):null})};m.sort=function(b,a){return p(b,a,function(a,b,d){c.pcCheck(d,1,2);a=d[0];c.isImmutableArray(a)&&(a=a.toArray());if(!1===c.isArray(a))throw Error("Illegal Argument");if(1<d.length){if(!1===c.isFunctionParameter(d[1]))throw Error("Illegal Argument");var e=Q(d[1]);return a=w(a,function(a,b){return e(a,b)})}if(0===a.length)return[];d={};for(b=0;b<
a.length;b++){var f=M(a[b]);""!==f&&(d[f]=!0)}if(!0===d.Array||!0===d.Dictionary||!0===d.Feature||!0===d.Point||!0===d.Polygon||!0===d.Polyline||!0===d.Multipoint||!0===d.Extent||!0===d.Function)return a.slice(0);b=0;var f="",g;for(g in d)b++,f=g;return a=1<b||"String"===f?w(a,function(a,b){if(null===a||void 0===a||a===c.voidOperation)return null===b||void 0===b||b===c.voidOperation?0:1;if(null===b||void 0===b||b===c.voidOperation)return-1;a=c.toString(a);b=c.toString(b);return a<b?-1:a===b?0:1}):
"Number"===f?w(a,function(a,b){return a-b}):"Boolean"===f?w(a,function(a,b){return a===b?0:b?-1:1}):"Date"===f?w(a,function(a,b){return b-a}):a.slice(0)})};for(var R in m)m[R]={value:new c.NativeFunction(m[R]),valueset:!0,node:null};var y=function(){};y.prototype=m;y.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null};y.prototype.pi={value:Math.PI,valueset:!0,node:null};t.functionHelper={fixSpatialReference:c.fixSpatialReference,parseArguments:I,standardFunction:p};t.extend=
function(b){for(var a={mode:"sync",compiled:!1,functions:{},signatures:[],standardFunction:p,evaluateIdentifier:J,arcadeCustomFunctionHandler:Q},e=0;e<b.length;e++)b[e].registerFunctions(a);for(var f in a.functions)m[f]={value:new c.NativeFunction(a.functions[f]),valueset:!0,node:null},y.prototype[f]=m[f];for(e=0;e<a.signatures.length;e++)k.addFunctionDeclaration(a.signatures[e],"async")};t.executeScript=function(b,a,e){e||(e=new fa({wkid:102100}));var f=a.vars,d=a.customfunctions,l=new y;f||(f={});
d||(d={});var k=new x({newline:"\n",tab:"\t",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});k.immutable=!1;l.textformatting={value:k,valueset:!0,node:null};for(var m in d)l[m]={value:new c.NativeFunction(d[m]),native:!0,valueset:!0,node:null};for(m in f)l[m]=f[m]&&"esri.Graphic"===f[m].declaredClass?{value:A.createFromGraphic(f[m]),valueset:!0,node:null}:{value:f[m],valueset:!0,node:null};b=g({spatialReference:e,globalScope:l,localScope:null,console:a.console?a.console:na,lrucache:a.lrucache,
depthCounter:1,applicationCache:void 0===a.applicationCache?null:a.applicationCache},b.body[0].body);b instanceof c.ReturnResult&&(b=b.value);b instanceof c.ImplicitResult&&(b=b.value);b===c.voidOperation&&(b=null);if(b===c.breakResult)throw Error("Cannot return BREAK");if(b===c.continueResult)throw Error("Cannot return CONTINUE");if(b instanceof E)throw Error("Cannot return FUNCTION");if(b instanceof c.NativeFunction)throw Error("Cannot return FUNCTION");return b};t.extractFieldLiterals=function(b,
a){void 0===a&&(a=!1);return k.findFieldLiterals(b,a)};t.validateScript=function(b,a){return k.validateScript(b,a,"simple")};t.referencesMember=function(b,a){return k.referencesMember(b,a)};t.referencesFunction=function(b,a){return k.referencesFunction(b,a)};t.findFunctionCalls=function(b){return k.findFunctionCalls(b,!1)}});