parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"yTJL":[function(require,module,exports) {
const o=e=>{for(let o=Math.floor(e.length-2);o>=0;o-=1){if(e[o]<=e[o+2]){const l=e[o];e[o]=e[o+2],e[o+2]=l}if(console.log(e.join(", ")),e[o]<=e[o+1]){const l=e[o];e[o]=e[o+1],e[o+1]=l}console.log(e.join(", "))}const l=e[0];return e[0]=e[e.length-1],e[e.length-1]=l,e.length>1?[...o(e.slice(0,e.length-1)),e[e.length-1]]:e},e=[23,1,34,15,165,312,59,12,1023,22];console.log(e),console.log(o(e)),setTimeout(o=>{console.log("A")},0);const l=new Promise(o=>o("success value"));l.then(o=>console.log(o));
},{}]},{},["yTJL"], null)
//# sourceMappingURL=/_binocular_sandbox_/script1.18c6c42a.js.map