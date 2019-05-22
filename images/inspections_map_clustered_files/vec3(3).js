// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./common"],function(C,e,z){Object.defineProperty(e,"__esModule",{value:!0});e.transformMat4=function(b,c,a){if(b.count!==c.count)z.logger.error("source and destination buffers need to have the same number of elements");else{var A=b.count,h=a[0],k=a[1],f=a[2],l=a[4],m=a[5],e=a[6],v=a[8],w=a[9],t=a[10],u=a[12],r=a[13];a=a[14];var n=b.typedBuffer;b=b.typedBufferStride;var d=c.typedBuffer;c=c.typedBufferStride;for(var g=0;g<A;g++){var p=g*b,q=g*c,x=d[q],y=d[q+1],q=d[q+2];
n[p]=h*x+l*y+v*q+u;n[p+1]=k*x+m*y+w*q+r;n[p+2]=f*x+e*y+t*q+a}}};e.transformMat3=function(b,c,a){if(b.count!==c.count)z.logger.error("source and destination buffers need to have the same number of elements");else{var e=b.count,h=a[0],k=a[1],f=a[2],l=a[3],m=a[4],B=a[5],v=a[6],w=a[7];a=a[8];var t=b.typedBuffer;b=b.typedBufferStride;var u=c.typedBuffer;c=c.typedBufferStride;for(var r=0;r<e;r++){var n=r*b,d=r*c,g=u[d],p=u[d+1],d=u[d+2];t[n]=h*g+l*p+v*d;t[n+1]=k*g+m*p+w*d;t[n+2]=f*g+B*p+a*d}}};e.scale=
function(b,c,a){var e=Math.min(b.count,c.count),h=b.typedBuffer;b=b.typedBufferStride;var k=c.typedBuffer;c=c.typedBufferStride;for(var f=0;f<e;f++){var l=f*b,m=f*c;h[l]=a*k[m];h[l+1]=a*k[m+1];h[l+2]=a*k[m+2]}}});