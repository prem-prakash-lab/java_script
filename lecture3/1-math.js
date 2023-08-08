//<-->Static properties<-->


// Math.E->𝙼𝚊𝚝𝚑.𝙴≈2.718
// The Math.E static data property represents Euler's number, the base of natural logarithms, e, which is approximately 2.718.
console.log(Math.E);

//𝙼𝚊𝚝𝚑.𝙻𝙽𝟷𝟶=ln(10)≈2.302
console.log(Math.LN10);

//𝙼𝚊𝚝𝚑.𝙻𝙽2=ln(2)≈0.693
console.log(Math.LN2);

//Math.LOG10E=log10(e)≈0.434
console.log(Math.LOG10E);

//Math.LOG2E=log2(e)≈1.443
console.log(Math.LOG2E);

//𝙼𝚊𝚝𝚑.𝙿𝙸≈3.14159
console.log(Math.PI);

//Math.SQRT1_2
console.log(Math.SQRT1_2);

//Math.SQRT2
console.log(Math.SQRT2);

//<-->Static methods<-->

// Math.abs()
// Returns the absolute value of x.
console.log(Math.abs(-Infinity)); // Infinity
console.log(Math.abs(-1)); // 1
console.log(Math.abs(-0)); // 0
console.log(Math.abs(0)); // 0
console.log(Math.abs(1)); // 1
console.log(Math.abs(Infinity)); // Infinity
console.log(Math.abs("-1")); // 1
console.log(Math.abs(-2)); // 2
console.log(Math.abs(null)); // 0
console.log(Math.abs("")); // 0
console.log(Math.abs([])); // 0
console.log(Math.abs([2])); // 2
console.log(Math.abs([1, 2])); // NaN
console.log(Math.abs({})); // NaN
console.log(Math.abs("string")); // NaN
console.log(Math.abs()); // NaN


// Math.acos()
// Returns the arccosine of x.
console.log(Math.acos(-2)); // NaN
console.log(Math.acos(-1)); // 3.141592653589793 (π)
console.log(Math.acos(0)); // 1.5707963267948966 (π/2)
console.log(Math.acos(0.5)); // 1.0471975511965979 (π/3)
console.log(Math.acos(1)); // 0
console.log(Math.acos(2));//NaN

// Math.acosh()
// Returns the hyperbolic arccosine of x.
console.log(Math.acosh(0.999999999999));// Expected output: NaN
console.log(Math.acosh(1));// Expected output: 0
console.log(Math.acosh(2));// Expected output: 1.3169578969248166
console.log(Math.acosh(2.5));// Expected output: 1.566799236972411

// Math.asin()
// Returns the arcsine of x.
console.log(Math.asin(-2)); // NaN
console.log(Math.asin(-1)); // -1.5707963267948966 (-π/2)
console.log(Math.asin(-0)); // -0
console.log(Math.asin(0)); // 0
console.log(Math.asin(0.5)); // 0.5235987755982989 (π/6)
console.log(Math.asin(1)); // 1.5707963267948966 (π/2)
console.log(Math.asin(2)); // NaN

// Math.asinh()
// Returns the hyperbolic arcsine of a number.
console.log(Math.asinh(1));// Expected output: 0.881373587019543
console.log(Math.asinh(0));// Expected output: 0
console.log(Math.asinh(-1));// Expected output: -0.881373587019543
console.log(Math.asinh(2));// Expected output: 1.4436354751788103

// Math.atan()
// Returns the arctangent of x.
console.log(Math.atan(-Infinity)); // -1.5707963267948966 (-π/2)
console.log(Math.atan(-0)); // -0
console.log(Math.atan(0)); // 0
console.log(Math.atan(1)); // 0.7853981633974483  (π/4)
console.log(Math.atan(Infinity)); // 1.5707963267948966  (π/2)

// Math.atan2()
// Returns the arctangent of the quotient of its arguments.
console.log(Math.atan2(90, 15)); // 1.4056476493802699
console.log(Math.atan2(15, 90)); // 0.16514867741462683

// Math.atanh()
// Returns the hyperbolic arctangent of x.
console.log(Math.atanh(-2)); // NaN
console.log(Math.atanh(-1)); // -Infinity
console.log(Math.atanh(-0)); // -0
console.log(Math.atanh(0)); // 0
console.log(Math.atanh(0.5)); // 0.5493061443340548
console.log(Math.atanh(1)); // Infinity
console.log(Math.atanh(2)); // NaN

// Math.cbrt()
// Returns the cube root of x.
console.log(Math.cbrt(-1));// Expected output: -1
console.log(Math.cbrt(1));// Expected output: 1
console.log(Math.cbrt(Infinity));// Expected output: Infinity
console.log(Math.cbrt(64));// Expected output: 4


