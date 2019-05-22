// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/promiseUtils","../../../geometry/Extent","../../../layers/support/Field"],function(r,c,e,p,q){function f(a){return a instanceof Date}Object.defineProperty(c,"__esModule",{value:!0});(function(a){a[a.Standardised=0]="Standardised";a[a.SqlServer=1]="SqlServer";a[a.Oracle=2]="Oracle";a[a.Postgres=3]="Postgres";a[a.PGDB=4]="PGDB";a[a.FILEGDB=5]="FILEGDB";a[a.NotEvaluated=6]="NotEvaluated"})(c.FeatureServiceDatabaseType||(c.FeatureServiceDatabaseType={}));c.cloneField=
function(a){return q.fromJSON(a.toJSON())};c.esriFieldToJson=function(a){return a.toJSON()};c.cloneGeometry=function(a){if(null===a)return null;var b=a.clone();void 0!==a.cache._geVersion&&(b.cache._geVersion=a.cache._geVersion);return b};(function(a){a[a.InFeatureSet=0]="InFeatureSet";a[a.NotInFeatureSet=1]="NotInFeatureSet";a[a.Unknown=2]="Unknown"})(c.IdState||(c.IdState={}));c.isString=function(a){return"string"===typeof a||a instanceof String};c.isBoolean=function(a){return"boolean"===typeof a};
c.isNumber=function(a){return"number"===typeof a};c.isArray=function(a){return a instanceof Array};c.isDate=f;c.equalityTest=function(a,b){return a===b?!0:f(a)&&f(b)?a.getTime()===b.getTime():!1};c.cloneAttributes=function(a){var b={},c;for(c in a)b[c]=a[c];return b};c.convertSquareUnitsToCode=function(a){if(void 0===a)return null;if("number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":return 109404;case "miles":case "mile":return 109413;case "kilometers":case "kilometer":case "km":return 109414}return null};
c.shapeExtent=function(a){if(null===a)return null;switch(a.type){case "polygon":case "multipoint":case "polyline":return a.extent;case "point":return new p({xmin:a.x,ymin:a.y,xmax:a.x,ymax:a.y,spatialReference:a.spatialReference});case "extent":return a}return null};c.convertLinearUnitsToCode=function(a){if(void 0===a)return null;if("number"===typeof a||"number"===typeof a)return a;switch(a.toLowerCase()){case "meters":case "meter":return 9001;case "miles":case "mile":return 9035;case "kilometers":case "kilometer":case "km":return 9036}return null};
c.sameGeomType=function(a,b){return a===b||"point"===a&&"esriGeometryPoint"===b||"polyline"===a&&"esriGeometryPolyline"===b||"polygon"===a&&"esriGeometryPolygon"===b||"extent"===a&&"esriGeometryEnvelope"===b||"multipoint"===a&&"esriGeometryMultipoint"===b||"point"===b&&"esriGeometryPoint"===a||"polyline"===b&&"esriGeometryPolyline"===a||"polygon"===b&&"esriGeometryPolygon"===a||"extent"===b&&"esriGeometryEnvelope"===a||"multipoint"===b&&"esriGeometryMultipoint"===a?!0:!1};c.defaultMaxRecords=1E3;
c.errback=function(a){return function(b){a.reject(b)}};c.callback=function(a,b){return function(c){try{a.apply(null,arguments)}catch(g){b.reject(g)}}};c.layerGeometryEsriConstants={point:"point",polygon:"polygon",polyline:"polyline",multipoint:"multipoint",extent:"extent",esriGeometryPoint:"point",esriGeometryPolygon:"polygon",esriGeometryPolyline:"polyline",esriGeometryMultipoint:"multipoint",esriGeometryEnvelope:"extent",envelope:"extent"};c.toEsriGeometryType=function(a){switch(a){case "point":return"esriGeometryPoint";
case "polygon":return"esriGeometryPolygon";case "multipoint":return"esriGeometryMultipoint";case "polyline":return"esriGeometryPolyline";default:return"esriGeometryPoint"}};c.reduceArrayWithPromises=function(a,b,c){return e.create(function(c,h){var g=e.resolve(!0);a.reduce(function(a,c,k,d){return a.then(function(a){try{return b(a,c,k,d)}catch(l){return e.reject(l)}},function(a){return e.reject(a)})},g).then(c,h)})};c.stableStringify=function(a,b){b||(b={});"function"===typeof b&&(b={cmp:b});var c=
"boolean"===typeof b.cycles?b.cycles:!1,g=b.cmp&&function(a){return function(c){return function(b,k){return a({key:b,value:c[b]},{key:k,value:c[k]})}}}(b.cmp),h=[];return function m(a){a&&a.toJSON&&"function"===typeof a.toJSON&&(a=a.toJSON());if(void 0!==a){if("number"===typeof a)return isFinite(a)?""+a:"null";if("object"!==typeof a)return JSON.stringify(a);var b,d;if(Array.isArray(a)){d="[";for(b=0;b<a.length;b++)b&&(d+=","),d+=m(a[b])||"null";return d+"]"}if(null===a)return"null";if(-1!==h.indexOf(a)){if(c)return JSON.stringify("__cycle__");
throw new TypeError("Converting circular structure to JSON");}var e=h.push(a)-1,l=Object.keys(a).sort(g&&g(a));d="";for(b=0;b<l.length;b++){var f=l[b],n=m(a[f]);n&&(d&&(d+=","),d+=JSON.stringify(f)+":"+n)}h.splice(e,1);return"{"+d+"}"}}(a)}});