// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/assignHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/arrayUtils ../../../../../core/promiseUtils ../../../../../core/requireUtils ../../../../../core/typedArrayUtil ../../../../../core/workers ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../../../core/libs/gl-matrix-2/vec4f64 ../../../support/mathUtils ../../../support/buffer/BufferView ../../../support/buffer/utils ../GridLocalOriginFactory ../localOriginHelper ../LocalOriginManager ../PreinterleavedGeometryData ../TextureBackedBuffer/BufferManager ./bufferLayouts ./edgeBufferWriters ./EdgeProcessingWorker ./EdgeRenderer ./strokes ./util ../../../../webgl/BufferObject ../../../../webgl/renderState ../../../../webgl/VertexArrayObject module".split(" "),
function(U,K,L,n,B,V,M,W,N,X,I,H,O,P,Q,Y,Z,aa,ba,ca,R,da,A,S,ea,v,fa,w,J,C,T,ga){Object.defineProperty(K,"__esModule",{value:!0});var ja=function(){function d(a,c,b){this.rctx=a;this.programRepository=c;this.callbacks=b;this.profilingCallback=null;this.perObjectData=new Map;this.renderers=new Map;this.localOrigins=new ca.LocalOriginManager(new aa);this.gpuMemoryUsage=this.numberOfRenderedEdges=0;this.worker=new ea;this.workerThread=null;this.destroyed=!1;this.tmpModelPosition=O.vec3f64.create();this.tmpCameraPosition=
O.vec3f64.create();this.componentColorManager=new da.BufferManager(this.rctx,2)}d.prototype.initialize=function(){var a=this;X.open(W.getAbsMid("./EdgeProcessingWorker",U,ga)).then(function(c){a.destroyed?c.close():a.workerThread=c});for(var c=A.VertexLayout.createBuffer(4),b=0;4>b;b++)c.sideness.set(b,0,0===b||3===b?0:1),c.sideness.set(b,1,0===b||1===b?0:1);this.verticesBufferObject=J.createVertex(this.rctx,35044,c.buffer);this.pipelineState=(c=this.rctx.capabilities.blendMinMax)?C.makePipelineState({blending:C.separateBlendingParams(1,
1,0,1,32774,c.MAX),depthTest:{func:515},colorWrite:C.defaultColorWriteParams}):C.makePipelineState({depthTest:{func:515},depthWrite:C.defaultDepthWriteParams,colorWrite:C.defaultColorWriteParams})};d.prototype.destroy=function(){this.destroyed||(this.workerThread&&(this.workerThread.close(),this.workerThread=null),this.verticesBufferObject&&(this.verticesBufferObject.dispose(),this.verticesBufferObject=null),this.destroyed=!0)};d.prototype.getUsedMemory=function(){return this.gpuMemoryUsage};Object.defineProperty(d.prototype,
"numberOfRenderedPrimitives",{get:function(){return this.numberOfRenderedEdges},enumerable:!0,configurable:!0});d.prototype.shouldRender=function(){return 0<this.renderers.size};d.prototype.addObject=function(a,c,b,e,f){return n(this,void 0,void 0,function(){var l,m,d,g,t,h,p;return B(this,function(k){switch(k.label){case 0:if(this.hasObject(a))return[2];l=[];d={loaded:M.create(function(a){return m=a}),renderables:[]};this.perObjectData.set(a,d);if(f&&f.mergeGeometries&&1<a.geometries.length&&this.canMergeGeometries(a))l.push(this.addObjectMergedGeometries(a,
d,c,b));else for(g=0;g<a.geometries.length;g++)t=a.geometries[g],h=a.geometryRecords[g],p=h.material,p.supportsEdges&&(t.data instanceof R?l.push(this.addGeometryPreinterleaved(a,d,t,t.data,h,c,b,e)):l.push(this.addGeometryNonPreinterleaved(a,d,t,t.data,h,c[0],b,e)));return[4,M.all(l)];case 1:return k.sent(),this.callbacks.setNeedsRender(),m(),[2]}})})};d.prototype.hasObject=function(a){return this.perObjectData.has(a)};d.prototype.updateAllComponentOpacities=function(a,c){return n(this,void 0,void 0,
function(){var b,e;return B(this,function(f){switch(f.label){case 0:return[4,this.getObjectEntry(a)];case 1:return b=f.sent(),e=c instanceof Array?function(a){return c[a]}:function(a){return c},b.renderables.forEach(function(a){for(var c=a.components.meta.length,b=0;b<c;b++){var f=e(b),d=a.components.meta[b],h=d.index;d.material.opacity=f;a.components.buffer.textureBuffer.setDataElement(h,1,3,255*f)}a.allTransparent=w.determineAllTransparent(a.components.meta)}),this.callbacks.setNeedsRender(),[2]}})})};
d.prototype.updateAllComponentMaterials=function(a,c,b,e){void 0===e&&(e=!0);return n(this,void 0,void 0,function(){var f,d,m,D,g=this;return B(this,function(l){switch(l.label){case 0:return[4,this.getObjectEntry(a)];case 1:return f=l.sent(),d=b.slicePlaneEnabled||!1,m=w.determineRendererType(c),D=v.EdgeRenderer.getKey(m,d),f.renderables.forEach(function(a){if(D!==a.rendererKey){var b=g.renderers.get(a.rendererKey),f=g.acquireRenderer(m,d);b.removeRenderable(a);b.refCount.decrement();a.rendererKey=
D;f.addRenderable(a)}for(b=0;b<c.length;b++)a.components.meta[b].material=c[b];e&&g.updateComponentBuffer(a.components);a.allTransparent=w.determineAllTransparent(a.components.meta)}),this.callbacks.setNeedsRender(),[2]}})})};d.prototype.updateObjectVisibility=function(a,c){return n(this,void 0,void 0,function(){var b;return B(this,function(e){switch(e.label){case 0:return[4,this.getObjectEntry(a)];case 1:return b=e.sent(),b.renderables.forEach(function(a){a.visible=c}),this.callbacks.setNeedsRender(),
[2]}})})};d.prototype.removeObject=function(a){var c=this,b=this.perObjectData.get(a);b&&(this.perObjectData.delete(a),b.loaded.then(function(){b.renderables.forEach(function(a){c.removeRenderable(a)});c.callbacks.setNeedsRender()}))};d.prototype.getObjectEntry=function(a){return n(this,void 0,void 0,function(){var c;return B(this,function(b){switch(b.label){case 0:c=this.perObjectData.get(a);if(!c)throw"no object";return[4,c.loaded];case 1:return b.sent(),[2,c]}})})};d.prototype.removeAll=function(){var a=
this;this.perObjectData.forEach(function(c,b){a.removeObject(b)})};d.prototype.createSolidEdgeMaterial=function(a){return L({},ha,a,{type:"solid"})};d.prototype.createSketchEdgeMaterial=function(a){return L({},ia,a,{type:"sketch"})};d.prototype.render=function(a){var c=this;this.localOrigins.updateViewMatrices(a.view);this.renderers.forEach(function(a){0===a.refCount.value&&(c.renderers.delete(a.key),a.dispose())});this.componentColorManager.garbageCollect();this.componentColorManager.updateTextures();
var b=a.view,e=0,f=0;this.renderers.forEach(function(a){a.forEachRenderable(function(a){e+=a.statistics.averageEdgeLength;f++})});var d={distanceFalloffFactor:e/f*40,minimumEdgeLength:w.estimateLengthAtDistance(a.viewport[3],a.fovY,1,3.5*a.pixelRatio)};this.rctx.setPipelineState(this.pipelineState);this.updateObjectCameraDistances(a);this.numberOfRenderedEdges=0;this.renderers.forEach(function(b){c.renderRegularEdges(b,a,d);c.renderSilhouetteEdges(b,a,d)});a.view=b};d.prototype.computeModelTransformWithLocalOrigin=
function(a,c,b){a.getCombinedStaticTransformation(c,b);c.origin?this.localOrigins.register(c.origin):(a=H.vec3.set(this.tmpModelPosition,b[12],b[13],b[14]),c.origin=this.localOrigins.aquire(a));ba.applyToModelMatrix(c.origin.vec3,b);return b};d.prototype.updateComponentBuffer=function(a){var c=a.meta;a=a.buffer;for(var b=0;b<c.length;b++){var e=c[b].material,f=c[b].index,d=Q.clamp(Math.round(e.size*v.LINE_WIDTH_FRACTION_FACTOR),0,255),m=Q.clamp(e.extensionLength,-v.EXTENSION_LENGTH_OFFSET,255-v.EXTENSION_LENGTH_OFFSET)+
v.EXTENSION_LENGTH_OFFSET,D="solid"===e.type?0:1,g=255*e.opacity,e=e.color;a.textureBuffer.setData(f,0,255*e[0],255*e[1],255*e[2],255*e[3]);a.textureBuffer.setData(f,1,d,m,D,g)}};d.prototype.createComponentBuffers=function(a){for(var c=[],b=this.componentColorManager.getBuffer(a.length),e=0;e<a.length;e++){var f=a[e],d=b.aquireIndex();c.push({index:d,material:f})}a={meta:c,buffer:b};this.updateComponentBuffer(a);return a};d.prototype.extractEdges=function(a,c,b,e,f){return this.worker.process({data:c,
originalIndices:f,writerSettings:a,skipDeduplicate:b},e?null:this.workerThread)};d.prototype.createEdgeResources=function(a){var c={};if(0<a.regular.lodInfo.lengths.length){var b=new T(this.rctx,A.EdgeShaderAttributeLocations,{vertices:A.glVertexLayout,instances:S.RegularEdgeBufferWriter.glLayout},{vertices:this.verticesBufferObject,instances:J.createVertex(this.rctx,35044,a.regular.instancesData.buffer)});c.regular={vao:b,lod:a.regular.lodInfo}}0<a.silhouette.lodInfo.lengths.length&&(b=new T(this.rctx,
A.EdgeShaderAttributeLocations,{vertices:A.glVertexLayout,instances:S.SilhouetteEdgeBufferWriter.glLayout},{vertices:this.verticesBufferObject,instances:J.createVertex(this.rctx,35044,a.silhouette.instancesData.buffer)}),c.silhouette={vao:b,lod:a.silhouette.lodInfo});return c};d.prototype.disposeEdgeResources=function(a){a.regular&&(a.regular.vao.vertexBuffers.instances.dispose(),a.regular.vao.dispose(!1),a.regular.vao=null);a.silhouette&&(a.silhouette.vao.vertexBuffers.instances.dispose(),a.silhouette.vao.dispose(!1),
a.silhouette.vao=null)};d.prototype.addGeometryNonPreinterleaved=function(a,c,b,e,f,d,m,D){return n(this,void 0,void 0,function(){var b,l,h,p;return B(this,function(g){b=e.getAttribute("position");l=this.computeModelTransformWithLocalOrigin(a,f,I.mat4f64.create());h=f.origin;p={position:b,indices:e.getIndices("position"),modelTransform:l,origin:h};return[2,this.addNonPreinterleaved(a,c,p,d,m,D)]})})};d.prototype.addNonPreinterleaved=function(a,c,b,e,f,d){void 0===d&&(d=!1);return n(this,void 0,void 0,
function(){var a,l,g,t,h,p,k,q,u,E,F,r,x,y,z;return B(this,function(m){switch(m.label){case 0:a=this.acquireRenderer(e.type,f.slicePlaneEnabled||!1);l=b.modelTransform;g=b.origin;t=b.indices;h=b.position;p=h.data.length/h.strideIdx;k=A.EdgeInputBufferLayout.createBuffer(p);for(q=0;q<p;q++)k.position.set(q,0,h.data[h.offsetIdx+q*h.strideIdx+0]),k.position.set(q,1,h.data[h.offsetIdx+q*h.strideIdx+1]),k.position.set(q,2,h.data[h.offsetIdx+q*h.strideIdx+2]);u=this.createComponentBuffers([e]);w.fillComponenBufferIndices(u.meta,
[0,k.componentIndex.count],k.componentIndex);return[4,this.extractEdges(a.writerSettings,k,!1,d,t)];case 1:return E=m.sent(),F=this.createEdgeResources(E),r=F.regular,x=F.silhouette,y=(r?r.vao.size:0)+(x?x.vao.size:0),z={regular:r,silhouette:x,transform:{modelMatrix:l,origin:g},statistics:{gpuMemoryUsage:y,averageEdgeLength:E.averageEdgeLength},components:u,visible:!0,allTransparent:w.determineAllTransparent(u.meta),distanceToCamera:0,rendererKey:a.key},c.renderables.push(z),a.addRenderable(z),this.gpuMemoryUsage+=
y,[2]}})})};d.prototype.addGeometryPreinterleaved=function(a,c,b,e,f,d,m,D){return n(this,void 0,void 0,function(){var b,l,h,p,k,q,u,E,F,r,x,y,z,n,v,G;return B(this,function(g){switch(g.label){case 0:b=e.getAttribute("position");if(!b||!N.isFloat32Array(b.data))return console.warn("Geometry has no float32 `position` attribute, skipping it."),[2];l=w.determineRendererType(d);h=this.acquireRenderer(l,m.slicePlaneEnabled||!1);p=this.computeModelTransformWithLocalOrigin(a,f,I.mat4f64.create());k=f.origin;
q=e.getIndices("position");u=new Y.BufferViewVec3f(b.data.buffer,4*b.offsetIdx,4*b.strideIdx);E=A.EdgeInputBufferLayout.createBuffer(u.count);Z.vec3.copy(E.position,u);F=this.createComponentBuffers(d);w.fillComponenBufferIndices(F.meta,e.componentOffsets,E.componentIndex,q);r=e.hasPositionData;return[4,this.extractEdges(h.writerSettings,E,r,D,q)];case 1:return x=g.sent(),y=this.createEdgeResources(x),z=y.regular,n=y.silhouette,v=(z?z.vao.size:0)+(n?n.vao.size:0),G={regular:z,silhouette:n,transform:{modelMatrix:p,
origin:k},statistics:{gpuMemoryUsage:v,averageEdgeLength:x.averageEdgeLength},components:F,visible:!a.isHidden(f),allTransparent:w.determineAllTransparent(F.meta),distanceToCamera:0,rendererKey:h.key},c.renderables.push(G),h.addRenderable(G),this.gpuMemoryUsage+=v,[2]}})})};d.prototype.canMergeGeometries=function(a){for(var c=null,b=null,e=0;e<a.geometries.length;e++){var d=a.geometryRecords[e];if(d.material.supportsEdges){if(a.geometries[e].data instanceof R)return!1;if(!c)c=d.transformation;else if(!V.equals(c,
d.transformation))return!1;if(!b&&d.origin)b=d;else if(b&&d.origin&&b.origin.id!==d.origin.id)return!1}}return!0};d.prototype.addObjectMergedGeometries=function(a,c,b,d){return n(this,void 0,void 0,function(){var e,l,m,n,g,t,h,p,k,q,u,v,w,r,x,y,z,A,C,G,H;return B(this,function(f){switch(f.label){case 0:e=new Map;l=0;n=m=null;for(g=0;g<a.geometries.length;g++)if(t=a.geometries[g],h=a.geometryRecords[g],p=h.material,p.supportsEdges&&(!n&&h.origin&&(n=h),k=t.data.getIndices("position"),l+=k?k.length:
0,k&&null==m||m===Uint16Array))m=N.isUint16Array(k)?Uint16Array:Uint32Array;q=l?new m(l):null;u=[];for(g=v=0;g<a.geometries.length;g++)if(t=a.geometries[g],w=a.geometryRecords[g],p=w.material,p.supportsEdges){r=t.data.getAttribute("position");k=t.data.getIndices("position");x=e.get(r.data);if(null==x){x=u.length/3;for(y=r.offsetIdx;y<r.data.length;y+=r.strideIdx)u.push(r.data[y+0]),u.push(r.data[y+1]),u.push(r.data[y+2]);e.set(r.data,x)}if(k)for(z=0;z<k.length;z++)q[v++]=x+k[z]}A=n||a.geometryRecords[0];
C=this.computeModelTransformWithLocalOrigin(a,A,I.mat4f64.create());G=A.origin;for(g=0;g<a.geometryRecords.length;g++)a.geometryRecords[g].origin=G;H={position:{data:u,offsetIdx:0,strideIdx:3},indices:q,modelTransform:C,origin:G};return[4,this.addNonPreinterleaved(a,c,H,b[0],d)];case 1:return f.sent(),[2]}})})};d.prototype.acquireRenderer=function(a,c){var b=v.EdgeRenderer.getKey(a,c),d=this.renderers.get(b);this.strokesTexture||(this.strokesTexture=fa.generateStrokesTexture(this.rctx));d||(d=new v.EdgeRenderer(this.rctx,
this.programRepository,{type:a,slicePlaneEnabled:c,strokesTexture:this.strokesTexture}),this.renderers.set(b,d));d.refCount.increment();return d};d.prototype.removeRenderable=function(a){var c=this.renderers.get(a.rendererKey);c.removeRenderable(a);c.refCount.decrement();this.disposeEdgeResources(a);this.localOrigins.release(a.transform.origin);this.gpuMemoryUsage-=a.statistics.gpuMemoryUsage;for(var c=0,b=a.components.meta;c<b.length;c++)a.components.buffer.releaseIndex(b[c].index)};d.prototype.updateObjectCameraDistances=
function(a){var c=this;a=a.viewInvTransp;H.vec3.set(this.tmpCameraPosition,a[3],a[7],a[11]);this.perObjectData.forEach(function(a,d){var b=H.vec3.distance(d.getCenter(),c.tmpCameraPosition);a.renderables.forEach(function(a){return a.distanceToCamera=b})})};d.prototype.renderRegularEdges=function(a,c,b){var d=this;a.bindRegularEdges(c,b);a.forEachRenderable(function(e){if(e.visible&&e.regular&&!e.allTransparent){var f=w.computeEdgeCount(e.regular.lod.lengths,e.distanceToCamera,b);c.view=d.localOrigins.getViewMatrix(e.transform.origin);
a.renderRegularEdges(e,c,f);d.numberOfRenderedEdges+=f}})};d.prototype.renderSilhouetteEdges=function(a,c,b){var d=this;a.bindSilhouetteEdges(c,b);a.forEachRenderable(function(e){if(e.visible&&e.silhouette&&!e.allTransparent){var f=w.computeEdgeCount(e.silhouette.lod.lengths,e.distanceToCamera,b);c.view=d.localOrigins.getViewMatrix(e.transform.origin);a.renderSilhouetteEdges(e,c,f);d.numberOfRenderedEdges+=f}})};return d}();K.EdgeView=ja;var ha={color:P.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,
opacity:1},ia={color:P.vec4f64.fromValues(0,0,0,.2),size:1,extensionLength:0,opacity:1}});