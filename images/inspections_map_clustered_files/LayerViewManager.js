// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/Error ../core/Handles ../core/promiseUtils ../core/scheduling ../core/watchUtils ../core/accessorSupport/decorators ./LayerViewFactory".split(" "),function(v,w,m,h,n,k,p,q,r,t,e,u){return function(l){function c(b){var a=l.call(this)||this;a._promisesMap=new Map;a._layerViewsMap=new Map;a._handles=new p;a.factory=new u;a.ready=!1;a.layersToLayerViews=function(){var a=new Map;a.set("view.map.basemap.baseLayers",
"view.basemapView.baseLayerViews");a.set("view.map.ground.layers","view.groundView.layerViews");a.set("view.map.layers","view.layerViews");a.set("view.map.basemap.referenceLayers","view.basemapView.referenceLayerViews");return a}();a._doWork=a._doWork.bind(a);a.refresh=a.refresh.bind(a);a._handles.add(t.init(a,"view.ready",function(b){return a.ready=b}));a._handles.add(a.watch(["view.map.basemap","view.map.ground","view.map.layers","ready"],a.refresh),"watcher");return a}m(c,l);c.prototype.destroy=
function(){this._handles&&(this.clear(),this.view=null,this.factory.destroy(),this.factory=null,this._handles.destroy(),this._map=this._layerViewsMap=this._promisesMap=this._handles=null)};c.prototype.clear=function(){var b=this;this.destroyed||(this._layerViewsMap.forEach(function(a,d){return b._disposeLayerView(a,d)}),this._promisesMap.forEach(function(a){return a.cancel()}),this._layerViewsMap.clear(),this._promisesMap.clear(),this._refreshCollections())};c.prototype.refresh=function(){var b=this._handles;
b.remove("refresh");b.add(r.schedule(this._doWork),"refresh")};c.prototype.whenLayerView=function(b){this.refresh();this._doWork();return this._promisesMap.has(b)?this._promisesMap.get(b):q.reject(new k("view:no-layerview-for-layer","No layerview has been found for the layer",{layer:b}))};c.prototype._doWork=function(){var b=this,a=this._handles,d=this.get("view.map");this._map!==d&&(this.clear(),this._map=d);if(a.has("refresh")){a.remove("refresh");a.remove("collection-change");this.factory.paused=
!this.ready;var c=this._map&&this._map.allLayers;c&&(c.forEach(this._createLayerView,this),this._refreshCollections(),this._promisesMap.forEach(function(a,d){c.includes(d)||b._disposeLayerView(b._layerViewsMap.get(d),d)}),a.add(c.on("change",this.refresh),"collection-change"))}};c.prototype._refreshCollections=function(){var b=this;this.layersToLayerViews.forEach(function(a,c){b._populateLayerViewsOwners(b.get(c),b.get(a),b.view)})};c.prototype._populateLayerViewsOwners=function(b,a,c){var d=this;
if(b&&a){var f=0;b.forEach(function(b){var g=d._layerViewsMap.get(b);g&&(g.layer=b,g.parent=c,a.getItemAt(f)!==g&&a.splice(f,0,g),b.layers&&d._populateLayerViewsOwners(b.layers,g.layerViews,g),f+=1)});f<a.length&&a.splice(f,a.length)}else a&&a.removeAll()};c.prototype._createLayerView=function(b){var a=this,c=this.view,e=this.factory,f=this._layerViewsMap,h=this._promisesMap;f.has(b)?b.load():h.has(b)||(e=e.create(c,b).then(function(d){if(!a._map||!a._map.allLayers.some(function(a){return b===a}))throw new k("view:no-layerview-for-layer",
"The layer has been removed from the map",{layer:b});f.set(b,d);a._refreshCollections();b.emit("layerview-create",{view:c,layerView:d});c.emit("layerview-create",{layer:b,layerView:d});return d.when()}),h.set(b,e),e.then(this.refresh,this.refresh))};c.prototype._disposeLayerView=function(b,a){if(this._promisesMap.has(a)&&(this._promisesMap.get(a).cancel(),this._promisesMap.delete(a),b)){a=b.layer;var c=b.view;this.factory.dispose(b);b.layer=b.parent=b.view=null;this._layerViewsMap.delete(a);a.emit("layerview-destroy",
{view:c,layerView:b});c.emit("layerview-destroy",{layer:a,layerView:b})}};h([e.property()],c.prototype,"ready",void 0);h([e.property()],c.prototype,"view",void 0);return c=h([e.subclass("esri.views.LayerViewManager")],c)}(e.declared(n))});