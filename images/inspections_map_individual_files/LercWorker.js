// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
require({cache:{"esri/core/requireUtils":function(){define(["require","exports","./promiseUtils"],function(q,a,p){function m(a,b){return Array.isArray(b)?p.create(function(h){a(b,function(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];h(a)})}):m(a,[b]).then(function(a){return a[0]})}Object.defineProperty(a,"__esModule",{value:!0});a.when=m;a.getAbsMid=function(a,b,h){return b.toAbsMid?b.toAbsMid(a):h.id.replace(/\/[^\/]*$/gi,"/")+a}})},"esri/core/workers":function(){define(["require",
"exports","./workers/workers"],function(q,a,p){Object.defineProperty(a,"__esModule",{value:!0});for(var m in p)a.hasOwnProperty(m)||(a[m]=p[m])})},"esri/core/workers/workers":function(){define("require exports ../Error ../has ../promiseUtils ./Connection ./RemoteClient ./WorkerOwner".split(" "),function(q,a,p,m,f,b,h,k){function l(){if(t)return t;for(var a=r+g,b=[],e=function(a){var u=k.create(a).then(function(b){return d[a]=b});b.push(u)},h=0;h<a;h++)e(h);return t=f.all(b).then(function(){})}Object.defineProperty(a,
"__esModule",{value:!0});a.Connection=b;a.RemoteClient=h;(b=m("host-browser")?navigator.hardwareConcurrency:0)||(b=m("safari")&&m("mac")||m("trident")?8:2);var r=m("esri-workers-debug")?1:Math.max(1,Math.ceil(b/2)),g=m("esri-workers-debug")?1:Math.max(1,Math.floor(b/2)),e=0,d=[];a.initialize=function(){l()};a.openWithPorts=function(b,d){return new a.Connection(b.map(function(b){return new a.RemoteClient(b,d,{})}))};a.open=function(b,u){void 0===u&&(u={});if("string"!==typeof b)return f.reject(new p("workers:undefined-module",
"modulePath is missing"));var h=u.strategy||"distributed";if("local"===h){var k=u.client;return f.create(function(d){return q([b],function(b){k=k||b;d(a.RemoteClient.connect(b))})}).then(function(b){return new a.Connection([new a.RemoteClient(b,k,u)])})}return l().then(function(){if("dedicated"===h){var k=r+e++;e%=g;return d[k].open(b).then(function(b){return new a.Connection([new a.RemoteClient(b,u.client,u)])})}return f.all(d.map(function(a){return a.open(b)})).then(function(b){return new a.Connection(b.map(function(b){return new a.RemoteClient(b,
u.client,u)}))})})};a.terminate=function(){t&&(t.cancel(),t=null);for(var a=0;a<d.length;a++)d[a]&&d[a].terminate();d.length=0};var t=null})},"esri/core/workers/Connection":function(){define(["require","exports","../Logger","../promiseUtils"],function(q,a,p,m){var f=p.getLogger("esri.core.workers.Connection");return function(){function a(a){this._clientIdx=0;this._clients=a}a.prototype.broadcast=function(a,b,f){for(var h=[],g=0,e=this._clients;g<e.length;g++)h.push(e[g].invoke(a,b,f));return h};a.prototype.close=
function(){for(var a=0,b=this._clients;a<b.length;a++)b[a].close();this._clients=[]};a.prototype.getAvailableClient=function(){var a;this._clients.some(function(b){return b.isBusy()?!1:(a=b,!0)})||(this._clientIdx=(this._clientIdx+1)%this._clients.length,a=this._clients[this._clientIdx]);return a};a.prototype.invoke=function(a,b,l){var h=null;Array.isArray(l)?(f.warn("invoke()","The transferList parameter is deprecated, use the options object instead"),h={transferList:l}):h=l;return this._clients&&
this._clients.length?this.getAvailableClient().invoke(a,b,h):m.reject(Error("Connection closed"))};a.prototype.openPorts=function(){return m.all(this._clients.map(function(a){return a.openPort()}))};return a}()})},"esri/core/workers/WorkerOwner":function(){define("require exports ../../kernel ../Error ../Logger ../promiseUtils ./utils ./workerFactory".split(" "),function(q,a,p,m,f,b,h,k){var l=f.getLogger("esri.core.workers"),r=h.MessageType.ABORT,g=h.MessageType.INVOKE,e=h.MessageType.OPEN,d=h.MessageType.OPENED,
t=h.MessageType.RESPONSE;return function(){function a(a,b){this._outJobs=new Map;this._inJobs=new Map;this.worker=a;this.id=b;a.addEventListener("message",this._onMessage.bind(this));a.addEventListener("error",function(a){a.preventDefault();l.error(a)})}a.create=function(b){return k.createWorker().then(function(d){return new a(d,b)})};a.prototype.terminate=function(){this.worker.terminate()};a.prototype.open=function(a){var d=this,g=h.newJobId(),f=function(){d._outJobs["delete"](g);d._post({type:r,
jobId:g})};return b.create(function(b,h){d._outJobs.set(g,{resolve:b,reject:h,cancel:f});d._post({type:e,jobId:g,modulePath:a})},f)};a.prototype._onMessage=function(a){if(a=h.receiveMessage(a))switch(a.type){case d:case t:this._onResponse(a);break;case r:this._onCancel(a);break;case g:this._onInvoke(a)}};a.prototype._onCancel=function(a){(a=this._inJobs.get(a.jobId))&&a.cancel()};a.prototype._onInvoke=function(a){var d=this,g=a.methodName,e=a.jobId;a=a.data;var f=this._inJobs,k=p.workerMessages[g],
l;try{if("function"!==typeof k)throw new TypeError(g+" is not a function");l=k.call(null,a)}catch(x){this._post({type:t,jobId:e,error:h.toInvokeError(x)});return}b.isThenable(l)?(f.set(e,l),l.then(function(a){f["delete"](e);d._post({type:t,jobId:e},a)}).catch(function(a){f["delete"](e);a||(a={message:"Error encountered at method"+g});a.dojoType&&"cancel"===a.dojoType||d._post({type:t,jobId:e,error:h.toInvokeError(a)})})):this._post({type:t,jobId:e},l)};a.prototype._onResponse=function(a){var b=a.jobId,
d=a.error;a=a.data;var g=this._outJobs.get(b);g&&(this._outJobs["delete"](b),d?g.reject(m.fromJSON(JSON.parse(d))):g.resolve(a))};a.prototype._post=function(a,b,d){return h.postMessage(this.worker,a,b,d)};return a}()})},"esri/core/workers/workerFactory":function(){define("require exports ../tsSupport/assignHelper dojo/_base/kernel ../../config ../has ../Logger ../promiseUtils ./loaderConfig ./utils ./WorkerFallback".split(" "),function(q,a,p,m,f,b,h,k,l,r,g){function e(a){return k.create(function(e){function h(d){if(d=
r.receiveMessage(d))switch(d.type){case u:d=a;var g=f.workers.loaderUrl||l.DEFAULT_LOADER_URL,q;null!=f["default"]?(q=p({},f),delete q["default"],q=JSON.parse(JSON.stringify(q))):q=JSON.parse(JSON.stringify(f));var v=f.workers.loaderConfig,v=l.default({baseUrl:v.baseUrl,locale:m.locale,has:p({"config-deferredInstrumentation":0,"dojo-test-sniff":0,"esri-secure-context":b("esri-secure-context"),"esri-workers-arraybuffer-transfer":b("esri-workers-arraybuffer-transfer"),"events-keypress-typed":0,"host-webworker":1},
v.has),map:p({},v.map),paths:p({},v.paths),packages:v.packages||[]});d.postMessage({type:A,configure:{esriConfig:q,loaderUrl:g,loaderConfig:v}});break;case t:a.removeEventListener("message",h),a.removeEventListener("error",k),e(a)}}function k(b){b.preventDefault();a.removeEventListener("message",h);a.removeEventListener("error",k);d.warn("Failed to create Worker. Fallback to execute module in main thread",b);a=new g;a.addEventListener("message",h);a.addEventListener("error",k)}a.addEventListener("message",
h);a.addEventListener("error",k)})}Object.defineProperty(a,"__esModule",{value:!0});var d=h.getLogger("esri.core.workers");b.add("esri-workers-arraybuffer-transfer",!b("safari")||12<=b("safari"));var t=r.MessageType.CONFIGURED,A=r.MessageType.CONFIGURE,u=r.MessageType.HANDSHAKE,z;try{z=URL.createObjectURL(new Blob(['var globalId\x3d0;var outgoing\x3dnew Map;var configured\x3dfalse;var HANDSHAKE\x3d0;var CONFIGURE\x3d1;var CONFIGURED\x3d2;var OPEN\x3d3;var OPENED\x3d4;var RESPONSE\x3d5;var INVOKE\x3d6;var CANCEL\x3d7;function mapDelete(map,key){map["delete"](key)}function receiveMessage(event){if(!event||!event.data){return null}if(typeof event.data\x3d\x3d\x3d"string"){return JSON.parse(event.data)}return event.data}function invokeStaticMessage(methodName,data,options){var signal\x3doptions\x26\x26options.signal;var Deferred\x3drequire("dojo/Deferred");var jobId\x3dglobalId++;var abortHandler\x3dfunction(){if(!outgoing.has(jobId)){return}self.postMessage({type:CANCEL,methodName:methodName,jobId:jobId});mapDelete(outgoing,jobId);if(!deferred.isCanceled()){deferred.cancel()}if(signal){signal.removeEventListener("abort",abortHandler)}};if(signal){signal.addEventListener("abort",abortHandler)}var deferred\x3dnew Deferred(abortHandler);outgoing.set(jobId,deferred);self.postMessage({type:INVOKE,methodName:methodName,jobId:jobId,data:data});return deferred.promise}function messageHandler(event){var message\x3dreceiveMessage(event);if(!message){return}var jobId\x3dmessage.jobId;switch(message.type){case CONFIGURE:var configuration\x3dmessage.configure;if(configured){return}self.dojoConfig\x3dconfiguration.loaderConfig;self.importScripts(configuration.loaderUrl);if(typeof require.config\x3d\x3d\x3d"function"){require.config(configuration.loaderConfig)}require(["esri/config"],function(esriConfig){for(var name in configuration.esriConfig){if(Object.prototype.hasOwnProperty.call(configuration.esriConfig,name)){esriConfig[name]\x3dconfiguration.esriConfig[name]}}self.postMessage({type:CONFIGURED})});break;case OPEN:var modulePath\x3dmessage.modulePath;require(["esri/core/workers/RemoteClient",modulePath],function(RemoteClient,Module){var port\x3dRemoteClient.connect(Module);self.postMessage({type:OPENED,jobId:jobId,data:port},[port])});break;case RESPONSE:if(outgoing.has(jobId)){var deferred\x3doutgoing.get(jobId);mapDelete(outgoing,jobId);if(message.error){deferred.reject(JSON.parse(message.error))}else{deferred.resolve(message.data)}}break}}self.addEventListener("message",messageHandler);self.postMessage({type:HANDSHAKE});'],
{type:"text/javascript"}))}catch(v){}a.createWorker=function(){if(!b("esri-workers"))return e(new g);var a;if(z)try{a=new Worker(z)}catch(H){d.warn("Failed to create Worker. Fallback to execute module in main thread",event),a=new g}else d.warn("Failed to create Worker. Fallback to execute module in main thread",event),a=new g;return e(a)}})},"esri/core/workers/loaderConfig":function(){define(["require","exports","../tsSupport/assignHelper","../has","../urlUtils"],function(q,a,p,m,f){Object.defineProperty(a,
"__esModule",{value:!0});m=m("esri-built")?"dojo/dojo-lite.js":"dojo/dojo.js";a.DEFAULT_LOADER_URL=f.makeAbsolute(f.removeQueryParameters(q.toUrl(m)));a.DEFAULT_CONFIG={baseUrl:function(){var a=f.removeQueryParameters(q.toUrl("dojo/x.js"));return f.makeAbsolute(a.slice(0,a.length-5))}(),packages:[{name:"esri"},{name:"dojo"},{name:"dojox"},{name:"dstore"},{name:"moment",main:"moment"},{name:"@dojo"},{name:"cldrjs",main:"dist/cldr"},{name:"globalize",main:"dist/globalize"},{name:"maquette",main:"dist/maquette.umd"},
{name:"maquette-css-transitions",main:"dist/maquette-css-transitions.umd"},{name:"maquette-jsx",main:"dist/maquette-jsx.umd"},{name:"tslib",main:"tslib"}],map:{globalize:{cldr:"cldrjs/dist/cldr","cldr/event":"cldrjs/dist/cldr/event","cldr/supplemental":"cldrjs/dist/cldr/supplemental","cldr/unresolved":"cldrjs/dist/cldr/unresolved"}}};a.default=function(b){var h={async:b.async,isDebug:b.isDebug,locale:b.locale,baseUrl:b.baseUrl,has:p({},b.has),map:p({},b.map),packages:b.packages&&b.packages.concat()||
[],paths:p({},b.paths)};b.hasOwnProperty("async")||(h.async=!0);b.hasOwnProperty("isDebug")||(h.isDebug=!1);b.baseUrl||(h.baseUrl=a.DEFAULT_CONFIG.baseUrl);a.DEFAULT_CONFIG.packages.forEach(function(a){a:{for(var b=h.packages,d=0;d<b.length;d++)if(b[d].name===a.name)break a;a=p({},a);d=f.removeQueryParameters(q.toUrl(a.name+"/x.js"));d=d.slice(0,d.length-5);a.location=f.makeAbsolute(d);b.push(a)}});b=h.map=h.map||{};for(var k=0,l=Object.keys(a.DEFAULT_CONFIG.map);k<l.length;k++){var r=l[k];b[r]||
(b[r]=a.DEFAULT_CONFIG.map[r])}return h}})},"esri/core/urlUtils":function(){define("require exports ./tsSupport/assignHelper dojo/io-query dojo/_base/url ../config ../kernel ./Error ./global ./lang ./Logger".split(" "),function(q,a,p,m,f,b,h,k,l,r,g){function e(c){var n={path:null,query:null},b=new a.Url(c),d=c.indexOf("?");null===b.query?n.path=c:(n.path=c.substring(0,d),n.query=m.queryToObject(b.query));b.fragment&&(n.hash=b.fragment,null===b.query&&(n.path=n.path.substring(0,n.path.length-(b.fragment.length+
1))));return n}function d(c){var a=c.indexOf("?");-1!==a?(D.path=c.slice(0,a),D.query=c.slice(a+1)):(D.path=c,D.query=null);return D}function t(c){c=d(c).path;c&&"/"===c[c.length-1]||(c+="/");c=I(c,!0);return c=c.toLowerCase()}function A(c){var a=C.proxyRules;c=t(c);for(var b=0;b<a.length;b++)if(0===c.indexOf(a[b].urlPrefix))return a[b]}function u(c){c=B(c);var a=c.indexOf("/sharing");return 0<a?c.substring(0,a):c.replace(/\/+$/,"")}function z(c,a,b){void 0===b&&(b=!1);c=J(c);a=J(a);return b||c.scheme===
a.scheme?c.host.toLowerCase()===a.host.toLowerCase()&&c.port===a.port:!1}function v(c,n,b){void 0===n&&(n=a.appBaseUrl);if(y(c))return b&&b.preserveProtocolRelative?c:"http"===a.appUrl.scheme&&a.appUrl.authority===O(c).slice(2)?"http:"+c:"https:"+c;if(!E(c)){b=N;if("/"===c[0]){var w=n.indexOf("//"),w=n.indexOf("/",w+2);n=-1===w?n:n.slice(0,w)}return b(n,c)}return c}function H(c,n,b){void 0===n&&(n=a.appBaseUrl);if(!x(c))return c;var w=B(c),d=w.toLowerCase();n=B(n).toLowerCase().replace(/\/+$/,"");
if((b=b?B(b).toLowerCase().replace(/\/+$/,""):null)&&0!==n.indexOf(b))return c;for(var g=function(c,a,n){n=c.indexOf(a,n);return-1===n?c.length:n},e=g(d,"/",d.indexOf("//")+2),f=-1;d.slice(0,e+1)===n.slice(0,e)+"/";){f=e+1;if(e===d.length)break;e=g(d,"/",e+1)}if(-1===f||b&&f<b.length)return c;c=w.slice(f);w=n.slice(f-1).replace(/[^/]+/g,"").length;if(0<w)for(d=0;d<w;d++)c="../"+c;else c="./"+c;return c}function B(c){c=c.trim();c=v(c);if(/^https?:\/\//i.test(c)){var a=d(c);c=a.path.replace(/\/{2,}/g,
"/");c=c.replace("/","//");a.query&&(c+="?"+a.query)}c=c.replace(/^(https?:\/\/)(arcgis\.com)/i,"$1www.$2");return c=Y(c)}function N(){for(var c=[],a=0;a<arguments.length;a++)c[a]=arguments[a];if(c&&c.length){a=[];if(x(c[0])){var b=c[0],d=b.indexOf("//");a.push(b.slice(0,d+1));Z.test(c[0])&&(a[0]+="/");c[0]=b.slice(d+2)}else"/"===c[0][0]&&a.push("");c=c.reduce(function(c,a){return a?c.concat(a.split("/")):c},[]);for(b=0;b<c.length;b++)d=c[b],".."===d&&0<a.length&&".."!==a[a.length-1]?a.pop():!d||
"."===d&&0!==a.length||a.push(d);return a.join("/")}}function O(c){if(P(c)||Q(c))return null;var a=c.indexOf("://");if(-1===a&&y(c))a=2;else if(-1!==a)a+=3;else return null;a=c.indexOf("/",a);return-1===a?c:c.slice(0,a)}function x(c){return y(c)||E(c)}function P(c){return"blob:"===c.slice(0,5)}function Q(c){return"data:"===c.slice(0,5)}function R(c){c=K(c);if(!c||!c.isBase64)return null;c=atob(c.data);for(var a=new Uint8Array(c.length),b=0;b<c.length;b++)a[b]=c.charCodeAt(b);return a.buffer}function K(c){return(c=
c.match(aa))?{mediaType:c[1],isBase64:!!c[2],data:c[3]}:null}function L(c){var a=R(c);if(!a)return null;c=K(c);return new Blob([a],{type:c.mediaType})}function y(a){return a&&"/"===a[0]&&"/"===a[1]}function E(a){return S.test(a)}function ba(c){return T.test(c)||"http"===a.appUrl.scheme&&y(c)}function M(a){return y(a)?"https:"+a:a.replace(T,"https:")}function F(){return"https"===a.appUrl.scheme}function I(a,b){void 0===b&&(b=!1);if(y(a))return a.slice(2);a=a.replace(S,"");b&&1<a.length&&"/"===a[0]&&
"/"===a[1]&&(a=a.slice(2));return a}function Y(c){var b=C.httpsDomains;if(!ba(c))return c;var d=c.indexOf("/",7),e;e=-1===d?c:c.slice(0,d);e=e.toLowerCase().slice(7);if(ca.test(e))if(r.endsWith(e,":80"))e=e.slice(0,-3),c=c.replace(":80","");else return c;if("http"===a.appUrl.scheme&&e===a.appUrl.authority&&!da.test(c))return c;if(F()&&e===a.appUrl.authority||b&&b.some(function(a){return e===a||r.endsWith(e,"."+a)})||F()&&!A(c))c=M(c);return c}function G(a,b,d){if(!(b&&d&&a&&x(a)))return a;var c=a.indexOf("//"),
n=a.indexOf("/",c+2),w=a.indexOf(":",c+2),n=Math.min(0>n?a.length:n,0>w?a.length:w);if(a.slice(c+2,n).toLowerCase()!==b.toLowerCase())return a;b=a.slice(0,c+2);a=a.slice(n);return""+b+d+a}function J(c){if("string"===typeof c)return new a.Url(v(c));c.scheme||(c.scheme=a.appUrl.scheme);return c}function U(c,b){var d=b&&b.url&&b.url.path;c&&d&&(c=v(c,d,{preserveProtocolRelative:!0}));(b=b&&b.portal)&&!b.isPortal&&b.urlKey&&b.customBaseUrl?(d=b.urlKey+"."+b.customBaseUrl,b=z(a.appUrl,a.appUrl.scheme+
"://"+d)?G(c,b.portalHostname,d):G(c,d,b.portalHostname)):b=c;return b}function V(a,b){if(!a)return a;!x(a)&&b&&b.blockedRelativeUrls&&b.blockedRelativeUrls.push(a);var c=v(a);if(b){var d=b.verifyItemRelativeUrls&&b.verifyItemRelativeUrls.rootPath||b.url&&b.url.path;d&&(c=H(c,d,d),c!==a&&b.verifyItemRelativeUrls&&b.verifyItemRelativeUrls.writtenUrls.push(c))}a=c;c=(b=b&&b.portal)&&!b.isPortal&&b.urlKey&&b.customBaseUrl?G(a,b.urlKey+"."+b.customBaseUrl,b.portalHostname):a;x(c)&&(c=B(c));return c}function W(a,
b,d){a=e(a);var c=a.query||{};c[b]=d;return a.path+"?"+m.objectToQuery(c)}Object.defineProperty(a,"__esModule",{value:!0});a.Url=f;var ea=g.getLogger("esri.core.urlUtils"),C=b.request,S=/^\s*[a-z][a-z0-9-+.]*:(?![0-9])/i,T=/^\s*http:/i,X=/^\s*https:/i,Z=/^\s*file:/i,ca=/:\d+$/,da=/^https?:\/\/[^/]+\.arcgis.com\/sharing(\/|$)/i;a.appUrl=new a.Url(b.applicationUrl);a.trustedServersUrlCache={};a.appBaseUrl=function(){var c=a.appUrl.path,c=c.substring(0,c.lastIndexOf(c.split("/")[c.split("/").length-
1]));return""+(a.appUrl.scheme+"://"+a.appUrl.host+(null!=a.appUrl.port?":"+a.appUrl.port:""))+c}();a.urlToObject=e;a.getProxyUrl=function(c){void 0===c&&(c=!1);var b,d=C.proxyUrl;if("string"===typeof c){if(b=c,b=X.test(b)||"https"===a.appUrl.scheme&&y(b),c=A(c))d=c.proxyUrl}else b=!!c;if(!d)throw ea.warn("esri/config: esriConfig.request.proxyUrl is not set."),new k("urlutils:proxy-not-set","esri/config: esriConfig.request.proxyUrl is not set.");b&&F()&&(d=M(d));return e(d)};a.addProxy=function(a){var c=
A(a),b,g;c&&(g=d(c.proxyUrl),b=g.path,g=g.query?m.queryToObject(g.query):null);b&&(c=e(a),a=b+"?"+c.path,(b=m.objectToQuery(p({},g,c.query)))&&(a=a+"?"+b));return a};var D={path:"",query:""};a.addProxyRule=function(a){a={proxyUrl:a.proxyUrl,urlPrefix:t(a.urlPrefix)};for(var c=C.proxyRules,b=a.urlPrefix,d=c.length,e=0;e<c.length;e++){var g=c[e].urlPrefix;if(0===b.indexOf(g)){if(b.length===g.length)return-1;d=e;break}0===g.indexOf(b)&&(d=e+1)}c.splice(d,0,a);return d};a.getProxyRule=A;a.hasSamePortal=
function(a,b){a=u(a);b=u(b);return I(a)===I(b)};a.getInterceptor=function(a){var c=function(c){return null==c||c instanceof RegExp&&c.test(a)||"string"===typeof c&&r.startsWith(a,c)},b=C.interceptors;if(b)for(var d=0;d<b.length;d++){var e=b[d];if(Array.isArray(e.urls)){if(e.urls.some(c))return e}else if(c(e.urls))return e}return null};a.hasSameOrigin=z;a.isTrustedServer=function(c){if("string"===typeof c)if(x(c))c=J(c);else return!0;for(var b=C.trustedServers||[],d=0;d<b.length;d++){var e;e=b[d];
a.trustedServersUrlCache[e]||(E(e)||y(e)?a.trustedServersUrlCache[e]=[new a.Url(v(e))]:a.trustedServersUrlCache[e]=[new a.Url("http://"+e),new a.Url("https://"+e)]);e=a.trustedServersUrlCache[e];for(var g=0;g<e.length;g++)if(z(c,e[g]))return!0}return!1};a.makeAbsolute=v;a.makeRelative=H;a.normalize=B;a.join=N;a.getOrigin=O;a.isAbsolute=x;a.isBlobProtocol=P;a.isDataProtocol=Q;a.dataToArrayBuffer=R;var aa=/^data:(.*?)(;base64)?,(.*)$/;a.dataComponents=K;a.makeData=function(a){return a.isBase64?"data:"+
a.mediaType+";base64,"+a.data:"data:"+a.mediaType+","+a.data};a.dataToBlob=L;a.downloadDataAsFile=function(a,b){var c;a:if(c=document.createElement("a"),"download"in c){var d=null;if(l.URL&&l.URL.createObjectURL){d=L(a);if(!d){c=!1;break a}d=l.URL.createObjectURL(d)}c.download=b;c.href=d||a;c.style.display="none";document.body.appendChild(c);c.click();document.body.removeChild(c);d&&l.URL.revokeObjectURL(d);c=void 0}else c=!1;c||window.navigator.msSaveOrOpenBlob&&window.navigator.msSaveOrOpenBlob(L(a),
b)};a.isProtocolRelative=y;a.hasProtocol=E;a.toHTTP=function(a){return y(a)?"http:"+a:a.replace(X,"http:")};a.toHTTPS=M;a.isAppHTTPS=F;a.removeFile=function(a){var c=0;if(x(a)){var b=a.indexOf("//");-1!==b&&(c=b+2)}b=a.lastIndexOf("/");return b<c?a:a.slice(0,b+1)};a.removeTrailingSlash=function(a){return a.replace(/\/+$/,"")};a.changeDomain=G;a.fromJSON=U;a.read=function(a,b,d){return U(a,d)};a.toJSON=V;a.write=function(a,b,d,e){(a=V(a,e))&&(b[d]=a)};a.isSVG=function(a){return fa.test(a)};a.removeQueryParameters=
function(a,b){a=e(a);var c=Object.keys(a.query||{});0<c.length&&b&&b.warn("removeQueryParameters()","Url query parameters are not supported, the following parameters have been removed: "+c.join(", ")+".");return a.path};a.addQueryParameter=W;a.addQueryParameters=function(a,b){a=e(a);var c=a.query||{},d;for(d in b)c[d]=b[d];return(b=m.objectToQuery(c))?a.path+"?"+b:a.path};a.removeQueryParameter=function(a,b){var c=e(a),d=c.path,c=c.query;if(!c)return a;delete c[b];return(a=m.objectToQuery(c))?d+"?"+
a:d};a.addTokenParameter=function(a){var b=h.id&&h.id.findCredential(a);return b&&b.token?W(a,"token",b.token):a};var fa=/(^data:image\/svg|\.svg$)/i})},"dojo/_base/url":function(){define(["./kernel"],function(q){var a=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,p=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,m=function(){for(var f=arguments,b=[f[0]],h=1;h<f.length;h++)if(f[h]){var k=new m(f[h]+""),b=new m(b[0]+"");if(""==k.path&&!k.scheme&&!k.authority&&!k.query)null!=
k.fragment&&(b.fragment=k.fragment),k=b;else if(!k.scheme&&(k.scheme=b.scheme,!k.authority&&(k.authority=b.authority,"/"!=k.path.charAt(0)))){for(var b=(b.path.substring(0,b.path.lastIndexOf("/")+1)+k.path).split("/"),l=0;l<b.length;l++)"."==b[l]?l==b.length-1?b[l]="":(b.splice(l,1),l--):0<l&&(1!=l||""!=b[0])&&".."==b[l]&&".."!=b[l-1]&&(l==b.length-1?(b.splice(l,1),b[l-1]=""):(b.splice(l-1,2),l-=2));k.path=b.join("/")}b=[];k.scheme&&b.push(k.scheme,":");k.authority&&b.push("//",k.authority);b.push(k.path);
k.query&&b.push("?",k.query);k.fragment&&b.push("#",k.fragment)}this.uri=b.join("");f=this.uri.match(a);this.scheme=f[2]||(f[1]?"":null);this.authority=f[4]||(f[3]?"":null);this.path=f[5];this.query=f[7]||(f[6]?"":null);this.fragment=f[9]||(f[8]?"":null);null!=this.authority&&(f=this.authority.match(p),this.user=f[3]||null,this.password=f[4]||null,this.host=f[6]||f[7],this.port=f[9]||null)};m.prototype.toString=function(){return this.uri};return q._Url=m})},"esri/core/workers/WorkerFallback":function(){define(["require",
"exports","../global","../has","./utils"],function(q,a,p,m,f){var b=function(){return function(){var a=this,b=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(function(e){a[e]=function(){for(var a=[],g=0;g<arguments.length;g++)a[g]=arguments[g];return b[e].apply(b,a)}})}}(),h=p.MutationObserver||p.WebKitMutationObserver,k=function(){var a;if(p.process&&p.process.nextTick)a=function(a){p.process.nextTick(a)};else if(p.Promise)a=function(a){p.Promise.resolve().then(a)};
else if(h){var b=[],e=document.createElement("div");(new h(function(){for(;0<b.length;)b.shift()()})).observe(e,{attributes:!0});a=function(a){b.push(a);e.setAttribute("queueStatus","1")}}return a}(),l=function(){var a=p.MessageEvent;try{new a("message",{data:null})}catch(g){return function(a,b){void 0===b&&(b={});var d=b.data,e=b.bubbles,e=void 0===e?!1:e;b=b.cancelable;b=void 0===b?!1:b;var g=document.createEvent("Event");g.initEvent(a,e,b);g.data=d;return g}}return function(b,e){return new a(b,
e)}}();return function(){function a(){this._dispatcher=new b;this._isInitialized=!1;this._workerPostMessage({type:f.MessageType.HANDSHAKE})}a.prototype.terminate=function(){};Object.defineProperty(a.prototype,"onmessage",{get:function(){return this._onmessageHandler},set:function(a){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler);(this._onmessageHandler=a)&&this.addEventListener("message",a)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"onerror",
{get:function(){return this._onerrorHandler},set:function(a){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler);(this._onerrorHandler=a)&&this.addEventListener("error",a)},enumerable:!0,configurable:!0});a.prototype.postMessage=function(a,b){var d=this;k(function(){d._workerMessageHandler(l("message",{data:a}))})};a.prototype.dispatchEvent=function(a){return this._dispatcher.dispatchEvent(a)};a.prototype.addEventListener=function(a,b,d){this._dispatcher.addEventListener(a,
b,d)};a.prototype.removeEventListener=function(a,b,d){this._dispatcher.removeEventListener(a,b,d)};a.prototype._workerPostMessage=function(a,b){var d=this;k(function(){d.dispatchEvent(l("message",{data:a}))})};a.prototype._workerMessageHandler=function(a){var b=this;if(a=f.receiveMessage(a)){var d=a.jobId;switch(a.type){case f.MessageType.CONFIGURE:this._isInitialized||this._workerPostMessage({type:f.MessageType.CONFIGURED});break;case f.MessageType.OPEN:q(["esri/core/workers/RemoteClient",a.modulePath],
function(a,e){a=a.connect(e);b._workerPostMessage({type:f.MessageType.OPENED,jobId:d,data:a})})}}};return a}()})},"*noref":1}});
define("require exports ../../core/tsSupport/extendsHelper ../../core/promiseUtils ../../core/requireUtils ../../core/workers module".split(" "),function(q,a,p,m,f,b,h){function k(){return m.create(function(a){q(["./rasterFormats/LercCodec"],a)})}Object.defineProperty(a,"__esModule",{value:!0});var l=function(){function a(){}a.prototype._decode=function(a){return k().then(function(b){b=b.decode;b=b(a.buffer,a.options);return{result:b,transferList:[b.pixelData.buffer]}})};return a}(),r=function(a){function d(d){var e=
a.call(this)||this;e.scheduler=d;e._thread=void 0;b.open(f.getAbsMid("./LercWorker",q,h),{strategy:"dedicated",scheduler:d}).then(function(a){void 0===e._thread?e._thread=a:a.close()});return e}p(d,a);d.prototype.destroy=function(){this._thread&&this._thread.close();this._thread=null};d.prototype.decode=function(a,b){return a&&0!==a.byteLength?this._thread?this._thread.invoke("_decode",{buffer:a,options:b},{transferList:[a]}):k().then(function(d){d=d.decode;return d(a,b)}):m.resolve(null)};return d}(l),
g=new Map;a.acquireInstance=function(a){var b=g.get(a);b||(b={instance:new r(a),ref:0},g.set(a,b));++b.ref;return b.instance};a.releaseInstance=function(a){if(null!=a){a=a.scheduler;var b=g.get(a);b&&0>=--b.ref&&(b.instance.destroy(),g.delete(a))}};a.default=function(){return new l}});