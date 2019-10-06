/**
 * 
 * 
 * 
 */

// function sum(a, b, callbackFn /* Function */) {
//     callbackFn(new Error('Something went wrong!'), a + b);
// }

// sum(1, 2, function (err, result /*   a + b */) {
//     if (err) { throw err; }
//     else {
//         console.log(result);
//     }
// });

// function add(a, b) {
//     if (b) {
//         return a + b;
//     } else {
//         return function (c) {
//             return a + c;
//         }
//     }

// }

// Currying --> Functional Programming
// let result = add(1)(2);
// console.log(result);


// connect(mapStateToProps, mapDisptachToprops)(App)



var arr = [4, 5, 6, 7, 8];

// arr.forEach(function (value, index) {
//     setTimeout(function () {
//         console.log(value, index);
//     }, index * 1000);
// })
// C++11
// for (let index in arr) {
//     let item = arr[index];
//     console.log(0, item);
// }

// let user = {
//     name: 'Moahemd',
//     age: 23
// }

// for (let key in user) {
//     console.log(0, key);
// }

// for (let [index, value] of Object.entries(arr)) {
//     console.log(index, value);
// }


/**
 * 
 *
 * * This // this & _prototype 
 *  1. Implicit Binding 
 *  2. Explicit Binding 
 *  3. global/window Object 
 *  4. new (this)
 *  5. Lexical this => (Fat Arrow Function)
 * 
 */


// function foo() {
//     console.log(this.bar);
// }

// var bar = 'windowBar'
// var obj = {
//     bar: 'Ahmed',
//     foo: foo
// }


// var obj2 = {
//     bar: 'Ahmed2',
//     foo: foo
// }

// foo(); //?
// obj.foo(); //?
// obj2.foo(); //?


// var user = 'Mohamed';
// var obj = {
//     user: 'Ahmed',
//     greet: function () {
//         console.log(this.user);
//     },
//     moderator: {
//         user: 'Mod',
//         greet: function () {
//             console.log(this.user);
//         }
//     }
// }
// var greet = obj.greet;

// greet();
// obj.greet();
// obj.moderator.greet();





// 'use strict';
// var user = "Mohamed";


// function foo(lang1, lang2, lang3, name) {
//     console.log(this.user);
//     console.log(lang1, lang2, lang3);
//     console.log(name);
// }

// let user = "Mohamed";
// var obj = {
//     user: 'Ahmed',
// }
// var user = "oooo";

// var obj2 = {
//     user: 'Mahmoud'
// }
// let langauges = ['JS', 'PERL', 'Haskell']
// foo.call(obj, langauges[0], langauges[1], langauges[2]);
// foo.apply(obj, langauges);
// Math.max.apply(undefined, [1,5,6,20,4,9])
// foo.call(obj2);
// let fooBind = foo.bind(undefined, langauges[0], langauges[1], langauges[2]);

// fooBind.bind({
//     user: 'user'
// })();


// Constructor Function

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }



// let user = new User('Ahmed', 13);
// console.log(user)

























