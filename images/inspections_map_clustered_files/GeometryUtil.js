// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f32 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/geometryUtils ./BufferVectorMath ./GeometryData ./Util".split(" "),function(Z,aa,g,l,Y,U,T,B,k){var F=T.Vec3Compact,P;(function(g){for(var l=[[-.5,-.5,.5],[.5,-.5,.5],[.5,.5,.5],[-.5,.5,.5],[-.5,-.5,-.5],[.5,-.5,-.5],[.5,.5,-.5],[-.5,.5,-.5]],r=[0,0,1,-1,0,0,1,0,0,0,-1,0,0,1,0,0,0,-1],c=[0,0,1,0,1,1,0,1],d=[0,1,2,2,3,0,4,0,3,3,7,4,1,5,6,6,
2,1,1,0,4,4,5,1,3,2,6,6,7,3,5,4,7,7,6,5],a=Array(36),b=0;6>b;b++)for(var f=0;6>f;f++)a[6*b+f]=b;for(var h=Array(36),b=0;6>b;b++)h[6*b+0]=0,h[6*b+1]=1,h[6*b+2]=2,h[6*b+3]=2,h[6*b+4]=3,h[6*b+5]=0;g.createGeometry=function(b){Array.isArray(b)||(b=[b,b,b]);for(var e=new Float32Array(24),f=0;8>f;f++)e[3*f]=l[f][0]*b[0],e[3*f+1]=l[f][1]*b[1],e[3*f+2]=l[f][2]*b[2];b={};b[k.VertexAttrConstants.POSITION]=new Uint32Array(d);b[k.VertexAttrConstants.NORMAL]=new Uint32Array(a);b[k.VertexAttrConstants.UV0]=new Uint32Array(h);
f={};f[k.VertexAttrConstants.POSITION]={size:3,data:e};f[k.VertexAttrConstants.NORMAL]={size:3,data:new Float32Array(r)};f[k.VertexAttrConstants.UV0]={size:2,data:new Float32Array(c)};return new B(f,b)}})(P||(P={}));var M;(function(g){var l=[[-.5,0,-.5],[.5,0,-.5],[.5,0,.5],[-.5,0,.5],[0,-.5,0],[0,.5,0]],r=[0,1,-1,1,1,0,0,1,1,-1,1,0,0,-1,-1,1,-1,0,0,-1,1,-1,-1,0],c=[5,1,0,5,2,1,5,3,2,5,0,3,4,0,1,4,1,2,4,2,3,4,3,0],d=[0,0,0,1,1,1,2,2,2,3,3,3,4,4,4,5,5,5,6,6,6,7,7,7];g.createGeometry=function(a){Array.isArray(a)||
(a=[a,a,a]);for(var b=new Float32Array(18),f=0;6>f;f++)b[3*f]=l[f][0]*a[0],b[3*f+1]=l[f][1]*a[1],b[3*f+2]=l[f][2]*a[2];a={};a[k.VertexAttrConstants.POSITION]=new Uint32Array(c);a[k.VertexAttrConstants.NORMAL]=new Uint32Array(d);f={};f[k.VertexAttrConstants.POSITION]={size:3,data:b};f[k.VertexAttrConstants.NORMAL]={size:3,data:new Float32Array(r)};return new B(f,a)}})(M||(M={}));var Q;(function(r){var v=l.vec3f32.fromValues(-.5,0,-.5),K=l.vec3f32.fromValues(.5,0,-.5),c=l.vec3f32.fromValues(0,0,.5),
d=l.vec3f32.fromValues(0,.5,0),a=l.vec3f32.create(),b=l.vec3f32.create(),f=l.vec3f32.create(),h=l.vec3f32.create(),e=l.vec3f32.create();g.vec3.subtract(a,v,d);g.vec3.subtract(b,v,K);g.vec3.cross(f,a,b);g.vec3.normalize(f,f);g.vec3.subtract(a,K,d);g.vec3.subtract(b,K,c);g.vec3.cross(h,a,b);g.vec3.normalize(h,h);g.vec3.subtract(a,c,d);g.vec3.subtract(b,c,v);g.vec3.cross(e,a,b);g.vec3.normalize(e,e);var G=[v,K,c,d],n=[0,-1,0,f[0],f[1],f[2],h[0],h[1],h[2],e[0],e[1],e[2]],q=[0,1,2,3,1,0,3,2,1,3,0,2],t=
[0,0,0,1,1,1,2,2,2,3,3,3];r.createGeometry=function(a){Array.isArray(a)||(a=[a,a,a]);for(var b=new Float32Array(12),c=0;4>c;c++)b[3*c]=G[c][0]*a[0],b[3*c+1]=G[c][1]*a[1],b[3*c+2]=G[c][2]*a[2];a={};a[k.VertexAttrConstants.POSITION]=new Uint32Array(q);a[k.VertexAttrConstants.NORMAL]=new Uint32Array(t);c={};c[k.VertexAttrConstants.POSITION]={size:3,data:b};c[k.VertexAttrConstants.NORMAL]={size:3,data:new Float32Array(n)};return new B(c,a)}})(Q||(Q={}));var R;(function(r){function J(c,d,a,b,f){if(Math.abs(g.vec3.dot(d,
c))>f)return!1;g.vec3.cross(a,c,d);g.vec3.normalize(a,a);g.vec3.cross(b,a,c);g.vec3.normalize(b,b);return!0}function K(c,d,a,b,f,h,e){return J(c,d,f,h,e)||J(c,a,f,h,e)||J(c,b,f,h,e)}r.createBoxGeometry=P.createGeometry;r.createDiamondGeometry=M.createGeometry;r.createTetrahedronGeometry=Q.createGeometry;r.createSphereGeometry=function(c,d,a,b,f,h,e){c=c||50;b=void 0!==b?b:-Math.PI;f=void 0!==f?f:2*Math.PI;h=void 0!==h?h:.5*-Math.PI;e=void 0!==e?e:Math.PI;var g=Math.max(3,Math.floor(d)||8),n=Math.max(2,
Math.floor(a)||6),q=(g+1)*(n+1);a=new Float32Array(3*q);d=new Float32Array(3*q);for(var q=new Float32Array(2*q),l=[],m=0,u=0;u<=n;u++){for(var r=[],v=u/n,y=h+v*e,w=Math.cos(y),C=0;C<=g;C++){var p=C/g,z=b+p*f,N=Math.cos(z)*w,E=Math.sin(y),z=-Math.sin(z)*w;a[3*m]=N*c;a[3*m+1]=E*c;a[3*m+2]=z*c;d[3*m]=N;d[3*m+1]=E;d[3*m+2]=z;q[2*m]=p;q[2*m+1]=v;r.push(m);++m}l.push(r)}c=new Uint32Array(2*g*(n-1)*3);for(u=m=0;u<n;u++)for(C=0;C<g;C++)b=l[u][C],f=l[u][C+1],h=l[u+1][C+1],e=l[u+1][C],0===u?(c[m++]=b,c[m++]=
h,c[m++]=e):u===n-1?(c[m++]=b,c[m++]=f,c[m++]=h):(c[m++]=b,c[m++]=f,c[m++]=h,c[m++]=h,c[m++]=e,c[m++]=b);k.assert(m===c.length);g={};g[k.VertexAttrConstants.POSITION]=c;g[k.VertexAttrConstants.NORMAL]=c;g[k.VertexAttrConstants.UV0]=c;n={};n[k.VertexAttrConstants.POSITION]={size:3,data:a};n[k.VertexAttrConstants.NORMAL]={size:3,data:d};n[k.VertexAttrConstants.UV0]={size:2,data:q};return new B(n,g)};r.createPolySphereGeometry=function(c,d,a){function b(a,b){a>b&&(b=[b,a],a=b[0],b=b[1]);var d=a.toString()+
"."+b.toString();if(e[d])return e[d];var h=f.length;f.length+=3;F.add(f,3*a,f,3*b,f,h);F.scale(f,h,c/F.length(f,h));h/=3;return e[d]=h}var f;a?(f=[0,-1,0,1,0,0,0,0,1,-1,0,0,0,0,-1,0,1,0],a=new Uint32Array([0,1,2,0,2,3,0,3,4,0,4,1,1,5,2,2,5,3,3,5,4,4,5,1])):(a=c*(1+Math.sqrt(5))/2,f=[-c,a,0,c,a,0,-c,-a,0,c,-a,0,0,-c,a,0,c,a,0,-c,-a,0,c,-a,a,0,-c,a,0,c,-a,0,-c,-a,0,c],a=new Uint32Array([0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,
2,10,8,6,7,9,8,1]));for(var h=0;h<f.length;h+=3)F.scale(f,h,c/F.length(f,h));for(var e={},h=0;h<d;h++){for(var g=a.length,n=new Uint32Array(4*g),l=0;l<g;l+=3){var t=a[l],m=a[l+1],u=a[l+2],r=b(t,m),v=b(m,u),y=b(u,t),w=4*l;n[w]=t;n[w+1]=r;n[w+2]=y;n[w+3]=m;n[w+4]=v;n[w+5]=r;n[w+6]=u;n[w+7]=y;n[w+8]=v;n[w+9]=r;n[w+10]=v;n[w+11]=y}a=n;e={}}d=new Float32Array(f);for(h=0;h<d.length;h+=3)F.normalize(d,h);h={};h[k.VertexAttrConstants.POSITION]=a;h[k.VertexAttrConstants.NORMAL]=a;a={};a[k.VertexAttrConstants.POSITION]=
{size:3,data:new Float32Array(f)};a[k.VertexAttrConstants.NORMAL]={size:3,data:d};return new B(a,h)};r.createPointGeometry=function(c,d,a,b,f,h,e){d=d?new Float64Array([d[0],d[1],d[2]]):new Float32Array([0,0,0]);c=c?new Float32Array([c[0],c[1],c[2]]):new Float32Array([0,0,1]);h=h?new Float32Array(h):new Float32Array([0,0]);var g=a?new Uint8Array([255*a[0],255*a[1],255*a[2],3<a.length?255*a[3]:255]):new Uint8Array([255,255,255,255]),l=null!=b&&2===b.length?new Float32Array(b):new Float32Array([1,1]);
b=new Uint32Array([0]);a={};a[k.VertexAttrConstants.POSITION]=b;a[k.VertexAttrConstants.NORMAL]=b;a[k.VertexAttrConstants.UV0]=b;a[k.VertexAttrConstants.COLOR]=b;a[k.VertexAttrConstants.SIZE]=b;var q={};q[k.VertexAttrConstants.POSITION]={size:3,data:d};q[k.VertexAttrConstants.NORMAL]={size:3,data:c};q[k.VertexAttrConstants.UV0]={size:h.length,data:h};q[k.VertexAttrConstants.COLOR]={size:4,data:g};q[k.VertexAttrConstants.SIZE]={size:2,data:l};null!=f&&(f=new Float32Array([f[0],f[1],f[2],f[3]]),a[k.VertexAttrConstants.AUXPOS1]=
b,q[k.VertexAttrConstants.AUXPOS1]={size:4,data:f});null!=e&&(e=new Float32Array([e[0],e[1],e[2],e[3]]),a[k.VertexAttrConstants.AUXPOS2]=b,q[k.VertexAttrConstants.AUXPOS2]={size:4,data:e});return new B(q,a,B.DefaultOffsets,"point")};r.createPointArrayGeometry=function(c,d){for(var a=new Float32Array(3*c.length),b=new Float32Array(d?3*c.length:3),f=new Uint32Array(c.length),h=new Uint32Array(c.length),e=0;e<c.length;e++)a[3*e]=c[e][0],a[3*e+1]=c[e][1],a[3*e+2]=c[e][2],d&&(b[3*e]=d[e][0],b[3*e+1]=d[e][1],
b[3*e+2]=d[e][2]),f[e]=e,h[e]=0;d||(b[0]=0,b[1]=1,b[2]=0);c=new Float32Array(2);c[0]=0;c[1]=0;e={};e[k.VertexAttrConstants.POSITION]=f;e[k.VertexAttrConstants.NORMAL]=d?f:h;e[k.VertexAttrConstants.UV0]=h;d={};d[k.VertexAttrConstants.POSITION]={size:3,data:a};d[k.VertexAttrConstants.NORMAL]={size:3,data:b};d[k.VertexAttrConstants.UV0]={size:2,data:c};return new B(d,e,B.DefaultOffsets,"point")};r.createTriangleGeometry=function(){var c=new Float32Array([0,0,0,0,0,100,100,0,0]),d=new Uint32Array([0,
1,2]),a=new Float32Array([0,1,0]),b=new Uint32Array([0,0,0]),f=new Float32Array([0,0]),h=new Uint32Array([0,0,0]),e={};e[k.VertexAttrConstants.POSITION]=d;e[k.VertexAttrConstants.NORMAL]=b;e[k.VertexAttrConstants.UV0]=h;d={};d[k.VertexAttrConstants.POSITION]={size:3,data:c};d[k.VertexAttrConstants.NORMAL]={size:3,data:a};d[k.VertexAttrConstants.UV0]={size:2,data:f};return new B(d,e)};r.createSquareGeometry=function(c){var d=new Float32Array(12);if(c)for(var a=0;4>a;a++)for(var b=0;3>b;b++)d[3*a+b]=
c[a][b];else d[0]=-1,d[1]=-1,d[2]=0,d[3]=1,d[4]=-1,d[5]=0,d[6]=1,d[7]=1,d[8]=0,d[9]=-1,d[10]=1,d[11]=0;var f=new Uint32Array([0,1,2,2,3,0]);c=new Float32Array([0,0,1]);var h=new Uint32Array([0,0,0,0,0,0]),a=new Float32Array([0,0,1,0,1,1,0,1]),b=new Uint8Array([255,255,255,255]),e={};e[k.VertexAttrConstants.POSITION]=f;e[k.VertexAttrConstants.NORMAL]=h;e[k.VertexAttrConstants.UV0]=f;e[k.VertexAttrConstants.COLOR]=h;f={};f[k.VertexAttrConstants.POSITION]={size:3,data:d};f[k.VertexAttrConstants.NORMAL]=
{size:3,data:c};f[k.VertexAttrConstants.UV0]={size:2,data:a};f[k.VertexAttrConstants.COLOR]={size:4,data:b};return new B(f,e)};r.createConeGeometry=function(c,d,a,b,f,h){void 0===f&&(f=!0);void 0===h&&(h=!0);var e=0,g=l.vec3f32.fromValues(0,e,0),n=l.vec3f32.fromValues(0,e+c,0),q=l.vec3f32.fromValues(0,-1,0),t=l.vec3f32.fromValues(0,1,0);b&&(e=c,n=l.vec3f32.fromValues(0,0,0),g=l.vec3f32.fromValues(0,e,0),q=l.vec3f32.fromValues(0,1,0),t=l.vec3f32.fromValues(0,-1,0));g=[n,g];q=[q,t];t=a+2;n=Math.sqrt(c*
c+d*d);if(b)for(b=a-1;0<=b;b--)m=2*Math.PI/a*b,u=l.vec3f32.fromValues(Math.cos(m)*d,e,Math.sin(m)*d),g.push(u),m=l.vec3f32.fromValues(c*Math.cos(m)/n,-d/n,c*Math.sin(m)/n),q.push(m);else for(b=0;b<a;b++){var m=2*Math.PI/a*b,u=l.vec3f32.fromValues(Math.cos(m)*d,e,Math.sin(m)*d);g.push(u);m=l.vec3f32.fromValues(c*Math.cos(m)/n,d/n,c*Math.sin(m)/n);q.push(m)}c=new Uint32Array(6*(a+2));a=new Uint32Array(6*(a+2));e=d=0;if(f){for(b=3;b<g.length;b++)c[d++]=1,c[d++]=b-1,c[d++]=b,a[e++]=0,a[e++]=0,a[e++]=
0;c[d++]=g.length-1;c[d++]=2;c[d++]=1;a[e++]=0;a[e++]=0;a[e++]=0}if(h){for(b=3;b<g.length;b++)c[d++]=b,c[d++]=b-1,c[d++]=0,a[e++]=b,a[e++]=b-1,a[e++]=1;c[d++]=0;c[d++]=2;c[d++]=g.length-1;a[e++]=1;a[e++]=2;a[e++]=q.length-1}f=new Float32Array(3*t);for(b=0;b<t;b++)f[3*b]=g[b][0],f[3*b+1]=g[b][1],f[3*b+2]=g[b][2];h=new Float32Array(3*t);for(b=0;b<t;b++)h[3*b]=q[b][0],h[3*b+1]=q[b][1],h[3*b+2]=q[b][2];g={};g[k.VertexAttrConstants.POSITION]=c;g[k.VertexAttrConstants.NORMAL]=a;q={};q[k.VertexAttrConstants.POSITION]=
{size:3,data:f};q[k.VertexAttrConstants.NORMAL]={size:3,data:h};return new B(q,g)};r.createCylinderGeometry=function(c,d,a,b,f,h){b=b?l.vec3f32.clone(b):l.vec3f32.fromValues(1,0,0);f=f?l.vec3f32.clone(f):l.vec3f32.fromValues(0,0,0);h=void 0===h?!0:h;var e=l.vec3f32.create();g.vec3.normalize(e,b);b=l.vec3f32.create();g.vec3.scale(b,e,Math.abs(c));var G=l.vec3f32.create();g.vec3.scale(G,b,-.5);g.vec3.add(G,G,f);var n=l.vec3f32.fromValues(0,1,0);.2>Math.abs(1-g.vec3.dot(e,n))&&g.vec3.set(n,0,0,1);var q=
l.vec3f32.create();g.vec3.cross(q,e,n);g.vec3.normalize(q,q);g.vec3.cross(n,q,e);var t=2*a+(h?2:0),m=a+(h?2:0);c=new Float32Array(3*t);f=new Float32Array(3*m);var u=new Float32Array(2*t),r=new Uint32Array(3*a*(h?4:2)),v=new Uint32Array(3*a*(h?4:2));h&&(c[3*(t-2)+0]=G[0],c[3*(t-2)+1]=G[1],c[3*(t-2)+2]=G[2],u[2*(t-2)]=0,u[2*(t-2)+1]=0,c[3*(t-1)+0]=c[3*(t-2)+0]+b[0],c[3*(t-1)+1]=c[3*(t-2)+1]+b[1],c[3*(t-1)+2]=c[3*(t-2)+2]+b[2],u[2*(t-1)]=1,u[2*(t-1)+1]=1,f[3*(m-2)+0]=-e[0],f[3*(m-2)+1]=-e[1],f[3*(m-
2)+2]=-e[2],f[3*(m-1)+0]=e[0],f[3*(m-1)+1]=e[1],f[3*(m-1)+2]=e[2]);for(var e=function(a,b,c){r[a]=b;v[a]=c},y=0,w=l.vec3f32.create(),C=l.vec3f32.create(),p=0;p<a;p++){var z=2*Math.PI/a*p;g.vec3.scale(w,n,Math.sin(z));g.vec3.scale(C,q,Math.cos(z));g.vec3.add(w,w,C);f[3*p+0]=w[0];f[3*p+1]=w[1];f[3*p+2]=w[2];g.vec3.scale(w,w,d);g.vec3.add(w,w,G);c[3*p+0]=w[0];c[3*p+1]=w[1];c[3*p+2]=w[2];u[2*p+0]=p/a;u[2*p+1]=0;c[3*(p+a)+0]=c[3*p+0]+b[0];c[3*(p+a)+1]=c[3*p+1]+b[1];c[3*(p+a)+2]=c[3*p+2]+b[2];u[2*(p+a)+
0]=p/a;u[2*p+1]=1;z=(p+1)%a;e(y++,p,p);e(y++,p+a,p);e(y++,z,z);e(y++,z,z);e(y++,p+a,p);e(y++,z+a,z)}if(h){for(p=0;p<a;p++)z=(p+1)%a,e(y++,t-2,m-2),e(y++,p,m-2),e(y++,z,m-2);for(p=0;p<a;p++)z=(p+1)%a,e(y++,p+a,m-1),e(y++,t-1,m-1),e(y++,z+a,m-1)}d={};d[k.VertexAttrConstants.POSITION]=r;d[k.VertexAttrConstants.NORMAL]=v;d[k.VertexAttrConstants.UV0]=r;a={};a[k.VertexAttrConstants.POSITION]={size:3,data:c};a[k.VertexAttrConstants.NORMAL]={size:3,data:f};a[k.VertexAttrConstants.UV0]={size:2,data:u};return new B(a,
d)};r.createTubeGeometry=function(c,d,a,b,f){a=a||10;b=null!=b?b:!0;k.assert(1<c.length);for(var h=[],e=[],g=0;g<a;g++){h.push([0,-g-1,-((g+1)%a)-1]);var l=g/a*2*Math.PI;e.push([Math.cos(l)*d,Math.sin(l)*d])}return r.createPathExtrusionGeometry(e,c,[[0,0,0]],h,b,f)};r.createPathExtrusionGeometry=function(c,d,a,b,f,h){void 0===h&&(h=l.vec3f32.fromValues(0,0,0));var e=c.length,r=new Float32Array(d.length*e*3+(6*a.length||0)),n=new Float32Array(d.length*e+(2*a.length||0)),q=new Float32Array(d.length*
e*3+(a?6:0)),t=(d.length-1)*e*6+6*b.length,m=new Uint32Array(t),t=new Uint32Array(t),u=0,v=0,F=0,y=0,w=0,C=l.vec3f32.create(),p=l.vec3f32.create(),z=l.vec3f32.create(),N=l.vec3f32.create(),E=l.vec3f32.create(),A=l.vec3f32.create(),J=l.vec3f32.create(),D=Y.vec3f64.create(),V=l.vec3f32.create(),S=l.vec3f32.create(),P=l.vec3f32.create(),M=l.vec3f32.create(),Q=l.vec3f32.create(),R=U.plane.create();g.vec3.set(V,0,1,0);g.vec3.subtract(p,d[1],d[0]);g.vec3.normalize(p,p);f?(g.vec3.add(D,d[0],h),g.vec3.normalize(z,
D)):g.vec3.set(z,0,0,1);K(p,z,V,V,E,z,W);g.vec3.copy(N,z);g.vec3.copy(M,E);for(var x=0;x<a.length;x++)g.vec3.scale(A,E,a[x][0]),g.vec3.scale(D,z,a[x][2]),g.vec3.add(A,A,D),g.vec3.add(A,A,d[0]),r[u++]=A[0],r[u++]=A[1],r[u++]=A[2],n[F++]=0;q[v++]=-p[0];q[v++]=-p[1];q[v++]=-p[2];for(x=0;x<b.length;x++)m[y++]=0<b[x][0]?b[x][0]:-b[x][0]-1+a.length,m[y++]=0<b[x][1]?b[x][1]:-b[x][1]-1+a.length,m[y++]=0<b[x][2]?b[x][2]:-b[x][2]-1+a.length,t[w++]=0,t[w++]=0,t[w++]=0;for(var H=a.length,x=a.length-1,I=0;I<d.length;I++){var T=
!1;0<I&&(g.vec3.copy(C,p),I<d.length-1?(g.vec3.subtract(p,d[I+1],d[I]),g.vec3.normalize(p,p)):T=!0,g.vec3.add(S,C,p),g.vec3.normalize(S,S),g.vec3.add(P,d[I-1],N),U.plane.fromPositionAndNormal(d[I],S,R),U.plane.intersectRay(R,U.ray.wrap(P,C),D)?(g.vec3.subtract(D,D,d[I]),g.vec3.normalize(z,D),g.vec3.cross(E,S,z),g.vec3.normalize(E,E)):K(S,N,M,V,E,z,W),g.vec3.copy(N,z),g.vec3.copy(M,E));f&&(g.vec3.add(D,d[I],h),g.vec3.normalize(Q,D));for(var L=0;L<e;L++)if(g.vec3.scale(A,E,c[L][0]),g.vec3.scale(D,z,
c[L][1]),g.vec3.add(A,A,D),g.vec3.normalize(J,A),q[v++]=J[0],q[v++]=J[1],q[v++]=J[2],f?n[F++]=g.vec3.dot(A,Q):n[F++]=A[2],g.vec3.add(A,A,d[I]),r[u++]=A[0],r[u++]=A[1],r[u++]=A[2],!T){var O=(L+1)%e;m[y++]=H+L;m[y++]=H+e+L;m[y++]=H+O;m[y++]=H+O;m[y++]=H+e+L;m[y++]=H+e+O;for(O=0;6>O;O++)t[w++]=m[y-6+O]-x}H+=e}c=d[d.length-1];for(x=0;x<a.length;x++)g.vec3.scale(A,E,a[x][0]),g.vec3.scale(D,z,a[x][1]),g.vec3.add(A,A,D),g.vec3.add(A,A,c),r[u++]=A[0],r[u++]=A[1],r[u++]=A[2],n[F++]=0;a=v/3;q[v++]=p[0];q[v++]=
p[1];q[v++]=p[2];e=H-e;for(x=0;x<b.length;x++)m[y++]=0<=b[x][0]?H+b[x][0]:-b[x][0]-1+e,m[y++]=0<=b[x][2]?H+b[x][2]:-b[x][2]-1+e,m[y++]=0<=b[x][1]?H+b[x][1]:-b[x][1]-1+e,t[w++]=a,t[w++]=a,t[w++]=a;b={};b[k.VertexAttrConstants.POSITION]=m;b[k.VertexAttrConstants.NORMAL]=t;m={};m[k.VertexAttrConstants.POSITION]={size:3,data:r};m.zOffset={size:1,data:n};m[k.VertexAttrConstants.NORMAL]={size:3,data:q};return new B(m,b)};r.createPolylineGeometry=function(c,d){k.assert(1<c.length,"createPolylineGeometry(): polyline needs at least 2 points");
k.assert(3===c[0].length,"createPolylineGeometry(): malformed vertex");k.assert(void 0===d||d.length===c.length,"createPolylineGeometry: need same number of points and normals");k.assert(void 0===d||3===d[0].length,"createPolylineGeometry(): malformed normal");for(var a=new Float32Array(3*c.length),b=new Uint32Array(2*(c.length-1)),f=0,h=0,e=0;e<c.length;e++){for(var g=0;3>g;g++)a[f++]=c[e][g];0<e&&(b[h++]=e-1,b[h++]=e)}f={};h={};f[k.VertexAttrConstants.POSITION]=b;h[k.VertexAttrConstants.POSITION]=
{size:3,data:a};if(d){for(var a=new Float32Array(3*d.length),l=0,e=0;e<c.length;e++)for(g=0;3>g;g++)a[l++]=d[e][g];f[k.VertexAttrConstants.NORMAL]=b;h[k.VertexAttrConstants.NORMAL]={size:3,data:a}}return new B(h,f,B.DefaultOffsets,"line")};r.createExtrudedTriangle=function(c,d,a,b){var f,g,e=new Float32Array(18);c=[[-d,0,b/2],[a,0,b/2],[0,c,b/2],[-d,0,-b/2],[a,0,-b/2],[0,c,-b/2]];for(d=0;6>d;d++)e[3*d]=c[d][0],e[3*d+1]=c[d][1],e[3*d+2]=c[d][2];c=(f={},f[k.VertexAttrConstants.POSITION]=new Uint32Array([0,
1,2,3,0,2,2,5,3,1,4,5,5,2,1,1,0,3,3,4,1,4,3,5]),f);f=(g={},g[k.VertexAttrConstants.POSITION]={size:3,data:e},g);return new B(f,c)};r.transformInPlace=function(c,d){c=c.vertexAttributes[k.VertexAttrConstants.POSITION].data;for(var a=0;a<c.length;a+=3)g.vec3.set(v,c[a],c[a+1],c[a+2]),g.vec3.transformMat4(v,v,d),c[a]=v[0],c[a+1]=v[1],c[a+2]=v[2]};r.addVertexColors=function(c,d){var a=d||[1,1,1,1];d=new Uint8Array(4);d[0]=255*a[0];d[1]=255*a[1];d[2]=255*a[2];d[3]=255*(3<a.length?a[3]:1);var a={},b=c.getVertexAttr(),
f;for(f in b)a[f]=b[f];a[k.VertexAttrConstants.COLOR]={size:4,data:d};d={};for(f in c.indices)d[f]=c.indices[f];d[k.VertexAttrConstants.COLOR]=new Uint32Array(d[k.VertexAttrConstants.POSITION].length);return c=new B(a,d,c.componentOffsets,c.primitiveType)};r.addNormals=function(c){var d=c.getVertexAttr();c=c.indices;for(var a=T.Vec3Compact.subtract,b=new Float32Array(c.position.length/3*3),f=d.position.data,h=0,e=c.position,l=new Uint32Array(e.length),n=0;n<e.length;n+=3){a(f,3*e[n],f,3*e[n+2],X,
0);a(f,3*e[n],f,3*e[n+1],v,0);g.vec3.cross(v,v,X);g.vec3.normalize(v,v);var q=h/3;b[h++]=v[0];b[h++]=v[1];b[h++]=v[2];l[n]=q;l[n+1]=q;l[n+2]=q}d[k.VertexAttrConstants.NORMAL]={size:3,data:b,offsetIdx:0,strideIdx:3};c[k.VertexAttrConstants.NORMAL]=l};r.cgToGIS=function(c,d){void 0===d&&(d=c);var a=c.getVertexAttr();c=a.position.data;var a=a.normal.data,b=d.getVertexAttr(),f=b.position.data,b=b.normal.data;if(a)for(var g=0;g<a.length;g+=3){var e=a[g+1];b[g+1]=-a[g+2];b[g+2]=e}if(c)for(g=0;g<c.length;g+=
3)e=c[g+1],f[g+1]=-c[g+2],f[g+2]=e;return d};r.makeOrthoBasisDirUp=J;r.makeOrthoBasisDirUpFallback=K})(R||(R={}));var W=.99619469809,v=l.vec3f32.create(),X=l.vec3f32.create();return R});