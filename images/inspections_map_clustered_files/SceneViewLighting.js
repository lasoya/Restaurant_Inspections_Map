// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/Evented ../../../core/accessorSupport/decorators ../../../webscene/Lighting".split(" "),function(d,h,m,f,l,n,e,p){Object.defineProperty(h,"__esModule",{value:!0});d=function(d){function c(a){a=d.call(this,a)||this;a.positionTimezoneInfo={hours:0,minutes:0,seconds:0,autoUpdated:!0};a.cameraTrackingEnabled=!0;a.ambientOcclusionEnabled=!1;var b=
(new Date).getFullYear(),b=new Date("March 15, "+b+" 12:00:00 UTC");a._set("defaultDate",b);a._set("date",b);return a}m(c,d);g=c;c.fromWebsceneLighting=function(a){return new g(l({},a.cloneConstructProperties()))};Object.defineProperty(c.prototype,"defaultDate",{get:function(){return new Date(this._get("defaultDate").getTime())},set:function(a){var b=this._get("date")===this._get("defaultDate");a=new Date(a.getTime());this._set("defaultDate",a);b&&this._set("date",a)},enumerable:!0,configurable:!0});
Object.defineProperty(c.prototype,"date",{set:function(a){null!=a&&(this.positionTimezoneInfo.autoUpdated=!1,this._set("date",new Date(a.getTime())))},enumerable:!0,configurable:!0});c.prototype.autoUpdate=function(a,b){var c=this._calculateTimezoneOffset(this.positionTimezoneInfo);this.positionTimezoneInfo.hours=b.hours;this.positionTimezoneInfo.minutes=b.minutes;this.positionTimezoneInfo.seconds=b.seconds;b=null;null!=a&&(this.positionTimezoneInfo.autoUpdated=!0,b=this.date&&this.date.getTime(),
this._set("date",new Date(a.getTime())));var d=this._calculateTimezoneOffset(this.positionTimezoneInfo);c!==d&&(k.target=this,k.timezoneOffset=d,this.emit("timezone-will-change",k));if(null!=a)return b!==a.getTime()};c.prototype.clone=function(){var a=this._get("date")===this._get("defaultDate"),b=new g(l({},this.cloneConstructProperties(),{defaultDate:this.defaultDate,cameraTrackingEnabled:this.cameraTrackingEnabled,ambientOcclusionEnabled:this.ambientOcclusionEnabled}));a&&b._set("date",b._get("defaultDate"));
b.positionTimezoneInfo.autoUpdated=this.positionTimezoneInfo.autoUpdated;b.positionTimezoneInfo.hours=this.positionTimezoneInfo.hours;b.positionTimezoneInfo.minutes=this.positionTimezoneInfo.minutes;b.positionTimezoneInfo.seconds=this.positionTimezoneInfo.seconds;return b};c.prototype.cloneWithWebsceneLighting=function(a){var b=this.clone();null!=a.date&&(b.date=a.date);b.directShadowsEnabled=a.directShadowsEnabled;b.displayUTCOffset=a.displayUTCOffset;return b};c.prototype._calculateTimezoneOffset=
function(a){return Math.round(a.hours+a.minutes/60+a.seconds/3600)};var g;f([e.property({type:Boolean})],c.prototype,"cameraTrackingEnabled",void 0);f([e.property({type:Boolean})],c.prototype,"ambientOcclusionEnabled",void 0);f([e.property({type:Date})],c.prototype,"defaultDate",null);f([e.property({type:Date})],c.prototype,"date",null);return c=g=f([e.subclass("esri.views.3d.environment.SceneViewLighting")],c)}(e.declared(p,n));h.SceneViewLighting=d;var k={target:null,timezoneOffset:0};h.default=
d});