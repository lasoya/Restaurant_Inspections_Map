// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/Handles ../../../core/now ../../../core/scheduling ./index ./MemoryController ./StreamDataLoader ./StreamDataSupplier ../../support/Scheduler".split(" "),function(t,f,k,g,l,b,m,n,p,q){Object.defineProperty(f,"__esModule",{value:!0});f.newResourceController=function(b,d){void 0===d&&(d=g);return new e.ResourceController(b,d)};var e;(function(e){function d(a){var c={},h;for(h in b.ClientType)c[b.ClientType[h]]=0;c[b.ClientType.TERRAIN]=15;c[b.ClientType.SCENE]=
20;c[b.ClientType.SYMBOLOGY]=5;return new n.default(c,a)}var f=function(){function a(c,a){void 0===a&&(a=g);var b=this;this._view=c;this._streamDataLoader=this._memoryController=this._scheduler=null;this._lastTargetChangeTime=0;this._handles=new k;this._frameTask=null;this._lastTargetChangeTime=a();this._scheduler=q.newScheduler(a);this._memoryController=m.newMemoryController(this._view);this._streamDataLoader=d(this._scheduler);this._handles.add(this._view.watch("state.camera",function(){return b._cameraChangedHandler()},
!0));this._frameTask=l.addFrameTask({update:function(a){return b.frame(a)}})}a.prototype.destroy=function(){this._handles.remove();this._frameTask&&(this._frameTask.remove(),this._frameTask=null);this._streamDataLoader&&(this._streamDataLoader.destroy(),this._streamDataLoader=null);this._memoryController.destroy();this._scheduler=this._memoryController=null};Object.defineProperty(a.prototype,"updating",{get:function(){return this._memoryController.updating},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"scheduler",{get:function(){return this._scheduler},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"memoryController",{get:function(){return this._memoryController},enumerable:!0,configurable:!0});a.prototype.getStreamDataSupplier=function(a,b){return new p.StreamDataSupplier(a,this._streamDataLoader,b)};a.prototype.frame=function(a){this._view.suspended||(this._view.stateManager&&this._view.stateManager.step(a.deltaTime/1E3),this._scheduler.state=this.state,this._scheduler.updateBudget(a)?
(this._memoryController.update(),this._scheduler.frame(a)):this._memoryController.updating&&this._memoryController.update())};a.prototype._cameraChangedHandler=function(){this._lastTargetChangeTime=this._scheduler.now;this._scheduler.state=this.state;this.memoryController.notifyViewChanged()};Object.defineProperty(a.prototype,"state",{get:function(){return this._scheduler.now-this._lastTargetChangeTime>r?2:this._view.animation?0:1},enumerable:!0,configurable:!0});return a}();e.ResourceController=
f;var r=300})(e||(e={}))});