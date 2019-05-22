// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","@dojo/framework/shim/array","./RandomLCG"],function(k,e,l,r){function m(a,b){return-1===a.indexOf(b)}function n(a,b,c){return!a.some(b.bind(null,c))}function t(a){return a}Object.defineProperty(e,"__esModule",{value:!0});e.find=l.find;e.findIndex=l.findIndex;e.unique=function(a){return a.filter(function(a,c,d){return d.indexOf(a)===c})};e.equals=function(a,b,c){if(!a&&!b)return!0;if(!a||!b||a.length!==b.length)return!1;if(c)for(var d=0;d<a.length;d++){if(!c(a[d],b[d]))return!1}else for(d=
0;d<a.length;d++)if(a[d]!==b[d])return!1;return!0};e.difference=function(a,b,c){var d;c?(d=b.filter(n.bind(null,a,c)),a=a.filter(n.bind(null,b,c))):(d=b.filter(m.bind(null,a)),a=a.filter(m.bind(null,b)));return{added:d,removed:a}};e.intersect=function(a,b,c){return a&&b?c?a.filter(function(a){return-1<l.findIndex(b,function(b){return c(a,b)})}):a.filter(function(a){return-1<b.indexOf(a)}):[]};e.constant=function(a,b){for(var c=Array(a),d=0;d<a;d++)c[d]=b;return c};e.range=function(a,b){void 0===b&&
(b=a,a=0);for(var c=Array(b-a),d=a;d<b;d++)c[d-a]=d;return c};e.binaryIndexOf=function(a,b,c){for(var d=a.length,e=0,h=d-1;e<h;){var f=e+Math.floor((h-e)/2);b>a[f]?e=f+1:h=f}h=a[e];return c?b>=a[d-1]?-1:h===b?e:e-1:h===b?e:-1};e.flatten=function(a){return a.reduce(function(a,c){return a.concat(c||[])},[])};k=function(){return function(){this.last=0}}();e.RemoveHint=k;var p=new k;e.removeUnordered=function(a,b,c,d){d=d||p;for(var e=null==c?a.length:c,h=Math.max(0,d.last-10),f=-1,g=h;g<e;++g)if(a[g]===
b){f=g;break}if(-1===f){for(g=0;g<h;++g)if(a[g]===b){f=g;break}if(-1===f)return}a[f]=a[e-1];null==c&&a.pop();d.last=f;return b};var g=new Set;e.removeUnorderedMany=function(a,b,c,d,e,h){void 0===c&&(c=a.length);void 0===d&&(d=b.length);if(0===d||0===c)return c;g.clear();for(var f=0;f<d;++f)g.add(b[f]);e=e||p;for(f=b=Math.max(0,e.last-10);f<c;++f)if(g.has(a[f])&&(h&&h.push(a[f]),g.delete(a[f]),a[f]=a[c-1],--c,--f,0===g.size||0===c))return g.clear(),c;for(f=0;f<b;++f)if(g.has(a[f])&&(h&&h.push(a[f]),
g.delete(a[f]),a[f]=a[c-1],--c,--f,0===g.size||0===c))return g.clear(),c;g.clear();return c};e.shuffle=function(a,b){b=(q.seed=b)?function(){return q.getFloat()}:Math.random;for(var c=a.length-1;0<c;c--){var d=Math.floor(b()*(c+1)),e=a[c];a[c]=a[d];a[d]=e}return a};var q=new r;e.keysOfMap=function(a){var b=[];a.forEach(function(a,d){return b.push(d)});return b};e.keysOfSet=function(a,b){void 0===b&&(b=t);var c=[];a.forEach(function(a){return c.push(b(a))});return c};e.fromMapValues=function(a){if(Array.from)return Array.from(a.values());
var b=Array(a.size),c=0;a.forEach(function(a){b[c++]=a});return b}});