/*
* @license Apache-2.0
*
* Copyright (c) 2019 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 2.0

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Complex128 } from '@stdlib/types/object';

/**
* Returns a double-precision complex floating-point number with the same magnitude as `z` and the sign of `y*z`.
*
* @param z - input value
* @param y - number from which to derive the sign
* @returns result
*
* @example
* var Complex128 = require( `@stdlib/complex/float64` );
* var real = require( `@stdlib/complex/real` );
* var imag = require( `@stdlib/complex/imag` );
*
* var v = cflipsign( new Complex128( -4.2, 5.5 ), -55.0 );
* // returns <Complex128>
*
* var re = real( v );
* // returns 4.2
*
* var im = imag( v );
* // returns -5.5
*/
declare function cflipsign( z: Complex128, y: number ): Complex128;


// EXPORTS //

export = cflipsign;