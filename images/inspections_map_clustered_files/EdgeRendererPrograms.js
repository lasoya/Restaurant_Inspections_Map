// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./sources/resolver","../../../webgl/programUtils"],function(f,b,c,e){Object.defineProperty(b,"__esModule",{value:!0});var d=function(a){return e.glslifyDefineMap({MODE:{value:a.mode,options:{solid:"MODE_SOLID",sketch:"MODE_SKETCH",uber:"MODE_UBER"}},SILHOUETTE:a.silhouette,ANTIALIASING:a.antialiasing,SLICE:a.slice})};b.program={name:"edges",shaders:function(a){return{vertexShader:d(a)+c.resolveIncludes("edgeRenderer/edgeRenderer.vert"),fragmentShader:d(a)+c.resolveIncludes("edgeRenderer/edgeRenderer.frag")}},
attributes:{aPosition0:0,aPosition1:1,aComponentIndex:2,aPackedAttributes:3,aVariantOffset:4,aVariantStroke:5,aVariantExtension:6,aNormal:7,aNormalA:7,aNormalB:8,aSideness:9}}});