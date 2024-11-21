import{E as b}from"./index-hnr1oFTy.js";import{_ as M,h as E,c as v,a as m,b as I,w as p,F as _,r as h,o as w,d as R,p as P,e as T}from"./index-Do2SFHFE.js";import"./CesiumEarth-DSJv-lZu.js";class G{constructor(e){this._delegate=new Cesium.PrimitiveCollection,this._primitives=e.scene.primitives.add(this._delegate),this.img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAEACAYAAADSoXR2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjExQTg0NDEyMDEzQjExRUFBNDhBRjhGMUMzOUUyNTU0IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjExQTg0NDEzMDEzQjExRUFBNDhBRjhGMUMzOUUyNTU0Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MTFBODQ0MTAwMTNCMTFFQUE0OEFGOEYxQzM5RTI1NTQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6MTFBODQ0MTEwMTNCMTFFQUE0OEFGOEYxQzM5RTI1NTQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz41vRwAAAAE90lEQVR42uydyW4UMRCG3T2dgYSAEGs4sp44cCJBcGUJbwCvALwWPAI8ABwAiUVwgLBdkEikJEiAGMhkZqhfU1aa1sy0g+yaJPyWSupOpPjz0uVyucrJer2eG2fJ3ZgLAQhAgC0PgN8XIlkqgGLE75oih0WmRVZEvop0rHog18rnRe6IzInsthyCXFt+TuSKyGmRXZZDgK5eFrkv8l7kiUhrxN/JSo3pigSvcNmI1bCh3b5LK2+NqHyvyEF9x3z5HgqRRViOAXhW5JrCoNdei/y20gMYxhmRSyIXRY6JTMT4DENLW+SdyD19x/NajDmwmYIW79Hnn+MA4GJEAAIQgABJbMJB+n5Sl9zWZvR9DABUfkJkVt8fi3zUldAEoKl24Y2S1fPZEmBdZFHkkb4vxTLRQ5djbyUf0ncYrD/UADUB8MZno2Q19yx7gIqIAAQgAAEIQIAtYZT+85LvRnjQCoPKR3rQUgN4Y3ZeK30g8qps0qeeAzDn4TWD9+ySG+BBS90DaGnVg9a2tgnR4il9/jkOACoiAhCAAASIZpAAFl6yulO0JACo/IDrn6CedP1zxOciv6wAYNnAP3RVBeWtJQCWzG8iL/X9g4vkqNzMctzUXtintt2KM/aS+bmQaY90rb8CF6tSKiICEIAABCAAAQiwbfcFIWVCbUcc9bZDLKiYAKj4uOv7Bb+ILLj+8W7PCgC7Jhzv44Qdh9yrru8V61jPgd645gD2io+15RiC5ZA5ENNPmGmDmtrta9YAVEQE2FlrQUM/J6efU8cSAD87ojodBaccS6kgiiErGiq/qe93XT+3oGU5BJnbyKrIUs6BQZoQUEcrQ7CYagiGqeKiMgnXLXsg5uJUm/RQJKy8fGS7PMw6SgVQPrJFGZr0kCfUL/7IFjIzrLGpemBQ0kPbehL6I9vMjUh6oEVEAAIQgAAEIAABdpyj0qcK71YrqGUJANNrv+sHOcAiRpDDM1cTY1BEHk7kqyP/2Ac5vLEEQEG8aDnIoTb5ObZRWg5ywG5o1dX4ClNYxT7IISgJPsXGpLut9MCWU0S5bqkmdAa3LQEwcZDAfkZ3tthQfkwNkVeeD6kiuaUabcp6DpS9YyalrAdQ8bT1EFQVUabarND9fNuyB2gREYAABCAAAQhAAAIQoM770UgBXARCIr/koDogVlzgrWuxemBKd0m4JnBed0+5ZQ9gn3BK5LK+P4y5ewoB8DFiKO91COLFfwVuTCZV1hSoYw1APZCsFIkbN1Haaa87wwiKQe6eT27AEX6esPVVd8/kOOdAz/oz9FE0p+uGIKUeqE5C8xgSKiICEIAABCAAAQhAAAIQgAAEIAABCECA6AA+sbkREyDUUYlKD6ggZwzRkr8tewBhusisv+0in5qE/hFchoZTE0TL4p8sTbtIpyahQ4Ag5fKpSVBmfdDECvQTZjoM0U9N6KgkwH9xY7PXpPiCmq5yuaLVldHIO7jgNi5XfOEhCqNh9udHV/RnC5YAUDTftdV4/ivvwEoRVS9XXPWa1FIT5ird8jpSB+BDN3rO8AaGMnGy0I0QRYTvdk6NkOsucuhGCMAgI8Q0isaHbmAevNMhiD4P6iZhstANGiQE2PEGCRo2NcgAsQDwKnxWFdlT17/duWU1BJmuHz6A5bwbEsCScgh+qAHit3Jr1oooOPExdRBLbeJjSpuwuy30AAH+CDAAPH5ltESNYl4AAAAASUVORK5CYII="}updatePrimitives(e,t,n,a,l){let o=this.fromArray(e),c=this.computeEllipsePositions(o,n),d=this.computeEllipsePositions(o,a*.7),u=this.computeEllipsePositions(o,a);const r={geometryInstances:new Cesium.GeometryInstance({geometry:new Cesium.PolygonGeometry({polygonHierarchy:new Cesium.PolygonHierarchy(this.computeEllipsePositions(o,a*2)),perPositionHeight:!0}),asynchronous:!1})};let y=new Cesium.Primitive(r);y.appearance=new Cesium.EllipsoidSurfaceAppearance({material:Cesium.Material.fromType(Cesium.Material.CircleRingType,{color:Cesium.Color.fromCssColorString(l)})});let g=new Cesium.Primitive(r);g.appearance=new Cesium.EllipsoidSurfaceAppearance({material:Cesium.Material.fromType(Cesium.Material.CircleRotateType,{color:Cesium.Color.fromCssColorString(l),image:this.getCircleImage()})});let i=new Cesium.Primitive({geometryInstances:this.createCylinderInstance(c,d,t),appearance:new Cesium.EllipsoidSurfaceAppearance({material:Cesium.Material.fromType(Cesium.Material.CylinderFadeType,{color:Cesium.Color.fromCssColorString(l)})}),asynchronous:!1});Cesium.GroundPrimitive.initializeTerrainHeights().then(()=>{this._delegate.add(y),this._delegate.add(g),this._delegate.add(i)}),Cesium.Resource.fetchImage({url:this.img}).then(A=>{let C=new Cesium.Primitive({geometryInstances:this.createCylinderInstance(c,u,t),appearance:new Cesium.EllipsoidSurfaceAppearance({material:Cesium.Material.fromType(Cesium.Material.CylinderParticlesType,{color:Cesium.Color.fromCssColorString(l),image:this.getParticlesImage(A)})}),asynchronous:!1});this._delegate.add(C)})}computeEllipsePositions(e,t){let n=Cesium.EllipseGeometryLibrary.computeEllipsePositions({center:Cesium.Cartesian3.fromDegrees(e.lng,e.lat,e.alt,Cesium.Ellipsoid.WGS84),semiMajorAxis:t,semiMinorAxis:t,rotation:0,granularity:.005},!1,!0),a=Cesium.Cartesian3.unpackArray(n.outerPositions);return a.push(a[0]),a}getCircleImage(){let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d");return t.fillStyle="rgba(255,255,255,0)",t.strokeStyle="rgba(255, 255, 255,255)",t.setLineDash([50,50]),t.lineWidth=30,t.beginPath(),t.arc(256,256,150,0,Math.PI*2,!0),t.stroke(),t.restore(),e}createCylinderInstance(e,t,n){let a=t.slice(),l=t.length,o=2*l,c=[],d=1/(l-1),u=[],r=[];const y=(i,A=0)=>{let C=Cesium.Cartographic.fromCartesian(i);return C.height+=A,Cesium.Cartographic.toCartesian(C)};for(let i=0;i<l;i++){r.push(y(e[i],n)),c.push(i*d,0);let A=i+1,C=(i+1)%l,f=o-A;u.push(f-1,f,i),u.push(i,C,f-1)}for(let i in r)a.push(r[l-i-1]),c.push(1-i*d,1);let g=Cesium.PolygonGeometry.createGeometry(new Cesium.PolygonGeometry({polygonHierarchy:new Cesium.PolygonHierarchy(a),perPositionHeight:!0}));return g.indices=u,g.attributes.st.values=c,new Cesium.GeometryInstance({geometry:g})}getParticlesImage(e){let t=document.createElement("canvas");t.width=64,t.height=256;let n=t.getContext("2d");return n.clearRect(0,0,64,256),n.drawImage(e,0,0),n.drawImage(e,33,0),t}fromArray(e){let t={};return Array.isArray(e)&&(t.lng=e[0]||0,t.lat=e[1]||0,t.alt=e[2]||0,t.heading=e[3]||0,t.pitch=e[4]||0,t.roll=e[5]||0),t}}Cesium.Material.CircleRingType="CircleRing";Cesium.Material._materialCache.addMaterial(Cesium.Material.CircleRingType,{fabric:{type:Cesium.Material.CircleRingType,uniforms:{color:new Cesium.Color(1,0,0,.7)},source:`
    uniform vec4 color;
    czm_material czm_getMaterial(czm_materialInput materialInput){
      czm_material material = czm_getDefaultMaterial(materialInput);
      vec2 st = materialInput.st;
      vec2 center = st - vec2(0.5,0.5);
      float length = length(center) / 0.5;
      float time = 1. - abs(czm_frameNumber / 360. - 0.5);
      float param = 1. - step(length, 0.6); //大于0.6模糊，rate = 0.6
      float scale = param * length; // 0.6< length 返回0，反之返回1.
      float alpha = param * (1.0 - abs(scale - 0.8) / 0.2); // 0.8 < length 返回0，反之返回1.
      float param1 = step(length, 0.7); //小于0.5模糊
      float scale1 = param1 * length; // 0.6< length 返回0，反之返回1.
      alpha += param1 * (1.0 - abs(scale1 - 0.35) / 0.35); // 0.8 < length 返回0，反之返回1.
      material.diffuse = color.rgb * vec3(color.a);
      material.alpha = pow(alpha, 4.0);
      return material;
    }

     `},translucent:function(s){return!0}});Cesium.Material.CircleRotateType="CircleRotate";Cesium.Material._materialCache.addMaterial(Cesium.Material.CircleRotateType,{fabric:{type:Cesium.Material.CircleRotateType,uniforms:{color:new Cesium.Color(1,0,0,.7),image:Cesium.Material.DefaultImageId},source:`uniform vec4 color;
    uniform sampler2D image;
    czm_material czm_getMaterial(czm_materialInput materialInput){
      czm_material material = czm_getDefaultMaterial(materialInput);
      vec2 st = materialInput.st;
      vec2 center = st - vec2(0.5,0.5);
      float time = -czm_frameNumber * 3.1415926 / 180.;
      float sin_t = sin(time);
      float cos_t = cos(time);
      vec2 center_rotate = vec2(center.s * cos_t - center.t * sin_t + 0.5,center.s * sin_t + center.t * cos_t + 0.5);
      vec4 colorImage = texture(image,center_rotate);
      vec3 temp = colorImage.rgb * color.rgb;
      temp *= color.a;
      material.diffuse = temp;
      float length = 2. - length(center) / 0.5;
      material.alpha = colorImage.a * pow(length, 0.5);
      return material;
    }
    `},translucent:function(s){return!0}});Cesium.Material.CylinderFadeType="CylinderFade";Cesium.Material._materialCache.addMaterial(Cesium.Material.CylinderFadeType,{fabric:{type:Cesium.Material.CylinderFadeType,uniforms:{color:new Cesium.Color(1,0,0,.7)},source:`uniform vec4 color;
    czm_material czm_getMaterial(czm_materialInput materialInput){
      czm_material material = czm_getDefaultMaterial(materialInput);
      vec2 st = materialInput.st;
      float powerRatio = 1. / (fract(czm_frameNumber / 30.0) +  1.) ;
      float alpha = pow(1. - st.t,powerRatio);
      vec4 temp = vec4(color.rgb, alpha * color.a);
      material.diffuse = temp.rgb;
      material.alpha = temp.a;
      return material;
    }`},translucent:function(s){return!0}});Cesium.Material.CylinderParticlesType="CylinderParticles";Cesium.Material._materialCache.addMaterial(Cesium.Material.CylinderParticlesType,{fabric:{type:Cesium.Material.CylinderParticlesType,uniforms:{color:new Cesium.Color(1,0,0,.7),image:Cesium.Material.DefaultImageId},source:`uniform vec4 color;
      uniform sampler2D image;
      czm_material czm_getMaterial(czm_materialInput materialInput){
        czm_material material = czm_getDefaultMaterial(materialInput);
        vec2 st = materialInput.st;
        float time = fract(czm_frameNumber / 90.) ;
        vec2 new_st = fract(st- vec2(time,time));
        vec4 colorImage = texture(image, new_st);
        vec3 diffuse = colorImage.rgb;
        float alpha = colorImage.a;
        diffuse *= color.rgb;
        alpha *= color.a;
        material.diffuse = diffuse;
        material.alpha = alpha * pow(1. - st.t,color.a);
        return material;
      }
      `},translucent:function(s){return!0}});const D=s=>(P("data-v-f3fabb29"),s=s(),T(),s),S=D(()=>I("div",{id:"windy"},null,-1)),z={class:"toolPane"},N={__name:"index",setup(s){const e=E({cylinderShow:!1,length:2e3,topRadius:1,bottomRadius:200,color:"#ff0000"}),t=n=>{new G(viewer).updatePrimitives([120.38710189330764,31.145008271831585,0],e.length,e.topRadius,e.bottomRadius,e.color),viewer.camera.flyTo({destination:Cesium.Cartesian3.fromDegrees(120.38710189330764,31.145008271831585,1e4)})};return(n,a)=>{const l=h("el-slider"),o=h("el-form-item"),c=h("el-color-picker"),d=h("el-button"),u=h("el-form");return w(),v(_,null,[S,m(b),I("div",z,[m(u,{inline:!1,model:e,"label-width":"auto"},{default:p(()=>[m(o,{label:"高度"},{default:p(()=>[m(l,{modelValue:e.length,"onUpdate:modelValue":a[0]||(a[0]=r=>e.length=r),max:1e4,min:1},null,8,["modelValue"])]),_:1}),m(o,{label:"上半径"},{default:p(()=>[m(l,{modelValue:e.topRadius,"onUpdate:modelValue":a[1]||(a[1]=r=>e.topRadius=r),max:100,min:1},null,8,["modelValue"])]),_:1}),m(o,{label:"下半径"},{default:p(()=>[m(l,{modelValue:e.bottomRadius,"onUpdate:modelValue":a[2]||(a[2]=r=>e.bottomRadius=r),max:1e3,min:10},null,8,["modelValue"])]),_:1}),m(o,{label:"颜色"},{default:p(()=>[m(c,{modelValue:e.color,"onUpdate:modelValue":a[3]||(a[3]=r=>e.color=r)},null,8,["modelValue"])]),_:1}),m(o,{label:""},{default:p(()=>[m(d,{type:"primary",onClick:t},{default:p(()=>[R("光锥")]),_:1})]),_:1})]),_:1},8,["model"])])],64)}}},V=M(N,[["__scopeId","data-v-f3fabb29"]]);export{V as default};
