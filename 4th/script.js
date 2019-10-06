// var sum = (a, b) => {
//     return a + b;
// }

// console.log(sum(1, 2));


// Fat Arrow Function Variations
// (a, b) => { return a + b };
// (a, b) => a + b;
// a => a;
// _ => 3;
// (a, b) => { return { name: a, age: b } };
// (a, b) => ({ name: a, age: b });


// function add(a) {
//     return function (b) {
//         return a + b;
//     }
// }


// var add = a => b => a + b;



// Default Values
// Old Way (ES5)
// function sum(a, b = 2) {
//     return a + b;
// }


// console.log(sum(1, [1, 2, 3]));

// var x = 8;
// function foo(x = 2, y = function () { return x }) {
//     var x = 5;
//     console.log(0, 'x', x);
//     console.log(0, 'y()', y());
// }

// foo();



// Spread, Rest Operators
// function foo(lang1, lang2, lang3) {
//     console.log(lang1, lang2, lang3);
// }

// var langs = ['JS', 'PERL', 'HASKELL'];
// foo(...langs);


// function getMax(a, ...args) {
//     console.log(args);
// }

// let nums = [1, 2, 3, 4, 5, 6]

// getMax(...nums);




// Destructuring
// let obj = {
//     name: 'Mohamed',
//     age: 13
// }

// var arr = null // [1, 2, 3];
// var [elm1, elm2, elm3 = 5] = arr || [];

// var { firstName: data = 'USER', age } = obj;


// console.log(data, age);
// console.log(elm1, elm2, elm3)


// function foo({ name, age = 15 }) {
//     console.log(name, age);
// }

// foo({ name: 'USER' });

// REACT HOOKS

// let [value, setFn] = useState(0);



// function useState(data) {
// DETAILS
// return [data, function useData() { }]
// }

// console.log(value);




// var arr = [{
//     id: 1,
//     price: 20
// },
// {
//     id: 2,
//     price: 80
// },
// {
//     id: 3,
//     price: 40
// }];

// let transormArr = arr
//     .map(item => item * 2)
//     .filter(item => item > 2)

// console.log(transormArr);

// let priceArr = arr
//     .map(item => item.price)
//     .filter(price => price > 20)
//     .map(price => price * 2);
// console.log(priceArr);


// let;
// function let() {}

// let let
















