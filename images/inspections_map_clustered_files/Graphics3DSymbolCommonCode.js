// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/coordsUtils ../../../../geometry/support/triangulationUtils ../../../../layers/graphics/dehydratedFeatures ./graphicUtils ../../support/projectionUtils ../../webgl-engine/lib/Object3D".split(" "),function(O,e,G,H,A,I,B,J,v,C,w,K){function x(b,a,c,d,f){var p=a.z||0,e=c.featureExpressionInfoContext;
switch(c.mode){case "on-the-ground":return c=b.getElevation(a,"ground")||0,f&&(f.verticalDistanceToGround=0,f.terrainElevation=c),c;case "relative-to-ground":return b=b.getElevation(a,"ground")||0,c=c.calculateOffsetRenderUnits(d),null==e&&(c+=p),f&&(f.verticalDistanceToGround=c,f.terrainElevation=b),c+b;case "relative-to-scene":return b=b.getElevation(a,"scene")||0,c=c.calculateOffsetRenderUnits(d),f&&(f.verticalDistanceToGround=c,f.terrainElevation=b),c+b;case "absolute-height":return c=c.calculateOffsetRenderUnits(d),
null==e&&(c+=p),f&&(b=b.getElevation(a,"ground")||0,f.verticalDistanceToGround=c-b,f.terrainElevation=b),c;default:G.neverReached(c.mode)}return 0}function y(b,a){b=J.pathsToTriangulationInfo(b,a);return{vertexData:b.position,polygons:b.polygons,outlines:b.outlines}}function D(b,a,c,d,f){a*=3;d*=3;for(var e=0;e<f;++e)c[d++]=b[a++],c[d++]=b[a++],c[d++]=b[a++]}function z(b,a,c,d,f,e,k){return w.bufferToBuffer(b,c,a,d,e,f,k)}function q(b,a,c){w.pointToVector(b,a,c)}function E(b,a){return!(b[0]>a[3]||
b[0]<a[0]||b[1]>a[4]||b[1]<a[1])}function F(b,a){return!(a[0]>b[3]||a[3]<b[0]||a[1]>b[4]||a[4]<b[1])}Object.defineProperty(e,"__esModule",{value:!0});var g=I.vec3f64.create(),L=A.mat4f64.create(),m=v.makeDehydratedPoint(0,0,0,null);e.createStageObjectForPoint=function(b,a,c,d,f,e,k,h,u,M,m,r){var p=c?c.length:0,l=b.clippingExtent;q(a,g,b.elevationProvider.spatialReference);if(l&&!E(g,l))return null;q(a,g,b.renderSpatialReference);l=b.localOriginFactory.getOrigin(g);h=new K({castShadow:!1,metadata:{layerUid:u,
graphicUid:M,usesVerticalDistanceToGround:!!m},idHint:h});for(u=0;u<p;u++)h.addGeometry(c[u],d[u],f?f[u]:L,e,l,r);c=b.renderSpatialReference;d=b.elevationProvider;f=b.renderCoordsHelper;b=0;var n;h.metadata.usesVerticalDistanceToGround?(b=x(d,a,k,f,t),C.updateVertexAttributeAuxpos1w(h,t.verticalDistanceToGround),n=t.terrainElevation):(e="absolute-height"!==k.mode,b=x(d,a,k,f,e?t:null),e&&(n=t.terrainElevation));k=H.mat4.copy(N,h.objectTransformation);g[0]=a.x;g[1]=a.y;g[2]=b;w.computeLinearTransformation(a.spatialReference,
g,k,c)?h.objectTransformation=k:console.warn("Could not locate symbol object properly, it might be misplaced");return{object:h,terrainElevation:n}};e.extendPointGraphicElevationContext=function(b,a,c){b=b.elevationContext;c=c.spatialReference;q(a,g,c);b.centerPointInElevationSR=v.makeDehydratedPoint(g[0],g[1],a.hasZ?g[2]:0,c)};e.placePointOnGeometry=function(b){switch(b.type){case "point":return b;case "polygon":case "extent":return C.computeCentroid(b);case "polyline":var a=b.paths[0];if(!a||0===
a.length)break;a=B.getPointOnPath(a,B.getPathLength(a)/2);return v.makeDehydratedPoint(a[0],a[1],a[2],b.spatialReference);case "mesh":return b.extent.center}return null};e.computeElevation=x;var N=A.mat4f64.create();e.getSingleSizeDriver=function(b,a){void 0===a&&(a=0);return isFinite(b[a])?b[a]:null};e.copyPathData=y;e.copyVertices=D;e.chooseOrigin=function(b,a,c,d){a=Math.floor(a+(c-1)/2);d[0]=b[3*a+0];d[1]=b[3*a+1];d[2]=b[3*a+2]};e.subtractCoordinates=function(b,a,c,d){a*=3;for(var f=0;f<c;++f)b[a++]-=
d[0],b[a++]-=d[1],b[a++]-=d[2]};e.setZ=function(b,a,c,d){a*=3;for(var f=0;f<c;++f)b[a+2]=d,a+=3};e.offsetZ=function(b,a,c,d){a*=3;for(var f=0;f<c;++f)b[a+2]+=d,a+=3};e.scaleZ=function(b,a,c,d){a*=3;for(var f=0;f<c;++f)b[a+2]*=d,a+=3};e.flatArrayToArrayOfArrays=function(b,a,c){var d=[];a*=3;for(var f=0;f<c;++f)d.push([b[a++],b[a++],b[a++]]);return d};e.reproject=z;e.reprojectPoint=q;e.getGeometryVertexData3D=function(b,a,c,d,f,e,k){var h=f.spatialReference;b=y(b,a);a=b.vertexData;var p=a.length/3,
g=new Float64Array(a.length),t=!0;c.equals(h)?D(a,0,g,0,a.length):t=z(a,0,c,g,0,h,p);var r=c=0,w=k.mode,l=0,n=0,q=0;e=k.calculateOffsetRenderUnits(e);k=k.featureExpressionInfoContext;m.spatialReference=f.spatialReference;c*=3;for(var r=3*r,v=0;v<p;++v){m.x=g[c+0];m.y=g[c+1];m.z=g[c+2];switch(w){case "on-the-ground":n=l=f.getElevation(m)||0;q+=l;break;case "relative-to-ground":l=f.getElevation(m)||0;n=l+e;null==k&&(n+=m.z);q+=l;break;case "relative-to-scene":l=f.getElevation(m,"scene")||0;n=l+e;q+=
l;break;case "absolute-height":n=e,null==k&&(n+=m.z)}a[r+0]=g[c+0];a[r+1]=g[c+1];a[r+2]=n;c+=3;r+=3}f=q/p;h.equals(d)||z(a,0,h,a,0,d,p);return{geometryData:b,vertexData:a,eleVertexData:g,terrainElevation:f,projectionSuccess:t}};e.getGeometryVertexDataDraped=function(b,a,c){b=y(b,!1);var d=b.vertexData,f=d.length/3,e=!0;a.equals(c)||(e=w.bufferToBuffer(d,a,0,d,c,0,f));return{geometryData:b,vertexData:d,projectionSuccess:e}};e.computeBoundingBox=function(b,a,c,d){d[0]=Number.MAX_VALUE;d[1]=Number.MAX_VALUE;
d[2]=Number.MAX_VALUE;d[3]=-Number.MAX_VALUE;d[4]=-Number.MAX_VALUE;d[5]=-Number.MAX_VALUE;a*=3;for(var f=0;f<c;++f){var e=b[a++],g=b[a++],h=b[a++];e<d[0]&&(d[0]=e);g<d[1]&&(d[1]=g);h<d[2]&&(d[2]=h);e>d[3]&&(d[3]=e);g>d[4]&&(d[4]=g);h>d[5]&&(d[5]=h)}return d};e.pointInBox2D=E;e.boxesIntersect2D=F;e.boundingBoxClipped=function(b,a){return a?!F(b,a):!1};e.needsElevationUpdates2D=function(b){return"relative-to-ground"===b||"relative-to-scene"===b};e.needsElevationUpdates3D=function(b){return"absolute-height"!==
b};var t={verticalDistanceToGround:0,terrainElevation:0}});