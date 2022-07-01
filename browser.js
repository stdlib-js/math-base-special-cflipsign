// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,n;e=this,n=function(){"use strict";var e=Number.NEGATIVE_INFINITY,n=function(n){return 0===n&&1/n===e},t=function(e){return e.re},r=function(e){return e.im};return function(e,o){var i=t(e),u=r(e);return(o<0||n(o))&&(i=-i,u=-u),new e.constructor(i,u)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(e="undefined"!=typeof globalThis?globalThis:e||self).cflipsign=n();
//# sourceMappingURL=browser.js.map
