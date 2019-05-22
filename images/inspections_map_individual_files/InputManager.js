// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Logger ../../core/now ../../core/accessorSupport/decorators ./keys ./recognizers ./handlers/LatestPointerType".split(" "),function(r,t,w,n,x,y,z,m,u,A,B){Object.defineProperty(t,"__esModule",{value:!0});var p=y.getLogger("esri.views.input.InputManager");r=function(k){function c(a,b){a=k.call(this)||this;a._pointerCaptures=new Map;a._nameToGroup={};a._handlers=[];a._currentPropagation=
null;a._sourceEvents=new Set;a._keyModifiers=new Set;a._activeKeyModifiers=new Set;a.primaryKey=u.primaryKey;a.latestPointerType="mouse";a._installRecognizers();return a}w(c,k);c.prototype.normalizeCtorArgs=function(a,b){this._browserEvents=a;this._browserEvents.onEventReceived=this._onEventReceived.bind(this);this._recognizers=b;this._recognizers||(this._recognizers=A.defaults.map(function(a){return new a}));return{}};c.prototype.destroy=function(){for(var a=0,b=Object.keys(this._nameToGroup);a<
b.length;a++)this.uninstallHandlers(b[a]);this._browserEvents=null};Object.defineProperty(c.prototype,"hasPendingInputs",{get:function(){return this._handlers.some(function(a){return a.handler.hasPendingInputs})},enumerable:!0,configurable:!0});c.prototype.installHandlers=function(a,b){var d=this;if(this._nameToGroup[a])p.error("There is already an InputHandler group registered under the name `"+a+"`");else if(0===b.length)p.error("Can't register a group of zero handlers");else{var e={name:a,handlers:b.map(function(a,
b){return{handler:a,active:!0,removed:!1,priorityIndex:0,eventCallback:null,uninstallCallback:null}})};this._nameToGroup[a]=e;a=function(a){var b=e.handlers[a];c._handlers.push(b);b.handler.onInstall({updateDependencies:function(){d.updateDependencies()},emit:function(a,e,c,f){d._emitInputEvent(b.priorityIndex,a,e,c,f)},setPointerCapture:function(a,c){d._setPointerCapture(e,b,a,c)},setEventCallback:function(a){b.eventCallback=a},setUninstallCallback:function(a){b.uninstallCallback=a},refreshHasPendingInputs:function(){d.notifyChange("hasPendingInputs")}})};
var c=this;for(b=e.handlers.length-1;0<=b;b--)a(b);this.updateDependencies()}};c.prototype.uninstallHandlers=function(a){var b=this._nameToGroup[a];b?(b.handlers.forEach(function(a){a.removed=!0;a.uninstallCallback()}),delete this._nameToGroup[a],this._currentPropagation?this._currentPropagation.needsHandlerGarbageCollect=!0:this._garbageCollectRemovedHandlers()):p.error("There is no InputHandler group registered under the name `"+a+"`")};c.prototype.hasHandlers=function(a){return void 0!==this._nameToGroup[a]};
c.prototype.updateDependencies=function(){var a=new Set,b=new Set;this._handlersPriority=[];for(var d=this._handlers.length-1;0<=d;d--){var e=this._handlers[d];e.priorityIndex=d;this._handlersPriority.push(e)}this._handlersPriority=this._sortHandlersPriority(this._handlersPriority);for(d=this._handlersPriority.length-1;0<=d;d--){e=this._handlersPriority[d];e.priorityIndex=d;var c=e.handler.hasSideEffects;if(!c)for(var g=0,h=e.handler.outgoingEventTypes;g<h.length;g++)if(a.has(h[g])){c=!0;break}if(c)for(g=
0,h=e.handler.incomingEventMatches;g<h.length;g++){var l=h[g];a.add(l.eventType);for(var q=0,l=l.keyModifiers;q<l.length;q++){var v=l[q];u.isSystemModifier(v)||b.add(v)}}e.active=c}this._sourceEvents=a;this._keyModifiers=b;0<this._pointerCaptures.size&&this._sourceEvents.add("pointer-capture-lost");0<this._keyModifiers.size&&(this._sourceEvents.add("key-down"),this._sourceEvents.add("key-up"));this._browserEvents&&(this._browserEvents.activeEvents=this._sourceEvents)};c.prototype._setLatestPointerType=
function(a){this._set("latestPointerType",a)};c.prototype._onEventReceived=function(a,b){"pointer-capture-lost"===a&&this._pointerCaptures.delete(b.native.pointerId);this._updateKeyModifiers(a,b);this._emitInputEventFromSource(a,b,b.native?b.native.timestamp:void 0)};c.prototype._updateKeyModifiers=function(a,b){var d=this;if(b){var e=!1,c=function(){if(!e){var a=new Set;d._activeKeyModifiers.forEach(function(b){a.add(b)});d._activeKeyModifiers=a;e=!0}},g=function(a,b){b&&!d._activeKeyModifiers.has(a)?
(c(),d._activeKeyModifiers.add(a)):!b&&d._activeKeyModifiers.has(a)&&(c(),d._activeKeyModifiers.delete(a))};if("key-down"===a||"key-up"===a){var h=b.key;this._keyModifiers.has(h)&&g(h,"key-down"===a)}a=b.native;g("Alt",!(!a||!a.altKey));g("Ctrl",!(!a||!a.ctrlKey));g("Shift",!(!a||!a.shiftKey));g("Meta",!(!a||!a.metaKey));g("Primary",this._activeKeyModifiers.has(this.primaryKey))}};c.prototype._installRecognizers=function(){var a=this;this._latestPointerTypeHandler=new B.LatestPointerType(function(b){return a._setLatestPointerType(b)});
0<this._recognizers.length&&this.installHandlers("default",this._recognizers);this.installHandlers("input-manager-logic",[this._latestPointerTypeHandler])};c.prototype._setPointerCapture=function(a,b,d,c){a=a.name+"-"+b.priorityIndex;b=this._pointerCaptures.get(d.pointerId)||new Set;this._pointerCaptures.set(d.pointerId,b);c?(b.add(a),1===b.size&&this._browserEvents&&this._browserEvents.setPointerCapture(d,!0)):b.has(a)&&(b.delete(a),0===b.size&&(this._pointerCaptures.delete(d.pointerId),this._browserEvents&&
this._browserEvents.setPointerCapture(d,!1)))};c.prototype._garbageCollectRemovedHandlers=function(){this._handlers=this._handlers.filter(function(a){return!a.removed});this.updateDependencies()};c.prototype._emitInputEventFromSource=function(a,b,d){this._emitInputEvent(0,a,b,d)};c.prototype._emitInputEvent=function(a,b,d,c,f){c=void 0!==c?c:this._currentPropagation?this._currentPropagation.timestamp:z();b=new C(b,d,c,f||this._activeKeyModifiers);this._currentPropagation?this._currentPropagation.addedEvents.push(b):
this._doNewPropagation(a,b)};c.prototype._doNewPropagation=function(a,b){for(a=this._currentPropagation={events:[b],addedEvents:[],currentHandler:this._handlersPriority[a],needsHandlerGarbageCollect:!1,timestamp:b.timestamp};a.currentHandler;){if(a.currentHandler.removed)a.needsHandlerGarbageCollect=!0;else{b=a.events;var d=[];a.addedEvents=[];for(var c=0;c<b.length;c++){var f=b[c];a.currentHandler.active&&a.currentHandler.eventCallback(f);f.shouldStopPropagation()||d.push(f)}a.events=d.concat(a.addedEvents)}a.currentHandler=
this._handlersPriority[a.currentHandler.priorityIndex+1]}a.needsHandlerGarbageCollect&&this._garbageCollectRemovedHandlers();this._currentPropagation=null};c.prototype._compareHandlerPriority=function(a,b){if(a.handler.hasSideEffects!==b.handler.hasSideEffects)return a.handler.hasSideEffects?1:-1;for(var c=0,e=a.handler.incomingEventMatches;c<e.length;c++)for(var f=e[c],g=function(a){if(f.eventType!==a.eventType)return"continue";var b=f.keyModifiers.filter(function(b){return-1!==a.keyModifiers.indexOf(b)});
if(b.length===f.keyModifiers.length!==(b.length===a.keyModifiers.length))return{value:f.keyModifiers.length>a.keyModifiers.length?-1:1}},h=0,l=b.handler.incomingEventMatches;h<l.length;h++){var k=g(l[h]);if("object"===typeof k)return k.value}return a.priorityIndex>b.priorityIndex?-1:1};c.prototype._sortHandlersPriority=function(a){for(var b=[],c=0;c<a.length;c++){for(var e=a[c],f=0;f<b.length&&0<=this._compareHandlerPriority(e,b[f]);)f++;b.splice(f,0,e)}return b};Object.defineProperty(c.prototype,
"debug",{get:function(){var a=this,b=function(b){var c=a._setPointerCapture;a._setPointerCapture=function(){};b();a._setPointerCapture=c};return{injectEvent:function(c,e){b(function(){a._onEventReceived(c,e)})},disablePointerCapture:b}},enumerable:!0,configurable:!0});n([m.property({readOnly:!0})],c.prototype,"hasPendingInputs",null);n([m.property({readOnly:!0})],c.prototype,"latestPointerType",void 0);return c=n([m.subclass("esri.views.input.InputManager")],c)}(m.declared(x));t.InputManager=r;var C=
function(){function k(c,a,b,d){this.type=c;this.data=a;this.timestamp=b;this.modifiers=d;this._stopPropagation=!1}k.prototype.stopPropagation=function(){this._stopPropagation=!0};k.prototype.shouldStopPropagation=function(){return this._stopPropagation};return k}()});