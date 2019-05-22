// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports dojo/date dojo/i18n!../nls/common dojo/number dojo/date/locale ./global ./typedArrayUtil @dojo/framework/shim/string".split(" "),function(J,e,v,w,x,y,n,h,p){function q(a,c){var b;if(c)for(b in a)a.hasOwnProperty(b)&&(void 0===a[b]?delete a[b]:a[b]instanceof Object&&q(a[b],!0));else for(b in a)a.hasOwnProperty(b)&&void 0===a[b]&&delete a[b];return a}function m(a){return a&&"object"===typeof a&&"function"!==typeof a?h.isInt8Array(a)||h.isUint8Array(a)||h.isUint8ClampedArray(a)||
h.isInt16Array(a)||h.isUint16Array(a)||h.isInt32Array(a)||h.isUint32Array(a)||h.isFloat32Array(a)||h.isFloat64Array(a)?h.slice(a):a instanceof Date?new Date(a.getTime()):a instanceof ArrayBuffer?a.slice(0,a.byteLength):"function"===typeof a.clone?a.clone():"function"===typeof a.map&&"function"===typeof a.forEach?a.map(m):"function"===typeof a.notifyChange&&"function"===typeof a.watch?a.clone():r({},a,m):a}function t(a){void 0===a&&(a={});for(var c=1;c<arguments.length;c++);for(var c=1,b=arguments.length;c<
b;c++)r(a,arguments[c]);return a}function z(a){var c=a.key,b=a.data,d=a.dateFormat,f=a.nbrFormat;a=c.split(":");if(1<a.length)return c=a[0],a.shift(),l(c,b,a.join(":"));if(d&&-1!==(d.properties||[]).indexOf(c))return l(c,b,d.formatter||"DateString");if(f&&-1!==(f.properties||[]).indexOf(c))return l(c,b,f.formatter||"NumberFormat");b=b[c];return null!=b?b:""}function r(a,c,b){var d,f,g={};for(d in c){f=c[d];var k=!(d in g)||g[d]!==f;if(!(d in a)||a[d]!==f&&k)a[d]=b?b(f):f}return a}function l(a,c,b){var d=
b.match(A),f=d[1].trim();b=c[a];var d=JSON.parse((d[2]?d[2].trim():"{}").replace(B,"{").replace(C,"}").replace(D,'$1"$2":').replace(E,'":"').replace(F,'"$1')),g=d.utcOffset;if(-1===G.indexOf(f)){var k;a:{f=f.split(".");g=void 0;g=n;try{for(var e=0;e<f.length;e++){var h=f[e];if(!(h in g)){k=void 0;break a}g=g[h]}k=g;break a}catch(K){}k=void 0}"function"===typeof k&&(b=k(b,a,c,d))}else if("number"===typeof b||"string"===typeof b&&b&&!isNaN(Number(b)))switch(b=Number(b),f){case "NumberFormat":a=t({},
d);c="string"===typeof a.places?parseFloat(a.places):a.places;if(isNaN(c)||0>c)a.places=Infinity;return x.format(b,a);case "DateString":b=new Date(b);if(d.local||d.systemLocale)return d.systemLocale?b.toLocaleDateString()+(d.hideTime?"":" "+b.toLocaleTimeString()):b.toDateString()+(d.hideTime?"":" "+b.toTimeString());b=b.toUTCString();d.hideTime&&(b=b.replace(H,""));return b;case "DateFormat":return b=new Date(b),null!=g&&(b=v.add(b,"minute",b.getTimezoneOffset()-g)),y.format(b,d)}return null!=b?
b:""}Object.defineProperty(e,"__esModule",{value:!0});var G=["NumberFormat","DateString","DateFormat"],u=/<\/?[^>]+>/g,I=/\{([^\}]+)\}/g,A=/([^\(]+)(\([^\)]+\))?/i,B=/^\(/,C=/\)$/,D=/([{,])\s*([0-9a-zA-Z\_]+)\s*:/gi,E=/\"\s*:\s*\'/gi,F=/\'\s*(,|\})/gi,H=/\s+\d\d\:\d\d\:\d\d\s+(utc|gmt)/i;e.startsWith=p.startsWith;e.endsWith=p.endsWith;e.fixJson=q;e.clone=m;e.equals=function(a,c){return a===c||"number"===typeof a&&isNaN(a)&&"number"===typeof c&&isNaN(c)||"function"===typeof(a||{}).getTime&&"function"===
typeof(c||{}).getTime&&a.getTime()===c.getTime()||!1};e.mixin=t;e.valueOf=function(a,c){for(var b in a)if(a[b]===c)return b;return null};e.stripTags=function(a){if(a){var c=typeof a;if("string"===c)a=a.replace(u,"");else if("object"===c)for(c in c=void 0,a){var b=a[c];b&&"string"===typeof b&&(b=b.replace(u,""));a[c]=b}}return a};e.substitute=function(a,c,b){var d,f,g;null!=b&&("object"===typeof b?(d=b.first,f=b.dateFormat,g=b.numberFormat):d=b);if(!c||"{*}"===c){c=['\x3ctable class\x3d"esri-widget__table" summary\x3d"'+
w.fieldsSummary+'"\x3e\x3ctbody\x3e'];var e=b=void 0;for(e in a)if(b=a[e],f&&-1!==(f.properties||[]).indexOf(e)?b=l(e,a,f.formatter||"DateString"):g&&-1!==(g.properties||[]).indexOf(e)&&(b=l(e,a,g.formatter||"NumberFormat")),c.push("\x3ctr\x3e\x3cth\x3e"+e+"\x3c/th\x3e\x3ctd\x3e"+(null!=b?b:"")+"\x3c/td\x3e\x3c/tr\x3e"),d)break;c.push("\x3c/tbody\x3e\x3c/table\x3e");return c.join("")}return c.replace(I,function(b,c){return z({key:c,data:a,dateFormat:f,nbrFormat:g})})};e.filter=function(a,c,b){c=["string"===
typeof a?a.split(""):a,b||n,"string"===typeof c?new Function("item","index","array",c):c];b={};var d;a=c[0];for(d in a)c[2].call(c[d],a[d],d,a)&&(b[d]=a[d]);return b}});