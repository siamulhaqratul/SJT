window.__require=function t(o,i,e){function s(c,h){if(!i[c]){if(!o[c]){var a=c.split("/");if(a=a[a.length-1],!o[a]){var r="function"==typeof __require&&__require;if(!h&&r)return r(a,!0);if(n)return n(a,!0);throw new Error("Cannot find module '"+c+"'")}c=a}var u=i[c]={exports:{}};o[c][0].call(u.exports,function(t){return s(o[c][1][t]||t)},u,u.exports,t,o,i,e)}return i[c].exports}for(var n="function"==typeof __require&&__require,c=0;c<e.length;c++)s(e[c]);return s}({GamePlay:[function(t,o){"use strict";cc._RF.push(o,"8a7b0n4ehpLA61t7oW19k1o","GamePlay"),cc.Class({extends:cc.Component,properties:{sprPlayer:cc.Node,sprEnemy:cc.Node,draw:cc.Node,draw2:cc.Node,sprCTAWin:cc.Node},onLoad:function(){for(this.i=0,this.j=0,this.k=0,this.l=0,this.touchMoveLocation=[],this.enemyframerate=.0166667,this.playerframerate=.0166667,this.touch=!0,this.enemyLocations=[[484.07,282.64],[483.55,284.22],[484.07,291.58],[485.63,298.92],[486.15,303.31],[487.43,314.61],[486.9,415.44],[485.61,442.01],[484.84,447.45],[483.55,458.33],[481.2,466.4],[480.67,467.45],[478.57,475.3],[474.35,488.07],[471.48,500.2],[470.71,502.5],[467.12,518.39],[462.31,538.94],[459.24,551.49],[458.02,556.35],[457.25,558.65],[456.49,560.95],[452.65,573.49],[451.36,576.84],[448.77,590.69],[447.24,595.29],[445.95,598.64],[443.36,608.68],[442.59,610.98],[441.54,613.07],[439.72,619.77],[437.37,625.21],[435.55,630.65],[431.68,639.64],[429.34,644.03],[423.69,655.33],[419.81,663.07],[417.71,666.21],[415.12,670.6],[414.59,671.65],[410.68,678.13],[409.11,680.23],[403.63,687.76],[402.05,689.85],[401.53,690.9],[395.8,697.39],[393.7,700.01],[388.98,705.25],[387.93,706.83],[383.21,711.55],[381.63,713.12],[375.35,718.89],[373.77,720.46],[368.01,725.18],[366.44,726.23],[360.68,730.43],[359.11,732.01],[353.34,735.17],[351.25,736.22],[346,738.85],[345.47,739.38],[340.75,741.49],[339.17,742.01],[333.92,744.65],[329.19,746.75],[327.61,747.28],[322.89,749.39],[315.55,752.02],[312.93,753.07],[305.61,755.18],[289.92,759.59],[270.42,765.17],[260.17,767.23],[252.23,769.29],[240.09,773.17],[229.42,776.04],[218.53,778.91],[210.15,781.55],[203.34,783.65],[198.61,785.23],[195.45,787.34],[190.71,789.45],[185.46,791.55],[183.89,792.08],[179.16,794.19],[172.87,797.35],[170.25,798.92],[163.44,803.13],[162.91,804.17],[155.58,810.99],[148.31,821.87],[147.79,822.91],[146.25,827.51],[139.31,841.11],[135.35,850.57],[127.86,867.19],[126.64,872.05],[112.17,905.81],[109.73,910.67],[97.55,944.69],[95.12,949.55],[82.67,990.99],[79.01,1005.57],[77.79,1010.43],[71.11,1034.74],[69.89,1039.6],[61.81,1075.92],[56.8,1107.13],[55.58,1111.99],[54.36,1133.21],[53.59,1140.11],[54.87,1184.08],[55.91,1190.36],[56.43,1194.55],[57.47,1201.35],[58.51,1209.73],[59.03,1216.03]],cc.log(this.enemyLocations.length),this.g2=this.draw2.getComponent(cc.Graphics),this.k=0;this.k<this.enemyLocations.length-1;this.k++)this.g2.moveTo(this.enemyLocations[this.k][0]-320,this.enemyLocations[this.k][1]-568),this.g2.lineTo(this.enemyLocations[this.k+1][0]-320,this.enemyLocations[this.k+1][1]-568),this.g2.stroke();this.node.on(cc.Node.EventType.TOUCH_START,function(t){return this.touchStartLoc=t.getLocation(),!0},this),this.node.on(cc.Node.EventType.TOUCH_MOVE,function(t){1==this.touch&&(0==this.i?(this.touchMoveLocation[this.i]=t.getLocation(),this.i++):Math.floor(t.getLocation().x)!=Math.floor(this.touchMoveLocation[this.i-1].x)&&Math.floor(t.getLocation().y)!=Math.floor(this.touchMoveLocation[this.i-1].y)&&(this.touchMoveLocation[this.i]=t.getLocation(),this.touchMoveLocation[this.i]>=1135&&(this.touchEndLocation.y=1120),this.i++),this.g=this.draw.getComponent(cc.Graphics),this.g.moveTo(this.touchStartLoc.x-320,this.touchStartLoc.y-568),this.g.lineTo(t.getLocation().x-320,t.getLocation().y-568),this.g.stroke(),this.touchStartLoc=t.getLocation())},this),this.node.on(cc.Node.EventType.TOUCH_END,function(t){this.touchEndLocation=t.getLocation(),cc.log(this.touchEndLocation),this.touchMoveLocation[this.i]=t.getLocation(),this.touchMoveLocation.length>108?this.enemyframerate=this.touchMoveLocation.length/117*.0166667:this.playerframerate=108/this.touchMoveLocation.length*.0166667,this.touchEndLocation.y>=1080&&this.touchEndLocation.y<=1180?(this.schedule(function(){this.moveFish()},this.playerframerate),this.schedule(function(){this.moveEnemy()},this.enemyframerate)):(this.i=0,this.g.clear())},this)},moveFish:function(){this.j<=this.i&&this.touchEndLocation.y>=1080&&(this.sprPlayer.setPosition(this.touchMoveLocation[this.j].x-320,this.touchMoveLocation[this.j].y-648),this.j++,this.j==this.touchMoveLocation.length&&(this.touch=!1,this.sprCTAWin.active=!0,this.sprCTAWin.on(cc.Node.EventType.TOUCH_START,function(){cc.log("download2"),window.smartad_sdk()},this)))},moveEnemy:function(){this.l<108&&(this.sprEnemy.setPosition(this.enemyLocations[this.l][0]-320,this.enemyLocations[this.l][1]-648),this.l++,107==this.l&&(this.draw2.destroy(),this.touch=!1))},start:function(){},update:function(){this.sprPlayer.y>=340&&this.g.clear()}}),cc._RF.pop()},{}],Player:[function(t,o){"use strict";cc._RF.push(o,"8d348SWH51Dbr49ecEFwCCl","Player"),cc.Class({extends:cc.Component,properties:{sprEnemy:cc.Node,sprCTALose:cc.Node,sprCTAWin:cc.Node},onCollisionEnter:function(t){2==t.tag&&(console.log("intersect2"),this.node.active=!1,this.spine.setAnimation(1,"eat",!1),this.sprCTALose.active=!0,this.sprCTALose.on(cc.Node.EventType.TOUCH_START,function(){cc.log("download2"),window.smartad_sdk()},this),this.schedule(function(){this.removeCTA()},.001))},onLoad:function(){this.manager=cc.director.getCollisionManager(),this.manager.enabled=!0,this.spine=this.sprEnemy.getComponent(sp.Skeleton)},start:function(){},removeCTA:function(){this.sprCTAWin.active=!1}}),cc._RF.pop()},{}]},{},["GamePlay","Player"]);