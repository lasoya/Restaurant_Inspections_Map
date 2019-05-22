// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/maybe ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/SpatialReference ../../support/projectionUtils ./Geometry ./GeometryData ./Layer ./localOrigin ./Object3D ./Util ../materials/RibbonLineMaterial ../parts/Model".split(" "),function(m,G,t,u,v,w,x,y,z,A,B,p,C,r,D,n){var E=0;m=function(){function l(){this.ROOT_ORIGIN_ID="rg_root_"+E++;this._origins=new Map;this._gridSize=
42E5;if(t.isSome(l.testOrigin)){var a=l.testOrigin;this._origins.set(this.ROOT_ORIGIN_ID,p.fromValues(a[0],a[1],a[2],this.ROOT_ORIGIN_ID))}}l.prototype.getOrigin=function(a){var f=this._origins.get(this.ROOT_ORIGIN_ID);if(null==f){var b=p.fromValues(a[0]+Math.random()-.5,a[1]+Math.random()-.5,a[2]+Math.random()-.5,this.ROOT_ORIGIN_ID);this._origins.set(this.ROOT_ORIGIN_ID,b);return b}v.vec3.subtract(c,a,f.vec3);c[0]=Math.abs(c[0]);c[1]=Math.abs(c[1]);c[2]=Math.abs(c[2]);b=this._gridSize;if(c[0]<b&&
c[1]<b&&c[2]<b)return f;var f=Math.round(a[0]/b),d=Math.round(a[1]/b);a=Math.round(a[2]/b);var q="rg_"+f+"/"+d+"/"+a,g=this._origins.get(q);g||(g=p.fromValues(f*b,d*b,a*b,q),this._origins.set(q,g));return g};l.prototype._drawOriginBox=function(a){var f=window.view,b=f._stage;if(null==this._object){this._material=new D({width:2,color:[0,1,0,1]},"GridLocalOriginMaterial");b.add(n.ContentType.MATERIAL,this._material);var d=new B("GridLocalOrigin",{isPickable:!1});b.add(n.ContentType.LAYER,d);this._object=
new C({name:"GridLocalOrigin",idHint:"GridLocalOrigin",castShadow:!1});b.add(n.ContentType.OBJECT,this._object);d.addObject(this._object);b.addToViewContent([d.id])}for(var c=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],g=c.length,h=new Float32Array(3*g),d=new Uint32Array(2*(g-1)),k=.5*this._gridSize,e=0;e<g;e++)h[3*e+0]=a[0]+(c[e]&1?k:-k),h[3*e+1]=a[1]+(c[e]&2?k:-k),h[3*e+2]=a[2]+(c[e]&4?k:-k),0<e&&(d[2*e+0]=e-1,d[2*e+1]=e);y.bufferToBuffer(h,x.WebMercator,0,h,f.spatialReference,0,g);f={};f[r.VertexAttrConstants.POSITION]=
{size:3,data:h};h={};h[r.VertexAttrConstants.POSITION]=d;d=new A(f,h,void 0,"line");d=new z(d,"GridLocalOriginBox");b.add(n.ContentType.GEOMETRY,d);this._object.addGeometry(d,this._material,F);console.log(this._origins.size,a)};return l}();var F=u.mat4f64.create(),c=w.vec3f64.create();(m||(m={})).testOrigin=null;return m});