import{E as k}from"./index-DQKEvUsp.js";import{C as u}from"./CesiumEarth-D0reHEmA.js";import{_ as b,c as D,a as i,b as P,w as n,F as x,r as $,o as N,d as a}from"./index-DQxC938F.js";const p=function(e){e=e||{},this._definitionChanged=new Cesium.Event,this._color=void 0,this._colorSubscription=void 0,this._duration=void 0,this._durationSubscription=void 0,this.color=Cesium.defaultValue(e.color,Cesium.Color.fromBytes(0,255,255,255)),this.duration=Cesium.defaultValue(e.duration,45),this.count=Math.max(Cesium.defaultValue(e.count,2),1),this.gradient=Cesium.defaultValue(e.gradient,.1),this.gradient<0?this.gradient=0:this.gradient>1&&(this.gradient=1)};Object.defineProperties(p.prototype,{isConstant:{get:function(){return!1}},definitionChanged:{get:function(){return this._definitionChanged}}});p.prototype.getType=function(e){return Cesium.Material.CircleWaveType};p.prototype.getValue=function(e,o){return o||(o={}),o.color=Cesium.Property.getValueOrUndefined(this._color,e),o.duration=this._duration,o.count=this.count,o.gradient=this.gradient,o};p.prototype.equals=function(e){return this===e||e instanceof p&&Cesium.Cesium.Property.equals(this._color,e._color)};Object.defineProperties(p.prototype,{color:Cesium.createPropertyDescriptor("color"),duration:Cesium.createPropertyDescriptor("duration")});Cesium.Material.CircleWaveType="CircleWave";Cesium.Material._materialCache.addMaterial(Cesium.Material.CircleWaveType,{fabric:{type:Cesium.Material.CircleWaveType,uniforms:{color:new Cesium.Color(1,0,0,.7),duration:45,count:1,gradient:.1},source:`uniform vec4 color;
  uniform float duration;
  uniform float count;
  uniform float gradient;
  
  czm_material czm_getMaterial(czm_materialInput materialInput)
  {
      czm_material material = czm_getDefaultMaterial(materialInput);
      material.diffuse = 1.5 * color.rgb;
      vec2 st = materialInput.st;
      vec3 str = materialInput.str;
      float dis = distance(st, vec2(0.5, 0.5));
      float per = fract(czm_frameNumber / duration);
      if(abs(str.z) > 0.001){
          discard;
      }
      if(dis > 0.5){
          discard;
      } else {
          float perDis = 0.5 / count;
          float disNum;
          float bl = .0;
          for (int i = 0; i <= 10; i++) {
              if (float(i) <= count) {
                  disNum = perDis * float(i) - dis + per / count;
                  if (disNum > 0.0) {
                      if (disNum < perDis) {
                          bl = 1.0 - disNum / perDis;
                      } else if (disNum - perDis < perDis) {
                          bl = 1.0 - abs(1.0 - disNum / perDis);
                      }
                      material.alpha = pow(bl, gradient);
                  }
              }
          }
      }
      return material;
  }
  `},translucent:function(e){return!0}});const A=[],W=(e=10,o=1e4,c=[111,26])=>Array(e).fill("").map((d,y)=>({pos:[c[0]+Math.random()*5,c[1]+Math.random()*5],id:`${Math.random()}`,size:Math.abs(Math.random()*o-o/2)})),h=e=>{W().forEach(async d=>{setTimeout(()=>{const y=Math.random()<.5?Cesium.Color.RED.withAlpha(.5):Cesium.Color.YELLOW.withAlpha(.5);let f=d.size,m=d.size;A.push(d.id),e.entities.add({id:d.id,name:"Circle",position:Cesium.Cartesian3.fromDegrees(d.pos[0],d.pos[1],0),ellipse:{semiMinorAxis:new Cesium.CallbackProperty(()=>(f<1e5?f+=1e3:f=0,f),!1),semiMajorAxis:new Cesium.CallbackProperty(()=>(m<1e5?m+=1e3:m=0,m),!1),height:0,material:y,outline:!1}})},Math.random()*500)})},z={class:"toolButton"},I={__name:"index",setup(e){const o=()=>{new u().EllipsoidFade()},c=()=>{new u().CircleWave()};function d(){new u().circleSpreadPostStage()}function y(){new u().circleScanPostStage()}function f(){new u().waveScanEffect()}function m(){new u().circleScanEffect({id:"CircleScan",position:Cesium.Cartesian3.fromDegrees(108,34,10),color:Cesium.Color.MEDIUMTURQUOISE.withAlpha(.5),duration:2e3,border:50,radius:2e3})}const C=s=>{new u().pulseCircleScanEffec(s)},E=()=>{new u().clockCircleScanEffec()},v=()=>{new u().crossCircleScanEffec()},g=()=>{new u().imageCircleScanEffect()},w=()=>{new u().ElliposidFadeMaterialProperty()},M=()=>{viewer.entities.add({position:Cesium.Cartesian3.fromDegrees(108,34,100),ellipse:{height:0,semiMinorAxis:3e4,semiMajorAxis:3e4,material:new p({color:Cesium.Color.DARKCYAN.withAlpha(.8),count:3,gradient:.9})}}),viewer.zoomTo(viewer.entities)},S=()=>{h(viewer)};return(s,t)=>{const r=$("el-button");return N(),D(x,null,[i(k),P("div",z,[i(r,{type:"primary",onClick:t[0]||(t[0]=l=>d())},{default:n(()=>t[13]||(t[13]=[a("扩散圆")])),_:1}),i(r,{type:"primary",onClick:t[1]||(t[1]=l=>m())},{default:n(()=>t[14]||(t[14]=[a("扩散圆(粒子)")])),_:1}),i(r,{type:"primary",onClick:t[2]||(t[2]=l=>y())},{default:n(()=>t[15]||(t[15]=[a("动态扫描圆")])),_:1}),i(r,{type:"primary",onClick:t[3]||(t[3]=l=>o())},{default:n(()=>t[16]||(t[16]=[a("扩散圆(无地形)")])),_:1}),i(r,{type:"primary",onClick:t[4]||(t[4]=l=>c())},{default:n(()=>t[17]||(t[17]=[a("扩散圆圈(无地形)")])),_:1}),i(r,{type:"primary",onClick:t[5]||(t[5]=l=>M())},{default:n(()=>t[18]||(t[18]=[a("循环扩散圆")])),_:1}),i(r,{type:"primary",onClick:t[6]||(t[6]=l=>f())},{default:n(()=>t[19]||(t[19]=[a("波纹扫描圆")])),_:1}),i(r,{type:"primary",onClick:t[7]||(t[7]=l=>C("pulse"))},{default:n(()=>t[20]||(t[20]=[a("脉冲扫描圆")])),_:1}),i(r,{type:"primary",onClick:t[8]||(t[8]=l=>C("blur"))},{default:n(()=>t[21]||(t[21]=[a("模糊扫描圆")])),_:1}),i(r,{type:"primary",onClick:t[9]||(t[9]=l=>C("rotate"))},{default:n(()=>t[22]||(t[22]=[a("旋转扫描圆")])),_:1}),i(r,{type:"primary",onClick:t[10]||(t[10]=l=>C("time"))},{default:n(()=>t[23]||(t[23]=[a("钟摆扫描圆")])),_:1}),i(r,{type:"primary",onClick:t[11]||(t[11]=l=>C("fade"))},{default:n(()=>t[24]||(t[24]=[a("消渐扫描圆")])),_:1}),i(r,{type:"primary",onClick:t[12]||(t[12]=l=>C("diffuse"))},{default:n(()=>t[25]||(t[25]=[a("线性扩散圆")])),_:1}),i(r,{type:"primary",onClick:E},{default:n(()=>t[26]||(t[26]=[a("时钟扫描圆")])),_:1}),i(r,{type:"primary",onClick:v},{default:n(()=>t[27]||(t[27]=[a("十字圆环扫描圆")])),_:1}),i(r,{type:"primary",onClick:g},{default:n(()=>t[28]||(t[28]=[a("图片扫描圆")])),_:1}),i(r,{type:"primary",onClick:w},{default:n(()=>t[29]||(t[29]=[a("全球扩散圆")])),_:1}),i(r,{type:"primary",onClick:S},{default:n(()=>t[30]||(t[30]=[a("高危预警")])),_:1})])],64)}}},B=b(I,[["__scopeId","data-v-4c401ab8"]]);export{B as default};
