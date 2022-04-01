// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Number.NEGATIVE_INFINITY;var n=function(n){return 0===n&&1/n===r},t=function(r){return r.re},u=function(r){return r.im};var e=function(r,e){var o=t(r),a=u(r);return(e<0||n(e))&&(o=-o,a=-a),new r.constructor(o,a)};export{e as default};
//# sourceMappingURL=mod.js.map
