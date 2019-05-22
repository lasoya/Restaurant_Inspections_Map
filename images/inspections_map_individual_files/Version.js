// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./Error"],function(f,h,g){Object.defineProperty(h,"__esModule",{value:!0});f=function(){function d(a,b,c){void 0===c&&(c="");this.major=a;this.minor=b;this._context=c}d.prototype.lessThan=function(a,b){return this.major<a||a===this.major&&this.minor<b};d.prototype.since=function(a,b){return!this.lessThan(a,b)};d.prototype.validate=function(a){if(this.major!==a.major)throw new g((this._context&&this._context+":")+"unsupported-version","Required major "+(this._context&&
this._context+" ")+"version is '"+this.major+"', but got '${version.major}.${version.minor}'",{version:a});};d.prototype.clone=function(){return new d(this.major,this.minor,this._context)};d.parse=function(a,b){void 0===b&&(b="");var c=a.split("."),e=c[0],c=c[1],f=/^\s*\d+\s*$/;if(!e||!e.match||!e.match(f))throw new g((b&&b+":")+"invalid-version","Expected major version to be a number, but got '${version}'",{version:a});if(!c||!c.match||!c.match(f))throw new g((b&&b+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",
{version:a});a=parseInt(e,10);e=parseInt(c,10);return new d(a,e,b)};return d}();h.Version=f});