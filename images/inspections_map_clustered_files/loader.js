// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/awaiterHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/assignHelper ../../../core/maybe ../../../core/promiseUtils ../../../core/libs/gl-matrix-2/mat4f64 ./DefaultErrorContext ./LoaderResult ./internal/Resource".split(" "),function(M,v,u,w,N,C,D,E,F,y,G){function H(c,a){return u(this,void 0,void 0,function(){function k(l,m){return u(this,void 0,void 0,function(){var q,z,p,n,g,r,d,h,f;return w(this,function(e){switch(e.label){case 0:q=
b.nodes[l];z=c.getNodeTransform(l);x.warnUnsupportedIf(null!=q.weights,"Morph targets are not supported.");if(null==q.mesh)return[3,4];p=b.meshes[q.mesh];n=0;g=p.primitives;e.label=1;case 1:if(!(n<g.length))return[3,4];r=g[n];return[4,a(r,z,m,p.name)];case 2:e.sent(),e.label=3;case 3:return n++,[3,1];case 4:d=0,h=q.children||[],e.label=5;case 5:if(!(d<h.length))return[3,8];f=h[d];return[4,k(f,m)];case 6:e.sent(),e.label=7;case 7:return d++,[3,5];case 8:return[2]}})})}var b,g,l,r,h,d,m,t,e,A;return w(this,
function(a){switch(a.label){case 0:b=c.json,g=b.scenes[b.scene||0],l=g.nodes,r=1<l.length,h=0,d=l,a.label=1;case 1:if(!(h<d.length))return[3,4];m=d[h];t=b.nodes[m];e=[k(m,0)];t.extensions&&t.extensions.MSFT_lod&&Array.isArray(t.extensions.MSFT_lod.ids)&&!r&&(A=t.extensions.MSFT_lod.ids,e.push.apply(e,A.map(function(b,a){return k(b,a+1)})));return[4,D.all(e)];case 2:a.sent(),a.label=3;case 3:return h++,[3,1];case 4:return[2]}})})}function I(c,a,k){var b=function(b){var a=k+"_tex_"+(b&&b.id)+(b&&b.name?
"_"+b.name:"");if(b&&!c.textures.has(a)){var g=y.makeTextureSource(b.data,{wrap:{s:B(b.wrapS),t:B(b.wrapT)},mipmap:J.some(function(a){return a===b.minFilter}),noUnpackFlip:!0});c.textures.set(a,g)}return a},g=k+"_mat_"+a.id+"_"+a.name;c.materials.has(g)||(a=y.makeMaterialParameters({color:[a.color[0],a.color[1],a.color[2]],opacity:a.color[3],alphaMode:a.alphaMode,alphaCutoff:a.alphaCutoff,doubleSided:a.doubleSided,colorMixMode:a.ESRI_externalColorMixMode,textureColor:a.colorTexture?b(a.colorTexture):
void 0,textureNormal:a.normalTexture?b(a.normalTexture):void 0}),c.materials.set(g,a));return g}function B(c){if(33071===c||33648===c||10497===c)return c;x.error("Unexpected TextureSampler WrapMode: "+c)}Object.defineProperty(v,"__esModule",{value:!0});var K=0;v.load=function(c,a,k){void 0===k&&(k={});return u(this,void 0,void 0,function(){var b,g,l,k,h=this;return w(this,function(d){switch(d.label){case 0:return[4,G.Resource.load(c,x,a)];case 1:return b=d.sent(),g="gltf_"+K++,l={lods:[],materials:new Map,
textures:new Map},k=!(!b.json.asset.extras||"symbolResource"!==b.json.asset.extras.ESRI_type),[4,H(b,function(a,c,e,k){return u(h,void 0,void 0,function(){var d,h,q,m,p,n,r,t,u,v;return w(this,function(f){switch(f.label){case 0:d=a.mode||4;a:switch(d){case 4:case 5:case 6:h=d;break a;default:h=null}return C.isNone(h)?(x.warnUnsupported("Unsupported primitive mode ("+L[d]+"). Skipping primitive."),[2]):[4,b.getMaterial(a)];case 1:return q=f.sent(),p={transform:E.mat4f64.clone(c)},n={},[4,b.getPositionData(a)];
case 2:return p.attributes=(n.position=f.sent(),n.normal=null,n.texCoord0=null,n.color=null,n.tangent=null,n),[4,b.getIndexData(a)];case 3:m=(p.indices=f.sent(),p.primitiveType=h,p.material=I(l,q,g),p);if(!b.hasNormals(a))return[3,5];r=m.attributes;return[4,b.getNormalData(a)];case 4:r.normal=f.sent(),f.label=5;case 5:if(!b.hasTangents(a))return[3,7];t=m.attributes;return[4,b.getTangentData(a)];case 6:t.tangent=f.sent(),f.label=7;case 7:if(!b.hasTextureCoordinates(a))return[3,9];u=m.attributes;return[4,
b.getTextureCoordinates(a)];case 8:u.texCoord0=f.sent(),f.label=9;case 9:if(!b.hasVertexColors(a))return[3,11];v=m.attributes;return[4,b.getVertexColors(a)];case 10:v.color=f.sent(),f.label=11;case 11:return l.lods[e]=l.lods[e]||{parts:[],name:k,lodThreshold:null},l.lods[e].parts.push(m),[2]}})})})];case 2:return d.sent(),[2,{model:l,meta:{isEsriSymbolResource:k,uri:b.uri},customMeta:{}}]}})})};var x=new F.DefaultErrorContext,J=[9987,9985],L="POINTS LINES LINE_LOOP LINE_STRIP TRIANGLES TRIANGLE_STRIP TRIANGLE_FAN".split(" ")});