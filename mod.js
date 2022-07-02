// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.NEGATIVE_INFINITY;var n=function(n){return 0===n&&1/n===r};var t=function(r){return r.re};var u=function(r){return r.im};function e(r,e){var a=t(r),o=u(r);return(e<0||n(e))&&(a=-a,o=-o),new r.constructor(a,o)}export{e as default};
//# sourceMappingURL=mod.js.map
