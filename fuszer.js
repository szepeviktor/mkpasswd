function hex_md5(r){return rstr2hex(rstr_md5(str2rstr_utf8(r)))}function b64_md5(r){return rstr2b64(rstr_md5(str2rstr_utf8(r)))}function any_md5(r,t){return rstr2any(rstr_md5(str2rstr_utf8(r)),t)}function hex_hmac_md5(r,t){return rstr2hex(rstr_hmac_md5(str2rstr_utf8(r),str2rstr_utf8(t)))}function b64_hmac_md5(r,t){return rstr2b64(rstr_hmac_md5(str2rstr_utf8(r),str2rstr_utf8(t)))}function any_hmac_md5(r,t,n){return rstr2any(rstr_hmac_md5(str2rstr_utf8(r),str2rstr_utf8(t)),n)}function md5_vm_test(){return"900150983cd24fb0d6963f7d28e17f72"==hex_md5("abc").toLowerCase()}function rstr_md5(r){return binl2rstr(binl_md5(rstr2binl(r),8*r.length))}function rstr_hmac_md5(r,t){var n=rstr2binl(r);n.length>16&&(n=binl_md5(n,8*r.length));for(var e=Array(16),d=Array(16),o=0;o<16;o++)e[o]=909522486^n[o],d[o]=1549556828^n[o];var f=binl_md5(e.concat(rstr2binl(t)),512+8*t.length);return binl2rstr(binl_md5(d.concat(f),640))}function rstr2hex(r){for(var t,n=hexcase?"0123456789ABCDEF":"0123456789abcdef",e="",d=0;d<r.length;d++)t=r.charCodeAt(d),e+=n.charAt(t>>>4&15)+n.charAt(15&t);return e}function rstr2b64(r){for(var t="",n=r.length,e=0;e<n;e+=3)for(var d=r.charCodeAt(e)<<16|(e+1<n?r.charCodeAt(e+1)<<8:0)|(e+2<n?r.charCodeAt(e+2):0),o=0;o<4;o++)8*e+6*o>8*r.length?t+=b64pad:t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(d>>>6*(3-o)&63);return t}function rstr2any(r,t){var n,e,d,o,f,a=t.length,i=Array(Math.ceil(r.length/2));for(n=0;n<i.length;n++)i[n]=r.charCodeAt(2*n)<<8|r.charCodeAt(2*n+1);var m=Math.ceil(8*r.length/(Math.log(t.length)/Math.log(2))),_=Array(m);for(e=0;e<m;e++){for(f=Array(),o=0,n=0;n<i.length;n++)o=(o<<16)+i[n],o-=(d=Math.floor(o/a))*a,(f.length>0||d>0)&&(f[f.length]=d);_[e]=o,i=f}var h="";for(n=_.length-1;n>=0;n--)h+=t.charAt(_[n]);return h}function str2rstr_utf8(r){for(var t,n,e="",d=-1;++d<r.length;)t=r.charCodeAt(d),n=d+1<r.length?r.charCodeAt(d+1):0,55296<=t&&t<=56319&&56320<=n&&n<=57343&&(t=65536+((1023&t)<<10)+(1023&n),d++),t<=127?e+=String.fromCharCode(t):t<=2047?e+=String.fromCharCode(192|t>>>6&31,128|63&t):t<=65535?e+=String.fromCharCode(224|t>>>12&15,128|t>>>6&63,128|63&t):t<=2097151&&(e+=String.fromCharCode(240|t>>>18&7,128|t>>>12&63,128|t>>>6&63,128|63&t));return e}function str2rstr_utf16le(r){for(var t="",n=0;n<r.length;n++)t+=String.fromCharCode(255&r.charCodeAt(n),r.charCodeAt(n)>>>8&255);return t}function str2rstr_utf16be(r){for(var t="",n=0;n<r.length;n++)t+=String.fromCharCode(r.charCodeAt(n)>>>8&255,255&r.charCodeAt(n));return t}function rstr2binl(r){for(var t=Array(r.length>>2),n=0;n<t.length;n++)t[n]=0;for(n=0;n<8*r.length;n+=8)t[n>>5]|=(255&r.charCodeAt(n/8))<<n%32;return t}function binl2rstr(r){for(var t="",n=0;n<32*r.length;n+=8)t+=String.fromCharCode(r[n>>5]>>>n%32&255);return t}function binl_md5(r,t){r[t>>5]|=128<<t%32,r[14+(t+64>>>9<<4)]=t;for(var n=1732584193,e=-271733879,d=-1732584194,o=271733878,f=0;f<r.length;f+=16){var a=n,i=e,m=d,_=o;e=md5_ii(e=md5_ii(e=md5_ii(e=md5_ii(e=md5_hh(e=md5_hh(e=md5_hh(e=md5_hh(e=md5_gg(e=md5_gg(e=md5_gg(e=md5_gg(e=md5_ff(e=md5_ff(e=md5_ff(e=md5_ff(e,d=md5_ff(d,o=md5_ff(o,n=md5_ff(n,e,d,o,r[f+0],7,-680876936),e,d,r[f+1],12,-389564586),n,e,r[f+2],17,606105819),o,n,r[f+3],22,-1044525330),d=md5_ff(d,o=md5_ff(o,n=md5_ff(n,e,d,o,r[f+4],7,-176418897),e,d,r[f+5],12,1200080426),n,e,r[f+6],17,-1473231341),o,n,r[f+7],22,-45705983),d=md5_ff(d,o=md5_ff(o,n=md5_ff(n,e,d,o,r[f+8],7,1770035416),e,d,r[f+9],12,-1958414417),n,e,r[f+10],17,-42063),o,n,r[f+11],22,-1990404162),d=md5_ff(d,o=md5_ff(o,n=md5_ff(n,e,d,o,r[f+12],7,1804603682),e,d,r[f+13],12,-40341101),n,e,r[f+14],17,-1502002290),o,n,r[f+15],22,1236535329),d=md5_gg(d,o=md5_gg(o,n=md5_gg(n,e,d,o,r[f+1],5,-165796510),e,d,r[f+6],9,-1069501632),n,e,r[f+11],14,643717713),o,n,r[f+0],20,-373897302),d=md5_gg(d,o=md5_gg(o,n=md5_gg(n,e,d,o,r[f+5],5,-701558691),e,d,r[f+10],9,38016083),n,e,r[f+15],14,-660478335),o,n,r[f+4],20,-405537848),d=md5_gg(d,o=md5_gg(o,n=md5_gg(n,e,d,o,r[f+9],5,568446438),e,d,r[f+14],9,-1019803690),n,e,r[f+3],14,-187363961),o,n,r[f+8],20,1163531501),d=md5_gg(d,o=md5_gg(o,n=md5_gg(n,e,d,o,r[f+13],5,-1444681467),e,d,r[f+2],9,-51403784),n,e,r[f+7],14,1735328473),o,n,r[f+12],20,-1926607734),d=md5_hh(d,o=md5_hh(o,n=md5_hh(n,e,d,o,r[f+5],4,-378558),e,d,r[f+8],11,-2022574463),n,e,r[f+11],16,1839030562),o,n,r[f+14],23,-35309556),d=md5_hh(d,o=md5_hh(o,n=md5_hh(n,e,d,o,r[f+1],4,-1530992060),e,d,r[f+4],11,1272893353),n,e,r[f+7],16,-155497632),o,n,r[f+10],23,-1094730640),d=md5_hh(d,o=md5_hh(o,n=md5_hh(n,e,d,o,r[f+13],4,681279174),e,d,r[f+0],11,-358537222),n,e,r[f+3],16,-722521979),o,n,r[f+6],23,76029189),d=md5_hh(d,o=md5_hh(o,n=md5_hh(n,e,d,o,r[f+9],4,-640364487),e,d,r[f+12],11,-421815835),n,e,r[f+15],16,530742520),o,n,r[f+2],23,-995338651),d=md5_ii(d,o=md5_ii(o,n=md5_ii(n,e,d,o,r[f+0],6,-198630844),e,d,r[f+7],10,1126891415),n,e,r[f+14],15,-1416354905),o,n,r[f+5],21,-57434055),d=md5_ii(d,o=md5_ii(o,n=md5_ii(n,e,d,o,r[f+12],6,1700485571),e,d,r[f+3],10,-1894986606),n,e,r[f+10],15,-1051523),o,n,r[f+1],21,-2054922799),d=md5_ii(d,o=md5_ii(o,n=md5_ii(n,e,d,o,r[f+8],6,1873313359),e,d,r[f+15],10,-30611744),n,e,r[f+6],15,-1560198380),o,n,r[f+13],21,1309151649),d=md5_ii(d,o=md5_ii(o,n=md5_ii(n,e,d,o,r[f+4],6,-145523070),e,d,r[f+11],10,-1120210379),n,e,r[f+2],15,718787259),o,n,r[f+9],21,-343485551),n=safe_add(n,a),e=safe_add(e,i),d=safe_add(d,m),o=safe_add(o,_)}return Array(n,e,d,o)}function md5_cmn(r,t,n,e,d,o){return safe_add(bit_rol(safe_add(safe_add(t,r),safe_add(e,o)),d),n)}function md5_ff(r,t,n,e,d,o,f){return md5_cmn(t&n|~t&e,r,t,d,o,f)}function md5_gg(r,t,n,e,d,o,f){return md5_cmn(t&e|n&~e,r,t,d,o,f)}function md5_hh(r,t,n,e,d,o,f){return md5_cmn(t^n^e,r,t,d,o,f)}function md5_ii(r,t,n,e,d,o,f){return md5_cmn(n^(t|~e),r,t,d,o,f)}function safe_add(r,t){var n=(65535&r)+(65535&t);return(r>>16)+(t>>16)+(n>>16)<<16|65535&n}function bit_rol(r,t){return r<<t|r>>>32-t}function md5_to64(r,t){"use strict";var n,e="";for(void 0!==VarType&&(r=VarType.toUInt(r),t=VarType.toUInt(t)),n=t-1;n>=0;n-=1)e+="./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".charAt(63&r),r>>=6;return e}function md5_crypt(r,t){"use strict";var n,e;void 0!==VarType&&(r=VarType.toStr(r),t=VarType.toStr(t));var d=b64pad;b64pad="";"$1$"===t.substr(0,"$1$".length)&&(t=t.substr("$1$".length)),((n=t.indexOf("$"))<0||n>8)&&(n=8);var o=r+"$1$"+(t=t.substr(0,n)),f=rstr_md5(r+t+r);for(n=r.length;n>0;n-=16)o+=n>=16?f:f.substr(0,n);for(n=r.length;0!==n;n>>=1)o+=0!=(1&n)?String.fromCharCode(0):r.charAt(0);var a="$1$"+t+"$";for(f=rstr_md5(o),n=0;n<1e3;n+=1)o="",o+=0!=(1&n)?r:f,n%3!=0&&(o+=t),n%7!=0&&(o+=r),f=rstr_md5(o+=0!=(1&n)?f:r);for(f+=f.charAt(5),n=0;n<5;n+=1)a+=md5_to64(e=f.charCodeAt(n)<<16|f.charCodeAt(n+6)<<8|f.charCodeAt(n+12),4);return e=f.charCodeAt(11),a+=md5_to64(e,2),b64pad=d,a}function random_base64(r){"use strict";var t,n=[],e=0;for(t="./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),r=r||8,e=0;e<r;e+=1)n[e]=t[Math.floor(64*Math.random())];return n.join("")}var VarType=function(){"use strict";var r={};return r.isNull=function(r){return void 0===r||"object"==typeof r&&!r},r.toFloat=function(r){return r=Number(r)},r.toDecimal=function(r){return r=Number(r),isFinite(r)||(r=0),r},r.toInt=function(r){return r=Number(r),isFinite(r)||(r=0),r=Math.floor(r)},r.toUInt=function(r){return r=Number(r),isFinite(r)?r<0&&(r=0):r=0,r=Math.floor(r)},r.toStr=function(t){return r.isNull(t)&&(t=""),t=String(t)},r.toBool=function(r){return r=Boolean(r)},r.needObject=function(r){if("object"!=typeof r||!r)throw new TypeError},r.needInstanceOf=function(r,t){if("[object "+t+"]"!==Object.prototype.toString.call(r))throw new TypeError},r.needFunction=function(r){if("function"!=typeof r)throw new TypeError},r.needNode=function(t,n){if(r.needObject(t),r.isNull(r.nodeType))throw new TypeError;if(!r.isNull(n)&&(n=r.toInt(n),r.nodeType!==n))throw new TypeError},r}(),hexcase=0,b64pad="";!function(){"use strict";var r=document.querySelector("#password"),t=document.querySelector("#generate"),n=document.querySelector("#output");r.addEventListener("focus",function(){r.type="text"}),t.addEventListener("click",function(t){t.preventDefault(),r.type="password",n.value=md5_crypt(r.value,random_base64()),n.select()})}();