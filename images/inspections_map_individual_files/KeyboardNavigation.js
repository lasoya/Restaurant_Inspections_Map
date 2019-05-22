// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.11/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/tsSupport/extendsHelper","../../state/controllers/GamepadKeyboardController","../../../input/InputHandler"],function(f,g,h,k,l){Object.defineProperty(g,"__esModule",{value:!0});f=function(f){function e(c,a,e){var b,d=f.call(this,!0)||this;d.view=c;d.disableMovements={pan:!0,zoom:!0,ascend:!0,rotate:!1,mode:"local"};d.keyToNumber=(b={},b[a.left]=0,b[a.right]=1,b[a.forward]=2,b[a.backward]=3,b[a.up]=4,b[a.down]=5,b[a.headingLeft]=6,b[a.headingRight]=7,b[a.tiltUp]=
8,b[a.tiltDown]=9,b);d.registerIncoming("key-down",e,function(a){return d.handleKeyDown(a)});d.registerIncoming("key-up",e,function(a){return d.handleKeyUp(a)});return d}h(e,f);e.prototype.handleKeyDown=function(c){if(!c.data.repeat){var a=this.keyToNumber[c.data.key];null!=a&&(this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active||(this.cameraControllerKeyboard=new k.GamepadKeyboardController(this.view,void 0,this.disableMovements),this.view.state.switchCameraController(this.cameraControllerKeyboard)),
this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.activateDirection(a),c.stopPropagation()))}};e.prototype.handleKeyUp=function(c){var a=this.keyToNumber[c.data.key];null!=a&&this.cameraControllerKeyboard&&this.cameraControllerKeyboard.active&&(this.cameraControllerKeyboard.deactivateDirection(a),c.stopPropagation())};return e}(l.InputHandler);g.KeyboardNavigation=f});