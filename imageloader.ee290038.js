parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"HugC":[function(require,module,exports) {
const t=document.getElementById("imageInput");function e(t,e,r){const c=t.getContext("2d"),g=e.getContext("2d"),h=c.getImageData(0,0,t.width,t.height);console.log("imageData = ",h);const s=h.width,f=h.height,u=Math.floor(s/r)||1,m=Math.floor(f/u);console.log("block width = ",u),console.log("new dimensions = ",r,"x",m);const w=new ImageData(r,m),{data:p}=w;for(let n=0;n<r;n+=1)for(let t=0;t<m;t+=1){const e=[0,0,0,0];for(let d=n*u;d<(n+1)*u;d+=1)for(let n=t*u;n<(t+1)*u;n+=1){const t=o(d,n,h);let a=0;for(;a<4;)e[a]+=t[a]/u**2,a+=1}let a=0;for(;a<4;)p[4*n+t*r*4+a]=Math.round(e[a]),a+=1}console.log(w),e.width=2*r,e.height=2*m,g.putImageData(w,0,0),n(p),g.putImageData(w,r,0),a(p,2.5),g.putImageData(w,0,m),d(p),g.putImageData(w,r,m);const I=document.querySelector("#brickCanvas");l(i(p,r),I)}function o(t,e,o){const n=e*(4*o.width)+4*t;return[o.data[n],o.data[n+1],o.data[n+2],o.data[n+3]]}function n(t){for(let e=0;e<t.length;e+=4){const o=Math.round((t[e]+t[e+1]+t[e+2])/3),n=t[e+3],a=o*n/255+255-n;t[e]=a,t[e+1]=a,t[e+2]=a,t[e+3]=255}}function a(t,e=1){let o=t.reduce((t,e,o)=>(o+1)%4&&e>t?e:t,0),n=t.reduce((t,e,o)=>(o+1)%4&&e<t?e:t,255);if(console.log("min = ",n,", max = ",o,", coef = ",e),n=(n=Math.round(n*e))>47?47:n,o=(o=Math.round(255-(255-o)*e))<160?160:o,console.log("min = ",n,", max = ",o),n!==o&&(0!==n||255!==o))for(let a=0;a<t.length;a+=4){const e=(t[a]+t[a+1]+t[a+2])/3;let d=Math.round(255/(o-n)*(e-n));d=d>255?255:d,t[a]=d,t[a+1]=d,t[a+2]=d}}function d(t,e=[63,127,191,255]){for(let o=0;o<t.length;o+=4){const n=Math.round((t[o]+t[o+1]+t[o+2])/3);let a=0;e.forEach(t=>{n>=t-16&&t>a&&(a=t)}),t[o]=a,t[o+1]=a,t[o+2]=a}}t.addEventListener("change",function(t){if(t.target.files){let o=t.target.files[0],n=new FileReader;n.readAsDataURL(o),n.onloadend=function(t){let o=new Image;o.src=t.target.result,o.onload=function(t){let n=document.createElement("canvas"),a=n.getContext("2d");n.width=o.width,n.height=o.height,a.drawImage(o,0,0),e(n,document.getElementById("myCanvas"),90)}}}});const r=[{id:0,border:0},{id:1,border:47},{id:2,border:111},{id:3,border:175},{id:4,border:239}];function i(t,e,o=r){const n={data:[],width:e,mapping:o};for(let a=0;4*a<t.length;a+=1){const e=Math.round((t[4*a]+t[4*a+1]+t[4*a+2])/3);let d=0;o.forEach(t=>{e>=t.border&&t.id>d&&(d=t.id)}),n.data[a]=d}return n}function l({data:t,width:e,mapping:o},n,a=16){const d=n.getContext("2d");n.width=e*a,n.height=t.length/e*a,t.map((t,n)=>{var r;const i=((null===(r=o.find(e=>e.id===t))||void 0===r?void 0:r.border)||0).toString(16).padStart(2,"0");d.fillStyle="#"+i+i+i;const l=n%e,c=Math.floor(n/e);d.fillRect(l*a,c*a,a-1,a-1)})}
},{}]},{},["HugC"], null)
//# sourceMappingURL=/_binocular_sandbox_/imageloader.ee290038.js.map