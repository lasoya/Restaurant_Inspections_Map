// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/libs/gl-matrix-2/vec3","../stack","./vector"],function(m,a,g,k,l){function e(b){void 0===b&&(b=a.UP);return[b[0],b[1],b[2],b[3]]}function f(b,h,c,a,d){void 0===d&&(d=e());d[0]=b;d[1]=h;d[2]=c;d[3]=a;return d}Object.defineProperty(a,"__esModule",{value:!0});a.create=e;a.wrap=function(b,h,c,a){return f(b,h,c,a,k.sv4d.get())};a.wrapAxisAngle=function(b,a){return f(b[0],b[1],b[2],a,k.sv4d.get())};a.copy=function(b,a){void 0===a&&(a=e());return f(b[0],b[1],
b[2],b[3],a)};a.fromValues=f;a.fromAxisAndAngle=function(b,a,c){void 0===c&&(c=e());g.vec3.copy(c,b);c[3]=a;return c};a.fromPoints=function(b,a,c){void 0===c&&(c=e());g.vec3.cross(c,b,a);g.vec3.normalize(c,c);c[3]=l.angle(b,a);return c};a.UP=[0,0,1,0]});