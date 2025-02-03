// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null,r=Object.defineProperty;function t(e){return"number"==typeof e}function n(e){var r,t="";for(r=0;r<e;r++)t+="0";return t}function i(e,r,t){var i=!1,a=r-e.length;return a<0||(function(e){return"-"===e[0]}(e)&&(i=!0,e=e.substr(1)),e=t?e+n(a):n(a)+e,i&&(e="-"+e)),e}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function c(e){var r,n,c;switch(e.specifier){case"b":r=2;break;case"o":r=8;break;case"x":case"X":r=16;break;default:r=10}if(n=e.arg,c=parseInt(n,10),!isFinite(c)){if(!t(n))throw new Error("invalid integer. Value: "+n);c=0}return c<0&&("u"===e.specifier||10!==r)&&(c=4294967295+c+1),c<0?(n=(-c).toString(r),e.precision&&(n=i(n,e.precision,e.padRight)),n="-"+n):(n=c.toString(r),c||e.precision?e.precision&&(n=i(n,e.precision,e.padRight)):n="",e.sign&&(n=e.sign+n)),16===r&&(e.alternate&&(n="0x"+n),n=e.specifier===o.call(e.specifier)?o.call(n):a.call(n)),8===r&&e.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var s=Math.abs,l=String.prototype.toLowerCase,p=String.prototype.toUpperCase,u=String.prototype.replace,f=/e\+(\d)$/,g=/e-(\d)$/,d=/^(\d+)$/,h=/^(\d+)e/,y=/\.0$/,b=/\.0*e/,w=/(\..*[^0])0*e/;function v(e){var r,n,i=parseFloat(e.arg);if(!isFinite(i)){if(!t(e.arg))throw new Error("invalid floating-point number. Value: "+n);i=e.arg}switch(e.specifier){case"e":case"E":n=i.toExponential(e.precision);break;case"f":case"F":n=i.toFixed(e.precision);break;case"g":case"G":s(i)<1e-4?((r=e.precision)>0&&(r-=1),n=i.toExponential(r)):n=i.toPrecision(e.precision),e.alternate||(n=u.call(n,w,"$1e"),n=u.call(n,b,"e"),n=u.call(n,y,""));break;default:throw new Error("invalid double notation. Value: "+e.specifier)}return n=u.call(n,f,"e+0$1"),n=u.call(n,g,"e-0$1"),e.alternate&&(n=u.call(n,d,"$1."),n=u.call(n,h,"$1.e")),i>=0&&e.sign&&(n=e.sign+n),n=e.specifier===p.call(e.specifier)?p.call(n):l.call(n)}function m(e){var r,t="";for(r=0;r<e;r++)t+=" ";return t}var _=String.fromCharCode,S=Array.isArray;function E(e){return e!=e}function k(e){var r={};return r.specifier=e.specifier,r.precision=void 0===e.precision?1:e.precision,r.width=e.width,r.flags=e.flags||"",r.mapping=e.mapping,r}function x(e){var r,t,n,a,o,s,l,p,u,f,g,d,h;if(!S(e))throw new TypeError("invalid argument. First argument must be an array. Value: `"+e+"`.");for(s="",l=1,p=0;p<e.length;p++)if("string"==typeof(n=e[p]))s+=n;else{if(r=void 0!==n.precision,!(n=k(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+p+"`. Value: `"+n+"`.");for(n.mapping&&(l=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(a=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===n.width){if(n.width=parseInt(arguments[l],10),l+=1,E(n.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(r&&"*"===n.precision){if(n.precision=parseInt(arguments[l],10),l+=1,E(n.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,r=!1)}switch(n.arg=arguments[l],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":r&&(n.padZeros=!1),n.arg=c(n);break;case"s":n.maxWidth=r?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!E(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=E(o)?String(n.arg):_(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":r||(n.precision=6),n.arg=v(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(f=n.arg,g=n.width,d=n.padRight,h=void 0,(h=g-f.length)<0?f:f=d?f+m(h):m(h)+f)),s+=n.arg||"",l+=1}return s}var F=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function j(e){var r={mapping:e[1]?parseInt(e[1],10):void 0,flags:e[2],width:e[3],precision:e[5],specifier:e[6]};return"."===e[4]&&void 0===e[5]&&(r.precision="1"),r}function A(e){var r,t,n,i;for(t=[],i=0,n=F.exec(e);n;)(r=e.slice(i,F.lastIndex-n[0].length)).length&&t.push(r),t.push(j(n)),i=F.lastIndex,n=F.exec(e);return(r=e.slice(i)).length&&t.push(r),t}function T(e){var r,t;if("string"!=typeof e)throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",e));for(r=[A(e)],t=1;t<arguments.length;t++)r.push(arguments[t]);return x.apply(null,r)}var I=Object.prototype,V=I.toString,$=I.__defineGetter__,O=I.__defineSetter__,C=I.__lookupGetter__,P=I.__lookupSetter__,R=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?r:function(e,r,t){var n,i,a,o;if("object"!=typeof e||null===e||"[object Array]"===V.call(e))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",e));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(C.call(e,r)||P.call(e,r)?(n=e.__proto__,e.__proto__=I,delete e[r],e[r]=t.value,e.__proto__=n):e[r]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&$&&$.call(e,r,t.get),o&&O&&O.call(e,r,t.set),e};function Z(e,r,t){R(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}function G(e,r){return r>0?0:(1-e)*r}function M(e,r,t,n,i,a,o,c,s,l,p){var u,f,g,d;if(e<=0)return c;for(u=n,f=o,g=l,d=0;d<e;d++)0===i[f]&&(c[g]=p(r[u])),u+=t,f+=a,g+=s;return c}function W(e,r,t,n,i,a,o,c){return M(e,r,t,G(e,t),n,i,G(e,i),a,o,G(e,o),c)}Z(W,"ndarray",M);var L="function"==typeof Math.fround?Math.fround:null,N="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),q=Object.prototype.toString,U=Object.prototype.hasOwnProperty,X="function"==typeof Symbol?Symbol:void 0,z="function"==typeof X?X.toStringTag:"",Y=N&&"symbol"==typeof Symbol.toStringTag?function(e){var r,t,n,i,a;if(null==e)return q.call(e);t=e[z],a=z,r=null!=(i=e)&&U.call(i,a);try{e[z]=void 0}catch(r){return q.call(e)}return n=q.call(e),r?e[z]=t:delete e[z],n}:function(e){return q.call(e)},B="function"==typeof Float32Array,D=Number.POSITIVE_INFINITY,H="function"==typeof Float32Array?Float32Array:null,J="function"==typeof Float32Array?Float32Array:void 0,K=new(function(){var e,r,t;if("function"!=typeof H)return!1;try{r=new H([1,3.14,-3.14,5e40]),t=r,e=(B&&t instanceof Float32Array||"[object Float32Array]"===Y(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===D}catch(r){e=!1}return e}()?J:function(){throw new Error("not implemented")})(1),Q="function"==typeof L?L:function(e){return K[0]=e,K[0]},ee=Math.sqrt;function re(e){return Q(1/ee(Q(e)))}function te(e,r,t,n,i,a,o){return W(e,r,t,n,i,a,o,re)}return Z(te,"ndarray",(function(e,r,t,n,i,a,o,c,s,l){return M(e,r,t,n,i,a,o,c,s,l,re)})),te},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).smskrsqrt=r();
//# sourceMappingURL=browser.js.map
