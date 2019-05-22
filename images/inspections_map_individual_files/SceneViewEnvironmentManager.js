// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../Color ../../../core/Accessor ../../../core/Evented ../../../core/Handles ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ../../../core/libs/gl-matrix-2/vec4f64 ../../../geometry/Point ../../../geometry/SpatialReference ../../../geometry/support/webMercatorUtils ./EnvironmentRenderer ../support/earthUtils ../support/sunUtils ../webgl-engine/lighting/Lightsources ../../../webscene/background/ColorBackground".split(" "),
function(e,k,y,h,z,A,B,C,q,l,f,g,m,r,t,u,D,E,v,n,p,F){Object.defineProperty(k,"__esModule",{value:!0});var w=m.vec3f64.fromValues(.5773502691896258,-.5773502691896258,.5773502691896258);e=function(e){function d(a){var b=e.call(this)||this;b.referencePointUpdateDelay=200;b.referencePointUpdateInterval=3E3;b.referencePointUpdateDistThreshold=1E6;b._referencePosUpdateQuery=null;b._referencePosMapCoordsRequested=null;b._viewHandles=new C;b._preserveAbsoluteDateTime=!1;b._trackingEnabled=!1;b._viewConnected=
!1;b._referencePosResetPreserveAbsoluteTime=!1;b.referencePosUpdateTimer=null;b._referencePosWGS84=null;b._referencePosMapCoords=null;b._mainLight=new p.MainLight;b._ambientLight=new p.AmbientLight;b._moonLight=new p.FillLight;b._environmentRenderer=null;b.debug=function(){return{set referencePointUpdateInterval(a){b.referencePointUpdateInterval=a},set referencePointUpdateDistThreshold(a){b.referencePointUpdateDistThreshold=a},set referencePosUpdateTimer(a){b.referencePosUpdateTimer=a},set referencePointUpdateDelay(a){b.referencePointUpdateDelay=
a}}}();b._resetReferencePosition();return b}y(d,e);d.prototype.destroy=function(){this._viewHandles.destroy();this.disposeRendering()};Object.defineProperty(d.prototype,"updating",{get:function(){return!this.noReferencePositionQueries&&(!!this._referencePosUpdateQuery||!!this._referencePosMapCoordsRequested)||this._environmentRenderer.updating},enumerable:!0,configurable:!0});d.prototype.updateReadyChange=function(a){a&&!this._viewConnected?(this._viewConnected=!0,this.connectView(this.view)):!a&&
this._viewConnected&&(this._viewConnected=!1,this.disconnectView(this.view))};d.prototype.disposeRendering=function(){this._environmentRenderer&&(this._environmentRenderer.destroy(),this._environmentRenderer=null);this._resetReferencePosition(!0)};d.prototype.connectView=function(a){var b=this;this._environmentRenderer=new E({view:a});this._viewHandles.add([this.view.watch("environment.lighting.date",function(a){return b._lightingDateHandler(a)},!0),this.view.watch("interacting,stationary",this._interactingStationaryHandler.bind(this)),
this.view.watch(["environment.lighting.directShadowsEnabled","environment.lighting.ambientOcclusionEnabled","environment.background.color"],this._updateRenderParamsHandler.bind(this)),this.view.watch("spatialReference",this._spatialReferenceHandler.bind(this)),l.init(this.view,"viewingMode",this._viewingModeHandler.bind(this)),l.init(this.view,"environment.lighting.cameraTrackingEnabled",this._updateCameraTracking.bind(this),!0),l.init(this,"view.state.camera",this._cameraHandler.bind(this,null),
!0),this.watch("noReferencePositionQueries",this._cameraHandler.bind(this,null))]);this._updateRenderParamsHandler();this._updateLightParams();this._cameraHandler()};d.prototype._updateCameraTracking=function(a){if(this._trackingEnabled=a)this._cameraHandler();else if(a=this.get("view.environment.lighting"))a.positionTimezoneInfo.autoUpdated=!1};d.prototype.disconnectView=function(a){this.disposeRendering();this._viewHandles.removeAll()};d.prototype._lightingDateHandler=function(a){if(a){var b=this.view.environment.lighting;
if(!b.positionTimezoneInfo.autoUpdated){this._preserveAbsoluteDateTime=!0;var c=this.view.spatialReference;if(!(c.isWGS84||c.isWebMercator||(c=this.view.camera.position,this._referencePosMapCoords&&this._referencePosMapCoords.equals(c)))){this._requestReferencePositionUpdate(c);return}this._preupdateTracking(a);this._referencePosWGS84&&(c=v.positionToTimezone(this._referencePosWGS84,x),b.autoUpdate(null,c),this._trackingEnabled&&(b.positionTimezoneInfo.autoUpdated=!0))}this._updateLightParams(a)}};
d.prototype._preupdateTracking=function(a){!this._trackingEnabled&&this.get("view.environment.lighting.cameraTrackingEnabled")&&this._cameraHandler(a)};d.prototype._cameraHandler=function(a){void 0===a&&(a=null);if(this.view.ready){var b=this.view.camera;if(b){var c=this.view.spatialReference;c.isWGS84||c.isWebMercator?this._cameraHandlerGlobal(b,a):this._cameraHandlerLocal(b,a)}}};d.prototype._cameraHandlerGlobal=function(a,b){a=a.position;this._referencePosWGS84||(this._referencePosWGS84=new t({spatialReference:u.WGS84}));
a.spatialReference.isWebMercator?D.webMercatorToGeographic(a,!1,this._referencePosWGS84):(this._referencePosWGS84.x=a.x,this._referencePosWGS84.y=a.y);this._referencePosWGS84.z=a.z;this._autoUpdateTimezone(a,b)||this._updateLightParams(b)};d.prototype._cameraHandlerLocal=function(a,b){a=a.position;(!this._referencePosMapCoords||this._referencePosMapCoordsRequested||this._exceedsReferencePosDistThreshold(a))&&this._requestReferencePositionUpdate(a,!0);this.view.mapCoordsHelper&&this._referencePosWGS84&&
(this._referencePosWGS84.z=a.z*this.view.mapCoordsHelper.unitInMeters,this._referencePosChanged())};d.prototype._interactingStationaryHandler=function(){!this.view.interacting&&this.view.stationary&&this._executePendingReferencePositionUpdate()};d.prototype._updateLightParams=function(a){void 0===a&&(a=null);var b=this.view.environment.lighting;a=a||b.date;var b=this.view._stage,c;this._referencePosWGS84?(c=n.computeColorAndIntensity(a,this._referencePosWGS84),n.computeDirection(a,this._referencePosWGS84,
this.view.viewingMode,c.diffuse.direction)):c={diffuse:{color:[1,1,1],intensity:.55,direction:w},ambient:{color:[1,1,1],intensity:.55},noonFactor:.5,globalFactor:0};g.vec3.scale(this._mainLight.intensity,c.diffuse.color,c.diffuse.intensity*Math.PI);g.vec3.negate(this._mainLight.direction,c.diffuse.direction);g.vec3.scale(this._ambientLight.intensity,c.ambient.color,c.ambient.intensity);g.vec3.lerp(this._moonLight.intensity,G,H,c.globalFactor);g.vec3.scale(this._moonLight.intensity,this._moonLight.intensity,
(1-.5*c.globalFactor)*(1-.4*c.noonFactor*(1-c.globalFactor)));g.vec3.copy(this._moonLight.direction,c.diffuse.direction);b.setLighting({lights:[this._mainLight,this._ambientLight,this._moonLight],globalFactor:c.globalFactor,groundLightingFactor:1-c.noonFactor});this._updateRenderParamsHandler()};d.prototype._autoUpdateTimezone=function(a,b){void 0===b&&(b=null);if(!this.view.get("environment.lighting.cameraTrackingEnabled"))return!1;var c=I;c.setTime((b||this.view.environment.lighting.date).getTime());
a=v.positionToTimezone(a,x);var d=this.view.environment.lighting.positionTimezoneInfo;if(!d.autoUpdated)d=a;else if(d.hours===a.hours&&d.minutes===a.minutes&&d.seconds===a.seconds)return!1;var e=c.getUTCHours()-(a.hours-d.hours),f=c.getUTCMinutes()-(a.minutes-d.minutes),d=c.getUTCSeconds()-(a.seconds-d.seconds);c.setUTCHours(e);c.setUTCMinutes(f);c.setUTCSeconds(d);return b?!1:this.view.environment.lighting.autoUpdate(c,a)};d.prototype._updateRenderParamsHandler=function(){var a=this.view._stage,
b=!0;this._referencePosWGS84&&(b=n.computeShadowsEnabled(this._referencePosWGS84,this.view.viewingMode));var c=this.view.environment.background,c=c instanceof F?{type:"color",color:r.vec4f64.fromArray(z.toUnitRGBA(c.color))}:{type:"color",color:r.vec4f64.fromValues(0,0,0,1)};a&&a.setRenderParams({shadowMap:this.view.environment.lighting.directShadowsEnabled&&b,ssao:this.view.environment.lighting.ambientOcclusionEnabled,background:c})};d.prototype._spatialReferenceHandler=function(){this._resetReferencePosition()};
d.prototype._viewingModeHandler=function(){this._resetReferencePosition()};d.prototype._resetReferencePosition=function(a){void 0===a&&(a=!1);this._cancelReferencePosUpdates();this._referencePosWGS84=this._referencePosResetPreserveAbsoluteTime=this._referencePosMapCoordsRequested=this._referencePosMapCoords=null;a||this.notifyChange("updating")};d.prototype._requestReferencePositionUpdate=function(a,b){var c=this;void 0===b&&(b=!1);if(this.view.mapCoordsHelper.canProject()&&!this.noReferencePositionQueries&&
(this._referencePosMapCoordsRequested?this._referencePosMapCoordsRequested.copy(a):this._referencePosMapCoordsRequested=a.clone(),this._referencePosResetPreserveAbsoluteTime=!!b,!this._referencePosUpdateQuery&&!this.referencePosUpdateTimer&&!this.view.interacting&&this.view.stationary)){var d=this._referencePosUpdateQuery=q.after(this.referencePointUpdateDelay).then(function(){if(c._referencePosUpdateQuery===d)return c._doReferencePositionUpdateQuery(function(){return c._referencePosUpdateQuery!==
d})}).catch(function(){}).then(function(){c._referencePosUpdateQuery===d&&(c._referencePosUpdateQuery=null,c.referencePosUpdateTimer||c._executePendingReferencePositionUpdate(),c.notifyChange("updating"))}),e=this.referencePosUpdateTimer=q.after(this.referencePointUpdateInterval).then(function(){c.referencePosUpdateTimer===e&&(c.referencePosUpdateTimer=null,c._referencePosUpdateQuery||c._executePendingReferencePositionUpdate())});this.notifyChange("updating")}};d.prototype._doReferencePositionUpdateQuery=
function(a){var b=this;this._referencePosResetPreserveAbsoluteTime&&(this._preserveAbsoluteDateTime=!1);this._referencePosMapCoords?this._referencePosMapCoords.copy(this._referencePosMapCoordsRequested):this._referencePosMapCoords=this._referencePosMapCoordsRequested.clone();this._referencePosMapCoordsRequested=this._referencePosResetPreserveAbsoluteTime=null;return this.view.mapCoordsHelper.toGeographic(this._referencePosMapCoords).then(function(c){if(!a()&&!isNaN(c[0])&&!isNaN(c[1])){var d=b._referencePosMapCoords.z*
b.view.mapCoordsHelper.unitInMeters;b._referencePosWGS84?(b._referencePosWGS84.x=c[0],b._referencePosWGS84.y=c[1],b._referencePosWGS84.z=d):b._referencePosWGS84=new t({x:c[0],y:c[1],z:d,spatialReference:u.WGS84});b._referencePosChanged()}})};d.prototype._executePendingReferencePositionUpdate=function(){var a=this._referencePosMapCoordsRequested;a&&this._requestReferencePositionUpdate(a,this._referencePosResetPreserveAbsoluteTime)};d.prototype._referencePosChanged=function(){this._preserveAbsoluteDateTime?
this._updateLightParams():this._autoUpdateTimezone(this._referencePosWGS84)||this._updateLightParams()};d.prototype._exceedsReferencePosDistThreshold=function(a){return this._referencePosMapCoords?(a=this._referencePosMapCoords.distance(a),this.view.mapCoordsHelper&&(a*=this.view.mapCoordsHelper.unitInMeters),a>this.referencePointUpdateDistThreshold):!0};d.prototype._cancelReferencePosUpdates=function(){this.referencePosUpdateTimer=this._referencePosUpdateQuery=null};d.FIXED_LIGHT_DIRECTION=w;h([f.property({type:Boolean,
dependsOn:["noReferencePositionQueries","_environmentRenderer.updating"],readOnly:!0})],d.prototype,"updating",null);h([f.property()],d.prototype,"noReferencePositionQueries",void 0);h([f.property({constructOnly:!0})],d.prototype,"view",void 0);h([f.property()],d.prototype,"_environmentRenderer",void 0);return d=h([f.subclass("esri.views.3d.environment.SceneViewEnvironmentManager")],d)}(f.declared(A,B));k.SceneViewEnvironmentManager=e;var I=new Date,x={hours:0,minutes:0,seconds:0},G=m.vec3f64.fromValues(.22,
.22,.33),H=m.vec3f64.fromValues(.22,.22,.22);k.default=e});