// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./Program"],function(f,e,k){function h(d,a,b,c){b=b||{};c=c||"";b="function"===typeof a.shaders?a.shaders(b):a.shaders;return new k(d,c+b.vertexShader,c+b.fragmentShader,a.attributes)}Object.defineProperty(e,"__esModule",{value:!0});e.glslifyDefineMap=function(d){var a="",b;for(b in d){var c=d[b];if("boolean"===typeof c)c&&(a+="#define "+b+"\n");else if("number"===typeof c)a+="#define "+b+" "+c.toFixed()+"\n";else if("object"===typeof c){var g=c.options,e=0,f;for(f in g)a+=
"#define "+g[f]+" "+(e++).toFixed()+"\n";a+="#define "+b+" "+g[c.value]+"\n"}}return a};f=function(){function d(a){this._programCacheByTemplate=new Map;this._rctx=a}d.prototype.dispose=function(){this._programCacheByTemplate.forEach(function(a){a.programs.forEach(function(a){a.dispose()})});this._programCacheByTemplate=null};d.prototype.getProgram=function(a,b){var c=this;this._programCacheByTemplate.has(a)||this.addProgramTemplate(a,function(b){return h(c._rctx,a,b)});return this.getProgramTemplateInstance(a,
b)};d.prototype.addProgramTemplate=function(a,b){this._programCacheByTemplate.set(a,{constructor:b,programs:new Map})};d.prototype.getProgramTemplateInstance=function(a,b){if(a=this._programCacheByTemplate.get(a)){var c=b?JSON.stringify(b):"default";a.programs.has(c)||(b=a.constructor(b),a.programs.set(c,b));return a.programs.get(c)}return null};return d}();e.ProgramCache=f;e.createProgram=h});