// Math.ceil()
// Returns the smallest integer greater than or equal to x.
console.log(Math.ceil(0.95));// Expected output: 1

console.log(Math.ceil(4));// Expected output: 4

console.log(Math.ceil(7.004));// Expected output: 8

console.log(Math.ceil(-7.004));// Expected output: -7

// Math.clz32()
// Returns the number of leading zero bits of the 32-bit integer x.

// Math.cos()
// Returns the cosine of x.

// Math.cosh()
// Returns the hyperbolic cosine of x.

// Math.exp()
// Returns ex, where x is the argument, and e is Euler's number (2.718…, the base of the natural logarithm).

// Math.expm1()
// Returns subtracting 1 from exp(x).

// Math.floor()
// Returns the largest integer less than or equal to x.

// Math.fround()
// Returns the nearest single precision float representation of x.

// Math.hypot()
// Returns the square root of the sum of squares of its arguments.

// Math.imul()
// Returns the result of the 32-bit integer multiplication of x and y.

// Math.log()
// Returns the natural logarithm (㏒e; also, ㏑) of x.

// Math.log10()
// Returns the base-10 logarithm of x.

// Math.log1p()
// Returns the natural logarithm (㏒e; also ㏑) of 1 + x for the number x.

// Math.log2()
// Returns the base-2 logarithm of x.

// Math.max()
// Returns the largest of zero or more numbers.

// Math.min()
// Returns the smallest of zero or more numbers.

// Math.pow()
// Returns base x to the exponent power y (that is, xy).

// Math.random()
// Returns a pseudo-random number between 0 and 1.

// Math.round()
// Returns the value of the number x rounded to the nearest integer.
console.log(Math.round(0.9));// Expected output: 1

console.log(Math.round(5.95), Math.round(5.5), Math.round(5.05));// Expected output: 6 6 5

console.log(Math.round(-5.05), Math.round(-5.5), Math.round(-5.95));// Expected output: -5 -5 -6

// Math.sign()
// Returns the sign of the x, indicating whether x is positive, negative, or zero.
console.log(Math.sign(3)); // 1
console.log(Math.sign(-3)); // -1
console.log(Math.sign("-3")); // -1
console.log(Math.sign(0)); // 0
console.log(Math.sign(-0)); // -0
console.log(Math.sign(NaN)); // NaN
console.log(Math.sign("foo")); // NaN
console.log(Math.sign()); // NaN

// Math.sin()
// Returns the sine of x.
console.log(Math.sin(-Infinity)); // NaN
console.log(Math.sin(-0)); // -0
console.log(Math.sin(0)); // 0
console.log(Math.sin(1)); // 0.8414709848078965
console.log(Math.sin(Math.PI / 2)); // 1
console.log(Math.sin(Infinity)); // NaN

// Math.sinh()
// Returns the hyperbolic sine of x.
console.log(Math.sinh(-Infinity)); // -Infinity
console.log(Math.sinh(-0)); // -0
console.log(Math.sinh(0)); // 0
console.log(Math.sinh(1)); // 1.1752011936438014
console.log(Math.sinh(Infinity)); // Infinity

// Math.sqrt()
// Returns the positive square root of x.
console.log(Math.sqrt(-1)); // NaN
console.log(Math.sqrt(-0)); // -0
console.log(Math.sqrt(0)); // 0
console.log(Math.sqrt(1)); // 1
console.log(Math.sqrt(2)); // 1.414213562373095
console.log(Math.sqrt(9)); // 3
console.log(Math.sqrt(Infinity)); // Infinity

// Math.tan()
// Returns the tangent of x.
console.log(Math.tan(-Infinity)); // NaN
console.log(Math.tan(-0)); // -0
console.log(Math.tan(0)); // 0
console.log(Math.tan(1)); // 1.5574077246549023
console.log(Math.tan(Math.PI / 4)); // 0.9999999999999999 (Floating point error)
console.log(Math.tan(Infinity)); // NaN

// Math.tanh()
// Returns the hyperbolic tangent of x.
console.log(Math.tanh(-Infinity)); // -1
console.log(Math.tanh(-0)); // -0
console.log(Math.tanh(0)); // 0
console.log(Math.tanh(1)); // 0.7615941559557649
console.log(Math.tanh(Infinity)); // 1

// Math.trunc()
// Returns the integer portion of x, removing any fractional digits.
console.log(Math.trunc(-Infinity)); // -Infinity
console.log(Math.trunc("-1.123")); // -1
console.log(Math.trunc(-0.123)); // -0
console.log(Math.trunc(-0)); // -0
console.log(Math.trunc(0)); // 0
console.log(Math.trunc(0.123)); // 0
console.log(Math.trunc(13.37)); // 13
console.log(Math.trunc(42.84)); // 42
console.log(Math.trunc(Infinity)); // Infinity