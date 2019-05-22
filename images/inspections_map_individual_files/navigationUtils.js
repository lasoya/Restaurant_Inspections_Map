// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec2 ../../../../core/libs/gl-matrix-2/vec2f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/earthUtils ../../support/geometryUtils ../../support/mathUtils ../../support/stack ../../support/geometryUtils/coordinateSystem ../../webgl-engine/lib/Camera".split(" "),function(oa,e,ka,n,K,
la,ma,d,g,P,p,l,w,z,na){function L(a,c,b){var k=w.sm4d.get();n.mat4.identity(k);n.mat4.rotate(k,k,b[3],b);d.vec3.subtract(a.eye,a.eye,c);d.vec3.transformMat4(a.eye,a.eye,k);d.vec3.add(a.eye,a.eye,c);d.vec3.subtract(a.center,a.center,c);d.vec3.transformMat4(a.center,a.center,k);d.vec3.add(a.center,a.center,c);d.vec3.transformMat4(a.up,a.up,k);a.markViewDirty()}function Q(a,c){d.vec3.set(c,0,0,0);for(var b=0;b<a.length;b++)d.vec3.add(c,c,a[b]);d.vec3.scale(c,c,1/a.length)}function R(a,c,b){return Math.sin(a/
d.vec3.length(c))*(b+P.earthRadius)}function S(a,c,b,k){b=p.ray.fromScreenAtEye(c,b,T);p.sphere.closestPointOnSilhouette(a,b,C);return p.sphere.intersectRay(a,b,k)?d.vec3.squaredDistance(C,b.origin)<d.vec3.squaredDistance(k,b.origin)?(d.vec3.copy(k,C),!1):!0:(d.vec3.subtract(y,c.eye,c.center),d.vec3.normalize(y,y),p.plane.fromNormalAndOffset(y,-d.vec3.dot(d.vec3.normalize(y,y),C),U),p.plane.intersectRay(U,b,k),!1)}function V(a,c,b,k,f,h){d.vec3.cross(D,a,c);d.vec3.subtract(E,a,c);d.vec3.length(a)<=
f||!k.aboveGround?(d.vec3.cross(b,E,k.eye),a=d.vec3.dot(a,c)/(d.vec3.length(a)*d.vec3.length(c)),h=Math.cos(l.clamp(l.cyclicalPI.normalize(l.deg2rad(h)),0,e.TiltThresholdPanningSpeed)),c=-l.acos(a)-Math.max(0,d.vec3.length(c)-f)/(h*f)):(d.vec3.subtract(W,k.eye,k.center),d.vec3.cross(b,E,W),c=-d.vec3.length(E)/f);d.vec3.normalize(b,b);d.vec3.scale(b,b,d.vec3.length(D));return c}function M(a,c,b,d){d=Math.cos(l.clamp(l.cyclicalPI.normalize(l.deg2rad(d)),0,e.TiltThresholdPanningSpeed));c=c>b?-(c-b)/
(d*b):c<-b?Math.PI-(c+b)/(d*b):l.acos(c/b);return((a>b?-(a-b)/(d*b):a<-b?Math.PI-(a+b)/(d*b):l.acos(a/b))-c)*b}function X(a,c,b,k,f,h,e,m,g,l){g=M(a[2],c[2],e.radius,g);c=l?M(a[0],c[0],e.radius,180):c[0]-a[0];a=Math.sin(m)*c-Math.cos(m)*g;m=Math.cos(m)*c+Math.sin(m)*g;d.vec3.normalize(Y,f);f=l?a/Math.sqrt(Math.abs(Math.pow(e.radius,2)-Math.pow(d.vec3.dot(b,Y),2))):a/e.radius;b=m/Math.sqrt(Math.abs(Math.pow(e.radius,2)-Math.pow(d.vec3.dot(b,k),2)));la.vec2.set(h,f,b)}function Z(a,c,b,k,f,e,g,m,l,n){d.vec3.cross(D,
a,c);z.coordinateSystemFromOneAxisAndNormalVector(e.up,e.eye,F,G,H);z.coordinateSystemFromOneAxisAndNormalVector([0,0,1],e.eye,q,r,aa);d.vec3.copy(b,r);d.vec3.copy(k,q);d.vec3.normalize(b,b);d.vec3.scale(b,b,d.vec3.length(D));z.vectorCoordinates(a,d.vec3.normalize(G,G),d.vec3.normalize(H,H),d.vec3.normalize(F,F),ba);z.vectorCoordinates(c,G,H,F,ca);X(ba,ca,a,q,r,f,g,m,l,n)}function da(a,c,b,k,e,h,g){n.mat4.identity(t);n.mat4.identity(u);n.mat4.identity(v);n.mat4.rotate(t,t,e,k);n.mat4.rotate(u,u,g,
h);n.mat4.multiply(v,t,u);d.vec3.subtract(c,a,b);d.vec3.transformMat4(c,c,v);d.vec3.add(c,c,b)}function ea(a,c,b,k,e,h){n.mat4.identity(t);n.mat4.identity(u);n.mat4.identity(v);n.mat4.rotate(t,t,k,b);n.mat4.rotate(u,u,h,e);n.mat4.multiply(v,t,u);d.vec3.subtract(a.eye,a.eye,c);d.vec3.transformMat4(a.eye,a.eye,v);d.vec3.add(a.eye,a.eye,c);d.vec3.subtract(a.center,a.center,c);d.vec3.transformMat4(a.center,a.center,v);d.vec3.add(a.center,a.center,c);d.vec3.subtract(a.up,a.up,c);d.vec3.transformMat4(a.up,
a.up,v);d.vec3.add(a.up,a.up,c);a.markViewDirty()}function N(a,c,b,d,f,h,g,m){void 0===g&&(g=e.PreservingHeadingThreshold.Pole);void 0===m&&(m=e.PreservingHeadingThreshold.Angle);a=Math.abs(a[2])<b*g||Math.abs(c)>b;return(Math.abs(d)>Math.PI-m||Math.abs(d)<m)&&a&&h.aboveGround&&f<e.PreservingHeadingThreshold.Tilt?!0:!1}function fa(a,c,b,d,e,h){h?(p.axisAngle.fromPoints(b,d,ga),L(c,a.center,ga)):(b=V(b,d,ha,c,a.radius,e),L(c,a.center,p.axisAngle.wrapAxisAngle(ha,b)))}function ia(a,c,b,e,f,h,g){var k=
g?20:1;d.vec3.copy(x,e);I.copyFrom(c);for(var l,n=0;n<k&&1E-12<d.vec3.squaredDistance(b,x);n++)if(e=d.vec3.squaredDistance(b,x),Z(b,x,r,q,A,I,a,f,h,g),ea(I,a.center,q,A[1],r,A[0]),da(x,x,a.center,q,A[1],r,A[0]),l=d.vec3.squaredDistance(b,x),l<e||0===n)c.copyFrom(I);else break}Object.defineProperty(e,"__esModule",{value:!0});e.Earth=p.sphere.fromValues(P.earthRadius,g.vec3f64.create());e.normalizeCoordinate=function(a,c,b){b[0]=c[0]/(a.fullWidth/a.pixelRatio);b[1]=c[1]/(a.fullHeight/a.pixelRatio);
return b};e.rotationFromPointsAroundAxis=function(a,c,b){var e=w.sv3d.get(),f=w.sv3d.get(),h=w.sv3d.get();d.vec3.copy(f,a);d.vec3.copy(h,c);a=d.vec3.dot(f,b);c=d.vec3.dot(h,b);d.vec3.scale(e,b,a);d.vec3.subtract(f,f,e);d.vec3.normalize(f,f);d.vec3.scale(e,b,c);d.vec3.subtract(h,h,e);d.vec3.normalize(h,h);a=d.vec3.dot(f,h);d.vec3.cross(e,b,f);b=d.vec3.dot(h,e);return Math.atan2(b,a)};e.normalizeRotationDelta=function(a){for(;a>Math.PI;)a-=2*Math.PI;for(;a<-Math.PI;)a+=2*Math.PI;return a};e.applyRotation=
L;e.intersectPlaneFromScreenPoint=function(a,c,b,d){return p.plane.intersectRay(a,p.ray.fromScreen(c,b,T),d)};e.applyZoomToPoint=function(a,c,b,e){var f=w.sv3d.get();b=1-b;d.vec3.subtract(f,c,a.eye);var h=d.vec3.length(f),k=h*(1-b);0<=b&&k<e&&(k=e,b=-(k-h)/h);1E-6>Math.abs(h-k)||(d.vec3.scale(f,f,b),d.vec3.add(a.eye,a.eye,f),d.vec3.lerp(a.center,a.center,c,b))};e.applyZoomOnSphere=function(a,c,b){c.getScreenCenter(ja);p.sphere.intersectScreen(a,c,ja,c.center);c.markViewDirty();a=c.distance;b*=a;1E-6>
Math.abs(a-b)||(b=d.vec3.scale(w.sv3d.get(),c.viewForward,b),d.vec3.subtract(c.eye,c.center,b),c.markViewDirty())};var ja=ka.createScreenPointArray();e.centroidOnSphere=function(a,c,b){Q(c,b);d.vec3.normalize(b,b);d.vec3.scale(b,b,a)};e.centroid=Q;e.onSurfaceTiltToEyeTiltGlobal=R;e.offSurfaceTiltToEyeTiltGlobal=function(a,c,b){return R(Math.PI/2,c,b)+(a-Math.PI/2)};var B;(function(a){a[a.Vertical=0]="Vertical";a[a.Horizontal=1]="Horizontal"})(B=e.PanMode||(e.PanMode={}));e.VerticalPanTresholds={Elevation:3E4,
Angle:l.deg2rad(8)};e.PreservingHeadingThreshold={Pole:.95,Angle:l.deg2rad(18),Tilt:45};e.TiltThresholdPanningSpeed=l.deg2rad(80);e.pickPointAndInitSphere=function(a,c,b,k){var f=g.vec3f64.create(),h=p.sphere.create(),l=!0;a.intersectScreen(b,f)?h.radius=d.vec3.length(f):(h.radius=c.aboveGround?Math.max(d.vec3.length(c.center),.9*e.Earth.radius):d.vec3.length(c.eye)-c.relativeElevation,k?S(h,c,b,f):l=p.sphere.intersectScreen(h,c,b,f));return{sphere:h,scenePickPoint:l?f:null}};e.decidePanMode=function(a,
c,b){var k=d.vec3.length(a.eye);if(Math.abs(k-e.Earth.radius)>e.VerticalPanTresholds.Elevation)return B.Horizontal;if(a.aboveGround===c.radius>k)return B.Vertical;d.vec3.subtract(J,a.eye,b);d.vec3.normalize(J,J);return Math.abs(.5*Math.PI-l.acos(d.vec3.dot(b,J)/d.vec3.length(b)))<e.VerticalPanTresholds.Angle?B.Vertical:B.Horizontal};var J=g.vec3f64.create();e.applyPanPlanar=function(a,c,b){d.vec3.subtract(O,b,c);d.vec3.subtract(a.eye,a.eye,O);d.vec3.subtract(a.center,a.center,O);a.markViewDirty()};
var O=g.vec3f64.create();e.sphereOrPlanePointFromScreenPoint=S;var C=g.vec3f64.create(),y=g.vec3f64.create(),U=p.plane.create();e.rotationAngleAndAxisDirectRotation=V;var W=g.vec3f64.create();e.lengthFromPoints=M;e.rotationAnglesHeadingPreserving=X;e.rotationAnglesAndAxesHeadingPreserving=Z;e.rotatePointAroundTwoAxes=da;e.applyRotationWithTwoAxes=ea;e.preserveHeadingThreshold=N;e.applyPanSphericalDirectRotation=fa;e.applyPanSphericalPreserveHeading=ia;e.panToPosition=function(a,c,b,k,f,h,g){N(b,d.vec3.dot(c.up,
b),a.radius,-l.cyclicalPI.normalize(l.deg2rad(f)),h,c,e.PreservingHeadingThreshold.Pole,e.PreservingHeadingThreshold.Angle)?ia(a,c,b,k,-l.cyclicalPI.normalize(l.deg2rad(f)),h,g):fa(a,c,b,k,h,g)};e.panMotionToRotationMatrix=function(a,c,b,e,f,h,g,m,p){if(N(a.center,d.vec3.dot(a.up,a.center),d.vec3.length(a.center),-l.cyclicalPI.normalize(l.deg2rad(h)),g,c))switch(a=-l.cyclicalPI.normalize(l.deg2rad(f)),z.coordinateSystemFromOneAxisAndNormalVector([0,0,1],c.eye,q,r,aa),f=b.translation[0]*e.pan,h=b.translation[1]*
e.pan,c=Math.max(Math.sqrt(Math.abs(1-Math.pow(d.vec3.dot(c.center,q),2)/Math.pow(d.vec3.length(c.center),2))),.5),g=-Math.cos(a)*h+Math.sin(a)*f,n.mat4.rotate(m.pan.matrix,m.pan.matrix,(Math.sin(a)*h+Math.cos(a)*f)/c,q),m.pan.enabled=!0,p.mode){case "pan":n.mat4.rotate(m.pan.matrix,m.pan.matrix,g,r);m.pan.enabled=!0;break;case "zoom":m.zoom=-b.translation[1]*e.zoom}else switch(a=c.eye,c=c.viewRight,a=d.vec3.cross(w.sv3d.get(),c,a),f=b.translation[0]*e.pan,0!==f&&(n.mat4.rotate(m.pan.matrix,m.pan.matrix,
-f,a),m.pan.enabled=!0),p.mode){case "pan":b=b.translation[1]*e.pan;0!==b&&(n.mat4.rotate(m.pan.matrix,m.pan.matrix,b,c),m.pan.enabled=!0);break;case "zoom":m.zoom=-b.translation[1]*e.zoom}};var q=g.vec3f64.create(),r=g.vec3f64.create(),aa=g.vec3f64.create(),F=g.vec3f64.create(),G=g.vec3f64.create(),H=g.vec3f64.create(),ba=g.vec3f64.create(),ca=g.vec3f64.create(),A=ma.vec2f64.create(),ga=p.axisAngle.create(),t=K.mat4f64.create(),u=K.mat4f64.create(),v=K.mat4f64.create(),x=g.vec3f64.create(),Y=g.vec3f64.create(),
E=g.vec3f64.create(),I=new na,D=g.vec3f64.create(),ha=g.vec3f64.create(),T={origin:g.vec3f64.create(),direction:g.vec3f64.create()}});