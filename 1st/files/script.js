/**
 *
 *
 * Types & Grammar (V1)
 * Kyle Simpson
 *
 *
 */

// var a = 'Ahmed';
// a = [1, 2, 3];


// function sum(a, b) {
//     return a + b;
// }


/**
 *
 * Types

 ** Primitive Types:
 *  Number
 *  String
 *  Boolean
 *
 *  * Non Primitive Type
 *  Undefined
 *  Object
 *  Function
 *
 *  Symbol ES6
 *
 */

// var a = 2;
// var a = 'ahmed';
// var a = true;
// var a = null;
// console.log(0, typeof a);



/**'
 *
 * Number
 *
 *
 */

// var a = Number('2'); // Explicit
// var a = '1' - 0; Implicit
// var a = '1' * 1; Implicit
// var a = '1' / 1; Implicit
// var a = +'1'; // Implicit
// console.log(0, Number(a)); // Explicit Conversion
// console.log(0, a);




// console.log(0, Number(1))
// console.log(0, Number(0))
// console.log(0, Number('0'))
// console.log(0, Number('foo'))
// console.log(0, Number('bar'))
// console.log(0, Number('0100'))
// console.log(0, Number('0b0100'))
// console.log(0, Number('0a0100'))
// console.log(0, Number('0xAB'))
// console.log(0, Number('0yAB'))
// console.log(0, Number(true))
// console.log(0, Number(false))
// console.log(0, Number(null))
// console.log(0, Number(undefined))
// console.log(0, Number({}))
// console.log(0, Number([5]))
// console.log(0, Number([1, 2, 3, 3]))
// console.log(0, Number([1, 2, 3, , 3, 3]))
// console.log(0, Number([1, 2, 3, , 3, [[[[[[[3]]]]]]]]))
// console.log(0, Number([1, , , , , , , , , , , , , , 6]))
// console.log(0, Number([[[[[[[[[[[5]]]]]]]]]]]))
// console.log(0, Number([[[[[[[1, 2, 3[[[[5]]]]]]]]]]]))
// console.log(0, Number([,]))



/**
 *
 * NaN
 *
 */

// var a = 'a' / 1;
// NaN ==> Not a Number
// console.log(0, typeof NaN);


// console.log(0, isNaN(1));
// console.log(0, isNaN(0))
// console.log(0, isNaN('0'))
// console.log(0, isNaN('foo'))
// console.log(0, isNaN('bar'))
// console.log(0, isNaN(1 / 'a'))
// console.log(0, isNaN('0100'))
// console.log(0, isNaN('0b0100'))
// console.log(0, isNaN('0a0100'))
// console.log(0, isNaN('0xAB'))
// console.log(0, isNaN('0yAB'))
// console.log(0, isNaN(true))
// console.log(0, isNaN(false))
// console.log(0, isNaN(null))
// console.log(0, isNaN(undefined))
// console.log(0, isNaN({}))
// console.log(0, isNaN([5]))
// console.log(0, isNaN([1, 2, 3, 3]))
// console.log(0, isNaN([1, 2, 3, , 3, 3]))
// console.log(0, isNaN([1, 2, 3, , 3, [[[[[[[3]]]]]]]]))
// console.log(0, isNaN([1, , , , , , , , , , , , , , 6]))
// console.log(0, isNaN([[[[[[[[[[[5]]]]]]]]]]]))
// console.log(0, isNaN([[[[[[[1, 2, 3[[[[5]]]]]]]]]]]))
// console.log(0, isNaN([,]))

/**
 *
 * Polyfills
 * Ponyfills
 *
 */
// Polyfills
// Number.isNaN = function () {


// }
// PonyFill
// function checkNaN(value) {
//     return value != value;
// }


// console.log(0, checkNaN(NaN))
// console.log(0, checkNaN(1 / 'a'))
// console.log(0, checkNaN(1));
// console.log(0, checkNaN(0))
// console.log(0, checkNaN('0'))
// console.log(0, checkNaN('foo'))
// console.log(0, checkNaN('bar'))
// console.log(0, checkNaN('0100'))
// console.log(0, checkNaN('0b0100'))
// console.log(0, checkNaN('0a0100'))
// console.log(0, checkNaN('0xAB'))
// console.log(0, checkNaN('0yAB'))
// console.log(0, checkNaN(true))
// console.log(0, checkNaN(false))
// console.log(0, checkNaN(null))
// console.log(0, checkNaN(undefined))
// console.log(0, checkNaN({}))
// console.log(0, checkNaN([5]))
// console.log(0, checkNaN([1, 2, 3, 3]))
// console.log(0, checkNaN([1, 2, 3, , 3, 3]))
// console.log(0, checkNaN([1, 2, 3, , 3, [[[[[[[3]]]]]]]]))
// console.log(0, checkNaN([1, , , , , , , , , , , , , , 6]))
// console.log(0, checkNaN([[[[[[[[[[[5]]]]]]]]]]]))
// console.log(0, checkNaN([[[[[[[1, 2, 3[[[[5]]]]]]]]]]]))
// console.log(0, checkNaN([,]))


