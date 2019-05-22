// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","./depthRange"],function(f,g,h){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function c(a){this.pluginContext=a;this.pluginsChanged=!1;this.renderPlugins=[];this.slots=[];for(a=0;19>a;++a)this.slots[a]=[]}c.prototype.add=function(a,b){this.renderPlugins.push(b);for(var d=0;d<a.length;++d)this.slots[a[d]].push(b);b.initializeRenderContext(this.pluginContext);this.pluginsChanged=!0};c.prototype.remove=function(a){this.renderPlugins=this.renderPlugins.filter(function(b){return b!==
a});for(var b=0;b<this.slots.length;++b)this.slots[b]=this.slots[b].filter(function(b){return b!==a});a.uninitializeRenderContext(this.pluginContext);this.pluginsChanged=!0};c.prototype.prepareRender=function(a){for(var b=0,d=this.renderPlugins;b<d.length;b++){var c=d[b];c.prepareRender&&c.prepareRender(a)}};c.prototype.render=function(a,b){b.slot=a;var d=!1,c=0;for(a=this.slots[a];c<a.length;c++){var e=a[c];e.render(b)&&(d=e.didRender=!0)}return d};c.prototype.queryDepthRange=function(a){var b=k;
b.near=Infinity;b.far=-Infinity;for(var d=0,c=this.renderPlugins;d<c.length;d++){var e=c[d];e.queryDepthRange&&(e=e.queryDepthRange(a))&&h.union(b,e,b)}return b};c.prototype.needsRender=function(){if(this.pluginsChanged)return!0;for(var a=0,b=this.renderPlugins;a<b.length;a++)if(b[a].needsRender)return!0;return!1};c.prototype.needsHighlight=function(){for(var a=0,b=this.renderPlugins;a<b.length;a++)if(b[a].needsHighlight)return!0;return!1};c.prototype.needsLinearDepth=function(){for(var a=0,b=this.renderPlugins;a<
b.length;a++)if(b[a].needsLinearDepth)return!0;return!1};c.prototype.resetNeedsRender=function(){this.pluginsChanged=!1;for(var a=0,b=this.renderPlugins;a<b.length;a++){var c=b[a];c.resetNeedsRender?c.resetNeedsRender():c.didRender&&(c.needsRender=!1,c.didRender=!1)}};return c}();g.RenderPluginManager=f;var k={near:0,far:0}});