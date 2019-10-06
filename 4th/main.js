function sum(a,b) {
    return a + b;
}


function sum(a, b) {
    b = b !== undefined ? b : 2;
    return a + b;
}



function getMax() {
    let nums = [];
    for(let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
        nums.push(arguments[i]);
    }
    return nums;
}




let obj = {
    name: 'Mohamed',
    age: 13
}

var arr = [1,2,3];


var elm1 = arr[0];
var elm2 = arr[1];
var elm3 = arr[2];

var name = obj.name;
var age = obj.age;


console.log(name, age, elm1, elm2, elm3);