// Number.isNaN === checkNaN
// console.log(0, Number.isNaN(NaN))
// console.log(0, Number.isNaN(1 / 'a'))
// console.log(0, Number.isNaN(1));
// console.log(0, Number.isNaN(0))
// console.log(0, Number.isNaN('0'))
// console.log(0, Number.isNaN('foo'))
// console.log(0, Number.isNaN('bar'))
// console.log(0, Number.isNaN('0100'))
// console.log(0, Number.isNaN('0b0100'))
// console.log(0, Number.isNaN('0a0100'))
// console.log(0, Number.isNaN('0xAB'))
// console.log(0, Number.isNaN('0yAB'))
// console.log(0, Number.isNaN(true))
// console.log(0, Number.isNaN(false))
// console.log(0, Number.isNaN(null))
// console.log(0, Number.isNaN(undefined))
// console.log(0, Number.isNaN({}))
// console.log(0, Number.isNaN([5]))
// console.log(0, Number.isNaN([1, 2, 3, 3]))
// console.log(0, Number.isNaN([1, 2, 3, , 3, 3]))
// console.log(0, Number.isNaN([1, 2, 3, , 3, [[[[[[[3]]]]]]]]))
// console.log(0, Number.isNaN([1, , , , , , , , , , , , , , 6]))
// console.log(0, Number.isNaN([[[[[[[[[[[5]]]]]]]]]]]))
// console.log(0, Number.isNaN([[[[[[[1, 2, 3[[[[5]]]]]]]]]]]))
// console.log(0, Number.isNaN([,]))
/**
 *
 *
 * String
 *
 */

// var a = 2 + ''; // Implicit
// console.log(0, String(a)); // Explicit
// console.log(0, String(a)); // Explicit


// console.log(0, String(1))
// console.log(0, String(0))
// console.log(0, String('0'))
// console.log(0, String('foo'))
// console.log(0, String('bar'))
// console.log(0, String('0100'))
// console.log(0, String('0b0100'))
// console.log(0, String('0a0100'))
// console.log(0, String('0xAB'))
// console.log(0, String('0yAB'))
// console.log(0, String(true))
// console.log(0, String(false))
// console.log(0, String(null))
// console.log(0, String(undefined))
// console.log(0, String(NaN))
// console.log(0, String([5]))
// console.log(0, String([1, 2, 3]))
// console.log(0, String([null]))
// console.log(0, String([undefined]))
// console.log(0, String([undefined, null]))
// console.log(0, String([0, null]))
// console.log(0, String([undefined, null, NaN]))
// console.log(0, String([undefined]))
// console.log(0, String([null]))
// console.log(0, String([null, 3]))
// console.log(0, String([undefined, 3]))
// console.log(0, String([, , , ,]))
// console.log(0, String([5, null, undefined, [1, 2, 3, undefined]]))
// console.log(0, String([1, 2, 3, 3]))
// console.log(0, String([1, 2, 3, , 3, 3]))
// console.log(0, String([1, 2, 3, , 3, [[[[[[[3]]]]]]]]))
// console.log(0, String([1, , , , , , , , , , , , , , 6]))
// console.log(0, String([[[[[[[[[[[5]]]]]]]]]]]))


// console.log(0, String({
//     name: 'Ahmed',
//     value: {
//         age: 13,
//         numbers: [undefined, null, 1, 2, 3, [[[[[[5]]]]]]],
//         data: [NaN]
//     }
// }))




// Inteview Question
// var a = "b" + "a" +  (+"a") + "a";
// console.log(0, a); 

// var a = {};
// var b = { key: 123 };
// var c = { key: 159 };

// a[{ key: 123 }] = 589;
// a[c] = 789;

// console.log(0, a);


/**
 *
 * Boolean
 *
 *
 * Falsy Table                           Truthy Table
 * null
 * undefined
 * NaN
 * false
 * 0, -0
 * ''
 *
 *
 *
 */

// var a = 1; 
// var a = !!2; // Implicit
// console.log(0, Boolean(a)); // Explicit
// console.log(0, a);



