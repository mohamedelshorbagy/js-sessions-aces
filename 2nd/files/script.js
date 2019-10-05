

/**
 * 
 * Hoisting
 * 
 * 
 */

// a = 2;
// console.log(a);
// let a;
// function foo() {
//     function bar() {
//         return 8;
//     }
//     var bar;
//     console.log(bar());
//     var bar = function () {
//         return 3;
//     }
//     console.log(bar());
// }

// foo();


/**
 * 
 * 
 * Scope Manager & Compiler Conversation
 * 
 * 
 */


// 'use strict';
// var a = 10;
// function foo() {
//     var a = 8;    
//     function bar(c) {
//         console.log(a, b, c);
//     }
//     var b = 8;
//     bar(b * 4);
// }


// foo();
// console.log(a);


/**
 * 
 * Closure ==> Math
 * 
 */


// var x = 8;

// function foo() {
//     var x = 3;
//     function bar() {
//         return x;
//     }
//     return bar;
// }


// var data = foo();
// console.log(data);




// console.log(1);
// setTimeout(function () {
//     console.log(2);
// }, 0);
// console.log(3);



// for (var i = 0; i < 5; i++) {
//     function execute(j) {
//         setTimeout(function () {
//             console.log(j);
//         }, j * 1000);
//     }
//     execute(i);
// }


/**
 * 
 * IIFE ==> Immeditely Invoked Function Expression
 * 
 */


// (function IIFE() {
//     console.log(3);
// })()


/**
 * 
 * Interview Question
 * 
 */
// 'use strict';
// (function IIFE() {
//     var a = b = 3;
// })()

// console.log('Value of B', b);
// console.log('Value of A', a);


// for (var i = 0; i < 5; i++) {
//     (function execute(j) {
//         setTimeout(function () {
//             console.log(j);
//         }, j * 1000);
//     })(i)
// }


// for (var i = 0; i < 5; i++) {
//     setTimeout(function (i) {
//         console.log(i);
//     }, i * 1000, i);
// }




// for (let i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, i * 1000);
// }

// TDZ ==> Temporal Dead Zone

// a = 2;
// let a;
// console.log(a);
// const a = [2];
// a[0]++;
// a.push(5);
// a = [456]
// console.log(a);



// for (let i = 0; i < 2; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 0);
//     i++;
// }





// for (let i = (
//     setTimeout(function () { console.log(i) }) , 0
// );
//     i < 2;
//     i++
// ) {
//     // console.log(i);
//     i++;
// }


// console.log(setTimeout(function () { console.log('FIRST') }));
// setTimeout(function () { console.log('SECOND') })

// for (let i = setTimeout(function () { console.log(i) });
//     i < 2;
//     i++
// ) {
//     i++;
// }






















