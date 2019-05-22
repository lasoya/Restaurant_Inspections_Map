// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../geometry ../../core/Collection ../../core/compilerUtils ../../core/Error ../../core/Handles ../../core/Logger ../../core/promiseUtils ../../core/watchUtils ../../core/accessorSupport/decorators ../../geometry/support/webMercatorUtils ../../support/actions/ActionBase ../../support/actions/ActionButton ../../support/actions/ActionToggle ../../views/support/layerViewUtils ./actions ../support/AnchorElementViewModel ../support/GoTo".split(" "),
function(J,K,u,d,v,w,x,y,l,z,A,m,k,c,B,C,D,E,F,f,G,H){var n=x.ofType({key:"type",defaultKeyValue:"button",base:C,typeMap:{button:D,toggle:E}}),I=new n([f.zoomToFeature.clone()]),p=A.getLogger("esri.widgets.Popup.PopupViewModel");return function(r){function b(a){a=r.call(this)||this;a._handles=new z;a._pendingPromises=new Set;a._zoomToLocation=null;a._fetchingFeatures=null;a.actions=I;a.defaultPopupTemplateEnabled=!1;a.autoCloseEnabled=!1;a.autoOpenEnabled=!0;a.content=null;a.highlightEnabled=!0;a.title=
null;a.updateLocationEnabled=!1;a.view=null;a.visible=!1;a.zoomFactor=4;return a}u(b,r);b.prototype.initialize=function(){var a=this;this._handles.add([k.init(this,"autoOpenEnabled",this._autoOpenEnabledChange),this.on("view-change",this._autoClose),k.watch(this,["highlightEnabled","selectedFeature","visible","view"],this._highlightFeature),k.watch(this,"view.animation.state",function(e){a._zoomToLocation||(f.zoomToFeature.disabled="waiting-for-target"===e)}),this.on("trigger-action",function(e){return f.triggerAction({event:e,
view:a.view})})])};b.prototype.destroy=function(){this._cancelFetchingFeatures();this._handles.destroy();this._handles=null;this._pendingPromises.clear();this.view=null};Object.defineProperty(b.prototype,"allActions",{get:function(){var a=this._get("allActions")||new n;a.removeAll();var e=this.selectedFeature&&("function"===typeof this.selectedFeature.getEffectivePopupTemplate&&this.selectedFeature.getEffectivePopupTemplate(this.defaultPopupTemplateEnabled)||this.selectedFeature.popupTemplate),b=
e&&e.actions;(e=e&&e.overwriteActions?b:this.actions.concat(b))&&e.filter(Boolean).forEach(function(e){return a.add(e)});return a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"featureCount",{get:function(){return this.features.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"features",{get:function(){return this._get("features")||[]},set:function(a){a=a||[];this._set("features",a);var e=this.pendingPromisesCount,b=this.selectedFeatureIndex,g=this.promiseCount&&
a.length;g&&e&&-1===b?this.selectedFeatureIndex=0:g&&-1!==b||(this.selectedFeatureIndex=a.length?0:-1)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"location",{get:function(){return this._get("location")||null},set:function(a){var e=this.get("location"),b=this.get("view.spatialReference.isWebMercator");a&&a.get("spatialReference.isWGS84")&&b&&(a=B.geographicToWebMercator(a));this._set("location",a);a!==e&&this._centerAtLocation()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"pendingPromisesCount",{get:function(){return this._pendingPromises.size},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"waitingForResult",{get:function(){return 0<this.pendingPromisesCount&&0===this.featureCount},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"promiseCount",{get:function(){return this.promises.length},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"promises",{get:function(){return this._get("promises")||[]},set:function(a){var e=
this,b=this._get("promises");b&&b.forEach(function(a){a&&"function"===typeof a.cancel&&a.cancel()});this._pendingPromises.clear();this.features=[];Array.isArray(a)&&a.length?(this._set("promises",a),a=a.slice(0),a.forEach(function(a){e._pendingPromises.add(a);a.then(function(b){e._updatePendingPromises(a);e._updateFeatures(b)},function(){return e._updatePendingPromises(a)})})):this._set("promises",[]);this.notifyChange("pendingPromisesCount")},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"selectedFeature",{get:function(){var a=this.location,b=this.selectedFeatureIndex;if(-1===b)return null;b=this.features[b];if(!b)return null;!this.updateLocationEnabled&&a||!b.geometry||(this.location=this._getPointFromGeometry(b.geometry));return b},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"selectedFeatureIndex",{get:function(){var a=this._get("selectedFeatureIndex");return"number"===typeof a?a:-1},set:function(a){var b=this.featureCount;a=isNaN(a)||-1>a||!b?-1:(a+b)%b;this._set("selectedFeatureIndex",
a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){return this.get("view.ready")?"ready":"disabled"},enumerable:!0,configurable:!0});b.prototype.centerAtLocation=function(){var a=this.view,b=this._getSelectedTarget();return b?this.callGoTo({target:{target:b,scale:a.scale}}):(a=new l("center-at-location:invalid-target-or-view","Cannot center at a location without a target and view.",{target:b,view:a}),p.error(a),m.reject(a))};b.prototype.clear=function(){this.set({promises:[],
features:[],content:null,title:null,location:null})};b.prototype.open=function(a){this.set(v({visible:!1},{updateLocationEnabled:!1,promises:[]},a));this._setVisibleWhenContentExists()};b.prototype.triggerAction=function(a){(a=this.allActions.getItemAt(a))&&this.emit("trigger-action",{action:a})};b.prototype.next=function(){this.selectedFeatureIndex+=1;return this};b.prototype.previous=function(){--this.selectedFeatureIndex;return this};b.prototype.zoomToLocation=function(){var a=this,b=this.location,
c=this.selectedFeature,g=this.view,d=this.zoomFactor,h=this._getSelectedTarget();if(!h)return b=new l("zoom-to:invalid-target-or-view","Cannot zoom to location without a target and view.",{target:h,view:g}),p.error(b),m.reject(b);var g=g.scale/d,q=this.get("selectedFeature.geometry")||b,t=q&&"point"===q.type&&this._isScreenSize(c);f.zoomToFeature.active=!0;f.zoomToFeature.disabled=!0;return this._zoomToLocation=b=this.callGoTo({target:{target:h,scale:t?g:void 0}}).then(function(){t&&(a.location=q);
f.zoomToFeature.active=!1;f.zoomToFeature.disabled=!1;a._zoomToLocation=null}).catch(function(){f.zoomToFeature.active=!1;f.zoomToFeature.disabled=!1;a._zoomToLocation=null})};b.prototype._getSelectedTarget=function(){var a=this.selectedFeature,b=this.location,c=this.view;if(!c)return null;var c="3d"===c.type,d=this.get("selectedFeature.geometry");return c?a||b:d||b};b.prototype._fetchFeatures=function(a){var b=this.view;return b&&a?b.fetchPopupFeatures(a,{defaultPopupTemplateEnabled:this.defaultPopupTemplateEnabled}):
(a=new l("fetch-features:invalid-screenPoint-or-view","Cannot fetch features without a screenPoint and view.",{screenPoint:a,view:b}),p.error(a),m.reject(a))};b.prototype._autoOpenEnabledChange=function(){var a=this,b=this._handles,c=this.autoOpenEnabled;b.remove("auto-fetch-features");c&&(c=k.on(this,"view","click",function(b){a.view.toolViewManager.handlesClickEvent(b)||"mouse"===b.pointerType&&0!==b.button||a._fetchFeaturesAndOpen(b)}),b.add(c,"auto-fetch-features"))};b.prototype._cancelFetchingFeatures=
function(){var a=this._fetchingFeatures;a&&a.cancel();this._fetchingFeatures=null};b.prototype._fetchFeaturesAndOpen=function(a){var b=this,c=a.screenPoint,d=a.mapPoint,f=this.view;this._cancelFetchingFeatures();this._fetchingFeatures=this._fetchFeatures(c).then(function(a){var c=a.promises,e=a.location;b._fetchingFeatures=null;f.popup.open({location:e||d,promises:c});return a})};b.prototype._updatePendingPromises=function(a){a&&this._pendingPromises.has(a)&&(this._pendingPromises.delete(a),this.notifyChange("pendingPromisesCount"))};
b.prototype._setVisibleWhenContentExists=function(){var a=this,b=this._handles,c=this.promiseCount;b.remove("pendingVisible");c?(c=k.init(this,"pendingPromisesCount",function(c){a.featureCount&&(a.set("visible",!0),b.remove("pendingVisible"));c||b.remove("pendingVisible")}),b.add(c,"pendingVisible")):this.set("visible",!0)};b.prototype._autoClose=function(){this.autoCloseEnabled&&(this.visible=!1)};b.prototype._isScreenSize=function(a){var b=this.view;if("3d"!==b.type||!a||"esri.Graphic"!==a.declaredClass)return!0;
if((b=b.getViewForGraphic(a))&&"whenGraphicBounds"in b){var c=!1;b.whenGraphicBounds(a,{useViewElevation:!0}).then(function(a){c=!a||!a.boundingBox||a.boundingBox[0]===a.boundingBox[3]&&a.boundingBox[1]===a.boundingBox[4]&&a.boundingBox[2]===a.boundingBox[5]});return c}return!0};b.prototype._getPointFromGeometry=function(a){return a?"point"===a.type?a:"extent"===a.type?a.center:"polygon"===a.type?a.centroid:"multipoint"===a.type||"polyline"===a.type?a.extent.center:null:null};b.prototype._isLocationOffScreen=
function(a){return a?(a=this.view.toScreen(a))?!(0<=a.x&&a.x<=this.view.width&&0<=a.y&&a.y<=this.view.height):!1:!1};b.prototype._centerAtLocation=function(){var a=this.location;this.updateLocationEnabled&&a&&this._isLocationOffScreen(a)&&this.centerAtLocation()};b.prototype._highlightFeature=function(){var a=this;this._handles.remove("highlight");var b=this.selectedFeature,c=this.highlightEnabled,d=this.view,f=this.visible;if(b&&d&&c&&f){var h=b.layer;h&&d.when().then(function(){y.typeCast(d)().whenLayerView(h).then(function(c){if(c&&
F.hasHighlight(c)){var d=h.objectIdField,e=b.attributes;c=c.highlight(e&&e[d]||b);a._handles.add(c,"highlight")}})})}};b.prototype._updateFeatures=function(a){var b=this.features;a&&a.length&&(b.length?(a=a.filter(function(a){return-1===b.indexOf(a)}),this.features=b.concat(a)):this.features=a)};d([c.property({type:n})],b.prototype,"actions",void 0);d([c.property({dependsOn:["actions.length","selectedFeature.sourceLayer.popupTemplate.actions.length","selectedFeature.sourceLayer.popupTemplate.overwriteActions",
"selectedFeature.popupTemplate.actions.length","selectedFeature.popupTemplate.overwriteActions"],readOnly:!0})],b.prototype,"allActions",null);d([c.property({type:Boolean})],b.prototype,"defaultPopupTemplateEnabled",void 0);d([c.property()],b.prototype,"autoCloseEnabled",void 0);d([c.property()],b.prototype,"autoOpenEnabled",void 0);d([c.property()],b.prototype,"content",void 0);d([c.property({readOnly:!0,dependsOn:["features"]})],b.prototype,"featureCount",null);d([c.property()],b.prototype,"features",
null);d([c.property()],b.prototype,"highlightEnabled",void 0);d([c.property({type:w.Point})],b.prototype,"location",null);d([c.property({readOnly:!0,dependsOn:["promises"]})],b.prototype,"pendingPromisesCount",null);d([c.property({readOnly:!0,dependsOn:["featureCount","pendingPromisesCount"]})],b.prototype,"waitingForResult",null);d([c.property({readOnly:!0,dependsOn:["promises"]})],b.prototype,"promiseCount",null);d([c.property()],b.prototype,"promises",null);d([c.property({value:null,readOnly:!0,
dependsOn:["features","selectedFeatureIndex","updateLocationEnabled"]})],b.prototype,"selectedFeature",null);d([c.property({value:-1})],b.prototype,"selectedFeatureIndex",null);d([c.property({readOnly:!0,dependsOn:["view.ready"]})],b.prototype,"state",null);d([c.property()],b.prototype,"title",void 0);d([c.property()],b.prototype,"updateLocationEnabled",void 0);d([c.property()],b.prototype,"view",void 0);d([c.property()],b.prototype,"visible",void 0);d([c.property()],b.prototype,"zoomFactor",void 0);
d([c.property()],b.prototype,"centerAtLocation",null);d([c.property()],b.prototype,"clear",null);d([c.property()],b.prototype,"triggerAction",null);d([c.property()],b.prototype,"next",null);d([c.property()],b.prototype,"previous",null);d([c.property()],b.prototype,"zoomToLocation",null);return b=d([c.subclass("esri.widgets.Popup.PopupViewModel")],b)}(c.declared(G,H))});