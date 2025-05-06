import{E as D}from"./index-DQKEvUsp.js";import{p as A,t as T,u as x,C as M}from"./CesiumEarth-D0reHEmA.js";import{_ as R,c as z,a as f,b as E,w as _,F as L,r as O,o as k,d as y}from"./index-DQxC938F.js";class V{constructor(e,t){e&&t&&(this.canvasEle=t,this.viewer=e,this.handler=void 0,this.lightCamera,this.pyramid,this.frustumPrimitive,this.viewershedPolygon)}initHandler(){this.handler&&(this.handler.destroy(),this.handler=void 0)}createViewshedAnalysis(e){let t=this,i=t.viewer.scene;t.initHandler(),t.clearAll(),t.handler=new Cesium.ScreenSpaceEventHandler(t.viewer.canvas),t.handler.setInputAction(s=>{i.screenSpaceCameraController.enableRotate=!1,i.screenSpaceCameraController.enableZoom=!1,i.globe.depthTestAgainstTerrain=!0;let a=i.pickPosition(s.position),n=t.cartesian3ToDegree(a);t.handler.setInputAction(function(r){let o=i.pickPosition(r.endPosition);if(Cesium.defined(o)){let l=t.cartesian3ToDegree(o),h=Cesium.Cartesian3.distance(o,a),m=t.getAngle(n[0],n[1],l[0],l[1]),c=t.getPitch(a,o);t.ViewShedOptions={viewPosition:a,endPosition:o,direction:m,pitch:c,horizontalViewAngle:90,verticalViewAngle:60,visibleAreaColor:Cesium.Color.GREEN,invisibleAreaColor:Cesium.Color.RED,visualRange:h},t.updateViewShed()}},Cesium.ScreenSpaceEventType.MOUSE_MOVE)},Cesium.ScreenSpaceEventType.LEFT_DOWN),t.handler.setInputAction(()=>{t.initHandler(),i.screenSpaceCameraController.enableRotate=!0,i.screenSpaceCameraController.enableZoom=!0,t.drawViewershed(e)},Cesium.ScreenSpaceEventType.LEFT_UP)}ReturnDistance(e,t){let i=Cesium.Cartographic.fromCartesian(e),s=Cesium.Cartographic.fromCartesian(t),a=new Cesium.EllipsoidGeodesic;return a.setEndPoints(i,s),a.surfaceDistance}getHeight(e,t,i){let s=Cesium.Cartographic.fromDegrees(e,t);return this.viewer.scene.sampleHeight(s,i)}cartesian3ToDegree(e){let i=this.viewer.scene.globe.ellipsoid.cartesianToCartographic(e),s=Cesium.Math.toDegrees(i.latitude),a=Cesium.Math.toDegrees(i.longitude),n=i.height;return[a,s,n]}getAngle(e,t,i,s){let a=Math.atan2(Math.abs(e-i),Math.abs(t-s));return i>=e?a=s<t?Math.PI-a:a:a=s>=t?2*Math.PI-a:Math.PI+a,a=a*180/Math.PI,a}getPitch(e,t){let i=Cesium.Transforms.eastNorthUpToFixedFrame(e);const s=Cesium.Cartesian3.subtract(t,e,new Cesium.Cartesian3);let a=Cesium.Matrix4.multiplyByPointAsVector(Cesium.Matrix4.inverse(i,i),s,s);return Cesium.Cartesian3.normalize(a,a),Cesium.Math.PI_OVER_TWO-Cesium.Math.acosClamped(a.z)}updateViewShed(){this.clear(),this.setLightCamera(),this.addVisualPyramid(),this.createFrustum()}clear(){this.pyramid&&(this.viewer.entities.removeById(this.pyramid.id),this.pyramid=void 0),this.frustumPrimitive&&(this.viewer.scene.primitives.remove(this.frustumPrimitive),this.frustumPrimitive=void 0),this.debugModelMatrixPrimitive&&(this.viewer.scene.primitives.remove(this.debugModelMatrixPrimitive),this.debugModelMatrixPrimitive=void 0)}clearAll(){this.clear(),this.viewershedPolygon&&(this.viewer.scene.primitives.remove(this.viewershedPolygon),this.viewershedPolygon=void 0)}addVisualPyramid(){let e=this.ViewShedOptions,t=e.viewPosition,i=Number(e.visualRange),s=Cesium.Transforms.eastNorthUpToFixedFrame(t);this.debugModelMatrixPrimitive=this.viewer.scene.primitives.add(new Cesium.DebugModelMatrixPrimitive({modelMatrix:s,length:5}));const a=e.horizontalViewAngle/2,n=e.verticalViewAngle/2,r=Cesium.Math.toDegrees(e.pitch),o=new Cesium.EllipsoidGraphics({radii:new Cesium.Cartesian3(i,i,i),minimumClock:Cesium.Math.toRadians(90-e.direction-a),maximumClock:Cesium.Math.toRadians(90-e.direction+a),minimumCone:Cesium.Math.toRadians(90-r-n),maximumCone:Cesium.Math.toRadians(90-r+n),fill:!1,outline:!0,subdivisions:256,stackPartitions:64,slicePartitions:64,outlineColor:Cesium.Color.YELLOWGREEN.withAlpha(.5)}),l=new Cesium.Entity({position:t,ellipsoid:o});this.pyramid=this.viewer.entities.add(l)}setLightCamera(){this.lightCamera||(this.lightCamera=new Cesium.Camera(this.viewer.scene));let e=this.ViewShedOptions,t=Number(e.visualRange);this.lightCamera.position=e.viewPosition,this.lightCamera.frustum.near=.1,this.lightCamera.frustum.far=t;const i=Cesium.Math.toRadians(e.horizontalViewAngle),s=Cesium.Math.toRadians(e.verticalViewAngle);this.lightCamera.frustum.aspectRatio=t*Math.tan(i/2)*2/(t*Math.tan(s/2)*2),this.lightCamera.frustum.fov=i>s?i:s,this.lightCamera.setView({destination:e.viewPosition,orientation:{heading:Cesium.Math.toRadians(e.direction||0),pitch:e.pitch||0,roll:0}})}createFrustum(){const e=new Cesium.Cartesian3,t=new Cesium.Matrix3,i=new Cesium.Quaternion,s=this.lightCamera.directionWC,a=this.lightCamera.upWC;let n=this.lightCamera.rightWC;n=Cesium.Cartesian3.negate(n,e);let r=t;Cesium.Matrix3.setColumn(r,0,n,r),Cesium.Matrix3.setColumn(r,1,a,r),Cesium.Matrix3.setColumn(r,2,s,r);let o=Cesium.Quaternion.fromRotationMatrix(r,i),l=new Cesium.GeometryInstance({geometry:new Cesium.FrustumOutlineGeometry({frustum:this.lightCamera.frustum,origin:this.ViewShedOptions.viewPosition,orientation:o}),id:"视椎体轮廓线"+Math.random().toString(36).substr(2),attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(new Cesium.Color(0,1,0,1)),show:new Cesium.ShowGeometryInstanceAttribute(!0)}});this.frustumPrimitive=this.viewer.scene.primitives.add(new Cesium.Primitive({geometryInstances:l,appearance:new Cesium.PerInstanceColorAppearance({flat:!0,translucent:!1,closed:!0})}))}add(e){let t=new Cesium.PolygonGeometry({polygonHierarchy:new Cesium.PolygonHierarchy(Cesium.Cartesian3.fromDegreesArray(e)),height:0,extrudedHeight:0,vertexFormat:Cesium.PerInstanceColorAppearance.VERTEX_FORMAT,stRotation:0,ellipsoid:Cesium.Ellipsoid.WGS84,granularity:Cesium.Math.RADIANS_PER_DEGREE,perPositionHeight:!1,closeTop:!0,closeBottom:!0,arcType:Cesium.ArcType.GEODESIC}),i=new Cesium.GeometryInstance({geometry:t,name:"ViewershedPolygon",attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.BLUE.withAlpha(.6)),show:new Cesium.ShowGeometryInstanceAttribute(!0)}});this.viewershedPolygon=this.viewer.scene.primitives.add(new Cesium.GroundPrimitive({geometryInstances:i,appearance:new Cesium.EllipsoidSurfaceAppearance({aboveGround:!0,material:new Cesium.Material({fabric:{type:"Image",uniforms:{image:this.returnImgae()}}})})}))}drawViewershed(e){const t=this.cartesian3ToDegree(this.ViewShedOptions.viewPosition),i=this.ViewShedOptions.visualRange,s=this.ViewShedOptions.direction;let a=this.computeBoundaryOptions(t,i,s);const n=a.bbox;let r=A([a.boundaryPoints]);const o=this.ViewShedOptions.visualRange/(e*1e3);let l=T(n,o,{mask:r}),h=this.createTargetPoints(l,o,t),m=x.train(h.values,h.lngs,h.lats,"exponential",0,100),c=x.grid([a.boundaryPoints],m,o/1e3);const u=["#ff000080","#ff000080","#ff000080","#ff000080","#ff000080","#ff000080","#00ff0080","#00ff0080","#00ff0080","#00ff0080","#00ff0080","#00ff0080"];this.canvasEle.width=3840,this.canvasEle.height=2160,x.plot(this.canvasEle,c,[n[0],n[2]],[n[1],n[3]],u),this.add(a.positionArr)}computeBoundaryOptions(e,t,i){let s=6378137,a=6356725;const n=e[0],r=e[1],o=[n,r,n,r];let l=[],h=[];l.push(n,r),h.push([n,r]);let m=i+45>360?i-45-360:i-45,c=m+90;for(let u=m;u<=c;u++){let d=t*Math.sin(u*Math.PI/180),v=t*Math.cos(u*Math.PI/180),C=a+(s-a)*(90-r)/90,w=C*Math.cos(r*Math.PI/180),P=n+d/w*180/Math.PI,p=r+v/C*180/Math.PI;l.push(P,p),h.push([P,p]),this.refreshBBox(o,P,p)}return h.push([n,r]),{positionArr:l,boundaryPoints:h,bbox:o}}refreshBBox(e,t,i){e[0]=t<e[0]?t:e[0],e[1]=i<e[1]?i:e[1],e[2]=t>e[2]?t:e[2],e[3]=i>e[3]?i:e[3]}createTargetPoints(e,t,i){let s=[],a=[this.frustumPrimitive,this.pyramid,this.debugModelMatrixPrimitive],n=[],r=[],o=[],l=this.getHeight(i[0],i[1],a);s.push({x:i[0],y:i[1],z:l});let h=this.ViewShedOptions.viewPosition;for(let m=0;m<e.features.length;m++){const u=e.features[m].geometry.coordinates,d=u[0],v=u[1];let C=this.getHeight(d,v,a),w=Cesium.Cartesian3.fromDegrees(d,v,C),P=Cesium.Cartesian3.normalize(Cesium.Cartesian3.subtract(w,h,new Cesium.Cartesian3),new Cesium.Cartesian3),p=new Cesium.Ray(h,P),S=this.viewer.scene.pickFromRay(p,a);S&&(this.ReturnDistance(w,S.position)>t?n.push(0):n.push(1),r.push(d),o.push(v))}return{values:n,lngs:r,lats:o}}returnImgae(){return this.canvasEle.toDataURL("image/png")}}class I{constructor(e){e&&(this.viewer=e,this.viewPosition=null,this.viewPositionEnd=null,this.viewDistance=null,this.viewHeading=null,this.viewPitch=null,this.horizontalViewAngle=null,this.verticalViewAngle=null,this.visibleAreaColor=Cesium.Color.GREEN,this.invisibleAreaColor=Cesium.Color.RED,this.enabled=!0,this.softShadows=!0,this.size=2048)}add(){this.createLightCamera(),this.createShadowMap(),this.drawFrustumOutline(),this.drawSketch(),this.createPostStage()}update(){this.clear(),this.add()}initHandler(){this.handler&&(this.handler.destroy(),this.handler=void 0)}createViewshedAnalysis(e,t,i){var s=e,a=t,n=i,r=null;this.size=n,this.handler=new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas),this.handler.setInputAction(o=>{this.viewer.scene.screenSpaceCameraController.enableRotate=!1,this.viewer.scene.screenSpaceCameraController.enableZoom=!1;var l=this.viewer.scene.pickPosition(o.position);l&&(this.viewPosition=l,this.viewPositionEnd=l,this.horizontalViewAngle=s,this.verticalViewAngle=a,this.handler.setInputAction(h=>{r=this.viewer.scene.pickPosition(h.endPosition),r&&(this.updatePosition(r),this.sketch||this.drawSketch())},Cesium.ScreenSpaceEventType.MOUSE_MOVE))},Cesium.ScreenSpaceEventType.LEFT_DOWN),this.handler.setInputAction(o=>{this.initHandler(),r=this.viewer.scene.pickPosition(o.position),this.updatePosition(r),this.update(),this.viewer.scene.screenSpaceCameraController.enableRotate=!0,this.viewer.scene.screenSpaceCameraController.enableZoom=!0},Cesium.ScreenSpaceEventType.LEFT_UP)}updatePosition(e){this.viewPositionEnd=e,this.viewDistance=Cesium.Cartesian3.distance(this.viewPosition,this.viewPositionEnd),this.viewHeading=this.getHeading(this.viewPosition,this.viewPositionEnd),this.viewPitch=this.getPitch(this.viewPosition,this.viewPositionEnd)}clear(){this.sketch&&(this.viewer.entities.remove(this.sketch),this.sketch=null),this.postStage&&(this.viewer.scene.postProcessStages.remove(this.postStage),this.postStage=null)}delete(){this.sketch&&(this.viewer.entities.remove(this.sketch),this.sketch=null),this.frustumOutline&&(this.viewer.scene.primitives.remove(this.frustumOutline),this.frustumOutline=null),this.postStage&&(this.viewer.scene.postProcessStages.remove(this.postStage),this.postStage=null)}createLightCamera(){this.lightCamera=new Cesium.Camera(this.viewer.scene),this.lightCamera.position=this.viewPosition,this.lightCamera.frustum.near=this.viewDistance*.001,this.lightCamera.frustum.far=this.viewDistance;const e=Cesium.Math.toRadians(this.horizontalViewAngle),t=Cesium.Math.toRadians(this.verticalViewAngle),i=this.viewDistance*Math.tan(e/2)*2/(this.viewDistance*Math.tan(t/2)*2);this.lightCamera.frustum.aspectRatio=i,e>t?this.lightCamera.frustum.fov=e:this.lightCamera.frustum.fov=t,this.lightCamera.setView({destination:this.viewPosition,orientation:{heading:Cesium.Math.toRadians(this.viewHeading||0),pitch:Cesium.Math.toRadians(this.viewPitch||0),roll:0}})}createShadowMap(){this.shadowMap=new Cesium.ShadowMap({context:this.viewer.scene.context,lightCamera:this.lightCamera,enabled:this.enabled,isPointLight:!0,pointLightRadius:this.viewDistance,cascadesEnabled:!1,size:this.size,softShadows:this.softShadows,normalOffset:!1,fromLightSource:!1}),this.viewer.scene.shadowMap=this.shadowMap}createPostStage(){const e=`
 #define USE_CUBE_MAP_SHADOW true
 uniform sampler2D colorTexture;
 uniform sampler2D depthTexture;
 in vec2 v_textureCoordinates;
 uniform mat4 camera_projection_matrix;
 uniform mat4 camera_view_matrix;
 uniform samplerCube shadowMap_textureCube;
 uniform mat4 shadowMap_matrix;
 uniform vec4 shadowMap_lightPositionEC;
 uniform vec4 shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness;
 uniform vec4 shadowMap_texelSizeDepthBiasAndNormalShadingSmooth;
 uniform float helsing_viewDistance; 
 uniform vec4 helsing_visibleAreaColor;
 uniform vec4 helsing_invisibleAreaColor;

 struct zx_shadowParameters
 {
     vec3 texCoords;
     float depthBias;
     float depth;
     float nDotL;
     vec2 texelStepSize;
     float normalShadingSmooth;
     float darkness;
 };
 
 float czm_shadowVisibility(samplerCube shadowMap, zx_shadowParameters shadowParameters)
 {
     float depthBias = shadowParameters.depthBias;
     float depth = shadowParameters.depth;
     float nDotL = shadowParameters.nDotL;
     float normalShadingSmooth = shadowParameters.normalShadingSmooth;
     float darkness = shadowParameters.darkness;
     vec3 uvw = shadowParameters.texCoords;
     depth -= depthBias;
     float visibility = czm_shadowDepthCompare(shadowMap, uvw, depth);
     return czm_private_shadowVisibility(visibility, nDotL, normalShadingSmooth, darkness);
 }
 vec4 getPositionEC(){
     return czm_windowToEyeCoordinates(gl_FragCoord);
 }
 vec3 getNormalEC(){
     return vec3(1.);
 }
 vec4 toEye(in vec2 uv,in float depth){
     vec2 xy=vec2((uv.x*2.-1.),(uv.y*2.-1.));
     vec4 posInCamera=czm_inverseProjection*vec4(xy,depth,1.);
     posInCamera=posInCamera/posInCamera.w;
     return posInCamera;
 }
 vec3 pointProjectOnPlane(in vec3 planeNormal,in vec3 planeOrigin,in vec3 point){
     vec3 v01=point-planeOrigin;
     float d=dot(planeNormal,v01);
     return(point-planeNormal*d);
 }
 float getDepth(in vec4 depth){
     float z_window=czm_unpackDepth(depth);
     z_window=czm_reverseLogDepth(z_window);
     float n_range=czm_depthRange.near;
     float f_range=czm_depthRange.far;
     return(2.*z_window-n_range-f_range)/(f_range-n_range);
 }
 float shadow(in vec4 positionEC){
     vec3 normalEC=getNormalEC();
     zx_shadowParameters shadowParameters;
     shadowParameters.texelStepSize=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.xy;
     shadowParameters.depthBias=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.z;
     shadowParameters.normalShadingSmooth=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.w;
     shadowParameters.darkness=shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness.w;
     vec3 directionEC=positionEC.xyz-shadowMap_lightPositionEC.xyz;
     float distance=length(directionEC);
     directionEC=normalize(directionEC);
     float radius=shadowMap_lightPositionEC.w;
     if(distance>radius)
     {
         return 2.0;
     }
     vec3 directionWC=czm_inverseViewRotation*directionEC;
     shadowParameters.depth=distance/radius-0.0003;
     shadowParameters.nDotL=clamp(dot(normalEC,-directionEC),0.,1.);
     shadowParameters.texCoords=directionWC;
     float visibility=czm_shadowVisibility(shadowMap_textureCube,shadowParameters);
     return visibility;
 }
 bool visible(in vec4 result)
 {
     result.x/=result.w;
     result.y/=result.w;
     result.z/=result.w;
     return result.x>=-1.&&result.x<=1.
     &&result.y>=-1.&&result.y<=1.
     &&result.z>=-1.&&result.z<=1.;
 }
 void main(){
     // 釉色 = 结构二维(颜色纹理, 纹理坐标)
     out_FragColor = texture(colorTexture, v_textureCoordinates);
     // 深度 = 获取深度(结构二维(深度纹理, 纹理坐标))
     float depth = getDepth(texture(depthTexture, v_textureCoordinates));
     // 视角 = (纹理坐标, 深度)
     vec4 viewPos = toEye(v_textureCoordinates, depth);
     // 世界坐标
     vec4 wordPos = czm_inverseView * viewPos;
     // 虚拟相机中坐标
     vec4 vcPos = camera_view_matrix * wordPos;
     float near = .001 * helsing_viewDistance;
     float dis = length(vcPos.xyz);
     if(dis > near && dis < helsing_viewDistance){
         // 透视投影
         vec4 posInEye = camera_projection_matrix * vcPos;
         // 可视区颜色
         // vec4 helsing_visibleAreaColor=vec4(0.,1.,0.,.5);
         // vec4 helsing_invisibleAreaColor=vec4(1.,0.,0.,.5);
         if(visible(posInEye)){
             float vis = shadow(viewPos);
             if(vis > 0.3){
                 out_FragColor = mix(out_FragColor,helsing_visibleAreaColor,.5);
             } else{
                 out_FragColor = mix(out_FragColor,helsing_invisibleAreaColor,.5);
             }
         }
     }
 }`,t=new Cesium.PostProcessStage({fragmentShader:e,uniforms:{shadowMap_textureCube:()=>(this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState")),Reflect.get(this.shadowMap,"_shadowMapTexture")),shadowMap_matrix:()=>(this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState")),Reflect.get(this.shadowMap,"_shadowMapMatrix")),shadowMap_lightPositionEC:()=>(this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState")),Reflect.get(this.shadowMap,"_lightPositionEC")),shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness:()=>{this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState"));const i=this.shadowMap._pointBias;return Cesium.Cartesian4.fromElements(i.normalOffsetScale,this.shadowMap._distance,this.shadowMap.maximumDistance,0,new Cesium.Cartesian4)},shadowMap_texelSizeDepthBiasAndNormalShadingSmooth:()=>{this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState"));const i=this.shadowMap._pointBias,a=new Cesium.Cartesian2;return a.x=1/this.shadowMap._textureSize.x,a.y=1/this.shadowMap._textureSize.y,Cesium.Cartesian4.fromElements(a.x,a.y,i.depthBias,i.normalShadingSmooth,new Cesium.Cartesian4)},camera_projection_matrix:this.lightCamera.frustum.projectionMatrix,camera_view_matrix:this.lightCamera.viewMatrix,helsing_viewDistance:()=>this.viewDistance,helsing_visibleAreaColor:this.visibleAreaColor,helsing_invisibleAreaColor:this.invisibleAreaColor}});this.postStage=this.viewer.scene.postProcessStages.add(t)}drawFrustumOutline(){const e=new Cesium.Cartesian3,t=new Cesium.Matrix3,i=new Cesium.Quaternion;this.lightCamera.positionWC;const s=this.lightCamera.directionWC,a=this.lightCamera.upWC;let n=this.lightCamera.rightWC;n=Cesium.Cartesian3.negate(n,e);let r=t;Cesium.Matrix3.setColumn(r,0,n,r),Cesium.Matrix3.setColumn(r,1,a,r),Cesium.Matrix3.setColumn(r,2,s,r);let o=Cesium.Quaternion.fromRotationMatrix(r,i),l=new Cesium.GeometryInstance({geometry:new Cesium.FrustumOutlineGeometry({frustum:this.lightCamera.frustum,origin:this.viewPosition,orientation:o}),id:Math.random().toString(36).substr(2),attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.YELLOWGREEN),show:new Cesium.ShowGeometryInstanceAttribute(!0)}});this.frustumOutline=this.viewer.scene.primitives.add(new Cesium.Primitive({geometryInstances:[l],appearance:new Cesium.PerInstanceColorAppearance({flat:!0,translucent:!1})}))}drawSketch(){this.sketch=this.viewer.entities.add({name:"sketch",position:this.viewPosition,orientation:new Cesium.CallbackProperty(()=>Cesium.Transforms.headingPitchRollQuaternion(this.viewPosition,Cesium.HeadingPitchRoll.fromDegrees(this.viewHeading-this.horizontalViewAngle,this.viewPitch,.5)),!1),ellipsoid:{radii:new Cesium.CallbackProperty(()=>new Cesium.Cartesian3(this.viewDistance,this.viewDistance,this.viewDistance),!1),innerRadii:new Cesium.Cartesian3(2,2,2),minimumClock:Cesium.Math.toRadians(-this.horizontalViewAngle/2),maximumClock:Cesium.Math.toRadians(this.horizontalViewAngle/2),minimumCone:Cesium.Math.toRadians(this.verticalViewAngle+7.75),maximumCone:Cesium.Math.toRadians(180-this.verticalViewAngle-7.75),fill:!1,outline:!0,subdivisions:256,stackPartitions:64,slicePartitions:64,outlineColor:Cesium.Color.YELLOWGREEN}})}getHeading(e,t){let i=new Cesium.Cartesian3,s=Cesium.Transforms.eastNorthUpToFixedFrame(e);return Cesium.Matrix4.inverse(s,s),Cesium.Matrix4.multiplyByPoint(s,t,i),Cesium.Cartesian3.normalize(i,i),Cesium.Math.toDegrees(Math.atan2(i.x,i.y))}getPitch(e,t){let i=new Cesium.Cartesian3,s=Cesium.Transforms.eastNorthUpToFixedFrame(e);return Cesium.Matrix4.inverse(s,s),Cesium.Matrix4.multiplyByPoint(s,t,i),Cesium.Cartesian3.normalize(i,i),Cesium.Math.toDegrees(Math.asin(i.z))}}class F{constructor(e){e&&(this.viewer=e,this.handler=null,this.label=null,this.startPoint=null,this.endPoint=null,this.entityPoint=[],this.polylineEntity=null,this.polylineEntityAnalysis=[],this.labeltext="")}initHandler(){this.handler&&(this.handler.destroy(),this.handler=void 0)}create(){let e=this,t=e.viewer.scene;e.initHandler(),e.deleteAll(),e.handler=new Cesium.ScreenSpaceEventHandler(e.viewer.canvas),e.handler.setInputAction(function(i){let s=e.getCatesian3FromPX(i.position);s&&(e.startPoint?(e.initHandler(),e.viewer.entities.remove(e.polylineEntity),e.viewer.entities.remove(e.label),e.polylineEntity=null,e.label=null,t.screenSpaceCameraController.enableRotate=!0,t.screenSpaceCameraController.enableZoom=!0,e.endPoint=s,e.drawPoint(e.endPoint),e.createLineOfSight(e.startPoint,e.endPoint)):(t.screenSpaceCameraController.enableRotate=!1,t.screenSpaceCameraController.enableZoom=!1,e.startPoint=s,e.drawPoint(e.startPoint),e.labeltext="移动鼠标，点击左键结束绘制",e.handler.setInputAction(function(a){let n=e.getCatesian3FromPX(a.startPosition);n&&(e.endPoint=n,e.polylineEntity||e.drawLine())},Cesium.ScreenSpaceEventType.MOUSE_MOVE)))},Cesium.ScreenSpaceEventType.LEFT_CLICK),e.handler.setInputAction(function(i){let s=e.getCatesian3FromPX(i.startPosition);e.endPoint=s,s&&(e.label||(e.labeltext="左键点击开始绘制",e.drawLable()))},Cesium.ScreenSpaceEventType.MOUSE_MOVE)}drawLine(){let e=this;var t=e.viewer.entities.add({polyline:{positions:new Cesium.CallbackProperty(function(){return[e.startPoint,e.endPoint]}),material:Cesium.Color.RED,width:5,classificationType:Cesium.ClassificationType.BOTH}});e.polylineEntity=t}drawLable(){let e=this,t=e.viewer.entities.add({position:new Cesium.CallbackProperty(function(){return e.endPoint}),label:{text:new Cesium.CallbackProperty(function(){return e.labeltext}),font:"14px monospace",showBackground:!0,horizontalOrigin:Cesium.HorizontalOrigin.LEFT,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,pixelOffset:new Cesium.Cartesian2(5,5),disableDepthTestDistance:Number.POSITIVE_INFINITY}});e.label=t}drawPoint(e){let i=this.viewer.entities.add({position:e,point:{color:Cesium.Color.YELLOW,pixelSize:5}});this.entityPoint.push(i)}createLineOfSight(e,t){let i=this,s=Cesium.Cartesian3.normalize(Cesium.Cartesian3.subtract(t,e,new Cesium.Cartesian3),new Cesium.Cartesian3),a=new Cesium.Ray(e,s),n=i.viewer.scene.pickFromRay(a,i.entityPoint);if(n){let r=i.distance(e,t),o=i.distance(e,n.position);i.distance(n.position,t),r>o?(i.drawPolylineAnalysis(e,n.position,Cesium.Color.GREEN),i.drawPolylineAnalysis(n.position,t,Cesium.Color.RED)):i.drawPolylineAnalysis(e,t,Cesium.Color.GREEN)}}drawPolylineAnalysis(e,t,i){let s=this.viewer.entities.add({polyline:{positions:[e,t],width:5,material:i}});this.polylineEntityAnalysis.push(s)}distance(e,t){let i=Cesium.Cartographic.fromCartesian(e),s=Cesium.Cartographic.fromCartesian(t),a=new Cesium.EllipsoidGeodesic;a.setEndPoints(i,s);let n=a.surfaceDistance;return n=Math.sqrt(Math.pow(n,2)+Math.pow(s.height-i.height,2)),n}deleteAll(){this.handler&&(this.handler.destroy(),this.handler=void 0),this.entityPoint&&(this.entityPoint.forEach(e=>{this.viewer.entities.remove(e)}),this.entityPoint=[]),this.polylineEntityAnalysis&&(this.polylineEntityAnalysis.forEach(e=>{this.viewer.entities.remove(e)}),this.polylineEntityAnalysis=[]),this.polylineEntity&&(this.viewer.entities.remove(this.polylineEntity),this.polylineEntity=null),this.label&&(this.viewer.entities.remove(this.label),this.label=null),this.startPoint=null,this.endPoint=null}getCatesian3FromPX(e){let t=this,i=t.viewer.scene.drillPick(e),s=null,a=!1,n=!1;for(let o in i){let l=i[o];if((l&&l.primitive instanceof Cesium.Cesium3DTileFeature||l&&l.primitive instanceof Cesium.Cesium3DTileset||l&&l.primitive instanceof Cesium.Model)&&(a=!0),a&&(t.viewer.scene.pick(e),s=t.viewer.scene.pickPosition(e),s)){let h=Cesium.Cartographic.fromCartesian(s);h.height<0&&(h.height=0);let m=Cesium.Math.toDegrees(h.longitude),c=Cesium.Math.toDegrees(h.latitude),u=h.height;s=t.transformWGS84ToCartesian({lng:m,lat:c,alt:u})}}let r=t.viewer.terrainProvider instanceof Cesium.EllipsoidTerrainProvider;if(!a&&!r){let o=t.viewer.scene.camera.getPickRay(e);if(!o)return null;s=t.viewer.scene.globe.pick(o,t.viewer.scene),n=!0}if(!a&&!n&&r&&(s=t.viewer.scene.camera.pickEllipsoid(e,t.viewer.scene.globe.ellipsoid)),s){let o=t.transformCartesianToWGS84(s);return o.alt<0&&(s=t.transformWGS84ToCartesian(o,.1)),s}return!1}transformWGS84ToCartesian(e,t){return e?Cesium.Cartesian3.fromDegrees(e.lng||e.lon,e.lat,e.alt=t||e.alt,Cesium.Ellipsoid.WGS84):Cesium.Cartesian3.ZERO}transformCartesianToWGS84(e){let i=Cesium.Ellipsoid.WGS84.cartesianToCartographic(e);return{lng:Cesium.Math.toDegrees(i.longitude),lat:Cesium.Math.toDegrees(i.latitude),alt:i.height}}}class B{constructor(e,t,i){this.viewer=e,this.terrainOr3DTiles=t,this.style=i,this.handler=null,this.tempEntities=[],this.lineEntities=[],this.linePositionList=[],this.firstPoint=null,this.lastPoint=null,this.labelText="",this.tempPoints=[],this._addDisListener(),this.endDraw=!1}_addDisListener(){let e=this.viewer,t=e.scene,i=this.linePositionList,s=this.firstPoint,a=this.lastPoint;this.handler=new Cesium.ScreenSpaceEventHandler(t.canvas),this.depthTest=e.scene.globe.depthTestAgainstTerrain,this.depthTest||(e.scene.globe.depthTestAgainstTerrain=!0);let n=!1,r=!1;const o=this,l=this.terrainOr3DTiles;this.handler.setInputAction(h=>{r&&(this._reDraw(),r=!1);const m=this._getPosition(h.position,l);m&&(n?s&&(a=m.clone(),i.length===1?(i.push(a),this.labelPosition=m.clone()):i.length>1&&(i.length=0,i.push(s),i.push(a)),this.lastPoint=a,this._drawPoint(a,Cesium.Color.MEDIUMBLUE),this._getSightLines.bind(this)(l,i,c=>{o.labelText=c.labelResult,c.line_s_end?(o._drawPoint_sightline(c.line_s_end),o._drawLine_slightline([o.firstPoint,c.line_s_end],Cesium.Color.BLUE),o._drawLine_slightline([c.line_s_end,a],Cesium.Color.RED)):o._drawLine_slightline(i),o._drawResult()}),r=!0,n=!1,this.endDraw=!0):(s=m.clone(),this.firstPoint=s,this._drawPoint(s,Cesium.Color.AQUA),n=!0,i.push(s)))},Cesium.ScreenSpaceEventType.LEFT_CLICK),this.handler.setInputAction(h=>{if(n){const m=o._getPosition(h.endPosition,l);s&&(a=m.clone(),i.length===1?(i.push(a),this.labelPosition=m.clone()):i.length>1&&(i.length=0,i.push(s),i.push(a)))}},Cesium.ScreenSpaceEventType.MOUSE_MOVE)}_getPositionTest(e){const t=this.viewer,i=t.scene;var s=t.camera.pickEllipsoid(e,t.scene.globe.ellipsoid);const{lon:a,lat:n,height:r}=this._car3ToLatLon(s);console.log("椭球体表面经纬度和高度"+a+" "+n+" "+r);var o=i.pick(e);if(i.pickPositionSupported&&Cesium.defined(o)){var l=t.scene.pickPosition(e);if(Cesium.defined(l)){const{lon:h,lat:m,height:c}=this._car3ToLatLon(l);console.log("模型："+ +h+" "+m+" "+c)}}else{let h=t.camera.getPickRay(e),m=t.scene.globe.pick(h,t.scene);if(Cesium.defined(m)){const{lon:c,lat:u,height:d}=this._car3ToLatLon(m);console.log("地形表面："+ +c+" "+u+" "+d)}}}_getPosition(e,t=0){const i=this.viewer,s=i.scene;let a=null;if(t){const n=s.pick(e);if(s.pickPositionSupported&&Cesium.defined(n)){const r=i.scene.pickPosition(e);Cesium.defined(r)&&(a=r)}else{const r=i.camera.getPickRay(e),o=i.scene.globe.pick(r,i.scene);Cesium.defined(o)&&(a=o)}}else{const n=i.camera.getPickRay(e),r=i.scene.globe.pick(n,i.scene);Cesium.defined(r)&&(a=r)}return a}_computePoint(e,t){const i=this._car3ToLatLon(e),s=this._car3ToLatLon(t);let a={};return i.height>s.height?a={lon:s.lon,lat:s.lat,height:i.height}:a={lon:i.lon,lat:i.lat,height:s.height},Cesium.Cartesian3.fromDegrees(a.lon,a.lat,a.height)}_reDraw(){this.tempPoints=[],this.linePositionList.length=0;for(let e of this.tempEntities)this.viewer.entities.remove(e);this.tempEntities=[],this.firstPoint=null,this.lastPoint=null,this.xys=[]}_drawLine(e){let t=this.style.lineStyle,i=this.viewer.entities.add({polyline:t});i.polyline.positions=new Cesium.CallbackProperty(function(){return e},!1),this.lineEntities.push(i)}_drawLine_slightline(e,t=null){let i=t?{width:2,material:t}:this.style.lineStyle,s=this.viewer.entities.add({polyline:i});s.polyline.positions=e,this.tempEntities.push(s)}_drawPoint(e,t=null){let i=this.viewer.entities.add({position:e,point:{pixelSize:10,color:t||Cesium.Color.GOLD}});this.tempEntities.push(i)}_drawPoint_sightline(e){this.terrainOr3DTiles;let t=this.viewer.entities.add({position:e,point:{pixelSize:10,color:Cesium.Color.GOLD}});this.tempEntities.push(t)}_drawResult(){const e=this;var t=this.viewer.entities.add({position:e.lastPoint,label:{font:"15px sans-serif",pixelOffset:new Cesium.Cartesian2(0,-30),fillColor:new Cesium.Color(1,1,1,1),horizontalOrigin:Cesium.HorizontalOrigin.LEFT,verticalOrigin:Cesium.VerticalOrigin.BOTTOM,showBackground:!0,disableDepthTestDistance:Number.POSITIVE_INFINITY}});t.label.text="是否可通视:"+e.labelText?e.labelText:"",this.tempEntities.push(t)}_car3ToLatLon(e){let t=Cesium.Cartographic.fromCartesian(e),i=Cesium.Math.toDegrees(t.longitude),s=Cesium.Math.toDegrees(t.latitude);return{lon:i,lat:s,height:t.height}}_getSightLinesForDEM(e,t=null){const i=this._car3ToLatLon(e[0]),s=this._car3ToLatLon(e[1]);i.height>=s.height;const a=20;let n=[];for(var r=new Array(a),o=0;o<a;++o){var l=o/(a-1),h=Cesium.Math.lerp(i.lon,s.lon,l),m=Cesium.Math.lerp(i.lat,s.lat,l),c=Cesium.Math.lerp(i.height,s.height,l);n.push([h,m,c]),r[o]=Cesium.Cartesian3.lerp(e[0],e[1],l,new Cesium.Cartesian3)}const u=r.map(C=>C.clone()),d=n.map(C=>Cesium.Cartographic.fromDegrees(...C)),v=Cesium.sampleTerrainMostDetailed(viewer.terrainProvider,d);Promise.resolve(v).then(function(C){let w=null;for(let p=1;p<C.length-1;p++){const S=C[p];if(!w&&S&&S.height>n[p][2]){w=p;break}}let P=w;if(t){const p=`起点坐标：${i.lon.toFixed(2)} | ${i.lat.toFixed(2)}| ${i.height.toFixed()}
                
终点坐标：${s.lon.toFixed(2)} | ${s.lat.toFixed(2)}| ${s.height.toFixed()}
                
通视结果: ${w>0?"否":"是"}`;t({line_s_end:u[w],line_e_start:u[P],labelResult:p})}})}_getSightLines(e,t,i=null){e?this._getSightLinesFor3Dtiles(t,i):this._getSightLinesForDEM(t,i)}_getSightLinesFor3Dtiles(e,t=null){const i=this,s=this._car3ToLatLon(e[0]),a=this._car3ToLatLon(e[1]),n=20;let r=new Array(n);for(var o=0;o<n;++o){var l=o/(n-1);r[o]=Cesium.Cartesian3.lerp(e[0],e[1],l,new Cesium.Cartesian3)}const h=r.map(m=>m.clone());this.viewer.scene.clampToHeightMostDetailed(r).then(function(m){let c=null;for(let d=1;d<m.length-1;d++){const v=m[d];if(!c&&v){const C=i._car3ToLatLon(v),w=i._car3ToLatLon(h[d]);if(C.height>w.height){c=d;break}}}let u=c;if(t){const d=`起点坐标：${s.lon.toFixed(2)} | ${s.lat.toFixed(2)}| ${s.height.toFixed()}
                
终点坐标：${a.lon.toFixed(2)} | ${a.lat.toFixed(2)}| ${a.height.toFixed()}
                
通视结果: ${c>0?"否":"是"}`;t({line_s_end:h[c],line_e_start:h[u],labelResult:d})}})}_test(e,t=null){const i=this.viewer;for(var s=20,a=new Array(s),n=0;n<s;++n){var r=n/(s-1);a[n]=Cesium.Cartesian3.lerp(e[0],e[1],r,new Cesium.Cartesian3)}for(var n=0;n<s;++n)i.entities.add({position:a[n],ellipsoid:{radii:new Cesium.Cartesian3(20,20,20),material:Cesium.Color.BLUE}})}remove(){var e=this.viewer;for(let t of this.tempEntities)e.entities.remove(t);for(let t of this.lineEntities)e.entities.remove(t);this.handler&&this.handler.destroy(),e.scene.globe.depthTestAgainstTerrain=this.depthTest}}const b=[108.959432836,34.217810875];function N(g,e){const t=new Cesium.Cartesian3,i=Cesium.Transforms.eastNorthUpToFixedFrame(g);return Cesium.Matrix4.inverse(i,i),Cesium.Matrix4.multiplyByPoint(i,e,t),Cesium.Cartesian3.normalize(t,t),Cesium.Math.toDegrees(Math.atan2(t.x,t.y))}function G(g,e){const t=new Cesium.Cartesian3,i=Cesium.Transforms.eastNorthUpToFixedFrame(g);return Cesium.Matrix4.inverse(i,i),Cesium.Matrix4.multiplyByPoint(i,e,t),Cesium.Cartesian3.normalize(t,t),Cesium.Math.toDegrees(Math.asin(t.z))}class H{constructor(e,t={}){this.viewer=e,this.viewPosition=t.viewPosition||Cesium.Cartesian3.fromDegrees(...b,500),this.viewPositionEnd=t.viewPositionEnd,this.viewDistance=this.viewPositionEnd?Cesium.Cartesian3.distance(this.viewPosition,this.viewPositionEnd):t.viewDistance||300,this.viewHeading=this.viewPositionEnd?N(this.viewPosition,this.viewPositionEnd):t.viewHeading||0,this.viewPitch=this.viewPositionEnd?G(this.viewPosition,this.viewPositionEnd):t.viewPitch||0,this.horizontalViewAngle=t.horizontalViewAngle||90,this.verticalViewAngle=t.verticalViewAngle||60,this.visibleAreaColor=t.visibleAreaColor||Cesium.Color.GREEN,this.invisibleAreaColor=t.invisibleAreaColor||Cesium.Color.RED,this.enabled=typeof t.enabled=="boolean"?t.enabled:!0,this.softShadows=typeof t.softShadows=="boolean"?t.softShadows:!0,this.size=t.size||2048,this.GLSL=`
    #define USE_CUBE_MAP_SHADOW true
    uniform sampler2D colorTexture;
    uniform sampler2D depthTexture;
    in vec2 v_textureCoordinates;
    uniform mat4 camera_projection_matrix;
    uniform mat4 camera_view_matrix;
    uniform samplerCube shadowMap_textureCube;
    uniform mat4 shadowMap_matrix;
    uniform vec4 shadowMap_lightPositionEC;
    uniform vec4 shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness;
    uniform vec4 shadowMap_texelSizeDepthBiasAndNormalShadingSmooth;
    uniform float helsing_viewDistance; 
    uniform vec4 helsing_visibleAreaColor;
    uniform vec4 helsing_invisibleAreaColor;
    struct zx_shadowParameters
    {
        vec3 texCoords;
        float depthBias;
        float depth;
        float nDotL;
        vec2 texelStepSize;
        float normalShadingSmooth;
        float darkness;
    };
    float czm_shadowVisibility(samplerCube shadowMap, zx_shadowParameters shadowParameters)
    {
        float depthBias = shadowParameters.depthBias;
        float depth = shadowParameters.depth;
        float nDotL = shadowParameters.nDotL;
        float normalShadingSmooth = shadowParameters.normalShadingSmooth;
        float darkness = shadowParameters.darkness;
        vec3 uvw = shadowParameters.texCoords;
        depth -= depthBias;
        float visibility = czm_shadowDepthCompare(shadowMap, uvw, depth);
        return czm_private_shadowVisibility(visibility, nDotL, normalShadingSmooth, darkness);
    }
    vec4 getPositionEC(){
        return czm_windowToEyeCoordinates(gl_FragCoord);
    }
    vec3 getNormalEC(){
        return vec3(1.);
    }
    vec4 toEye(in vec2 uv,in float depth){
        vec2 xy=vec2((uv.x*2.-1.),(uv.y*2.-1.));
        vec4 posInCamera=czm_inverseProjection*vec4(xy,depth,1.);
        posInCamera=posInCamera/posInCamera.w;
        return posInCamera;
    }
    vec3 pointProjectOnPlane(in vec3 planeNormal,in vec3 planeOrigin,in vec3 point){
        vec3 v01=point-planeOrigin;
        float d=dot(planeNormal,v01);
        return(point-planeNormal*d);
    }
    float getDepth(in vec4 depth){
        float z_window=czm_unpackDepth(depth);
        z_window=czm_reverseLogDepth(z_window);
        float n_range=czm_depthRange.near;
        float f_range=czm_depthRange.far;
        return(2.*z_window-n_range-f_range)/(f_range-n_range);
    }
    float shadow(in vec4 positionEC){
        vec3 normalEC=getNormalEC();
        zx_shadowParameters shadowParameters;
        shadowParameters.texelStepSize=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.xy;
        shadowParameters.depthBias=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.z;
        shadowParameters.normalShadingSmooth=shadowMap_texelSizeDepthBiasAndNormalShadingSmooth.w;
        shadowParameters.darkness=shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness.w;
        vec3 directionEC=positionEC.xyz-shadowMap_lightPositionEC.xyz;
        float distance=length(directionEC);
        directionEC=normalize(directionEC);
        float radius=shadowMap_lightPositionEC.w;
        if(distance>radius)
        {
            return 2.0;
        }
        vec3 directionWC=czm_inverseViewRotation*directionEC;
        shadowParameters.depth=distance/radius-0.0003;
        shadowParameters.nDotL=clamp(dot(normalEC,-directionEC),0.,1.);
        shadowParameters.texCoords=directionWC;
        float visibility=czm_shadowVisibility(shadowMap_textureCube,shadowParameters);
        return visibility;
    }
    bool visible(in vec4 result)
    {
        result.x/=result.w;
        result.y/=result.w;
        result.z/=result.w;
        return result.x>=-1.&&result.x<=1.
        &&result.y>=-1.&&result.y<=1.
        &&result.z>=-1.&&result.z<=1.;
    }
    void main(){
        // 釉色 = 结构二维(颜色纹理, 纹理坐标)
        out_FragColor = texture(colorTexture, v_textureCoordinates);
        // 深度 = 获取深度(结构二维(深度纹理, 纹理坐标))
        float depth = getDepth(texture(depthTexture, v_textureCoordinates));
        // 视角 = (纹理坐标, 深度)
        vec4 viewPos = toEye(v_textureCoordinates, depth);
        // 世界坐标
        vec4 wordPos = czm_inverseView * viewPos;
        // 虚拟相机中坐标
        vec4 vcPos = camera_view_matrix * wordPos;
        float near = .001 * helsing_viewDistance;
        float dis = length(vcPos.xyz);
        if(dis > near && dis < helsing_viewDistance){
            // 透视投影
            vec4 posInEye = camera_projection_matrix * vcPos;
            // 可视区颜色
            // vec4 helsing_visibleAreaColor=vec4(0.,1.,0.,.5);
            // vec4 helsing_invisibleAreaColor=vec4(1.,0.,0.,.5);
            if(visible(posInEye)){
                float vis = shadow(viewPos);
                if(vis > 0.3){
                    out_FragColor = mix(out_FragColor,helsing_visibleAreaColor,.5);
                } else{
                    out_FragColor = mix(out_FragColor,helsing_invisibleAreaColor,.5);
                }
            }
        }
    }`,this.update()}async addTileSet(){const t=await Cesium.Cesium3DTileset.fromUrl("http://earthsdk.com/v/last/Apps/assets/dayanta/tileset.json");viewer.scene.primitives.add(t),viewer.flyTo(t),this.viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(...b,10),orientation:{heading:Cesium.Math.toRadians(0,0),pitch:Cesium.Math.toRadians(-10),roll:0}})}createLightCamera(){this.lightCamera=new Cesium.Camera(this.viewer.scene),this.lightCamera.position=this.viewPosition,this.lightCamera.frustum.near=this.viewDistance*.001,this.lightCamera.frustum.far=this.viewDistance;const e=Cesium.Math.toRadians(this.horizontalViewAngle),t=Cesium.Math.toRadians(this.verticalViewAngle),i=this.viewDistance*Math.tan(e/2)*2/(this.viewDistance*Math.tan(t/2)*2);this.lightCamera.frustum.aspectRatio=i,e>t?this.lightCamera.frustum.fov=e:this.lightCamera.frustum.fov=t,this.lightCamera.setView({destination:this.viewPosition,orientation:{heading:Cesium.Math.toRadians(this.viewHeading||0),pitch:Cesium.Math.toRadians(this.viewPitch||0),roll:0}})}createShadowMap(){this.shadowMap=new Cesium.ShadowMap({context:this.viewer.scene.context,lightCamera:this.lightCamera,enabled:this.enabled,isPointLight:!0,pointLightRadius:this.viewDistance,cascadesEnabled:!1,size:this.size,softShadows:this.softShadows,normalOffset:!1,fromLightSource:!1}),this.viewer.scene.shadowMap=this.shadowMap}createPostStage(){const e=this.GLSL,t=new Cesium.PostProcessStage({fragmentShader:e,uniforms:{shadowMap_textureCube:()=>(this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState")),Reflect.get(this.shadowMap,"_shadowMapTexture")),shadowMap_matrix:()=>(this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState")),Reflect.get(this.shadowMap,"_shadowMapMatrix")),shadowMap_lightPositionEC:()=>(this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState")),Reflect.get(this.shadowMap,"_lightPositionEC")),shadowMap_normalOffsetScaleDistanceMaxDistanceAndDarkness:()=>{this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState"));const i=this.shadowMap._pointBias;return Cesium.Cartesian4.fromElements(i.normalOffsetScale,this.shadowMap._distance,this.shadowMap.maximumDistance,0,new Cesium.Cartesian4)},shadowMap_texelSizeDepthBiasAndNormalShadingSmooth:()=>{this.shadowMap.update(Reflect.get(this.viewer.scene,"_frameState"));const i=this.shadowMap._pointBias,a=new Cesium.Cartesian2;return a.x=1/this.shadowMap._textureSize.x,a.y=1/this.shadowMap._textureSize.y,Cesium.Cartesian4.fromElements(a.x,a.y,i.depthBias,i.normalShadingSmooth,new Cesium.Cartesian4)},camera_projection_matrix:this.lightCamera.frustum.projectionMatrix,camera_view_matrix:this.lightCamera.viewMatrix,helsing_viewDistance:()=>this.viewDistance,helsing_visibleAreaColor:this.visibleAreaColor,helsing_invisibleAreaColor:this.invisibleAreaColor}});this.postStage=this.viewer.scene.postProcessStages.add(t)}drawFrustumOutline(){const e=new Cesium.Cartesian3,t=new Cesium.Matrix3,i=new Cesium.Quaternion,s=this.lightCamera.directionWC,a=this.lightCamera.upWC;let n=this.lightCamera.rightWC;n=Cesium.Cartesian3.negate(n,e);const r=t;Cesium.Matrix3.setColumn(r,0,n,r),Cesium.Matrix3.setColumn(r,1,a,r),Cesium.Matrix3.setColumn(r,2,s,r);const o=Cesium.Quaternion.fromRotationMatrix(r,i),l=new Cesium.GeometryInstance({geometry:new Cesium.FrustumOutlineGeometry({frustum:this.lightCamera.frustum,origin:this.viewPosition,orientation:o}),id:Math.random().toString(36).substr(2),attributes:{color:Cesium.ColorGeometryInstanceAttribute.fromColor(Cesium.Color.YELLOWGREEN),show:new Cesium.ShowGeometryInstanceAttribute(!0)}});this.frustumOutline=this.viewer.scene.primitives.add(new Cesium.Primitive({geometryInstances:[l],appearance:new Cesium.PerInstanceColorAppearance({flat:!0,translucent:!1})}))}drawSketch(){this.sketch=this.viewer.entities.add({name:"sketch",position:this.viewPosition,orientation:Cesium.Transforms.headingPitchRollQuaternion(this.viewPosition,Cesium.HeadingPitchRoll.fromDegrees(this.viewHeading-this.horizontalViewAngle,this.viewPitch,0)),ellipsoid:{radii:new Cesium.Cartesian3(this.viewDistance,this.viewDistance,this.viewDistance),minimumClock:Cesium.Math.toRadians(-this.horizontalViewAngle/2),maximumClock:Cesium.Math.toRadians(this.horizontalViewAngle/2),minimumCone:Cesium.Math.toRadians(this.verticalViewAngle+7.75),maximumCone:Cesium.Math.toRadians(180-this.verticalViewAngle-7.75),fill:!1,outline:!0,subdivisions:256,stackPartitions:64,slicePartitions:64,outlineColor:Cesium.Color.YELLOWGREEN}})}add(){this.createLightCamera(),this.createShadowMap(),this.createPostStage(),this.drawFrustumOutline(),this.drawSketch(),this.addTileSet()}update(){this.clear(),this.add()}clear(){this.sketch&&(this.viewer.entities.removeById(this.sketch.id),this.sketch=null),this.postStage&&(this.viewer.scene.postProcessStages.remove(this.postStage),this.postStage=null),this.frustumOutline&&(this.viewer.scene.primitives.remove(this.frustumOutline),this.frustumOutline=null),this.tileset&&(this.viewer.scene.primitives.remove(this.tileset),this.tileset=null)}}const W={class:"toolButton"},U={__name:"index",setup(g){const e=()=>{new H(viewer)},t=()=>{new M().visibilityAnalysis()},i=()=>{new M().Create3DTiles("/src/assets/3DTiles/polyBuilding/tileset.json"),new V(viewer,document.getElementById("visualCanvas")).createViewshedAnalysis(20)},s=()=>{new M().Create3DTiles("/src/assets/3DTiles/polyBuilding/tileset.json"),new I(viewer).createViewshedAnalysis(90,60,2048)},a=()=>{new M().Create3DTiles("/src/assets/3DTiles/polyBuilding/tileset.json"),new F(viewer).create()},n=()=>{new B(viewer,1,{lineStyle:{width:2,material:Cesium.Color.CHARTREUSE,clampToGround:!0}})},r=()=>{new M().viewLineAreaAnalysis()};return(o,l)=>{const h=O("el-button");return k(),z(L,null,[f(D),l[7]||(l[7]=E("canvas",{id:"visualCanvas",style:{display:"none"}},null,-1)),E("div",W,[f(h,{type:"primary",onClick:e},{default:_(()=>l[0]||(l[0]=[y("可视域分析")])),_:1}),f(h,{type:"primary",onClick:t},{default:_(()=>l[1]||(l[1]=[y("射线可视域分析")])),_:1}),f(h,{type:"primary",onClick:i},{default:_(()=>l[2]||(l[2]=[y("圆锥可视域分析")])),_:1}),f(h,{type:"primary",onClick:s},{default:_(()=>l[3]||(l[3]=[y("圆锥可视域分析(glsl)")])),_:1}),f(h,{type:"primary",onClick:a},{default:_(()=>l[4]||(l[4]=[y("通视分析")])),_:1}),f(h,{type:"primary",onClick:n},{default:_(()=>l[5]||(l[5]=[y("点通视分析(DEM)")])),_:1}),f(h,{type:"primary",onClick:r},{default:_(()=>l[6]||(l[6]=[y("线范围通视分析")])),_:1})])],64)}}},Z=R(U,[["__scopeId","data-v-b7de0e72"]]);export{Z as default};
