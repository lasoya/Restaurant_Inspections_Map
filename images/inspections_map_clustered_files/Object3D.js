// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/mathUtils ./ComponentUtils ./GeometryRecord ./HighlightUtils ./IdGen ./ModelContentType ./Util".split(" "),function(t,B,q,m,l,n,u,f,r,v,x,y,z){var p=z.assert,A=m.mat4f64.create();t=function(){function b(a){void 0===a&&(a={});this._objectTransformation=m.mat4f64.create();this._bvObjectSpace=new w;this._bvWorldSpace=
new w;this._bvDirty=!0;this._hasVolatileTransformation=!1;this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!0;this.id=b._idGen.gen(a.idHint);this.name=a.name;this.castShadow=null!=a.castShadow?a.castShadow:!0;this.metadata=a.metadata;this.objectTransformation=m.mat4f64.create();this._initializeGeometryRecords(a.geometries,a.materials,a.transformations,a.origins)}Object.defineProperty(b.prototype,"objectTransformation",{get:function(){return this._objectTransformation},set:function(a){q.mat4.copy(this._objectTransformation,
a);this._invalidateBoundingVolume();this._notifyDirty("objTransformation")},enumerable:!0,configurable:!0});b.prototype._initializeGeometryRecords=function(a,c,d,b){if(Array.isArray(a)){p(c.length===a.length,"Object3D: materials don't match geometries");p(d.length===a.length,"Object3D: transformations don't match geometries");this.geometryRecords=Array(a.length);this.geometries=a.slice();for(var e=0;e<a.length;e++)this.geometryRecords[e]=new r(a[e],c[e],m.mat4f64.clone(d[e]),{},b&&b[e]);this._hasVolatileTransformation=
!1}else this.geometryRecords=[],this.geometries=[]};Object.defineProperty(b.prototype,"parentLayer",{get:function(){return this._parentLayer},set:function(a){p(null==this._parentLayer||null==a,"Object3D can only be added to a single Layer");this._parentLayer=a},enumerable:!0,configurable:!0});b.prototype.getNumGeometryRecords=function(){return this.geometryRecords.length};b.prototype.getFirstGeometryIndex=function(a){a=this.geometries.indexOf(a);p(-1<a,"Object3D.getFirstGeometryIndex: geometry not found");
return a};b.prototype.findGeometryRecords=function(a){for(var c=[],d=0;d<this.geometries.length;d++)this.geometries[d]===a&&c.push(this.geometryRecords[d]);return c};b.prototype.getGeometryRecord=function(a){p(0<=a&&a<this.geometryRecords.length,"Object3d.getGeometryDataByIndex: index out of range");return this.geometryRecords[a]};b.prototype.getGeometryRecords=function(){return this.geometryRecords};b.prototype.addGeometry=function(a,c,d,b,k,h){void 0===d&&(d=A);this.geometries.push(a);a=new r(a,
c,m.mat4f64.clone(d),b||{},k,h);this.geometryRecords.push(a);this._hasVolatileTransformation=this.geometryRecords.some(function(a){return!!a.shaderTransformation});this._notifyDirty("objGeometryAdded",a);this._invalidateBoundingVolume();this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!0;return a};b.prototype.hasGeometry=function(a){return-1<this.geometries.indexOf(a)};b.prototype.removeGeometry=function(a){var c=this.geometryRecords.splice(a,1)[0];this._hasVolatileTransformation=this.geometryRecords.some(function(a){return!!a.shaderTransformation});
this.geometries.splice(a,1);this._notifyDirty("objGeometryRemoved",c);this._invalidateBoundingVolume();this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!0;return c};b.prototype.removeAllGeometries=function(){for(;0<this.getNumGeometryRecords();)this.removeGeometry(0)};b.prototype.geometryVertexAttrsUpdated=function(a){this._notifyDirty("vertexAttrsUpdated",this.geometryRecords[a]);this._invalidateBoundingVolume()};b.prototype.areAllComponentsHidden=function(){if(this._allComponentsHiddenDirty){this._allComponentsHiddenDirty=
!1;this._allComponentsHidden=!0;for(var a=0,c=this.geometryRecords;a<c.length;a++){var d=c[a];if(!f.isAllHidden(d.instanceParameters.componentVisibilities,d.geometry.data.componentOffsets)){this._allComponentsHidden=!1;break}}}return this._allComponentsHidden};b.prototype.areAllComponentsVisible=function(){if(this._allComponentsVisibleDirty){this._allComponentsVisibleDirty=!1;this._allComponentsVisible=!0;for(var a=0,c=this.geometryRecords;a<c.length;a++){var d=c[a];if(!f.isAllVisible(d.instanceParameters.componentVisibilities,
d.geometry.data.componentOffsets)){this._allComponentsVisible=!1;break}}}return this._allComponentsVisible};b.prototype.hasComponents=function(){for(var a=!1,c=0;c<this.geometries.length&&!(a=f.hasComponents(this.geometries[c].data.componentOffsets));c++);return a};b.prototype.setComponentVisibility=function(a,c,d){c=f.updateVisibility(a.instanceParameters.componentVisibilities,a.geometry.data.componentOffsets,c,d);a.instanceParameters.componentVisibilities=c;this._notifyDirty("visibilityChanged",
a);this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!0};b.prototype.setHidden=function(a,c){a.instanceParameters.hidden=!!c;this._notifyDirty("visibilityChanged",a)};b.prototype.isHidden=function(a){return!!a.instanceParameters.hidden};b.prototype.getComponentVisibility=function(a,c){return f.getVisibility(a.instanceParameters.componentVisibilities,c)};b.prototype.hideAllComponents=function(){if(this._allComponentsHiddenDirty||!this._allComponentsHidden){for(var a=0,c=this.geometryRecords;a<
c.length;a++){var d=c[a],b=f.hideAllComponents(d.instanceParameters.componentVisibilities);d.instanceParameters.componentVisibilities=b}this._notifyDirty("visibilityChanged");this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!1;this._allComponentsHidden=!0;this._allComponentsVisible=!1}};b.prototype.unhideAllComponents=function(){if(this._allComponentsVisibleDirty||!this._allComponentsVisible){for(var a=0,c=this.geometryRecords;a<c.length;a++){var b=c[a],e=f.unhideAllComponents(b.instanceParameters.componentVisibilities);
b.instanceParameters.componentVisibilities=e}this._notifyDirty("visibilityChanged");this._allComponentsHidden=this._allComponentsVisibleDirty=this._allComponentsHiddenDirty=!1;this._allComponentsVisible=!0}};b.prototype._setComponentHighlight=function(a,c,b,e){c=f.addHighlight(a.instanceParameters.componentHighlights,c,b,e);a.instanceParameters.componentHighlights=c};b.prototype.setComponentHighlight=function(a,c,b){var d=v.generateHighlightId();this._setComponentHighlight(a,c,b,d);this._notifyDirty("componentHighlightChanged");
return d};b.prototype.highlightAllComponents=function(a){for(var c=v.generateHighlightId(),b=0,e=this.geometryRecords;b<e.length;b++)this._setComponentHighlight(e[b],null,a,c);this._notifyDirty("componentHighlightChanged");return c};b.prototype.removeHighlights=function(a){for(var c=0,b=this.geometryRecords;c<b.length;c++){var e=b[c].instanceParameters,k=f.removeHighlight(e.componentHighlights,a);e.componentHighlights=k}this._notifyDirty("componentHighlightChanged")};b.prototype.getComponentFromTriangleNr=
function(a,c){p(0<=a&&a<this.geometryRecords.length,"Object3d.getComponentFromTriangleNr: index out of range");return f.componentFind(this.geometryRecords[a].geometry.data.componentOffsets,3*c)};b.prototype.setGeometryTransformation=function(a,c){p(0<=a&&a<this.geometryRecords.length,"Object3d.setGeometryTransformation: index out of range");var b=this.geometryRecords[a];c=new r(b.geometry,b.material,m.mat4f64.clone(c),b.instanceParameters);this.geometryRecords[a]=c;this._notifyDirty("objGeometryReplaced",
[b,c]);this._invalidateBoundingVolume()};b.prototype.getCombinedStaticTransformation=function(a,c){c=c||m.mat4f64.create();q.mat4.multiply(c,this.objectTransformation,a.getStaticTransformation());return c};b.prototype.getCombinedShaderTransformation=function(a,c){c=c||m.mat4f64.create();q.mat4.multiply(c,this.objectTransformation,a.getShaderTransformation());return c};b.prototype.hasVolativeTransformation=function(){return this._hasVolatileTransformation};b.prototype.getCastShadow=function(){return this.castShadow};
b.prototype.setCastShadow=function(a){this.castShadow=a};b.prototype.getMetadata=function(){return this.metadata};b.prototype.getName=function(){return this.name};b.prototype.getBBMin=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMin:this._bvWorldSpace.bbMin};b.prototype.getBBMax=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bbMax:this._bvWorldSpace.bbMax};b.prototype.getCenter=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.center:
this._bvWorldSpace.center};b.prototype.getBSRadius=function(a){this._validateBoundingVolume();return a?this._bvObjectSpace.bsRadius:this._bvWorldSpace.bsRadius};b.prototype._validateBoundingVolume=function(){if(this._bvDirty||this._hasVolatileTransformation){this._bvObjectSpace.init();this._bvWorldSpace.init();for(var a=0;a<this.geometryRecords.length;++a){var c=this.geometries[a],b=this.geometryRecords[a],c=c.boundingInfo;this._calculateTransformedBoundingVolume(c,this._bvObjectSpace,b.getShaderTransformation());
this._calculateTransformedBoundingVolume(c,this._bvWorldSpace,this.getCombinedShaderTransformation(b))}l.vec3.lerp(this._bvObjectSpace.center,this._bvObjectSpace.bbMin,this._bvObjectSpace.bbMax,.5);l.vec3.lerp(this._bvWorldSpace.center,this._bvWorldSpace.bbMin,this._bvWorldSpace.bbMax,.5);for(var b=n.vec3f64.create(),e=n.vec3f64.create(),k=u.maxScale(this.objectTransformation),a=0;a<this.geometryRecords.length;++a){var c=this.geometries[a],h=this.geometryRecords[a].getShaderTransformation(),g=u.maxScale(h),
c=c.boundingInfo;l.vec3.transformMat4(b,c.getCenter(),h);h=l.vec3.distance(b,this._bvObjectSpace.center);c=c.getBSRadius()*g;this._bvObjectSpace.bsRadius=Math.max(this._bvObjectSpace.bsRadius,h+c);l.vec3.transformMat4(e,b,this.objectTransformation);g=l.vec3.distance(e,this._bvWorldSpace.center);this._bvWorldSpace.bsRadius=Math.max(this._bvWorldSpace.bsRadius,g+c*k)}this._bvDirty=!1}};b.prototype._calculateTransformedBoundingVolume=function(a,c,b){var d=a.getBBMin();a=a.getBBMax();var k=n.vec3f64.clone(d),
h=n.vec3f64.clone(a);l.vec3.transformMat4(k,k,b);l.vec3.transformMat4(h,h,b);for(var g=0;3>g;++g)c.bbMin[g]=Math.min(c.bbMin[g],k[g],h[g]),c.bbMax[g]=Math.max(c.bbMax[g],k[g],h[g]);for(g=0;3>g;++g){l.vec3.copy(k,d);l.vec3.copy(h,a);k[g]=a[g];h[g]=d[g];l.vec3.transformMat4(k,k,b);l.vec3.transformMat4(h,h,b);for(var f=0;3>f;++f)c.bbMin[f]=Math.min(c.bbMin[f],k[f],h[f]),c.bbMax[f]=Math.max(c.bbMax[f],k[f],h[f])}};b.prototype._invalidateBoundingVolume=function(){this._bvDirty=!0;this._parentLayer&&this._parentLayer.notifyObjectBBChanged(this,
{center:this._bvWorldSpace.center,radius:this._bvWorldSpace.bsRadius})};b.prototype._notifyDirty=function(a,b,d,e){this._parentLayer&&(d=d||y.OBJECT,this._parentLayer.notifyDirty(a,b,d,e||this))};b._idGen=new x;return b}();var w=function(){function b(){this.bbMin=n.vec3f64.create();this.bbMax=n.vec3f64.create();this.center=n.vec3f64.create();this.bsRadius=0}b.prototype.init=function(){l.vec3.set(this.bbMin,Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE);l.vec3.set(this.bbMax,-Number.MAX_VALUE,
-Number.MAX_VALUE,-Number.MAX_VALUE);l.vec3.set(this.center,0,0,0);this.bsRadius=0};b.prototype.getCenter=function(){return this.center};b.prototype.getBSRadius=function(){return this.bsRadius};return b}();return t});