// console.log(0, Boolean(1))
// console.log(0, Boolean('0'))
// console.log(0, Boolean('foo'))
// console.log(0, Boolean('bar'))
// console.log(0, Boolean('0100'))
// console.log(0, Boolean('0b0100'))
// console.log(0, Boolean('0a0100'))
// console.log(0, Boolean('0xAB'))
// console.log(0, Boolean('0yAB'))
// console.log(0, Boolean(true))

// console.log(0, Boolean(0))
// console.log(0, Boolean(''))
// console.log(0, Boolean(false))
// console.log(0, Boolean(null))
// console.log(0, Boolean(undefined))
// console.log(0, Boolean(NaN))
// console.log(0, Boolean([]))
// console.log(0, Boolean([5]))
// console.log(0, Boolean([1, 2, 3]))
// console.log(0, Boolean([0]))
// console.log(0, Boolean([false]))
// console.log(0, Boolean([null]))
// console.log(0, Boolean([undefined]))
// console.log(0, Boolean([undefined, null]))
// console.log(0, Boolean([0, null]))
// console.log(0, Boolean([undefined, null, NaN]))
// console.log(0, Boolean([undefined]))
// console.log(0, Boolean([null]))
// console.log(0, Boolean([null, 3]))
// console.log(0, Boolean([undefined, 3]))
// console.log(0, Boolean([,]))
// console.log(0, Boolean([5, null, undefined, [1, 2, 3, undefined]]))
// console.log(0, Boolean([1, 2, 3, 3]))
// console.log(0, Boolean([1, 2, 3, , 3, 3]))
// console.log(0, Boolean([1, 2, 3, , 3, [[[[[[[3]]]]]]]]))
// console.log(0, Boolean([1, , , , , , , , , , , , , , 6]))
// console.log(0, Boolean([[[[[[[[[[[5]]]]]]]]]]]))
// console.log(0, Boolean({}))
// console.log(0, Boolean({ key: 123 }))


// var a = (![] + [])[+[]] +
//     (![] + [])[+!+[]] +
// ([![]] + [][[]])[+!+[] + [+[]]] +
//     (![] + [])[!+[] + !+[]];

// console.log(0, a);


// var a = 2;

// console.log(0, typeof a);
// var a;
// console.log(0, typeof a);
// var c = {};
// console.log(0, typeof c);
// console.log(0, typeof typeof c);





/**
 * 
 * 
 * Types & Grammar
 * Specs ES ==> Section 11.9
 * 
 * Abstarct Equality ALgorithm == 
 * Strict Equality Algorithm ===
 * 
 * 
 * 
 */


/**
 * 
 * Abstract Equality Algorithm
 * 
 * * == *
 * Number == * -> Number
 * * == Number --> * --> Number
 * 
 * 
 */

/**
 * 
 * Rule 1: Number vs. String
 * 
 * 
 */

// var a = '' == 0;
// var a = '0' == 0;
// console.log(0, a);



/**
 * 
 * 
 * Rule 2: Number vs. Boolean
 * 
 */

// var a = 0 == false;
// console.log(0, a);



/**
 * 
 * 
 * Rule 3: String vs. Boolean
 * 
 */


// var a = false == '';
// console.log(0, a);




/**
 * 
 * Non-Primitive Rules
 * Object
 * 
 * Non-Primitive
 * valueOf
 * toString === String()
 * 
 * 
 */

// var a = [false] == 'false';
// console.log(0, a);


/**
 * 
 * Rule of [undefined, null]
 *          X vs Y
 *          X --> undefined or null
 *          to evalaute to true ---> Y = undefined, null
 *          else false
 * 
 * 
 */


// console.log(0 == []);
// console.log(0 == {});
// console.log(0 == [0]);
// console.log(0 == undefined)
// console.log(0 == null)
// console.log('0' == null)
// console.log('0' == undefined)
// console.log('0' == false)
// console.log(0 == false)
// console.log('0' == [0]);
// console.log(null == null);
// console.log(null == undefined);
// console.log(undefined == undefined);
// console.log(false == undefined);
// console.log(false == null);
// console.log('' == 0);
// console.log('' == false);
// console.log('' == []);
// console.log('' == {});
// console.log('' == [0]);
// console.log('' == null);
// console.log('' == undefined);
// console.log([null] == null);
// console.log([null, undefined] == ',');


/**
 * 
 * Non-Primitives
 * 
 * Compares By reference
 * 
 * 
 */

// var a = [];
// console.log(0, a == []); // false
// console.log(0, a == a);


// console.log(3 < 2 < 1);


























