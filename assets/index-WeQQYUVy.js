import{E as k}from"./index-DQKEvUsp.js";import{a as T,C as P}from"./CesiumEarth-D0reHEmA.js";import{_ as O,c as _,a as C,b as G,w as h,F as X,r as V,o as Y,d as S}from"./index-DQxC938F.js";const W=`float hash(float x)
{
  return fract(21654.6512 * sin(385.51 * x));
}
float hash(vec2 p)
{
  return fract(1654.65157 * sin(15.5134763 * p.x + 45.5173247 * p.y + 5.21789));
}
vec2 hash2(vec2 p)
{
  return vec2(hash(p * .754), hash(1.5743 * p + 4.5476351));
}
vec2 add = vec2(1.0, 0.0);
vec2 noise2(vec2 x)
{
vec2 p = floor(x);
vec2 f = fract(x);
  f = f * f * (3.0 - 2.0 * f);
vec2 res = mix(mix(hash2(p),
hash2(p + add.xy), f.x),
mix(hash2(p + add.yx), hash2(p + add.xx), f.x), f.y);
  return res;
}
vec2 fbm2(vec2 x)
{
vec2 r = vec2(0.0);
float a = 1.0;
  for (int i = 0; i < 8; i++)
{
r += noise2(x) * a;
x *= 2.;
a *= .5;
}
  return r;
}
float dseg(vec2 ba, vec2 pa)
{
float h = clamp(dot(pa, ba) / dot(ba, ba), -0.2, 1.);
  return length(pa - ba * h);
}
uniform sampler2D colorTexture; 
uniform float fall_interval; 
uniform float mix_factor; 
in vec2 v_textureCoordinates; 
void main(void){
vec2 uv = gl_FragCoord.xy; 
float iTime = czm_frameNumber * fall_interval * clamp(fall_interval * 0.1, 0.01, 0.1); 
vec2 p = uv / czm_viewport.zw; 
vec2 d; 
vec2 tgt = vec2(1., -1.); 
float c = 0.; 
  if (p.y >= 0.) 
  c = (1. - (fbm2((p + .2) * p.y + .1 * iTime)).x) * p.y; 
else 
  c = (1. - (fbm2(p + .2 + .1 * iTime)).x) * p.y * p.y; 
vec3 col = vec3(0.); 
//用分布朗运动模拟乌云
vec3 col1 = c * vec3(.3, .5, 1.); 
float mdist = 100000.; 
float t = hash(floor(5. * iTime)); 
  tgt += 4. * hash2(tgt + t) - 1.5; 
  if (hash(t + 2.3) > .6) 
  for (int i = 0; i < 100; i++) {
vec2 dtgt = tgt - p; 
d = .05 * (vec2(-.5, -1.) + hash2(vec2(float(i), t))); 
//点d到选段dtgt的距离
float dist = dseg(d, dtgt); 
//求最小距离(https://blog.csdn.net/weixin_43751272/article/details/114017953
mdist = min(mdist, dist); 
tgt -= d; 
c = exp(-1.2 * dist) + exp(-55. * mdist); 
col = c * vec3(.7, .8, 1.); 
  } 
  //加上乌云
  col += col1; 
  out_FragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(col, 0.0), mix_factor); 
} 
`,R=function(o,t,e,n){if(!o)return;e=e||{};let l=e.id||j();if(o.entities.getById(l))return;let s=e.color||Cesium.Color.RED,v=e.outlineColor||s.withAlpha(1),a=e.outlineWidth||2;const u=new Cesium.ScreenSpaceEventHandler(o.canvas);let m,r,p,w=!0,f,g,i,d="左键按下开始绘制";u.setInputAction(function(c){let y=c.position,A=I(o,y);o.scene.screenSpaceCameraController.enableRotate=!1,o.scene.screenSpaceCameraController.enableZoom=!1,A&&(m=A,r=A,d="移动鼠标，左键抬起结束绘制")},Cesium.ScreenSpaceEventType.LEFT_DOWN),u.setInputAction(function(c){let y=c.endPosition;T(d,y,!0),m&&(r=I(o,y)),!Cesium.defined(p)&&m&&r&&(p=o.entities.add({rectangle:{coordinates:new Cesium.CallbackProperty(function(){let A,x,z,E;m.lng>r.lng?(A=m.lng,x=r.lng):(A=r.lng,x=m.lng),m.lat>r.lat?(z=m.lat,E=r.lat):(z=r.lat,E=m.lat);let U=Cesium.Cartesian3.fromDegrees(x,E),B=Cesium.Cartesian3.fromDegrees(A,E);g=Cesium.Cartesian3.distance(U,B);let H=Cesium.Cartesian3.fromDegrees(x,E),F=Cesium.Cartesian3.fromDegrees(x,z);f=Cesium.Cartesian3.distance(H,F);let N=Cesium.Cartesian3.fromDegrees(x,E),L=Cesium.Cartesian3.fromDegrees(A,z);return i=Cesium.Cartesian3.midpoint(N,L,new Cesium.Cartesian3),Cesium.Rectangle.fromDegrees(x,E,A,z)},!1),material:s,extrudedHeight:10,height:10,outline:!0,outlineColor:v,outlineWidth:a}}))},Cesium.ScreenSpaceEventType.MOUSE_MOVE),u.setInputAction(function(c){o.scene.screenSpaceCameraController.enableRotate=!0,o.scene.screenSpaceCameraController.enableZoom=!0,T(d,c.position,!1),p.LANG=g,p.WIDTH=f;let y=b(o,i);p.centerPoint=y,console.log(f,g,y),u.destroy(),w=!1,typeof n=="function"&&n(p)},Cesium.ScreenSpaceEventType.LEFT_UP),document.onkeydown=function(c){if(c.ctrlKey&&window.event.keyCode==90){if(!w)return!1;anchorpoints.pop(),anchorpoints.length==2}}};function I(o,t){let e=o.scene.drillPick(t),n=null,l=!1,s=!1;for(let a in e){let u=e[a];if((u&&u.primitive instanceof Cesium.Cesium3DTileFeature||u&&u.primitive instanceof Cesium.Cesium3DTileset||u&&u.primitive instanceof Cesium.Model)&&(l=!0),l&&(o.scene.pick(t),n=o.scene.pickPosition(t),n)){let m=Cesium.Cartographic.fromCartesian(n);m.height<0&&(m.height=0);let r=Cesium.Math.toDegrees(m.longitude),p=Cesium.Math.toDegrees(m.latitude),w=m.height;n=M(o,{lng:r,lat:p,alt:w})}}let v=o.terrainProvider instanceof Cesium.EllipsoidTerrainProvider;if(!l&&!v){let a=o.scene.camera.getPickRay(t);if(!a)return null;n=o.scene.globe.pick(a,o.scene),s=!0}if(!l&&!s&&v&&(n=o.scene.camera.pickEllipsoid(t,o.scene.globe.ellipsoid)),n){let a=b(o,n);return a.alt<0&&(n=M(o,a,.1)),a}return!1}function M(o,t,e){return t?Cesium.Cartesian3.fromDegrees(t.lng||t.lon,t.lat,t.alt=e||t.alt,Cesium.Ellipsoid.WGS84):Cesium.Cartesian3.ZERO}function b(o,t){let n=Cesium.Ellipsoid.WGS84.cartesianToCartographic(t);return{lng:Cesium.Math.toDegrees(n.longitude),lat:Cesium.Math.toDegrees(n.latitude),alt:n.height}}function j(o){let t=o||32,e="ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",n=e.length,l="";for(let s=0;s<t;s++)l+=e.charAt(Math.floor(Math.random()*n));return l}class J{constructor(t,e){t&&(this._viewer=t,this.boxEntity=null,this.rainParticleSize=e.rainParticleSize||12,this.emissionRate=e.emissionRate||4e3,this.height=e.height||4e4,this.ParticleSystem=null,this.image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAABl0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMC4xOdTWsmQAAANMSURBVFhH7dc9j41BGMbx3bVrNwQJEq+dlwpB+AB0FEoaJQU+goSOEC3fAAndNgpaGq0CBRWV0ImIOK7fyT2bk33snuMUu4qd5J9M5r7ua56ZuWfO7sRa++9br9drTIapMB1mwmyYK/SNidHQ9vPGbs2gzNaF9WFD2BK2hR1hV6FvTIyGVs54H9KSgtVYGdOtYXfYFw6F4+FkoW9MjIZWjlweo39EE1eilWwKO8OBcCKcDufChXCx0DcmRkMrRy6P0T+ihG1yW7onHA6nwvlwNVwPt8K9Qt+YGA2tHLk8Fj5i2UYQnJut8/UMjoYz4VK4Ee6HR2E+PCv0jYnR0MqRy4MXz35NLNkEg+JxfrbQKhhdCXfCw/A8vA5vwttC35gYDa0cuTx48eRds/2lJegLbZcico620moYPgkvw7vwKXwJ3wp9Y2I0tHLk8uDFk/dkTddtCTonX6qSFZPztKVWxfhD+Bq+h5/hV6FvTIyGVo5cHrx48p6q6botQQ+JonGdVLSicq621upM8COY9PcijInR0MqRy4MXT97TNV23JahQPCjutGulshWX87XFVjk4eWuDH0FDK0cuD148ec/UdN2WoCfVq+ZhcbddLxWuyJyzrV48eWttnIZWjlwevHjynq3pui1B77qn1evmgXHHXTOVrtja6pdqYjS0cuTy4MWT91xN122CJVq1D1j1I1CE28NgET4OCupzGLUIaeXIHSxC3ssWYbuG+4Orcy08CC/C+zDqNaSVI5cHL55Dr2F7iLzfHg9bdzO4Tq/Cx2ACq7TVJoW+MTEaWjlyefDiOfQhGnyKDwZffjncDU8DY6uzxc5ZsUHfmBgNrRy5PHiN9BTDD8bG4AfkSDgbvGYMrcrWOl9FptKhb0yMhlaOXB68eA79MWq7oBg3h73hWGBkNbbUuSouFe6aQd+YGA2tHLk8eA3/OdYIglpwJRUNA6uwlc5TUans28Edh74xMRpaOXJ58Br+B4lGVLSP8PW20DkqJuaulYk8MNA3JkZDK0fuwuQYqTVxJdo656eIVLLr5E57WLxu0DcmRkMrR+6/Td5aSwrOTfGoYNfIlnpQvGqeVugbE6OhldM/c4zdmkGZWc3K/GOy1lamTUz8Af7rUXt1Ah4SAAAAAElFTkSuQmCC")}CreateRangeAnalysis(){let t=this;R(t._viewer,[],{color:Cesium.Color.YELLOW.withAlpha(.1),outlineColor:Cesium.Color.YELLOW,outlineWidth:2},function(e){e.pottingPoint,t._viewer.entities.remove(e),t.addParticleSystem(e.centerPoint,e.LANG,e.WIDTH,t.height)})}addParticleSystem(t,e,n,l){let s=this;var v=s._viewer.entities.add({position:Cesium.Cartesian3.fromDegrees(t.lng,t.lat,l/2),box:{dimensions:new Cesium.Cartesian3(e,n,l),fill:!1,outline:!1}});const a=s.rainParticleSize,u=new Cesium.Cartesian2(a,a),m=new Cesium.Cartesian2(a*2,a*2);let r=new Cesium.Cartesian3;const p=function(f,g){r=Cesium.Cartesian3.normalize(f.position,r),Cesium.Cartesian3.multiplyByScalar(r,Cesium.Math.randomBetween(-30,-300),r),f.velocity=Cesium.Cartesian3.add(f.velocity,r,f.velocity),Cesium.Cartesian3.distance(s._viewer.scene.camera.position,f.position)};let w=s._viewer.scene.primitives.add(new Cesium.ParticleSystem({modelMatrix:s.computeModelMatrix(v,Cesium.JulianDate.now()),minimumSpeed:-1,maximumSpeed:0,lifetime:15,emitter:new Cesium.BoxEmitter(new Cesium.Cartesian3(e,n,l)),emitterModelMatrix:s.computeEmitterModelMatrix(),startScale:.5,endScale:1,image:s.image,emissionRate:s.emissionRate||4e3,startColor:new Cesium.Color(.27,.5,.7,0),endColor:new Cesium.Color(.27,.5,.7,.98),minimumImageSize:u,maximumImageSize:m,updateCallback:p}));s._viewer.entities.remove(v),s.ParticleSystem=w}clearAll(){this.ParticleSystem&&this._viewer.scene.primitives.remove(this.ParticleSystem),this.ParticleSystem=""}computeModelMatrix(t,e){var n=Cesium.Property.getValueOrUndefined(t.position);return Cesium.Transforms.eastNorthUpToFixedFrame(n)}computeEmitterModelMatrix(){let t=Cesium.HeadingPitchRoll.fromDegrees(0,0,0),e=new Cesium.TranslationRotationScale;return e.translation=Cesium.Cartesian3.fromElements(2.5,4,1),e.rotation=Cesium.Quaternion.fromHeadingPitchRoll(t),Cesium.Matrix4.fromTranslationRotationScale(e,new Cesium.Matrix4)}}class Q{constructor(t,e){t&&(this._viewer=t,this.boxEntity=null,this.snowParticleSize=e.snowParticleSize||12,this.emissionRate=e.emissionRate||4e3,this.height=e.height||4e4,this.ParticleSystem=null,this.image="data:image/png;base64,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")}CreateRangeAnalysis(){let t=this;R(t._viewer,[],{color:Cesium.Color.YELLOW.withAlpha(.1),outlineColor:Cesium.Color.YELLOW,outlineWidth:2},function(e){e.pottingPoint,t._viewer.entities.remove(e),t.addParticleSystem(e.centerPoint,e.LANG,e.WIDTH,t.height)})}addParticleSystem(t,e,n,l){let s=this;var v=s._viewer.entities.add({position:Cesium.Cartesian3.fromDegrees(t.lng,t.lat,l/2),box:{dimensions:new Cesium.Cartesian3(e,n,l),fill:!1,outline:!1}});const a=s.snowParticleSize,u=new Cesium.Cartesian2(a,a),m=new Cesium.Cartesian2(a*2,a*2);let r=new Cesium.Cartesian3;const p=function(f,g){r=Cesium.Cartesian3.normalize(f.position,r),Cesium.Cartesian3.multiplyByScalar(r,Cesium.Math.randomBetween(-30,-300),r),f.velocity=Cesium.Cartesian3.add(f.velocity,r,f.velocity),Cesium.Cartesian3.distance(s._viewer.scene.camera.position,f.position)};let w=s._viewer.scene.primitives.add(new Cesium.ParticleSystem({modelMatrix:s.computeModelMatrix(v,Cesium.JulianDate.now()),minimumSpeed:-1,maximumSpeed:0,lifetime:15,emitter:new Cesium.BoxEmitter(new Cesium.Cartesian3(e,n,l)),emitterModelMatrix:s.computeEmitterModelMatrix(),startScale:.5,minimumParticleLife:.5,maximumParticleLife:2,endScale:1,image:s.image,emissionRate:s.emissionRate||4e3,startColor:Cesium.Color.WHITE.withAlpha(0),endColor:Cesium.Color.WHITE.withAlpha(1),minimumImageSize:u,maximumImageSize:m,updateCallback:p}));s._viewer.entities.remove(v),s.ParticleSystem=w}clearAll(){this.ParticleSystem&&this._viewer.scene.primitives.remove(this.ParticleSystem),this.ParticleSystem=""}computeModelMatrix(t,e){var n=Cesium.Property.getValueOrUndefined(t.position);return Cesium.Transforms.eastNorthUpToFixedFrame(n)}computeEmitterModelMatrix(){let t=Cesium.HeadingPitchRoll.fromDegrees(0,0,0),e=new Cesium.TranslationRotationScale;return e.translation=Cesium.Cartesian3.fromElements(2.5,4,1),e.rotation=Cesium.Quaternion.fromHeadingPitchRoll(t),Cesium.Matrix4.fromTranslationRotationScale(e,new Cesium.Matrix4)}}class Z{constructor(t,e){if(!t)throw new Error("no viewer object!");e=e||{},this.visibility=Cesium.defaultValue(e.visibility,.1),this.color=Cesium.defaultValue(e.color,new Cesium.Color(.8,.8,.8,.5)),this._show=Cesium.defaultValue(e.show,!0),this.viewer=t,this.init()}init(){this.fogStage=new Cesium.PostProcessStage({name:"czm_fog",fragmentShader:this.fog(),uniforms:{visibility:()=>this.visibility,fogColor:()=>this.color}}),this.viewer.scene.postProcessStages.add(this.fogStage)}destroy(){!this.viewer||!this.fogStage||(this.viewer.scene.postProcessStages.remove(this.fogStage),this.fogStage.destroy(),delete this.visibility,delete this.color,this.fogStage=null)}show(t){this._show=t,this.fogState.enabled=this._show}fog(){return`uniform sampler2D colorTexture;
      uniform sampler2D depthTexture;
      uniform float visibility;
      uniform vec4 fogColor;
      in vec2 v_textureCoordinates; 
      void main(void) 
      { 
         vec4 origcolor = texture(colorTexture, v_textureCoordinates); 
         float depth = czm_readDepth(depthTexture, v_textureCoordinates); 
         vec4 depthcolor = texture(depthTexture, v_textureCoordinates); 
         float f = visibility * (depthcolor.r - 0.3) / 0.2; 
         if (f < 0.0) f = 0.0; 
         else if (f > 1.0) f = 1.0; 
         out_FragColor = mix(origcolor, fogColor, f); 
      }
`}}class K{constructor(t,e){if(!t)throw new Error("no viewer object!");e=e||{},this.snowSize=Cesium.defaultValue(e.snowSize,.02),this.snowSpeed=Cesium.defaultValue(e.snowSpeed,60),this.viewer=t,this.init()}init(){this.snowStage=new Cesium.PostProcessStage({name:"czm_snow",fragmentShader:this.snow(),uniforms:{snowSize:()=>this.snowSize,snowSpeed:()=>this.snowSpeed}}),this.viewer.scene.postProcessStages.add(this.snowStage)}destroy(){!this.viewer||!this.snowStage||(this.viewer.scene.postProcessStages.remove(this.snowStage),this.snowStage.destroy(),delete this.snowSize,delete this.snowSpeed,this.snowStage=null)}show(t){this.snowStage.enabled=t}snow(){return`uniform sampler2D colorTexture;
      in vec2 v_textureCoordinates;
      uniform float snowSpeed;
        uniform float snowSize;
      float snow(vec2 uv,float scale)
      {
        float time=czm_frameNumber/snowSpeed;
        float w=smoothstep(1.,0.,-uv.y*(scale/10.));if(w<.1)return 0.;
        uv+=time/scale;uv.y+=time*2./scale;uv.x+=sin(uv.y+time*.5)/scale;
        uv*=scale;vec2 s=floor(uv),f=fract(uv),p;float k=3.,d;
        p=.5+.35*sin(11.*fract(sin((s+p+scale)*mat2(7,3,6,5))*5.))-f;d=length(p);k=min(d,k);
        k=smoothstep(0.,k,sin(f.x+f.y)*snowSize);
        return k*w;
      }
      void main(void){
        vec2 resolution=czm_viewport.zw;
        vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
        vec3 finalColor=vec3(0);
        //float c=smoothstep(1.,0.3,clamp(uv.y*.3+.8,0.,.75));
        float c=0.;
        c+=snow(uv,30.)*.0;
        c+=snow(uv,20.)*.0;
        c+=snow(uv,15.)*.0;
        c+=snow(uv,10.);
        c+=snow(uv,8.);
        c+=snow(uv,6.);
        c+=snow(uv,5.);
        finalColor=(vec3(c));
        out_FragColor=mix(texture(colorTexture,v_textureCoordinates),vec4(finalColor,1),.5);
        }
        `}}async function q(){let o=await Cesium.Cesium3DTileset.fromUrl("https://z2586300277.github.io/3d-file-server/3dtiles/house/tileset.json",{customShader:new Cesium.CustomShader({uniforms:{u_lightColor:{type:Cesium.UniformType.VEC3,value:new Cesium.Cartesian3(1,1,1)},u_snowAlpha:{type:Cesium.UniformType.FLOAT,value:0}},fragmentShaderText:`
              #define MAX_RADIUS 2
              #define DOUBLE_HASH 0
              #define HASHSCALE1 .1031
              #define HASHSCALE3 vec3(.1031, .1030, .0973)
              float hash12(vec2 p)
              {
                  vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
                  p3 += dot(p3, p3.yzx + 19.19);
                  return fract((p3.x + p3.y) * p3.z);
              }
              vec2 hash22(vec2 p)
              {
                  vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);
                  p3 += dot(p3, p3.yzx+19.19);
                  return fract((p3.xx+p3.yz)*p3.zy);

              }
              void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                  vec3 positionEC = fsInput.attributes.positionEC;
                  vec3 positionMC = fsInput.attributes.positionMC;
                  vec2 uv = fsInput.attributes.texCoord_0 * 500.;
                  vec3 pos_dx = dFdx(positionEC);
                  vec3 pos_dy = dFdy(positionEC);
                  vec3 normalEC = normalize(cross(pos_dx, pos_dy));
                  vec4 positionWC = normalize(czm_inverseView * vec4(positionEC,1.0));
                  vec3 normalWC = normalize(czm_inverseViewRotation * normalEC);
                  float time = czm_frameNumber / 60.0;
                  vec2 p0 = floor(uv);
                  vec2 circles = vec2(0.);
                  for (int j = -MAX_RADIUS; j <= MAX_RADIUS; ++j)
                  {
                      for (int i = -MAX_RADIUS; i <= MAX_RADIUS; ++i)
                      {
                          vec2 pi = p0 + vec2(i, j);
                          #if DOUBLE_HASH
                          vec2 hsh = hash22(pi);
                          #else
                          vec2 hsh = pi;
                          #endif
                          vec2 p = pi + hash22(hsh);

                          float t = fract(0.3*time + hash12(hsh));
                          vec2 v = p - uv;
                          float d = length(v) - (float(MAX_RADIUS) + 1.)*t;

                          float h = 1e-3;
                          float d1 = d - h;
                          float d2 = d + h;
                          float p1 = sin(31.*d1) * smoothstep(-0.6, -0.3, d1) * smoothstep(0., -0.3, d1);
                          float p2 = sin(31.*d2) * smoothstep(-0.6, -0.3, d2) * smoothstep(0., -0.3, d2);
                          circles += 0.5 * normalize(v) * ((p2 - p1) / (2. * h) * (1. - t) * (1. - t));
                      }
                  }
                  circles /= float((MAX_RADIUS*2+1)*(MAX_RADIUS*2+1));
                  vec3 n = vec3(circles, sqrt(1. - dot(circles, circles)));
                  material.diffuse = mix(material.diffuse, vec3(1.0) , u_snowAlpha * smoothstep(0., .5, dot(positionWC.xyz, normalWC)));
                  material.diffuse *= min(max(0.0, dot(normalEC, czm_sunDirectionEC) * 1.0) + u_lightColor, 1.0);


              }
              `})});viewer.flyTo(o),viewer.scene.primitives.add(o);let t=setInterval(()=>{if(o.customShader.uniforms.u_snowAlpha.value>=1)return window.clearInterval(t),!1;o.customShader.uniforms.u_snowAlpha.value+=.01},20),e=new Cesium.PostProcessStage({fragmentShader:`
        precision highp float;
        uniform sampler2D colorTexture;
        uniform sampler2D depthTexture;
        in vec2 v_textureCoordinates;
        float time;
        #define HASHSCALE1 .1031
        #define HASHSCALE3 vec3(.1031, .1030, .0973)
        #define HASHSCALE4 vec3(.1031, .1030, .0973, .1099)
        float SIZE_RATE = 0.1;
        float XSPEED = 0.2;
        float YSPEED = 0.5;
        float LAYERS = 10.;
        float Hash11(float p)
        {
            vec3 p3  = fract(vec3(p) * HASHSCALE1);
            p3 += dot(p3, p3.yzx + 19.19);
            return fract((p3.x + p3.y) * p3.z); 
        }
        vec2 Hash22(vec2 p)
        {
            vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);
            p3 += dot(p3, p3.yzx+19.19);
            return fract((p3.xx+p3.yz)*p3.zy);
        }
        vec2 Rand22(vec2 co)
        {
            float x = fract(sin(dot(co.xy ,vec2(122.9898,783.233))) * 43758.5453);
            float y = fract(sin(dot(co.xy ,vec2(457.6537,537.2793))) * 37573.5913);
            return vec2(x,y);
        }
        vec3 SnowSingleLayer(vec2 uv,float layer){
            vec3 acc = vec3(0.3);
            uv = uv * (2.0+layer);
            float xOffset = uv.y * (((Hash11(layer)*2.-1.)*0.5+1.)*XSPEED);
            float yOffset = (YSPEED*time);
            uv += vec2(xOffset,yOffset);
            vec2 rgrid = Hash22(floor(uv)+(31.1759*layer));
            uv = fract(uv);
            uv -= (rgrid*2.-1.0) * 0.35;
            uv -=0.5;
            float r = length(uv);
            float circleSize = 0.08*(1.0+0.3*sin(time*SIZE_RATE));
            float val = smoothstep(circleSize,-circleSize,r);
            vec3 col = vec3(val,val,val)* rgrid.x ;
            return col;
        }

        void main()
        {
            time = czm_frameNumber / 120.0;
            vec3 col = vec3(0.3, .3, .3);
            // Normalized pixel coordinates (from 0 to 1)
            vec2 uv = gl_FragCoord.xy/czm_viewport.zw;
            uv *= vec2(czm_viewport.z/czm_viewport.w,1.0);
            vec3 acc = vec3(0,0,0);
            for (float i=0.;i<LAYERS;i++) {
                acc += SnowSingleLayer(uv,i); 
            }
            out_FragColor = mix( texture(colorTexture, v_textureCoordinates), vec4(acc,1.0) , 0.5);
        }

        `});viewer.scene.postProcessStages.add(e)}let D;const $=()=>{let o=new Cesium.MaterialAppearance({material:new Cesium.Material({fabric:{type:"MyImage",uniforms:{image:"http://127.0.0.1:5500//files/images/rain.png"}}}),fragmentShaderSource:` 
        #define MAX_RADIUS 2
        #define DOUBLE_HASH 0
        #define HASHSCALE1 .1031
        #define HASHSCALE3 vec3(.1031, .1030, .0973)
        in vec2 v_st;
        float hash12(vec2 p)
        {
          vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
            p3 += dot(p3, p3.yzx + 19.19);
            return fract((p3.x + p3.y) * p3.z);
        }
        
        vec2 hash22(vec2 p)
        {
          vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);
            p3 += dot(p3, p3.yzx+19.19);
            return fract((p3.xx+p3.yz)*p3.zy);
        
        }
        
        void main()
        {
            float iTime = czm_frameNumber / 120.;
            float resolution =20.;
            vec2 uv = v_st * resolution;
            vec2 p0 = floor(uv);
        
            vec2 circles = vec2(0.);
            for (int j = -MAX_RADIUS; j <= MAX_RADIUS; ++j)
            {
                for (int i = -MAX_RADIUS; i <= MAX_RADIUS; ++i)
                {
              vec2 pi = p0 + vec2(i, j);
                    #if DOUBLE_HASH
                    vec2 hsh = hash22(pi);
                    #else
                    vec2 hsh = pi;
                    #endif
                    vec2 p = pi + hash22(hsh);
        
                    float t = fract(0.3*iTime + hash12(hsh));
                    vec2 v = p - uv;
                    float d = length(v) - (float(MAX_RADIUS) + 1.)*t;
        
                    float h = 1e-3;
                    float d1 = d - h;
                    float d2 = d + h;
                    float p1 = sin(31.*d1) * smoothstep(-0.6, -0.3, d1) * smoothstep(0., -0.3, d1);
                    float p2 = sin(31.*d2) * smoothstep(-0.6, -0.3, d2) * smoothstep(0., -0.3, d2);
                    circles += 0.5 * normalize(v) * ((p2 - p1) / (2. * h) * (1. - t) * (1. - t));
                }
            }
            circles /= float((MAX_RADIUS*2+1)*(MAX_RADIUS*2+1));
        
            float intensity = mix(0.01, 0.15, smoothstep(0.1, 0.6, abs(fract(0.05*iTime + 0.5)*2.-1.)));
            vec3 n = vec3(circles, sqrt(1. - dot(circles, circles)));
            vec3 color = texture(image_0, uv/resolution - intensity*n.xy).rgb + 5.*pow(clamp(dot(n, normalize(vec3(1., 0.7, 0.5))), 0., 1.), 6.);
            out_FragColor = vec4(color, 0.5);
        }
        `});var t=Cesium.Cartesian3.fromDegreesArray([113.059339,22.645815,113.060204,22.645928,113.060253,22.642831,113.059298,22.642799]);viewer.scene.primitives.add(new Cesium.Primitive({geometryInstances:new Cesium.GeometryInstance({geometry:Cesium.PolygonGeometry.fromPositions({positions:t,height:70})}),appearance:o}))},ee=async()=>{D=await Cesium.Cesium3DTileset.fromUrl("https://z2586300277.github.io/3d-file-server/3dtiles/house/tileset.json",{customShader:new Cesium.CustomShader({uniforms:{u_lightColor:{type:Cesium.UniformType.VEC3,value:new Cesium.Cartesian3(1,1,1)},u_rainAlpha:{type:Cesium.UniformType.FLOAT,value:0}},fragmentShaderText:`
              #define MAX_RADIUS 2
              // Set to 1 to hash twice. Slower, but less patterns.
              #define DOUBLE_HASH 0
              // Hash functions shamefully stolen from:
              // https://www.shadertoy.com/view/4djSRW
              #define HASHSCALE1 .1031
              #define HASHSCALE3 vec3(.1031, .1030, .0973)
              float hash12(vec2 p)
              {
                  vec3 p3  = fract(vec3(p.xyx) * HASHSCALE1);
                  p3 += dot(p3, p3.yzx + 19.19);
                  return fract((p3.x + p3.y) * p3.z);
              }
              vec2 hash22(vec2 p)
              {
                  vec3 p3 = fract(vec3(p.xyx) * HASHSCALE3);
                  p3 += dot(p3, p3.yzx+19.19);
                  return fract((p3.xx+p3.yz)*p3.zy);

              }
              void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material) {
                  vec3 positionEC = fsInput.attributes.positionEC;
                  vec3 positionMC = fsInput.attributes.positionMC;
                  vec2 uv = fsInput.attributes.texCoord_0 * 500.;
                  vec3 pos_dx = dFdx(positionEC);
                  vec3 pos_dy = dFdy(positionEC);
                  vec3 normalEC = normalize(cross(pos_dx, pos_dy));
                  vec4 positionWC = normalize(czm_inverseView * vec4(positionEC,1.0));
                  vec3 normalWC = normalize(czm_inverseViewRotation * normalEC);
                  float time = czm_frameNumber / 60.0;
                  vec2 p0 = floor(uv);
                  vec2 circles = vec2(0.);
                  for (int j = -MAX_RADIUS; j <= MAX_RADIUS; ++j)
                  {
                      for (int i = -MAX_RADIUS; i <= MAX_RADIUS; ++i)
                      {
                          vec2 pi = p0 + vec2(i, j);
                          #if DOUBLE_HASH
                          vec2 hsh = hash22(pi);
                          #else
                          vec2 hsh = pi;
                          #endif
                          vec2 p = pi + hash22(hsh);

                          float t = fract(0.3*time + hash12(hsh));
                          vec2 v = p - uv;
                          float d = length(v) - (float(MAX_RADIUS) + 1.)*t;

                          float h = 1e-3;
                          float d1 = d - h;
                          float d2 = d + h;
                          float p1 = sin(31.*d1) * smoothstep(-0.6, -0.3, d1) * smoothstep(0., -0.3, d1);
                          float p2 = sin(31.*d2) * smoothstep(-0.6, -0.3, d2) * smoothstep(0., -0.3, d2);
                          circles += 0.5 * normalize(v) * ((p2 - p1) / (2. * h) * (1. - t) * (1. - t));
                      }
                  }
                  circles /= float((MAX_RADIUS*2+1)*(MAX_RADIUS*2+1));
                  vec3 n = vec3(circles, sqrt(1. - dot(circles, circles)));
                  material.diffuse = mix(material.diffuse, vec3((n * vec3(1.2)).r) , u_rainAlpha * smoothstep(0., .5, dot(positionWC.xyz, normalWC)));
                  material.diffuse *= min(max(0.0, dot(normalEC, czm_sunDirectionEC) * 1.0) + u_lightColor, 1.0);


              }
              `})}),viewer.flyTo(D),viewer.scene.primitives.add(D);let o=setInterval(()=>{if(D.customShader.uniforms.u_rainAlpha.value>=.5)return window.clearInterval(o),!1;D.customShader.uniforms.u_rainAlpha.value+=.05},20),t=new Cesium.PostProcessStage({fragmentShader:`
        uniform sampler2D colorTexture;
        in vec2 v_textureCoordinates;
        float hash(float x){
            return fract(sin(x*23.3)*13.13);
        }
        void main(){
            float time = czm_frameNumber / 120.0;
            vec2 resolution = czm_viewport.zw;
            vec2 uv=(gl_FragCoord.xy*2.-resolution.xy)/min(resolution.x,resolution.y);
            vec3 c=vec3(.6,.7,.8);
            float a=-.4;
            float si=sin(a),co=cos(a);
            uv*=mat2(co,-si,si,co);
            uv*=length(uv+vec2(0,8.9))*.3+1.;
            float v=1.-sin(hash(floor(uv.x*100.))*2.);
            float b=clamp(abs(sin(20.*time*v+uv.y*(5./(2.+v))))-.95,0.,1.)*20.;
            c*=v*b;
            out_FragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c, 1), 0.5);
        }`});viewer.scene.postProcessStages.add(t)};function te(){ee(),$()}const ie={class:"toolButton"},oe={__name:"index",setup(o){let t,e;const n=()=>{new P().rainEffect()},l=()=>{t=new J(viewer,{rainParticleSize:12,emissionRate:5e3,height:1e4}),t.CreateRangeAnalysis()},s=()=>{new K(viewer,{snowSize:.02,snowSpeed:60})},v=()=>{new Z(viewer,{visibility:.2,color:new Cesium.Color(.8,.8,.8,.3)})},a=()=>{new P().snowEffect()},u=()=>{e=new Q(viewer,{snowParticleSize:12,emissionRate:5e3,height:1e4}),e.CreateRangeAnalysis()},m=()=>{viewer.scene.postProcessStages.add(new Cesium.PostProcessStage({fragmentShader:W,uniforms:{mix_factor:.2,fall_interval:.7}}))},r=()=>{new P().setFogEffect()},p=()=>{viewer.scene.postProcessStages.removeAll()},w=()=>{q()},f=()=>{te()};return(g,i)=>{const d=V("el-button");return Y(),_(X,null,[C(k),G("div",ie,[C(d,{type:"primary",onClick:i[0]||(i[0]=c=>n())},{default:h(()=>i[11]||(i[11]=[S("雨(全部)")])),_:1}),C(d,{type:"primary",onClick:i[1]||(i[1]=c=>l())},{default:h(()=>i[12]||(i[12]=[S("雨(局部)")])),_:1}),C(d,{type:"primary",onClick:i[2]||(i[2]=c=>f())},{default:h(()=>i[13]||(i[13]=[S("雨景")])),_:1}),C(d,{type:"primary",onClick:i[3]||(i[3]=c=>s())},{default:h(()=>i[14]||(i[14]=[S("雪")])),_:1}),C(d,{type:"primary",onClick:i[4]||(i[4]=c=>w())},{default:h(()=>i[15]||(i[15]=[S("雪景")])),_:1}),C(d,{type:"primary",onClick:i[5]||(i[5]=c=>a())},{default:h(()=>i[16]||(i[16]=[S("雪(图片)")])),_:1}),C(d,{type:"primary",onClick:i[6]||(i[6]=c=>u())},{default:h(()=>i[17]||(i[17]=[S("雪(局部)")])),_:1}),C(d,{type:"primary",onClick:i[7]||(i[7]=c=>v())},{default:h(()=>i[18]||(i[18]=[S("雾")])),_:1}),C(d,{type:"primary",onClick:i[8]||(i[8]=c=>m())},{default:h(()=>i[19]||(i[19]=[S("闪电")])),_:1}),C(d,{type:"primary",onClick:i[9]||(i[9]=c=>r())},{default:h(()=>i[20]||(i[20]=[S("黑夜")])),_:1}),C(d,{type:"primary",onClick:i[10]||(i[10]=c=>p())},{default:h(()=>i[21]||(i[21]=[S("清除")])),_:1})])],64)}}},ae=O(oe,[["__scopeId","data-v-5588444c"]]);export{ae as default};
